'use client';

import MoodHero from '@/components/mood/MoodHero';
import MoodGallery from '@/components/mood/MoodGallery';
import MoodStoryCards from '@/components/mood/MoodStoryCards';
import MoodKeyVisual from '@/components/mood/MoodKeyVisual';
import MoodHighlights from '@/components/mood/MoodHighlights';
import MoodFeatures from '@/components/mood/MoodFeatures';
import MoodOutro from '@/components/mood/MoodOutro';
import { apgujeongMoodData } from '@/data/mood/apgujeong';

type MoodData = typeof apgujeongMoodData;

export default function MoodPage({ data }: { data: MoodData }) {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Noto+Sans+KR:wght@300;400;500&display=swap');
        html { scroll-behavior: smooth; }
        body { background: #F5F2ED; margin: 0; }
        ::-webkit-scrollbar { display: none; }
      `}</style>
      <main>
        <MoodHero {...data.hero} />
        <MoodGallery {...data.gallery} />
        <MoodStoryCards stories={data.stories} />
        <MoodKeyVisual {...data.keyVisual} />
        <MoodHighlights highlights={data.highlights} />
        <MoodFeatures features={data.features} />
        <MoodOutro {...data.outro} />
      </main>
    </>
  );
}
