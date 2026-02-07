import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    {
      title: 'Machine Learning Specialization',
      issuer: 'Coursera (Stanford Online)',
      issuerLogo: 'S',
      date: '2023',
      description: 'Comprehensive ML specialization covering supervised learning, unsupervised learning, and best practices.',
      skills: ['Supervised Learning', 'Neural Networks', 'Decision Trees', 'Clustering'],
      verifyLink: 'https://coursera.org/share/621d54ca900b9629fe89ca5ae0af248b',
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'Google Data Analytics',
      issuer: 'Coursera (Google)',
      issuerLogo: 'G',
      date: '2023',
      description: 'Professional certificate in data analytics using Google tools and methodologies.',
      skills: ['Data Cleaning', 'SQL', 'Data Visualization', 'R Programming'],
      verifyLink: 'https://coursera.org/share/43280afd1564bc01665ae5ed1ee8ea25',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Deep Learning and OpenCV',
      issuer: 'Udemy',
      issuerLogo: 'U',
      date: '2023',
      description: 'Advanced computer vision techniques using OpenCV and deep learning frameworks.',
      skills: ['OpenCV', 'CNN', 'Image Processing', 'Object Detection'],
      verifyLink: 'https://www.udemy.com/certificate/UC-78726a98-f35b-4ee8-afe0-e10b5f127149/',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-purple-400 text-sm mb-4">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Professional </span>
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise in machine learning and data analytics.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl p-6 h-full flex flex-col hover:border-purple-500/30 transition-all"
              >
                {/* Badge Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                    {cert.issuerLogo}
                  </div>
                  <div className="flex items-center gap-1 text-green-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Verified</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-purple-400 text-sm mb-3">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  Issued: {cert.date}
                </p>
                <p className="text-gray-400 text-sm mb-4 flex-1">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 rounded-full bg-white/5 text-gray-400 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verify Button */}
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-purple-500/50 text-white rounded-xl hover:bg-purple-500/10 transition-all"
                >
                  <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verify Certificate
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 glass rounded-2xl p-6">
            <Award className="w-10 h-10 text-purple-400" />
            <div className="text-left">
              <p className="text-white font-medium">Continuous Learning</p>
              <p className="text-gray-400 text-sm">Always expanding knowledge through courses and hands-on projects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
