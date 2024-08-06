import Confetti from 'react-confetti';
import React from 'react';

interface ConfettiProps {
  recycle?: boolean;
}

const Confett = ({ recycle = false }: ConfettiProps) => {
  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      recycle={recycle}
    />
  );
};

export default Confett;
