'use client';
import React, { createContext, useContext, useState } from 'react';

export type resultType = 'neutral' | 'correct' | 'wrong';

type LevelContextProviderProps = {
  children: React.ReactNode;
};
type LevelContext = {
  currLevel: number; //Current level that player is playing
  setCurrLevel: React.Dispatch<React.SetStateAction<number>>;
  lives: number; //The number of failed levels => to calculate result and lives
  setLives: React.Dispatch<React.SetStateAction<number>>;
  result: resultType; //The result of each level.
  //Used to replace content and character in the game
  setResult: React.Dispatch<React.SetStateAction<resultType>>;
};
export const LevelContext = createContext<LevelContext | null>(null);

export default function LevelContextProvider({
  children,
}: LevelContextProviderProps) {
  const [currLevel, setCurrLevel] = useState(1);
  const [lives, setLives] = useState(3);
  const [result, setResult] = useState<resultType>('neutral');

  return (
    <LevelContext.Provider
      value={{
        currLevel,
        setCurrLevel,
        lives,
        setLives,
        result,
        setResult,
      }}
    >
      {children}
    </LevelContext.Provider>
  );
}

// Custom hook to use the context
export function useLevelContext() {
  const context = useContext(LevelContext);
  if (!context) {
    throw new Error(
      'useLevelContext can only be used within a LevelContextProvider'
    );
  }
  return context;
}
