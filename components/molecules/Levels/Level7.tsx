'use client';
import React, { useState } from 'react';

import { useLevelContext } from '@/Context/LevelContext';
import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Typography/Heading';

interface Level7Props extends React.HTMLAttributes<HTMLDivElement> {}

const Level7 = ({}: Level7Props) => {
  const { lives, setLives, setResult } = useLevelContext();
  const [pageIsShowed, setPageIsShowed] = useState({
    firstPage: true,
    secondPage: false,
    thirdPage: false,
  });

  const [checkboxChecked, setCheckboxChecked] = useState({
    checkBox1: true,
    checkBox2: true,
    checkBox3: true,
    checkBox4: true,
  });

  const openFirstPage = () => {
    setPageIsShowed({
      firstPage: true,
      secondPage: false,
      thirdPage: false,
    });
  };

  const openSecondPage = () => {
    setPageIsShowed({
      firstPage: false,
      secondPage: true,
      thirdPage: false,
    });
  };

  const openThirdPage = () => {
    setPageIsShowed({
      firstPage: false,
      secondPage: false,
      thirdPage: true,
    });
  };

  const handleChange = (event: any) => {
    const { name, checked } = event.target;

    setCheckboxChecked({
      ...checkboxChecked,
      [name]: checked,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const allUnChecked = Object.values(checkboxChecked).every(
      (value) => value === false
    );
    if (allUnChecked) {
      openThirdPage();
    } else {
      setResult('wrong');
      setLives(lives - 1);
      openFirstPage();
    }
  };

  return (
    <>
      <div
        id='fisrtPage'
        className={
          pageIsShowed.firstPage
            ? 'flex h-full flex-col justify-between'
            : 'flex hidden h-full flex-col justify-between'
        }
      >
        <div>
          <Heading level='2' className='pb-4'>
            Cookie Settings
          </Heading>
          <p className='text-base md:text-xl'>
            By clicking “Accept all”, you agree to the storing of cookies on
            your device to enhance our service.
          </p>
        </div>
        <div className='flex w-full justify-between pb-4'>
          <Button
            variant='neutralBlue'
            shape='rounded'
            onClick={() => {
              setResult('wrong');
              setLives(lives - 1);
            }}
          >
            Accept all
          </Button>
          <Button
            variant='neutralBlue'
            shape='rounded'
            onClick={openSecondPage}
          >
            Reject
          </Button>
        </div>
      </div>
      <div
        id='secondPage'
        className={
          pageIsShowed.secondPage
            ? 'flex h-full flex-col justify-around'
            : 'flex hidden h-full flex-col justify-between'
        }
      >
        <div>
          <Heading level='2' className='pb-4'>
            Preferences
          </Heading>
          <p className='text-base md:text-xl'>
            Uncheck the data you do not want to share.
          </p>

          <form onSubmit={handleSubmit} className='mt-4 flex flex-col'>
            <label>
              <input
                type='checkbox'
                name='checkBox1'
                checked={checkboxChecked.checkBox1}
                onChange={handleChange}
              />{' '}
              Strictly necessary
            </label>

            <label>
              <input
                type='checkbox'
                name='checkBox2'
                checked={checkboxChecked.checkBox2}
                onChange={handleChange}
              />{' '}
              Performance
            </label>

            <label>
              <input
                type='checkbox'
                name='checkBox3'
                checked={checkboxChecked.checkBox3}
                onChange={handleChange}
              />{' '}
              Targeting
            </label>

            <label>
              <input
                type='checkbox'
                name='checkBox4'
                checked={checkboxChecked.checkBox4}
                onChange={handleChange}
              />{' '}
              Functionality
            </label>
            <div className='flex w-full justify-between pt-8'>
              <Button variant='neutralBlue' shape='rounded' type='submit'>
                Save preferences
              </Button>
              <Button
                variant='neutralBlue'
                shape='rounded'
                onClick={() => {
                  setResult('wrong');
                  setLives(lives - 1);
                }}
              >
                Accept all
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div
        id='thirdPage'
        className={
          pageIsShowed.thirdPage
            ? 'flex h-full flex-col justify-between'
            : 'flex hidden h-full flex-col justify-between'
        }
      >
        <div>
          <Heading level='2' className='pb-4'>
            Are you sure?
          </Heading>
          <p className='text-base md:text-xl'>
            You might can not change the cookie settings after this. Are you
            sure with your choices?
          </p>
        </div>
        <div className='flex w-full justify-between pt-6'>
          <Button
            variant='neutralBlue'
            shape='rounded'
            onClick={openSecondPage}
          >
            Change my preferences
          </Button>
          <Button
            variant='neutralBlue'
            shape='rounded'
            onClick={() => setResult('correct')}
          >
            Yes, I am sure
          </Button>
        </div>
      </div>
    </>
  );
};

export default Level7;
