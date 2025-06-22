import { create } from "zustand";

export const useTerminationReason = create((set) => ({
  terminationReason: {
    title: "",
    value: "",
  },
  updateTerminationReason: (title, value) =>
    set({ terminationReason: { title, value } }),
}));
