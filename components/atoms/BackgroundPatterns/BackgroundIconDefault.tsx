import React from 'react';
import Image from 'next/image';
import questionMark from '@/public/images/bg-question-icon.svg';

const BackgroundIconDefault = () => {
  return (
    <div>
      <Image
        src={questionMark}
        alt='half circle pattern'
        className='absolute -left-12 -top-12 z-0 w-1/3 opacity-50 md:-top-28'
      />

      <Image
        src={questionMark}
        alt='Cookie'
        className='absolute -bottom-8 -right-8 z-0 w-1/5 opacity-65'
      />
    </div>
  );
};

export default BackgroundIconDefault;
