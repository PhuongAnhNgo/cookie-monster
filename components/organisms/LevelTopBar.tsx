import { useLevelContext } from '@/Context/LevelContext';
import Icon from '../atoms/Icon';
import ProgressBar from '../molecules/ProgressBar';

interface LevelTopBarProps {
  progress: string;
  levelCompleted: number;
}

const LevelTopBar = ({ progress, levelCompleted }: LevelTopBarProps) => {
  const { lives } = useLevelContext();
  return (
    <div className='w-full px-8 pb-8 pt-6'>
      <ProgressBar
        className='float-start w-40 md:w-1/4'
        progress={progress}
        levelCompleted={levelCompleted}
      />

      <div id='lives' className='float-end flex text-pink-500'>
        {[...Array(lives)].map((_, index) => (
          <Icon key={index} icon='heart' size='2xl' className='px-1' />
        ))}
      </div>
    </div>
  );
};

export default LevelTopBar;
