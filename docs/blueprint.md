# Design-to-Code Bridge: Complete Blueprint & Security Analysis

## Table of Contents

1. [App Purpose & Solution](#app-purpose--solution)
2. [Current Architecture](#current-architecture)
3. [Security Flaws Analysis](#security-flaws-analysis)
4. [Secure Go + Angular Architecture](#secure-go--angular-architecture)
5. [Code Scaffold](#code-scaffold)

---

## App Purpose & Solution

### Problem Statement

**Design-to-Code Bridge** addresses critical challenges in modern software development:

#### 1. **Slow Code Writing**
- **Issue**: Traditional keyboard typing is time-consuming for complex logic and boilerplate code
- **Impact**: Developers waste 30-40% of time on repetitive code patterns
- **Solution**: Voice-to-code converts natural language to functional code instantly

#### 2. **Developer Isolation**
- **Issue**: Remote collaboration is difficult, especially for pair programming
- **Impact**: Knowledge transfer is slow, code quality suffers
- **Solution**: Real-time collaborative coding with WebRTC P2P synchronization

#### 3. **Code Quality Issues**
- **Issue**: Manual code review and optimization takes significant time
- **Impact**: Bugs reach production, technical debt accumulates
- **Solution**: AI-powered real-time code analysis with quality metrics

#### 4. **Accessibility Barriers**
- **Issue**: Keyboard-only interaction limits productivity and excludes users with mobility issues
- **Impact**: Reduced diversity in tech, higher RSI rates
- **Solution**: Gesture-based controls and voice input

#### 5. **Context Loss**
- **Issue**: Switching between tools causes mental overhead
- **Impact**: 15-20% productivity loss from context switching
- **Solution**: Integrated AI overlay with inline suggestions

### What This React Web App Provides

**Design-to-Code Bridge** is a **proof-of-concept platform** showcasing four AI-assisted development interfaces:

#### Four Core Prototypes

1. **Voice-to-Code** - Convert speech to executable code
   - Natural language → Code generation
   - Multi-language support (input & output)
   - Real-time transcription

2. **Gesture Recognition** - Hands-free IDE control
   - Webcam-based hand gesture recognition
   - 6+ gesture commands (select, copy, format, delete, navigate)
   - Spatial awareness for natural interaction

3. **Collaborative Coding** - Real-time pair programming
   - WebRTC P2P synchronization
   - Live cursor tracking
   - Shared AI suggestions
   - Built-in video/chat

4. **AI Assistant Overlay** - Context-aware code assistance
   - Real-time code analysis
   - Quality metrics (readability, performance, security)
   - Inline suggestions with one-click fixes
   - Pattern recognition and best practices

### Business Value

#### For Developers
- FAST: 50-70% faster code generation
- QUALITY: Fewer bugs and security issues
- COLLAB: Better collaboration and mentoring
- ACCESS: More accessible development environment

#### For Organizations
- PROD: Increased productivity - 30-40% reduction in development time
- COST: Reduced costs - Less code review overhead
- SPEED: Faster time-to-market
- SAFE: Improved code quality and security
- TEAM: Better team collaboration
- INCLUDE: More inclusive development practices

---

## Current Architecture

### Technology Stack

#### Frontend (React)
```
React 18.3.1 + TypeScript 5.9.2
├── UI Framework: React + React Router DOM 6.30.1
├── Styling: Tailwind CSS 3.4.17 + Atelier Design System
├── Components: Radix UI (40+ components)
├── State: React Query + Zustand (planned)
├── Forms: React Hook Form + Zod validation
└── Build: Vite 7.1.2
```

#### Backend (Express.js)
```
Express 5.1.0 (TypeScript)
├── Server: Node.js + Express
├── Real-time: WebRTC + WebSocket (planned)
├── Validation: Zod schemas
└── API: REST endpoints
```

### Architecture Layers

```
┌─────────────────────────────────────────────────────────┐
│                    Client Layer (React)                  │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Pages: Index, VoiceToCode, GestureRecognition   │   │
│  │ Components: Header, FeatureCard, UI library     │   │
│  │ State: React Query for server state             │   │
│  └─────────────────────────────────────────────────┘   │
│                          ↓                               │
│              Real-Time Communication                     │
│  ┌────────────────┐  ┌──────────────────────────┐     │
│  │ WebRTC (P2P)   │  │ WebSocket (Fallback)      │     │
│  └────────────────┘  └──────────────────────────┘     │
│                          ↓                               │
│                  Server Layer (Express)                  │
│  ┌─────────────────────────────────────────────────┐   │
│  │ API Routes: /api/ping, /api/demo               │   │
│  │ Middleware: CORS, JSON parser                   │   │
│  │ AI Services: (Planned integration)              │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### How It Was Built

#### Development Process
1. **Frontend-first approach** - React SPA with component library
2. **Design system** - Atelier color system for consistent UI
3. **Type safety** - TypeScript throughout
4. **Component-driven** - Reusable Radix UI components
5. **Progressive enhancement** - Features planned but not fully implemented

#### Build & Deployment
- **Build Tool**: Vite for fast HMR and optimized builds
- **Package Manager**: pnpm for efficient dependency management
- **Deployment**: Vercel-ready configuration
- **File Structure**: Monorepo with client/server separation

### How to Use It

#### Quick Start
```bash
# Install dependencies
npm install  # or pnpm install

# Start development server
npm run dev  # or pnpm dev

# Visit http://localhost:8080
```

#### Usage Workflows

**1. Voice-to-Code**
```
1. Navigate to /voice-to-code
2. Click "Start Recording"
3. Speak code description
4. View generated code
5. Copy to clipboard
```

**2. Gesture Recognition**
```
1. Navigate to /gesture-recognition
2. Enable camera
3. Show hand gestures
4. Execute IDE commands
```

**3. Collaborative Coding**
```
1. Navigate to /collaborative-coding
2. Initiate session
3. Share link with partner
4. Code together in real-time
```

**4. AI Overlay**
```
1. Navigate to /ai-overlay
2. Type code in editor
3. View real-time suggestions
4. Apply fixes with one click
```

---

## Security Flaws Analysis

### Critical Security Vulnerabilities

#### 1. **No Authentication/Authorization** [CRITICAL]
**Severity**: HIGH  
**Impact**: Unauthorized access to all features and data

**Issues**:
- No user authentication system
- No role-based access control (RBAC)
- All endpoints are publicly accessible
- Session management missing
- No JWT or OAuth implementation

**Risk**:
- Anyone can access collaborative sessions
- No audit trail
- Potential data leakage
- Cannot track malicious users

#### 2. **CORS Misconfiguration** [HIGH]
**Severity**: HIGH  
**Impact**: Cross-origin attacks possible

**Issues**:
```typescript
// server/index.ts - Line 10
app.use(cors());  // Allows ALL origins
```

**Risk**:
- Any website can make requests to your API
- CSRF attacks possible
- Credential theft risk
- Data exfiltration

#### 3. **No Input Validation** [HIGH]
**Severity**: HIGH  
**Impact**: Injection attacks, XSS, code execution

**Issues**:
- No request size limits
- No input sanitization
- Zod schemas mentioned but not implemented
- No SQL injection protection (if DB added)
- Code generation accepts arbitrary input

**Risk**:
- Code injection attacks
- XSS via generated code
- ReDoS (Regular Expression Denial of Service)
- Memory exhaustion attacks

#### 4. **Missing Rate Limiting** [MEDIUM]
**Severity**: MEDIUM  
**Impact**: DoS attacks, resource exhaustion

**Issues**:
- No rate limiting on API endpoints
- No protection against brute force
- Unlimited requests allowed
- AI service calls could be abused

**Risk**:
- DoS attacks
- High API costs
- Service unavailability
- Resource exhaustion

#### 5. **Unencrypted Data Transmission** [MEDIUM]
**Severity**: MEDIUM  
**Impact**: Man-in-the-middle attacks

**Issues**:
- No HTTPS enforcement
- No certificate pinning
- WebRTC connections not encrypted (planned but not implemented)
- Session data in plaintext

**Risk**:
- Eavesdropping on code/data
- Session hijacking
- Data interception
- Man-in-the-middle attacks

#### 6. **Missing Security Headers** [MEDIUM]
**Severity**: MEDIUM  
**Impact**: XSS, clickjacking, MIME sniffing

**Issues**:
- No Content-Security-Policy (CSP)
- No X-Frame-Options
- No X-Content-Type-Options
- No Strict-Transport-Security (HSTS)
- No Referrer-Policy

**Risk**:
- XSS attacks
- Clickjacking
- MIME sniffing attacks
- Information leakage via referrer

#### 7. **Environment Variable Exposure** [LOW]
**Severity**: LOW  
**Impact**: Configuration leakage

**Issues**:
```typescript
// server/index.ts - Line 16
const ping = process.env.PING_MESSAGE ?? "ping";
// No validation, could leak sensitive config
```

**Risk**:
- API keys could be exposed
- Configuration leakage
- Debug information disclosure

#### 8. **No Request Logging/Monitoring** [LOW]
**Severity**: LOW  
**Impact**: No attack detection

**Issues**:
- No request logging
- No error tracking (Sentry mentioned but not implemented)
- No intrusion detection
- No audit logs

**Risk**:
- Attacks go undetected
- No forensic capabilities
- Cannot track malicious behavior

#### 9. **Client-Side Security Issues** [MEDIUM]
**Severity**: MEDIUM  
**Impact**: Client-side attacks

**Issues**:
- API endpoints exposed in client code
- No CSRF tokens
- No secure cookie flags
- Sensitive data in localStorage (if used)

**Risk**:
- CSRF attacks
- API endpoint enumeration
- Client-side data theft

#### 10. **WebRTC Security Concerns** [MEDIUM]
**Severity**: MEDIUM  
**Impact**: P2P security issues

**Issues**:
- WebRTC not fully implemented
- No STUN/TURN server security
- No ICE candidate validation
- No encryption key management

**Risk**:
- Unauthorized peer connections
- Data interception
- Session hijacking

### Security Flaw Summary

| Severity | Count | Examples |
|----------|-------|----------|
| **CRITICAL** | 1 | No authentication |
| **HIGH** | 3 | CORS, Input validation, No rate limiting |
| **MEDIUM** | 4 | Encryption, Headers, Client-side, WebRTC |
| **LOW** | 2 | Logging, Environment variables |

**Total Security Issues**: 10 critical flaws identified

---

## Secure Go + Angular Architecture

### Architecture Overview

```
┌──────────────────────────────────────────────────────────────┐
│                    Angular Frontend (Client)                  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Angular 18+ with Standalone Components               │   │
│  │ ├── Components: Feature-based modules                │   │
│  │ ├── Services: HTTP, WebSocket, Auth                  │   │
│  │ ├── Guards: Authentication & Authorization           │   │
│  │ ├── Interceptors: JWT, Error handling, Logging       │   │
│  │ └── State: NgRx or Signals (reactive state)          │   │
│  └──────────────────────────────────────────────────────┘   │
│                          ↓ HTTPS/WSS                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ API Gateway (Go)                                      │   │
│  │ ├── Rate Limiting (Redis)                            │   │
│  │ ├── Authentication (JWT validation)                  │   │
│  │ ├── Request Validation                               │   │
│  │ └── Load Balancing                                   │   │
│  └──────────────────────────────────────────────────────┘   │
│                          ↓                                    │
│              Go Microservices (Backend)                       │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────┐  │
│  │ Auth Service     │  │ Code Gen Service │  │ Collab   │  │
│  │ - JWT generation │  │ - AI integration │  │ Service  │  │
│  │ - OAuth2         │  │ - Validation     │  │ - WebRTC │  │
│  │ - RBAC           │  │ - Sanitization   │  │ - Sync   │  │
│  └──────────────────┘  └──────────────────┘  └──────────┘  │
│                          ↓                                    │
│                  Infrastructure Layer                         │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────┐  │
│  │ PostgreSQL       │  │ Redis Cache      │  │ Message  │  │
│  │ - Encrypted      │  │ - Sessions       │  │ Queue    │  │
│  │ - Audited        │  │ - Rate limits    │  │ (RabbitMQ)│ │
│  └──────────────────┘  └──────────────────┘  └──────────┘  │
└──────────────────────────────────────────────────────────────┘
```

### Security Architecture

#### 1. **Authentication & Authorization**

**Go Backend (JWT + OAuth2)**
```go
// JWT-based authentication
// OAuth2 for third-party providers (GitHub, Google)
// RBAC with roles: admin, developer, viewer
// Refresh token rotation
// Session invalidation on logout
```

**Angular Frontend**
```typescript
// Auth Guards for route protection
// HTTP Interceptor for JWT injection
// Token refresh mechanism
// Automatic logout on token expiry
```

#### 2. **Input Validation & Sanitization**

**Go Backend**
```go
// Struct validation with go-playground/validator
// Input sanitization for XSS prevention
// SQL injection protection (parameterized queries)
// Code generation sandboxing
// Request size limits
```

**Angular Frontend**
```typescript
// Reactive forms with validators
// Input sanitization (Angular DomSanitizer)
// TypeScript type safety
// Client-side validation (UX only, not security)
```

#### 3. **API Security**

```go
// CORS with allowlist (not allow all)
// Rate limiting per user/IP
// Request signing for sensitive operations
// API versioning
// Request/response encryption for sensitive data
```

#### 4. **Communication Security**

```
HTTPS Only (TLS 1.3)
├── Certificate pinning
├── HSTS headers
└── Perfect forward secrecy

WebSocket Security (WSS)
├── JWT authentication on connection
├── Message encryption
└── Connection origin validation

WebRTC Security
├── STUN/TURN with authentication
├── ICE candidate validation
├── DTLS for encryption
└── Key exchange via secure signaling
```

#### 5. **Data Protection**

```go
// Database encryption at rest
// Encrypted backups
// PII anonymization
// GDPR compliance (data deletion)
// Audit logging (immutable)
```

#### 6. **Monitoring & Logging**

```
Structured Logging (Go)
├── Request/response logging
├── Security event logging
├── Error tracking (Sentry)
└── Performance monitoring

Angular Frontend
├── Error logging service
├── User action tracking (privacy-compliant)
└── Performance metrics
```

### Technology Stack (Secure)

#### Frontend: Angular 18+
```
Angular 18+ with Standalone Components
├── TypeScript 5.9+ (strict mode)
├── Angular Material / Tailwind CSS
├── RxJS for reactive programming
├── NgRx or Signals for state management
├── Angular Universal (SSR)
└── PWA capabilities
```

#### Backend: Go 1.21+
```
Go 1.21+ (Microservices)
├── Gin or Echo (HTTP framework)
├── JWT-GO (authentication)
├── GORM (ORM with SQL injection protection)
├── Redis (caching, sessions, rate limiting)
├── PostgreSQL (primary database)
├── gRPC (inter-service communication)
└── Docker + Kubernetes (containerization)
```

#### Security Libraries
```
Go Security Stack
├── github.com/golang-jwt/jwt/v5
├── golang.org/x/crypto (bcrypt, argon2)
├── github.com/redis/go-redis
├── github.com/go-playground/validator
└── github.com/owasp-amass/amass (security scanning)

Angular Security
├── @angular/common/http (secure HTTP client)
├── @angular/platform-browser (sanitization)
├── CSP meta tags
└── Angular security best practices
```

---

## Code Scaffold

### Project Structure

```
design-to-code-bridge-go-angular/
├── frontend/                          # Angular Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/                  # Core services & guards
│   │   │   │   ├── guards/
│   │   │   │   │   ├── auth.guard.ts
│   │   │   │   │   └── role.guard.ts
│   │   │   │   ├── interceptors/
│   │   │   │   │   ├── auth.interceptor.ts
│   │   │   │   │   ├── error.interceptor.ts
│   │   │   │   │   └── logging.interceptor.ts
│   │   │   │   ├── services/
│   │   │   │   │   ├── auth.service.ts
│   │   │   │   │   ├── http.service.ts
│   │   │   │   │   └── storage.service.ts
│   │   │   │   └── models/
│   │   │   │       └── user.model.ts
│   │   │   ├── features/
│   │   │   │   ├── auth/
│   │   │   │   │   ├── components/
│   │   │   │   │   │   ├── login/
│   │   │   │   │   │   └── register/
│   │   │   │   │   └── auth.routes.ts
│   │   │   │   ├── voice-to-code/
│   │   │   │   │   ├── components/
│   │   │   │   │   │   ├── recorder/
│   │   │   │   │   │   ├── transcription/
│   │   │   │   │   │   └── code-preview/
│   │   │   │   │   ├── services/
│   │   │   │   │   │   └── voice.service.ts
│   │   │   │   │   └── voice-to-code.routes.ts
│   │   │   │   ├── gesture-recognition/
│   │   │   │   │   ├── components/
│   │   │   │   │   │   ├── camera-feed/
│   │   │   │   │   │   └── gesture-detector/
│   │   │   │   │   └── gesture.routes.ts
│   │   │   │   ├── collaborative-coding/
│   │   │   │   │   ├── components/
│   │   │   │   │   │   ├── editor/
│   │   │   │   │   │   ├── cursor-tracker/
│   │   │   │   │   │   └── chat/
│   │   │   │   │   ├── services/
│   │   │   │   │   │   └── webrtc.service.ts
│   │   │   │   │   └── collaborative.routes.ts
│   │   │   │   └── ai-overlay/
│   │   │   │       ├── components/
│   │   │   │       │   ├── code-editor/
│   │   │   │       │   ├── suggestions/
│   │   │   │       │   └── quality-metrics/
│   │   │   │       └── ai-overlay.routes.ts
│   │   │   ├── shared/
│   │   │   │   ├── components/
│   │   │   │   ├── directives/
│   │   │   │   └── pipes/
│   │   │   └── app.config.ts
│   │   ├── assets/
│   │   ├── environments/
│   │   │   ├── environment.ts
│   │   │   └── environment.prod.ts
│   │   └── main.ts
│   ├── angular.json
│   ├── tsconfig.json
│   └── package.json
│
├── backend/                           # Go Microservices
│   ├── cmd/
│   │   ├── api-gateway/
│   │   │   └── main.go
│   │   ├── auth-service/
│   │   │   └── main.go
│   │   ├── codegen-service/
│   │   │   └── main.go
│   │   └── collaboration-service/
│   │       └── main.go
│   ├── internal/
│   │   ├── api-gateway/
│   │   │   ├── handlers/
│   │   │   ├── middleware/
│   │   │   │   ├── auth.go
│   │   │   │   ├── cors.go
│   │   │   │   ├── rate-limit.go
│   │   │   │   └── logging.go
│   │   │   └── router.go
│   │   ├── auth/
│   │   │   ├── handlers/
│   │   │   │   ├── login.go
│   │   │   │   ├── register.go
│   │   │   │   └── refresh.go
│   │   │   ├── models/
│   │   │   │   └── user.go
│   │   │   ├── services/
│   │   │   │   └── jwt.go
│   │   │   └── repository/
│   │   │       └── user.go
│   │   ├── codegen/
│   │   │   ├── handlers/
│   │   │   │   ├── transcribe.go
│   │   │   │   └── generate.go
│   │   │   ├── services/
│   │   │   │   ├── ai.go
│   │   │   │   └── sanitizer.go
│   │   │   └── sandbox/
│   │   │       └── executor.go
│   │   ├── collaboration/
│   │   │   ├── handlers/
│   │   │   │   └── session.go
│   │   │   ├── services/
│   │   │   │   ├── webrtc.go
│   │   │   │   └── sync.go
│   │   │   └── repository/
│   │   │       └── session.go
│   │   └── shared/
│   │       ├── database/
│   │       │   └── postgres.go
│   │       ├── cache/
│   │       │   └── redis.go
│   │       ├── config/
│   │       │   └── config.go
│   │       ├── logger/
│   │       │   └── logger.go
│   │       └── validator/
│   │           └── validator.go
│   ├── pkg/
│   │   ├── security/
│   │   │   ├── encryption.go
│   │   │   ├── hashing.go
│   │   │   └── sanitizer.go
│   │   └── websocket/
│   │       └── server.go
│   ├── migrations/
│   │   └── *.sql
│   ├── docker/
│   │   ├── Dockerfile.api-gateway
│   │   ├── Dockerfile.auth
│   │   └── docker-compose.yml
│   ├── go.mod
│   └── go.sum
│
├── infrastructure/
│   ├── kubernetes/
│   │   ├── deployments/
│   │   ├── services/
│   │   └── ingress/
│   └── terraform/
│       └── main.tf
│
├── scripts/
│   ├── setup.sh
│   ├── migrate.sh
│   └── deploy.sh
│
├── docs/
│   ├── API.md
│   ├── DEPLOYMENT.md
│   └── SECURITY.md
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── security.yml
│
├── docker-compose.yml
├── Makefile
└── README.md
```

### Key Files Implementation

#### 1. Angular Auth Service (`frontend/src/app/core/services/auth.service.ts`)

```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User, LoginRequest, RegisterRequest } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = 'https://api.design-to-code-bridge.com/v1';
  
  private currentUser$ = new BehaviorSubject<User | null>(null);
  
  login(credentials: LoginRequest): Observable<{ accessToken: string; refreshToken: string }> {
    return this.http.post<{ accessToken: string; refreshToken: string }>(
      `${this.apiUrl}/auth/login`,
      credentials
    ).pipe(
      tap(response => {
        this.setTokens(response.accessToken, response.refreshToken);
        this.loadUser();
      })
    );
  }
  
  register(data: RegisterRequest): Observable<{ accessToken: string; refreshToken: string }> {
    return this.http.post<{ accessToken: string; refreshToken: string }>(
      `${this.apiUrl}/auth/register`,
      data
    ).pipe(
      tap(response => {
        this.setTokens(response.accessToken, response.refreshToken);
        this.loadUser();
      })
    );
  }
  
  logout(): void {
    this.clearTokens();
    this.currentUser$.next(null);
    this.router.navigate(['/login']);
  }
  
  private setTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }
  
  private clearTokens(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
  
  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }
  
  isAuthenticated(): boolean {
    return !!this.getAccessToken() && !this.isTokenExpired();
  }
  
  private isTokenExpired(): boolean {
    const token = this.getAccessToken();
    if (!token) return true;
    
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 < Date.now();
    } catch {
      return true;
    }
  }
  
  private loadUser(): void {
    // Load user from JWT token or API
  }
}
```

#### 2. Angular Auth Interceptor (`frontend/src/app/core/interceptors/auth.interceptor.ts`)

```typescript
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  
  const token = authService.getAccessToken();
  
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // Token expired, try refresh or logout
        authService.logout();
      }
      return throwError(() => error);
    })
  );
};
```

#### 3. Go API Gateway (`backend/internal/api-gateway/middleware/auth.go`)

```go
package middleware

