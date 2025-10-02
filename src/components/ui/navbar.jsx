'use client'
import { ModeToggle } from "../ModeToggle"
import { SettingsIcon, RegexIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Spinner } from "../spinner"
import { getLanguage, setLanguage } from "@/lib/language" // Yo HICE
import { useHidratationSolution } from "@/hooks/useHidratationSolution"
import { SidebarTrigger } from "./sidebar"
import { useRouter } from 'next/navigation'

function Navbar() {
    const router = useRouter()
    const isClient = useHidratationSolution()
    const language = isClient && getLanguage()

    const setLanguageToggle = (lang) => {
        setLanguage(lang);
        router.refresh()
    }
    
    return (
        <div className="flex gap-3 items-center mt-6 sm:gap-5">
            <SidebarTrigger />
            <div className="flex gap-2 items-center">
                <RegexIcon className="size-5" />
                <span className="font-semibold">Know Your Regex</span>
            </div>
            <hr className="h-6 border-r-3" />
            <div className="hidden sm:flex items-center gap-2">
                <ModeToggle />
                <Select onValueChange={(e) => setLanguageToggle(e)}>
                    <SelectTrigger className="w-auto">
                        <SelectValue placeholder={language ? language : 'ES'} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="ES">ES</SelectItem>
                        <SelectItem value="EN">EN</SelectItem>
                    </SelectContent>
                </Select>
                <hr className="h-6 border-r-3" />
                <span>v0.0.1</span>
            </div>
            <div className="flex sm:hidden items-center gap-2">
                <Select onValueChange={(e) => setLanguageToggle(e)}>
                    <SelectTrigger className="w-auto">
                        <SettingsIcon className="size-5" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="ES">ES</SelectItem>
                        <SelectItem value="EN">EN</SelectItem>
                        <hr className="my-2" />
                        <ModeToggle />
                        <hr className="my-2" />
                        <p className="text-center font-bold">v0.0.1</p>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}
export { Navbar }