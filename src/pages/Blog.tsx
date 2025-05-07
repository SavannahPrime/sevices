
import { useState } from 'react';
import { BookOpen, Calendar, User, Tag, Search, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import BlogCard from '@/components/BlogCard';
import BlogHeroSection from '@/components/BlogHeroSection';
import ImageWithFallback from '@/components/ui/image-with-fallback';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

// Enhanced blog posts with SEO metadata and structured content
const blogPosts = [
  {
    id: 7, // New blog post ID
    title: "Introducing Simba LLM: The Revolutionary AI Model for Local African Languages",
    excerpt: "Discover how our team is developing Simba LLM, a groundbreaking large language model specifically designed to understand and process East African languages and dialects.",
    date: "May 7, 2025",
    author: "Mercy Wanjiru",
    authorImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "AI Development",
    tags: ["Simba LLM", "African Languages", "Natural Language Processing", "Local AI"],
    featuredImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    readTime: "10 min read",
    metaDescription: "Learn about Simba LLM, our groundbreaking AI language model being developed specifically for East African languages and dialects, revolutionizing local content creation and accessibility.",
    metaKeywords: ["Simba LLM", "African language AI", "Swahili AI", "Local dialect AI", "Kenya AI technology"]
  },
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
    readTime: "8 min read",
    metaDescription: "Learn how AI is transforming SaaS applications, creating powerful new opportunities for businesses to automate processes and gain insights.",
    metaKeywords: ["AI SaaS", "artificial intelligence", "business automation", "SaaS technology"]
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
    readTime: "6 min read",
    metaDescription: "Explore how SavannahPrime's custom AI backend solutions are transforming business operations through automation and data intelligence.",
    metaKeywords: ["AI backend", "business automation", "machine learning", "data intelligence"]
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
    readTime: "5 min read",
    metaDescription: "Discover SavannahPrime's systematic approach to building scalable and reliable AI SaaS products that deliver real business value.",
    metaKeywords: ["AI SaaS development", "scalable software", "product development", "SavannahPrime methodology"]
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
    readTime: "7 min read",
    metaDescription: "Learn why user experience design is critical for the success and adoption of AI-powered applications and how to implement UX best practices.",
    metaKeywords: ["AI user experience", "UX design", "AI application design", "user-centered design"]
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
    readTime: "9 min read",
    metaDescription: "Explore essential security best practices for developing and maintaining AI-powered SaaS applications to protect user data and privacy.",
    metaKeywords: ["AI security", "SaaS security", "data protection", "privacy best practices"]
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
    readTime: "8 min read",
    metaDescription: "Discover effective strategies for integrating AI solutions with existing business systems to maximize efficiency and return on investment.",
    metaKeywords: ["AI integration", "business systems", "system interoperability", "AI implementation"]
  }
];

