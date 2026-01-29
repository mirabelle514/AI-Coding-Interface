# AI-Coding-Interface

Advanced AI coding interfaces with voice-to-code, gesture recognition, collaborative coding, and AI-powered code suggestions.

## Quick Start

```bash
# Install dependencies
npm install

# Configure git with your name (IMPORTANT)
git config user.name "Mirabelle Doiron"
git config user.email "your.email@example.com"

# Start development server
npm run dev
```

Visit: `http://localhost:8080`

---

## Documentation

All documentation is located in the `/docs` folder and tracked locally in git:

- **[project_overview.md](/docs/project_overview.md)** - What this project does and why
- **[design_to_code_scenarios.md](/docs/design_to_code_scenarios.md)** - 4 real-world scenarios showing the bridge in action
- **[prototypes.md](/docs/prototypes.md)** - The 4 AI prototypes explained
- **[user_guide.md](/docs/user_guide.md)** - How to use the platform
- **[architecture.md](/docs/architecture.md)** - Technical architecture
- **[tech_stack.md](/docs/tech_stack.md)** - Technologies and dependencies
- **[design_system.md](/docs/design_system.md)** - Atelier color system
- **[setup.md](/docs/setup.md)** - Configuration and setup guide

---

## Four AI Prototypes

### 1. Voice-to-Code

Convert spoken words directly into functional code using speech recognition and AI.

### 2. Gesture Recognition

Control IDE and manipulate code using hand gestures captured via webcam.

### 3. Collaborative Coding

Real-time pair programming with AI assistance via WebRTC peer-to-peer connections.

### 4. AI Assistant Overlay

Context-aware real-time coding assistance with inline suggestions and quality metrics.

---

## Development Process

### Challenge
Design and prototype four experimental AI-assisted coding interfaces focused on accessibility, exploring how voice control, gesture recognition, collaborative coding, and real-time AI assistance can make development more inclusive for developers with different abilities.

### Technical Decisions

**Voice-to-Code Architecture**
- Web Speech API for browser-native speech recognition (no external dependencies)
- Custom natural language parser to convert spoken words into code syntax
- Debouncing and confirmation flow to prevent accidental code generation

**Gesture Recognition System**
- MediaPipe Hands for hand tracking via webcam
- Custom gesture vocabulary for common IDE actions (scroll, select, delete)
- Calibration system for different hand sizes and camera positions

**Collaborative Coding**
- WebRTC for peer-to-peer real-time code synchronization (no server needed)
- Operational transformation for conflict resolution during simultaneous editing
- Voice chat integration for pair programming conversations

**AI Assistant Overlay**
- Real-time code quality analysis with inline suggestions
- Context-aware completions based on surrounding code
- Performance metrics dashboard (code complexity, maintainability scores)

**Accessibility Focus**
- Keyboard navigation for all interfaces
- Screen reader announcements for AI suggestions
- High contrast mode and customizable text sizes
- Alternative input methods for developers with motor impairments

### My Contribution

**What I Built:**
- Designed the four prototype concepts and interaction patterns
- Implemented the voice-to-code natural language parser
- Built the gesture recognition system with MediaPipe integration
- Created the WebRTC peer-to-peer collaborative coding infrastructure
- Designed the AI assistant overlay with real-time analysis
- Integrated Atelier Design System for consistent, accessible UI
- Set up the development environment and documentation structure

**AI-Assisted Development:**
- Used Claude for initial React component structure and TypeScript types
- Iterated on WebRTC signaling logic with AI debugging assistance
- Refined gesture recognition algorithms with AI suggestions for accuracy improvements
- Debugged complex MediaPipe hand tracking edge cases

**Skills Demonstrated:**
- Experimental UI/UX prototyping
- Web Speech API and natural language processing
- Computer vision integration (MediaPipe)
- WebRTC peer-to-peer networking
- Real-time collaborative editing algorithms
- Accessibility-first design principles
- TypeScript advanced patterns for real-time systems

### Project Status

This is an IN PROGRESS exploration of accessibility-focused development tools. The goal is to demonstrate:
- Understanding of diverse developer needs and accessibility requirements
- Ability to integrate cutting-edge web APIs (Speech, MediaPipe, WebRTC)
- Innovative thinking about human-computer interaction in coding environments
- Practical prototyping skills for experimental interfaces

---

## Tech Stack

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Styling**: Atelier Design System
- **Real-time**: WebRTC + WebSocket
- **Backend**: Go 1.21 + Express
- **Build**: Vite
- **Package Manager**: npm

See [TECH_STACK.md](/docs/TECH_STACK.md) for details.

---

## Available Commands

```bash
# Development
npm run dev              # Start dev server

# Build & Production
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run typecheck        # TypeScript checking
npm run format.fix       # Format with Prettier

# Testing
npm run test             # Run tests with Vitest
```

---

## Project Structure

```
design-to-code-bridge/
├── client/                # React frontend
│   ├── pages/            # Page components
│   ├── components/       # Reusable components
│   └── global.css        # Atelier design system
├── server/               # Express backend
├── docs/                 # All documentation (git tracked)
│   ├── project_overview.md
│   ├── architecture.md
│   ├── prototypes.md
│   ├── user_guide.md
│   ├── tech_stack.md
│   ├── design_system.md
│   └── setup.md
└── public/               # Static assets
```

---

## Design System

All styling uses the **Atelier Design System**:

- **Primary Accent**: Red (#e94560)
- **Secondary Accent**: Teal (#4ecdc4)
- **Background**: Dark navy (#1a1a2e)
- **Surface**: Dark blue (#16213e)

See [design_system.md](/docs/design_system.md) for complete color palette and design tokens.

---

## Git Configuration

Make sure commits are under your name:

```bash
# Check current config
git config user.name
git config user.email

# Update if needed
git config user.name "Mirabelle Doiron"
git config user.email "your.email@example.com"

# Verify
git log --oneline
```

---

## Getting Started

1. **Read** [project_overview.md](/docs/project_overview.md) to understand the vision
2. **Explore** [design_to_code_scenarios.md](/docs/design_to_code_scenarios.md) to see 4 real-world use cases
3. **Follow** [setup.md](/docs/setup.md) for configuration
4. **Try** the prototypes at `http://localhost:8080`
5. **Reference** other docs as needed

---

## Deployment

See [architecture.md](/docs/architecture.md) for deployment options:

- Vercel (recommended)
- Docker containers
- Traditional hosting

---

## Notes

- [+] All documentation stored locally in `/docs`
- [+] Documentation tracked in git
- [+] No external wiki or docs site needed
- [+] Git commits configured with your name
- [+] Fully customizable with Atelier Design System

---

## Questions?

1. Check the relevant documentation in `/docs`
2. Read [setup.md](/docs/setup.md) for configuration help
3. See [user_guide.md](/docs/user_guide.md) for usage help
4. Review [architecture.md](/docs/architecture.md) for technical details

---

## License

Proprietary - AI-Coding-Interface

---

## About

**AI-Coding-Interface** is an innovative platform showcasing four cutting-edge AI-assisted development interfaces designed to revolutionize how developers write, collaborate, and optimize code.

Start exploring: `npm run dev`

---

## Author

Built by [Mirabelle](https://www.mirabelledoiron.com/) as part of [The Wednesday Collective](https://www.thewednesdaycollective.com/)
