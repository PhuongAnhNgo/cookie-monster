'use client';
import React, { useEffect, useState } from 'react';

import { useLevelContext } from '@/Context/LevelContext';
import Form from '../atoms/Form';
import CorrectAnswer from '../molecules/CorrectAnswer';
import Answer from '../molecules/Answer';
import WrongAnswer from '../molecules/WrongAnswer';
import { useRouter } from 'next/navigation';

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const FlipCard = ({ children, className }: FlipCardProps) => {
  const { currLevel, setCurrLevel, result, setResult, lives } =
    useLevelContext();
  const [flipped, setFlipped] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [levelHidden, setLevelHidden] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    } else {
      setFlipped(!flipped);
    }
    if (result == 'neutral') {
      setLevelHidden(false);
    } else {
      setLevelHidden(true);
    }
  }, [result]);

  const handelReplay = () => {
    setResult('neutral');
  };

  const nextLevel = () => {
    if (lives < 1) {
      router.push('/loosegame');
    } else if (currLevel == 7) {
      router.push('/wingame');
    } else {
      setShowAnswer(false);
      setCurrLevel(currLevel + 1);
      setResult('neutral');
    }
  };

  return (
    <Form
      id='flip-card-container'
      className={`card border-lg relative flex w-4/5 lg:w-7/12 ${flipped ? 'flipped' : ''}`}
    >
      <div
        id='front-face'
        className={`back-face-hidden absolute flex h-full w-full flex-col justify-between overflow-scroll scroll-smooth px-6 py-6 md:px-12 md:py-8 ${levelHidden ? 'hidden' : ''}`}
      >
        {children}
      </div>
      <div
        id='back-face'
        className='flipped back-face-hidden absolute top-0 h-full w-full text-center'
      >
        {result === 'correct' ? (
          <CorrectAnswer level={currLevel} nextLevel={nextLevel} />
        ) : (
          <div className='h-full'>
            {result === 'wrong' ? (
              <div id='answer-wrong' className='flex h-full flex-col'>
                <div className={showAnswer ? 'hidden' : 'h-full'}>
                  <WrongAnswer
                    level={currLevel}
                    handelReplay={handelReplay}
                    setShowAnswer={setShowAnswer}
                  />
                </div>
                <div className={showAnswer ? 'h-full' : 'hidden'}>
                  <Answer level={currLevel} nextLevel={nextLevel} />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </Form>
  );
};

export default FlipCard;
