import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { safaris, Safari } from '../data/safaris';
import { Clock, DollarSign, ArrowRight, Filter } from 'lucide-react';

export function Safaris() {
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [selectedBudget, setSelectedBudget] = useState<string>('all');
  const [selectedExperience, setSelectedExperience] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredSafaris = safaris.filter((safari) => {
    if (selectedCountry !== 'all' && safari.country !== selectedCountry) return false;
    if (selectedBudget !== 'all' && safari.category !== selectedBudget) return false;
    if (selectedExperience !== 'all' && safari.experience !== selectedExperience) return false;
    return true;
  });

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] bg-gradient-to-r from-[var(--safari-brown-dark)] to-[var(--safari-brown)]">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1738508041350-03453c14811c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjBqZWVwJTIwYWZyaWNhfGVufDF8fHx8MTc3MjM1MDA5OXww&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Our Safari Packages
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Choose from our carefully curated safari experiences across East Africa
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Filters and Safaris */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filter Toggle (Mobile) */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-center gap-2 bg-[var(--safari-cream)] px-6 py-3 rounded-lg font-semibold text-[var(--safari-brown-dark)]"
            >
              <Filter className="w-5 h-5" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-[var(--safari-cream)] p-6 rounded-xl sticky top-24">
                <h3 className="text-xl font-bold text-[var(--safari-brown-dark)] mb-6">
                  Filter Safaris
                </h3>

                {/* Country Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    By Country
                  </label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--safari-gold)]"
                  >
                    <option value="all">All Countries</option>
                    <option value="kenya">🇰🇪 Kenya</option>
                    <option value="tanzania">🇹🇿 Tanzania</option>
                    <option value="rwanda">🇷🇼 Rwanda</option>
                    <option value="uganda">🇺🇬 Uganda</option>
                  </select>
                </div>

                {/* Budget Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    By Budget
                  </label>
                  <select
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--safari-gold)]"
                  >
                    <option value="all">All Budgets</option>
                    <option value="budget">Budget</option>
                    <option value="mid-range">Mid-Range</option>
                    <option value="luxury">Luxury</option>
                  </select>
                </div>

                {/* Experience Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    By Experience
                  </label>
                  <select
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--safari-gold)]"
                  >
                    <option value="all">All Experiences</option>
                    <option value="honeymoon">Honeymoon</option>
                    <option value="family">Family</option>
                    <option value="adventure">Adventure</option>
                    <option value="wildlife">Wildlife</option>
                  </select>
                </div>

                {/* Clear Filters */}
                {(selectedCountry !== 'all' || selectedBudget !== 'all' || selectedExperience !== 'all') && (
                  <button
                    onClick={() => {
                      setSelectedCountry('all');
                      setSelectedBudget('all');
                      setSelectedExperience('all');
                    }}
                    className="w-full bg-white text-[var(--safari-brown-dark)] px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>

            {/* Safari Grid */}
            <div className="flex-1">
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing <span className="font-bold text-[var(--safari-gold)]">{filteredSafaris.length}</span> safari{filteredSafaris.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredSafaris.map((safari, index) => (
                  <motion.div
                    key={safari.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                  >
                    <Link
                      to={`/safari/${safari.id}`}
                      className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <img
                          src={safari.image}
                          alt={safari.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                          <span className="bg-[var(--safari-gold)] text-white px-3 py-1 rounded-full text-xs font-semibold">
                            {safari.category}
                          </span>
                          <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                            {safari.country}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[var(--safari-brown-dark)] mb-2 group-hover:text-[var(--safari-gold)] transition-colors">
                          {safari.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                          {safari.description}
                        </p>
                        
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                          <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{safari.duration}</span>
                          </div>
                          <div className="flex items-center gap-1 text-[var(--safari-gold)] font-bold">
                            <DollarSign className="w-4 h-4" />
                            <span>From ${safari.price}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[var(--safari-gold)] group-hover:text-[var(--safari-orange)] transition-colors">
                          <span className="font-semibold text-sm">View Details</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {filteredSafaris.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4">No safaris match your selected filters.</p>
                  <button
                    onClick={() => {
                      setSelectedCountry('all');
                      setSelectedBudget('all');
                      setSelectedExperience('all');
                    }}
                    className="text-[var(--safari-gold)] hover:underline font-semibold"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
