import { useState } from "react";
import { MapPin, DollarSign, Clock, Search, ChevronDown, Star } from "lucide-react";
import DiscoverSection from "@/components/home/DiscoverSection";
import AdventureSection from "@/components/home/AdventureSection";
import PackagesSection from "@/components/home/PackagesSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import FAQSection from "@/components/home/FAQSection";
import ContactFormSection from "@/components/home/ContactFormSection";
import BlogSection from "@/components/home/BlogSection";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  const [activeTab, setActiveTab] = useState<"destinos" | "servicios">("destinos");
  return (
    <>
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - El usuario lo agregará después */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600">
        {/* Placeholder para el background que el usuario agregará */}
      </div>

      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido del Hero */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Columna izquierda - Contenido */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-black/40 backdrop-blur-sm rounded-lg mb-6 text-sm font-medium">
              Agencia de viajes en Miami, Florida
            </div>

            {/* Título principal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-montserrat leading-tight">
              Viaja a destinos increíbles ahora
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
              ¡Escápate con nuestros paquetes de viajes! Vuelos desde cualquier parte del mundo a destinos perfectos, desde playas hasta aventuras urbanas.
            </p>

            {/* Social Proof */}
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-white/90 text-sm">Nos recomiendan:</span>
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 backdrop-blur-sm"></div>
                  <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 backdrop-blur-sm"></div>
                  <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 backdrop-blur-sm"></div>
                  <a
                    href="https://www.google.com/maps/place/?q=HereYouTravel+Miami"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-500/50 border-2 border-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-gray-500/70 transition-colors cursor-pointer"
                    aria-label="Añadir reseña en Google Maps"
                  >
                    <span className="text-white text-xs font-bold">+</span>
                  </a>
                </div>
                <span className="text-white/90 text-sm ml-2">100+ Destinos turísticos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white/90 text-sm">(4,6) Reseñas positivas</span>
              </div>
            </div>
          </div>

          {/* Columna derecha - Formulario de búsqueda */}
          <div className="lg:pl-8">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
              <form className="space-y-4">
                {/* Campo Destinos */}
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select className="w-full pl-12 pr-10 py-4 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer hover:border-gray-300 transition-colors">
                  <option>Destinos</option>
                  <option>París, Francia</option>
                  <option>Tokio, Japón</option>
                  <option>Nueva York, USA</option>
                  <option>Barcelona, España</option>
                  <option>Bali, Indonesia</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              {/* Campo Precio */}
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select className="w-full pl-12 pr-10 py-4 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer hover:border-gray-300 transition-colors">
                  <option>$800 - $4,899</option>
                  <option>$500 - $1,000</option>
                  <option>$1,000 - $2,500</option>
                  <option>$2,500 - $5,000</option>
                  <option>$5,000+</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              {/* Campo Duración */}
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select className="w-full pl-12 pr-10 py-4 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer hover:border-gray-300 transition-colors">
                  <option>0 Days - 15 Days</option>
                  <option>1-3 Days</option>
                  <option>4-7 Days</option>
                  <option>8-15 Days</option>
                  <option>16+ Days</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              {/* Botón Buscar */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
              >
                <Search className="w-5 h-5" />
                Buscar
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Sección Descubre el mundo */}
    <DiscoverSection />
    
    {/* Sección Tu aventura comienza aquí */}
    <AdventureSection activeTab={activeTab} onTabChange={setActiveTab} />
    
    {/* Sección de Paquetes y Servicios */}
    <PackagesSection defaultTab={activeTab} onTabChange={setActiveTab} />
    
    {/* Sección de Beneficios */}
    <BenefitsSection />
    
    {/* Sección de Reseñas */}
    <ReviewsSection />
    
    {/* Sección de FAQs */}
    <FAQSection />
    
    {/* Sección de Formulario de Contacto */}
    <ContactFormSection />
    
    {/* Sección de Blog */}
    <BlogSection />
    
    {/* Sección CTA */}
    <CTASection />
    </>
  );
};

export default Home;
