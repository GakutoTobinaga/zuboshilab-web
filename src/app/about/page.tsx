import WhatIsZl from '@/components/about/WhatIsZl'
import ContactZl from '@/components/about/ContactZl'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 p-4 md:p-8">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center text-black">We are zl.</h1>
      <div className="w-full max-w-4xl space-y-8">
        <WhatIsZl />
        <ContactZl />
      </div>
    </div>
  )
}

