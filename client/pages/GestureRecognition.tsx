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
                <div className="p-6 rounded-md border border-atelier-border bg-atelier-surface">
                  <h3 className="font-semibold text-atelier-text mb-4">
                    Gesture Control
                  </h3>
                  <button
                    onClick={() => setIsCameraActive(!isCameraActive)}
                    className={`w-full py-3 rounded-md font-semibold transition-all flex items-center justify-center gap-2 ${
                      isCameraActive
                        ? "bg-atelier-secondary/20 text-atelier-secondary border border-atelier-secondary/50 animate-pulse"
                        : "bg-atelier-secondary/20 text-atelier-secondary border border-atelier-secondary/50 hover:bg-atelier-secondary/30"
                    }`}
                  >
                    <Hand className="w-5 h-5" />
                    {isCameraActive ? "Stop Camera" : "Start Camera"}
                  </button>
                  {isCameraActive && (
                    <div className="mt-4 p-3 rounded-md bg-atelier-secondary/10 border border-atelier-secondary/20">
                      <p className="text-xs text-atelier-secondary flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-atelier-secondary animate-pulse" />
                        Camera active
                      </p>
                    </div>
                  )}
                </div>

                {/* Gesture Reference */}
                <div className="p-6 rounded-md border border-atelier-border bg-atelier-surface">
                  <h3 className="font-semibold text-atelier-text mb-4">
                    Gesture Reference
                  </h3>
                  <div className="space-y-2 text-sm">
                    {[
                      { gesture: "Open Hand", action: "Select Code" },
                      { gesture: "Two Fingers", action: "Copy" },
                      { gesture: "Thumbs Up", action: "Format" },
                      { gesture: "Fist", action: "Delete" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2 rounded-md bg-atelier-bg border border-atelier-border/50"
                      >
                        <span className="text-atelier-text-muted text-xs">
                          {item.gesture}
                        </span>
                        <span className="text-atelier-text font-medium text-xs">
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
              <div className="p-6 rounded-md border border-atelier-border bg-atelier-surface mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Grid3x3 className="w-5 h-5 text-atelier-secondary" />
                  <h3 className="font-semibold text-atelier-text">Camera Feed</h3>
                </div>
                <div className="aspect-video rounded-md bg-atelier-bg border border-dashed border-atelier-border flex items-center justify-center relative overflow-hidden">
                  {isCameraActive ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-atelier-secondary/10 to-transparent flex items-center justify-center">
                      <div className="text-center">
                        <Hand className="w-16 h-16 text-atelier-secondary/30 mx-auto mb-4" />
                        <p className="text-atelier-text-muted text-sm">
                          Camera feed would appear here
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Hand className="w-16 h-16 text-atelier-text-muted/30 mx-auto mb-4" />
                      <p className="text-atelier-text-muted text-sm">
                        Enable camera to start gesture recognition
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Code Editor Preview */}
              <div className="p-6 rounded-md border border-atelier-border bg-atelier-surface">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-5 h-5 text-atelier-primary" />
                  <h3 className="font-semibold text-atelier-text">
                    Code Editor
                  </h3>
                </div>
                <pre className="p-4 rounded-md bg-atelier-bg text-xs font-mono text-atelier-text-muted overflow-x-auto min-h-48 border border-atelier-border">
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
