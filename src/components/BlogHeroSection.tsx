
import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageWithFallback from './ui/image-with-fallback';

const featuredPost = {
  id: 1,
  title: "Why AI is the Future of SaaS Development",
  excerpt: "An exploration of how AI is transforming SaaS development and creating new possibilities for businesses and developers.",
  category: "Featured",
  date: "June 22, 2024",
  author: "Fredrick Saruni",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
};

const BlogHeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-primary/5 border-b border-primary/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              AI SaaS Insights
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              AI SaaS Insights by <span className="gradient-text">Fredrick Saruni</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
            >
              Expert perspectives on AI development, SaaS solutions, and the future of AI-powered business applications.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative max-w-xl"
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block"
          >
            <Link to={`/blog/${featuredPost.id}`} className="relative block overflow-hidden rounded-xl group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-primary/80 text-white text-xs font-semibold rounded-full mb-2">
                    {featuredPost.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{featuredPost.title}</h3>
                  <p className="text-white/90 text-sm mb-3 line-clamp-2">{featuredPost.excerpt}</p>
                  <p className="text-white/70 text-xs">
                    {featuredPost.date} · {featuredPost.author}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;
