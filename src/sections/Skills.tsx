import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Brain, 
  Eye, 
  Cpu, 
  GitBranch, 
  BarChart3,
  Cloud,
  Database
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['Python', 'SQL', 'JavaScript', 'C++'],
    },
    {
      title: 'ML & Deep Learning',
      icon: Brain,
      skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'XGBoost', 'LightGBM', 'Hugging Face'],
    },
    {
      title: 'Computer Vision',
      icon: Eye,
      skills: ['OpenCV', 'YOLO', 'MediaPipe', 'Image Processing', 'Object Detection', 'Image Segmentation'],
    },
    {
      title: 'Data & Analytics',
      icon: BarChart3,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Data Visualization', 'EDA', 'Feature Engineering'],
    },
    {
      title: 'MLOps & Tools',
      icon: GitBranch,
      skills: ['Git & GitHub', 'Docker', 'MLflow', 'Weights & Biases', 'Streamlit', 'Flask', 'FastAPI'],
    },
    {
      title: 'Cloud & Databases',
      icon: Cloud,
      skills: ['AWS (S3, EC2, SageMaker)', 'Google Cloud Platform', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      title: 'Specializations',
      icon: Cpu,
      skills: ['Medical Image Analysis', 'Edge AI (TensorFlow Lite)', 'Real-time CV', 'Time Series Forecasting', 'NLP'],
    },
    {
      title: 'Core Concepts',
      icon: Database,
      skills: ['Neural Networks', 'CNNs', 'RNNs/LSTMs', 'Transformers', 'Ensemble Methods', 'Hyperparameter Tuning'],
    },
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
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
            Technical Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Skills & </span>
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building production-ready machine learning solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * categoryIndex }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.05 * categoryIndex + 0.03 * skillIndex }}
                    className="px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-300 text-sm hover:bg-purple-500/20 hover:text-purple-200 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Jupyter', 'Google Colab', 'VS Code', 'Linux', 'Bash Scripting', 'CI/CD', 'Unit Testing', 'Data Pipelines', 'Model Optimization', 'A/B Testing'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full glass text-gray-300 text-sm hover:bg-purple-500/20 hover:text-purple-400 transition-all cursor-default"
              >
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
