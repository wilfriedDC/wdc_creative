import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: brancher sur votre backend / service d'envoi (ex: API, Formspree, etc.)
    console.log(form);
    setSubmitted(true);
  };

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
              Parlons-en
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-display-wdc uppercase leading-[0.9] text-[13vw] sm:text-[7vw] lg:text-[4.6vw] mb-8"
          >
            Contact
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="max-w-xl text-lg text-[#B7BEC9]"
          >
            Décrivez-nous votre projet, on revient vers vous sous 48h.
          </motion.p>
        </div>
      </section>

      {/* Form + infos */}
      <section className="bg-white px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            {submitted ? (
              <div className="border border-dashed border-gray-200 rounded-2xl py-16 text-center">
                <p className="font-mono-wdc text-xs tracking-[0.15em] uppercase text-[#E8A33D] mb-2">
                  Message envoyé
                </p>
                <p className="text-gray-600">Merci, on revient vers vous très vite.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono-wdc text-xs tracking-[0.15em] uppercase text-gray-500 mb-2 block">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E8A33D] transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="font-mono-wdc text-xs tracking-[0.15em] uppercase text-gray-500 mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E8A33D] transition-colors"
                      placeholder="vous@exemple.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono-wdc text-xs tracking-[0.15em] uppercase text-gray-500 mb-2 block">
                    Type de projet
                  </label>
                  <select
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E8A33D] transition-colors bg-white"
                  >
                    <option value="">Sélectionner…</option>
                    <option value="site">Site Vitrine</option>
                    <option value="design">Design Graphique</option>
                    <option value="app">Application Web</option>
                    <option value="video">Montage Vidéo</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono-wdc text-xs tracking-[0.15em] uppercase text-gray-500 mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E8A33D] transition-colors resize-none"
                    placeholder="Parlez-nous de votre projet…"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#0B1220] text-white px-7 py-3.5 rounded-full hover:bg-[#17203A] transition-colors"
                >
                  <span>Envoyer le message</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </motion.div>

          {/* Infos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="md:col-span-5 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#0B1220] flex items-center justify-center shrink-0">
                <Mail className="text-[#E8A33D]" size={18} />
              </div>
              <div>
                <p className="font-mono-wdc text-xs tracking-[0.15em] uppercase text-gray-400 mb-1">Email</p>
                <p className="text-gray-900">contact@dimycreative.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#0B1220] flex items-center justify-center shrink-0">
                <Phone className="text-[#E8A33D]" size={18} />
              </div>
              <div>
                <p className="font-mono-wdc text-xs tracking-[0.15em] uppercase text-gray-400 mb-1">Téléphone</p>
                <p className="text-gray-900">+261 XX XX XXX XX</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#0B1220] flex items-center justify-center shrink-0">
                <MapPin className="text-[#E8A33D]" size={18} />
              </div>
              <div>
                <p className="font-mono-wdc text-xs tracking-[0.15em] uppercase text-gray-400 mb-1">Basé à</p>
                <p className="text-gray-900">Votre ville</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}