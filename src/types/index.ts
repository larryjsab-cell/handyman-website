export interface ContactSubmission {
  name: string
  email: string
  phone?: string
  message: string
}

export interface Project {
  id: string
  title: string
  description: string
  image_url?: string
  category: string
  display_order: number
  created_at: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}
