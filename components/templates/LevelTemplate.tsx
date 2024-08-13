'use client';
import { content } from '@/content/Content';
import { useLevelContext } from '@/Context/LevelContext';
import LevelPageWrapper from '../atoms/Wrapper/LevelPageWrapper';
import CharacterIntructions from '../molecules/CharacterInstructions';
import NameOfLevelRibbon from '../molecules/NameOfLevelRibbon';
import FlipCard from '../organisms/FlipCard';
import LevelTopBar from '../organisms/LevelTopBar';
import { useEffect, useState } from 'react';
import { log } from 'console';

interface LevelTemplateProps {
  children: React.ReactNode;
}
const LevelTemplate = ({ children }: LevelTemplateProps) => {
  const { currLevel, result } = useLevelContext();
  const levelCompleted = currLevel - 1;
  const contentOfCurrLevel = content[currLevel - 1];

  const progress = Math.round((levelCompleted / 7) * 100) + '%';
  const [instruction, setInstruction] = useState('');

  useEffect(() => {
    if (result == 'neutral') {
      setInstruction(contentOfCurrLevel.instruction);
    } else if (result == 'correct') {
      setInstruction('Good job!');
    } else {
      setInstruction('Oh no! You have to be more careful');
    }
  }, [result]);

  const levelTitle = contentOfCurrLevel.name;
  return (
    <LevelPageWrapper>
      <LevelTopBar progress={progress} levelCompleted={levelCompleted} />

      <NameOfLevelRibbon currLevel={currLevel} levelName={levelTitle} />

      <div className='flex h-1/2 w-full justify-center md:h-2/5 lg:h-1/2'>
        <FlipCard>{children}</FlipCard>
      </div>

      <CharacterIntructions instructions={instruction} character={result} />
    </LevelPageWrapper>
  );
};

export default LevelTemplate;
