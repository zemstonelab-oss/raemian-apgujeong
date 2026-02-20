'use client';

import { motion } from 'framer-motion';

interface GalleryItem {
  caption: string;
  aspect: string;
  gradient: string;
}

interface MoodGalleryProps {
  heading: string;
  items: GalleryItem[];
}

export default function MoodGallery({ heading, items }: MoodGalleryProps) {
  return (
    <section className="bg-[#F5F2ED] px-4 md:px-8 py-24 md:py-40">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center text-sm tracking-[0.25em] text-[#6B5B4E] mb-16 md:mb-24"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
      >
        {heading}
      </motion.p>
      <div className="columns-2 md:columns-3 gap-3 md:gap-4 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: (i % 3) * 0.1 }}
            className="mb-3 md:mb-4 break-inside-avoid group relative overflow-hidden rounded-sm cursor-pointer"
          >
            <div
              className="w-full transition-transform duration-700 group-hover:scale-105"
              style={{ aspectRatio: item.aspect, background: item.gradient }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end p-4">
              <span
                className="text-[#F5F2ED] text-xs tracking-[0.15em] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
              >
                {item.caption}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
