'use client'
import Link from 'next/link'
import { useState } from "react"
import { getLanguage } from '@/lib/language'
import { LANGUAGES } from '@/lib/consts'
import { saveRegex } from '@/lib/localstorage'
import { getRegex } from '@/lib/localstorage'
import { useHidratationSolution } from '@/hooks/useHidratationSolution'
import { Plus, Linkedin, Github, Globe, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarHeader,
  SidebarMenuButton,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"

export function AppSidebar({ ...props }) {
  const language = getLanguage();
  const isClient = useHidratationSolution();

  const savedRegex = isClient && getRegex();

  const [title, setTitle] = useState('');
  const [regex, setRegex] = useState('');
  const [error, setError] = useState('');

  const { SAVEREGEX_TITLE, SAVEREGEX_SUBTITLE, LABELINPUT_TITLE, PLACEHOLDERINPUT_TITLE, LABELINPUT_REGEX, PLACEHOLDERINPUT_REGEX, BUTTON_CANCEL, BUTTON_SAVE } = LANGUAGES[language].MODAL_ADDREGEX;

  const handleAddRegex = () => {
    const result = saveRegex(title, regex, language);

    if (result instanceof Error) setError(result.message);
    else setError(LANGUAGES[language].ALERT_MESSAGES.SUCCESS);

    setTitle('');
    setRegex('');

    console.log('Regex saved successfully.');
  };


  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex gap-2 mx-auto p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-regex"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5z" /><path d="M17 7.875l3 -1.687" /><path d="M17 7.875v3.375" /><path d="M17 7.875l-3 -1.687" /><path d="M17 7.875l3 1.688" /><path d="M17 4.5v3.375" /><path d="M17 7.875l-3 1.688" /></svg>
          <span className="font-semibold">Know Your Regex</span>
        </div>
      </SidebarHeader>
      <hr className="w-11/12 mx-auto" />
      <SidebarContent>
        <SidebarGroup className="relative flex w-full min-w-0 flex-row items-center justify-between p-2">
          <SidebarGroupLabel>{isClient && LANGUAGES[language].SIDEBAR.LABELTITLE}</SidebarGroupLabel>
          <SidebarGroupAction asChild>
            <Dialog>
              <DialogTrigger asChild className="hover:cursor-pointer">
                <Plus width={20} height={20} />
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{SAVEREGEX_TITLE}</DialogTitle>
                  <DialogDescription>
                    {SAVEREGEX_SUBTITLE}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="title-1">{LABELINPUT_TITLE}</Label>
                    <Input id="title-1" name="title" placeholder={PLACEHOLDERINPUT_TITLE} onChange={(e) => setTitle(e.target.value)} value={title} />
                    {error && <span className="text-red-500">{error}</span>}
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="regex-1">{LABELINPUT_REGEX}</Label>
                    <Input id="regex-1" name="regex" placeholder={PLACEHOLDERINPUT_REGEX} onChange={(e) => setRegex(e.target.value)} value={regex} />
                    {error && <span className="text-red-500">{error}</span>}
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">{BUTTON_CANCEL}</Button>
                  </DialogClose>
                  <Button type="submit" onClick={handleAddRegex}>{BUTTON_SAVE}</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </SidebarGroupAction>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {isClient && savedRegex.map((item) => (
                <Collapsible className="group/collapsible" key={item.title}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <div className="flex items-center justify-between gap-4 border-b border-sidebar-foreground/10 my-2 hover:rounded-sm hover:bg-sidebar-foreground/10">
                        <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                        <Button variant="ghost" size="icon" className="size-8">
                          <ChevronsUpDown />
                          <span className="sr-only">Toggle</span>
                        </Button>
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>{item.regex}</SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
              {savedRegex.length === 0 &&
                <div className='text-center'>
                  <span>{LANGUAGES[language].ALERT_MESSAGES.NO_REGEX_SAVED}</span>
                </div>
              }
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <hr className='w-11/12 mx-auto p-2' />
      <SidebarFooter className="mb-5">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex row gap-3 align-center justify-around">
              <Link href="https://benito-tridella-dolce.vercel.app/" target='_blank'>
                <Globe />
              </Link>
              <Link href={"https://www.linkedin.com/in/benito-tridella-dolce/"} target='_blank'>
                <Linkedin />
              </Link>
              <Link href={"https://github.com/Benit0Trdlla"} target='_blank'>
                <Github />
              </Link>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}