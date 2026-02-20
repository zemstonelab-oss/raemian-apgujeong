'use client';

import { motion } from 'framer-motion';

interface Highlight {
  label: string;
  gradient: string;
}

interface MoodHighlightsProps {
  highlights: Highlight[];
}

export default function MoodHighlights({ highlights }: MoodHighlightsProps) {
  return (
    <section className="bg-[#F5F2ED] py-24 md:py-32">
      <div className="flex justify-center gap-8 md:gap-14 px-4">
        {highlights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div
              className="w-[72px] h-[72px] md:w-[80px] md:h-[80px] rounded-full p-[2px] transition-transform duration-300 group-hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #4A5530, #8B7355)' }}
            >
              <div
                className="w-full h-full rounded-full"
                style={{ background: h.gradient }}
              />
            </div>
            <span
              className="mt-3 text-xs text-[#6B5B4E] tracking-wider"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              {h.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
