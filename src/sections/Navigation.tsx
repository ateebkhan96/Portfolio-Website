import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: 'hero' },
    { label: 'Projects', href: 'projects' },
    { label: 'Experience', href: 'experience' },
    { label: 'Skills', href: 'skills' },
    { label: 'About', href: 'about' },
    { label: 'Contact', href: 'contact' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'border-b border-[#1e1e1e] bg-[#0a0a0a]/95 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button onClick={() => scrollTo('hero')} className="font-display text-base font-bold text-white hover:text-green-400 transition-colors">
              Ateeb Khan
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className={`relative px-4 py-2 text-sm transition-colors ${
                    activeSection === item.href ? 'text-white' : 'text-[#888] hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <motion.div layoutId="nav-underline" className="absolute bottom-0 left-4 right-4 h-px bg-green-500" />
                  )}
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-3">
              <a href="https://github.com/ateebkhan96" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-[#666] hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/in/ateebk/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-[#666] hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:bg-green-400 transition-all"
              >
                Let's Connect →
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-[#888] border border-[#222] rounded-lg hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-4 right-4 z-40 card-dark p-5 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="w-full text-left px-3 py-3 text-[#888] hover:text-white hover:bg-white/5 rounded-lg transition-all text-sm"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-4 pt-4 border-t border-[#1e1e1e] flex gap-3">
              <a href="https://github.com/ateebkhan96" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#666] hover:text-white transition-colors">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="https://linkedin.com/in/ateebk/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#666] hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
