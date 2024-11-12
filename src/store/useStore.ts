import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  coins: number;
  adsWatched: number;
  dailyStreak: number;
  lastLoginDate: string;
  referralCount: number;
  isAuthenticated: boolean;
  upiId: string | null;
  phoneNumber: string | null;
  email: string | null;
  username: string | null;
  currentGame: string | null;
  addCoins: (amount: number) => void;
  incrementAdsWatched: () => void;
  updateStreak: () => void;
  incrementReferrals: () => void;
  login: (data: { email?: string; phone?: string; username: string }) => void;
  logout: () => void;
  setUpiId: (id: string) => void;
  setCurrentGame: (gameId: string | null) => void;
}

export const useStore = create<UserState>()(
  persist(
    (set) => ({
      coins: 0,
      adsWatched: 0,
      dailyStreak: 0,
      lastLoginDate: new Date().toDateString(),
      referralCount: 0,
      isAuthenticated: false,
      upiId: null,
      phoneNumber: null,
      email: null,
      username: null,
      currentGame: null,
      addCoins: (amount) => set((state) => ({ coins: state.coins + amount })),
      incrementAdsWatched: () =>
        set((state) => {
          const newCount = state.adsWatched + 1;
          if (newCount % 10 === 0) {
            return {
              adsWatched: newCount,
              coins: state.coins + 100,
            };
          }
          return { adsWatched: newCount };
        }),
      updateStreak: () =>
        set((state) => {
          const today = new Date().toDateString();
          if (state.lastLoginDate !== today) {
            return {
              dailyStreak: state.dailyStreak + 1,
              lastLoginDate: today,
              coins: state.coins + (state.dailyStreak + 1) * 10,
            };
          }
          return state;
        }),
      incrementReferrals: () =>
        set((state) => ({
          referralCount: state.referralCount + 1,
          coins: state.coins + 50,
        })),
      login: (data) => set({ 
        isAuthenticated: true, 
        coins: 100,
        email: data.email || null,
        phoneNumber: data.phone || null,
        username: data.username
      }),
      logout: () => set({ 
        isAuthenticated: false,
        email: null,
        phoneNumber: null,
        username: null,
        currentGame: null
      }),
      setUpiId: (id) => set({ upiId: id }),
      setCurrentGame: (gameId) => set({ currentGame: gameId }),
    }),
    {
      name: 'user-storage',
    }
  )
);