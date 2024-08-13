'use client';
import React from 'react';

import { useLevelContext } from '@/Context/LevelContext';
import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Typography/Heading';

interface Level6Props extends React.HTMLAttributes<HTMLDivElement> {}

const Level6 = ({}: Level6Props) => {
  const { lives, setLives, setResult } = useLevelContext();
  return (
    <>
      <div>
        <Heading level='2' className='pb-2 md:pb-4'>
          We use cookies
        </Heading>
        <p className='text-sm md:text-lg'>
          Diese Website verwendet Cookies, um sicherzustellen, dass Sie das
          beste Erlebnis auf unserer Website erhalten. Funktionelle Cookies sind
          notwendig für die Funktionalität der Website. Analyse Cookies helfen
          uns, die Nutzung der Website zu verstehen. Marketing Cookies werden
          verwendet, um Ihnen personalisierte Werbung zu zeigen.
        </p>
      </div>
      <div className='flex w-full justify-between pt-6'>
        <Button
          variant='neutralBlue'
          shape='rounded'
          onClick={() => setResult('correct')}
        >
          Acepta solo lo necesario
        </Button>
        <Button
          variant='neutralBlue'
          shape='rounded'
          onClick={() => {
            setResult('wrong');
            setLives(lives - 1);
          }}
        >
          Aceptar todas las cookies
        </Button>
      </div>
    </>
  );
};

export default Level6;
