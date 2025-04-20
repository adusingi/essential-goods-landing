import { ShoppingBasket, RefreshCw, Package, Check, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <ShoppingBasket className="h-6 w-6 text-green-600" />
            <span className="text-lg font-bold">EssentialBaskets</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#why-us" className="text-sm font-medium hover:underline underline-offset-4">
              Why Choose Us
            </Link>
            <Link href="#baskets" className="text-sm font-medium hover:underline underline-offset-4">
              Sample Baskets
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
              FAQ
            </Link>
          </nav>
          <Button className="hidden md:inline-flex bg-green-600 hover:bg-green-700">Join Waitlist</Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-100 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-green-800">
                    Send food to your loved ones back home — in just a few clicks.
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    We're building a simple way for you to support your family with real food baskets delivered locally
                    in Rwanda. No cash transfers. Just peace of mind.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="email" placeholder="Enter your email" className="flex-1" />
                    <Button type="submit" className="bg-green-600 hover:bg-green-700">
                      Join Now
                    </Button>
                  </form>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                      🎉 Launching soon — be the first to try it!
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Xcfma6kPZ7P5blFEdKd6IFj5GeLuHp.png"
                  width={400}
                  height={300}
                  alt="Rwandan landscape with green hills and blue sky"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                  How it works
                </h2>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-3 md:gap-10">
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <ShoppingBasket className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">1. Pick a basket</h3>
                  <p className="text-gray-600">Choose a set of essentials (e.g. rice, oil, powdered milk).</p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <RefreshCw className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">2. Send it once or every month</h3>
                  <p className="text-gray-600">Send a one-time gift or start a monthly delivery. Your choice.</p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Package className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">3. We deliver locally</h3>
                  <p className="text-gray-600">Your loved one picks it up from a shop near them in Rwanda.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why People Love This */}
        <section id="why-us" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                  Why not just send cash? Because this is better.
                </h2>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-start space-y-3 rounded-lg border bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold">No cash misuse</h3>
                  <p className="text-sm text-gray-600 text-left">You choose the items.</p>
                </div>
                <div className="flex flex-col items-start space-y-3 rounded-lg border bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <Store className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold">Supports local shops</h3>
                  <p className="text-sm text-gray-600 text-left">Everything is sourced nearby in Rwanda.</p>
                </div>
                <div className="flex flex-col items-start space-y-3 rounded-lg border bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <div className="text-green-600 text-lg font-bold">🤝</div>
                  </div>
                  <h3 className="text-lg font-bold">Built for peace of mind</h3>
                  <p className="text-sm text-gray-600 text-left">You know exactly what they get.</p>
                </div>
                <div className="flex flex-col items-start space-y-3 rounded-lg border bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <div className="text-green-600 text-lg font-bold">🎯</div>
                  </div>
                  <h3 className="text-lg font-bold">Simple and fast</h3>
                  <p className="text-sm text-gray-600 text-left">Send in minutes, from your phone.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Baskets */}
        <section id="baskets" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                  Sample baskets
                </h2>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm relative overflow-hidden bg-transparent">
                  <div className="absolute inset-0 opacity-50">
                    <Image
                      src="/images/basket.png"
                      alt="Starter Basket Background"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative z-10 flex flex-col items-center space-y-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100/50">
                      <ShoppingBasket className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold">Starter Basket</h3>
                    <div className="text-3xl font-bold text-green-600">$15</div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>5kg rice</li>
                      <li>1L oil</li>
                      <li>400g powdered milk</li>
                    </ul>
                    <Button className="w-full bg-green-600/90 hover:bg-green-700" disabled>
                      Coming Soon
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4 rounded-lg border border-green-200 p-6 shadow-md relative overflow-hidden bg-transparent">
                  <div className="absolute inset-0 opacity-50">
                    <Image
                      src="/images/basket.png"
                      alt="Family Basket Background"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative z-10 flex flex-col items-center space-y-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-200/50">
                      <ShoppingBasket className="h-10 w-10 text-green-700" />
                    </div>
                    <h3 className="text-xl font-bold">Family Basket</h3>
                    <div className="text-3xl font-bold text-green-600">$30</div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>10kg rice</li>
                      <li>2L oil</li>
                      <li>Sugar</li>
                      <li>Tea</li>
                      <li>Powdered milk</li>
                    </ul>
                    <Button className="w-full bg-green-600/90 hover:bg-green-700" disabled>
                      Coming Soon
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm relative overflow-hidden bg-transparent">
                  <div className="absolute inset-0 opacity-50">
                    <Image
                      src="/images/basket.png"
                      alt="Custom Basket Background"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative z-10 flex flex-col items-center space-y-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100/50">
                      <ShoppingBasket className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold">Custom Basket</h3>
                    <div className="text-xl font-bold text-green-600">Coming Soon</div>
                    <p className="text-sm text-gray-600">
                      Choose your own combination of items to create a personalized basket.
                    </p>
                    <Button className="w-full bg-green-600/90 hover:bg-green-700" disabled>
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500">🛒 No payment yet — just early examples</p>
            </div>
          </div>
        </section>

        {/* Real Stories */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                  Real Stories
                </h2>
              </div>
              <div className="mx-auto max-w-3xl">
                <div className="rounded-lg bg-white p-8 shadow-md">
                  <p className="mb-4 text-lg italic text-gray-600">
                    "I live in Paris and send a basket every month to my mom in Kigali. She picks it up nearby — it's
                    easy and safe."
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 font-bold">D</span>
                    </div>
                    <div>
                      <p className="font-bold">Diane</p>
                      <p className="text-sm text-gray-500">Early tester</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="mx-auto grid max-w-3xl gap-6 py-8">
                <div className="rounded-lg border p-6 shadow-sm">
                  <h3 className="text-lg font-bold">Do I have to subscribe?</h3>
                  <p className="mt-2 text-gray-600">No! You can send just once or set up monthly delivery.</p>
                </div>
                <div className="rounded-lg border p-6 shadow-sm">
                  <h3 className="text-lg font-bold">How will my family get the basket?</h3>
                  <p className="mt-2 text-gray-600">
                    They'll get a code and pick it up from a nearby partner shop in Rwanda.
                  </p>
                </div>
                <div className="rounded-lg border p-6 shadow-sm">
                  <h3 className="text-lg font-bold">Can I choose what's inside?</h3>
                  <p className="mt-2 text-gray-600">
                    You can choose a pre-made basket, and custom baskets are coming soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                  Get early access and help shape the platform.
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  We're launching soon in Rwanda. Be the first to know — and get a chance to try it before anyone else.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex w-full max-w-sm items-center space-x-2">
                  <Input type="email" placeholder="Enter your email" className="flex-1" />
                  <Button type="submit" className="bg-green-600 hover:bg-green-700">
                    Join the Waitlist
                  </Button>
                </form>
                <p className="text-xs text-gray-500">We'll only email you when it's time to launch. No spam.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <ShoppingBasket className="h-5 w-5 text-green-600" />
            <p className="text-sm text-gray-500">© 2025 EssentialBaskets. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
