'use client';
import React, { useState } from 'react';
import { useLevelContext } from '@/Context/LevelContext';
import Heading from '@/components/atoms/Typography/Heading';
import Button from '@/components/atoms/Button';

interface Level2Props extends React.HTMLAttributes<HTMLDivElement> {}

const Level2 = ({}: Level2Props) => {
  const { lives, setLives, setResult } = useLevelContext();
  const [checkboxChecked, setCheckboxChecked] = useState({
    checkBox1: true,
    checkBox2: true,
    checkBox3: true,
    checkBox4: true,
    checkBox5: true,
  });

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
      setResult('correct');
    } else {
      setResult('wrong');
      setLives(lives - 1);
    }
  };

  return (
    <>
      <div className='overflow-scroll'>
        <Heading level='2' className='pb-4'>
          Consent to cookies& data processing
        </Heading>

        <p className='text-base md:text-lg'>
          We are using cookies and other tracking-technologies. Because we value
          your privacy, we are asking for your permission to use cookies and
          these technologies. By leaving checkboxes checked, you are agreeing to
          share corresponding data with us.
        </p>

        <div>
          <form onSubmit={handleSubmit} className='mt-2 flex flex-col'>
            <label>
              <input
                type='checkbox'
                name='checkBox1'
                checked={checkboxChecked.checkBox1}
                onChange={handleChange}
              />{' '}
              Geolocation Data
            </label>

            <label>
              <input
                type='checkbox'
                name='checkBox2'
                checked={checkboxChecked.checkBox2}
                onChange={handleChange}
              />{' '}
              Social Media Logins
            </label>

            <label>
              <input
                type='checkbox'
                name='checkBox3'
                checked={checkboxChecked.checkBox3}
                onChange={handleChange}
              />{' '}
              Device Characteristics
            </label>

            <label>
              <input
                type='checkbox'
                name='checkBox4'
                checked={checkboxChecked.checkBox4}
                onChange={handleChange}
              />{' '}
              Browser History
            </label>

            <label>
              <input
                type='checkbox'
                name='checkBox5'
                checked={checkboxChecked.checkBox5}
                onChange={handleChange}
              />{' '}
              IP-Adress
            </label>

            <Button
              variant='neutralGray'
              shape='rounded'
              type='submit'
              className='mt-2 self-end'
            >
              Save& Continue
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Level2;
