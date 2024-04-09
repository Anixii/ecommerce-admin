import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>  
      <main className="p-4">
        <UserButton showName userProfileMode="modal"/> 
        okay
      </main>
    </>
  );
}
