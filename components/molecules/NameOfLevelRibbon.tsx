import Heading from '../atoms/Typography/Heading';

/* The ribbon consist of the name of the level in which the player is playing */
interface NameOfLevelRibbonProps {
  levelName: string;
}

const NameOfLevelRibbon = ({ levelName }: NameOfLevelRibbonProps) => {
  return (
    <div className='my-12 flex w-full -skew-y-2 justify-center bg-purple-500 py-3 text-white shadow-md shadow-zinc-600'>
      <Heading level='1'>{levelName}</Heading>
    </div>
  );
};

export default NameOfLevelRibbon;
