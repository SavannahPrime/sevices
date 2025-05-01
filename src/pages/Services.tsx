
import { Cpu, Code, Database, BarChart4, PenTool, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import ImageWithFallback from '@/components/ui/image-with-fallback';

const services = [
  {
    id: 1,
    title: "Custom AI SaaS Applications",
    description: "We develop tailored AI-powered SaaS applications that solve specific business challenges. Our solutions blend cutting-edge AI technologies with intuitive user interfaces to deliver exceptional value.",
    features: [
      "Custom AI model development",
      "Scalable cloud infrastructure",
      "Intuitive user interfaces",
      "Robust security implementation",
      "Ongoing maintenance and updates"
    ],
    icon: <Cpu className="h-12 w-12 text-primary" />,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
  },
  {
    id: 2,
    title: "AI Integration Services",
    description: "Seamlessly integrate AI capabilities into your existing systems and workflows. We help businesses leverage the power of artificial intelligence without disrupting their current operations.",
    features: [
      "API development and integration",
      "Legacy system compatibility",
      "Custom connectors and plugins",
      "Process automation with AI",
      "Data pipeline optimization"
    ],
    icon: <Code className="h-12 w-12 text-primary" />,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
  },
  {
    id: 3,
    title: "AI-Powered Analytics",
    description: "Transform your data into actionable insights with our AI-powered analytics solutions. We build custom dashboards and reporting tools that help you make data-driven decisions.",
    features: [
      "Predictive analytics models",
      "Custom dashboard development",
      "Real-time data processing",
      "Advanced visualization tools",
      "Anomaly detection systems"
    ],
    icon: <BarChart4 className="h-12 w-12 text-primary" />,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
  },
  {
    id: 4,
    title: "Intelligent Chatbots & Assistants",
    description: "Create sophisticated conversational AI solutions that enhance customer service, streamline support, and automate routine interactions across multiple channels.",
    features: [
      "Natural language processing",
      "Multi-channel deployment",
      "Custom knowledge base integration",
      "Continuous learning capabilities",
      "Human handoff protocols"
    ],
    icon: <Wand2 className="h-12 w-12 text-primary" />,
    image: "https://images.unsplash.com/photo-1596742578443-7682ef7b7266?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
  },
  {
    id: 5,
    title: "AI-Enhanced Web Development",
    description: "Build intelligent, responsive websites that leverage AI for personalization, content management, and user experience optimization.",
    features: [
      "AI-driven content personalization",
      "Intelligent search functionality",
      "Behavioral analytics integration",
      "Automated content generation",
      "Performance optimization"
    ],
    icon: <PenTool className="h-12 w-12 text-primary" />,
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
  },
  {
    id: 6,
    title: "AI Data Management Solutions",
    description: "Develop robust data management systems powered by AI that organize, analyze, and optimize your business data for maximum utility and insight.",
    features: [
      "Automated data classification",
      "Intelligent data cleansing",
      "Pattern recognition systems",
      "Data governance frameworks",
      "Secure storage solutions"
    ],
    icon: <Database className="h-12 w-12 text-primary" />,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
  }
];

// Partner logos
const partnerLogos = [
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Safaricom", logo: "https://seeklogo.com/images/S/safaricom-logo-6FA19962D7-seeklogo.com.png" }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="border border-border bg-card transition-all duration-300 hover:shadow-md hover:border-primary/20 h-full flex flex-col overflow-hidden">
        <div className="aspect-video w-full overflow-hidden">
          <ImageWithFallback
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader>
          <div className="mb-4 flex justify-between items-center">
            {service.icon}
            <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Service #{service.id}</span>
          </div>
          <CardTitle>{service.title}</CardTitle>
          <CardDescription className="text-muted-foreground mt-2">
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Link 
            to="/contact" 
            className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center"
          >
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  return (
    <PageTransition>
      {/* Hero Section with background image */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 border-b border-primary/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
            alt="AI Services Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              Enterprise-Grade AI Solutions
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              AI SaaS <span className="gradient-text">Solutions</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-0 max-w-2xl mx-auto"
            >
              Transforming businesses with innovative AI-powered applications and solutions designed for the modern enterprise.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section with visual timeline */}
      <section className="py-16 bg-secondary/30 border-y border-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our AI Development Process</h2>
            <p className="text-muted-foreground">
              We follow a structured, collaborative approach to building AI SaaS solutions that deliver real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Discovery & Analysis",
                description: "We deeply understand your business needs and identify how AI can provide the most valuable solutions.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                step: 2,
                title: "AI Strategy & Design",
                description: "We architect the optimal AI solution and create detailed plans for functionality, data flows and user experience.",
                image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                step: 3,
                title: "Development & Training",
                description: "Our expert team builds the application while training AI models with industry-specific data for optimal performance.",
                image: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                step: 4,
                title: "Deployment & Optimization",
                description: "We launch your AI solution with comprehensive support and continuous optimization to ensure long-term success.",
                image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((step, i) => (
              <div className="relative" key={step.step}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-lg overflow-hidden h-full flex flex-col"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <ImageWithFallback
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
                {i < 3 && (
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block z-10">
                    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M39.0607 13.0607C39.6464 12.4749 39.6464 11.5251 39.0607 10.9393L29.5147 1.3934C28.9289 0.807611 27.9792 0.807611 27.3934 1.3934C26.8076 1.97919 26.8076 2.92893 27.3934 3.51472L35.8787 12L27.3934 20.4853C26.8076 21.0711 26.8076 22.0208 27.3934 22.6066C27.9792 23.1924 28.9289 23.1924 29.5147 22.6066L39.0607 13.0607ZM0 13.5H38V10.5H0V13.5Z" fill="currentColor" className="text-primary/30" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section with animated visuals */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">AI Technologies We Use</h2>
            <p className="text-muted-foreground">
              Our solutions leverage cutting-edge AI technologies tailored to your specific business requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "Machine Learning",
                description: "Advanced algorithms that learn from data and improve over time",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-14 w-14 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"/>
                  </svg>
                ),
                image: "https://images.unsplash.com/photo-1501526029524-a8ea952b15be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Natural Language Processing",
                description: "Enabling computers to understand and generate human language",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-14 w-14 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 9H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 13H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Computer Vision",
                description: "AI systems that can identify and process images and video",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-14 w-14 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                image: "https://images.unsplash.com/photo-1601132359864-c974e79890ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Deep Learning",
                description: "Neural networks that mimic human brain structure for complex tasks",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-14 w-14 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                image: "https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((tech, i) => (
              <motion.div 
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border p-6 rounded-lg text-center h-full"
              >
                <div className="aspect-square overflow-hidden rounded-lg mb-4 relative">
                  <ImageWithFallback
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end justify-center p-4">
                    <div className="h-20 flex items-center justify-center">
                      {tech.icon}
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{tech.title}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partner logos */}
      <section className="py-12 bg-secondary/30 border-t border-primary/10">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">Trusted by Industry Leaders</h3>
            <p className="text-sm text-muted-foreground">Our AI solutions are trusted by top companies worldwide</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partnerLogos.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="grayscale hover:grayscale-0 transition-all duration-300 flex items-center h-12"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full max-w-[120px]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/5 border-t border-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our AI SaaS solutions can help your business achieve its goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-3 rounded-md font-medium transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Request a Consultation
              </Link>
              <Link
                to="/pricing"
                className="border border-primary/20 text-primary px-8 py-3 rounded-md font-medium transition-all hover:bg-primary hover:text-white"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;
