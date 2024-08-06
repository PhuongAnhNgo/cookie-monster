import React from 'react';
import Image from 'next/image';
import cookie from '../../public/images/Cookie.svg';
import { twMerge } from 'tailwind-merge';

interface CookieFightProps extends React.HTMLAttributes<HTMLDivElement> {}

const CookieFight = ({ className, ...props }: CookieFightProps) => {
  return (
    <div
      {...props}
      className={twMerge(`Character`, className ? className : '')}
    >
      <Image
        src={cookie}
        alt='Cookie'
        className='Character_spritesheet pixelart'
      />
    </div>
  );
};

export default CookieFight;
