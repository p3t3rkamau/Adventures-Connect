export interface Safari {
  id: string
  title: string
  country: string
  duration: string
  price: number

  overview: string

  itinerary: string[]

  accommodation: string[]

  inclusions: string[]

  exclusions: string[]

  clothes?: string
  food?: string

  image: string
}