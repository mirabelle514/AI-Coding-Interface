import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <Zap className="w-6 h-6" />
          <span>CodeAI</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
            <li>
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/voice-to-code" className="text-foreground hover:text-primary transition-colors">
                Voice
              </Link>
            </li>
            <li>
              <Link to="/gesture-recognition" className="text-foreground hover:text-primary transition-colors">
                Gesture
              </Link>
            </li>
            <li>
              <Link to="/collaborative-coding" className="text-foreground hover:text-primary transition-colors">
                Collab
              </Link>
            </li>
            <li>
              <Link to="/ai-overlay" className="text-foreground hover:text-primary transition-colors">
                Overlay
              </Link>
            </li>
          </ul>

          <Link
            to="/voice-to-code"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
