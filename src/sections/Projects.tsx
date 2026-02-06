import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Sparkles, TrendingUp, Activity, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Brain Tumor Detection using YOLO11',
      description: 'State-of-the-art MRI tumor detection system using YOLO11 architecture with focus on medical diagnostic accuracy and real-time inference capabilities.',
      image: '/project-brain-tumor.jpg',
      demoLink: 'https://brain-tumor-det.streamlit.app/',
      githubLink: '#',
      metrics: [
        { label: 'mAP@0.5', value: '95.1%', icon: TrendingUp },
        { label: 'Precision', value: '92.7%', icon: Activity },
      ],
      techStack: ['YOLO11', 'PyTorch', 'Computer Vision', 'Medical Imaging', 'Streamlit'],
      featured: true,
      icon: Brain,
    },
    {
      title: 'Face Mask Detection Web App',
      description: 'Real-time face mask detection system for public safety applications using deep learning and edge deployment optimization with TensorFlow Lite.',
      image: '/project-face-mask.jpg',
      demoLink: 'https://face-mask-detection-system.streamlit.app/',
      githubLink: '#',
      metrics: [
        { label: 'Accuracy', value: '98.99%', icon: TrendingUp },
        { label: 'Dataset', value: '992 Images', icon: Activity },
      ],
      techStack: ['DenseNet201', 'TensorFlow Lite', 'MediaPipe', 'OpenCV', 'Streamlit'],
      featured: true,
      icon: Sparkles,
    },
    {
    title: 'Real-Time Hand Tracking (MediaPipe)',
    description:
      'Real-time hand detection and landmark tracking using MediaPipe and OpenCV. Tracks finger joints and hand movement live from webcam feed for gesture-based applications.',
    image: '/project-handtracking.png',
    demoLink: 'https://github.com/ateebkhan96/HandTracking',
    githubLink: 'https://github.com/ateebkhan96/HandTracking',
    metrics: [
      { label: 'Real-Time', value: '30+ FPS', icon: Activity },
      { label: 'Landmarks', value: '21 points/hand', icon: TrendingUp },
    ],
    techStack: ['MediaPipe', 'OpenCV', 'Python', 'Computer Vision', 'Real-Time'],
    featured: false,
    icon: Activity,
  },

  ];

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
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
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Project </span>
            <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            High-impact ML solutions with production deployment and measurable results.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden h-full flex flex-col hover:border-purple-500/30 transition-all duration-300"
              >
                {/* Project Image Placeholder */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 gradient-bg opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-purple-400/50" />
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full gradient-bg text-white text-xs font-medium">
                      Featured
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-purple-600 hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-purple-600 hover:scale-110 transition-transform"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="glass rounded-xl p-3 text-center"
                      >
                        <metric.icon className="w-4 h-4 text-purple-400 mx-auto mb-1" />
                        <div className="text-lg font-bold gradient-text">{metric.value}</div>
                        <div className="text-xs text-gray-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      asChild
                      className="flex-1 gradient-bg text-white rounded-xl hover:opacity-90 transition-all"
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-purple-500/50 text-white rounded-xl hover:bg-purple-500/10 transition-all"
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            variant="outline"
            className="border-purple-500/50 text-white px-8 py-6 rounded-xl hover:bg-purple-500/10 transition-all"
          >
            <a href="https://github.com/ateebkhan96" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
