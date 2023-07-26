import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface State {
  count: number;
}

interface Action {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  increment: any;
}

export const useZustandStore = create<State & Action>()(
  immer((set) => ({
    count: 0,
    increment: () =>
      set((store) => {
        store.count += 1;
      }),
  }))
);

//! if you want to save the state when refresh use persist

export const useZustandStoreStorage = create<State & Action>()(
  persist(
    immer((set) => ({
      count: 0,
      increment: () =>
        set((store) => {
          store.count += 1;
        }),
    })),
    {
      name: "countStorage",
    }
  )
);
