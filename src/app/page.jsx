import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <div className="flex flex-col h-screen my-auto items-center">
      <div className="flex gap-5 items-center mt-6 border-1">
        <div className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-regex"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5z" /><path d="M17 7.875l3 -1.687" /><path d="M17 7.875v3.375" /><path d="M17 7.875l-3 -1.687" /><path d="M17 7.875l3 1.688" /><path d="M17 4.5v3.375" /><path d="M17 7.875l-3 1.688" /></svg>
          <span className="font-semibold">Know Your Regex</span>
        </div>

        <ModeToggle />
      </div>

      <div className="flex flex-col relative items-center h-screen justify-end mb-12">
        <div className="flex w-full max-w-sm items-center gap-2">
          <Input type="text" placeholder="Consulta" />
          <Button type="submit" variant="outline">
            Consultar
          </Button>
        </div>
      </div>

    </div>
  );
}