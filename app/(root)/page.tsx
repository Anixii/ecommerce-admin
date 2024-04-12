'use client'

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";
export default function Home() { 
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)  
  console.log(isOpen, 'page');
  useEffect(() =>{ 
    if(!isOpen){ 
      onOpen()
    }
  },[isOpen,onOpen])
  return (
    <>  
      <main className="p-4">
        
      </main>
    </>
  );
}
