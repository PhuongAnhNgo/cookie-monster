import React from 'react';
import BackgroundIconDefault from '@/components/atoms/BackgroundPatterns/BackgroundIconDefault';

interface LevelPageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const LevelPageWrapper = ({ children }: LevelPageWrapperProps) => {
  return (
    <div className='relative flex h-[calc(100dvh)] flex-col items-center overflow-hidden bg-gradient-to-b from-purple-300 to-blue'>
      <div className='z-10 h-full w-full'>{children}</div>
      <BackgroundIconDefault />
    </div>
  );
};

export default LevelPageWrapper;
