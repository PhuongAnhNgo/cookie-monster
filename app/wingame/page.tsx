'use client';
import WinGameTemplate from '@/components/templates/WinGameTemplate';
import { useLevelContext } from '@/Context/LevelContext';
import { useRouter } from 'next/navigation';

export default function WinGame() {
  const { lives } = useLevelContext();

  const router = useRouter();
  const handleReplay = () => {
    router.push('/');
  };
  return <WinGameTemplate handleReplay={handleReplay} lives={lives} />;
}
