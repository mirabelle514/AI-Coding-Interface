import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-atelier-border">
      <nav className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-atelier-primary">
          <Code2 className="w-5 h-5" />
          <span>CodeAI</span>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li>
              <Link to="/" className="text-atelier-text hover:text-atelier-primary transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/voice-to-code" className="text-atelier-text hover:text-atelier-primary transition-colors duration-200">
                Voice
              </Link>
            </li>
            <li>
              <Link to="/gesture-recognition" className="text-atelier-text hover:text-atelier-primary transition-colors duration-200">
                Gesture
              </Link>
            </li>
            <li>
              <Link to="/collaborative-coding" className="text-atelier-text hover:text-atelier-primary transition-colors duration-200">
                Collab
              </Link>
            </li>
            <li>
              <Link to="/ai-overlay" className="text-atelier-text hover:text-atelier-primary transition-colors duration-200">
                Overlay
              </Link>
            </li>
          </ul>

          <Link
            to="/voice-to-code"
            className="px-6 py-2 bg-atelier-primary text-atelier-bg rounded-md font-semibold hover:bg-atelier-primary-hover transition-colors duration-200 text-sm"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
