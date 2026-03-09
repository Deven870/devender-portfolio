/* ============================================
   ADVANCED PORTFOLIO INTERACTIONS
   Performance-optimized JavaScript
   ============================================ */

// ============================================
// SMOOTH SCROLL WITH EASING
// ============================================
function smoothScrollTo(targetId, duration = 1000) {
  const target = document.querySelector(targetId);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

// ============================================
// PARALLAX EFFECT
// ============================================
function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  window.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(el => {
        const speed = el.dataset.speed || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });
  });
}

// ============================================
// TILT EFFECT ON CARDS
// ============================================
function initCardTilt() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  });
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Alt + H: Home
    if (e.altKey && e.key === 'h') {
      e.preventDefault();
      smoothScrollTo('#home');
    }
    // Alt + A: About
    else if (e.altKey && e.key === 'a') {
      e.preventDefault();
      smoothScrollTo('#about');
    }
    // Alt + S: Skills
    else if (e.altKey && e.key === 's') {
      e.preventDefault();
      smoothScrollTo('#skills');
    }
    // Alt + P: Projects
    else if (e.altKey && e.key === 'p') {
      e.preventDefault();
      smoothScrollTo('#projects');
    }
    // Alt + C: Contact
    else if (e.altKey && e.key === 'c') {
      e.preventDefault();
      smoothScrollTo('#contact');
    }
    // Escape: Scroll to top
    else if (e.key === 'Escape') {
      smoothScrollTo('#home');
    }
  });
}

// ============================================
// PERFORMANCE MONITORING
// ============================================
function monitorPerformance() {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page loaded in: ${pageLoadTime}ms`);
      }, 0);
    });
  }
}

// ============================================
// LAZY LOADING FOR IMAGES
// ============================================
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
  }
}

// ============================================
// EASTER EGG - KONAMI CODE
// ============================================
function initEasterEgg() {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        activateEasterEgg();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
}

function activateEasterEgg() {
  // Add rainbow effect to the entire page
  document.body.style.animation = 'rainbow 2s linear infinite';
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rainbow {
      0% { filter: hue-rotate(0deg); }
      100% { filter: hue-rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
  
  // Show congratulations message
  const message = document.createElement('div');
  message.textContent = '🎉 You found the secret! 🎉';
  message.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem 3rem;
    border-radius: 20px;
    font-size: 2rem;
    font-weight: bold;
    z-index: 10001;
    animation: fadeInUp 0.5s ease;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  `;
  document.body.appendChild(message);
  
  setTimeout(() => {
    message.style.transition = 'opacity 0.5s ease';
    message.style.opacity = '0';
    setTimeout(() => message.remove(), 500);
    document.body.style.animation = '';
  }, 3000);
}

// ============================================
// AUTO-HIDE NAVBAR ON SCROLL
// ============================================
let lastScroll = 0;

function initAutoHideNav() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      nav.classList.remove('hidden');
      return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scrolling down
      nav.classList.add('hidden');
    } else {
      // Scrolling up
      nav.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
  });
}

// ============================================
// INITIALIZE ALL FEATURES
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Portfolio initialized');
  
  // Initialize all features
  initParallax();
  initCardTilt();
  initKeyboardShortcuts();
  initLazyLoading();
  initEasterEgg();
  initAutoHideNav();
  monitorPerformance();
  
  // Add smooth scrolling to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      smoothScrollTo(targetId);
    });
  });
  
  console.log('✨ All features loaded successfully');
  console.log('💡 Keyboard shortcuts:');
  console.log('   Alt+H: Home | Alt+A: About | Alt+S: Skills');
  console.log('   Alt+P: Projects | Alt+C: Contact | ESC: Top');
});

// ============================================
// SERVICE WORKER FOR PWA (Optional)
// ============================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Uncomment to enable PWA functionality
    // navigator.serviceWorker.register('/sw.js')
    //   .then(reg => console.log('✅ Service Worker registered'))
    //   .catch(err => console.log('❌ Service Worker registration failed'));
  });
}
