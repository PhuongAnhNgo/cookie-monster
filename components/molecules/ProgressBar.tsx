/* The progressbar at the top left of the screen in the playing mode */

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  levelCompleted: number;
  progress: string;
}

const ProgressBar = ({
  levelCompleted,
  progress,
  className,
}: ProgressBarProps) => {
  return (
    <div className={className}>
      <p className='text-small pb-1 text-white/90 md:pb-2 md:text-lg'>
        {levelCompleted == 1 || levelCompleted == 0
          ? `Completed ${levelCompleted} level`
          : `Completed ${levelCompleted} levels`}
      </p>
      <div className='relative rounded-full bg-purple-800 text-center text-white/70'>
        <div
          className='rounded-full bg-pink-500 py-3 text-center text-xs font-medium leading-none text-white/70'
          style={{ width: progress }}
        ></div>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
          <p className='text-base md:text-lg'>{`${levelCompleted}/7`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
