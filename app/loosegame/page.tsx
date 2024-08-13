'use client';
import LooseGameTemplate from '@/components/templates/LooseGameTemplate';
import { useRouter } from 'next/navigation';

export default function LooseGame() {
  const router = useRouter();
  const handleReplay = () => {
    router.push('/');
  };
  return <LooseGameTemplate handleReplay={handleReplay} />;
}
