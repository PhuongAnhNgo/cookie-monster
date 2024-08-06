import React from 'react';
import { twMerge } from 'tailwind-merge';
import Form from '@/components/atoms/Form';
import Heading from '../atoms/Typography/Heading';

interface LevelForm extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  children: React.ReactNode;
}

const LevelForm = ({ className, heading, children, ...rest }: LevelForm) => {
  //variants of button
  return (
    <Form className={twMerge(className ? className : '')} {...rest}>
      <Heading level='2'>{heading}</Heading>
      {children}
    </Form>
  );
};

export default LevelForm;
