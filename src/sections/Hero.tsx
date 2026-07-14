import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '4+', label: 'Deployed Projects' },
  { value: '10+', label: 'ML Technologies' },
  { value: '~99%', label: 'Thesis Accuracy' },
];

const Hero = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col bg-[#0a0a0a]">
      {/* Main hero content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 pt-28 pb-10">
        {/* Left — text */}
        <div className="flex-1 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="pill mb-6 inline-flex">ML Engineer</span>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.07] tracking-tight mb-6">
              Building systems that{' '}
              <span className="gradient-text">see, learn</span>
              {' '}and understand.
            </h1>

            <p className="text-[#666] text-lg leading-relaxed mb-4 max-w-xl">
              I build, train and deploy machine learning models that solve real-world problems —
              from medical image analysis to production RAG systems.
            </p>

            <div className="flex items-center gap-1.5 text-[#555] text-sm mb-8">
              <MapPin className="w-4 h-4" />
              <span>Akola, Maharashtra · Open to relocation (Pune / Bengaluru / Hyderabad) & remote</span>
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
          </motion.div>
        </div>

        {/* Right — visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[480px] shrink-0"
        >
          <div className="relative rounded-2xl overflow-hidden border border-[#1e1e1e]" style={{ aspectRatio: '4/3' }}>
            <img
              src="/project-brain-tumor.jpg"
              alt="Brain Tumor MRI Detection"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.75)' }}
            />
            {/* Overlay card */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/70 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm font-display">Brain Tumor Detection</p>
                  <p className="text-[#666] text-xs mt-0.5">YOLO11 · 95.1% mAP@0.5 · Live on Streamlit</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">Live</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="border-t border-[#1a1a1a] bg-[#0d0d0d]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1a1a1a]">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-4 py-6 px-6 first:pl-0 last:pr-0">
                <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 text-lg font-bold shrink-0">
                  {i === 0 ? '👤' : i === 1 ? '🚀' : i === 2 ? '⚙️' : '🎯'}
                </div>
                <div>
                  <p className="text-2xl font-extrabold font-display text-white leading-none">{stat.value}</p>
                  <p className="text-[#555] text-xs mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
