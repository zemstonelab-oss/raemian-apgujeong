'use client';

import { motion } from 'framer-motion';

interface Story {
  title: string;
  desc: string;
  gradient: string;
}

interface MoodStoryCardsProps {
  stories: Story[];
}

export default function MoodStoryCards({ stories }: MoodStoryCardsProps) {
  return (
    <section className="bg-[#F5F2ED] py-24 md:py-40">
      <div
        className="flex gap-4 md:gap-6 overflow-x-auto px-4 md:px-8 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {stories.map((story, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="flex-shrink-0 w-[80vw] md:w-[40vw] snap-start"
          >
            <div
              className="rounded-3xl overflow-hidden"
              style={{ aspectRatio: '3/4', background: story.gradient }}
            />
            <div className="mt-5 px-1">
              <h3
                className="text-xl md:text-2xl text-[#2A2A28]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {story.title}
              </h3>
              <p className="mt-1 text-sm text-[#6B5B4E]" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                {story.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