const categories = [
  "All Categories",
  "AI Development",
  "AI & Automation",
  "SaaS Development",
  "UI/UX Design",
  "AI Security",
  "System Integration",
  "Local AI"
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

  // Sort posts by date (most recent first)
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <PageTransition>
      <Helmet>
        <title>AI SaaS Insights Blog | SavannahPrime Agency</title>
        <meta name="description" content="Discover expert perspectives on AI development, SaaS solutions, and the future of AI-powered business applications from SavannahPrime's industry leaders." />
        <meta name="keywords" content="AI blog, SaaS insights, machine learning, African AI, Simba LLM, technology blog" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://savannahprimeagency.tech/blog" />
        <meta property="og:title" content="AI SaaS Insights Blog | SavannahPrime Agency" />
        <meta property="og:description" content="Expert perspectives on AI development, SaaS solutions, and the future of AI-powered business applications." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://savannahprimeagency.tech/blog" />
        <meta property="twitter:title" content="AI SaaS Insights Blog | SavannahPrime Agency" />
        <meta property="twitter:description" content="Expert perspectives on AI development, SaaS solutions, and the future of AI-powered business applications." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        
        {/* Schema.org markup for articles */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "AI SaaS Insights Blog",
              "description": "Expert perspectives on AI development, SaaS solutions, and the future of AI-powered business applications from SavannahPrime's industry leaders.",
              "url": "https://savannahprimeagency.tech/blog",
              "publisher": {
                "@type": "Organization",
                "name": "SavannahPrime Agency",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://savannahprimeagency.tech/logo.png"
                }
              },
              "blogPost": [
                {
                  "@type": "BlogPosting",
                  "headline": "Introducing Simba LLM: The Revolutionary AI Model for Local African Languages",
                  "description": "Discover how our team is developing Simba LLM, a groundbreaking large language model specifically designed to understand and process East African languages and dialects.",
                  "author": {
                    "@type": "Person",
                    "name": "Mercy Wanjiru"
                  },
                  "datePublished": "2025-05-07",
                  "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                },
                {
                  "@type": "BlogPosting",
                  "headline": "The Future of AI-Powered SaaS Applications",
                  "description": "Explore how artificial intelligence is revolutionizing SaaS applications and creating new opportunities for businesses of all sizes.",
                  "author": {
                    "@type": "Person",
                    "name": "Fredrick Saruni"
                  },
                  "datePublished": "2024-06-15",
                  "image": "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
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
              
              {/* Featured Blog Post - Simba LLM */}
              {sortedPosts.length > 0 && sortedPosts[0].id === 7 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <article className="bg-card border border-border rounded-lg overflow-hidden">
                    <div className="md:flex flex-col">
                      <div className="md:h-72 overflow-hidden">
                        <ImageWithFallback
                          src={sortedPosts[0].featuredImage}
                          alt={sortedPosts[0].title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-medium px-2.5 py-0.5 bg-primary/10 text-primary rounded-full">
                            Featured
                          </span>
                          <span className="text-xs font-medium px-2.5 py-0.5 bg-secondary text-foreground rounded-full">
                            {sortedPosts[0].category}
                          </span>
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-primary transition-colors">
                          <Link to={`/blog/${sortedPosts[0].id}`}>
                            {sortedPosts[0].title}
                          </Link>
                        </h2>
                        
                        <p className="text-muted-foreground mb-6 text-lg">
                          {sortedPosts[0].excerpt}
                        </p>
                        
                        <div className="flex items-center mb-6">
                          {sortedPosts[0].authorImage && (
                            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                              <ImageWithFallback
                                src={sortedPosts[0].authorImage}
                                alt={sortedPosts[0].author}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div>
                            <p className="font-medium">{sortedPosts[0].author}</p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span className="mr-3">{sortedPosts[0].date}</span>
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{sortedPosts[0].readTime}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {sortedPosts[0].tags.map((tag, idx) => (
                            <button
                              key={idx}
                              onClick={() => setSearchQuery(tag)}
                              className="px-3 py-1 bg-secondary rounded-full text-xs hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                        
                        <Link 
                          to={`/blog/${sortedPosts[0].id}`} 
                          className="inline-block px-6 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
                        >
                          Read Full Article
                        </Link>
                      </div>
                    </div>
                  </article>
                </motion.div>
              )}
              
              {/* Blog Posts Grid (excluding featured post) */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {sortedPosts.filter(post => post.id !== 7).map((post, idx) => (
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
              {/* Search Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mb-8 bg-card border border-border rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-4">Search Articles</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input 
                    type="text" 
                    placeholder="Search blog posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </motion.div>
            
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
              
              {/* Featured Post - Simba LLM Team Lead */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8 bg-card border border-border rounded-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Mercy Wanjiru - Simba LLM Lead"
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-primary font-medium">Team Spotlight</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">
                    <Link to="/team" className="hover:text-primary transition-colors">
                      Meet Mercy Wanjiru: The Mind Behind Simba LLM
                    </Link>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Learn about our AI Research Lead who's spearheading the development of Simba LLM, bringing AI accessibility to East African languages.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    <Link to="/team" className="text-primary hover:underline">
                      View Team Profile
                    </Link>
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
                    aria-label="Email address for newsletter subscription"
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
