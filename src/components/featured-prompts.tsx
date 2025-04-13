import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card"
/*import { Badge } from "./ui/badge"*/
import { StarIcon } from "lucide-react"

const featuredPrompts = [
  {
    id: 1,
    title: "Free",
    description:  `• Limited AI access (5 prompts/day)
    • Basic tools: text simplifier, summarizer, focus timer, TTS, and dyslexia-friendly mode
    • No screen reading or visual aids
    • No personalization or memory`,
    price: "(Wallet Connected)",
    /*category: "Creative Writing",*/
    rating: 4.8,
  },
  {
    id: 2,
    title: "Basic",
    description: `•	40 AI prompts/day
•	Access to visual aid (diagram explainer) and 3 screen reads/day
•	Audio-to-text: 30 mins/month
•	Personal theme/font preferences
•	Ideal for light users who need occasional help
`,
    price: "$15/month",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Pro",
    description: `•	100 AI prompts/day
•	15 screen reads/month + scheduled screen reads
•	Audio-to-text: 90 mins/month
•	AI-generated visual sketches: 50/month
•	Full personalization (AI tone, preferences, interaction history)
•	Ideal for students or professionals needing consistent support
`,
    price: "$25/month",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Premium",
    description: `•	100 AI prompts/day
•	Unlimited :  screen reads, audio help, sketches
•	Personalized AI memory and tone
•	Priority support + potential 1-on-1 help
•	Perfect for power users or those who rely heavily on accessibility tools
`,
    price: "$40/month",
    rating: 4.7,
  },
]

export function FeaturedPrompts() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Featured Prompts</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPrompts.map((prompt) => (
            <Card key={prompt.id} className="group relative overflow-hidden transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{prompt.title}</CardTitle></div>
                    </div>
              </CardHeader>
              <CardContent>
              <CardDescription className="mt-2">
  {prompt.description.split("•").map((line, index) => (
    line.trim() && (
      <div key={index} className="mb-1">
        • {line.trim()}
      </div>
    )
  ))}
</CardDescription>
                <div className="flex items-center gap-1 text-yellow-500">
                  <StarIcon className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium">{prompt.rating}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-bold">{prompt.price}</span>
                <Button>Buy Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
