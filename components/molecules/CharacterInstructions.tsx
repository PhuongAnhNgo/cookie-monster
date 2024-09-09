import HumanCharacter from '../atoms/HumanCharacter';
import SpeechBubble from '../atoms/SpeechBuble';
import { resultType } from '@/Context/LevelContext';

/*  The character and it's instruction at the bottom left of the screen */

interface CharacterIntructionsProps {
  instructions: String;
  character: resultType;
}

const CharacterIntructions = ({
  character,
  instructions,
}: CharacterIntructionsProps) => {
  return (
    <div
      id='human-talk'
      className='absolute -bottom-32 h-fit scale-90 md:-bottom-16 md:scale-100'
    >
      <SpeechBubble className='absolute top-14 ml-6 w-fit px-4 py-2'>
        <p className='text-reveal text-lg md:text-xl'>{instructions}</p>
      </SpeechBubble>
      <HumanCharacter className='scale-50' character={character} />
    </div>
  );
};

export default CharacterIntructions;
