import {
  Mic,
  Hand,
  Users,
  Lightbulb,
  ArrowRight,
  Code2,
  Heart,
  Figma,
  Github,
  FileText,
} from "lucide-react";
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

      {/* How to Test the Bridge Section */}
      <section className="py-20 md:py-32 px-4 bg-atelier-surface/50">
        <div className="container max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-atelier-secondary/10 border border-atelier-border mb-6">
              <Code2 className="w-4 h-4 text-atelier-secondary" />
              <span className="text-xs font-semibold text-atelier-secondary uppercase tracking-wide">
                Testing Guide
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-atelier-text mb-6">
              How to Test the Design-to-Code Bridge
            </h2>
            <p className="text-base text-atelier-text-muted mb-8 leading-relaxed">
              The bridge connects design intent to engineering output. It works
              when your idea flows directly into production-ready code.
            </p>

            <div className="space-y-6 mb-8">
              <div className="p-6 rounded-md border border-atelier-border bg-atelier-bg">
                <h3 className="font-semibold text-atelier-text mb-3 text-lg">
                  The Bridge Flow
                </h3>
                <p className="text-sm text-atelier-text-muted mb-4">
                  Design Intent (voice/gesture/collaboration) → AI Processing →
                  Engineering-Ready Code
                </p>
                <ul className="space-y-2 text-sm text-atelier-text-muted">
                  <li className="flex items-start gap-3">
                    <span className="text-atelier-primary font-bold">1.</span>
                    <span>Speak your design intent (Voice-to-Code)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-atelier-primary font-bold">2.</span>
                    <span>AI understands and generates code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-atelier-primary font-bold">3.</span>
                    <span>Verify code matches your design intent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-atelier-primary font-bold">4.</span>
                    <span>Copy to your editor and use immediately</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-md border border-atelier-secondary/30 bg-atelier-secondary/10">
                <h3 className="font-semibold text-atelier-text mb-3 text-lg">
                  What You Need
                </h3>
                <ul className="space-y-2 text-sm text-atelier-text-muted">
                  <li className="flex items-center gap-2">
                    <span className="text-atelier-secondary font-bold">✓</span>
                    <span>
                      OpenAI API key (free to start, ~$1.80/month for testing)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-atelier-secondary font-bold">✓</span>
                    <span>Chrome, Edge, or Safari browser</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-atelier-secondary font-bold">✓</span>
                    <span>Microphone for Voice-to-Code prototype</span>
                  </li>
                </ul>
              </div>
            </div>

            <a
              href="https://github.com/mirabelle/design-to-code-bridge/blob/main/docs/TESTING_DESIGN_TO_CODE_BRIDGE.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-atelier-secondary text-atelier-bg rounded-md font-semibold hover:bg-atelier-secondary-hover transition-colors duration-200"
            >
              View Complete Testing Guide
              <ArrowRight className="w-4 h-4" />
            </a>
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

      {/* Design System Integrations Section */}
      <section className="py-20 md:py-32 px-4 bg-atelier-bg">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-atelier-primary/10 border border-atelier-border mb-6">
              <Code2 className="w-4 h-4 text-atelier-primary" />
              <span className="text-xs font-semibold text-atelier-primary uppercase tracking-wide">
                Next Phase
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-atelier-text mb-4">
              Connect Your Design System
            </h2>
            <p className="text-base text-atelier-text-muted max-w-2xl mx-auto">
              Integrate your Figma libraries, GitHub repositories, and documentation to power smarter code generation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-8 rounded-md border border-atelier-border bg-atelier-surface hover:border-atelier-primary transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <Figma className="w-6 h-6 text-atelier-primary" />
                <h3 className="text-lg font-semibold text-atelier-text">
                  Figma Libraries
                </h3>
              </div>
              <p className="text-sm text-atelier-text-muted mb-4">
                Connect your design system file to extract components, colors, and patterns for code generation.
              </p>
              <ul className="space-y-2 text-sm text-atelier-text-muted">
                <li className="flex items-center gap-2">
                  <span className="text-atelier-primary">+</span>
                  <span>Component extraction</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-atelier-primary">+</span>
                  <span>Design token mapping</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-atelier-primary">+</span>
                  <span>Visual consistency</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-md border border-atelier-border bg-atelier-surface hover:border-atelier-primary transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <Github className="w-6 h-6 text-atelier-primary" />
                <h3 className="text-lg font-semibold text-atelier-text">
                  GitHub Repos
                </h3>
              </div>
              <p className="text-sm text-atelier-text-muted mb-4">
                Link your design system repository to learn your coding patterns and conventions.
              </p>
              <ul className="space-y-2 text-sm text-atelier-text-muted">
                <li className="flex items-center gap-2">
                  <span className="text-atelier-primary">+</span>
                  <span>Code pattern learning</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-atelier-primary">+</span>
                  <span>Architecture alignment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-atelier-primary">+</span>
                  <span>Naming conventions</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-md border border-atelier-border bg-atelier-surface hover:border-atelier-primary transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-atelier-primary" />
                <h3 className="text-lg font-semibold text-atelier-text">
                  Documentation
                </h3>
              </div>
              <p className="text-sm text-atelier-text-muted mb-4">
                Connect your design documentation to provide AI context for guidelines and best practices.
              </p>
              <ul className="space-y-2 text-sm text-atelier-text-muted">
                <li className="flex items-center gap-2">
                  <span className="text-atelier-primary">+</span>
                  <span>Best practices guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-atelier-primary">+</span>
                  <span>Design system rules</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-atelier-primary">+</span>
                  <span>Implementation examples</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/integrations"
              className="inline-flex items-center gap-2 px-8 py-3 bg-atelier-primary text-atelier-bg rounded-md font-semibold hover:bg-atelier-primary-hover transition-colors duration-200"
            >
              Configure Integrations
              <ArrowRight className="w-4 h-4" />
            </Link>
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
      <footer className="border-t border-atelier-border py-8 px-4 bg-atelier-bg">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center text-sm text-atelier-text-muted space-y-3">
            <p>
              Part of{" "}
              <a
                href="https://www.thewednesdaycollective.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-atelier-primary hover:text-atelier-secondary transition-colors duration-200 font-semibold"
              >
                The Wednesday Collective
              </a>{" "}
              | copyright © {new Date().getFullYear()} Mirabelle
            </p>
            <p className="flex items-center justify-center gap-2">
              Powered by my{" "}
              <Heart
                className="w-4 h-4 text-atelier-primary fill-atelier-primary"
                aria-label="heart"
              />{" "}
              for Wednesday
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
