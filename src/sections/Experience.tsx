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
      role: 'Mentor (Part-Time)',
      location: 'Remote',
      period: 'July 2025 - Present',
      current: true,
      description: 'Leading AI/ML education initiatives and creating comprehensive learning materials.',
      responsibilities: [
        'Designed and delivered a complete AI/ML fundamentals course',
        'Produced 60+ educational videos and structured learning modules',
        'Translated core AI/ML concepts into practical, project-driven instruction',
        'Led interactive bootcamps and created comprehensive teaching materials',
      ],
    },
    {
      company: 'Labmentix',
      role: 'AI/ML Intern',
      location: 'Mumbai',
      period: 'July 2025 - December 2025',
      current: false,
      description: 'Developed end-to-end machine learning projects with focus on deployment.',
      responsibilities: [
        'Developed end-to-end machine learning projects',
        'Handled data preprocessing, model training, evaluation, and deployment',
        'Built deployable ML applications using TensorFlow and Streamlit',
        'Focused on reproducible pipelines and functional inference',
      ],
    },
    {
      company: 'UpGrad',
      role: 'Senior Executive Marketing and Tech',
      location: 'Remote',
      period: 'September 2023 - December 2023',
      current: false,
      description: 'Bridged technical and marketing operations with data-driven approaches.',
      responsibilities: [
        'Cleaned, standardized, and structured CRM datasets in MS Excel',
        'Supported automated marketing campaigns across Mailmodo and Yellow.ai platforms',
        'Bridged technical and marketing operations',
        'Implemented data-driven marketing strategies',
      ],
    },
    {
      company: 'Feynn Labs',
      role: 'Machine Learning Intern',
      location: 'Remote',
      period: 'September 2022 - November 2022',
      current: false,
      description: 'Developed ML-driven models for EV market analysis and AI product prototypes.',
      responsibilities: [
        'Developed ML-driven models for EV market analysis',
        'Applied segmentation and trend analysis techniques',
        'Supported AI product prototypes',
        'Gained hands-on experience in data preprocessing, model training, and evaluation',
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-purple-400 text-sm mb-4">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Professional </span>
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A track record of delivering impactful ML solutions across diverse industries and roles.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start md:items-center gap-4 md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full gradient-bg border-4 border-[#0a0a0f] md:-translate-x-1/2 z-10">
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full gradient-bg animate-ping" />
                  )}
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`glass rounded-2xl p-6 cursor-pointer transition-all ${
                      exp.current ? 'border-purple-500/50' : ''
                    }`}
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                        <p className="text-purple-400">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm mb-3">{exp.description}</p>

                    {/* Expand Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-400">
                        {expandedIndex === index ? 'Hide Details' : 'View Details'}
                      </span>
                      {expandedIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-purple-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-purple-400" />
                      )}
                    </div>

                    {/* Expanded Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedIndex === index ? 'auto' : 0,
                        opacity: expandedIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-white/10">
                        <h4 className="text-sm font-medium text-white mb-3">Key Responsibilities:</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="flex items-start gap-2 text-sm text-gray-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
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
