"use client"

import * as React from "react"
import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ToggleTheme() {

  const { theme, setTheme } = useTheme()

  return (

	<DropdownMenu>

		<DropdownMenuTrigger asChild>

			<Button variant="outline" size="icon">
				<SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
				<span className="sr-only">Toggle theme</span>
			</Button>

		</DropdownMenuTrigger>

		<DropdownMenuContent align="end" className="min-w-[7rem]" >

		<DropdownMenuItem 
			onClick={() => setTheme("light")} 
			className="flex gap-3 cursor-pointer" 
			disabled={ theme === 'light' } >
			<SunIcon size={18} /> Claro
		</DropdownMenuItem>

		<DropdownMenuItem 
			onClick={() => setTheme("dark")} 
			className="flex gap-3 cursor-pointer" 
			disabled={ theme === 'dark' }>
			<MoonIcon size={18} /> Escuro
		</DropdownMenuItem>

		<DropdownMenuItem 
			onClick={() => setTheme("system")} 
			className="flex gap-3 cursor-pointer" 
			disabled={ theme === 'system' } >
			<LaptopIcon size={18} /> Sistema
		</DropdownMenuItem>

		</DropdownMenuContent>

	</DropdownMenu>

  )
}
