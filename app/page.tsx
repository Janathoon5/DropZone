import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Zap, Bell, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-purple-800/30 bg-black/20 backdrop-blur-sm">
        <Link href="/" className="flex items-center justify-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">DropZone</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#signup" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Sign Up
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 w-fit">
                    <Star className="w-3 h-3 mr-1" />
                    TCG News & Updates
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Stay Ahead in the{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      TCG World
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Get exclusive access to the latest trading card game releases, meta updates, and insider news. Join
                    thousands of players who trust DropZone for their TCG intelligence.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                    asChild
                  >
                    <Link href="#signup">
                      Get Notified <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>10,000+ subscribers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    <span>Weekly updates</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-30" />
                  <Image
                    src="/images/tcg-packs.png"
                    width="400"
                    height="400"
                    alt="Various TCG Booster Packs"
                    className="relative rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-black/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">Why Choose Dropzone</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Everything You Need to Stay Competitive
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From breaking news to meta analysis, we deliver the insights that matter most to serious TCG players.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Bell className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Instant Alerts</h3>
                  <p className="text-gray-300 text-center">
                    Be the first to know about new set releases, banlist updates, and tournament announcements.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Meta Analysis</h3>
                  <p className="text-gray-300 text-center">
                    Deep dives into deck strategies, card evaluations, and competitive meta shifts.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Community Insights</h3>
                  <p className="text-gray-300 text-center">
                    Exclusive interviews with pro players and insider perspectives from the TCG community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section id="signup" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 w-fit">
                  <Mail className="w-3 h-3 mr-1" />
                  Join the Community
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Never Miss a Drop
                </h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get notified instantly when we release new TCG information, exclusive previews, and breaking news.
                  Join over 10,000 players who rely on DropZone.
                </p>
                <div className="flex flex-col gap-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>Weekly newsletter with latest releases</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>Instant alerts for breaking news</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>Exclusive content and early access</span>
                  </div>
                </div>
              </div>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-white">
                        Name (Optional)
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                      size="lg"
                    >
                      Get Notified
                      <Mail className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-xs text-gray-400 text-center">
                      No spam, ever. Unsubscribe at any time.{" "}
                      <Link href="/privacy" className="underline underline-offset-2 hover:text-white">
                        Privacy Policy
                      </Link>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">Trusted by Players</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Join the Best TCG Community
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10K+</div>
                  <div className="text-sm text-gray-400">Active Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-400">TCG Games Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-400">News Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">99%</div>
                  <div className="text-sm text-gray-400">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-purple-800/30 bg-black/20">
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} DropZone. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/terms" className="text-xs text-gray-400 hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-xs text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/contact" className="text-xs text-gray-400 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
