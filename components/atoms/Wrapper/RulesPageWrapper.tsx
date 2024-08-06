import React from 'react';

import BackgroundIconDefault from '@/components/atoms/BackgroundPatterns/BackgroundIconDefault';

interface HomePageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const RulesPageWrapper = ({ children }: HomePageWrapperProps) => {
  return (
    <div className='relative flex h-[calc(100dvh)] flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-purple-400 via-purple-200 to-purple-400'>
      <div className='z-10 flex h-auto w-full justify-center lg:px-24'>
        {children}
      </div>
      <BackgroundIconDefault />
    </div>
  );
};

export default RulesPageWrapper;
