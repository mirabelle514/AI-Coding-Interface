import Header from "@/components/Header";
import { Hand, Code2, Grid3x3 } from "lucide-react";
import { useState } from "react";

export default function GestureRecognition() {
  const [isCameraActive, setIsCameraActive] = useState(false);

  return (
    <div className="min-h-screen bg-atelier-bg">
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="container max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 animate-slide-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-atelier-secondary/10 border border-atelier-border mb-6">
              <Hand className="w-4 h-4 text-atelier-secondary" />
              <span className="text-xs font-semibold text-atelier-secondary uppercase tracking-wide">
                Gesture Recognition
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-atelier-text mb-4">
              Control Code with Hand Gestures
            </h1>
            <p className="text-base text-atelier-text-muted max-w-2xl">
              Intuitive hand gesture recognition for seamless code manipulation and IDE control without touching your keyboard.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left: Controls */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Camera Button */}
                <div className="p-6 rounded-2xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-4">
                    Gesture Control
                  </h3>
                  <button
                    onClick={() => setIsCameraActive(!isCameraActive)}
                    className={`w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                      isCameraActive
                        ? "bg-[hsl(180_100%_45%)]/20 text-[hsl(180_100%_45%)] border border-[hsl(180_100%_45%)]/50 animate-pulse"
                        : "bg-[hsl(180_100%_45%)]/20 text-[hsl(180_100%_45%)] border border-[hsl(180_100%_45%)]/50 hover:bg-[hsl(180_100%_45%)]/30"
                    }`}
                  >
                    <Hand className="w-5 h-5" />
                    {isCameraActive ? "Stop Camera" : "Start Camera"}
                  </button>
                  {isCameraActive && (
                    <div className="mt-4 p-3 rounded-lg bg-[hsl(180_100%_45%)]/10 border border-[hsl(180_100%_45%)]/20">
                      <p className="text-sm text-[hsl(180_100%_45%)] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[hsl(180_100%_45%)] animate-pulse" />
                        Camera active
                      </p>
                    </div>
                  )}
                </div>

                {/* Gesture Reference */}
                <div className="p-6 rounded-2xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-4">
                    Gesture Reference
                  </h3>
                  <div className="space-y-3 text-sm">
                    {[
                      { gesture: "✋ Open Hand", action: "Select Code" },
                      { gesture: "✌️ Two Fingers", action: "Copy" },
                      { gesture: "👍 Thumbs Up", action: "Format" },
                      { gesture: "👊 Fist", action: "Delete" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2 rounded bg-background border border-border/50"
                      >
                        <span className="text-muted-foreground">
                          {item.gesture}
                        </span>
                        <span className="text-foreground font-medium">
                          {item.action}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Camera Feed and Code */}
            <div className="lg:col-span-2">
              {/* Camera Feed */}
              <div className="p-6 rounded-2xl border border-border bg-card mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Grid3x3 className="w-5 h-5 text-[hsl(180_100%_45%)]" />
                  <h3 className="font-semibold text-foreground">Camera Feed</h3>
                </div>
                <div className="aspect-video rounded-lg bg-background border-2 border-dashed border-border flex items-center justify-center relative overflow-hidden">
                  {isCameraActive ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(180_100%_45%)]/10 to-transparent flex items-center justify-center">
                      <div className="text-center">
                        <Hand className="w-16 h-16 text-[hsl(180_100%_45%)]/30 mx-auto mb-4" />
                        <p className="text-muted-foreground">
                          Camera feed would appear here
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Hand className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Enable camera to start gesture recognition
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Code Editor Preview */}
              <div className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">
                    Code Editor
                  </h3>
                </div>
                <pre className="p-4 rounded-lg bg-background text-sm font-mono text-foreground overflow-x-auto min-h-48 border border-border">
                  <code>{`function calculateSum(a, b) {
  // Use gestures to modify code
  const result = a + b;
  return result;
}

// Gestures:
// Open hand = select
// Two fingers = copy
// Thumbs up = format
// Fist = delete`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Hand Tracking",
                description: "Real-time hand position and shape detection",
              },
              {
                title: "Gesture Commands",
                description: "Intuitive gestures for common coding operations",
              },
              {
                title: "Spatial Awareness",
                description: "Understand code location and context",
              },
              {
                title: "No Touch Required",
                description: "Control IDE completely hands-free when needed",
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
