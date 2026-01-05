# Neighborly Chat PWA

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jermill/neighborly)

A React-based Progressive Web Application for neighborhood chat rooms, built with Vite and optimized for Netlify deployment.

## 🏘️ About

Neighborly Chat helps people connect with neighbors through interest-based chat rooms including:
- New Neighbors
- Families
- Singles
- Game Night
- Arts & Crafts
- LGBTQ+ Community
- Pets & Pet Lovers

## ✨ Features

- ✅ **PWA Support** - Installable on mobile and desktop
- ✅ **Minimal Design** - Clean, content-first interface
- ✅ **Bento Grid Layout** - Modern, touch-friendly room selection
- ✅ **Anonymous Mode** - Optional anonymity for privacy
- ✅ **Real-time Chat** - Instant messaging (mock data for demo)
- ✅ **Safety Features** - Block users and report messages
- ✅ **Mobile-First** - Optimized for all screen sizes

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will run at `http://localhost:3000`

### Demo Credentials

**Regular User:**
- Email: `demo@neighborly.app`
- Password: `demo123`

**Anonymous User:**
- Email: `anon@neighborly.app`
- Password: `anon123`

## 📁 Project Structure

```
neighborly/
├── public/
│   └── icons/               # PWA icons
├── src/
│   ├── context/
│   │   └── AuthContext.jsx  # Authentication & user state
│   ├── data/
│   │   └── mockData.js      # Mock data for demo
│   ├── pages/
│   │   ├── Login.jsx        # Login page
│   │   ├── Signup.jsx       # Signup page
│   │   ├── ForgotPassword.jsx
│   │   ├── Home.jsx         # Bento grid home
│   │   ├── ChatRoom.jsx     # Chat interface
│   │   ├── Profile.jsx      # User profile
│   │   └── Guidelines.jsx   # Community guidelines
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── vite.config.js           # Vite + PWA config
├── netlify.toml             # Netlify deployment config
└── package.json
```

## 🎨 Design Principles

Following the PRD requirements:

1. **Minimal Cognitive Load** - Few actions, clear labels, no hidden features
2. **Content-First** - Plenty of white space, single accent color
3. **Mobile-First** - Responsive design optimized for touch
4. **Fast & Lightweight** - Lazy loading, small bundle size

## 🔧 Tech Stack

- **Frontend:** React 18 + React Router
- **Build Tool:** Vite
- **PWA:** vite-plugin-pwa
- **Styling:** Vanilla CSS with CSS Grid
- **State:** React Context API
- **Hosting:** Netlify
- **Data:** Mock data (ready for backend integration)

## 🌐 Deployment to Netlify

### Option 1: GitHub Integration (Recommended)

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. Connect to Netlify:
   - Go to [Netlify](https://app.netlify.com)
   - "Add new site" → "Import an existing project"
   - Select your repository
   - Netlify auto-detects settings from `netlify.toml`
   - Click "Deploy"

### Option 2: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Option 3: Manual Deploy

```bash
npm run build
# Drag the 'dist' folder to netlify.com/drop
```

## 🔐 Mock Data

The app uses mock data for demonstration:

- **Auth:** In-memory user storage with localStorage persistence
- **Messages:** Pre-populated chat history per room
- **Real-time:** Simulated with local state updates
- **Safety:** Client-side blocking and reporting

Ready to integrate with:
- Supabase
- Firebase
- Custom backend API

## 📱 PWA Features

- Service worker with offline caching
- Web app manifest for installation
- Add to home screen prompts
- Optimized performance (Lighthouse 90+)

## 🛣️ Roadmap

Current MVP includes:
- ✅ Basic auth (signup, login, anonymous mode)
- ✅ 7 pre-set chat rooms
- ✅ Text-only messaging
- ✅ Block and report features
- ✅ Profile management

Future enhancements:
- Real backend integration (Supabase/Firebase)
- Location-based room filtering
- Push notifications
- Message reactions
- User-created rooms

## 📄 License

MIT

## 🤝 Contributing

This is an MVP built for demonstration. For production use, integrate with a real backend and implement proper authentication and data persistence.

---

Built with ❤️ using React + Vite + Netlify
