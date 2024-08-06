import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Monster',
  description: 'Cookie Monster Game Levels',
};

export default function LevelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
