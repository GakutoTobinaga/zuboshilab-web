export interface Member {
  id: string
  name: string
  role: string
  comment: string
  imageUrl: string
  socialLinks: {
    twitter?: string
    github?: string
    linkedin?: string
  }
}

