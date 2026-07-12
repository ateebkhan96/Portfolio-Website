import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, TrendingUp, Activity, Brain, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Brain Tumor Detection using YOLO11',
      description: 'State-of-the-art MRI tumor detection system using YOLO11 with real-time inference and a deployable Streamlit app. My MSc thesis extended this with a ResNet-50 vs ViT explainability study (Grad-CAM vs Attention Rollout).',
      demoLink: 'https://brain-tumor-det.streamlit.app/',
      githubLink: 'https://github.com/ateebkhan96/Brain-Tumor-Detection-using-YOLO11',
      metrics: [
        { label: 'mAP@0.5', value: '95.1%', icon: TrendingUp },
        { label: 'Precision', value: '92.7%', icon: Activity },
      ],
      techStack: ['YOLO11', 'PyTorch', 'OpenCV', 'Medical Imaging', 'Streamlit'],
      featured: true,
      icon: Brain,
      accent: 'from-indigo-500 to-violet-500',
    },
    {
      title: 'Document Q&A with RAG',
      description: 'Retrieval-augmented generation system for natural-language Q&A over uploaded documents. Combines semantic chunking, vector search, and LLM-powered answer generation in a fully deployed Streamlit app.',
      demoLink: 'https://ateebkhan96-document-qa-rag-app-1u18bq.streamlit.app/',
      githubLink: 'https://github.com/ateebkhan96',
      metrics: [
        { label: 'Vector DB', value: 'ChromaDB', icon: Activity },
        { label: 'LLM', value: 'LLaMA 3.3-70B', icon: TrendingUp },
      ],
      techStack: ['LangChain', 'ChromaDB', 'Groq', 'all-MiniLM-L6-v2', 'Streamlit'],
      featured: true,
      icon: MessageSquare,
      accent: 'from-violet-500 to-blue-500',
    },
    {
      title: 'Face Mask Detection Web App',
      description: 'Real-time face mask detection for public safety using DenseNet201 optimised with TensorFlow Lite for edge deployment. Achieves 30 FPS with MediaPipe face detection.',
      demoLink: 'https://face-mask-detection-system.streamlit.app/',
      githubLink: 'https://github.com/ateebkhan96/face-mask-detection-system',
      metrics: [
        { label: 'Accuracy', value: '98.99%', icon: TrendingUp },
        { label: 'Speed', value: '30 FPS', icon: Activity },
      ],
      techStack: ['DenseNet201', 'TensorFlow Lite', 'MediaPipe', 'OpenCV', 'Streamlit'],
      featured: true,
      icon: Activity,
      accent: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Real-Time Hand Tracking',
      description: 'Real-time hand landmark tracking using MediaPipe with 21-point skeletal detection from a live webcam feed. Foundation for gesture-based HCI applications.',
      demoLink: 'https://github.com/ateebkhan96/HandTracking',
      githubLink: 'https://github.com/ateebkhan96/HandTracking',
      metrics: [
        { label: 'Speed', value: '30+ FPS', icon: Activity },
        { label: 'Landmarks', value: '21 / hand', icon: TrendingUp },
      ],
      techStack: ['MediaPipe', 'OpenCV', 'Python', 'Real-Time CV'],
      featured: false,
      icon: Activity,
      accent: 'from-slate-400 to-slate-500',
    },
  ];

  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="pill mb-4 inline-flex">Projects</span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Production-deployed ML applications — each with a live demo you can try now.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {featured.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="card p-6 flex flex-col hover:shadow-lg hover:border-indigo-200 transition-all group"
            >
              {/* Icon header */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.accent} flex items-center justify-center mb-4 shadow-sm`}>
                <project.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="font-display font-bold text-slate-900 text-lg mb-2 leading-snug">{project.title}</h3>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed flex-1">{project.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {project.metrics.map((m) => (
                  <div key={m.label} className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-center">
                    <p className="font-bold text-slate-900 text-sm font-display">{m.value}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.techStack.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded-md bg-indigo-50 text-indigo-600 border border-indigo-100">
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-auto">
                <Button asChild size="sm" className="flex-1 gradient-bg text-white hover:opacity-90 transition-all rounded-lg text-xs">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" /> Live Demo
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="flex-1 border-slate-200 text-slate-600 hover:bg-slate-50 rounded-lg text-xs">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3.5 h-3.5 mr-1.5" /> Code
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        {others.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            className="card p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-slate-300 transition-all"
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.accent} flex items-center justify-center shrink-0`}>
              <project.icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold font-display text-slate-900 text-sm">{project.title}</h3>
              <p className="text-slate-400 text-xs mt-0.5 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {project.techStack.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs rounded bg-slate-100 text-slate-500">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-all">
                <ExternalLink className="w-4 h-4" />
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
