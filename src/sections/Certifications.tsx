import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

const certs = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera – Stanford Online',
    date: '2023',
    skills: ['Supervised Learning', 'Neural Networks', 'Decision Trees', 'Clustering'],
    link: 'https://coursera.org/share/621d54ca900b9629fe89ca5ae0af248b',
    label: 'S',
    color: '#EF4444',
  },
  {
    title: 'Google Data Analytics',
    issuer: 'Coursera – Google',
    date: '2023',
    skills: ['Data Cleaning', 'SQL', 'Data Visualisation', 'R Programming'],
    link: 'https://coursera.org/share/43280afd1564bc01665ae5ed1ee8ea25',
    label: 'G',
    color: '#3B82F6',
  },
  {
    title: 'Deep Learning and OpenCV',
    issuer: 'Udemy',
    date: '2023',
    skills: ['OpenCV', 'CNN', 'Image Processing', 'Object Detection'],
    link: 'https://www.udemy.com/certificate/UC-78726a98-f35b-4ee8-afe0-e10b5f127149/',
    label: 'U',
    color: '#A855F7',
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="pill mb-4 inline-flex">Credentials</span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="card-dark p-5 hover:border-[#2a2a2a] transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold font-display text-lg"
                  style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}33` }}
                >
                  <span style={{ color: cert.color }}>{cert.label}</span>
                </div>
                <div className="flex items-center gap-1 text-green-500">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="text-xs">Verified</span>
                </div>
              </div>

              <h3 className="font-display font-bold text-white text-sm leading-snug mb-1">{cert.title}</h3>
              <p className="text-green-500 text-xs mb-0.5">{cert.issuer}</p>
              <p className="text-[#444] text-xs mb-3">Issued {cert.date}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {cert.skills.map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded text-xs text-[#555] bg-[#161616] border border-[#222]">{s}</span>
                ))}
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 rounded-lg border border-[#222] text-[#666] text-xs hover:border-green-500/30 hover:text-green-400 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Verify Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
