
import { useState } from 'react';
import { BookOpen, Calendar, User, Tag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import BlogCard from '@/components/BlogCard';
import BlogHeroSection from '@/components/BlogHeroSection';
import ImageWithFallback from '@/components/ui/image-with-fallback';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI-Powered SaaS Applications",
    excerpt: "Explore how artificial intelligence is revolutionizing SaaS applications and creating new opportunities for businesses of all sizes.",
    date: "June 15, 2024",
    author: "Fredrick Saruni",
    authorImage: "/lovable-uploads/0b78033a-2f9f-4d1f-bfae-08c84c8ba8f2.png",
    category: "AI Development",
    tags: ["AI", "SaaS", "Technology"],
    featuredImage: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "How Our AI Backend Solutions Transform Business Operations",
    excerpt: "Discover how SavannahPrime's custom AI backend solutions are helping businesses automate processes and gain valuable insights.",
    date: "June 10, 2024",
    author: "Fredrick Saruni",
    authorImage: "/lovable-uploads/0b78033a-2f9f-4d1f-bfae-08c84c8ba8f2.png",
    category: "AI & Automation",
    tags: ["AI Backend", "Machine Learning", "Business"],
    featuredImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Building Scalable AI SaaS Products: Our Approach",
    excerpt: "Learn about our methodical approach to developing scalable, reliable AI SaaS products that deliver real value to users.",
    date: "June 5, 2024",
    author: "Fredrick Saruni",
    authorImage: "/lovable-uploads/0b78033a-2f9f-4d1f-bfae-08c84c8ba8f2.png",
    category: "SaaS Development",
    tags: ["SaaS", "AI Development", "Scalability"],
    featuredImage: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "The Importance of User Experience in AI Applications",
    excerpt: "Why a great user experience is crucial for the adoption and success of AI-powered SaaS applications.",
    date: "May 28, 2024",
    author: "Fredrick Saruni",
    authorImage: "/lovable-uploads/0b78033a-2f9f-4d1f-bfae-08c84c8ba8f2.png",
    category: "UI/UX Design",
    tags: ["UX", "AI Applications", "Design"],
    featuredImage: "https://images.unsplash.com/photo-1596742578443-7682ef7b7266?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Securing AI SaaS Applications: Best Practices",
    excerpt: "Essential security practices for developing and maintaining AI-powered SaaS applications that protect user data and privacy.",
    date: "May 20, 2024",
    author: "Fredrick Saruni",
    authorImage: "/lovable-uploads/0b78033a-2f9f-4d1f-bfae-08c84c8ba8f2.png",
    category: "AI Security",
    tags: ["Security", "AI", "Best Practices"],
    featuredImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    readTime: "9 min read"
  },
  {
    id: 6,
    title: "Integrating AI Solutions with Existing Business Systems",
    excerpt: "How to seamlessly integrate AI SaaS solutions with your existing business systems for maximum efficiency and ROI.",
    date: "May 15, 2024",
    author: "Fredrick Saruni",
    authorImage: "/lovable-uploads/0b78033a-2f9f-4d1f-bfae-08c84c8ba8f2.png",
    category: "System Integration",
    tags: ["Integration", "AI Solutions", "Business Systems"],
    featuredImage: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    readTime: "8 min read"
  }
];

const categories = [
  "All Categories",
  "AI Development",
  "AI & Automation",
  "SaaS Development",
  "UI/UX Design",
  "AI Security",
  "System Integration"
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && (searchQuery === "" || matchesSearch);
  });

  return (
    <PageTransition>
      {/* Hero Section */}
      <BlogHeroSection />
      
      {/* Blog Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Category Pills (Mobile) */}
              <div className="mb-8 overflow-x-auto pb-2 lg:hidden">
                <div className="flex space-x-2 min-w-max">
                  {categories.map((category, idx) => (
                    <motion.button
                      key={category}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                        selectedCategory === category
                          ? "bg-primary text-white"
                          : "bg-secondary text-foreground hover:bg-primary/10"
                      )}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              {/* Results Info */}
              <div className="flex justify-between items-center mb-8">
                <p className="text-muted-foreground">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
                </p>
                <div className="flex items-center">
                  <span className="hidden md:inline text-muted-foreground mr-2">Sort by:</span>
                  <select className="bg-card border border-border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option>Most Recent</option>
                    <option>Most Popular</option>
                    <option>Oldest First</option>
                  </select>
                </div>
              </div>
              
              {/* Blog Posts Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, idx) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                      <BlogCard post={post} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <BookOpen className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                  <p className="text-muted-foreground mb-6">
                    We couldn't find any articles matching your search criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All Categories");
                    }}
                    className="text-primary font-medium hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
              
              {/* Pagination */}
              {filteredPosts.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex justify-center items-center mt-12 space-x-2"
                >
                  <button className="px-4 py-2 rounded-md border border-border hover:bg-secondary transition-colors">
                    Previous
                  </button>
                  <button className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors">
                    1
                  </button>
                  <button className="px-4 py-2 rounded-md hover:bg-secondary transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 rounded-md hover:bg-secondary transition-colors">
                    3
                  </button>
                  <button className="px-4 py-2 rounded-md border border-border hover:bg-secondary transition-colors">
                    Next
                  </button>
                </motion.div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Bio */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8 bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <ImageWithFallback
                      src="/lovable-uploads/0b78033a-2f9f-4d1f-bfae-08c84c8ba8f2.png"
                      alt="Fredrick Saruni"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Fredrick Saruni</h3>
                    <p className="text-sm text-muted-foreground">Founder & AI Solutions Expert</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  With over 10 years of experience in AI development and SaaS solutions, Fredrick leads SavannahPrime's innovative approach to AI-powered business applications.
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                    Twitter
                  </a>
                </div>
              </motion.div>

              {/* Categories (Desktop) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="hidden lg:block mb-8 bg-card border border-border rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-md transition-colors",
                          selectedCategory === category
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-foreground hover:bg-secondary"
                        )}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Popular Tags */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8 bg-card border border-border rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag, idx) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="px-3 py-1 bg-secondary rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.div>
              
              {/* Featured Post */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8 bg-card border border-border rounded-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Featured post"
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-primary font-medium">Featured</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">
                    <Link to="#" className="hover:text-primary transition-colors">
                      Why AI is the Future of SaaS Development
                    </Link>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    An exploration of how AI is transforming SaaS development and creating new possibilities for businesses and developers.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">June 22, 2024</span>
                    <User className="h-4 w-4 mr-1" />
                    <span>Fredrick Saruni</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Newsletter Signup */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-primary/5 border border-primary/20 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Get the latest AI SaaS insights and updates delivered directly to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/5 border-t border-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how our AI SaaS applications can streamline operations, increase productivity, and drive growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-3 rounded-md font-medium transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Get a Quote
              </Link>
              <Link
                to="/services"
                className="border border-primary/20 text-primary px-8 py-3 rounded-md font-medium transition-all hover:bg-primary hover:text-white"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Blog;
