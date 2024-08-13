import React from 'react';
import WinGamePageWrapper from '../atoms/Wrapper/WinGamePageWrapper';
import Image from 'next/image';
import trophy from '@/public/images/Trophy.svg';
import GoldenStars from '@/components/molecules/GoldenStars';
import Button from '../atoms/Button';

interface WinGameTemplateProps {
  handleReplay: () => void;
  lives: number;
}

const WinGameTemplate = ({ handleReplay, lives }: WinGameTemplateProps) => {
  const questionsRight = 7 - (3 - lives);
  return (
    <WinGamePageWrapper>
      <div className='z-10 mx-8 my-auto rounded-lg bg-white px-8 py-12 text-center md:mx-24'>
        <div className='flex h-full flex-col items-center'>
          <Image
            src={trophy}
            alt='Trophy'
            className='rotate size-28 md:size-48'
          />

          <GoldenStars />

          <p className='my-8 text-2xl font-bold text-pink-600 drop-shadow-lg md:text-5xl'>
            {questionsRight}/7 QUESTIONS RIGHT!
          </p>
          <p className='mx-4 text-sm md:mx-8 md:text-base'>
            Awesome! You have successfully recognized and avoided Cookie
            Monster's tricks.
            <br />
            Have you memorized all the definitions of the cookie monster's
            tricks?
            <br />
            Play again to master them.
          </p>

          <Button
            variant='default'
            shape='pill'
            className='button-bounce mt-12'
            onClick={handleReplay}
          >
            Play Again
          </Button>
        </div>
      </div>
    </WinGamePageWrapper>
  );
};

export default WinGameTemplate;
