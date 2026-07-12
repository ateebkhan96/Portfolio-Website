import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown, ExternalLink, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const roles = ['Machine Learning Engineer', 'Computer Vision Specialist', 'RAG & LLM Builder'];
  const period = 2000;
  const deltaRef = useRef(100);

  useEffect(() => {
    const tick = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        deltaRef.current = 50;
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        deltaRef.current = 100;
      }
      if (!isDeleting && displayText === fullText) {
        deltaRef.current = period;
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        deltaRef.current = 500;
      }
    };
    const timer = setTimeout(tick, deltaRef.current);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      {/* Fade edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/0 via-slate-50/0 to-slate-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-slate-50" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-emerald-700 font-medium">Open to opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 mb-4 tracking-tight"
          >
            Ateeb Ahmed{' '}
            <span className="gradient-text">Khan</span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl text-slate-500 mb-4 h-10"
          >
            <span className="gradient-text font-semibold">{displayText}</span>
            <span className="animate-pulse text-indigo-400 ml-0.5">|</span>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.5 }}
            className="flex items-center justify-center gap-1.5 text-slate-400 mb-6"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Akola, Maharashtra · Open to relocation (Pune / Bengaluru / Hyderabad) & remote</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.5 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building intelligent systems that see, learn, and understand — from research to deployed production apps.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-12"
          >
            <Button
              onClick={() => scrollToSection('projects')}
              className="gradient-bg text-white px-7 py-5 text-base rounded-xl hover:opacity-90 transition-all shadow-md shadow-indigo-200"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-slate-300 text-slate-700 px-7 py-5 text-base rounded-xl hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600 transition-all"
            >
              Contact Me
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-300 text-slate-700 px-7 py-5 text-base rounded-xl hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600 transition-all"
            >
              <a href="/Resume/Ateeb_Khan_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.5 }}
            className="flex justify-center gap-3"
          >
            {[
              { href: 'https://linkedin.com/in/ateebk/', label: 'LinkedIn', icon: <Linkedin className="w-5 h-5" /> },
              { href: 'https://github.com/ateebkhan96', label: 'GitHub', icon: <Github className="w-5 h-5" /> },
              {
                href: 'https://x.com/theAteebKhan',
                label: 'X',
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-11 h-11 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 transition-all shadow-sm"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-7 h-7 text-slate-400 hover:text-indigo-500 transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
