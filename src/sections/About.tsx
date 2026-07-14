import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, GraduationCap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="pill mb-4 inline-flex">About Me</span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-dark p-7"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-xl font-bold font-display shrink-0">
                AK
              </div>
              <div>
                <h3 className="font-display font-bold text-white">Ateeb Ahmed Khan</h3>
                <p className="text-green-500 text-sm">Machine Learning Engineer</p>
              </div>
            </div>

            <p className="text-[#888] leading-relaxed mb-4">
              Machine Learning Engineer specialising in computer vision and LLM/RAG systems.
              Proficient in designing, building, and deploying scalable ML models using Python,
              TensorFlow, PyTorch, and LangChain — with a track record of shipping production-ready applications.
            </p>

            <p className="text-[#666] leading-relaxed mb-6">
              My MSc thesis — <span className="text-[#999] italic">"Brain Tumor Detection Using Vision Transformers and XAI"</span> —
              compared ResNet-50 (Grad-CAM) and ViT (Attention Rollout) on 7,200 MRI images, achieving ~99% accuracy.
              The study found statistically equivalent performance but superior spatial faithfulness in CNN-based explanations.
            </p>

            <a
              href="/Resume/Ateeb_Khan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium hover:bg-green-500/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" /> View Resume
            </a>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-dark p-7"
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-green-500" />
              <h4 className="font-display font-bold text-white">Education</h4>
            </div>

            <div className="space-y-6">
              {/* MSc */}
              <div className="border-l-2 border-green-500/40 pl-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h5 className="text-white font-semibold text-sm">MSc Computer Science</h5>
                  <span className="text-xs text-green-400 border border-green-500/20 bg-green-500/5 px-2 py-0.5 rounded-full shrink-0">Graduated</span>
                </div>
                <p className="text-green-500 text-sm">IU International University of Applied Sciences, Berlin</p>
                <p className="text-[#555] text-xs mt-1">07/2023 – 07/2026 · GPA 1.8 <span className="text-[#444]">(German scale: 1.0 = highest, 5.0 = fail)</span></p>

                {/* Thesis */}
                <div className="mt-3 p-3 rounded-lg bg-[#161616] border border-[#222]">
                  <p className="text-[#555] text-xs uppercase tracking-wide font-semibold mb-1">Thesis</p>
                  <p className="text-[#999] text-xs italic leading-relaxed">
                    "Brain Tumor Detection Using Vision Transformers and XAI" — comparative study of Grad-CAM (ResNet-50) and Attention Rollout (ViT) on 7,200 MRI images; ~99% accuracy.
                  </p>
                </div>
              </div>

              {/* B.Tech */}
              <div className="border-l-2 border-[#2a2a2a] pl-4">
                <h5 className="text-white font-semibold text-sm mb-0.5">B.Tech in Robotics & Automation</h5>
                <p className="text-green-500 text-sm">MIT World Peace University, Pune</p>
                <p className="text-[#555] text-xs mt-1">2018 – 2022 · GPA 8.99/10</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
