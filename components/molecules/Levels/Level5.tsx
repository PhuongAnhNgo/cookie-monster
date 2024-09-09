'use client';
import React from 'react';

import { useLevelContext } from '@/Context/LevelContext';
import Button from '@/components/atoms/Button';

interface Level5Props extends React.HTMLAttributes<HTMLDivElement> {}

const Level5 = ({}: Level5Props) => {
  const { lives, setLives, setResult } = useLevelContext();
  return (
    <>
      <div>
        <p className='text-base md:text-xl'>
          Cookie was born in 2022 in Germany. He is an only child in the family
          but he has many friends. Cookie is a very friendly person. He has a
          big cookie factory in Berlin and anyone who is his friend can come and
          visit it. To visit the cooking factory, share your information, and
          make friends with Cookie.
        </p>
      </div>
      <div className='flex w-full justify-between pb-4'>
        <Button
          variant='neutralGray'
          shape='rounded'
          onClick={() => setResult('correct')}
        >
          Not visit the cookie factory
        </Button>
        <Button
          variant='neutralGray'
          shape='rounded'
          onClick={() => {
            setResult('wrong');
            setLives(lives - 1);
          }}
        >
          Visit the cookie factory
        </Button>
      </div>
    </>
  );
};

export default Level5;
