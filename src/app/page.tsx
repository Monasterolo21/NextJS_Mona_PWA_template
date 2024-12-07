"use client";
import { ModeToggle } from "@/components/dark-mode-toggle";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  function showToast() {
    return () => {
      toast.success("I'll do 🙏🏻!");
    };
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <h1 className="text-5xl font-bold text-primary animate-in fade-in-50">
        Complete the todo!
      </h1>
      <p>Search for the TODO and complete it! 🚀</p>
      <Button variant={"default"} onClick={showToast()}>
        Click me!
      </Button>
      <ModeToggle />
    </div>
  );
}
