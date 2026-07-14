import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Brain Tumor Detection using YOLO11',
    description: 'State-of-the-art MRI tumor detection using YOLO11 with real-time inference. MSc thesis extended this with a Grad-CAM vs Attention Rollout explainability study (~99% accuracy).',
    image: '/project-brain-tumor.jpg',
    tags: ['Python', 'YOLO11', 'OpenCV', 'PyTorch', 'Streamlit'],
    metrics: '95.1% mAP@0.5',
    demoLink: 'https://brain-tumor-det.streamlit.app/',
    githubLink: 'https://github.com/ateebkhan96/Brain-Tumor-Detection-using-YOLO11',
  },
  {
    title: 'Document Q&A with RAG',
    description: 'Production RAG pipeline for natural-language Q&A over uploaded documents. Combines ChromaDB vector search with LLaMA 3.3-70B via Groq for fast, accurate answers.',
    image: '/project-pricing.jpg',
    tags: ['LangChain', 'ChromaDB', 'Groq', 'LLaMA 3.3-70B', 'Streamlit'],
    metrics: 'Fully deployed',
    demoLink: 'https://ateebkhan96-document-qa-rag-app-1u18bq.streamlit.app/',
    githubLink: 'https://github.com/ateebkhan96',
  },
  {
    title: 'Face Mask Detection Web App',
    description: 'Real-time face mask detection with DenseNet201 optimised via TensorFlow Lite for edge deployment. MediaPipe face detection pipeline running at 30 FPS.',
    image: '/project-face-mask.jpg',
    tags: ['DenseNet201', 'TF Lite', 'MediaPipe', 'OpenCV', 'Streamlit'],
    metrics: '98.99% accuracy',
    demoLink: 'https://face-mask-detection-system.streamlit.app/',
    githubLink: 'https://github.com/ateebkhan96/face-mask-detection-system',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <span className="pill mb-4 inline-flex">Projects</span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <a
            href="https://github.com/ateebkhan96"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-green-500 hover:text-green-400 text-sm font-medium transition-colors"
          >
            View all projects <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Project grid + about sidebar */}
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Projects 2×3 area */}
          <div className="lg:col-span-2 grid sm:grid-cols-1 gap-5">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="card-dark overflow-hidden group hover:border-[#2a2a2a] transition-all"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-48 h-40 sm:h-auto shrink-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ filter: 'brightness(0.8)' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-display font-bold text-white text-base leading-snug">{project.title}</h3>
                      <span className="shrink-0 text-xs text-green-500 border border-green-500/30 bg-green-500/5 px-2 py-0.5 rounded-full font-medium">
                        {project.metrics}
                      </span>
                    </div>

                    <p className="text-[#666] text-sm leading-relaxed mb-3">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded text-[#666] text-xs bg-[#161616] border border-[#222]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-white hover:text-green-400 transition-colors">
                        <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                      </a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-[#666] hover:text-white transition-colors">
                        <Github className="w-3.5 h-3.5" /> Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* About me sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-dark p-6 h-fit lg:sticky lg:top-24"
          >
            <h3 className="font-display font-bold text-white text-lg mb-3">About Me</h3>
            <p className="text-[#666] text-sm leading-relaxed mb-5">
              I'm a Machine Learning Engineer with a strong focus on Computer Vision and LLM/RAG systems.
              I build things that work — clean pipelines, deployed apps, reproducible results.
            </p>
            <div className="space-y-3 mb-6">
              {[
                { icon: '🎓', text: 'MSc Computer Science — IU Germany (1.8 GPA)' },
                { icon: '🤖', text: 'AI/ML Mentor @ DSIAR Tech' },
                { icon: '⚡', text: 'Ex-AI/ML Intern @ Labmentix' },
                { icon: '🛠️', text: 'YOLO11 · LangChain · PyTorch · RAG' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3 text-sm">
                  <span className="text-base">{item.icon}</span>
                  <span className="text-[#888]">{item.text}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full text-center py-2.5 rounded-lg border border-[#2a2a2a] text-white text-sm font-medium hover:border-green-500/50 hover:text-green-400 hover:bg-green-500/5 transition-all"
            >
              More About Me →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
