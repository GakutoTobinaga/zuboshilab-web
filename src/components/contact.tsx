'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
        Contact.
      </h2>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>お問い合わせ</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              name="name"
              placeholder="お名前"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="メールアドレス"
              value={formData.email}
              onChange={handleChange}
            />
            <Textarea
              name="message"
              placeholder="メッセージ"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
            <Button type="submit" className="w-full">
              送信する
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

