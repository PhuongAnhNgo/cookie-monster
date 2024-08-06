import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SpeechBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const SpeechBubble = ({ className, children, ...rest }: SpeechBubbleProps) => {
  return (
    <div
      className={twMerge(
        `speech-bubble rounded-lg`,
        className ? className : ''
      )}
    >
      {children}
    </div>
  );
};

export default SpeechBubble;
