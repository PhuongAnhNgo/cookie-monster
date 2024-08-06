import React from 'react';
import Image from 'next/image';
import heading from '../../public/images/main-CM-Heading.svg';
import { twMerge } from 'tailwind-merge';

interface HeadingProps {
  className?: string;
}

const Heading = ({ className }: HeadingProps) => {
  return (
    <div
      className={twMerge(
        `mx-auto flex flex-col items-center`,
        className ? className : ''
      )}
    >
      <Image src={heading} alt='Cookie' className='floating mr-4 py-4' />
    </div>
  );
};

export default Heading;
