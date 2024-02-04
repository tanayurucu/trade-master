"use client";

import { CreatePredictionModal } from "@/components/modals/create-prediction-modal";
import { EditPredictionModal } from "@/components/modals/edit-prediction-modal";
import { useEffect, useState } from "react";


export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <EditPredictionModal />
      <CreatePredictionModal />
    </>
  )
}