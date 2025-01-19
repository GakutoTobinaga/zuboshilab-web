import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const products = [
  { name: 'IndieGamePicks', description: '開発中のプロジェクト', icon: '🎮' },
  { name: 'Coming Soon...', description: '開発中のプロジェクト', icon: '📝' },
  { name: 'Coming Soon...', description: '開発中のプロジェクト', icon: '👨‍💼' },
]

export function Products() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
        zl. Products.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card key={index} className="hover-float">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-4xl mr-2">{product.icon}</span>
                {product.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{product.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

