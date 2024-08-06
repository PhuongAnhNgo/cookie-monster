import React from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

/* The box with the rules */

interface RuleSetProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  rule: string;
}

const RuleSet = ({ className, imgSrc, rule, ...rest }: RuleSetProps) => {
  return (
    <div
      className={twMerge(
        `flex flex-col items-center py-4 md:flex-row md:items-start`,
        className ? className : ''
      )}
      {...rest}
    >
      <Image
        src={imgSrc}
        width={50}
        height={50}
        alt='Picture of Cookie Monster'
        className='md:mt-3'
      />
      <p className='mt-2 whitespace-pre-wrap text-base md:ml-4 md:mt-0 md:text-xl'>
        {rule}
      </p>
    </div>
  );
};

export default RuleSet;
