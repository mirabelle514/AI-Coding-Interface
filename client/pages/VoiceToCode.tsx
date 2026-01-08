import Header from "@/components/Header";
import { Mic, Volume2, Code2, Copy, Check, AlertCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

export default function VoiceToCode() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [language, setLanguage] = useState("JavaScript");
  const [inputLanguage, setInputLanguage] = useState("English (US)");
  const [browserSupport, setBrowserSupport] = useState<string | null>(null);
  const [permissionStatus, setPermissionStatus] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Check browser support
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      const errorMsg = "Speech Recognition not supported in your browser. Use Chrome, Edge, or Safari.";
      setBrowserSupport(errorMsg);
      toast.error(errorMsg);
      return;
    }

    setBrowserSupport("Browser supports Speech Recognition");

    // Check microphone permission
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({ name: "microphone" as any }).then((result) => {
        setPermissionStatus(`Microphone permission: ${result.state}`);
        if (result.state === "denied") {
          toast.error("Microphone permission denied. Please enable it in browser settings.");
        }

        // Listen for permission changes
        result.addEventListener("change", () => {
          setPermissionStatus(`Microphone permission: ${result.state}`);
        });
      }).catch(() => {
        setPermissionStatus("Unable to check microphone permission");
      });
    }

    // Initialize speech recognition
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = "en-US";

    recognitionRef.current.onstart = () => {
      console.log("Speech recognition started");
      setTranscript("");
      setPermissionStatus("Recording active - microphone is listening");
    };

    recognitionRef.current.onresult = (event: any) => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcriptSegment = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
          setTranscript((prev) => prev + transcriptSegment + " ");
        } else {
          interimTranscript += transcriptSegment;
        }
      }

      if (interimTranscript) {
        setTranscript((prev) => {
          const final = prev;
          return final + interimTranscript;
        });
      }
    };

    recognitionRef.current.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);

      if (event.error === "no-speech") {
        toast.error("No speech detected. Please speak louder or clearer.");
      } else if (event.error === "network") {
        toast.error("Network error. Check your internet connection.");
      } else if (event.error === "permission-denied") {
        setPermissionStatus("Permission denied - you blocked microphone access");
        toast.error("Microphone permission denied. Please allow microphone access in browser settings.");
      } else if (event.error === "not-allowed") {
        setPermissionStatus("Not allowed - check browser permissions");
        toast.error("Microphone access not allowed. Check your browser settings.");
      } else {
        toast.error(`Speech recognition error: ${event.error}`);
      }
    };

    recognitionRef.current.onend = () => {
      console.log("Speech recognition ended");
      setIsRecording(false);
      setPermissionStatus("Recording stopped");
    };

    return () => {
      recognitionRef.current?.abort();
    };
  }, []);

  const handleStartStop = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);

      if (transcript.trim()) {
        generateCode();
      }
    } else {
      setTranscript("");
      setGeneratedCode("");
      recognitionRef.current?.start();
      setIsRecording(true);
    }
  };

  const generateCode = async () => {
    if (!transcript.trim()) {
      toast.error("No speech detected. Please try again.");
      return;
    }

    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (!apiKey) {
      toast.error(
        "OpenAI API key not found. Add VITE_OPENAI_API_KEY to .env.local"
      );
      return;
    }

    setIsGenerating(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4-turbo-preview",
          messages: [
            {
              role: "system",
              content: `You are a code generation expert. Generate clean, production-ready ${language} code based on the user's description. Only return the code with minimal comments. No explanations.`,
            },
            {
              role: "user",
              content: transcript,
            },
          ],
          temperature: 0.7,
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        if (error.error?.message?.includes("API key")) {
          toast.error("Invalid OpenAI API key. Check your .env.local file.");
        } else {
          toast.error(`OpenAI error: ${error.error?.message || "Unknown error"}`);
        }
        setIsGenerating(false);
        return;
      }

      const data = await response.json();
      const code = data.choices[0].message.content;

      setGeneratedCode(code);
      toast.success("Code generated successfully!");
    } catch (error: any) {
      console.error("Error generating code:", error);
      toast.error(
        error.message ||
          "Failed to generate code. Check your internet and API key."
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    if (!generatedCode) return;

    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    toast.success("Code copied to clipboard!");

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-atelier-bg">
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="container max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 animate-slide-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-atelier-primary/10 border border-atelier-border mb-6">
              <Mic className="w-4 h-4 text-atelier-primary" />
              <span className="text-xs font-semibold text-atelier-primary uppercase tracking-wide">
                Voice-to-Code
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-atelier-text mb-4">
              Speech Recognition for Code
            </h1>
            <p className="text-base text-atelier-text-muted max-w-2xl">
              Transform your spoken words into clean, production-ready code using advanced speech recognition and AI-powered code generation.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left: Controls */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Recording Button */}
                <div className="p-6 rounded-md border border-atelier-border bg-atelier-surface">
                  <h3 className="font-semibold text-atelier-text mb-4">
                    Voice Control
                  </h3>
                  <button
                    onClick={handleStartStop}
                    disabled={isGenerating}
                    className={`w-full py-3 rounded-md font-semibold transition-all flex items-center justify-center gap-2 ${
                      isRecording
                        ? "bg-atelier-error/20 text-atelier-error border border-atelier-error/50 animate-pulse"
                        : "bg-atelier-primary/20 text-atelier-primary border border-atelier-primary/50 hover:bg-atelier-primary/30"
                    } ${
                      isGenerating ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <Mic className="w-5 h-5" />
                    {isRecording
                      ? "Stop Recording"
                      : isGenerating
                        ? "Generating..."
                        : "Start Recording"}
                  </button>
                  {isRecording && (
                    <div className="mt-4 p-3 rounded-md bg-atelier-error/10 border border-atelier-error/20">
                      <p className="text-xs text-atelier-error flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-atelier-error animate-pulse" />
                        Recording active...
                      </p>
                    </div>
                  )}
                  {isGenerating && (
                    <div className="mt-4 p-3 rounded-md bg-atelier-primary/10 border border-atelier-primary/20">
                      <p className="text-xs text-atelier-primary flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-atelier-primary animate-pulse" />
                        Generating code with AI...
                      </p>
                    </div>
                  )}
                </div>

                {/* Settings */}
                <div className="p-6 rounded-md border border-atelier-border bg-atelier-surface">
                  <h3 className="font-semibold text-atelier-text mb-4">
                    Settings
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-medium text-atelier-text-muted">
                        Input Language
                      </label>
                      <select
                        value={inputLanguage}
                        onChange={(e) => setInputLanguage(e.target.value)}
                        className="w-full mt-2 px-3 py-2 rounded-md border border-atelier-border bg-atelier-bg text-atelier-text"
                      >
                        <option>English (US)</option>
                        <option>English (UK)</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-atelier-text-muted">
                        Code Language
                      </label>
                      <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="w-full mt-2 px-3 py-2 rounded-md border border-atelier-border bg-atelier-bg text-atelier-text"
                      >
                        <option>JavaScript</option>
                        <option>TypeScript</option>
                        <option>Python</option>
                        <option>Go</option>
                        <option>Rust</option>
                        <option>Java</option>
                        <option>C++</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Main Editor Area */}
            <div className="lg:col-span-2">
              {/* Transcription Panel */}
              <div className="p-6 rounded-md border border-atelier-border bg-atelier-surface mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Volume2 className="w-5 h-5 text-atelier-secondary" />
                  <h3 className="font-semibold text-atelier-text">
                    Transcription
                  </h3>
                </div>
                <div className="p-4 rounded-md bg-atelier-bg min-h-20 flex items-center text-atelier-text border border-dashed border-atelier-border overflow-y-auto max-h-32">
                  {transcript ? (
                    <p className="text-sm">{transcript}</p>
                  ) : (
                    <p className="text-center text-sm text-atelier-text-muted w-full">
                      {isRecording
                        ? "Listening... speak now"
                        : 'Press "Start Recording" and speak to generate code'}
                    </p>
                  )}
                </div>
              </div>

              {/* Generated Code Panel */}
              <div className="p-6 rounded-md border border-atelier-border bg-atelier-surface">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-5 h-5 text-atelier-primary" />
                  <h3 className="font-semibold text-atelier-text">
                    Generated Code
                  </h3>
                </div>
                <pre className="p-4 rounded-md bg-atelier-bg text-xs font-mono text-atelier-text overflow-x-auto min-h-48 border border-atelier-border">
                  <code>
                    {generatedCode ||
                      `// Generated code will appear here\n// 1. Click "Start Recording"\n// 2. Speak your code request\n// 3. Stop recording\n// 4. AI will generate code\n\n// Example:\n// Say: "Create a function that checks if a number is prime"\n// Result: Clean, working code appears here`}
                  </code>
                </pre>
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={copyToClipboard}
                    disabled={!generatedCode}
                    className={`px-4 py-2 rounded-md font-semibold transition-colors duration-200 text-sm flex items-center gap-2 ${
                      !generatedCode
                        ? "bg-atelier-primary/30 text-atelier-primary/60 cursor-not-allowed"
                        : "bg-atelier-primary text-atelier-bg hover:bg-atelier-primary-hover"
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Code
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Real-time Recognition",
                description: "Instant speech-to-text conversion with minimal latency",
              },
              {
                title: "Smart Generation",
                description: "AI-powered code generation from natural language",
              },
              {
                title: "Multi-language",
                description: "Support for multiple programming languages",
              },
              {
                title: "Context Aware",
                description: "Understands code patterns and best practices",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-4 rounded-md border border-atelier-border bg-atelier-surface hover:border-atelier-primary hover:bg-atelier-surface-elevated transition-all duration-200"
              >
                <h4 className="font-semibold text-atelier-text mb-2 text-sm">
                  {feature.title}
                </h4>
                <p className="text-xs text-atelier-text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Setup Required Notice */}
          {!import.meta.env.VITE_OPENAI_API_KEY && (
            <div className="mt-12 p-6 rounded-md border border-atelier-error/50 bg-atelier-error/10">
              <h3 className="font-semibold text-atelier-error mb-2">
                Setup Required: Add OpenAI API Key
              </h3>
              <p className="text-sm text-atelier-text-muted mb-4">
                To use this prototype, you need to add your OpenAI API key:
              </p>
              <ol className="text-sm text-atelier-text-muted space-y-2 ml-4 list-decimal">
                <li>Get an API key from{" "}
                  <a
                    href="https://platform.openai.com/api-keys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-atelier-primary hover:underline"
                  >
                    OpenAI
                  </a>
                </li>
                <li>Create a .env.local file in project root</li>
                <li>Add: VITE_OPENAI_API_KEY=sk-your-key-here</li>
                <li>Restart the dev server</li>
              </ol>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
