import React from 'react';
import EndGamePageWrapper from '../atoms/Wrapper/EndGamePageWrapper';

interface EndGameTemplateProps {
  children: React.ReactNode;
}
const EndGameTemplate = ({ children }: EndGameTemplateProps) => {
  return (
    <EndGamePageWrapper>
      <div className='z-10 mx-4 flex h-full'>
        <div className='my-auto flex flex-col items-center rounded-lg bg-white px-8 py-12 text-center'>
          {children}
        </div>
      </div>
    </EndGamePageWrapper>
  );
};

export default EndGameTemplate;
