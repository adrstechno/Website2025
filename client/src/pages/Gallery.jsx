import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import CircularGallery from '../components/CircularGallery';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'events', 'workshops', 'office', 'team'];

  const images = [
    { id: 1, category: 'events',    title: 'Tech Conference 2024', image: '/gallery/p2.jpg' },
    { id: 2, category: 'workshops', title: 'Coding Workshop',      image: '/gallery/p3.jpg' },
    { id: 3, category: 'office',    title: 'Modern Workspace',     image: '/gallery/p4.jpg' },
    { id: 4, category: 'team',      title: 'Team Meeting',         image: '/gallery/p9.jpg' },
    { id: 5, category: 'events',    title: 'Product Launch',       image: '/gallery/p10.jpg' },
  ];

  const filtered = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="bg-[#08090B] min-h-screen">

      {/* HERO */}
      <section className="pt-24 pb-16 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0B0D12 0%, #08090B 100%)' }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, transparent 70%)', borderRadius: '50%' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-4 inline-flex">Visual Stories</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-display text-white mb-5">
            Our <span className="text-slate-200">Gallery</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 leading-relaxed">
            Moments captured from our journey, events, and team activities
          </motion.p>
        </div>
      </section>

      {/* STICKY FILTER */}
      <div className="sticky top-[62px] z-40 border-b py-4"
        style={{ background: 'rgba(8,9,11,0.92)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
              style={selectedCategory === cat
                ? { background: '#E5E7EB', color: '#111827', boxShadow: '0 0 20px rgba(229,231,235,0.25)' }
                : { background: 'rgba(255,255,255,0.06)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)' }
              }
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>

      {/* CIRCULAR GALLERY — component preserved unchanged */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{ height: 600, position: 'relative' }}
            >
              <CircularGallery
                items={filtered.map(img => ({ image: img.image, text: img.title }))}
                bend={3}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.02}
              />
            </motion.div>
          </AnimatePresence>

          {/* Count badge */}
          <div className="text-center mt-8">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-slate-400"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              {filtered.length} {filtered.length === 1 ? 'photo' : 'photos'}
              {selectedCategory !== 'all' && ` in "${selectedCategory}"`}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
