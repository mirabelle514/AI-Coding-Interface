import Header from "@/components/Header";
import { Mic, Volume2, Zap } from "lucide-react";
import { useState } from "react";

export default function VoiceToCode() {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="container max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 animate-slide-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(280_95%_50%)]/10 border border-[hsl(280_95%_50%)]/20 mb-6">
              <Mic className="w-4 h-4 text-[hsl(280_95%_50%)]" />
              <span className="text-sm font-semibold text-[hsl(280_95%_50%)]">
                Voice-to-Code
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Speech Recognition for Code
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Transform your spoken words into clean, production-ready code using advanced speech recognition and AI-powered code generation.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left: Controls */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Recording Button */}
                <div className="p-6 rounded-2xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-4">
                    Voice Control
                  </h3>
                  <button
                    onClick={() => setIsRecording(!isRecording)}
                    className={`w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                      isRecording
                        ? "bg-red-600/20 text-red-500 border border-red-600/50 animate-pulse"
                        : "bg-[hsl(280_95%_50%)]/20 text-[hsl(280_95%_50%)] border border-[hsl(280_95%_50%)]/50 hover:bg-[hsl(280_95%_50%)]/30"
                    }`}
                  >
                    <Mic className="w-5 h-5" />
                    {isRecording ? "Stop Recording" : "Start Recording"}
                  </button>
                  {isRecording && (
                    <div className="mt-4 p-3 rounded-lg bg-red-600/10 border border-red-600/20">
                      <p className="text-sm text-red-500 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        Recording active...
                      </p>
                    </div>
                  )}
                </div>

                {/* Settings */}
                <div className="p-6 rounded-2xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-4">
                    Settings
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">
                        Language
                      </label>
                      <select className="w-full mt-2 px-3 py-2 rounded-lg border border-border bg-background text-foreground">
                        <option>English (US)</option>
                        <option>English (UK)</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">
                        Code Language
                      </label>
                      <select className="w-full mt-2 px-3 py-2 rounded-lg border border-border bg-background text-foreground">
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
              <div className="p-6 rounded-2xl border border-border bg-card mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Volume2 className="w-5 h-5 text-[hsl(280_95%_50%)]" />
                  <h3 className="font-semibold text-foreground">Transcription</h3>
                </div>
                <div className="p-4 rounded-lg bg-background min-h-20 flex items-center justify-center text-muted-foreground border-2 border-dashed border-border">
                  {isRecording ? (
                    <p className="text-center">
                      <span className="animate-pulse">Listening...</span>
                    </p>
                  ) : (
                    <p className="text-center">
                      Press "Start Recording" and speak to generate code
                    </p>
                  )}
                </div>
              </div>

              {/* Generated Code Panel */}
              <div className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">
                    Generated Code
                  </h3>
                </div>
                <pre className="p-4 rounded-lg bg-background text-sm font-mono text-foreground overflow-x-auto min-h-48 border border-border">
                  <code>{`// Your generated code will appear here
function example() {
  // Generated from voice input
  return "Hello, World!";
}`}</code>
                </pre>
                <div className="mt-4 flex gap-3">
                  <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                    Copy Code
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/5 transition-colors">
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
                className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <h4 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
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
