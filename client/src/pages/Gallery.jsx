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

  const filteredImages =
    selectedCategory === 'all'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="section-bg pt-8">

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/8 blur-[140px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-widest uppercase mb-6">
              Visual Stories
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-primary">
              Our <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              Moments captured from our journey, events, and team activities
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CATEGORY FILTER ───────────────────────────── */}
      <section className="py-4 section-bg-alt sticky top-20 z-40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-black shadow-lg shadow-blue-500/30'
                    : 'bg-white/5 text-secondary hover:bg-white/10 border border-white/10 hover:border-blue-500/30'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CIRCULAR GALLERY ──────────────────────────── */}
      <section className="py-12 section-bg">
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
                items={filteredImages.map((img) => ({ image: img.image, text: img.title }))}
                bend={3}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.02}
              />
            </motion.div>
          </AnimatePresence>

          {/* Count badge */}
          <div className="text-center mt-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-secondary text-xs font-semibold">
              {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'}
              {selectedCategory !== 'all' && ` in "${selectedCategory}"`}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

