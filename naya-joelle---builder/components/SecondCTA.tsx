import React from 'react';
import { motion } from 'framer-motion';
import EmailCaptureForm from './EmailCaptureForm';

const SecondCTA: React.FC = () => {
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
          subtitle="Join a quiet list of people who like shipping things that don't exist yet."
          showCheckboxes={false}
        />
      </motion.div>
    </section>
  );
};

export default SecondCTA;
