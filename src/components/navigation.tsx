"use client"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Menu, Search, Wallet } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

export function Navigation() {
  const [isConnected, setIsConnected] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Hamburger for mobile */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/ab.png" alt="Logo" className="h-10 w-auto" />
            <span className="hidden font-bold sm:inline-block">NeuroAid</span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <nav className="grid gap-6 px-2 py-6">
                <Link to="/browse" className="hover:text-foreground/80">
                  Browse
                </Link>
                <Link to="/sell" className="hover:text-foreground/80">
                  Sell
                </Link>
                <Link to="/governance" className="hover:text-foreground/80">
                  Governance
                </Link>
                <Link to="/profile" className="hover:text-foreground/80">
                  Profile
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Nav links - hidden on small screens */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/browse" className="transition-colors hover:text-foreground/80 text-foreground">
            Simplify Screen
          </Link>
          <Link to="/sell" className="transition-colors hover:text-foreground/80 text-foreground">
            Prompt Buddy
          </Link>
          <Link to="/governance" className="transition-colors hover:text-foreground/80 text-foreground">
            Settings
          </Link>
          <Link to="/profile" className="transition-colors hover:text-foreground/80 text-foreground">
            Profile
          </Link>
        </div>

        {/* Search and Wallet/SignIn controls */}
        <div className="flex items-center space-x-2">
          <div className="relative hidden sm:block">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search keywords..." className="pl-8 md:w-[300px] lg:w-[400px]" />
          </div>
          <Button
            variant="ghost"
            className="sm:hidden"
          >
            <Search className="h-5 w-5 text-muted-foreground" />
          </Button>
          <Button variant="outline" className="hidden md:flex" onClick={() => setIsConnected(!isConnected)}>
            <Wallet className="mr-2 h-4 w-4" />
            {isConnected ? "0x1234...5678" : "Connect Wallet"}
          </Button>
          <Button variant="outline" className="hidden md:flex bg-black text-white hover:bg-gray-800">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  )
}
