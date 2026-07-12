import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, CheckCircle2, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    {
      title: 'Machine Learning Specialization',
      issuer: 'Coursera – Stanford Online',
      issuerLogo: 'S',
      date: '2023',
      description: 'Supervised learning, unsupervised learning, and modern ML best practices across three courses.',
      skills: ['Supervised Learning', 'Neural Networks', 'Decision Trees', 'Clustering'],
      verifyLink: 'https://coursera.org/share/621d54ca900b9629fe89ca5ae0af248b',
      accent: 'from-red-400 to-orange-400',
    },
    {
      title: 'Google Data Analytics',
      issuer: 'Coursera – Google',
      issuerLogo: 'G',
      date: '2023',
      description: 'Professional certificate covering data cleaning, analysis, visualisation, and SQL with Google tools.',
      skills: ['Data Cleaning', 'SQL', 'Data Visualisation', 'R Programming'],
      verifyLink: 'https://coursera.org/share/43280afd1564bc01665ae5ed1ee8ea25',
      accent: 'from-blue-400 to-cyan-400',
    },
    {
      title: 'Deep Learning and OpenCV',
      issuer: 'Udemy',
      issuerLogo: 'U',
      date: '2023',
      description: 'Advanced computer vision techniques using OpenCV and deep learning frameworks for real-world applications.',
      skills: ['OpenCV', 'CNN', 'Image Processing', 'Object Detection'],
      verifyLink: 'https://www.udemy.com/certificate/UC-78726a98-f35b-4ee8-afe0-e10b5f127149/',
      accent: 'from-violet-400 to-indigo-400',
    },
  ];

  return (
    <section id="certifications" className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="pill mb-4 inline-flex">Credentials</span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Industry-recognised credentials validating expertise in machine learning and data analytics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -6 }}
                className="card p-6 h-full flex flex-col hover:border-indigo-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.accent} flex items-center justify-center text-white text-xl font-bold font-display shadow-sm`}>
                    {cert.issuerLogo}
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs font-medium">Verified</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-slate-900 mb-1 leading-snug">{cert.title}</h3>
                <p className="text-indigo-600 text-sm font-medium mb-1">{cert.issuer}</p>
                <p className="text-slate-400 text-xs mb-3">Issued {cert.date}</p>
                <p className="text-slate-500 text-sm mb-4 flex-1 leading-relaxed">{cert.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-500 text-xs">{skill}</span>
                  ))}
                </div>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-indigo-200 text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
                >
                  <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                    Verify Certificate
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <div className="card px-7 py-5 inline-flex items-center gap-4">
            <Award className="w-9 h-9 text-indigo-500 shrink-0" />
            <div>
              <p className="font-semibold font-display text-slate-900 text-sm">Continuous Learning</p>
              <p className="text-slate-400 text-sm">Always expanding through courses and hands-on projects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
