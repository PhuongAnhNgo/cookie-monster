import React from 'react';
import Image from 'next/image';
import human from '../../public/images/HumanHappy.svg';
import { twMerge } from 'tailwind-merge';

interface HumanHappyProps extends React.HTMLAttributes<HTMLDivElement> {}

const HumanHappy = ({ className, ...props }: HumanHappyProps) => {
  return (
    <div
      {...props}
      className={twMerge(`Character2`, className ? className : '')}
    >
      <Image
        src={human}
        alt='Human'
        className='Character_spritesheet pixelart'
      />
    </div>
  );
};

export default HumanHappy;
