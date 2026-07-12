import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, ExternalLink, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'IU International University of Applied Sciences, Berlin',
      period: '07/2023 – 07/2026',
      type: 'Graduated',
    },
    {
      degree: 'Bachelor of Technology in Robotics and Automation',
      institution: 'MIT World Peace University, Pune',
      period: '2018 – 2022',
      type: 'GPA: 8.99/10',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="pill mb-4 inline-flex">About Me</span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Passionate <span className="gradient-text">ML Engineer</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Turning complex data into reliable, deployed ML systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card p-8">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center text-white text-2xl font-bold font-display shrink-0">
                  AK
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-slate-900 mb-1">Ateeb Ahmed Khan</h3>
                  <p className="text-indigo-600 font-medium text-sm mb-2">Machine Learning Engineer</p>
                  <div className="flex items-center gap-1 text-slate-400 text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Akola, Maharashtra · Open to relocation & remote</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                Machine Learning Engineer specialising in computer vision and LLM/RAG systems. Proficient in
                designing, building, and deploying scalable ML models using Python, TensorFlow, PyTorch,
                and LangChain — with a track record of shipping production-ready applications.
              </p>

              <p className="text-slate-500 leading-relaxed mb-6">
                My MSc thesis compared ResNet-50 (Grad-CAM) and Vision Transformer (Attention Rollout)
                explainability methods on brain tumor MRI classification, achieving ~99% accuracy on a 7,200-image
                dataset. I care about models that not only perform well but can be trusted and explained.
              </p>

              <Button
                asChild
                className="gradient-bg text-white px-5 py-2.5 rounded-xl hover:opacity-90 transition-all shadow-sm shadow-indigo-200"
              >
                <a href="/Resume/Ateeb_Khan_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Resume
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card p-7">
              <h4 className="text-base font-semibold font-display text-slate-900 mb-5 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-500" />
                Education
              </h4>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="border-l-2 border-indigo-500 pl-4"
                  >
                    <h5 className="text-slate-900 font-semibold text-sm leading-snug">{edu.degree}</h5>
                    <p className="text-indigo-600 text-sm mt-0.5">{edu.institution}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-slate-400 text-xs">{edu.period}</span>
                      <span className="text-slate-300 text-xs">·</span>
                      <span className="text-slate-500 text-xs">{edu.type}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
