# 🎯 QUICK REFERENCE GUIDE

## 🎨 Interactive Features

### Custom Cursor
- The cursor changes to a custom blue circle
- Enlarges when hovering over interactive elements
- Smooth tracking animation

### Particle Background
- 80 animated particles floating across the screen
- Particles connect when near each other
- Creates a dynamic network effect

### Scroll Progress Bar
- Blue bar at top of page
- Shows reading progress as you scroll
- Width increases from 0-100%

### Loading Screen
- Appears when page first loads
- Spinning loader animation
- Fades out after 1.5 seconds

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Alt + H` | Jump to Home section |
| `Alt + A` | Jump to About section |
| `Alt + S` | Jump to Skills section |
| `Alt + P` | Jump to Projects section |
| `Alt + C` | Jump to Contact section |
| `ESC` | Scroll to top |
| `Konami Code` | Secret easter egg! |

## 🎭 Animations

### Scroll Reveal
- Sections fade in as you scroll down
- Elements slide up from below
- Triggered when 15% of element is visible

### Typing Effect
- Cycles through 4 different roles
- Types: "AI Developer" → "Full Stack Developer" → "ML Engineer" → "Problem Solver"
- Pauses 2 seconds before deleting
- Continuous loop

### Counter Animation
- Stats count from 0 to target number
- Activates when About section is 50% visible
- Smooth easing animation over 2 seconds
- Projects: 15+ | Certifications: 4 | Technologies: 20+

### Skill Bars
- Progress bars fill from 0 to target percentage
- Shimmer effect slides across filled portion
- Staggered animation with delays
- Trigger when Skills section is 50% visible

### Card Hover Effects
- Cards lift up 10px on hover
- 3D rotation effect (2deg)
- Gradient line slides in from left
- Radial glow effect from center
- Box shadow intensifies

## 🎛️ Floating Action Buttons (FABs)

Located at bottom-right corner:

1. **↑ Arrow Button**
   - Scrolls page to top
   - Smooth scroll animation
   
2. **GitHub Button**
   - Links to your GitHub profile
   - Opens in new tab
   
3. **LinkedIn Button**
   - Links to your LinkedIn profile
   - Opens in new tab

## 🎨 Visual Effects Breakdown

### Navigation Bar
- Fixed at top of page
- Glass morphism effect (blur + transparency)
- Active section highlighting
- Hover effects on links
- Auto-hides when scrolling down
- Reappears when scrolling up

### Project Cards
- Height: 350px
- Overlay slides up on hover
- Shows full project description
- Displays technology tags
- Reveals GitHub and demo links
- Gradient background overlay

### Theme Toggle
- Fixed in top-right corner
- Toggles between sun/moon icon
- Rotates 15° on hover
- Scales to 110% on hover
- Currently toggles state (full theme change can be implemented)

## 🔧 Technical Details

### Performance
- Uses `requestAnimationFrame` for smooth animations
- Hardware acceleration with `transform: translateZ(0)`
- Intersection Observer for scroll animations
- CSS `will-change` for animated elements

### React Hooks Used
- `useState` - State management
- `useEffect` - Side effects and observers
- `useRef` - DOM element references
- Custom hooks:
  - `useTypingEffect` - Typing animation
  - `useCountUp` - Counter animation

### CSS Techniques
- CSS Custom Properties (variables)
- Flexbox & Grid layouts
- Backdrop-filter for glass morphism
- Gradient animations
- Transform 3D effects
- Cubic-bezier easing

## 📱 Responsive Breakpoints

| Device | Width | Changes |
|--------|-------|---------|
| Desktop | 1920px+ | Full layout, all features |
| Laptop | 1366px - 1920px | Optimized spacing |
| Tablet | 768px - 1365px | Modified nav, stacked cards |
| Mobile | < 768px | Single column, compact nav, reduced h1 size |

Mobile Adjustments:
- h1: 4rem → 2.5rem
- h2: 2.5rem → 2rem
- Navigation gaps: 2rem → 1rem
- Section padding: 100px → 60px
- Cards: Grid → Single column

## 🎯 Customization Tips

### Change Animation Speed
Look for these in CSS:
```css
transition: all 0.3s ease; /* Change 0.3s */
animation: fadeInUp 0.8s ease; /* Change 0.8s */
```

### Adjust Particle Count
In ParticlesBackground component:
```javascript
const particleCount = 80; // Reduce for better performance
```

### Modify Typing Speed
In App component:
```javascript
const typedText = useTypingEffect(roles, 100); // milliseconds per character
```

### Change Counter Duration
In useCountUp hook:
```javascript
function useCountUp(end, duration = 2000) // Change 2000
```

## 🐛 Troubleshooting

### Particles not showing
- Check browser console for errors
- Ensure Canvas is supported
- Try reducing particle count

### Animations laggy
- Check browser performance
- Reduce particle count
- Disable blur effects
- Use `prefers-reduced-motion`

### Cursor not visible
- Check if `cursor: none` is applied to body
- Verify custom cursor elements exist
- Try a different browser

### Scroll not smooth
- Check `scroll-behavior: smooth` on body
- Verify navigation links use `#` prefix
- Test in different browser

## 🎨 Color Variables Quick Reference

```css
--primary: #60a5fa;         /* Main accent color */
--primary-dark: #3b82f6;    /* Darker shade */
--primary-darker: #2563eb;  /* Darkest shade */
--bg-dark: #0f172a;         /* Main background */
--bg-darker: #1e293b;       /* Secondary background */
--bg-card: #334155;         /* Card background */
--text-primary: #f1f5f9;    /* Main text */
--text-secondary: #cbd5e1;  /* Body text */
--text-muted: #94a3b8;      /* Muted text */
```

## 🚀 Performance Checklist

- ✅ Minify CSS/JS for production
- ✅ Optimize images (use WebP)
- ✅ Enable gzip compression
- ✅ Add lazy loading for images
- ✅ Implement service worker for PWA
- ✅ Add meta tags for SEO
- ✅ Test on multiple devices
- ✅ Run Lighthouse audit

## 📞 Support

If you need help customizing your portfolio:
1. Check the README.md for detailed instructions
2. Review this quick reference guide
3. Inspect the code comments
4. Contact via email or GitHub

---

**Pro Tip**: Open browser DevTools (F12) and check the Console for keyboard shortcut hints!

Made with 💙 | Last updated: March 2026
