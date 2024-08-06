import Image from 'next/image';
import halfCircle from '@/public/images/bg-half-circle.svg';
import questionMark from '@/public/images/bg-question-icon.svg';
import cookie from '@/public/images/bg-cookie.svg';
import human from '@/public/images/bg-human.svg';

const BackgroundIcon = () => {
  return (
    <div>
      <Image
        src={halfCircle}
        alt='half circle pattern'
        className='absolute left-0 top-0 w-1/6'
      />

      <Image
        src={questionMark}
        alt='Cookie'
        className='absolute right-2 top-32 w-16 md:right-5 md:w-40 lg:right-12'
      />

      <Image
        src={cookie}
        alt='Cookie'
        className='absolute -right-4 bottom-52 w-32 md:w-40'
      />

      <Image
        src={human}
        alt='Crying human'
        className='absolute -left-8 bottom-40 w-36 md:w-48 lg:top-48'
      />
    </div>
  );
};

export default BackgroundIcon;
