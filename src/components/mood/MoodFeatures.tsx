'use client';

import { motion } from 'framer-motion';

interface Feature {
  label: string;
  title: string;
  desc: string;
  gradient: string;
}

interface MoodFeaturesProps {
  features: Feature[];
}

export default function MoodFeatures({ features }: MoodFeaturesProps) {
  return (
    <section className="bg-[#F5F2ED] py-24 md:py-40">
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-24 md:space-y-40">
        {features.map((f, i) => {
          const isReversed = i % 2 === 1;
          return (
            <div
              key={i}
              className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="w-full md:w-[60%] overflow-hidden rounded-sm"
              >
                <div
                  className="w-full transition-transform duration-700 hover:scale-[1.02]"
                  style={{ aspectRatio: '4/3', background: f.gradient }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="w-full md:w-[40%]"
              >
                <p
                  className="text-xs tracking-[0.2em] text-[#4A5530] mb-4"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  {f.label}
                </p>
                <h3
                  className="text-3xl md:text-4xl text-[#2A2A28] mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-sm md:text-base text-[#6B5B4E] leading-relaxed"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  {f.desc}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
