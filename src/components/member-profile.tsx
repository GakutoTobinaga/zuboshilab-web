import Image from "next/image"
import { Twitter, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Member } from "@/types/member"

export function MemberProfile({ member }: { member: Member }) {
  return (
    <div className="flex flex-col items-center text-center mb-24">
      <div className="relative w-64 h-64 mb-8">
        <Image
          src={member.imageUrl || "/placeholder.svg"}
          alt={`${member.name}のプロフィール画像`}
          fill
          className="object-cover rounded-full"
        />
      </div>
      <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
      <p className="text-xl text-muted-foreground mb-4">{member.role}</p>
      <p className="text-lg max-w-2xl mb-6">{member.comment}</p>
      <div className="flex space-x-4">
        {member.socialLinks.twitter && (
          <Button variant="outline" size="icon" asChild>
            <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

