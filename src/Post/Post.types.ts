
export interface IPost {
  id: number
  title: string
  content: string
  author: string
  createdAt: string
}

export type CreatePostData = Omit<IPost, 'id'>

export type UpdatePostData = Partial<Omit<IPost, 'id'>>