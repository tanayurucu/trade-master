import { create } from "zustand";

type CreatePredictionModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export  const useCreatePredictionModal = create<CreatePredictionModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
