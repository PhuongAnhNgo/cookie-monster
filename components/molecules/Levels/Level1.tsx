'use client';
import React from 'react';

import { useLevelContext } from '@/Context/LevelContext';
import Heading from '@/components/atoms/Typography/Heading';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';

interface Level1Props extends React.HTMLAttributes<HTMLDivElement> {}

const Level1 = ({}: Level1Props) => {
  const { lives, setLives, setResult } = useLevelContext();
  return (
    <>
      <div>
        <Heading level='2' className='pb-4'>
          This website uses cookies
        </Heading>

        <p className='text-base md:text-xl'>
          We use cookies to improve user experience. Your data is for us
          precious, please agree to share data with us.
        </p>
      </div>
      <div className='flex w-full justify-between pb-6'>
        <Button
          variant='positiveGreen'
          shape='rounded'
          onClick={() => {
            setResult('wrong');
            setLives(lives - 1);
          }}
        >
          I Accept
        </Button>

        <Button
          variant='neutralGray'
          shape='rounded'
          onClick={() => setResult('correct')}
          className='opacity-50'
        >
          Decline
        </Button>
      </div>
    </>
  );
};

export default Level1;
