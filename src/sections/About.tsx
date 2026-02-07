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
      period: '07/2023 - Present',
      type: 'Distance Learning',
    },
    {
      degree: 'Bachelor of Technology in Robotics and Automation',
      institution: 'MIT World Peace University, Pune',
      period: '2018 - 2022',
      type: 'GPA: 8.99/10',
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-purple-400 text-sm mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Passionate </span>
            <span className="gradient-text">ML Engineer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transforming complex data into high-quality, production-ready solutions that drive real-world impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Profile Card */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-24 h-24 rounded-2xl gradient-bg flex items-center justify-center text-white text-3xl font-bold shrink-0">
                  AK
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Ateeb Ahmed Khan</h3>
                  <p className="text-purple-400 mb-3">Machine Learning Engineer</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-1 text-sm text-gray-400">
                      <MapPin className="w-4 h-4" />
                      India
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Machine Learning Engineer specializing in computer vision and applied data analytics, 
                proficient in designing, developing, and deploying scalable ML models using Python, 
                TensorFlow, and PyTorch. Proven ability to transform complex data into high-quality, 
                production-ready solutions that drive business value.
              </p>

              <p className="text-gray-400 leading-relaxed mb-6">
                Skilled in end-to-end ML pipelines with a focus on model reliability, deployment 
                efficiency, and real-world impact. Experienced in medical image analysis, real-time 
                computer vision systems, and edge AI deployment.
              </p>

              <Button 
                asChild
                className="gradient-bg text-white px-6 py-3 rounded-xl hover:opacity-90 transition-all"
              >
                <a href="/Resume/Ateeb_Khan_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Resume
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Education */}
            <div className="glass rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                Education
              </h4>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="border-l-2 border-purple-500/50 pl-4"
                  >
                    <h5 className="text-white font-medium">{edu.degree}</h5>
                    <p className="text-purple-400 text-sm">{edu.institution}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-gray-500 text-sm">{edu.period}</span>
                      <span className="text-gray-600 text-xs">• {edu.type}</span>
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
