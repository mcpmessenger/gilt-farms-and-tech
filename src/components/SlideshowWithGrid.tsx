import { useState, useEffect } from 'react';
import { InteractiveGrid } from '@/components/ui/interactive-grid';

// Import your slideshow images from public directory
const slideshowImages = [
  '/566530409_1806213193665168_5010211823697938187_n.jpg',
  '/566531350_1740698003305466_3028123340655100153_n.jpg',
  '/566533842_842873898165500_4698009778907393637_n.jpg',
  '/566535308_832427045812525_3550212025900718926_n.jpg',
  '/566535330_808120748742027_4427276418830373637_n.jpg',
  '/566551756_1788375535122988_4167523602080005380_n.jpg',
  '/566561138_681877611285295_4345714912121528275_n.jpg',
  '/566589853_804291512236704_2952191651132424125_n.jpg',
  '/566716813_809315561719365_5455921759466521062_n.jpg',
  '/567186461_1540512050419473_5742125589228300647_n.jpg',
  '/567247632_1200528335468604_8276928979958009588_n.jpg',
  '/567515158_4204597033085761_1537692297772406989_n.jpg',
  '/568183460_1137662641361026_6894300546680970185_n.jpg',
  '/568637144_833424772538569_2345325238634101667_n.jpg',
  '/569753917_835986292459522_2554137587588203368_n.jpg',
  '/569893966_1315250833178509_6678881632322381679_n.jpg',
];

interface SlideshowWithGridProps {
  logoImage?: string;
  autoPlay?: boolean;
  interval?: number;
}

export function SlideshowWithGrid({ 
  logoImage = '/Untitled design.png',
  autoPlay = true,
  interval = 5000 
}: SlideshowWithGridProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % slideshowImages.length
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % slideshowImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? slideshowImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Logo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('/${logoImage}')`,
          backgroundSize: '50%',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Slideshow Images */}
      <div className="absolute inset-0">
        <img
          src={slideshowImages[currentImageIndex]}
          alt={`Slideshow image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Interactive Grid Overlay */}
      <div className="absolute inset-0 z-10">
        <InteractiveGrid 
          dotDistance={40}
          dotRadius={1.5}
          minProximity={150}
          repaintAlpha={0.8}
        />
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-4">
        <button
          onClick={prevImage}
          className="bg-black bg-opacity-50 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-opacity-70 transition text-sm sm:text-base"
        >
          Previous
        </button>
        <button
          onClick={nextImage}
          className="bg-black bg-opacity-50 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-opacity-70 transition text-sm sm:text-base"
        >
          Next
        </button>
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white px-2 py-1 sm:px-3 sm:py-1 rounded text-sm sm:text-base">
        {currentImageIndex + 1} / {slideshowImages.length}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-30 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-2xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Gilt Farms And Tech
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 drop-shadow-2xl font-semibold">
            Transforming Waste into Wealth
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition shadow-xl border-2 border-yellow-300 text-sm sm:text-base">
              Our Services
            </button>
            <button className="bg-black bg-opacity-80 backdrop-blur-sm text-yellow-400 px-6 sm:px-8 py-3 rounded-lg font-semibold border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition shadow-xl text-sm sm:text-base">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
