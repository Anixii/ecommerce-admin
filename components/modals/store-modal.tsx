"use client";
import React from "react";
import Modal from "../ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

const StoreModal = () => {
  const { isOpen, onClose, onOpen } = useStoreModal();
  return (
    <Modal
      title="Create a store"
      description="Add a new stotre to manage products and categories"
      isOpen={isOpen}
      onClose={onClose} 
      chidlren={'SOme'}
    >
    </Modal>
  );
};

export default StoreModal;
