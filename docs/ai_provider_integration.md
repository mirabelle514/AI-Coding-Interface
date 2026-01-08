# AI Provider Integration Guide

## Quick Map: Where to Add AI Connections

### 1. Voice-to-Code

**File to Edit:** `client/pages/VoiceToCode.tsx`

**What's Needed:**
- Speech-to-Text API (Whisper, Google Cloud Speech, Azure)
- Code Generation API (OpenAI GPT-4, Claude, Gemini)

**Integration Point:**
```typescript
// Add this in VoiceToCode.tsx

import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
});

async function handleVoiceTranscription(audioBlob: Blob) {
  // 1. Convert voice to text
  const transcript = await openai.audio.transcriptions.create({
    file: audioBlob,
    model: "whisper-1"
  });

  // 2. Generate code from transcript
  const codeResponse = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{
      role: "user",
      content: `Generate ${language} code for: ${transcript.text}`
    }]
  });

  return codeResponse.choices[0].message.content;
}
```

**Environment Variables Needed:**
```
VITE_OPENAI_API_KEY=sk-xxxxx
```

---

### 2. Gesture Recognition

**File to Edit:** `client/pages/GestureRecognition.tsx`

**What's Needed:**
- Hand Pose Detection (MediaPipe, ML5.js)
- Optional: Gesture Classification Model

**Integration Point:**
```typescript
// Add this in GestureRecognition.tsx

import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/hand-pose-detection';

async function setupGestureDetection() {
  // Load pre-trained hand pose model
  const detector = await handpose.createDetector(
    handpose.SupportedProducts.MediaPipeHands
  );

  // In your video loop:
  const hands = await detector.estimateHands(videoElement);
  
  // Classify gesture from hand landmarks
  const gesture = classifyGesture(hands[0].keypoints);
  
  // Execute IDE action based on gesture
  executeIDECommand(gesture);
}

function classifyGesture(keypoints: any[]): string {
  // Logic to identify: open_hand, fist, thumbs_up, swipe_left, etc.
  // Can use custom ML model or rule-based classification
}
```

**What You Need to Install:**
```bash
npm install @tensorflow/tfjs @tensorflow-models/hand-pose-detection
```

**No API Key Required** (runs locally in browser)

---

### 3. Collaborative Coding

**Files to Edit:** 
- `client/pages/CollaborativeCoding.tsx` (frontend)
- `server/index.ts` (backend)

**What's Needed:**
- WebRTC Signaling Server (Firebase, Supabase, custom)
- Code Sync Library (Yjs, Automerge)

**Frontend Integration:**
```typescript
// In client/pages/CollaborativeCoding.tsx

import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

async function setupCollaborativeSession() {
  // Create shared document
  const ydoc = new Y.Doc();
  const ytext = ydoc.getText('shared-code');

  // Connect to signaling server
  const provider = new WebsocketProvider(
    import.meta.env.VITE_COLLAB_SERVER_URL,
    'collaborative-coding',
    ydoc
  );

  // Bind to editor
  editor.bind(ytext);
}
```

**Backend Integration:**
```typescript
// In server/index.ts

import WebSocket from 'ws';

app.ws('/collab', (ws, req) => {
  // Handle WebRTC signaling
  // Relay SDP offers/answers between peers
  // Manage session state
});
```

**Environment Variables:**
```
VITE_COLLAB_SERVER_URL=wss://your-collab-server.com
```

**Alternative: Use Firebase**
```typescript
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = JSON.parse(
  import.meta.env.VITE_FIREBASE_CONFIG
);
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Use Firebase Realtime Database for code sync
```

---

### 4. AI Assistant Overlay

**File to Edit:** `client/pages/AIOverlay.tsx`

**What's Needed:**
- Code Analysis API (OpenAI, Claude, Gemini)
- Optional: Specialized code quality APIs

**Integration Point:**
```typescript
// In client/pages/AIOverlay.tsx

import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
});

async function analyzeCode(code: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{
      role: "system",
      content: "You are a code review expert. Analyze the code and provide:\n1. Readability score (0-100)\n2. Performance suggestions\n3. Security issues\n4. Specific fixes"
    }, {
      role: "user",
      content: code
    }]
  });

  const analysis = parseAnalysis(response.choices[0].message.content);
  
  return {
    readability: analysis.readability,
    performance: analysis.performance,
    security: analysis.security,
    suggestions: analysis.suggestions
  };
}

// Debounce analysis to avoid too many API calls
const debouncedAnalyze = debounce(analyzeCode, 1000);
```

