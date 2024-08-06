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
  const router = useRouter();
  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    } else {
      setFlipped(!flipped);
    }
  }, [result]);

  const handelReplay = () => {
    setResult('neutral');
  };

  const nextLevel = () => {
    setResult('neutral');
    setShowAnswer(false);
    if (lives < 1) {
      router.push('/endgame');
    }
    if (currLevel == 3) {
      router.push('/endgame');
    }
    let timer = setTimeout(() => {
      setCurrLevel(currLevel + 1);
    }, 180);
    return () => clearTimeout(timer);
  };

  return (
    <Form
      id='flip-card-container'
      className={`card border-lg relative flex w-4/5 lg:w-7/12 ${flipped ? 'flipped' : ''}`}
    >
      <div
        id='front-face'
        className='back-face-hidden absolute flex h-full w-full flex-col justify-between overflow-scroll p-12'
      >
        {children}
      </div>
      <div
        id='back-face'
        className='rotate back-face-hidden absolute top-0 h-full w-full text-center'
      >
        {result === 'correct' ? (
          <CorrectAnswer level={currLevel} nextLevel={nextLevel} />
        ) : (
          <div id='answer-wrong' className='flex h-full flex-col'>
            <div className={showAnswer ? 'hidden' : 'h-full'}>
              <WrongAnswer
                level={currLevel}
                handelReplay={handelReplay}
                setShowAnswer={setShowAnswer}
              />
            </div>
            <div className={showAnswer ? '' : 'hidden'}>
              <Answer level={currLevel} nextLevel={nextLevel} />
            </div>
          </div>
        )}
      </div>
    </Form>
  );
};

export default FlipCard;
