'use client'
import Link from 'next/link'
import { Calendar, Home, Inbox, Search, Settings, Plus, Linkedin, Github, Globe, ChevronsUpDown } from "lucide-react"
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

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar({ ...props }) {
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
        <SidebarGroup>
          <SidebarGroupLabel >Tus regex</SidebarGroupLabel>
          <SidebarGroupAction title="Add Project">
            <Dialog>
              <DialogTrigger asChild className="hover:cursor-pointer">
                <Plus />
              </DialogTrigger>
              <form>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Guarda tu Regex</DialogTitle>
                    <DialogDescription>
                      Guarda aqui tu regex con su titulo para poder usarla en cualquier momento
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="title-1">Titulo</Label>
                      <Input id="title-1" name="title" placeholder="Titulo de tu regex" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="regex-1">Regex</Label>
                      <Input id="regex-1" name="regex" placeholder="^\d{2}-\d{2}-\d{4}$" />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancelar</Button>
                    </DialogClose>
                    <Button type="submit">Guardar</Button>
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
          </SidebarGroupAction>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <div className="flex items-center justify-between gap-4">
                      <SidebarGroupLabel>Titulo de tu regex</SidebarGroupLabel>
                      <Button variant="ghost" size="icon" className="size-8">
                        <ChevronsUpDown />
                        <span className="sr-only">Toggle</span>
                      </Button>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>Subitem 1</SidebarMenuSubItem>
                      <SidebarMenuSubItem>Subitem 2</SidebarMenuSubItem>
                      <SidebarMenuSubItem>Subitem 3</SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
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