import React from 'react';
import { content } from '@/content/Content';
import Button from '../atoms/Button';
import Image from 'next/image';
import answer from '@/public/images/answers/level1.png';

/*  Content-box for levels: This component returns the correct answer when the player loose.
    It reads the answer from Content.tsx */

interface AnswerProps extends React.HTMLAttributes<HTMLDivElement> {
  level: number;
  nextLevel: () => void;
}
const Answer = ({ level, nextLevel }: AnswerProps) => {
  const currLevelAnswer = content[level - 1].answer;
  const img = require('@/public/images/answers/level' + level + '.png');

  return (
    <div className='flex h-full flex-col justify-between'>
      <div className='flex grid h-5/6 grid-cols-1 justify-items-center gap-6 overflow-scroll px-8 py-8 text-left lg:mt-8 lg:grid-cols-2 lg:px-12'>
        <p className='md:text-lg'>{currLevelAnswer}</p>
        <Image src={img} alt='Answer' />
      </div>

      <div className='pb-6'>
        <Button variant='neutralGray' shape='rounded' onClick={nextLevel}>
          Next Level
        </Button>
      </div>
    </div>
  );
};

export default Answer;
