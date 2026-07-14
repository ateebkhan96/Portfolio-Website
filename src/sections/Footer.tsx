import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0a0a0a] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <h3 className="font-display text-lg font-bold gradient-text mb-3">Ateeb Ahmed Khan</h3>
            <p className="text-[#555] text-sm leading-relaxed max-w-sm mb-5">
              Machine Learning Engineer specialising in computer vision, LLM/RAG systems, and production ML.
              Open to roles in Pune, Bengaluru, Hyderabad, Chennai, Mumbai, or remote globally.
            </p>
            <div className="flex gap-2">
              {[
                { href: 'https://linkedin.com/in/ateebk/', label: 'LinkedIn', icon: <Linkedin className="w-4 h-4" /> },
                { href: 'https://github.com/ateebkhan96', label: 'GitHub', icon: <Github className="w-4 h-4" /> },
                {
                  href: 'https://x.com/theAteebKhan', label: 'X',
                  icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                  className="w-9 h-9 rounded-lg border border-[#1e1e1e] flex items-center justify-center text-[#444] hover:text-green-400 hover:border-green-500/30 transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', id: 'hero' }, { label: 'Projects', id: 'projects' },
                { label: 'Experience', id: 'experience' }, { label: 'Skills', id: 'skills' },
                { label: 'About', id: 'about' }, { label: 'Contact', id: 'contact' },
              ].map((l) => (
                <li key={l.label}>
                  <button onClick={() => scrollTo(l.id)} className="text-[#555] text-sm hover:text-green-400 transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Location</h4>
            <p className="text-[#555] text-sm">Akola, Maharashtra, India</p>
            <p className="text-[#444] text-sm mt-1">Open to relocation & remote</p>
            <div className="flex items-center gap-1.5 mt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-500 text-xs font-medium">Available for work</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#111] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#333] text-xs">© {new Date().getFullYear()} Ateeb Ahmed Khan. All rights reserved.</p>
          <p className="text-[#333] text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
