import React, { useEffect, useState } from 'react';
import Heading from '../atoms/Typography/Heading';
import Button from '../atoms/Button';
import { content } from '@/content/Content';
import { useLevelContext } from '@/Context/LevelContext';

/*  Content-box for levels: 
    This component returns 'wrong answer' message and the definition of the dark pattern in a level when the player answer wrong.
    It reads the answer from Content.tsx */

interface WrongAnswerProps extends React.HTMLAttributes<HTMLDivElement> {
  level: number;
  handelReplay: () => void;
  setShowAnswer: React.Dispatch<React.SetStateAction<boolean>>;
}
const WrongAnswer = ({
  level,
  handelReplay,
  setShowAnswer,
}: WrongAnswerProps) => {
  const { lives } = useLevelContext();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  useEffect(() => {
    if (lives < 1) {
      setButtonDisabled(true);
    }
  }, [lives]);

  return (
    <>
      <div className='bg-red-400 py-2 text-white/100 md:py-4'>
        <Heading>WRONG ANSWER</Heading>
      </div>
      <div className='flex h-4/5 flex-col justify-between overflow-scroll px-6 pt-6 md:px-12 md:pt-6'>
        <p className='text-base md:text-2xl'>That trick is called</p>
        <p className='text-lg font-bold text-red-400 md:text-2xl'>
          {content[level - 1].name}
        </p>
        <p
          className='pb-2 text-base md:text-2xl'
          dangerouslySetInnerHTML={{ __html: content[level - 1].definition }}
        ></p>
        <div className='flex justify-between pb-4 md:px-12'>
          <Button
            variant='negativeRed'
            shape='rounded'
            onClick={handelReplay}
            disabled={buttonDisabled}
            className={buttonDisabled ? 'cursor-not-allowed opacity-50' : ''}
          >
            Replay
          </Button>
          <Button
            variant='negativeRed'
            shape='rounded'
            onClick={() => setShowAnswer(true)}
          >
            Show Answer
          </Button>
        </div>
      </div>
    </>
  );
};

export default WrongAnswer;
