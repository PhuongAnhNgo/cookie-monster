import React from 'react';
import { twMerge } from 'tailwind-merge';
import BackgroundIcon from '@/components/atoms/BackgroundPatterns/BackgroundIconHome';

interface HomePageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const HomePageWrapper = ({ className, children }: HomePageWrapperProps) => {
  return (
    <div
      className={twMerge(
        `relative flex h-[calc(100dvh)] w-screen flex-col items-center overflow-hidden bg-gradient-to-r from-purple-600 to-purple-800`,
        className ? className : ''
      )}
    >
      {children}
      <BackgroundIcon />
    </div>
  );
};

export default HomePageWrapper;
