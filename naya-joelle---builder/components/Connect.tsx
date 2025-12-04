import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Twitter } from 'lucide-react';
import EmailCaptureForm from './EmailCaptureForm';

const Connect: React.FC = () => {
  return (
    <section className="py-24">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-sm bg-[#111] p-8 md:p-16"
      >
        <h2 className="mb-12 text-5xl font-bold tracking-tighter md:text-7xl">
          →
        </h2>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Socials */}
          <div className="flex flex-col gap-8">
            <a 
              href="https://twitter.com/nayajoelley" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-2xl font-light text-[#ccc] transition-colors hover:text-[#e07a24]"
            >
              <Twitter className="h-6 w-6" />
              <span>@nayajoelley</span>
              <ArrowRight className="h-5 w-5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </a>
            <p className="text-[#666]">
              Feeling spicy? DM me.
            </p>
          </div>

          {/* Email Capture */}
          <div>
            <EmailCaptureForm 
              showCheckboxes={false}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Connect;