import (
	"context"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

type Claims struct {
	UserID string `json:"user_id"`
	Email  string `json:"email"`
	Role   string `json:"role"`
	jwt.RegisteredClaims
}

func AuthMiddleware(jwtSecret string) gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Authorization header required"})
			c.Abort()
			return
		}

		tokenString := strings.TrimPrefix(authHeader, "Bearer ")
		if tokenString == authHeader {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid authorization header format"})
			c.Abort()
			return
		}

		token, err := jwt.ParseWithClaims(tokenString, &Claims{}, func(token *jwt.Token) (interface{}, error) {
			return []byte(jwtSecret), nil
		})

		if err != nil || !token.Valid {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid or expired token"})
			c.Abort()
			return
		}

		claims, ok := token.Claims.(*Claims)
		if !ok {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token claims"})
			c.Abort()
			return
		}

		// Add user info to context
		ctx := context.WithValue(c.Request.Context(), "userID", claims.UserID)
		ctx = context.WithValue(ctx, "userRole", claims.Role)
		c.Request = c.Request.WithContext(ctx)

		c.Next()
	}
}
```

#### 4. Go Rate Limiting (`backend/internal/api-gateway/middleware/rate-limit.go`)

```go
package middleware

import (
	"context"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/redis/go-redis/v9"
	"golang.org/x/time/rate"
)

