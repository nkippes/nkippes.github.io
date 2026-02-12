import { ArrowRight, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

type Page = 'home' | 'projects' | 'cv' | 'publications' | 'contact';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen pt-16">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-12 lg:py-0">
          <div className="max-w-2xl">
            {/* Main Heading */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 mb-6 leading-tight">
              Néstor Kippes
            </h1>

            {/* Bio */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
              With expertise ranging from molecular genetics to large-scale field trials, 
              I focus on advancing agricultural science, developing improved crop varieties, 
              and fostering innovation that benefits both industry and academia.
            </p>

            {/* Preview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {/* Card 1 - Research Areas */}
              <div className="group cursor-pointer" onClick={() => onNavigate('projects')}>
                <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop"
                    alt="Crop research in field"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-xs font-medium mb-1">Explore</p>
                    <p className="text-white text-sm font-semibold">Research Areas</p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Publications */}
              <div className="group cursor-pointer" onClick={() => onNavigate('publications')}>
                <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop"
                    alt="Scientific research"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-xs font-medium mb-1">View</p>
                    <p className="text-white text-sm font-semibold">Publications</p>
                  </div>
                </div>
              </div>

              {/* Card 3 - CV */}
              <div className="group cursor-pointer" onClick={() => onNavigate('cv')}>
                <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=300&fit=crop"
                    alt="Professional experience"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-xs font-medium mb-1">View</p>
                    <p className="text-white text-sm font-semibold">Curriculum Vitae</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-4 rounded-full font-medium hover:bg-navy-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 mb-10"
            >
              Contact
              <ArrowRight size={18} />
            </button>

            {/* Social Links */}
            <div className="flex items-center gap-6 mb-12">
              <a
                href="https://twitter.com/nfkip"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-navy-900 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a>
              <a
                href="https://linkedin.com/in/nestorkippes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-navy-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://instagram.com/nescalius"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-navy-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="mailto:nfkippes@gmail.com"
                className="text-gray-400 hover:text-navy-900 transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-navy-200 pl-6">
              <p className="text-gray-500 italic text-lg leading-relaxed">
                "Everything I did helped me understand that Nature rules, and one can only understand how small one is before it."
              </p>
            </blockquote>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden lg:block lg:w-[45%] xl:w-[40%] relative">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop&crop=face"
              alt="Néstor Kippes"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
