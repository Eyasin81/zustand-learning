import { create } from 'zustand'; // ES Modules পদ্ধতি

// Zustand স্টোর তৈরি করা
const useStore = create((set) => ({
  count: 0, // স্টোরের প্রাথমিক state
  increase: () => set((state) => ({ count: state.count + 1 })), // state পরিবর্তনের জন্য ফাংশন
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set((state) => ({ count: state.count=0 })),
}));

export default useStore;
