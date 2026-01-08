# Quick Start: Connect Real AI (5 Minutes)

## The Problem
Right now, the prototypes are just UI shells. **Nothing actually works.** To fix that, you need to connect a real AI provider.

## The Solution
Add an OpenAI API key. Takes 5 minutes.

---

## Step-by-Step Setup

### Step 1: Get an API Key from OpenAI (2 minutes)

1. Go to https://platform.openai.com/api-keys
2. Sign up or log in (create account if needed)
3. Click "+ Create new secret key"
4. Copy the key (looks like: `sk-...`)
5. Save it somewhere safe (you won't see it again)

**Cost**: Pay-as-you-go. $0.03-$0.06 per 1K tokens. First request is basically free to test.

### Step 2: Add API Key to Your Project (2 minutes)

In your project root folder, create a file called `.env.local`:

**Mac/Linux:**
```bash
touch .env.local
```

**Windows:** Just create a file called `.env.local` in the root folder

**Inside `.env.local`, paste:**
```
VITE_OPENAI_API_KEY=sk-your-api-key-here
```

Replace `sk-your-api-key-here` with your actual key from Step 1.

### Step 3: Restart Dev Server (1 minute)

Stop and restart your dev server:

```bash
# Stop: Press Ctrl+C in terminal
# Start: 
npm run dev
```

### Step 4: Test Voice-to-Code (Now!)

1. Go to your app: http://localhost:8080
2. Click on "Voice-to-Code" (or go to the Voice link in header)
3. Click "Start Recording"
4. Speak: **"Create a function that checks if a number is prime"**
5. Click "Stop Recording"
6. AI generates code!
7. Click "Copy Code"

---

## What Works Now

**Voice-to-Code** ✓ FULLY WORKING
- Speak → AI generates code
- Multiple languages supported
- Copy to clipboard

**The Other 3 Prototypes** (Still UI-only)
- Gesture Recognition - Needs hand pose detection library
- Collaborative Coding - Needs WebRTC/Supabase setup
- AI Assistant Overlay - Needs code analysis API

---

## Troubleshooting

### "API key not found" Error
- Make sure `.env.local` exists in project root
- Check the file has `VITE_OPENAI_API_KEY=sk-...`
- Restart dev server after creating the file

### "Speech recognition not supported"
- Use Chrome, Edge, or Safari browser
- Firefox doesn't support Web Speech API yet

### "Invalid API key"
- Double-check the key is correct (copy-paste from OpenAI)
- Make sure it starts with `sk-`
- You might need to generate a new key

### "No speech detected"
- Make sure microphone permission is granted
- Speak louder and clearer
- Check browser console for errors

---

## What's Happening Behind the Scenes

1. **Your voice** → Browser's Web Speech API (converts to text)
2. **Text** → OpenAI GPT-4 API (generates code)
3. **Code** → Displays in UI (you copy and paste)

---

## Cost Example

Using Voice-to-Code 10 times per day:
- Each request = ~200 tokens
- Cost per request = ~$0.006
- 10 requests/day = ~$0.06/day
- Monthly = ~$1.80

**You'll spend less than $5/month** for moderate testing.

---

## Next Steps (Optional)

Once you have this working:

1. **Set up Gesture Recognition**: Needs MediaPipe (free, runs locally)
2. **Set up Collaboration**: Needs Supabase or Firebase ($0 for free tier)
3. **Set up AI Overlay**: Reuses OpenAI API you already have

But for now, **Voice-to-Code** is ready. Go test it! 🚀

---

## Important Notes

- **Never share your API key** (keep it in .env.local, not in git)
- **`env.local` is gitignored** - It won't be committed
- **API calls go directly from your browser to OpenAI** - Nothing goes through your server
- **You're in control of costs** - You only pay for what you use

---

## Questions?

- OpenAI Docs: https://platform.openai.com/docs
- Web Speech API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
- Check browser console for detailed errors (F12 → Console tab)
