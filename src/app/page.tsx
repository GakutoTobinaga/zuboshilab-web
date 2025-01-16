import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Products } from '@/components/products'
import { Partners } from '@/components/partners'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Partners />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  )
}

