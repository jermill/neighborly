# Development Guide

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### First-Time Setup

```bash
# Clone or navigate to the project
cd /Users/mill/Desktop/neighbor

# Install dependencies
npm install

# Start development server
npm run dev

# App runs at http://localhost:3000
```

### Available Commands

```bash
npm run dev       # Start development server with hot reload
npm run build     # Build for production (outputs to dist/)
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

## Project Structure

```
neighborly/
├── public/
│   └── icons/              # PWA icons (SVG placeholders, replace with PNG)
├── src/
│   ├── context/
│   │   └── AuthContext.jsx # Auth state & user management
│   ├── data/
│   │   └── mockData.js     # Mock data for rooms & messages
│   ├── pages/              # All page components
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── Home.jsx        # Bento grid
│   │   ├── ChatRoom.jsx    # Chat interface
│   │   ├── Profile.jsx
│   │   ├── Guidelines.jsx
│   │   └── *.css           # Page-specific styles
│   ├── App.jsx             # Routes & auth provider
│   ├── App.css
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles & utilities
├── vite.config.js          # Vite + PWA plugin config
├── netlify.toml            # Netlify deployment config
├── package.json
└── README.md
```

## Architecture

### State Management

**AuthContext** (`src/context/AuthContext.jsx`)
- Manages user authentication state
- Provides login, signup, logout functions
- Handles anonymous mode
- Uses localStorage for session persistence

**Mock Data** (`src/data/mockData.js`)
- Pre-populated messages for each room
- User blocking and reporting functionality
- Unread count calculations
- Ready for backend replacement

### Routing

Using React Router v6 with protected routes:
- Public routes: `/login`, `/signup`, `/forgot-password`
- Protected routes: `/home`, `/room/:roomId`, `/profile`
- Redirects based on auth state

### Styling Approach

- **Vanilla CSS** - No preprocessor, keeping it simple
- **CSS Custom Properties** - For theming and consistency
- **Mobile-First** - Media queries scale up, not down
- **BEM-like naming** - Component-specific class names
- **Minimal Bundle** - No heavy CSS frameworks

## Development Workflow

### Adding a New Feature

1. **Plan the component structure**
2. **Create component file** in appropriate directory
3. **Add styles** (co-located CSS file)
4. **Update routing** if needed
5. **Test on mobile and desktop**

### Code Style

- Use functional components with hooks
- Keep components focused and small
- Use descriptive variable names
- Comment complex logic
- Follow existing patterns

### Testing Locally

**Test PWA Features:**
```bash
npm run build
npm run preview
```

Then:
1. Open DevTools (F12)
2. Application tab → Service Workers
3. Check service worker registration
4. Test offline mode (Network tab → Offline)

**Test Responsive Design:**
1. DevTools → Device toolbar (Cmd+Shift+M)
2. Test on various screen sizes
3. Check touch targets (minimum 44x44px)

## Mock Data

### Current Demo Users

```javascript
// Regular user
email: 'demo@neighborly.app'
password: 'demo123'
displayName: 'Sarah Johnson'

// Anonymous user
email: 'anon@neighborly.app'
password: 'anon123'
displayName: 'Neighbor847'
```

### Adding Mock Messages

Edit `src/data/mockData.js`:

```javascript
const messages = {
  'room-id': [
    {
      id: 'unique-id',
      userId: 'user-id',
      displayName: 'Name or Handle',
      message: 'Message text',
      timestamp: Date.now(),
      likes: 0
    }
  ]
}
```

## Backend Integration

When ready to add a real backend:

### Option 1: Supabase

```bash
npm install @supabase/supabase-js
```

Replace mock functions in:
- `AuthContext.jsx` → Supabase auth
- `mockData.js` → Supabase realtime queries

### Option 2: Firebase

```bash
npm install firebase
```

Replace mock functions with Firebase:
- Authentication
- Firestore for messages
- Realtime listeners

### Required Backend Features

1. **Authentication**
   - Email/password signup & login
   - Password reset
   - Session management

2. **Database Schema**
   ```
   users
     - id
     - email
     - name
     - displayName
     - isAnonymous
     - zipCode
     - radius
     - createdAt

   rooms
     - id
     - name
     - description

   messages
     - id
     - roomId
     - userId
     - message
     - timestamp
     - likes

   blocks
     - userId (who blocked)
     - blockedUserId

   reports
     - messageId
     - reportedBy
     - reason
     - timestamp
   ```

3. **Real-time**
   - WebSocket or similar for instant message delivery
   - Presence indicators (optional)

## Deployment

### Netlify Deployment

**Automatic (via GitHub):**
1. Push to GitHub
2. Connect repo to Netlify
3. Auto-deploys on push to main

**Manual:**
```bash
npm run build
# Upload dist/ folder to Netlify
```

**Using Netlify CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Environment Variables

For production backend:
```bash
# In Netlify dashboard:
VITE_SUPABASE_URL=your-url
VITE_SUPABASE_ANON_KEY=your-key
```

Access in code:
```javascript
const url = import.meta.env.VITE_SUPABASE_URL
```

## PWA Configuration

Located in `vite.config.js`:

```javascript
VitePWA({
  registerType: 'autoUpdate',
  manifest: {
    name: 'Neighborly Chat',
    short_name: 'Neighborly',
    theme_color: '#4A90E2',
    // ... more config
  }
})
```

### Updating PWA Icons

Replace SVG files in `public/icons/` with PNG:
1. Create 512x512 source image
2. Use icon generator (pwabuilder.com)
3. Download all sizes
4. Replace files in public/icons/

## Performance Tips

### Bundle Size
- Lazy load routes with React.lazy()
- Keep dependencies minimal
- Check bundle with `npm run build -- --analyze`

### Caching Strategy
- Static assets: Long-term cache (1 year)
- Service worker: No cache (always fresh)
- API calls: Cache-first with revalidation

### Loading Performance
- Critical CSS inline
- Defer non-critical JavaScript
- Optimize images
- Use CDN for production

## Common Issues

**Issue: Service worker not updating**
- Solution: Hard refresh (Cmd+Shift+R)
- Check service worker cache name in vite.config.js

**Issue: Routes not working on Netlify**
- Solution: netlify.toml has SPA redirect rules

**Issue: Icons not showing**
- Solution: Generate proper PNG files from SVG placeholders

**Issue: Messages not persisting**
- Solution: Mock data is ephemeral; integrate backend for persistence

## Contributing

1. Create feature branch
2. Follow existing code style
3. Test thoroughly on mobile
4. Update documentation if needed
5. Submit PR with clear description

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [PWA Best Practices](https://web.dev/progressive-web-apps/)
- [Netlify Docs](https://docs.netlify.com)

---

Questions? Check the main README.md or PRD.md in docs/



