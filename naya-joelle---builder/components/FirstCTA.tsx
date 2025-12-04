import React from 'react';
import { motion } from 'framer-motion';
import EmailCaptureForm from './EmailCaptureForm';

const FirstCTA: React.FC = () => {
  return (
    <section className="border-t border-[#222] py-24">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-2xl"
      >
        <EmailCaptureForm 
          showCheckboxes={true}
        />
      </motion.div>
    </section>
  );
};

export default FirstCTA;
