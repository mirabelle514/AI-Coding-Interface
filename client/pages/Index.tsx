import { Mic, Hand, Users, Lightbulb, ArrowRight, Code2 } from "lucide-react";
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-atelier-bg">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-32 bg-gradient-to-b from-atelier-bg via-atelier-bg to-atelier-surface/50">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 animate-slide-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-atelier-primary/10 border border-atelier-border mb-6">
              <Code2 className="w-4 h-4 text-atelier-primary" />
              <span className="text-xs font-semibold text-atelier-primary uppercase tracking-wide">
                Design-to-Code Bridge
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-atelier-text mb-6 leading-tight">
              Design-to-Code
              <br />
              <span className="bg-gradient-to-r from-atelier-primary to-atelier-secondary bg-clip-text text-transparent">
                Bridge
              </span>
              <br />
              AI Development
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-atelier-text-muted max-w-2xl mb-8 leading-relaxed">
              Experience the future of coding with voice-to-code, gesture
              recognition, and collaborative pair programming powered by AI.
              Real-time, WebRTC-driven development at your fingertips.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/voice-to-code"
                className="px-8 py-3 bg-atelier-primary text-atelier-bg rounded-md font-semibold hover:bg-atelier-primary-hover transition-colors duration-200 flex items-center gap-2"
              >
                Explore Prototypes
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#features"
                className="px-8 py-3 border border-atelier-border text-atelier-text hover:bg-atelier-surface rounded-md font-semibold transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto max-w-4xl">
            <div className="relative bg-atelier-surface border border-atelier-border rounded-md p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Voice-to-Code", icon: Mic },
                  { label: "Gesture Recognition", icon: Hand },
                  { label: "Real-time Collab", icon: Users },
                  { label: "AI Assistance", icon: Lightbulb },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center justify-center p-4 rounded-md border border-atelier-border/50 bg-atelier-bg/30 hover:bg-atelier-bg/60 hover:border-atelier-primary transition-all duration-200 group cursor-pointer"
                  >
                    <item.icon className="w-6 h-6 mb-2 text-atelier-secondary group-hover:text-atelier-primary group-hover:scale-110 transition-all duration-200" />
                    <span className="text-xs md:text-sm font-medium text-atelier-text-muted text-center group-hover:text-atelier-text transition-colors">
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
      <section
        id="features"
        className="py-20 md:py-32 px-4 bg-atelier-surface/50"
      >
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-atelier-text mb-4">
              Advanced Prototypes
            </h2>
            <p className="text-base text-atelier-text-muted max-w-2xl mx-auto">
              Four cutting-edge prototypes showcasing the future of AI-assisted
              development
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
              accent="secondary"
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
            />

            <FeatureCard
              title="AI Assistant Overlay"
              description="Context-aware coding assistance with intelligent suggestions and auto-completion."
              icon={<Lightbulb className="w-full h-full" />}
              features={[
                "Context awareness",
                "Smart suggestions",
                "Auto-completion",
                "Code analysis",
              ]}
              href="/ai-overlay"
              accent="secondary"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 md:py-32 px-4 bg-atelier-bg">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-atelier-text mb-4">
              Modern Tech Stack
            </h2>
            <p className="text-base text-atelier-text-muted max-w-2xl mx-auto">
              Built with cutting-edge technologies for optimal performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                category: "Frontend",
                items: ["React 18", "TypeScript", "Tailwind CSS", "Vite"],
              },
              {
                category: "Real-time",
                items: ["WebRTC", "WebSocket", "P2P Connections", "Live Sync"],
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
                className="p-6 rounded-md border border-atelier-border bg-atelier-surface hover:border-atelier-primary hover:bg-atelier-surface-elevated transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-atelier-text mb-4">
                  {stack.category}
                </h3>
                <ul className="space-y-2">
                  {stack.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-sm text-atelier-text-muted flex items-center gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-atelier-secondary flex-shrink-0" />
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
      <section className="py-20 md:py-32 px-4 bg-atelier-surface border-t border-b border-atelier-border">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-atelier-text mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-base text-atelier-text-muted mb-10 max-w-2xl mx-auto">
            Explore our prototypes and discover how AI can transform your
            development workflow.
          </p>
          <Link
            to="/voice-to-code"
            className="inline-flex items-center gap-2 px-8 py-4 bg-atelier-primary text-atelier-bg rounded-md font-bold hover:bg-atelier-primary-hover transition-colors duration-200"
          >
            Start Exploring
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-atelier-border py-12 px-4 bg-atelier-bg">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-lg text-atelier-primary mb-4">
                <Code2 className="w-5 h-5" />
                D2C Bridge
              </div>
              <p className="text-sm text-atelier-text-muted">
                Design-to-Code Bridge: Advanced AI coding interfaces for the
                future of development.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-atelier-text mb-4">
                Prototypes
              </h4>
              <ul className="space-y-2 text-sm text-atelier-text-muted">
                <li>
                  <Link
                    to="/voice-to-code"
                    className="hover:text-atelier-primary transition-colors duration-200"
                  >
                    Voice-to-Code
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gesture-recognition"
                    className="hover:text-atelier-primary transition-colors duration-200"
                  >
                    Gesture Recognition
                  </Link>
                </li>
                <li>
                  <Link
                    to="/collaborative-coding"
                    className="hover:text-atelier-primary transition-colors duration-200"
                  >
                    Collaborative Coding
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-atelier-text mb-4">
                Technology
              </h4>
              <ul className="space-y-2 text-sm text-atelier-text-muted">
                <li>
                  <a
                    href="#"
                    className="hover:text-atelier-primary transition-colors duration-200"
                  >
                    WebRTC
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-atelier-primary transition-colors duration-200"
                  >
                    React
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-atelier-primary transition-colors duration-200"
                  >
                    Go Backend
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-atelier-text mb-4">
                Resources
              </h4>
              <ul className="space-y-2 text-sm text-atelier-text-muted">
                <li>
                  <a
                    href="#"
                    className="hover:text-atelier-primary transition-colors duration-200"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-atelier-primary transition-colors duration-200"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-atelier-primary transition-colors duration-200"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-atelier-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-atelier-text-muted">
            <p>&copy; 2024 Design-to-Code Bridge. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="hover:text-atelier-primary transition-colors duration-200"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-atelier-primary transition-colors duration-200"
              >
                Terms
              </a>
              <a
                href="#"
                className="hover:text-atelier-primary transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
