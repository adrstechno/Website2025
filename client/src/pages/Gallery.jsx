import { motion } from 'framer-motion';
import { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'events', 'workshops', 'office', 'team'];

  const images = [
    { id: 1, category: 'events', title: 'Tech Conference 2024', image: '/gallery/event1.jpg' },
    { id: 2, category: 'workshops', title: 'Coding Workshop', image: '/gallery/workshop1.jpg' },
    { id: 3, category: 'office', title: 'Modern Workspace', image: '/gallery/office1.jpg' },
    { id: 4, category: 'team', title: 'Team Meeting', image: '/gallery/team1.jpg' },
    { id: 5, category: 'events', title: 'Product Launch', image: '/gallery/event2.jpg' },
    { id: 6, category: 'workshops', title: 'AI Workshop', image: '/gallery/workshop2.jpg' },
    { id: 7, category: 'office', title: 'Development Area', image: '/gallery/office2.jpg' },
    { id: 8, category: 'team', title: 'Team Celebration', image: '/gallery/team2.jpg' },
    { id: 9, category: 'events', title: 'Hackathon 2024', image: '/gallery/event3.jpg' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="section-bg pt-20">
      {/* Hero */}
      <section className="py-32">
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
      <section className="py-8 section-bg-alt sticky top-20 z-40 backdrop-blur-xl">
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

      {/* Gallery Grid */}
      <section className="py-16 section-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="card-bg rounded-xl overflow-hidden cursor-pointer group"
              >
                <div className="relative h-64 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-6xl overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">View</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-primary">{image.title}</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400 capitalize">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
