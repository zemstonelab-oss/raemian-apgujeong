'use client';

import { motion } from 'framer-motion';

interface MoodOutroProps {
  subtitle: string;
  title: string;
}

export default function MoodOutro({ subtitle, title }: MoodOutroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-[#2A2A28]">
      <div className="text-center px-4">
        <motion.p
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-sm text-[#F5F2ED]/60 tracking-[0.25em] mb-8"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
        >
          {subtitle}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl text-[#F5F2ED]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
          className="mt-10 mx-auto w-16 h-px bg-[#8B7355]"
        />
      </div>
    </section>
  );
}
