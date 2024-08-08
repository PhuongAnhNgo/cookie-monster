import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface HeadingProps {
  level?: '1' | '2' | '3';
  children: React.ReactNode;
  className?: string;
}

const Heading = ({
  level = '1',
  children,
  className,
  ...rest
}: HeadingProps) => {
  const CustomTag = `h${level}`;

  const levelClass = {
    1: 'md:text-h1 text-h2 font-bold text-center',
    2: 'text-h3 md:text-h2 font-bold ',
    3: 'text-h3 font-semibold',
  };

  const combinedClassName = twMerge(
    levelClass[level],
    className ? className : ''
  );

  return React.createElement(
    CustomTag,
    { ...rest, className: combinedClassName }, // Combine className with other HTML attributes
    children
  );
};

export default Heading;
