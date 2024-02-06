import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GameIdField {
    gameId: number | null;
    setGameId: (gameId: number) => void;
}

const useGameDataStore = create(
    persist<GameIdField>(
        (set) => ({
            gameId: null,
            setGameId: (gameId: number) => {
                set({ gameId: gameId });
            }
        }),
        {
            name: 'gameId',
        }
    )
);

export default useGameDataStore;
