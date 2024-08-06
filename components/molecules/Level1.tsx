'use client';
import React from 'react';
import Heading from '../atoms/Typography/Heading';
import Button from '../atoms/Button';
import { useLevelContext } from '@/Context/LevelContext';

interface Level1Props extends React.HTMLAttributes<HTMLDivElement> {
  //checkAnswer: (answerIsCorrect: boolean) => void;
}

const Level1 = ({}: Level1Props) => {
  const { lives, setLives, setResult } = useLevelContext();
  return (
    <>
      <div>
        <Heading level='2' className='pb-4'>
          Heading of question 1
        </Heading>

        <p className='text-base md:text-xl'>
          We use cookie to improve user experience. Your data is for us
          precious, please agree to share data with us.
        </p>
      </div>
      <div className='flex w-full justify-between pt-4'>
        <Button
          variant='positiveGreen'
          shape='rounded'
          onClick={() => setResult('correct')}
        >
          Show correct
        </Button>
        <Button
          variant='negativeRed'
          shape='rounded'
          onClick={() => {
            setResult('wrong');
            setLives(lives - 1);
          }}
        >
          Show wrong
        </Button>
      </div>
    </>
  );
};

export default Level1;
