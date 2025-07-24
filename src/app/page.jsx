import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ModeToggle";
import { ToggleSwitch } from "@/components/ui/toggle-switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Home() {
  return (
    <div className="flex flex-col h-screen my-auto items-center">
      <div className="flex gap-5 items-center mt-6">
        <div className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-regex"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5z" /><path d="M17 7.875l3 -1.687" /><path d="M17 7.875v3.375" /><path d="M17 7.875l-3 -1.687" /><path d="M17 7.875l3 1.688" /><path d="M17 4.5v3.375" /><path d="M17 7.875l-3 1.688" /></svg>
          <span className="font-semibold">Know Your Regex</span>
        </div>
        <hr className="h-6 border-r-1" />
        <ModeToggle />
        <span>v0.0.1</span>
        <Select>
          <SelectTrigger className="w-auto">
            <SelectValue placeholder="ES" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ES">ES</SelectItem>
            <SelectItem value="EN">EN</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col relative items-center h-screen justify-end mb-12">
        <ToggleSwitch />
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