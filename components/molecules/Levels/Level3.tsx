'use client';
import React from 'react';

import { useLevelContext } from '@/Context/LevelContext';
import Heading from '@/components/atoms/Typography/Heading';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';

interface Level3Props extends React.HTMLAttributes<HTMLDivElement> {}

const Level3 = ({}: Level3Props) => {
  const { lives, setLives, setResult } = useLevelContext();
  return (
    <>
      <div>
        <Heading level='2' className='pb-4 text-center'>
          Newsletter subcribtion
        </Heading>

        <p className='text-base md:text-xl'>
          By clicking &quot;no&quot; you are not disagree to unsubcribe to our
          newsletter
        </p>
      </div>
      <div className='flex w-full justify-between pb-4'>
        <Button
          variant='neutralBlue'
          shape='rounded'
          onClick={() => {
            setResult('wrong');
            setLives(lives - 1);
          }}
        >
          YES
        </Button>
        <Button
          variant='neutralBlue'
          shape='rounded'
          onClick={() => setResult('correct')}
        >
          NO
        </Button>
      </div>
    </>
  );
};

export default Level3;
