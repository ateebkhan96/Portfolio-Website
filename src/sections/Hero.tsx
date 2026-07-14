import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin, Github, Linkedin } from 'lucide-react';

const XIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Hero = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="pill mb-6 inline-flex">ML Engineer</span>

          {/* Big name — full width */}
          <h1 className="font-display font-extrabold leading-[0.95] tracking-tight mb-8">
            <span className="block text-[clamp(4rem,12vw,11rem)] text-white">Ateeb</span>
            <span className="block text-[clamp(4rem,12vw,11rem)] text-white">Ahmed</span>
            <span className="block text-[clamp(4rem,12vw,11rem)] gradient-text">Khan.</span>
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-[#888] text-base sm:text-lg leading-relaxed mb-3">
                I build, train and deploy machine learning models that solve real-world problems,
                from medical image analysis to production RAG systems.
              </p>

              <div className="flex items-center gap-1.5 text-[#555] text-sm mb-8">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Maharashtra, India</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => scrollTo('projects')}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-green-500 text-black font-semibold text-sm hover:bg-green-400 transition-all"
                >
                  View My Work <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="/Resume/Ateeb_Khan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[#2a2a2a] text-white font-semibold text-sm hover:border-[#444] hover:bg-white/5 transition-all"
                >
                  <Download className="w-4 h-4" /> Download Resume
                </a>
              </div>
            </div>

            {/* Social links — bottom right */}
            <div className="flex gap-2 sm:pb-1">
              {[
                { href: 'https://linkedin.com/in/ateebk/', label: 'LinkedIn', icon: <Linkedin className="w-4 h-4" /> },
                { href: 'https://github.com/ateebkhan96', label: 'GitHub', icon: <Github className="w-4 h-4" /> },
                { href: 'https://x.com/theAteebKhan', label: 'X', icon: <XIcon /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-11 h-11 rounded-lg border border-[#222] flex items-center justify-center text-[#555] hover:text-green-400 hover:border-green-500/30 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
