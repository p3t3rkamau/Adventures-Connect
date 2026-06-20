// src/pages/Home.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HeroSlider } from '../components/HeroSlider'
import { motion, AnimatePresence } from 'motion/react'
import { loadDestinations } from '../data/loadDestinations'
import { Award, Users, Headphones, MapPin, Star, Quote, Shield, Globe, BadgeCheck, Leaf, ChevronDown } from 'lucide-react'
import { StatsBand } from '../components/StatsBand'
import PopularSafaris from '../components/FeaturedDestination'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../components/ui/accordion'
import { SEOMeta } from '../components/SEOMeta'

const allDestinations = loadDestinations()

const faqs = [
  {
    question: 'What is included in the safari package?',
    answer: 'Our safari packages typically include accommodation on full or half board, professional driver guides, park entrance fees, game drives in exclusive safari vehicles, and relevant taxes. Specific inclusions are listed on each tour\'s detail page.'
  },
  {
    question: 'Is the price based on two people sharing?',
    answer: 'Yes. All our published prices are based on a minimum of 2 persons travelling together and sharing accommodation. Solo travellers should contact us for a custom quote.'
  },
  {
    question: 'Can I customize my safari itinerary?',
    answer: 'Absolutely. We specialize in tailor-made safaris. Whether you want to add extra parks, extend your beach stay, upgrade your lodge, or combine destinations, our team will craft the perfect itinerary for you.'
  },
  {
    question: 'Are airport transfers included?',
    answer: 'Most packages include airport transfers at the beginning and end of the tour. Some packages also include internal flights between destinations. Please check the individual tour inclusions for specifics.'
  },
  {
    question: 'When is the best time to travel?',
    answer: 'The best time depends on your destination. For the Great Migration in Kenya and Tanzania, July to October is ideal. Year-round safaris are available — each season offers unique wildlife sightings and landscapes. Contact us and we\'ll recommend the best time based on your interests.'
  },
  {
    question: 'Do you help with flights and accommodation outside the safari?',
    answer: 'Yes. We can assist with international and domestic flight bookings, pre-tour and post-tour hotel stays, visa guidance, travel insurance recommendations, and any other travel arrangements to make your trip seamless.'
  }
]

const features = [
  {
    icon: Users,
    title: 'Experienced Guides',
    description: 'Professional guides with deep knowledge of East African wildlife and culture',
  },
  {
    icon: Award,
    title: 'Best Value Packages',
    description: 'Premium safari experiences at competitive prices without compromising quality',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock assistance before, during, and after your safari adventure',
  },
  {
    icon: MapPin,
    title: 'Custom Itineraries',
    description: 'Personalized tours designed around your interests, budget, and travel dates',
  },
]

const categories = [
  { 
    label: 'Wildlife Safaris', 
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/d3/e4/7d/wildlife-kenya-safaris.jpg?w=1200&h=-1&s=1', 
    href: '/safaris?experience=wildlife' 
  },
  { 
    label: 'Beach Holidays', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJFvABJe84RDZNwlUr267BvTHg-FEqPz9Gw&s', 
    href: '/safaris?experience=beach' 
  },
  { 
    label: 'Honeymoon', 
    image: 'https://www.offthebeatenpathsafaris.com/wp-content/uploads/2024/07/honeymoon.jpg', 
    href: '/safaris?experience=honeymoon' 
  },
  { 
    label: 'Luxury Safaris', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYnufEaz2VHE--PRQbrGEaI2l6y1Fy-Yv7ew&s', 
    href: '/safaris?category=luxury' 
  },
  { 
    label: 'Family Safaris', 
    image: 'https://www.go2africa.com/wp-content/uploads/2024/09/Rekero-Camp-Family-Safari.jpg', 
    href: '/safaris?experience=family' 
  },
  { 
    label: 'Adventure Tours', 
    image: 'https://images.ctfassets.net/xt1eyv33iu7n/1PCUd9AsGSwXKzmZ8tX5vH/7a90b7dafa81a8f5fb1959e12e8a0c75/kenya-header.webp', 
    href: '/safaris?experience=adventure' 
  },
]

const trustItems = [
  { icon: BadgeCheck, label: 'Kenya Tourism Board', sub: 'Licensed Operator' },
  { icon: Globe, label: 'KATO Member', sub: 'Kenya Assoc. of Tour Operators' },
  { icon: Shield, label: 'Secure Payments', sub: 'SSL Protected Transactions' },
  { icon: Leaf, label: 'Eco Certified', sub: 'Sustainable Safari Practices' },
]

const testimonials = [
  {
    name: 'Sarah & John Mitchell',
    location: 'United States',
    text: 'Our Masai Mara safari was absolutely incredible! The guides were knowledgeable, the accommodations were perfect, and we saw all the Big Five. Adventures Connect made our dream safari a reality!',
    rating: 5,
    image: '',
  },
  {
    name: 'Emma Thompson',
    location: 'United Kingdom',
    text: 'The gorilla trekking in Rwanda was a once-in-a-lifetime experience. The entire trip was flawlessly organized, and the team went above and beyond to ensure we had an amazing time.',
    rating: 5,
    image: '',
  },
  {
    name: 'Hans Weber',
    location: 'Germany',
    text: 'Professional, friendly, and reliable. Our Tanzania safari exceeded all expectations. The Serengeti is even more spectacular in person, and the Ngorongoro Crater was breathtaking!',
    rating: 5,
    image: '',
  },
]

