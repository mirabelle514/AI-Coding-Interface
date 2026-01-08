import Header from "@/components/Header";
import { Users, Video, MessageSquare, Share2, Code2 } from "lucide-react";
import { useState } from "react";

export default function CollaborativeCoding() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className="min-h-screen bg-atelier-bg">
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="container max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 animate-slide-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-atelier-primary/10 border border-atelier-border mb-6">
              <Users className="w-4 h-4 text-atelier-primary" />
              <span className="text-xs font-semibold text-atelier-primary uppercase tracking-wide">
                Collaborative Coding
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-atelier-text mb-4">
              Real-Time Pair Programming with AI
            </h1>
            <p className="text-base text-atelier-text-muted max-w-2xl">
              WebRTC-powered peer-to-peer collaboration with live cursors, real-time code synchronization, and AI-assisted pair programming.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Left: Connection Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Connection Status */}
                <div className="p-6 rounded-2xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-4">
                    Connection
                  </h3>
                  <button
                    onClick={() => setIsConnected(!isConnected)}
                    className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                      isConnected
                        ? "bg-[hsl(60_100%_50%)]/20 text-[hsl(60_100%_50%)] border border-[hsl(60_100%_50%)]/50"
                        : "bg-[hsl(60_100%_50%)]/20 text-[hsl(60_100%_50%)] border border-[hsl(60_100%_50%)]/50 hover:bg-[hsl(60_100%_50%)]/30"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isConnected ? "bg-[hsl(60_100%_50%)] animate-pulse" : ""
                      }`}
                    />
                    {isConnected ? "Connected" : "Connect"}
                  </button>
                  <p className="text-xs text-muted-foreground mt-3">
                    Using WebRTC P2P connection
                  </p>
                </div>

                {/* Participants */}
                <div className="p-6 rounded-2xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-4">
                    Participants
                  </h3>
                  <div className="space-y-2">
                    {[
                      { name: "You", color: "bg-primary" },
                      { name: "Partner AI", color: "bg-[hsl(60_100%_50%)]" },
                    ].map((participant, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-2 rounded-lg bg-background border border-border/50"
                      >
                        <div
                          className={`w-3 h-3 rounded-full ${participant.color}`}
                        />
                        <span className="text-sm text-foreground">
                          {participant.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Controls */}
                <div className="p-6 rounded-2xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-4">
                    Controls
                  </h3>
                  <div className="space-y-2 flex flex-col">
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-background transition-colors border border-border/50 text-sm font-medium text-foreground">
                      <Video className="w-4 h-4" />
                      Video
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-background transition-colors border border-border/50 text-sm font-medium text-foreground">
                      <MessageSquare className="w-4 h-4" />
                      Chat
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-background transition-colors border border-border/50 text-sm font-medium text-foreground">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Code Editor */}
            <div className="lg:col-span-3">
              {/* Live Cursors */}
              {isConnected && (
                <div className="mb-4 p-4 rounded-lg bg-[hsl(60_100%_50%)]/5 border border-[hsl(60_100%_50%)]/20 flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-[hsl(60_100%_50%)] animate-pulse" />
                  <span className="text-muted-foreground">
                    Partner cursor position is synchronized
                  </span>
                </div>
              )}

              {/* Code Editor */}
              <div className="p-6 rounded-2xl border border-border bg-card mb-6">
                <div className="flex items-center gap-2 mb-4 justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">
                      Shared Code Editor
                    </h3>
                  </div>
                  {isConnected && (
                    <span className="text-xs px-2 py-1 rounded bg-[hsl(60_100%_50%)]/20 text-[hsl(60_100%_50%)]">
                      Live
                    </span>
                  )}
                </div>
                <pre className="p-4 rounded-lg bg-background text-sm font-mono text-foreground overflow-x-auto min-h-64 border border-border">
                  <code>{`// Real-time collaborative editing
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Both cursors visible in real-time
export const solution = {
  algorithm: fibonacci,
  complexity: "O(2^n)",
  optimized: false,
};`}</code>
                </pre>
              </div>

              {/* AI Suggestions Panel */}
              <div className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">✨</span>
                  <h3 className="font-semibold text-foreground">
                    AI Suggestions
                  </h3>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      title: "Optimize Fibonacci",
                      description:
                        "Add memoization to improve performance from O(2^n) to O(n)",
                    },
                    {
                      title: "Add Error Handling",
                      description:
                        "Include validation for negative numbers and edge cases",
                    },
                  ].map((suggestion, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors cursor-pointer"
                    >
                      <p className="text-sm font-medium text-foreground">
                        {suggestion.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {suggestion.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Real-time Sync",
                description: "Changes synchronized instantly across all peers",
              },
              {
                title: "Live Cursors",
                description: "See where your partner is editing in real-time",
              },
              {
                title: "WebRTC P2P",
                description: "Direct peer-to-peer connections for low latency",
              },
              {
                title: "AI Assistance",
                description: "Smart suggestions while collaborating with team",
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
