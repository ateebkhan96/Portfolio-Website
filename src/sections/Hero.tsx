import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 pt-24 pb-16">

        {/* Left — name + content */}
        <div className="flex-1 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="pill mb-6 inline-flex">ML Engineer</span>

            {/* Big name */}
            <h1 className="font-display font-extrabold leading-[1.0] tracking-tight mb-6">
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white">
                Ateeb
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white">
                Ahmed
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl gradient-text">
                Khan.
              </span>
            </h1>

            <p className="text-[#888] text-base sm:text-lg leading-relaxed mb-3 max-w-lg">
              I build, train and deploy machine learning models that solve real-world problems —
              from medical image analysis to production RAG systems.
            </p>

            <div className="flex items-center gap-1.5 text-[#555] text-sm mb-8">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
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

        {/* Right — project visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
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
    </section>
  );
};

export default Hero;
