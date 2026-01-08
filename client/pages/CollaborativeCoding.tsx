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
                <div className="p-6 rounded-md border border-atelier-border bg-atelier-surface">
                  <h3 className="font-semibold text-atelier-text mb-4">
                    Connection
                  </h3>
                  <button
                    onClick={() => setIsConnected(!isConnected)}
                    className={`w-full py-3 rounded-md font-semibold transition-all flex items-center justify-center gap-2 ${
                      isConnected
                        ? "bg-atelier-success/20 text-atelier-success border border-atelier-success/50"
                        : "bg-atelier-success/20 text-atelier-success border border-atelier-success/50 hover:bg-atelier-success/30"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isConnected ? "bg-atelier-success animate-pulse" : ""
                      }`}
                    />
                    {isConnected ? "Connected" : "Connect"}
                  </button>
                  <p className="text-xs text-atelier-text-muted mt-3">
                    Using WebRTC P2P connection
                  </p>
                </div>

                {/* Participants */}
                <div className="p-6 rounded-md border border-atelier-border bg-atelier-surface">
                  <h3 className="font-semibold text-atelier-text mb-4">
                    Participants
                  </h3>
                  <div className="space-y-2">
                    {[
                      { name: "You", color: "bg-atelier-primary" },
                      { name: "Partner AI", color: "bg-atelier-success" },
                    ].map((participant, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-2 rounded-md bg-atelier-bg border border-atelier-border/50"
                      >
                        <div
                          className={`w-3 h-3 rounded-full ${participant.color}`}
                        />
                        <span className="text-sm text-atelier-text">
                          {participant.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Controls */}
                <div className="p-6 rounded-md border border-atelier-border bg-atelier-surface">
                  <h3 className="font-semibold text-atelier-text mb-4">
                    Controls
                  </h3>
                  <div className="space-y-2 flex flex-col">
                    <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-atelier-bg transition-colors border border-atelier-border/50 text-xs font-medium text-atelier-text">
                      <Video className="w-4 h-4" />
                      Video
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-atelier-bg transition-colors border border-atelier-border/50 text-xs font-medium text-atelier-text">
                      <MessageSquare className="w-4 h-4" />
                      Chat
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-atelier-bg transition-colors border border-atelier-border/50 text-xs font-medium text-atelier-text">
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
                <div className="mb-4 p-4 rounded-md bg-atelier-success/5 border border-atelier-success/20 flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-atelier-success animate-pulse" />
                  <span className="text-atelier-text-muted text-xs">
                    Partner cursor position is synchronized
                  </span>
                </div>
              )}

              {/* Code Editor */}
              <div className="p-6 rounded-md border border-atelier-border bg-atelier-surface mb-6">
                <div className="flex items-center gap-2 mb-4 justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-atelier-primary" />
                    <h3 className="font-semibold text-atelier-text">
                      Shared Code Editor
                    </h3>
                  </div>
                  {isConnected && (
                    <span className="text-xs px-2 py-1 rounded-md bg-atelier-success/20 text-atelier-success font-semibold">
                      Live
                    </span>
                  )}
                </div>
                <pre className="p-4 rounded-md bg-atelier-bg text-xs font-mono text-atelier-text-muted overflow-x-auto min-h-64 border border-atelier-border">
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
              <div className="p-6 rounded-md border border-atelier-border bg-atelier-surface">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-atelier-warning" />
                  <h3 className="font-semibold text-atelier-text">
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
                      className="p-3 rounded-md border border-atelier-border bg-atelier-bg hover:border-atelier-primary/50 transition-colors duration-200 cursor-pointer"
                    >
                      <p className="text-sm font-medium text-atelier-text">
                        {suggestion.title}
                      </p>
                      <p className="text-xs text-atelier-text-muted mt-1">
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
