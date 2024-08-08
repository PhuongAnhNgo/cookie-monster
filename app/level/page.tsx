'use client';
import dynamic from 'next/dynamic';
import LevelTemplate from '@/components/templates/LevelTemplate';
import { useLevelContext } from '@/Context/LevelContext';

const Level1 = dynamic(() => import('@/components/molecules/Levels/Level1'));
const Level2 = dynamic(() => import('@/components/molecules/Levels/Level2'));
const Level3 = dynamic(() => import('@/components/molecules/Levels/Level3'));
const Level4 = dynamic(() => import('@/components/molecules/Levels/Level4'));
const Level5 = dynamic(() => import('@/components/molecules/Levels/Level5'));
const Level6 = dynamic(() => import('@/components/molecules/Levels/Level6'));
const Level7 = dynamic(() => import('@/components/molecules/Levels/Level7'));

export default function Level() {
  const { currLevel } = useLevelContext();
  return (
    <LevelTemplate>
      {currLevel == 1 && <Level1 />}
      {currLevel == 2 && <Level2 />}
      {currLevel == 3 && <Level3 />}
      {currLevel == 4 && <Level4 />}
      {currLevel == 5 && <Level5 />}
      {currLevel == 6 && <Level6 />}
      {currLevel == 7 && <Level7 />}
    </LevelTemplate>
  );
}
