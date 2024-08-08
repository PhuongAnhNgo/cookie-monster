import RulesPageWrapper from '@/components/atoms/Wrapper/RulesPageWrapper';
import GameRulesBox from '@/components/organisms/GameRulesBox';
import HumanCharacter from '../atoms/HumanCharacter';

const RulesTemplate = () => {
  return (
    <RulesPageWrapper>
      <div className='flex hidden h-full items-center rounded-lg bg-gradient-to-b from-yellow to-pink px-20 lg:mr-8 lg:flex'>
        <HumanCharacter character='correct' />
      </div>
      <GameRulesBox />
    </RulesPageWrapper>
  );
};

export default RulesTemplate;
