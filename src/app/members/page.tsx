import { MemberProfile } from "@/components/member-profile"
import type { Member } from "@/types/member"

const members: Member[] = [
  {
    id: "1",
    name: "Gakuto Tobinaga",
    role: "エンジニア",
    comment:
      "やあ",
    imageUrl: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      twitter: "https://twitter.com/yamada_taro",
      github: "https://github.com/yamada-taro",
    },
  },
  {
    id: "2",
    name: "佐藤花子",
    role: "UIデザイナー",
    comment:
      "美しさと使いやすさを両立したデザインを追求しています。ユーザーの心理を深く理解し、直感的で魅力的なインターフェースを作ることが私の使命です。デザインシステムの構築やアクセシビリティの向上にも力を入れており、誰もが使いやすいプロダクトづくりを目指しています。",
    imageUrl: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      twitter: "https://twitter.com/sato_hanako",
      linkedin: "https://linkedin.com/in/sato-hanako",
    },
  },
]

export default function MembersPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-16">zl. Members.</h1>
      {members.map((member) => (
        <MemberProfile key={member.id} member={member} />
      ))}
    </div>
  )
}
