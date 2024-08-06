import React from 'react';
import Image from 'next/image';
import cookieIcon from '@/public/images/main-cookie-yes-no.svg';

interface CookieIconProps {
  className?: string;
}

const CookieIcon = ({ className }: CookieIconProps) => {
  return <Image src={cookieIcon} alt='Cookie' className={className} />;
};

export default CookieIcon;
