'use client';
import React, { useEffect, useState } from 'react';
import FlipCard from '@/components/molecules/FlipCard';
import LevelPageWrapper from '@/components/atoms/Wrapper/LevelPageWrapper';
import CharacterIntructions from '@/components/molecules/CharacterInstructions';
import NameOfLevelRibbon from '@/components/molecules/NameOfLevelRibbon';
import LevelTopBar from '@/components/organisms/LevelTopBar';

import { content } from '@/content/Content';
import { useLevelContext } from '@/Context/LevelContext';
import Level from '@/components/molecules/Level1';

export default function Level1() {
  const { currLevel, result } = useLevelContext();
  const levelCompleted = currLevel - 1;
  const contentOfCurrLevel = content[currLevel - 1];

  const progress = Math.round((levelCompleted / 7) * 100) + '%';

  const instructions = contentOfCurrLevel.instruction;
  const levelTitle = contentOfCurrLevel.name;

  return (
    <LevelPageWrapper>
      <LevelTopBar progress={progress} levelCompleted={levelCompleted} />

      <NameOfLevelRibbon levelName={levelTitle} />

      <div className='flex h-1/2 w-full justify-center md:h-2/5 lg:h-1/2'>
        <FlipCard>
          <Level />
        </FlipCard>
      </div>

      <CharacterIntructions instructions={instructions} character={result} />
    </LevelPageWrapper>
  );
}
