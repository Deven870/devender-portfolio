# Devender's Portfolio - AI/ML Engineer

A modern, responsive portfolio website built with **React + Vite + Tailwind CSS**.

## 🎯 Features

✅ Modern dark theme with gradient effects  
✅ Fully responsive design  
✅ Smooth scrolling navigation  
✅ Skills showcase with icons  
✅ Project cards with tech stack  
✅ GitHub statistics integration  
✅ Contact form  
✅ Resume download button  

---

## 🚀 Quick Start

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Start Development Server

```bash
npm run dev
```

The app will run at: **http://localhost:5173/**

### 3️⃣ Build for Production

```bash
npm run build
```

### 4️⃣ Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
devender-portfolio/
├── public/
│   └── resume.pdf          # Your resume (replace this!)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Hero/About section
│   │   ├── Skills.jsx      # Skills grid
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── GithubStats.jsx # GitHub statistics
│   │   └── Contact.jsx     # Contact form
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles + Tailwind
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## 🎨 Customization Guide

### Update Your Information

#### 1. **Hero Section** (src/components/Hero.jsx)
- Change name, title, and description
- Update GitHub link
- Update resume download link

#### 2. **Skills Section** (src/components/Skills.jsx)
- Add/remove skills from the `skills` array
- Each skill has: name, icon (Font Awesome class), color

#### 3. **Projects Section** (src/components/Projects.jsx)
- Update the `projects` array with your actual projects
- Change title, description, tech stack, and GitHub links

#### 4. **GitHub Stats** (src/components/GithubStats.jsx)
- **IMPORTANT**: Change `username` variable to your actual GitHub username
- The stats will automatically update based on your GitHub profile

#### 5. **Contact Section** (src/components/Contact.jsx)
- Update social media links (GitHub, LinkedIn, Email)
- Update email address

#### 6. **Resume**
- Replace `public/resume.pdf` with your actual resume PDF file

---

## 🎨 Color Theme

The portfolio uses a custom color scheme defined in tailwind.config.js:

- **Primary**: `#667eea` (Purple-blue)
- **Primary Dark**: `#764ba2` (Deep purple)
- **Background Dark**: `#0a0e27` (Navy)
- **Background Darker**: `#0f1632` (Darker navy)
- **Background Card**: `#1a1f3a` (Card background)

To change colors, edit the `extend.colors` section in `tailwind.config.js`.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts - your site will be live instantly!

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/devender-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

---

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool (super fast!)
- **Tailwind CSS** - Utility-first CSS
- **Font Awesome** - Icons
- **GitHub Stats API** - Dynamic GitHub statistics

---

## 📝 Next Steps

1. ✅ **Update your information** in all components
2. ✅ **Replace resume.pdf** in the `public` folder
3. ✅ **Test on mobile** - open http://localhost:5173/ on your phone
4. ✅ **Deploy to Vercel** - it's free and takes 2 minutes!
5. ✅ **Add to your CV/LinkedIn** - show off your portfolio!

---

## 🎓 Optional Enhancements

Want to make your portfolio even more impressive? Add:

### 1. **AI Chatbot** 
Use [Tawk.to](https://www.tawk.to/) or [Dialogflow](https://dialogflow.cloud.google.com/) for a free chatbot

### 2. **Blog Section**
Add a blog using [Dev.to API](https://developers.forem.com/api) or [Hashnode API](https://api.hashnode.com/)

### 3. **Animations**
Install [Framer Motion](https://www.framer.com/motion/):
```bash
npm install framer-motion
```

### 4. **Analytics**
Add [Google Analytics](https://analytics.google.com/) or [Plausible](https://plausible.io/)

### 5. **Contact Form Backend**
Integrate with [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/)

---

## 🐛 Troubleshooting

### Port already in use?
```bash
npm run dev -- --port 3000
```

### Tailwind styles not working?
Restart the dev server:
```bash
# Press Ctrl+C to stop
npm run dev
```

### Resume not downloading?
Make sure `resume.pdf` exists in the `public` folder.

---

## 📧 Questions?

If you need help customizing your portfolio, feel free to reach out!

---

**Built with ❤️ by Devender**
