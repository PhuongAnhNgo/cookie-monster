import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'positiveGreen'
    | 'negativeRed'
    | 'neutralGray'
    | 'correctGreen'
    | 'neutralBlue';
  children: React.ReactNode;
  shape?: 'rounded' | 'pill';
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  className,
  variant = 'default',
  shape = 'pill',
  children,
  type = 'button',
  ...rest
}: ButtonProps) => {
  //variants of button
  const variantClass = {
    default: 'bg-gradient-to-r from-pink-500 to-yellow px-20 py-2 font-bold',
    positiveGreen: 'bg-green-400',
    negativeRed: 'bg-white ring-1 ring-red-400 text-red-400',
    neutralGray: 'bg-zinc-200',
    correctGreen: 'bg-green ',
    neutralBlue: 'bg-blue-300 text-white ',
  };
  //hover states
  const hoverBtn = {
    default: ' hover:text-white ',
    positiveGreen: 'hover:bg-zinc-600 hover:text-white',
    negativeRed: 'hover:bg-red-400 hover:text-white',
    neutralGray: 'hover:bg-zinc-600 hover:text-white',
    correctGreen: 'hover:bg-zinc-600 hover:text-white',
    neutralBlue: 'hover:bg-zinc-600 hover:text-white ',
  };

  //shape
  const shapeBtn = {
    rounded: 'rounded-lg px-4 md:px-8 py-0.5',
    pill: 'rounded-full ',
  };

  return (
    <button
      type={type}
      {...rest}
      className={twMerge(
        `justify-center gap-0.5 overflow-hidden text-sm font-medium transition md:text-base`,
        variantClass[variant],
        hoverBtn[variant],

        shapeBtn[shape],
        className ? className : ''
      )}
    >
      {children}
    </button>
  );
};

export default Button;
