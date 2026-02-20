'use client';

import { motion } from 'framer-motion';

interface MoodHeroProps {
  title: string;
  subtitle: string;
  gradient: string;
}

export default function MoodHero({ title, subtitle, gradient }: MoodHeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: gradient }} />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="font-serif text-[15vw] leading-none text-[#F5F2ED] tracking-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          className="mt-6 text-[#F5F2ED]/80 text-sm md:text-base tracking-[0.3em] uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
        >
          {subtitle}
        </motion.p>
      </div>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-16 bg-[#F5F2ED]/40 origin-top"
      />
    </section>
  );
}
