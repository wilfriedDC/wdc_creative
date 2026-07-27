import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Globe, Palette, Code, Video } from 'lucide-react';

const SERVICES = [
  {
    icon: Globe,
    number: '01',
    title: 'Sites Vitrine',
    description:
      "Un site qui présente votre activité clairement et donne envie de vous contacter — rapide, responsive, pensé pour convertir.",
    deliverables: ['Design sur mesure', 'Intégration responsive', 'Référencement de base', 'Hébergement & mise en ligne'],
  },
  {
    icon: Palette,
    number: '02',
    title: 'Design Graphique',
    description:
      "Une identité visuelle cohérente — logo, charte, supports — qui vous ressemble et se reconnaît en un coup d'œil.",
    deliverables: ['Logo & charte graphique', 'Déclinaisons print & digital', 'Guide de style', 'Fichiers sources'],
  },
  {
    icon: Code,
    number: '03',
    title: 'Applications Web',
    description:
      "Des applications sur mesure pour digitaliser vos process — de l'interface à la logique métier.",
    deliverables: ['Cahier des charges', 'Développement front & back', 'Tests & mise en production', 'Maintenance'],
  },
  {
    icon: Video,
    number: '04',
    title: 'Montage Vidéo',
    description:
      "Du tournage au montage final, des vidéos qui racontent votre histoire — corporate, réseaux sociaux ou clip.",
    deliverables: ['Direction artistique', 'Tournage / captation', 'Montage & étalonnage', 'Formats multi-plateformes'],
  },
];

export function Services() {
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
              Ce que nous faisons
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-display-wdc uppercase leading-[0.9] text-[13vw] sm:text-[7vw] lg:text-[4.6vw] mb-8"
          >
            Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="max-w-xl text-lg text-[#B7BEC9]"
          >
            Quatre expertises, une seule équipe — pour que votre site, votre identité, votre
            application et vos vidéos racontent la même histoire.
          </motion.p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-white px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto divide-y divide-gray-100">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 py-14"
              >
                <div className="md:col-span-2 flex items-start gap-3">
                  <span className="font-mono-wdc text-xs text-gray-400">{service.number}</span>
                  <div className="w-11 h-11 rounded-xl bg-[#0B1220] flex items-center justify-center">
                    <Icon className="text-[#E8A33D]" size={20} />
                  </div>
                </div>

                <div className="md:col-span-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                <div className="md:col-span-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="font-mono-wdc text-xs tracking-[0.05em] text-gray-500 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#E8A33D]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
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
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Une de ces expertises vous intéresse ?</h2>
            <p className="text-xl text-[#B7BEC9] mb-8">
              Parlons de votre projet, sans engagement.
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