func RateLimitMiddleware(redisClient *redis.Client) gin.HandlerFunc {
	limiter := rate.NewLimiter(rate.Every(time.Second), 10) // 10 requests per second

	return func(c *gin.Context) {
		clientIP := c.ClientIP()
		key := "rate_limit:" + clientIP

		// Check Redis for rate limit
		ctx := context.Background()
		count, err := redisClient.Incr(ctx, key).Result()
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Rate limit check failed"})
			c.Abort()
			return
		}

		if count == 1 {
			redisClient.Expire(ctx, key, time.Minute)
		}

		if count > 100 { // 100 requests per minute
			c.JSON(http.StatusTooManyRequests, gin.H{"error": "Rate limit exceeded"})
			c.Abort()
			return
		}

		// Also use in-memory limiter for additional protection
		if !limiter.Allow() {
			c.JSON(http.StatusTooManyRequests, gin.H{"error": "Rate limit exceeded"})
			c.Abort()
			return
		}

		c.Next()
	}
}
```

#### 5. Go Input Validation (`backend/internal/codegen/services/sanitizer.go`)

```go
package services

import (
	"fmt"
	"regexp"
	"strings"
	
	"github.com/go-playground/validator/v10"
)

type CodeGenerationRequest struct {
	Description string `json:"description" validate:"required,min=10,max=1000"`
	Language    string `json:"language" validate:"required,oneof=typescript javascript python go rust"`
	Context     string `json:"context,omitempty" validate:"max=5000"`
}

