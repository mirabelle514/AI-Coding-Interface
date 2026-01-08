import { Mic, Hand, Users, Sparkles, ArrowRight, Zap } from "lucide-react";
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card/30">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-32">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 animate-slide-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Advanced AI Coding</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Advanced AI Coding
              <br />
              <span className="bg-gradient-to-r from-primary via-[hsl(280_95%_50%)] to-[hsl(180_100%_45%)] bg-clip-text text-transparent">
                Interfaces for Real-Time
              </span>
              <br />
              Development
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Experience the future of coding with voice-to-code, gesture recognition, and collaborative pair programming powered by AI. Real-time, WebRTC-driven development at your fingertips.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/voice-to-code"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Explore Prototypes
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#features"
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-3xl rounded-3xl" />
            <div className="relative bg-card/50 border border-border rounded-2xl p-8 md:p-12 backdrop-blur-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Voice-to-Code", icon: "🎤" },
                  { label: "Gesture Recognition", icon: "🤖" },
                  { label: "Real-time Collab", icon: "👥" },
                  { label: "AI Assistance", icon: "✨" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center justify-center p-4 rounded-lg border border-border/50 bg-background/30 hover:bg-background/60 transition-colors group cursor-pointer"
                  >
                    <span className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-xs md:text-sm font-medium text-muted-foreground text-center group-hover:text-foreground transition-colors">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 px-4 bg-card/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Advanced Prototypes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four cutting-edge prototypes showcasing the future of AI-assisted development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="Voice-to-Code"
              description="Transform spoken words into clean, functional code with AI-powered speech recognition."
              icon={<Mic className="w-full h-full" />}
              features={[
                "Speech recognition",
                "AI code generation",
                "Real-time transcription",
                "Multi-language support",
              ]}
              href="/voice-to-code"
              color="voice"
            />

            <FeatureCard
              title="Gesture Recognition"
              description="Control your IDE and manipulate code using intuitive hand gestures and movements."
              icon={<Hand className="w-full h-full" />}
              features={[
                "Hand tracking",
                "Gesture commands",
                "Code manipulation",
                "Spatial awareness",
              ]}
              href="/gesture-recognition"
              color="gesture"
            />

            <FeatureCard
              title="Collaborative Coding"
              description="Real-time pair programming with AI assistance using WebRTC peer-to-peer connections."
              icon={<Users className="w-full h-full" />}
              features={[
                "Real-time sync",
                "P2P connections",
                "Live cursors",
                "AI suggestions",
              ]}
              href="/collaborative-coding"
              color="collab"
            />

            <FeatureCard
              title="AI Assistant Overlay"
              description="Context-aware coding assistance with intelligent suggestions and auto-completion."
              icon={<Sparkles className="w-full h-full" />}
              features={[
                "Context awareness",
                "Smart suggestions",
                "Auto-completion",
                "Code analysis",
              ]}
              href="/ai-overlay"
              color="overlay"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Modern Tech Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with cutting-edge technologies for optimal performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend",
                items: [
                  "React 18",
                  "TypeScript",
                  "Tailwind CSS",
                  "Vite",
                ],
              },
              {
                category: "Real-time",
                items: [
                  "WebRTC",
                  "WebSocket",
                  "P2P Connections",
                  "Live Sync",
                ],
              },
              {
                category: "Backend",
                items: [
                  "Go 1.21",
                  "Express.js",
                  "REST API",
                  "State Management (Zustand)",
                ],
              },
            ].map((stack, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-bold text-foreground mb-6">
                  {stack.category}
                </h3>
                <ul className="space-y-3">
                  {stack.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-muted-foreground flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-b border-border">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Explore our prototypes and discover how AI can transform your development workflow.
          </p>
          <Link
            to="/voice-to-code"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Start Exploring
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl text-primary mb-4">
                <Zap className="w-5 h-5" />
                CodeAI
              </div>
              <p className="text-sm text-muted-foreground">
                Advanced AI coding interfaces for the future of development.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Prototypes</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/voice-to-code" className="hover:text-primary transition-colors">
                    Voice-to-Code
                  </Link>
                </li>
                <li>
                  <Link to="/gesture-recognition" className="hover:text-primary transition-colors">
                    Gesture Recognition
                  </Link>
                </li>
                <li>
                  <Link to="/collaborative-coding" className="hover:text-primary transition-colors">
                    Collaborative Coding
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Technology</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    WebRTC
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    React
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Go Backend
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2024 CodeAI. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
