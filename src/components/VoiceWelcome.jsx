import { useEffect, useState } from 'react';

function VoiceWelcome() {
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  const speakWelcome = () => {
    // Check if browser supports Speech Synthesis
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance('Hello and welcome to Dev portfolio');
      
      // Configure voice settings
      utterance.rate = 0.9; // Slightly slower for clarity
      utterance.pitch = 1.05; // Slightly higher pitch for female voice
      utterance.volume = 0.8;
      
      // Try to use a female voice
      const voices = window.speechSynthesis.getVoices();
      
      // Priority 1: Female voices (common female voice names)
      const femaleVoice = voices.find(voice => 
        voice.lang.startsWith('en') && (
          voice.name.includes('Female') ||
          voice.name.includes('Zira') ||
          voice.name.includes('Google UK English Female') ||
          voice.name.includes('Microsoft Zira') ||
          voice.name.includes('Samantha') ||
          voice.name.includes('Victoria') ||
          voice.name.includes('Karen') ||
          voice.name.includes('Moira') ||
          voice.name.includes('Tessa') ||
          voice.name.includes('Fiona') ||
          voice.name.toLowerCase().includes('female')
        )
      );
      
      // Priority 2: Any English voice
      const englishVoice = voices.find(voice => voice.lang.startsWith('en'));
      
      utterance.voice = femaleVoice || englishVoice || voices[0];
      
      // Speak the message
      window.speechSynthesis.speak(utterance);
      setHasPlayed(true);
    } else {
      setIsSupported(false);
    }
  };

  useEffect(() => {
    // Wait a bit for page to settle, then play welcome
    const timer = setTimeout(() => {
      if (!hasPlayed) {
        speakWelcome();
      }
    }, 1000); // 1 second delay for better UX

    return () => clearTimeout(timer);
  }, []);

  // Load voices (they load asynchronously)
  useEffect(() => {
    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        window.speechSynthesis.getVoices();
      };
      
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  if (!isSupported) {
    return null; // Hide button if not supported
  }

  return (
    <button
      onClick={speakWelcome}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
      title="Play welcome message"
      aria-label="Play welcome message"
    >
      <svg 
        className="w-6 h-6 group-hover:animate-pulse" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" />
      </svg>
      <span className="absolute -top-8 right-0 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        🔊 Replay Welcome
      </span>
    </button>
  );
}

export default VoiceWelcome;
