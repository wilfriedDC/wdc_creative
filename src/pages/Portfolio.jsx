import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const CATEGORIES = ['Tout', 'Sites Vitrine', 'Design Graphique', 'Applications Web', 'Montage Vidéo'];

const PROJECTS = [
  {
    title: 'Brand Identity',
    category: 'Design Graphique',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzM5NzY5NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: "Création complète d'identité visuelle pour une startup tech.",
  },
  {
    title: 'E-Commerce Platform',
    category: 'Applications Web',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1772037441147-5301691c4b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc3MzQwNjIxOXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Plateforme e-commerce moderne avec gestion complète.',
  },
  {
    title: 'Corporate Video',
    category: 'Montage Vidéo',
    year: '2026',
    image:
      'https://images.unsplash.com/photo-1627244714766-94dab62ed964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzczNDA4MjUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Production vidéo corporate pour une entreprise internationale.',
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Tout');

  const filteredProjects =
    activeCategory === 'Tout' ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        .font-display-wdc { font-family: 'Anton', sans-serif; }
        .font-mono-wdc { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      {/* Page header */}
      <section className="relative bg-[#0B1220] text-[#F5F3ED] px-6 lg:px-12 pt-40 pb-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,163,61,0.08),_transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="w-10 h-px bg-[#E8A33D]" />
            <span className="font-mono-wdc text-xs tracking-[0.3em] text-[#93A0B4] uppercase">
              Nos réalisations
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-display-wdc uppercase leading-[0.9] text-[13vw] sm:text-[7vw] lg:text-[4.6vw] mb-8"
          >
            Portfolio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="max-w-xl text-lg text-[#B7BEC9]"
          >
            Une sélection de projets menés pour nos clients — sites, identités visuelles,
            applications et vidéos, chacun pensé sur mesure.
          </motion.p>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="bg-white px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-14"
          >
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-mono-wdc text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-full border transition-colors ${
                  activeCategory === category
                    ? 'bg-[#0B1220] text-[#E8A33D] border-[#0B1220]'
                    : 'text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {filteredProjects.map((project, index) => (
                <motion.a
                  key={project.title}
                  href="#"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#0B1220]/0 group-hover:bg-[#0B1220]/20 transition-colors" />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight size={18} className="text-[#0B1220]" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-wdc text-xs tracking-[0.15em] uppercase text-[#E8A33D]">
                      {project.category}
                    </span>
                    <span className="font-mono-wdc text-xs text-gray-400">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </motion.a>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 border border-dashed border-gray-200 rounded-2xl">
              <p className="font-mono-wdc text-xs tracking-[0.15em] uppercase text-gray-400">
                Bientôt disponible dans cette catégorie
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 bg-[#0B1220]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Un projet en tête ?</h2>
            <p className="text-xl text-[#B7BEC9] mb-8">
              Parlons-en et voyons comment on peut le concrétiser ensemble.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-[#E8A33D] text-[#0B1220] px-8 py-4 rounded-full hover:bg-[#F2B75A] transition-colors"
            >
              <span>Contactez-nous</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}