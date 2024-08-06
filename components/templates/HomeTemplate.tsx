import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Heading';
import Icon from '@/components/atoms/Icon';
import CookieIcon from '@/components/atoms/CookieIcon';
import HomePageWrapper from '@/components/atoms/Wrapper/HomePageWrapper';

const HomeTemplate = () => {
  return (
    <HomePageWrapper>
      <CookieIcon className='mt-16 flex scale-50 justify-center md:mt-28 md:scale-100' />

      <Heading className='mx-6 w-4/5 items-center md:pt-6 lg:mt-40 lg:w-8/12' />
      <p className='mx-4 flex items-center text-center text-base text-zinc-100/70 md:text-lg lg:text-xl'>
        Will you be able to safe your data from Cookie Monster’s evil tricks?
      </p>

      <div className='flex justify-center'>
        <Button className='button-bounce absolute bottom-16 mt-12 text-2xl'>
          START
          <Icon icon='arrow' className='mx-2'></Icon>
        </Button>
      </div>
    </HomePageWrapper>
  );
};

export default HomeTemplate;