export function Home() {
  return (
    <div>
      <SEOMeta
        title="East Africa Safari Tours & Packages"
        description="Adventures Connect offers premium safari tours across Kenya, Tanzania, Uganda, Rwanda, Botswana, Zambia & Zimbabwe. Tailor-made wildlife safaris, beach holidays & cultural tours. Book your African adventure today."
      />
      {/* Hero Slider */}
      <HeroSlider />

      {/* Featured Destinations */}
      <section className="py-16 px-4 bg-[var(--safari-cream)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-sm uppercase tracking-widest text-[var(--safari-gold)] font-semibold mb-2">Where We Go</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--safari-brown-dark)] mb-3">
              Featured Destinations
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Explore the most spectacular wildlife destinations in East &amp; Southern Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {allDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  to={`/destinations/${destination.id}`}
                  className="group relative block overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[3/4] relative">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="text-2xl mb-1">{destination.flag}</div>
                      <h3 className="text-base font-bold leading-tight">{destination.name}</h3>
                      <span className="mt-2 inline-block bg-gradient-to-r from-[var(--safari-gold)] to-[var(--safari-orange)] text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Tours
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Safari Packages */}
      <PopularSafaris />

      {/* Safari Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-sm uppercase tracking-widest text-[var(--safari-gold)] font-semibold mb-2">Browse by Type</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--safari-brown-dark)] mb-3">
              Safari Experiences
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              From thrilling game drives to tranquil beach escapes — find the perfect safari style for you
            </p>
          </motion.div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible md:pb-0 scrollbar-hide">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex-shrink-0"
              >
                <Link
                  to={cat.href}
                  className="group flex flex-col items-center gap-3 text-center"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <img 
                      src={cat.image} 
                      alt={cat.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-semibold text-[var(--safari-brown-dark)] group-hover:text-[var(--safari-gold)] transition-colors leading-tight w-20">
                    {cat.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-[var(--safari-cream)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-sm uppercase tracking-widest text-[var(--safari-gold)] font-semibold mb-2">Our Promise</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--safari-brown-dark)] mb-3">
              Why Choose Adventures Connect
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We are committed to providing exceptional safari experiences with unmatched personal service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[var(--safari-gold)] to-[var(--safari-orange)] rounded-full mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[var(--safari-brown-dark)] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Certifications */}
      <section className="py-12 px-4 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs uppercase tracking-widest text-gray-400 font-semibold mb-8">
            Trusted, Licensed &amp; Certified
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center text-center gap-2 p-4 rounded-xl border border-gray-100 hover:border-[var(--safari-gold)]/30 hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--safari-cream)] flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[var(--safari-gold)]" />
                </div>
                <div>
                  <p className="font-bold text-sm text-[var(--safari-brown-dark)]">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section>
              {/* FAQ Section */}
              <section className="py-20 px-4 bg-[var(--safari-cream)]">
                <div className="max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--safari-brown-dark)] mb-4">
                      Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600">
                      Find answers to common questions about safari travel
                    </p>
                  </motion.div>
        
                  <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="bg-white rounded-lg overflow-hidden shadow-md"
                      >
                        <AccordionTrigger className="px-6 py-4 text-left font-semibold text-[var(--safari-brown-dark)]">
                          {faq.question}
                        </AccordionTrigger>

                        <AccordionContent className="px-6 py-4 text-gray-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </section>
      </section>

      <section>
        <StatsBand />
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-[var(--safari-brown-dark)] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-sm uppercase tracking-widest text-[var(--safari-gold)] font-semibold mb-2">Happy Travellers</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Guests Say</h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Real experiences from travellers who trusted us with their African adventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[var(--safari-gold)]/40 transition-colors"
              >
                <Quote className="w-8 h-8 text-[var(--safari-gold)] mb-4 opacity-80" />
                <p className="text-gray-200 mb-5 italic text-sm leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm truncate">{testimonial.name}</div>
                    <div className="text-xs text-gray-400">{testimonial.location}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[var(--safari-gold)] text-[var(--safari-gold)]" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[var(--safari-gold)] to-[var(--safari-orange)] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Ready for Your African Adventure?
            </h2>
            <p className="text-lg mb-7 text-white/90">
              Let us create the perfect safari experience tailored just for you
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/safaris"
                className="bg-white text-[var(--safari-brown-dark)] px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm"
              >
                Browse Safaris
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[var(--safari-brown-dark)] transition-all duration-300 text-sm"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function FaqItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full px-5 py-4 text-left font-semibold text-[var(--safari-brown-dark)] hover:bg-gray-50 transition-colors flex items-center justify-between gap-4 text-sm"
        aria-expanded={open}
      >
        <span>{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[var(--safari-gold)] flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
