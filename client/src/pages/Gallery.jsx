import { motion } from 'framer-motion';
import { useState } from 'react';
import CircularGallery from '../components/CircularGallery';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'events', 'workshops', 'office', 'team'];

  const images = [
    { id: 1, category: 'events', title: 'Tech Conference 2024', image: '/gallery/p2.jpg' },
    { id: 2, category: 'workshops', title: 'Coding Workshop', image: '/gallery/p3.jpg' },
    { id: 3, category: 'office', title: 'Modern Workspace', image: '/gallery/p4.jpg' },
    { id: 4, category: 'team', title: 'Team Meeting', image: '/gallery/p9.jpg' },
    { id: 5, category: 'events', title: 'Product Launch', image: '/gallery/p10.jpg' },
    // { id: 6, category: 'workshops', title: 'AI Workshop', image: '/gallery/workshop2.jpg' },
    // { id: 7, category: 'office', title: 'Development Area', image: '/gallery/office2.jpg' },
    // { id: 8, category: 'team', title: 'Team Celebration', image: '/gallery/team2.jpg' },
    // { id: 9, category: 'events', title: 'Hackathon 2024', image: '/gallery/event3.jpg' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="section-bg pt-8">
      {/* Hero */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-primary">
              Our <span className="text-purple-600 dark:text-purple-400">Gallery</span>
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              Moments captured from our journey, events, and team activities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-4 section-bg-alt sticky top-20 z-40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-purple-600 dark:bg-purple-500 text-white'
                    : 'bg-gray-100 dark:bg-white/5 text-secondary hover:bg-gray-200 dark:hover:bg-white/10'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Circular OGL Gallery */}
      <section className="py-8 section-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ height: 600, position: 'relative' }}>
            <CircularGallery
              items={filteredImages.map(img => ({ image: img.image, text: img.title }))}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
