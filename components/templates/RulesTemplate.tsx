import RulesPageWrapper from '@/components/atoms/Wrapper/RulesPageWrapper';
import HumanHappy from '@/components/atoms/HumanHappy';
import GameRulesBox from '@/components/organisms/GameRulesBox';

const RulesTemplate = () => {
  return (
    <RulesPageWrapper>
      <div className='flex hidden h-full items-center rounded-lg bg-gradient-to-b from-yellow to-pink px-20 lg:mr-8 lg:flex'>
        <HumanHappy />
      </div>
      <GameRulesBox />
    </RulesPageWrapper>
  );
};

export default RulesTemplate;