func ValidateAndSanitize(request *CodeGenerationRequest) error {
	validate := validator.New()
	
	if err := validate.Struct(request); err != nil {
		return fmt.Errorf("validation failed: %w", err)
	}

	// Sanitize description
	request.Description = sanitizeString(request.Description)
	request.Context = sanitizeString(request.Context)

	// Additional security checks
	if containsMaliciousPatterns(request.Description) {
		return fmt.Errorf("request contains potentially malicious content")
	}

	return nil
}

func sanitizeString(input string) string {
	// Remove HTML tags
	htmlTagRegex := regexp.MustCompile(`<[^>]*>`)
	input = htmlTagRegex.ReplaceAllString(input, "")

	// Escape special characters
	input = strings.ReplaceAll(input, "<", "&lt;")
	input = strings.ReplaceAll(input, ">", "&gt;")
	input = strings.ReplaceAll(input, "\"", "&quot;")
	input = strings.ReplaceAll(input, "'", "&#x27;")

	return strings.TrimSpace(input)
}

func containsMaliciousPatterns(input string) bool {
	// Check for SQL injection patterns
	sqlPatterns := []string{
		"'; DROP",
		"UNION SELECT",
		"OR 1=1",
	}

	for _, pattern := range sqlPatterns {
		if strings.Contains(strings.ToUpper(input), pattern) {
			return true
		}
	}

	return false
}
```

#### 6. Go CORS Middleware (Secure) (`backend/internal/api-gateway/middleware/cors.go`)

```go
package middleware

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

