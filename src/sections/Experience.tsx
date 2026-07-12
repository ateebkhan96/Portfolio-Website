import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

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
      description: 'Developed end-to-end machine learning projects with a focus on deployment.',
      responsibilities: [
        'Developed end-to-end ML projects covering data preprocessing, training, evaluation, and deployment',
        'Built deployable ML applications using TensorFlow and Streamlit',
        'Focused on reproducible pipelines and functional inference',
      ],
    },
    {
      company: 'Feynn Labs',
      role: 'Machine Learning Intern',
      location: 'Remote',
      period: 'September 2022 – November 2022',
      current: false,
      description: 'Developed ML-driven models for EV market analysis and AI product prototypes.',
      responsibilities: [
        'Developed ML models for EV market segmentation and trend analysis',
        'Applied customer segmentation and time-series forecasting techniques',
        'Gained hands-on experience in the full ML pipeline: preprocessing, training, and evaluation',
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="pill mb-4 inline-flex">Experience</span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A track record of delivering ML solutions across education, medical imaging, and analytics.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                className="relative flex gap-6"
              >
                {/* Timeline dot */}
                <div className="relative shrink-0 mt-6">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 relative ${
                    exp.current
                      ? 'bg-indigo-600 border-indigo-600 text-white'
                      : 'bg-white border-slate-300 text-slate-400'
                  }`}>
                    {exp.current && <span className="w-2.5 h-2.5 rounded-full bg-white" />}
                    {!exp.current && <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />}
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-indigo-400/30 animate-ping" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 mb-2">
                  <motion.div
                    className="card p-5 cursor-pointer hover:border-indigo-200 hover:shadow-md transition-all"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold font-display text-slate-900">{exp.role}</h3>
                        <p className="text-indigo-600 text-sm font-medium">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold border border-emerald-200">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{exp.period}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{exp.location}</span>
                    </div>

                    <p className="text-slate-500 text-sm mb-3">{exp.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-indigo-500 font-medium">
                        {expandedIndex === index ? 'Hide details' : 'View details'}
                      </span>
                      {expandedIndex === index
                        ? <ChevronUp className="w-4 h-4 text-indigo-400" />
                        : <ChevronDown className="w-4 h-4 text-indigo-400" />
                      }
                    </div>

                    <motion.div
                      initial={false}
                      animate={{ height: expandedIndex === index ? 'auto' : 0, opacity: expandedIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-slate-100">
                        <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
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
