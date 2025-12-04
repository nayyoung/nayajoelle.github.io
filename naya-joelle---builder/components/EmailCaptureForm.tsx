import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface EmailCaptureFormProps {
  title?: string;
  subtitle?: string;
  smallText?: string;
  showCheckboxes?: boolean;
}

const EmailCaptureForm: React.FC<EmailCaptureFormProps> = ({ 
  title,
  subtitle,
  smallText = "You'll get early access to experiments that may or may not work.",
  showCheckboxes = true
}) => {
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('success');
      setEmail('');
      setInterests([]);
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const toggleInterest = (interest: string) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-6"
    >
      {title && (
        <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-base text-[#888] md:text-lg">
          {subtitle}
        </p>
      )}
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 sm:flex-row">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="flex-1 border border-[#333] bg-[#0a0a0a] px-6 py-4 text-base text-[#f5f5f5] placeholder-[#555] outline-none transition-all focus:border-[#e07a24] focus:bg-[#111]"
            required
            disabled={status === 'success'}
          />
          <button 
            type="submit" 
            disabled={status === 'success'}
            className="bg-[#e07a24] px-8 py-4 text-base font-bold text-[#0a0a0a] transition-all hover:bg-[#f5f5f5] disabled:bg-green-600 disabled:text-white"
          >
            {status === 'success' ? 'Saved ✓' : 'Send me weird tools'}
          </button>
        </div>

        {showCheckboxes && (
          <div className="flex flex-col gap-3">
            <p className="text-sm text-[#666]">What are you into?</p>
            <div className="flex flex-wrap gap-4">
              {['Tools', 'Ideas', 'Chaos'].map((option) => (
                <label 
                  key={option}
                  className="flex cursor-pointer items-center gap-2 text-sm text-[#888] transition-colors hover:text-[#f5f5f5]"
                >
                  <input 
                    type="checkbox"
                    checked={interests.includes(option)}
                    onChange={() => toggleInterest(option)}
                    className="h-4 w-4 cursor-pointer border-[#333] bg-transparent accent-[#e07a24]"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        <p className="text-xs text-[#888]">
          {smallText}
        </p>
      </form>
    </motion.div>
  );
};

export default EmailCaptureForm;
