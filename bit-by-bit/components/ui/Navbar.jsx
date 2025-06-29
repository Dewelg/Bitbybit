'use client'

import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useTheme, ThemeProvider } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  const { setTheme } = useTheme()

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <nav>
        {/* right-side links */}
        <div className="absolute top-3 right-20 p-4 flex items-center gap-x-2 text-primary-500">
          <Link href="/signIn" className="text-base hover:text-primary-600">Sign In</Link>
          <p className="text-sm">or</p>
          <Link href="/signUp" className="text-base hover:text-primary-600">Register</Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-5 w-5 dark:hidden" />
                <Moon className="h-5 w-5 hidden dark:block" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Avatar */}
        <div className="absolute top-3 right-10 p-4">
          <Avatar>
            <AvatarImage src="#" alt="avatar" />
            <AvatarFallback>PR</AvatarFallback>
          </Avatar>
        </div>

        {/* Navigation */}
        <NavigationMenu viewport={false} className="absolute top-3 left-10 p-4">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/home">
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="problems">
                <NavigationMenuTrigger>Problems</NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Topics</div>
                        <div className="text-muted-foreground">
                          Browse all learning topics.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">RoadMaps</div>
                        <div className="text-muted-foreground">
                          Full engineering learning roadmaps.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
              </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="about">
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="pricing">
                <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </ThemeProvider>
  )
}