**Environment Variables:**
```
VITE_OPENAI_API_KEY=sk-xxxxx
```

---

## Recommended AI Providers (2024-2026)

### Best for General Use: OpenAI
- **GPT-4**: Excellent code understanding and generation
- **Whisper**: Best speech-to-text for technical terms
- **Pricing**: $0.03-$0.06 per 1K tokens
- **Integration**: Simple, well-documented
- **Website**: https://platform.openai.com

### Best for Code: Anthropic Claude
- **Claude 3 Opus**: Deep code understanding
- **Pricing**: Similar to OpenAI
- **Integration**: Easy API
- **Website**: https://console.anthropic.com

### Best for Gesture: Google MediaPipe
- **Hand Detection**: Free, runs locally
- **Gesture Recognition**: Open source models
- **No Cost**: Everything runs in browser
- **Website**: https://developers.google.com/mediapipe

### Best for Collaboration: Firebase or Supabase
- **Real-time Database**: Perfect for code sync
- **WebSocket Support**: Built-in
- **Pricing**: Free tier available
- **Firebase**: https://firebase.google.com
- **Supabase**: https://supabase.com

### For Code Sync: Yjs
- **Open Source**: Free
- **Conflict Resolution**: Built-in
- **Works Everywhere**: Browser, Node.js
- **Website**: https://docs.yjs.dev

---

## Setup Instructions

### 1. Create `.env.local` File
```bash
# In project root
touch .env.local
```

### 2. Add Your API Keys
```
# OpenAI (for voice-to-code and AI overlay)
VITE_OPENAI_API_KEY=sk-xxxxx

# Firebase (for collaborative coding)
VITE_FIREBASE_CONFIG={"apiKey":"...","projectId":"..."}

# Or Supabase
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_KEY=xxxxx

# Custom server
VITE_COLLAB_SERVER_URL=wss://your-server.com
```

### 3. Install Dependencies
```bash
# For OpenAI
npm install openai

# For gesture recognition
npm install @tensorflow/tfjs @tensorflow-models/hand-pose-detection

# For collaboration
npm install yjs y-websocket

# For Firebase
npm install firebase
```

### 4. Update Each Prototype File
Copy the integration code snippets above into each corresponding file.

### 5. Test Each Feature
- Voice-to-Code: Record audio, verify transcription
- Gesture: Enable camera, make hand gestures
- Collaborative: Open two windows, edit simultaneously
- AI Overlay: Type code, verify analysis

---

## Cost Estimate

For a small team using this in production:

| Service | Monthly Cost | Usage |
|---------|------------|-------|
| OpenAI (GPT-4) | $50-200 | Code generation + analysis |
| Whisper (Speech) | $10-50 | Voice transcription |
| MediaPipe | Free | Hand gesture detection |
| Firebase/Supabase | Free-$100 | Real-time collaboration |
| Server Hosting | $50-200 | Your backend |
| **Total** | **$160-550** | Small team usage |

---

## Troubleshooting

### "API key not working"
- Check `.env.local` exists and is readable
- Verify `VITE_` prefix (Vite requires this for browser access)
- Restart dev server after env changes

### "Speech recognition not working"
- Check browser has microphone permission
- Test with browser's native Web Speech API first
- Ensure HTTPS in production (required for microphone)

### "Gestures not detecting"
- Check camera has good lighting
- Hand must be fully visible to camera
- Ensure hand pose model loaded successfully

### "Collaborative coding lagging"
- Check network connection
- Monitor WebSocket messages in DevTools
- Consider using faster signaling server

---

## Next Steps

1. **Pick your AI provider** (OpenAI recommended for beginners)
2. **Create API account** and get keys
3. **Add environment variables** to `.env.local`
4. **Install dependencies** with npm
5. **Copy integration code** from above
6. **Test each prototype**
7. **Deploy when ready!**

Good luck! Your project is ready for real AI now.
