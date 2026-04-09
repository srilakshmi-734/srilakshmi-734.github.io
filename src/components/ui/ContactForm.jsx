import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, Layout } from 'lucide-react';

export function ContactForm() {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errors, setErrors] = useState({});

  const validateForm = (data) => {
    const newErrors = {};
    if (!data.get('name')) newErrors.name = 'Name is required';
    if (!data.get('email')) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.get('email'))) {
      newErrors.email = 'Invalid email address';
    }
    if (!data.get('message')) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleTextareaChange = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formErrors = validateForm(formData);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setStatus('sending');

    try {
      const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Formspree submission failed');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="glass-card rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-8">
              <CheckCircle size={48} className="text-green-500" />
            </div>
            <h3 className="text-3xl font-bold dark:text-white mb-3">Message Sent!</h3>
            <p className="text-gray-500 dark:text-gray-400 text-lg">Thank you for reaching out. I'll get back to you soon.</p>
          </motion.div>
        ) : (
          <form key="contact-form" ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="relative group"
                whileFocus={{ scale: 1.01 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className={`form-input focus:scale-[1.01] ${errors.name ? 'border-red-500/50 ring-4 ring-red-500/5' : ''}`}
                />
                {errors.name && (
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-6 left-2 text-red-500 text-xs font-semibold"
                  >
                    {errors.name}
                  </motion.span>
                )}
              </motion.div>

              {/* Email Input */}
              <motion.div
                className="relative group"
                whileFocus={{ scale: 1.01 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className={`form-input focus:scale-[1.01] ${errors.email ? 'border-red-500/50 ring-4 ring-red-500/5' : ''}`}
                />
                {errors.email && (
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-6 left-2 text-red-500 text-xs font-semibold"
                  >
                    {errors.email}
                  </motion.span>
                )}
              </motion.div>
            </div>

            {/* Purpose & Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <motion.div
                className="relative group"
                whileFocus={{ scale: 1.01 }}
              >
                <select
                  name="purpose"
                  className="form-input appearance-none cursor-pointer"
                >
                  <option value="job">Job Opportunity</option>
                  <option value="collaboration">Project Collaboration</option>
                  <option value="freelance">Freelance Work</option>
                  <option value="technical">Technical Question</option>
                  <option value="networking">Professional Networking</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <Layout size={16} />
                </div>
              </motion.div>
              <motion.div
                className="relative group"
                whileFocus={{ scale: 1.01 }}
              >
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="form-input"
                />
              </motion.div>
            </div>

            {/* Message Area */}
            <motion.div
              className="relative group pt-4"
              whileFocus={{ scale: 1.01 }}
            >
              <textarea
                name="message"
                placeholder="Write your message here..."
                onChange={handleTextareaChange}
                className={`form-input resize-none overflow-hidden min-h-[180px] focus:scale-[1.01] ${errors.message ? 'border-red-500/50 ring-4 ring-red-500/5' : ''}`}
              />
              {errors.message && (
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-6 left-2 text-red-500 text-xs font-semibold"
                >
                  {errors.message}
                </motion.span>
              )}
            </motion.div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center space-x-3 px-12 py-4 rounded-2xl font-bold transition-all duration-300 relative overflow-hidden group/btn ${status === 'sending'
                  ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                  : 'bg-accent text-white hover:bg-accent/90 shadow-xl shadow-accent/20'
                  }`}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                {status === 'sending' ? (
                  <>
                    <Loader2 size={22} className="animate-spin" />
                    <span className="relative">Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="relative">Send Message</span>
                    <Send size={20} className="relative group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-6 flex items-center space-x-2 text-red-400 justify-center bg-red-400/10 py-3 rounded-xl border border-red-400/20"
                >
                  <AlertCircle size={18} />
                  <span className="text-sm font-medium">Something went wrong. Please try again or email me directly.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
