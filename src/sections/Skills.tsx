import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Eye, Cpu, GitBranch, BarChart3, Database, Layers } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    { title: 'Languages', icon: Code2, skills: ['Python', 'SQL', 'JavaScript'] },
    { title: 'ML & Deep Learning', icon: Brain, skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'XGBoost', 'Hugging Face'] },
    { title: 'Computer Vision', icon: Eye, skills: ['OpenCV', 'YOLO', 'MediaPipe', 'Object Detection', 'Image Segmentation'] },
    { title: 'LLM & RAG', icon: Database, skills: ['LangChain', 'ChromaDB', 'Groq', 'RAG Pipelines', 'Prompt Engineering', 'Embeddings'] },
    { title: 'Data & Analytics', icon: BarChart3, skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA', 'Feature Engineering'] },
    { title: 'MLOps & Tools', icon: GitBranch, skills: ['Git & GitHub', 'Docker', 'MLflow', 'Streamlit', 'FastAPI', 'Flask'] },
    { title: 'Specialisations', icon: Cpu, skills: ['Medical Image Analysis', 'Edge AI (TF Lite)', 'Real-time CV', 'Time-Series Forecasting', 'NLP'] },
    { title: 'Core Concepts', icon: Layers, skills: ['CNNs', 'Transformers (ViT)', 'RNNs / LSTMs', 'Ensemble Methods', 'XAI / Explainability'] },
  ];

  return (
    <section id="skills" className="relative py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="pill mb-4 inline-flex">Technical Skills</span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A full toolkit for building and shipping production-ready machine learning solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.04 * categoryIndex }}
              className="card p-5 hover:border-indigo-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <category.icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-semibold font-display text-slate-900 text-sm">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.04 * categoryIndex + 0.02 * skillIndex }}
                    className="skill-tag text-xs"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-400 text-sm mb-3">Also comfortable with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Jupyter', 'Google Colab', 'VS Code', 'Linux', 'Data Pipelines', 'Model Optimization', 'Unit Testing'].map((skill) => (
              <span key={skill} className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-500 text-sm hover:border-indigo-200 hover:text-indigo-600 transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
