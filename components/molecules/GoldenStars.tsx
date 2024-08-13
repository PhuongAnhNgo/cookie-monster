import React from 'react';
import Image from 'next/image';
import star from '@/public/images/GoldStar.svg';
const GoldenStars = () => {
  return (
    <div id='threeStart' className='flex'>
      <Image
        src={star}
        alt='Golden Star'
        className='circle-rotate-scale mx-1 size-12 md:size-16'
      />
      <Image
        src={star}
        alt='Golden Star'
        className='circle-rotate-scale star2 mx-1 size-12 md:size-16'
      />
      <Image
        src={star}
        alt='Golden Star'
        className='circle-rotate-scale star3 mx-1 size-12 md:size-16'
      />
    </div>
  );
};

export default GoldenStars;
