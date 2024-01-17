export {}

declare global {
  interface IBlog {
    id: number
    title: string
    description: string
    contents: IContent[]
    image: string
    type?: string

    href?: string
    date?: string
    datetime?: string
    category?: ICategory
    author?: IAuthor
  }
}
