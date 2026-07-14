import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  { title: 'Languages', skills: ['Python', 'SQL', 'JavaScript'] },
  { title: 'ML & Deep Learning', skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'XGBoost', 'Hugging Face'] },
  { title: 'Computer Vision', skills: ['OpenCV', 'YOLO11', 'MediaPipe', 'Object Detection', 'Image Segmentation'] },
  { title: 'LLM & RAG', skills: ['LangChain', 'ChromaDB', 'Groq', 'RAG Pipelines', 'Prompt Engineering', 'Embeddings'] },
  { title: 'Data & Analytics', skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA', 'Feature Engineering'] },
  { title: 'MLOps & Deployment', skills: ['Git & GitHub', 'Docker', 'MLflow', 'Streamlit', 'FastAPI', 'Flask'] },
  { title: 'Specialisations', skills: ['Medical Image Analysis', 'Edge AI (TF Lite)', 'Real-time CV', 'Time-Series'] },
  { title: 'Core Concepts', skills: ['CNNs', 'Transformers (ViT)', 'RNNs / LSTMs', 'XAI / Explainability', 'Ensemble Methods'] },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="pill mb-4 inline-flex">Technical Skills</span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card-dark p-5 hover:border-[#2a2a2a] transition-all"
            >
              <h3 className="font-display font-semibold text-white text-sm mb-3 flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-green-500 inline-block" />
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: i * 0.05 + j * 0.02 }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
