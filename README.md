# Design-to-Code Bridge

Advanced AI coding interfaces with voice-to-code, gesture recognition, collaborative coding, and AI-powered code suggestions.

## Quick Start

```bash
# Install dependencies
pnpm install

# Configure git with your name (IMPORTANT)
git config user.name "Mirabelle Doiron"
git config user.email "your.email@example.com"

# Start development server
pnpm run dev
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

## Tech Stack

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Styling**: Atelier Design System
- **Real-time**: WebRTC + WebSocket
- **Backend**: Go 1.21 + Express
- **Build**: Vite
- **Package Manager**: pnpm

See [TECH_STACK.md](/docs/TECH_STACK.md) for details.

---

## Available Commands

```bash
# Development
pnpm run dev              # Start dev server

# Build & Production
pnpm run build            # Build for production
pnpm run start            # Start production server

# Code Quality
pnpm run typecheck        # TypeScript checking
pnpm run format.fix       # Format with Prettier

# Testing
pnpm run test             # Run tests with Vitest
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

See [DESIGN_SYSTEM.md](/docs/DESIGN_SYSTEM.md) for complete color palette and design tokens.

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

1. **Read** [PROJECT_OVERVIEW.md](/docs/PROJECT_OVERVIEW.md) to understand the vision
2. **Explore** [PROTOTYPES.md](/docs/PROTOTYPES.md) to learn each feature
3. **Follow** [SETUP.md](/docs/SETUP.md) for configuration
4. **Try** the prototypes at `http://localhost:8080`
5. **Reference** other docs as needed

---

## Deployment

See [ARCHITECTURE.md](/docs/ARCHITECTURE.md) for deployment options:

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
2. Read [SETUP.md](/docs/SETUP.md) for configuration help
3. See [USER_GUIDE.md](/docs/USER_GUIDE.md) for usage help
4. Review [ARCHITECTURE.md](/docs/ARCHITECTURE.md) for technical details

---

## License

Proprietary - Design-to-Code Bridge

---

## About

**Design-to-Code Bridge** is an innovative platform showcasing four cutting-edge AI-assisted development interfaces designed to revolutionize how developers write, collaborate, and optimize code.

Start exploring: `pnpm run dev`
