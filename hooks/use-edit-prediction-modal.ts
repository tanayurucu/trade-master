import { create } from "zustand";

type EditPredictionModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export  const useEditPredictionModal = create<EditPredictionModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
