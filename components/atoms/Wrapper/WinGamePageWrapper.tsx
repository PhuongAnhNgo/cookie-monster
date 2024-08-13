import React from 'react';
import { twMerge } from 'tailwind-merge';
import BackgroundIconDefault from '../BackgroundPatterns/BackgroundIconDefault';

interface EndGamePageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const EndGamePageWrapper = ({
  className,
  children,
}: EndGamePageWrapperProps) => {
  return (
    <div
      className={twMerge(
        `relative flex h-[calc(100dvh)] w-screen flex-col items-center overflow-hidden bg-gradient-to-r from-purple-600 to-purple-800`,
        className ? className : ''
      )}
    >
      {children}
      <BackgroundIconDefault />
    </div>
  );
};

export default EndGamePageWrapper;
