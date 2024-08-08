'use client';
import React, { useState, useEffect } from 'react';
import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Typography/Heading';
import RuleSet from '@/components/molecules/RuleSet';
import Form from '@/components/atoms/Form';
import { useRouter } from 'next/navigation';

const GameRulesBox = () => {
  //Disable button in the first 3 second so that users read the rules first
  const [buttonDisabled, setButtonDisable] = useState(true);
  const router = useRouter();
  const handleClick = () => {
    router.push('/level');
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonDisable(false);
    }, 1500);
  });

  return (
    <Form className='w-4/5 p-8 text-center sm:w-3/5 md:p-10 md:text-left'>
      <Heading level='2' className='mb-2 text-center'>
        HOW TO PLAY
      </Heading>
      <RuleSet
        imgSrc='/images/Cookie-ava.svg'
        rule='Evil Cookie will use every tricks to lure you accept sharing data and signing up for everything.'
      />
      <RuleSet
        imgSrc='/images/Human-ava.svg'
        rule={`Do not accept to anything!\nRead all pop-ups carefully and opt out from cookies and services.`}
      />
      <RuleSet
        imgSrc='/images/Hearts-ava.svg'
        rule='You have 3 lives in total. Every wrong answer will cost you a live.'
      />
      <div className='flex justify-center pt-4'>
        <Button
          className={buttonDisabled ? 'cursor-not-allowed opacity-50' : ''}
          disabled={buttonDisabled}
          onClick={handleClick}
        >
          START
        </Button>
      </div>
    </Form>
  );
};

export default GameRulesBox;
