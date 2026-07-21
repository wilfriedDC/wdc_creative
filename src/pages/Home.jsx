import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Code, Palette, Video, Globe } from 'lucide-react';

const FILM_FRAMES = ['SITES', 'IDENTITÉ', 'APPLICATIONS', 'VIDÉO'];

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0B1220] text-[#F5F3ED] px-6 lg:px-12">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        .font-display-wdc { font-family: 'Anton', sans-serif; }
        .font-mono-wdc { font-family: 'IBM Plex Mono', monospace; }
        @keyframes wdc-sweep { 0% { transform: translateX(-10%); } 100% { transform: translateX(110%); } }
        .playhead { animation: wdc-sweep 9s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .playhead { animation: none; }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,163,61,0.08),_transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto w-full py-44">
        

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="font-display-wdc uppercase leading-[0.9] text-[13vw] sm:text-[8vw] lg:text-[5.4vw] mb-8"
        >
          Le clap.
          <br />
          Le commit.
          <br />
          <span className="text-[#E8A33D]">Le lancement.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-xl text-lg text-[#B7BEC9] mb-12"
        >
          Dimy Creative conçoit et développe vos projets digitaux de bout en bout — sites vitrine,
          identités visuelles, applications web et montage vidéo, pensés comme une seule histoire.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16"
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-2 bg-[#E8A33D] text-[#0B1220] font-medium px-7 py-3.5 rounded-full hover:bg-[#F2B75A] transition-colors"
          >
            <span>Voir nos projets</span>
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-[#2B3346] text-[#F5F3ED] px-7 py-3.5 rounded-full hover:border-[#E8A33D] transition-colors"
          >
            <span>Démarrer un projet</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative border-y border-[#2B3346] py-3 overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 flex justify-between px-1 -translate-y-1/2">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={`t-${i}`} className="w-1.5 h-1.5 rounded-[2px] bg-[#0B1220] border border-[#2B3346]" />
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-between px-1 translate-y-1/2">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={`b-${i}`} className="w-1.5 h-1.5 rounded-[2px] bg-[#0B1220] border border-[#2B3346]" />
            ))}
          </div>

          <div className="playhead absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-[#E8A33D]/10 to-transparent" />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3">
            {FILM_FRAMES.map((label, i) => (
              <span key={label} className="font-mono-wdc text-xs tracking-[0.15em] text-[#8B93A3]">
                {String(i + 1).padStart(2, '0')} · {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Home() {
  const services = [
    {
      icon: Globe,
      title: 'Sites Vitrine',
      description: 'Des sites web élégants et performants pour présenter votre activité.',
    },
    {
      icon: Palette,
      title: 'Design Graphique',
      description: "Création d'identités visuelles et de supports graphiques uniques.",
    },
    {
      icon: Code,
      title: 'Applications Web',
      description: "Développement d'applications web sur mesure et performantes.",
    },
    {
      icon: Video,
      title: 'Montage Vidéo',
      description: 'Production et montage vidéo professionnels pour vos projets.',
    },
  ];

  return (
    <div>
      <Hero />

      {/* Services Section */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Nos Services</h2>
            <p className="text-xl text-gray-600">Une expertise complète pour tous vos besoins digitaux</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-6 rounded-2xl border border-gray-200 hover:border-[#E8A33D]/60 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-[#0B1220] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-[#E8A33D]" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#0B1220]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Prêt à démarrer votre projet ?</h2>
            <p className="text-xl text-[#B7BEC9] mb-8">
              Discutons de vos idées et créons ensemble quelque chose d'extraordinaire
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