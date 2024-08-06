import React from 'react';
import { content } from '@/content/Content';
import Button from '../atoms/Button';

/*  Content-box for levels: This component returns the correct answer when the player loose.
    It reads the answer from Content.tsx */

interface AnswerProps extends React.HTMLAttributes<HTMLDivElement> {
  level: number;
  nextLevel: () => void;
}
const Answer = ({ level, nextLevel }: AnswerProps) => {
  return (
    <div>
      <p>{content[level - 1].answer}</p>
      <Button variant='neutralGray' shape='rounded' onClick={nextLevel}>
        Next Level
      </Button>
    </div>
  );
};

export default Answer;
