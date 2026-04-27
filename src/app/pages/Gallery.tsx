import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { X } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Alamaya%20of%20the%20KF9%20pride%20-%20NNP.JPG',
    category: 'wildlife',
    title: 'Masai Mara Wildlife'
  },
  {
    url: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Baby%20Elephant%20at%20Dalphine%20Sheldricks%20(2).JPG',
    category: 'wildlife',
    title: 'African Lion'
  },
  {
    url: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Black%20Winged%20Stilt%20(2).JPG',
    category: 'landscapes',
    title: 'Serengeti Sunset'
  },
  {
    url: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Burchells%20or%20Common%20zebra.JPG',
    category: 'wildlife',
    title: 'African Elephant'
  },
  {
    url: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Common%20Sandpiper.JPG',
    category: 'wildlife',
    title: 'Zebra Safari'
  },
  {
    url: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Egyptian%20gesse%201.JPG',
    category: 'wildlife',
    title: 'Giraffe at Sunset'
  },
  {
    url: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Eland.JPG',
    category: 'landscapes',
    title: 'Kenya Landscape'
  },
  {
    url: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Female%20Ostrich.JPG',
    category: 'tourists',
    title: 'Safari Experience'
  },
  {
    url: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Kemboi%20at%20NNP%203.JPG',
    category: 'wildlife',
    title: 'Tanzania Wildlife'
  },
  {
    url: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Yellow%20Necked%20Spurfowl%202.JPG',
    category: 'Birds',
    title: 'Yellow Necked Spurfowl'
  },
  {
    url: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Kemboi%20at%20NNP%203.JPG',
    category: 'landscapes',
    title: 'Lake Elementaita'
  },
  {
    url: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Male%20Impala.JPG',
    category: 'wildlife',
    title: 'Male Impala'
  },
  {
    url: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Male%20White%20Rhino1.JPG',
    category: 'wildlife',
    title: 'Male White Rhino'
  },
  {
    url: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Giraffe%205.JPG',
    category: 'wildlife',
    title: 'Giraffe'
  },
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'wildlife', name: 'Wildlife' },
    { id: 'landscapes', name: 'Landscapes' },
    { id: 'tourists', name: 'Safari Experience' },
    { id: 'cultural', name: 'Cultural Visits' },
    { id: 'birds', name: 'Birds' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] bg-gradient-to-r from-[var(--safari-brown-dark)] to-[var(--safari-brown)]">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url(https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Male%20White%20Rhino1.JPG)',
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
                Safari Gallery
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Explore stunning moments captured on our safari adventures
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[var(--safari-gold)] to-[var(--safari-orange)] text-white shadow-lg'
                    : 'bg-[var(--safari-cream)] text-gray-700 hover:bg-[var(--safari-gold)] hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Masonry Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Masonry columnsCount={3} gutter="1rem">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="cursor-pointer group relative overflow-hidden rounded-lg"
                  onClick={() => setLightboxImage(index)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-auto block group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-bold text-lg">{image.title}</h3>
                      <p className="text-sm text-gray-300 capitalize">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[var(--safari-gold)] transition-colors"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={filteredImages[lightboxImage].url}
              alt={filteredImages[lightboxImage].title}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <h3 className="text-xl font-bold mb-1">{filteredImages[lightboxImage].title}</h3>
              <p className="text-sm text-gray-300 capitalize">{filteredImages[lightboxImage].category}</p>
              <p className="text-sm text-gray-400 mt-2">
                {lightboxImage + 1} / {filteredImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
