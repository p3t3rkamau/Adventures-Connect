import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Alamaya%20of%20the%20KF9%20pride%20-%20NNP.JPG',
    title: 'Discover the Wild Masai Mara',
    tagline: 'Witness the greatest wildlife spectacle on Earth',
    destination: 'kenya'
  },
  {
    image: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Baby%20Elephant%20at%20Dalphine%20Sheldricks%20(2).JPG',
    title: 'Serengeti Sunset Safari',
    tagline: 'Experience the endless plains of Tanzania',
    destination: 'tanzania'
  },
  {
    image: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Black%20Winged%20Stilt%20(2).JPG',
    title: 'Rwanda Gorilla Trekking',
    tagline: 'An unforgettable encounter with mountain gorillas',
    destination: 'rwanda'
  },
  {
    image: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Burchells%20or%20Common%20zebra.JPG',
    title: 'Murchison Falls Uganda',
    tagline: 'Explore the Pearl of Africa\'s natural wonders',
    destination: 'uganda'
  },
  {
    image: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Common%20Sandpiper.JPG',
    title: 'Zanzibar Beach Escape',
    tagline: 'Relax on white sands and turquoise waters',
    destination: 'tanzania'
  },
  {
    image: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Egyptian%20gesse%201.JPG',
    title: 'Amboseli Elephant Paradise',
    tagline: 'Giant tuskers beneath Mount Kilimanjaro',
    destination: 'kenya'
  },
  {
    image: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Eland.JPG',
    title: 'Kruger Big Five Safari',
    tagline: 'Track Africa’s iconic wildlife up close',
    destination: 'south-africa'
  },
  {
    image: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Female%20Ostrich.JPG',
    title: 'Victoria Falls Adventure',
    tagline: 'Feel the power of the world’s greatest waterfall',
    destination: 'zimbabwe'
  },
  {
    image: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Sunset%20at%20lake%20elementaita.JPG',
    title: 'Okavango Delta Explorer',
    tagline: 'A water safari through Botswana’s wild heart',
    destination: 'botswana'
  },
  {
    image: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/African%20Spoonbill%204.JPG',
    title: 'Namibia Desert Dunes',
    tagline: 'Discover the surreal beauty of Sossusvlei',
    destination: 'namibia'
  },
  {
    image: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Giraffe%205.JPG',
    title: 'Lake Nakuru Flamingo Haven',
    tagline: 'A pink spectacle of birds and rhinos',
    destination: 'kenya'
  },
  {
    image: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/African%20Spoonbill%204.JPG',
    title: 'Uganda Gorilla Experience',
    tagline: 'Step into the jungle and meet gentle giants',
    destination: 'uganda'
  },
  {
    image: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Male%20Impala.JPG',
    title: 'Cape Town Coastal Escape',
    tagline: 'Mountains, oceans, and vibrant city life',
    destination: 'south-africa'
  },
  {
    image: 'https://ik.imagekit.io/6cga8hi9z/Adventures%20connect/Maasai%20Giraffe%201.JPG',
    title: 'Great Migration Safari',
    tagline: 'Witness millions of wildebeest on the move',
    destination: 'kenya'
  }
];

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
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
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
    >
      <ChevronLeft size={24} />
    </button>
  );
}

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
    appendDots: (dots: any) => (
      <div className="absolute bottom-8 w-full">
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <button className={`w-3 h-3 rounded-full transition-all ${
        i === currentSlide ? 'bg-[var(--safari-gold)] w-8' : 'bg-white/50'
      }`} />
    )
  };

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[500px] md:h-[600px] lg:h-[700px]">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>
            
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    {slide.tagline}
                  </p>
                  <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <Link
                      to="/safaris"
                      className="bg-gradient-to-r from-[var(--safari-gold)] to-[var(--safari-orange)] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      Explore Safaris
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-300"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .slick-dots li button:before {
          display: none;
        }
      `}</style>
    </div>
  );
}
