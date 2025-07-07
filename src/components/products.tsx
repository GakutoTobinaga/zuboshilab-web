import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const products = [
  { 
    name: '',
    description: '世界のインディーゲーム情報を最速でお届け\n\n海外の話題作から隠れた名作まで、世界のインディーゲーム情報を日本語で翻訳して配信。 最新ニュース、レビュー、開発者情報をいち早くお届けします。', 
    icon: 'minna-no-indie',
    url: 'https://minna-no-indie.com'
  },
  { name: 'rytr.ai', description: 'Coming soon...', icon: '📝' },
  { name: 'takireco', description: 'Coming soon...', icon: '👨‍💼' },
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
                {product.icon === 'minna-no-indie' ? (
                  <img 
                    src="/logo/minna_no_indie-logo-b.svg" 
                    alt="みんなのインディー" 
                    className="h-8 mr-2"
                  />
                ) : (
                  <span className="text-4xl mr-2">{product.icon}</span>
                )}
                {product.icon !== 'minna-no-indie' && product.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground whitespace-pre-line">{product.description}</p>
              {product.url && (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-6 bg-primary text-white text-center py-2 rounded transition-colors hover:bg-primary/80 font-bold"
                >
                  サイトを見る
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

