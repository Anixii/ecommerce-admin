"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";
type ModalProps = {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  chidlren?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  description,
  isOpen,
  onClose,
  title,
  chidlren,
}) => {
  const onHandleChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <>
      <Dialog open={isOpen} onOpenChange={onHandleChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <section>{chidlren}</section>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modal;
