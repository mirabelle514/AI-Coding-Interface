import Header from "@/components/Header";
import { Mic, Volume2, Code2 } from "lucide-react";
import { useState } from "react";

export default function VoiceToCode() {
  const [isRecording, setIsRecording] = useState(false);

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
                    onClick={() => setIsRecording(!isRecording)}
                    className={`w-full py-3 rounded-md font-semibold transition-all flex items-center justify-center gap-2 ${
                      isRecording
                        ? "bg-atelier-error/20 text-atelier-error border border-atelier-error/50 animate-pulse"
                        : "bg-atelier-primary/20 text-atelier-primary border border-atelier-primary/50 hover:bg-atelier-primary/30"
                    }`}
                  >
                    <Mic className="w-5 h-5" />
                    {isRecording ? "Stop Recording" : "Start Recording"}
                  </button>
                  {isRecording && (
                    <div className="mt-4 p-3 rounded-md bg-atelier-error/10 border border-atelier-error/20">
                      <p className="text-xs text-atelier-error flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-atelier-error animate-pulse" />
                        Recording active...
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
                        Language
                      </label>
                      <select className="w-full mt-2 px-3 py-2 rounded-md border border-atelier-border bg-atelier-bg text-atelier-text">
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
                      <select className="w-full mt-2 px-3 py-2 rounded-md border border-atelier-border bg-atelier-bg text-atelier-text">
                        <option>JavaScript</option>
                        <option>TypeScript</option>
                        <option>Python</option>
                        <option>Go</option>
                        <option>Rust</option>
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
                  <h3 className="font-semibold text-atelier-text">Transcription</h3>
                </div>
                <div className="p-4 rounded-md bg-atelier-bg min-h-20 flex items-center justify-center text-atelier-text-muted border border-dashed border-atelier-border">
                  {isRecording ? (
                    <p className="text-center">
                      <span className="animate-pulse">Listening...</span>
                    </p>
                  ) : (
                    <p className="text-center text-sm">
                      Press "Start Recording" and speak to generate code
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
                <pre className="p-4 rounded-md bg-atelier-bg text-xs font-mono text-atelier-text-muted overflow-x-auto min-h-48 border border-atelier-border">
                  <code>{`// Your generated code will appear here
function example() {
  // Generated from voice input
  return "Hello, World!";
}`}</code>
                </pre>
                <div className="mt-4 flex gap-3">
                  <button className="px-4 py-2 rounded-md bg-atelier-primary text-atelier-bg font-semibold hover:bg-atelier-primary-hover transition-colors duration-200 text-sm">
                    Copy Code
                  </button>
                  <button className="px-4 py-2 rounded-md border border-atelier-primary text-atelier-primary font-semibold hover:bg-atelier-primary/10 transition-colors duration-200 text-sm">
                    Insert
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
        </div>
      </main>
    </div>
  );
}
