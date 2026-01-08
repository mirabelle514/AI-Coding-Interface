# Design-to-Code Bridge: Setup & Configuration

## 🚀 Initial Setup

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure Git User (Important!)

To ensure commits are under your name (Mirabelle Doiron), configure your git user:

#### Global Configuration (all projects)
```bash
git config --global user.name "Mirabelle Doiron"
git config --global user.email "your.email@example.com"
```

#### Project-Only Configuration (this project only)
```bash
git config user.name "Mirabelle Doiron"
git config user.email "your.email@example.com"
```

**Verify configuration:**
```bash
git config user.name
git config user.email
```

### 3. Start Development Server

```bash
pnpm run dev
```

Opens at: `http://localhost:8080`

---

## 📂 Project Structure

```
design-to-code-bridge/
├── client/                 # React frontend
├── server/                 # Express backend
├── shared/                 # Shared types
├── docs/                   # Documentation (locally tracked)
│   ├── PROJECT_OVERVIEW.md
│   ├── ARCHITECTURE.md
│   ├── PROTOTYPES.md
│   ├── USER_GUIDE.md
│   ├── TECH_STACK.md
│   ├── DESIGN_SYSTEM.md
│   └── SETUP.md (this file)
├── public/                 # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
├── index.html
└── .gitignore
```

---

## 🔧 Available Commands

### Development
```bash
pnpm run dev          # Start dev server (Vite + Express)
```

### Build & Production
```bash
pnpm run build        # Build for production
pnpm run build:client # Build client only
pnpm run build:server # Build server only
pnpm run start        # Start production server
```

### Code Quality
```bash
pnpm run typecheck    # TypeScript type checking
pnpm run format.fix   # Format code with Prettier
```

### Testing
```bash
pnpm run test         # Run Vitest tests
```

---

## 🌐 Environment Variables

Create a `.env` file in the root directory (optional for local development):

```bash
# Example .env
VITE_API_URL=http://localhost:8080
VITE_ENV=development
```

**Note:** Sensitive keys should use REPLACE_ENV prefix for better security.

---

## 📝 Git Workflow

### Creating Commits

Your commits will automatically be under the name configured in step 2.

```bash
# Stage changes
git add .

# Create commit (your name will be used)
git commit -m "feat: Add new feature"
```

**Verify commit author:**
```bash
git log --oneline
# Should show: Your Name <your.email@example.com>
```

### Push to Remote

```bash
# Using the UI button (recommended)
# Click "Push" button in the top right

# Or using CLI
git push origin main
```

---

## 📚 Documentation Structure

All documentation is stored locally in `/docs/`:

- **PROJECT_OVERVIEW.md** - Project goals and value proposition
- **ARCHITECTURE.md** - Technical architecture and design decisions
- **PROTOTYPES.md** - Detailed explanation of each prototype
- **USER_GUIDE.md** - How to use the platform
- **TECH_STACK.md** - Technologies and dependencies
- **DESIGN_SYSTEM.md** - Atelier Design System colors and patterns
- **SETUP.md** - This file

**These files are tracked in git and stored locally.** No external GitHub wiki or docs site needed.

---

## 🔒 Local Development

The project is set up for local development:

✅ Documentation in `/docs` folder (git tracked)  
✅ All source code in repository  
✅ No external dependencies for docs  
✅ Git configured with your name  
✅ Hot reload enabled (Vite)  

---

## 🚀 First Time Setup Checklist

- [ ] Run `pnpm install`
- [ ] Configure git user with your name
- [ ] Run `pnpm run dev`
- [ ] Open `http://localhost:8080`
- [ ] Read `/docs/PROJECT_OVERVIEW.md`
- [ ] Explore a prototype
- [ ] Make a small change and commit
- [ ] Verify commit shows your name

---

## 🔄 Regular Workflow

```
1. Make code changes
2. Test in browser (http://localhost:8080)
3. Read relevant docs in /docs
4. Commit with your name
5. Push to remote
6. Update docs in /docs if needed
```

---

## 📦 Building for Production

### Local Production Build

```bash
# Build both client and server
pnpm run build

# Start production server
pnpm run start
```

Opens at: `http://localhost:3000` (production build)

### Production Deployment

See `/docs/ARCHITECTURE.md` for deployment strategies:
- Netlify/Vercel (recommended)
- Docker containers
- Traditional hosting

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 8080
# macOS/Linux:
lsof -ti:8080 | xargs kill -9

# Windows:
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

### Git Commits Not Under Your Name
```bash
# Check current config
git config user.name
git config user.email

# Update if needed
git config user.name "Mirabelle Doiron"
git config user.email "your.email@example.com"
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Failures
```bash
# Clean build
pnpm run build:client
pnpm run build:server

# Check for TypeScript errors
pnpm run typecheck
```

---

## 📚 Learning Resources

Start with these in order:

1. **PROJECT_OVERVIEW.md** - Understand the vision
2. **PROTOTYPES.md** - Learn each feature
3. **USER_GUIDE.md** - How users interact
4. **ARCHITECTURE.md** - Technical deep dive
5. **TECH_STACK.md** - Technologies used
6. **DESIGN_SYSTEM.md** - Design tokens and styling

---

## 🎯 Next Steps

1. **Explore**: Try all 4 prototypes
2. **Understand**: Read the architecture
3. **Develop**: Make improvements
4. **Commit**: With your name
5. **Document**: Update docs if needed

---

## 💡 Tips

- All docs are in `/docs` - check them frequently
- Use `pnpm run dev` for development
- TypeScript will catch errors during development
- Read Tailwind/React docs for styling/component help
- Check DESIGN_SYSTEM.md for color tokens

---

## 🤝 Contributing

1. Make changes to code
2. Test in browser
3. Read relevant docs
4. Commit with descriptive message
5. Push to remote
6. Update docs in `/docs` if needed

---

## 📞 Support

- Check `/docs` folder for detailed information
- Read TROUBLESHOOTING section above
- Check relevant prototype documentation
- Review ARCHITECTURE.md for technical questions

---

Happy coding! 🚀
