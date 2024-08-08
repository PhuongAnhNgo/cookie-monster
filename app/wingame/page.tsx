'use client';
import EndGameTemplate from '@/components/templates/EndGameTemplate';
import Image from 'next/image';
import trophy from '@/public/images/Trophy.svg';
import star from '@/public/images/GoldStar.svg';
import Button from '@/components/atoms/Button';
import { useLevelContext } from '@/Context/LevelContext';
import { useRouter } from 'next/navigation';

export default function WinGame() {
  const { lives } = useLevelContext();
  const questionsRight = 7 - (3 - lives);
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };
  return (
    <EndGameTemplate>
      <Image src={trophy} alt='Trophy' className='rotate size-28 md:size-48' />

      <div id='threeStart' className='flex'>
        <Image
          src={star}
          alt='Golden Star'
          className='circle-rotate-scale mx-1 size-12 md:size-16'
        />
        <Image
          src={star}
          alt='Golden Star'
          className='circle-rotate-scale star2 mx-1 size-12 md:size-16'
        />
        <Image
          src={star}
          alt='Golden Star'
          className='circle-rotate-scale star3 mx-1 size-12 md:size-16'
        />
      </div>

      <p className='text-pink-600 my-8 text-2xl font-bold drop-shadow-lg md:text-5xl'>
        {questionsRight}/7 QUESTIONS RIGHT!
      </p>
      <p className='mx-4 md:mx-8'>
        Awesome! You have successfully recognized and avoided Cookie Monster's
        tricks.
        <br />
        Have you memorized all the definitions of the cookie monster's tricks?
        <br />
        Play again to master them.
      </p>

      <Button
        variant='default'
        shape='pill'
        className='button-bounce mt-12'
        onClick={handleClick}
      >
        Play Again
      </Button>
    </EndGameTemplate>
  );
}
