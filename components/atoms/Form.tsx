import React from 'react';
import { twMerge } from 'tailwind-merge';

interface FormProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Form = ({ className, children, ...rest }: FormProps) => {
  return (
    <div
      {...rest}
      className={twMerge(
        `form-default border-black rounded border-4 bg-white`,

        className ? className : ''
      )}
    >
      {children}
    </div>
  );
};

export default Form;
