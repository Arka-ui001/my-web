import { Button } from "./ui/button"
import { Link } from "react-router-dom"

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-950 dark:to-indigo-950" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Your smart & personalized AI companion.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Empowering neurodivergent minds with smart, adaptive assistance -
            helping you focus, undertsand and navigate with ease.
          
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/browse">
              <Button size="lg" className="rounded-full">
                Get Started
              </Button>
            </Link>
            <Link to="/sell">
              <Button size="lg" variant="outline" className="rounded-full">
                Focus
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
