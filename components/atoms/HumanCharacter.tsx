import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import humanTalk from '../../public/images/HumanTalk.svg';
import humanHappy from '../../public/images/HumanHappy.svg';
import humanSad from '../../public/images/HumanSad.svg';
import { resultType } from '@/Context/LevelContext';

interface HumanCharacterProps extends React.HTMLAttributes<HTMLDivElement> {
  character: resultType;
}

const HumanCharacter = ({
  character,
  className,
  ...props
}: HumanCharacterProps) => {
  let chosenCharacter;

  switch (character) {
    case 'neutral':
      chosenCharacter = (
        <Image
          src={humanTalk}
          alt='Human'
          className='Character_spritesheet pixelart'
        />
      );
      break;
    case 'correct':
      chosenCharacter = (
        <Image
          src={humanHappy}
          alt='Human'
          className='Character_spritesheet pixelart'
        />
      );
      break;
    case 'wrong':
      chosenCharacter = (
        <Image
          src={humanSad}
          alt='Human'
          className='Character_spritesheet pixelart'
        />
      );
  }
  return (
    <div
      {...props}
      className={twMerge(`Character`, className ? className : '')}
    >
      {chosenCharacter}
    </div>
  );
};

export default HumanCharacter;
