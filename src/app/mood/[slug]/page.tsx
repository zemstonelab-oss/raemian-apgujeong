import { notFound } from 'next/navigation';
import { apgujeongMoodData } from '@/data/mood/apgujeong';
import MoodPage from './MoodPage';

const moodDataMap: Record<string, typeof apgujeongMoodData> = {
  apgujeong: apgujeongMoodData,
};

export function generateStaticParams() {
  return Object.keys(moodDataMap).map((slug) => ({ slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const data = moodDataMap[params.slug];
  if (!data) notFound();
  return <MoodPage data={data} />;
}
