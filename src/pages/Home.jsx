import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Sparkles, Code, Palette, Video, Globe } from 'lucide-react';


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
      description: 'Création d\'identités visuelles et de supports graphiques uniques.',
    },
    {
      icon: Code,
      title: 'Applications Web',
      description: 'Développement d\'applications web sur mesure et performantes.',
    },
    {
      icon: Video,
      title: 'Montage Vidéo',
      description: 'Production et montage vidéo professionnels pour vos projets.',
    },
  ];

  const featuredProjects = [
    {
      title: 'Brand Identity',
      category: 'Design Graphique',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzM5NzY5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Création complète d\'identité visuelle pour une startup tech',
    },
    {
      title: 'E-Commerce Platform',
      category: 'Application Web',
      image: 'https://images.unsplash.com/photo-1772037441147-5301691c4b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc3MzQwNjIxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Plateforme e-commerce moderne avec gestion complète',
    },
    {
      title: 'Corporate Video',
      category: 'Montage Vidéo',
      image: 'https://images.unsplash.com/photo-1627244714766-94dab62ed964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzczNDA4MjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Production vidéo corporate pour une entreprise internationale',
    },
  ];

  return (
    <div className="pt-10">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-8"
            >
              <Sparkles size={16} />
              <span className="text-sm">Agence Créative Digitale</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl mb-6 text-gray-900"
            >
              Donnons vie à vos
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                idées créatives
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            >
              WDC Creative est votre partenaire pour transformer vos projets digitaux en expériences uniques. 
              Design, développement et création de contenu, le tout avec passion et professionnalisme.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/work"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-shadow"
              >
                <span>Voir nos projets</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <span>Démarrer un projet</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
                  className="p-6 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-purple-600" size={24} />
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
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-black-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Discutons de vos idées et créons ensemble quelque chose d'extraordinaire
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-full hover:shadow-xl transition-shadow"
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