import { MemberProfile } from "@/components/member-profile"
import type { Member } from "@/types/member"

const members: Member[] = [
  {
    id: "1",
    name: "Gakuto Tobinaga",
    role: "エンジニア",
    comment:
      "やあ",
    imageUrl: "/profile/Gakuto.png",
    socialLinks: {
      twitter: "https://twitter.com/yamada_taro",
      github: "https://github.com/yamada-taro",
    },
  },
  {
    id: "2",
    name: "Yobe",
    role: "動画編集者/マーケティング",
    comment:
      "ういっす",
    imageUrl: "/profile/Oyobe.png",
    socialLinks: {
      twitter: "https://twitter.com/sato_hanako",
      linkedin: "https://linkedin.com/in/sato-hanako",
    },
  },
]

export default function MembersPage() {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100">
      <h1 className="text-4xl font-bold text-center mb-16 text-black dark:text-black">zl. Members.</h1>
      {members.map((member) => (
        <MemberProfile key={member.id} member={member} />
      ))}
    </div>
  )
}
