import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    company: 'DSIAR Tech',
    role: 'AI/ML Mentor (Part-Time)',
    location: 'Remote',
    period: 'July 2025 – Present',
    current: true,
    description: 'Leading AI/ML curriculum development and creating comprehensive learning materials.',
    responsibilities: [
      'Built a complete AI/ML curriculum spanning 25+ modules and 100–125 lessons',
      'Designed structured learning tracks across foundational AI and applied ML',
      'Translated core AI/ML concepts into practical, project-driven instruction',
    ],
  },
  {
    company: 'Labmentix',
    role: 'AI/ML Intern',
    location: 'Mumbai',
    period: 'July 2024 – December 2024',
    current: false,
    description: 'Developed end-to-end ML projects with a focus on deployment.',
    responsibilities: [
      'Built end-to-end ML pipelines covering data preprocessing, training, evaluation, and deployment',
      'Created deployable ML apps using TensorFlow and Streamlit',
      'Focused on reproducible pipelines and functional inference',
    ],
  },
  {
    company: 'Feynn Labs',
    role: 'Machine Learning Intern',
    location: 'Remote',
    period: 'September 2022 – November 2022',
    current: false,
    description: 'Developed ML models for EV market analysis and AI product prototypes.',
    responsibilities: [
      'Built ML models for EV market segmentation and trend analysis',
      'Applied customer segmentation and time-series forecasting techniques',
      'Gained hands-on experience across the full ML pipeline',
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="pill mb-4 inline-flex">Experience</span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white">
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-[#1e1e1e]" />
          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className="flex gap-6"
              >
                <div className="relative shrink-0 mt-5">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 relative border ${
                    exp.current ? 'bg-green-500/10 border-green-500/40' : 'bg-[#111] border-[#222]'
                  }`}>
                    <span className={`w-2.5 h-2.5 rounded-full ${exp.current ? 'bg-green-500' : 'bg-[#333]'}`} />
                    {exp.current && <span className="absolute inset-0 rounded-full bg-green-500/10 animate-ping" />}
                  </div>
                </div>

                <div
                  className="flex-1 card-dark p-5 cursor-pointer hover:border-[#2a2a2a] transition-all"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-display font-bold text-white">{exp.role}</h3>
                      <p className="text-green-500 text-sm">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-semibold text-green-400 bg-green-500/10 border border-green-500/20">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-[#555] mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{exp.period}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{exp.location}</span>
                  </div>

                  <p className="text-[#666] text-sm mb-3">{exp.description}</p>

                  <div className="flex items-center gap-1.5 text-xs text-green-500">
                    {expanded === i ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    {expanded === i ? 'Hide details' : 'Show details'}
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: expanded === i ? 'auto' : 0, opacity: expanded === i ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-[#1e1e1e] space-y-2">
                      {exp.responsibilities.map((r, j) => (
                        <div key={j} className="flex items-start gap-2 text-sm text-[#666]">
                          <span className="w-1 h-1 rounded-full bg-green-500 mt-2 shrink-0" />
                          {r}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
