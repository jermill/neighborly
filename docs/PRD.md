# Product Requirements Document (PRD)  
**Project:** Neighborly Chat PWA  
**Version:** 1.0 MVP  
**Tech Stack:** React + Vite + Netlify  

---

## 1. Product Overview

Neighborly Chat is a React-based Progressive Web App that lets people in the same area join interest-based neighborhood chat rooms with optional anonymity. The experience is mobile-first, bento-grid home, extremely minimal, and installable as a PWA.

**Goals**
- Help people meet neighbors by interest with almost zero learning curve
- Keep the interface visually minimal and cognitively light (few actions, clear labels)
- Ship a tiny, robust MVP that's easy to extend

---

## 2. Users and Use Cases

**Primary user types**
- New neighbor: just moved in; wants to introduce themselves and ask basic questions
- Existing neighbor: wants lightweight themed rooms instead of noisy general feeds
- Privacy-conscious neighbor: wants to chat under a handle, not their full name

**Core use cases (MVP)**
- Simple signup with name, email, password, and optional "Use anonymous display" checkbox
- Land on a single bento grid screen and tap into one of a few pre-set rooms to send plain-text messages

**Explicit non-goals for MVP**
- No media uploads (images, video, files)
- No DMs or friend system
- No reactions beyond an optional single "like"
- No complex profile fields, badges, levels, or feed algorithms

---

## 3. Functional Requirements

### 3.1 Onboarding & Auth (minimal)

**Sign up**
- Fields: Name, Email, Password, "Use anonymous display" checkbox
- If anonymous is checked, app uses an auto-generated handle (e.g., Neighbor123)

**Log in / Log out**
- Email + password; single, uncluttered auth screen

**Forgot password**
- Basic email reset link, single screen

### 3.2 Neighborhood Context & Room List

- On first login, user sets ZIP code and simple radius slider (1–10 miles)
- v1 behavior: ZIP/radius only used to personalize copy

**Home = Single bento grid screen**

Exact initial rooms:
- **New Neighbors** – Intros and "just moved here" questions
- **Families** – Parenting, schools, kid activities
- **Singles** – Meeting other single neighbors
- **Game Night** – Board games, video games, watch parties
- **Arts & Crafts** – Creative hobbies, makers, DIY
- **LGBTQ+ Community** – Queer neighbors and allies connecting
- **Pets & Pet Lovers** – Pet questions, meetups, recommendations

### 3.3 Chat Rooms (simple group chat)

- Each room is a real-time group text chat:
  - Vertically stacked messages, newest at bottom, infinite scroll upwards
  - Message structure: display name (or handle), timestamp, message text
  - Message input fixed at bottom with single send button
- **Real-time behavior**
  - Messages appear within ~1 second for all connected users
  - Persist at least last 100–200 messages per room
- **Optional feature**
  - Single heart "like" per message

### 3.4 Profile & Anonymity

**Profile screen**
- Edit Name
- Toggle "Use anonymous display"
- View-only: Email, ZIP, radius
- "Delete my account" button

### 3.5 Safety & Guidelines

- Per-message menu with:
  - "Report message"
  - "Block user"
- MVP behavior:
  - Block: locally hides all messages from that user
  - Report: writes to admin log for manual review
- Static "Community Guidelines" page

---

## 4. Non-Functional Requirements

**Simplicity principle**
- Any new feature must pass: "Does this increase cognitive load?"

**UI/UX style**
- Minimalist, content-first: plenty of white space, one primary accent color
- Buttons and tap targets large and clearly labeled

**Performance**
- Keep initial JS bundle small; lazy-load Profile and Guidelines
- PWA: fast repeat loads using cached shell; pass Lighthouse PWA checks

**Platform**
- React SPA, responsive: optimized first for small screens, then desktop
- Hosted on Netlify with HTTPS and automatic deploys from GitHub

---

## 5. Tech Stack & Architecture

**Frontend**
- React 18 + React Router
- Vite for build tool
- CSS Grid for bento layout
- React Context for state management

**PWA**
- vite-plugin-pwa
- Service worker with offline support
- Web app manifest

**Backend (MVP)**
- Mock data with localStorage for demo
- Ready to integrate with Supabase/Firebase

**Dev workflow**
- GitHub repo
- Netlify for hosting
- Automatic deploys from main branch

---

## 6. Screens

1. Auth (Login/Signup/Forgot Password)
2. Bento Home (7 room tiles)
3. Chat Room
4. Profile
5. Guidelines

---

## 7. Implementation Status

✅ **M1: Project Setup**
- React + Vite scaffolding
- PWA configuration
- Netlify deployment config

✅ **M2: Authentication**
- Login/Signup with validation
- Anonymous mode
- Mock user storage with localStorage

✅ **M3: Home & Navigation**
- Bento grid layout
- 7 themed rooms with colors
- Unread indicators

✅ **M4: Chat Functionality**
- Message display with timestamps
- Message input with validation
- Mock real-time updates
- Like functionality

✅ **M5: Profile & Safety**
- Profile editing
- Anonymous toggle
- Block user functionality
- Report message functionality
- Community guidelines page

---

## 8. Future Enhancements

**Phase 2 (Post-MVP)**
- Real backend integration (Supabase/Firebase)
- WebSocket real-time messaging
- Push notifications
- Location-based filtering
- User avatars

**Phase 3 (Growth)**
- User-created rooms
- Direct messaging
- Enhanced moderation tools
- Analytics dashboard

---

## 9. Success Metrics

**MVP Launch Criteria**
- ✅ All 5 screens functional
- ✅ PWA installable on mobile
- ✅ Responsive on all screen sizes
- ✅ Lighthouse PWA score 90+
- ✅ Clean, minimal UI
- ✅ Demo-ready with mock data

**Post-Launch Metrics** (when backend integrated)
- Daily active users per neighborhood
- Messages sent per day
- User retention (7-day, 30-day)
- Time spent in app
- Rooms per user engagement

---

Built with focus on simplicity, usability, and community connection.



