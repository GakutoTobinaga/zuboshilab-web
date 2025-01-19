export function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold text-foreground mb-4">
              zuboshi lab.
            </div>
            <p className="text-muted-foreground">社会課題の「図星」を突こう。</p>
          </div>
          <div>
            <h3 className="text-foreground font-bold mb-4">所在地</h3>
            <p className="text-muted-foreground">
              〒600-8008
              <br />
              京都府京都市下京区四条通烏丸東入長刀鉾町２８
            </p>
          </div>
          <div>
            <h3 className="text-foreground font-bold mb-4">お問い合わせ</h3>
            <p className="text-muted-foreground">
              Email: contact@zuboshilab.com
              <br />
              Tel: 03-XXXX-XXXX
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2025 zuboshi lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

