import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Leaf, Cpu, Zap, Camera, Sun, Fish, Sprout, Users, MessageCircle } from 'lucide-react';
import { SlideshowWithGrid } from './components/SlideshowWithGrid';

export default function GiltFarmsWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openBot = () => {
    window.open('https://gilt-assistance.zapier.app/?fbclid=IwY2xjawNqsVJleHRuA2FlbQIxMABicmlkETFhTDZ4MFo4Z2hNUXFPeU1nAR7d2kuhMjDTk0JKvSsBu8Sj2WfmVIS01Axbfl8g9i0cZKxDwJIamHtDOynLlQ_aem_5oqxNOsi63cwwMGsCIkZHg', '_blank', 'width=400,height=600,scrollbars=yes,resizable=yes');
  };

  const services = [
    { icon: Sun, title: "Solar & Inverters", desc: "Renewable energy solutions for homes and agriculture" },
    { icon: Zap, title: "Electrical Services", desc: "Installations, maintenance, designs, and repairs" },
    { icon: Cpu, title: "Electronics Solutions", desc: "Electronics repair, maintenance, and designs" },
    { icon: Camera, title: "CCTV Systems", desc: "Professional security camera installations" },
    { icon: Leaf, title: "Bio-Tech Solutions", desc: "Innovative biological technology applications" },
    { icon: Fish, title: "Catfish Farming", desc: "Commercial catfish production and management" },
    { icon: Users, title: "Feed & BSF Larvae", desc: "Livestock feed formulation and BSF production" },
    { icon: Sprout, title: "Crops & Palms", desc: "Seedlings, crops management, and palm cultivation" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Chat Button */}
      <button
        onClick={openBot}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-4 rounded-full shadow-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-110 group"
        title="Chat with Gilt Assistance Bot"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
          AI
        </span>
      </button>
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center">
              <img 
                src="/Untitled design.png" 
                alt="Gilt Tech Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
              />
              <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Gilt Farms And Tech</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-yellow-400 transition font-medium">Home</a>
              <a href="#about" className="text-gray-300 hover:text-yellow-400 transition font-medium">About</a>
              <a href="#services" className="text-gray-300 hover:text-yellow-400 transition font-medium">Services</a>
              <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition font-medium">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-yellow-400 rounded">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-yellow-400 rounded">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-yellow-400 rounded">Services</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-yellow-400 rounded">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Interactive Slideshow */}
      <section id="home" className="relative pt-14 sm:pt-16">
        <SlideshowWithGrid 
          logoImage="/Untitled design.png"
          autoPlay={true}
          interval={4000}
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Gilt Farms And Tech is divided into two broad sections: Agriculture and Technology. 
              We focus on transforming waste into wealth while providing lasting solutions for homes 
              and agriculture through innovative services and expert consultancy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border border-green-200 shadow-md">
              <div className="flex items-center mb-4">
                <Leaf className="h-10 w-10 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Agriculture Division</h3>
              </div>
              <p className="text-gray-700">
                Specializing in catfish farming, livestock feed formulation, BSF larvae production, 
                piggery, crops management, seedlings, palm cultivation, waste-to-value conversion, 
                and comprehensive agricultural consultancy services.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200 shadow-md">
              <div className="flex items-center mb-4">
                <Cpu className="h-10 w-10 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Technology Division</h3>
              </div>
              <p className="text-gray-700">
                Providing solar and inverter installations, electrical and electronics services, CCTV systems, 
                bio-tech solutions, programming and coding, electrical and electronics designs, maintenance, 
                repairs, and general contracting services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions for your agricultural and technical needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-yellow-500 hover:border-yellow-600">
                  <Icon className="h-12 w-12 text-yellow-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Additional Services</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Programming & Coding</h4>
                <p className="text-gray-600">Custom software development solutions</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Piggery Services</h4>
                <p className="text-gray-600">Professional pig farming management</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Consultancy</h4>
                <p className="text-gray-600">Expert agricultural and technical advice</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">General Contracts</h4>
                <p className="text-gray-600">Comprehensive contracting services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-300">
              Ready to transform your waste into wealth? Contact us today!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg border border-yellow-500 hover:border-yellow-400 transition cursor-pointer" onClick={() => window.open('tel:+2349061749057', '_self')}>
              <div className="flex items-center mb-4">
                <Phone className="h-8 w-8 mr-4 text-yellow-400" />
                <div>
                  <h3 className="font-semibold text-lg">Call Now</h3>
                  <p className="text-gray-300 hover:text-yellow-400 transition text-lg font-medium">
                    +234 906 174 9057
                  </p>
                  <p className="text-sm text-gray-400 mt-1">Tap to dial</p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg border border-yellow-500 hover:border-yellow-400 transition cursor-pointer" onClick={() => window.open('mailto:giltfarmstech@gmail.com', '_self')}>
              <div className="flex items-center mb-4">
                <Mail className="h-8 w-8 mr-4 text-yellow-400" />
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-gray-300 hover:text-yellow-400 transition break-all">
                    giltfarmstech@gmail.com
                  </p>
                  <p className="text-sm text-gray-400 mt-1">Tap to compose</p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg border border-yellow-500 hover:border-yellow-400 transition cursor-pointer" onClick={openBot}>
              <div className="flex items-center mb-4">
                <MessageCircle className="h-8 w-8 mr-4 text-yellow-400" />
                <div>
                  <h3 className="font-semibold text-lg">AI Assistant</h3>
                  <p className="text-gray-300 hover:text-yellow-400 transition">
                    Chat with our AI bot
                  </p>
                  <p className="text-sm text-gray-400 mt-1">Tap to chat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/Untitled design.png" 
              alt="Gilt Tech Logo" 
              className="h-8 w-8 object-contain mr-3"
            />
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Gilt Farms And Tech</span>
          </div>
          <p className="text-gray-400">
            Transforming Waste into Wealth | Providing Lasting Solutions for Homes and Agriculture
          </p>
          <p className="text-gray-500 mt-4">
            © 2025 Gilt Farms And Tech. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}