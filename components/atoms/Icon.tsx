import React from 'react';
import {
  FlipProp,
  IconProp,
  RotateProp,
  SizeProp,
} from '@fortawesome/fontawesome-svg-core';
import {
  faHeart,
  faTrophy,
  faArrowRight,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IconProps {
  icon: string;
  size?: SizeProp;
  rotation?: RotateProp;
  flip?: FlipProp;
  className?: string;
  //more on: https://fontawesome.com/docs/web/use-with/react/style
}

const Icon = ({ icon, size = 'sm', rotation, flip, className }: IconProps) => {
  const iconClass = {
    //branches

    //regular

    //solid
    arrow: faArrowRight,
    heart: faHeart,
    trophy: faTrophy,
    decline: faX,
  };

  return (
    <FontAwesomeIcon
      icon={iconClass[icon as keyof IconProp]}
      size={size}
      rotation={rotation}
      flip={flip}
      className={className}
    />
  );
};

export default Icon;
