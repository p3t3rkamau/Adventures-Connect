// safari.ts — Central type definition for all safari data

export interface PricingPeriod {
  id: string
  label: string          // e.g. "1 Jul – 30 Sep"
  startDate: string      // ISO date "YYYY-MM-DD"
  endDate: string
  pricePerPersonSharing: number
  currency: 'USD'
  minPersons: 2
}

export interface ItineraryDay {
  day: number
  title: string
  description: string
}

export interface TravelInfo {
  clothes?: string
  food?: string
}

export interface Safari {
  id: string
  title: string
  country: string
  duration: string

  /** Lowest price across all periods — used for sorting & "from" display */
  price: number

  description: string
  image: string
  gallery: string[]

  category: string        // e.g. "luxury", "midrange", "budget"
  experience: string      // e.g. "wildlife", "beach", "wildlife & beach"

  highlights: string[]
  itinerary: ItineraryDay[]

  included: string[]
  notIncluded: string[]

  /** New date-based pricing periods (preferred) */
  pricingPeriods?: PricingPeriod[]

  accommodation: string[]
  travelInfo?: TravelInfo
  note?: string
}