func SecureCORSMiddleware(allowedOrigins []string) gin.HandlerFunc {
	originMap := make(map[string]bool)
	for _, origin := range allowedOrigins {
		originMap[origin] = true
	}

	return func(c *gin.Context) {
		origin := c.GetHeader("Origin")

		if originMap[origin] {
			c.Header("Access-Control-Allow-Origin", origin)
			c.Header("Access-Control-Allow-Credentials", "true")
			c.Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
			c.Header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
			c.Header("Access-Control-Max-Age", "86400")
		}

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}

		c.Next()
	}
}
```

#### 7. Angular Auth Guard (`frontend/src/app/core/guards/auth.guard.ts`)

```typescript
import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
};
```

#### 8. Go Main API Gateway (`backend/cmd/api-gateway/main.go`)

```go
package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/redis/go-redis/v9"
	
	"design-to-code-bridge/internal/api-gateway/middleware"
	"design-to-code-bridge/internal/api-gateway/handlers"
)

func main() {
	// Load configuration
	jwtSecret := os.Getenv("JWT_SECRET")
	if jwtSecret == "" {
		log.Fatal("JWT_SECRET environment variable is required")
	}

	allowedOrigins := []string{
		"https://design-to-code-bridge.com",
		"https://www.design-to-code-bridge.com",
	}

	// Initialize Redis for rate limiting
	redisClient := redis.NewClient(&redis.Options{
		Addr: os.Getenv("REDIS_ADDR"),
		Password: os.Getenv("REDIS_PASSWORD"),
		DB: 0,
	})

	// Setup Gin router
	r := gin.Default()

	// Security middleware
	r.Use(middleware.SecureCORSMiddleware(allowedOrigins))
	r.Use(middleware.RateLimitMiddleware(redisClient))
	r.Use(middleware.LoggingMiddleware())
	r.Use(middleware.SecurityHeadersMiddleware())

	// Public routes
	public := r.Group("/api/v1")
	{
		public.POST("/auth/login", handlers.LoginHandler)
		public.POST("/auth/register", handlers.RegisterHandler)
	}

	// Protected routes
	protected := r.Group("/api/v1")
	protected.Use(middleware.AuthMiddleware(jwtSecret))
	{
		protected.POST("/codegen/transcribe", handlers.TranscribeHandler)
		protected.POST("/codegen/generate", handlers.GenerateCodeHandler)
		protected.POST("/collaboration/create-session", handlers.CreateSessionHandler)
	}

	// Health check
	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{"status": "healthy"})
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("API Gateway starting on port %s", port)
	if err := r.Run(":" + port); err != nil {
		log.Fatal(err)
	}
}
```

### Security Headers Middleware

```go
func SecurityHeadersMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Header("X-Content-Type-Options", "nosniff")
		c.Header("X-Frame-Options", "DENY")
		c.Header("X-XSS-Protection", "1; mode=block")
		c.Header("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
		c.Header("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'")
		c.Header("Referrer-Policy", "strict-origin-when-cross-origin")
		c.Next()
	}
}
```

---

## Next Steps

1. **Set up Go workspace** with the provided structure
2. **Initialize Angular project** with standalone components
3. **Configure database** (PostgreSQL) with migrations
4. **Set up Redis** for caching and rate limiting
5. **Implement authentication** (JWT + OAuth2)
6. **Add security middleware** (rate limiting, CORS, headers)
7. **Implement input validation** and sanitization
8. **Set up CI/CD** with security scanning
9. **Configure monitoring** and logging
10. **Deploy** with HTTPS/TLS

---

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Go Security Best Practices](https://go.dev/doc/security/best-practices)
- [Angular Security Guide](https://angular.io/guide/security)
- [JWT Best Practices](https://datatracker.ietf.org/doc/html/rfc8725)

---

**Document Version**: 1.0  
**Last Updated**: 2025-01-08  
**Author**: mirabelle514
