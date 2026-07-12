import { motion } from 'framer-motion';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com/in/ateebk/', label: 'LinkedIn' },
    { icon: <Github className="w-4 h-4" />, href: 'https://github.com/ateebkhan96', label: 'GitHub' },
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: 'https://x.com/theAteebKhan',
      label: 'X',
    },
  ];

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-14 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-display text-xl font-bold gradient-text mb-3">Ateeb Ahmed Khan</h3>
              <p className="text-slate-500 text-sm mb-5 max-w-sm leading-relaxed">
                Machine Learning Engineer specialising in computer vision, LLM/RAG systems, and production ML.
                Open to roles in Pune, Bengaluru, Hyderabad, Chennai, Mumbai, or remote globally.
              </p>
              <div className="flex gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-semibold font-display text-slate-900 text-sm mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-slate-500 text-sm hover:text-indigo-600 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-semibold font-display text-slate-900 text-sm mb-4">Location</h4>
              <p className="text-slate-500 text-sm">Akola, Maharashtra, India</p>
              <p className="text-slate-400 text-sm mt-1">Open to relocation & remote</p>
            </motion.div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-400 text-xs">© {currentYear} Ateeb Ahmed Khan. All rights reserved.</p>
          <p className="text-slate-400 text-xs flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
