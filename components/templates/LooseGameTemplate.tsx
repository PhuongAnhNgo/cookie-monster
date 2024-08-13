import React from 'react';
import Button from '@/components/atoms/Button';
import HumanCharacter from '@/components/atoms/HumanCharacter';
import LevelPageWrapper from '../atoms/Wrapper/LevelPageWrapper';

interface LooseGameTemplateProps {
  handleReplay: () => void;
}
const LooseGameTemplate = ({ handleReplay }: LooseGameTemplateProps) => {
  return (
    <div className='relative flex h-[calc(100dvh)] flex-col items-center overflow-hidden bg-gradient-to-b from-purple-300 to-blue'>
      <div className='z-10 mx-8 my-auto rounded-lg bg-zinc-800 px-8 py-12 text-center md:mx-24'>
        <div className='flex h-full flex-col items-center'>
          <HumanCharacter character='wrong' />

          <div id='images2' className='flex'></div>

          <p className='my-8 text-2xl font-bold text-pink-600 drop-shadow-lg md:text-5xl'>
            YOU HAVE BEEN DEFEATED!
          </p>
          <p className='mx-4 text-white md:mx-8'>
            Oh no! Cookie Monster has successfully tricked you!
            <br />
            Be careful with Cookie Monster&#39;s evil tricks!
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
    </div>
  );
};

export default LooseGameTemplate;
