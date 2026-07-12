import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Send, Github, Linkedin, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', website: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return;
    const lastSubmit = localStorage.getItem('lastFormSubmit');
    if (lastSubmit && Date.now() - parseInt(lastSubmit) < 60000) {
      setSubmitError('Please wait a moment before sending another message.');
      setTimeout(() => setSubmitError(''), 5000);
      return;
    }
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const response = await fetch('https://formspree.io/f/xojnalea', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, subject: formData.subject, message: formData.message }),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '', website: '' });
        localStorage.setItem('lastFormSubmit', Date.now().toString());
        setTimeout(() => setIsSubmitted(false), 5000);
      } else throw new Error('Failed');
    } catch {
      setSubmitError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="pill mb-4 inline-flex">Get In Touch</span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Open to opportunities, collaborations, and conversations about AI/ML.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="card p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Location</p>
                <p className="text-slate-800 font-medium text-sm">Akola, Maharashtra · Open to relocation & remote</p>
              </div>
            </div>

            <div className="card p-5">
              <h3 className="font-semibold font-display text-slate-900 text-sm mb-3">Find me on</h3>
              <div className="flex gap-3">
                {[
                  { href: 'https://linkedin.com/in/ateebk/', label: 'LinkedIn', icon: <Linkedin className="w-5 h-5" /> },
                  { href: 'https://github.com/ateebkhan96', label: 'GitHub', icon: <Github className="w-5 h-5" /> },
                  {
                    href: 'https://x.com/theAteebKhan',
                    label: 'X',
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-600 font-semibold text-sm">Available for Work</span>
              </div>
              <p className="text-slate-500 text-sm">
                Open to full-time ML/AI roles (Pune, Bengaluru, Hyderabad, Chennai, Mumbai) and remote positions globally.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card p-7">
              <h3 className="font-semibold font-display text-slate-900 mb-5">Send a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold font-display text-slate-900 mb-2">Message Sent!</h4>
                  <p className="text-slate-500 text-sm">Thanks for reaching out — I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="hidden" aria-hidden="true">
                    <input type="text" name="website" value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1.5">Name *</label>
                      <Input type="text" placeholder="Your name" value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required minLength={2} maxLength={100}
                        className="border-slate-200 text-slate-900 placeholder:text-slate-300 focus:border-indigo-400 focus:ring-indigo-100" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1.5">Email *</label>
                      <Input type="email" placeholder="your@email.com" value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required maxLength={100}
                        className="border-slate-200 text-slate-900 placeholder:text-slate-300 focus:border-indigo-400 focus:ring-indigo-100" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1.5">Subject *</label>
                    <Input type="text" placeholder="What's this about?" value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required minLength={5} maxLength={200}
                      className="border-slate-200 text-slate-900 placeholder:text-slate-300 focus:border-indigo-400 focus:ring-indigo-100" />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1.5">Message *</label>
                    <Textarea placeholder="Tell me about your project or opportunity..." value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required minLength={20} maxLength={2000} rows={5}
                      className="border-slate-200 text-slate-900 placeholder:text-slate-300 focus:border-indigo-400 focus:ring-indigo-100 resize-none" />
                    <p className="text-xs text-slate-400 mt-1">Minimum 20 characters</p>
                  </div>

                  {submitError && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">{submitError}</div>
                  )}

                  <Button type="submit" disabled={isSubmitting}
                    className="w-full gradient-bg text-white py-5 rounded-xl hover:opacity-90 transition-all disabled:opacity-50 shadow-sm shadow-indigo-200">
                    {isSubmitting ? (
                      <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending...</>
                    ) : (
                      <><Send className="w-4 h-4 mr-2" />Send Message</>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
