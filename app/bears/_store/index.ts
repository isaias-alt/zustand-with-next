import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface States {
  bears: number;
}

interface Actions {
  increase: () => void;
  decrease: () => void;
}

export const useBearStore = create(
  persist<States & Actions>(
    (set) => ({
      bears: 0,

      increase: () => set((state) => ({ bears: state.bears + 1 })),
      decrease: () => set((state) => ({ bears: state.bears - 1 })),
    }),
    {
      name: "bearStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
