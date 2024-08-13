'use client';
import React from 'react';
import Image from 'next/image';
import { useLevelContext } from '@/Context/LevelContext';
import Button from '@/components/atoms/Button';
import cryingCookie from '@/public/images/CryingCookie.svg';
interface Level4Props extends React.HTMLAttributes<HTMLDivElement> {}

const Level4 = ({}: Level4Props) => {
  const { lives, setLives, setResult } = useLevelContext();
  return (
    <>
      <div>
        <Image
          src={cryingCookie}
          alt='Crying Cookie'
          className='mx-auto scale-50 md:scale-75'
        />

        <p className='text-base md:text-xl'>
          Cookie just wants to be friend with you. Will you be a good person and
          make friend with cookie? Friends share with each other anything, data
          as well!
        </p>
      </div>
      <div className='flex w-full justify-between pt-4 md:pt-8'>
        <Button
          variant='positiveGreen'
          shape='rounded'
          onClick={() => {
            setResult('wrong');
            setLives(lives - 1);
          }}
        >
          Sure! let be friend
        </Button>
        <Button
          variant='negativeRed'
          shape='rounded'
          onClick={() => setResult('correct')}
        >
          I am a bad person.
          <br /> I make friend with no one!
        </Button>
      </div>
    </>
  );
};

export default Level4;
