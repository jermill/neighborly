# Quick Start Guide

## 🚀 Get Running in 2 Minutes

### Step 1: Install Dependencies
```bash
cd /Users/mill/Desktop/neighbor
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Step 3: Login with Demo Account

**Regular User:**
- Email: `demo@neighborly.app`
- Password: `demo123`

**Or create a new account** and check the "anonymous" box to try anonymous mode!

---

## ✨ What to Try

1. **Browse Rooms** - Click any of the 7 room tiles on the home screen
2. **Send Messages** - Type and send messages in any room
3. **Like Messages** - Click the ❤️ to like messages
4. **Block/Report** - Click the ⋮ menu on any message (not your own)
5. **Edit Profile** - Click your avatar in the top right
6. **Toggle Anonymous** - Switch between real name and anonymous handle

---

## 📱 Test PWA Features

### Install as App
```bash
# Build production version
npm run build
npm run preview
```

Then in your browser:
1. Look for "Install" icon in address bar
2. Or use browser menu → "Install Neighborly"
3. App opens in standalone window!

### Test Offline
1. Open DevTools (F12)
2. Go to Network tab
3. Check "Offline" checkbox
4. Refresh - app still works!

---

## 🌐 Deploy to Netlify

### Fastest Way (Drag & Drop)
```bash
npm run build
# Drag the 'dist' folder to netlify.com/drop
```

### Best Way (GitHub Integration)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main

# Then connect repo in Netlify dashboard
```

---

## 📁 Key Files

- `src/App.jsx` - Main app with routing
- `src/pages/Home.jsx` - Bento grid home screen
- `src/pages/ChatRoom.jsx` - Chat interface
- `src/context/AuthContext.jsx` - Authentication logic
- `src/data/mockData.js` - Mock chat data
- `vite.config.js` - PWA configuration
- `netlify.toml` - Deployment settings

---

## 🎨 Customize

### Change Colors
Edit `src/index.css`:
```css
:root {
  --primary-color: #4A90E2;  /* Main blue */
  --accent-color: #50C878;   /* Green accent */
  /* ... more variables */
}
```

### Add a New Room
Edit `src/data/mockData.js`:
```javascript
export const ROOMS = [
  // ... existing rooms
  {
    id: 'your-room',
    name: 'Your Room',
    description: 'Room description',
    emoji: '🎯',
    color: '#FF6B9D'
  }
]
```

### Modify Mock Messages
Edit `src/data/mockData.js` - find `generateMockMessages()` function

---

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or edit vite.config.js to use different port
```

**Module not found?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build fails?**
```bash
# Clear cache and rebuild
rm -rf dist node_modules/.vite
npm install
npm run build
```

---

## 📚 Next Steps

- [ ] Read the full [README.md](../README.md)
- [ ] Check the [PRD](docs/PRD.md) for feature details
- [ ] See [DEVELOPMENT.md](docs/DEVELOPMENT.md) for architecture
- [ ] Replace SVG icons with PNG files (see public/icons/README.md)
- [ ] Integrate real backend (Supabase/Firebase)

---

## 🎯 Feature Checklist

✅ **Authentication**
- [x] Login/Signup
- [x] Anonymous mode
- [x] Forgot password
- [x] Logout

✅ **Chat**
- [x] 7 themed rooms
- [x] Real-time-like updates (mock)
- [x] Message likes
- [x] Timestamp display

✅ **Safety**
- [x] Block users
- [x] Report messages
- [x] Community guidelines

✅ **Profile**
- [x] Edit name
- [x] Toggle anonymous
- [x] View settings
- [x] Delete account

✅ **PWA**
- [x] Installable
- [x] Offline support
- [x] Service worker
- [x] Web manifest

✅ **UI/UX**
- [x] Mobile-first design
- [x] Bento grid layout
- [x] Minimalist style
- [x] Responsive

---

**Ready to go! 🎉**

Questions? Check the other docs or open an issue.



