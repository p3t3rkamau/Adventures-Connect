
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'motion/react';
import Slider from 'react-slick';
import { loadSafaris } from '../data/loadSafaris';
import { 
  Clock, DollarSign, MapPin, Calendar, Users, 
  Check, X, Download, MessageCircle, Star, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { useEffect } from 'react';

export function SafariDetail() {
  const { id } = useParams();
   const [safaris, setSafaris] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'pricing'>('itinerary');
  const [season, setSeason] = useState<'lowSeason' | 'highSeason'>('lowSeason');
 


useEffect(() => {
  loadSafaris().then(setSafaris);
}, []);

  const safari = safaris.find(s => s.id === id);
  if (!safari) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Safari not found</h1>
          <Link to="/safaris" className="text-[var(--safari-gold)] hover:underline">
            Browse all safaris
          </Link>
        </div>
      </div>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="bg-white">
      {/* Image Gallery Slider */}
      <div className="relative h-[400px] md:h-[500px] bg-gray-900">
        <Slider {...sliderSettings}>
          {safari.gallery.map((image, index) => (
            <div key={index} className="h-[400px] md:h-[500px]">
              <img
                src={image}
                alt={`${safari.title} - ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[var(--safari-gold)] text-white px-3 py-1 rounded-full text-sm">
                    {safari.category}
                  </span>
                  <span className="bg-[var(--safari-cream)] text-gray-700 px-3 py-1 rounded-full text-sm">
                    {safari.experience}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[var(--safari-brown-dark)] mb-4">
                  {safari.title}
                </h1>
                <p className="text-lg text-gray-600 mb-6">{safari.description}</p>
                
                <div className="flex flex-wrap gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[var(--safari-gold)]" />
                    <span>{safari.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[var(--safari-gold)]" />
                    <span className="capitalize">{safari.country}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[var(--safari-gold)]" />
                    <span className="font-bold text-[var(--safari-gold)]">From ${safari.price}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-8 bg-[var(--safari-cream)] p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[var(--safari-brown-dark)] mb-4">
                  Safari Highlights
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {safari.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-[var(--safari-gold)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tabs */}
              <div className="mb-8">
                <div className="flex gap-4 border-b border-gray-200 mb-6">
                  <button
                    onClick={() => setActiveTab('itinerary')}
                    className={`pb-3 px-4 font-semibold transition-colors ${
                      activeTab === 'itinerary'
                        ? 'text-[var(--safari-gold)] border-b-2 border-[var(--safari-gold)]'
                        : 'text-gray-600 hover:text-[var(--safari-gold)]'
                    }`}
                  >
                    Detailed Itinerary
                  </button>
                  <button
                    onClick={() => setActiveTab('pricing')}
                    className={`pb-3 px-4 font-semibold transition-colors ${
                      activeTab === 'pricing'
                        ? 'text-[var(--safari-gold)] border-b-2 border-[var(--safari-gold)]'
                        : 'text-gray-600 hover:text-[var(--safari-gold)]'
                    }`}
                  >
                    Pricing
                  </button>
                </div>

                {/* Itinerary Tab */}
                {activeTab === 'itinerary' && (
                  <div className="space-y-6">
                    {safari.itinerary.map((day, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-[var(--safari-gold)] to-[var(--safari-orange)] rounded-full flex items-center justify-center text-white font-bold">
                            {day.day}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-[var(--safari-brown-dark)] mb-2">
                            {day.title}
                          </h4>
                          <p className="text-gray-600">{day.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Pricing Tab */}
                {activeTab === 'pricing' && (
                  <div>
                    <div className="flex gap-4 mb-6">
                      <button
                        onClick={() => setSeason('lowSeason')}
                        className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                          season === 'lowSeason'
                            ? 'bg-[var(--safari-gold)] text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        Low Season
                      </button>
                      <button
                        onClick={() => setSeason('highSeason')}
                        className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                          season === 'highSeason'
                            ? 'bg-[var(--safari-gold)] text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        High Season
                      </button>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-[var(--safari-cream)]">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold text-[var(--safari-brown-dark)]">
                              Group Size
                            </th>
                            <th className="px-4 py-3 text-right font-semibold text-[var(--safari-brown-dark)]">
                              Price per Person
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-4 text-gray-700">Solo Traveler</td>
                            <td className="px-4 py-4 text-right font-bold text-[var(--safari-gold)]">
                              ${safari.pricing[season].solo}
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-4 text-gray-700">2 Persons</td>
                            <td className="px-4 py-4 text-right font-bold text-[var(--safari-gold)]">
                              ${safari.pricing[season].twoPersons}
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-4 text-gray-700">Group (3+ persons)</td>
                            <td className="px-4 py-4 text-right font-bold text-[var(--safari-gold)]">
                              ${safari.pricing[season].group}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              {/* Included / Not Included */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {safari.included.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-green-800">
                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
                    <X className="w-5 h-5" />
                    What's Not Included
                  </h3>
                  <ul className="space-y-2">
                    {safari.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-red-800">
                        <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Accommodation */}
              <div className="mb-8 bg-[var(--safari-cream)] p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[var(--safari-brown-dark)] mb-4">
                  Accommodation Options
                </h3>
                <ul className="space-y-2">
                  {safari.accommodation.map((acc, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-[var(--safari-gold)] rounded-full"></div>
                      <span>{acc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Booking Form */}
              <div className="bg-[var(--safari-cream)] p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[var(--safari-brown-dark)] mb-4">
                  Book This Safari
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--safari-gold)]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--safari-gold)]"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Users className="w-4 h-4 inline mr-1" />
                      Number of Travelers
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--safari-gold)]">
                      <option>1 Person</option>
                      <option>2 Persons</option>
                      <option>3-5 Persons</option>
                      <option>6+ Persons</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--safari-gold)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--safari-gold)]"
                      placeholder="Any special requirements?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[var(--safari-gold)] to-[var(--safari-orange)] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Request Booking
                  </button>
                </form>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Inquiry
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-[var(--safari-brown-dark)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--safari-brown)] transition-colors">
                  <Download className="w-5 h-5" />
                  Download PDF Itinerary
                </button>
              </div>

              {/* Contact Info */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-[var(--safari-brown-dark)] mb-3">
                  Need Help?
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Our safari experts are here to help you plan the perfect adventure.
                </p>
                <div className="space-y-2 text-sm">
                  <a href="tel:+254714018914" className="block text-[var(--safari-gold)] hover:underline">
                    📞 +254 714 018 914
                  </a>
                  <a href="mailto:info@adventuresconnect.com" className="block text-[var(--safari-gold)] hover:underline">
                    ✉️ info@adventuresconnect.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all"
    >
      <ChevronRight size={24} />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all"
    >
      <ChevronLeft size={24} />
    </button>
  );
}
