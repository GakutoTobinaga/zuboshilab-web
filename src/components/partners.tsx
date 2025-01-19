import { Card, CardContent } from '@/components/ui/card'

const partners = [
  { name: 'Coming Soon...', icon: '🏢' },
  { name: 'Coming Soon...', icon: '🌍' },
  { name: 'Coming Soon...', icon: '🔧' },
  { name: 'Coming Soon...', icon: '💡' },
]

export function Partners() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
        zl. Partners.
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {partners.map((partner, index) => (
          <Card key={index} className="hover-float">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="text-4xl mb-4">{partner.icon}</div>
              <h3 className="text-xl font-bold text-foreground">{partner.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

