'use client'
import { ModeToggle } from "../ModeToggle"
import { SettingsIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Spinner } from "../spinner"
import { getLanguage, setLanguage } from "@/lib/language"
import { useHidratationSolution } from "@/hooks/useHidratationSolution"
import { SidebarTrigger } from "./sidebar"
import { useRouter } from 'next/navigation'

function Navbar() {
    const router = useRouter()
    const isClient = useHidratationSolution()
    const language = getLanguage()

    const setLanguageToggle = (lang) => {
        setLanguage(lang);
        router.refresh()
    }
    
    return (
        <div className="flex gap-3 items-center mt-6 sm:gap-5">
            <SidebarTrigger />
            <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-regex"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5z" /><path d="M17 7.875l3 -1.687" /><path d="M17 7.875v3.375" /><path d="M17 7.875l-3 -1.687" /><path d="M17 7.875l3 1.688" /><path d="M17 4.5v3.375" /><path d="M17 7.875l-3 1.688" /></svg>
                <span className="font-semibold">Know Your Regex</span>
            </div>
            <hr className="h-6 border-r-3" />
            <div className="hidden sm:flex items-center gap-2">
                <ModeToggle />
                <Select onValueChange={(e) => setLanguageToggle(e)}>
                    <SelectTrigger className="w-auto">
                        <SelectValue placeholder={isClient ? language : <Spinner />} />
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