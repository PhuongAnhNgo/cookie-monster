import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

const Text = ({ className, children, ...props }: TextProps) => {
  return (
    <p
      className={twMerge(`text-base md:text-lg`, className ? className : '')}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;
