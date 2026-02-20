'use client';

import { motion } from 'framer-motion';

interface MoodKeyVisualProps {
  brand: string;
  lines: string[];
  accent: string;
}

export default function MoodKeyVisual({ brand, lines, accent }: MoodKeyVisualProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-[#2A2A28]">
      <div className="text-center px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[#F5F2ED]/60 text-xs tracking-[0.3em] mb-10"
          style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          {brand}
        </motion.p>
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.3 }}
            className="text-3xl md:text-5xl lg:text-6xl text-[#F5F2ED] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {line}
          </motion.p>
        ))}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-3xl md:text-5xl lg:text-6xl text-[#8B7355] leading-tight mt-2"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {accent}
        </motion.p>
      </div>
    </section>
  );
}
