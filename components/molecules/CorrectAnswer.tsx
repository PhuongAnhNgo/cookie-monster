import React from 'react';
import dynamic from 'next/dynamic';
import Heading from '../atoms/Typography/Heading';
import { content } from '@/content/Content';
import Button from '../atoms/Button';

const DynamicConfetti = dynamic(() => import('@/components/atoms/Confetti'), {
  ssr: false,
});

/*  Content-box for levels: 
    This component returns congratulation message and the definition of the dark pattern in a level when the player answer correctly.
    It reads the answer from Content.tsx */

interface CorrectAnswerProps extends React.HTMLAttributes<HTMLDivElement> {
  level: number;
  nextLevel: () => void;
}

const CorrectAnswer = ({ level, nextLevel }: CorrectAnswerProps) => {
  return (
    <div id='answer-correct' className='flex h-full flex-col'>
      <DynamicConfetti />
      <div className='bg-green-600 py-2 text-white/100 md:py-4'>
        <Heading>CORRECT ANSWER</Heading>
      </div>
      <div className='flex flex-grow flex-col justify-between px-6 pt-6 md:px-12'>
        <p className='text-base md:text-2xl'>That trick called</p>
        <p className='text-lg font-bold text-red-400 md:text-2xl'>
          {content[level - 1].name}
        </p>
        <p
          className='pb-2 text-base md:text-2xl'
          dangerouslySetInnerHTML={{ __html: content[level - 1].definition }}
        ></p>
        <div className='flex justify-center pb-4 md:pb-8'>
          <Button variant='correctGreen' shape='rounded' onClick={nextLevel}>
            Next Level
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CorrectAnswer;
