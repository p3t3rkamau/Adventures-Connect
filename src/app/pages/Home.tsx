// src/pages/Home.tsx
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { HeroSlider } from '../components/HeroSlider'
import { motion } from 'motion/react'
import { loadDestinations } from '../data/loadDestinations'
import { Award, Users, Headphones, MapPin, Star, Quote } from 'lucide-react'
import { StatsBand } from '../components/StatsBand'
import PopularSafaris from '../components/FeaturedDestination'

const allDestinations = loadDestinations()

const faqs = [
  {
    question: 'What is the best time to visit for a safari?',
    answer: 'The best time depends on your destination and interests. For the Great Migration in Kenya and Tanzania, July to October is ideal. For gorilla trekking in Rwanda and Uganda, the dry seasons (June-September and December-February) are recommended. However, safaris are available year-round, each season offering unique experiences.'
  },
  {
    question: 'Do I need a visa to visit East Africa?',
    answer: 'Most visitors require a visa to enter Kenya, Tanzania, Rwanda, and Uganda. Many nationalities can obtain an e-visa online before travel or a visa on arrival. We recommend checking with the respective embassy or consulate for your specific country\'s requirements. We can provide guidance on visa applications.'
  },
  {
    question: 'What vaccinations do I need?',
    answer: 'Yellow fever vaccination is mandatory for most East African countries. Other recommended vaccinations include Hepatitis A and B, Typhoid, and Tetanus. Malaria prophylaxis is also recommended for most safari destinations. Please consult your doctor or travel clinic at least 6 weeks before your trip.'
  },
  {
    question: 'What should I pack for a safari?',
    answer: 'Pack lightweight, neutral-colored clothing (khaki, beige, olive), a hat, sunglasses, sunscreen, insect repellent, comfortable walking shoes, and a light jacket for early morning game drives. Don\'t forget your camera with extra batteries and memory cards! We\'ll send you a detailed packing list upon booking.'
  },
  {
    question: 'Are safaris safe?',
    answer: 'Yes, safaris are very safe when conducted by experienced guides and reputable operators like us. All our guides are trained professionals who prioritize your safety. We use well-maintained 4x4 vehicles and follow strict safety protocols during wildlife viewing.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 60+ days before departure receive a full refund minus a 10% administrative fee. Cancellations 30-59 days before receive a 50% refund. Cancellations less than 30 days before departure are non-refundable. We strongly recommend purchasing travel insurance to protect your investment.'
  }
];

const features = [
  {
    icon: Users,
    title: 'Experienced Guides',
    description: 'Professional guides with deep knowledge of East African wildlife and culture',
  },
  {
    icon: Award,
    title: 'Affordable Packages',
    description: 'Best value safaris tailored to fit your budget without compromising quality',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock assistance before, during, and after your safari',
  },
  {
    icon: MapPin,
    title: 'Custom Tours',
    description: 'Personalized itineraries designed to match your interests and schedule',
  },
]

const testimonials = [
  {
    name: 'Sarah & John Mitchell',
    location: 'United States',
    text: 'Our Masai Mara safari was absolutely incredible! The guides were knowledgeable, the accommodations were perfect, and we saw all the Big Five. Adventures Connect made our dream safari a reality!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    name: 'Emma Thompson',
    location: 'United Kingdom',
    text: 'The gorilla trekking in Rwanda was a once-in-a-lifetime experience. The entire trip was flawlessly organized, and the team went above and beyond to ensure we had an amazing time.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    name: 'Hans Weber',
    location: 'Germany',
    text: 'Professional, friendly, and reliable. Our Tanzania safari exceeded all expectations. The Serengeti is even more spectacular in person, and the Ngorongoro Crater was breathtaking!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
]

export function Home() {
  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Featured Destinations */}
      <section className="py-20 px-4 bg-[var(--safari-cream)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--safari-brown-dark)] mb-4">
              Featured Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the most spectacular wildlife destinations in East Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/destinations/${destination.id}`}
                  className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-[3/4] relative">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-4xl mb-2">{destination.flag}</div>
                      <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                      <p className="text-sm text-gray-200 mb-4 line-clamp-2">{destination.description}</p>
                      <span className="inline-block bg-gradient-to-r from-[var(--safari-gold)] to-[var(--safari-orange)] text-white px-6 py-2 rounded-full group-hover:shadow-lg transition-all duration-300 text-sm font-semibold">
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

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--safari-brown-dark)] mb-4">
              Why Choose Adventures Connect
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to providing exceptional safari experiences with unmatched service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--safari-gold)] to-[var(--safari-orange)] rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--safari-brown-dark)] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
        
                  <Accordion.Root type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Accordion.Item
                          value={`item-${index}`}
                          className="bg-white rounded-lg overflow-hidden shadow-md"
                        >
                          <Accordion.Header>
                            <Accordion.Trigger className="w-full px-6 py-4 text-left font-semibold text-[var(--safari-brown-dark)] hover:bg-gray-50 transition-colors flex items-center justify-between group">
                              <span>{faq.question}</span>
                              <ChevronDown className="w-5 h-5 text-[var(--safari-gold)] transition-transform group-data-[state=open]:rotate-180" />
                            </Accordion.Trigger>
                          </Accordion.Header>
                          <Accordion.Content className="px-6 py-4 text-gray-600 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                            {faq.answer}
                          </Accordion.Content>
                        </Accordion.Item>
                      </motion.div>
                    ))}
                  </Accordion.Root>
                </div>
              </section>
      </section>

      <section>
        <StatsBand />
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-[var(--safari-brown-dark)] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Read reviews from our satisfied clients who experienced the adventure of a lifetime
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
              >
                <Quote className="w-10 h-10 text-[var(--safari-gold)] mb-4" />
                <p className="text-gray-200 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.location}</div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--safari-gold)] text-[var(--safari-gold)]" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[var(--safari-gold)] to-[var(--safari-orange)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Your African Adventure?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let us create the perfect safari experience tailored just for you
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/safaris"
                className="bg-white text-[var(--safari-brown-dark)] px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Browse Safaris
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[var(--safari-brown-dark)] transition-all duration-300"
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