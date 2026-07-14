import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Send, Github, Linkedin, CheckCircle2, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', website: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return;
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('https://formspree.io/f/xojnalea', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, subject: formData.subject, message: formData.message }),
      });
      if (res.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '', website: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else throw new Error();
    } catch {
      setSubmitError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="pill mb-4 inline-flex">Get In Touch</span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-[#666] mt-3 max-w-xl">Open to ML/AI roles, collaborations, and interesting conversations.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="card-dark p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-green-500" />
              </div>
              <div>
                <p className="text-[#444] text-xs uppercase tracking-wide mb-0.5">Location</p>
                <p className="text-white text-sm font-medium">Akola, Maharashtra · Open to relocation & remote</p>
              </div>
            </div>

            <div className="card-dark p-5">
              <p className="text-[#444] text-xs uppercase tracking-wide mb-3">Find me on</p>
              <div className="flex gap-3">
                {[
                  { href: 'https://linkedin.com/in/ateebk/', label: 'LinkedIn', icon: <Linkedin className="w-4 h-4" /> },
                  { href: 'https://github.com/ateebkhan96', label: 'GitHub', icon: <Github className="w-4 h-4" /> },
                  {
                    href: 'https://x.com/theAteebKhan', label: 'X',
                    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                    className="w-10 h-10 rounded-lg border border-[#222] flex items-center justify-center text-[#555] hover:text-green-400 hover:border-green-500/30 transition-all">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="card-dark p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Available for Work</span>
              </div>
              <p className="text-[#666] text-sm">Open to full-time roles in Pune, Bengaluru, Hyderabad, Chennai, Mumbai, or remote globally.</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-dark p-6"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="font-display font-bold text-white text-lg mb-2">Message Sent!</h4>
                <p className="text-[#666] text-sm">Thanks for reaching out — I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="hidden"><input type="text" name="website" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} tabIndex={-1} /></div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#555] mb-1.5">Name *</label>
                    <Input type="text" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required minLength={2}
                      className="bg-[#161616] border-[#222] text-white placeholder:text-[#333] focus:border-green-500/40 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                  </div>
                  <div>
                    <label className="block text-xs text-[#555] mb-1.5">Email *</label>
                    <Input type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required
                      className="bg-[#161616] border-[#222] text-white placeholder:text-[#333] focus:border-green-500/40 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-[#555] mb-1.5">Subject *</label>
                  <Input type="text" placeholder="What's this about?" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required
                    className="bg-[#161616] border-[#222] text-white placeholder:text-[#333] focus:border-green-500/40 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                </div>
                <div>
                  <label className="block text-xs text-[#555] mb-1.5">Message *</label>
                  <Textarea placeholder="Tell me about your project or opportunity..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required minLength={20} rows={5}
                    className="bg-[#161616] border-[#222] text-white placeholder:text-[#333] focus:border-green-500/40 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none" />
                </div>
                {submitError && <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">{submitError}</div>}
                <button type="submit" disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-green-500 text-black font-semibold text-sm hover:bg-green-400 transition-all disabled:opacity-50">
                  {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Send Message</>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
