'use client';
import EndGameTemplate from '@/components/templates/EndGameTemplate';
import Button from '@/components/atoms/Button';
import { useRouter } from 'next/navigation';
import HumanCharacter from '@/components/atoms/HumanCharacter';

export default function LooseGame() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };
  return (
    <EndGameTemplate>
      <HumanCharacter character='wrong' />

      <div id='images2' className='flex'></div>

      <p className='text-pink-600 my-8 text-2xl font-bold drop-shadow-lg md:text-5xl'>
        K.O! <br />
        YOU HAVE BEEN DEFEATED
      </p>
      <p className='mx-4 md:mx-8'>
        Oh no! Cookie Monster has successfully tricked you!
        <br />
        Be careful with Cookie Monster's evil tricks!
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
