
import { ArrowRight, CheckCircle, InfoIcon } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import ImageWithFallback from '@/components/ui/image-with-fallback';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ParticleBackground from '@/components/ParticleBackground';

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  isPopular?: boolean;
  image?: string;
  index?: number;
  tier: 'standard' | 'business' | 'enterprise';
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  description,
  features,
  buttonText,
  buttonLink,
  isPopular = false,
  image,
  index = 0,
  tier
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className={cn(
        "h-full flex flex-col relative overflow-hidden border-2",
        isPopular ? "border-primary shadow-lg shadow-primary/10" : "border-border"
      )}>
        {isPopular && (
          <div className="absolute top-0 right-0">
            <div className="bg-primary text-primary-foreground text-xs font-semibold py-1 px-3 rounded-bl-md">
              Most Popular
            </div>
          </div>
        )}
        
        {image && (
          <div className="h-36 overflow-hidden">
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <CardHeader>
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center mb-4",
            tier === 'standard' ? "bg-blue-100 dark:bg-blue-900/30" : 
            tier === 'business' ? "bg-primary/10" : 
            "bg-purple-100 dark:bg-purple-900/30"
          )}>
            {tier === 'standard' && (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            {tier === 'business' && (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            {tier === 'enterprise' && (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16C13.1046 16 14 15.1046 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 15.1046 10.8954 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 12H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <CardTitle className="text-xl mb-2">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <div className="mb-6">
            <p className="text-3xl font-bold text-primary">{price}</p>
          </div>
          
          <ul className="space-y-3 mb-6">
            {features.map((feature, i) => (
              <li key={`${title}-feature-${i}`} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        
        <CardFooter className="pt-4 pb-6">
          <Link
            to={buttonLink}
            className={cn(
              "block w-full text-center py-3 px-6 rounded-md font-medium transition-all",
              isPopular
                ? "bg-primary text-white hover:shadow-md hover:shadow-primary/20"
                : "border border-primary/20 text-primary hover:bg-primary hover:text-white"
            )}
          >
            {buttonText}
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

// Additional service card component
const ServiceCard = ({ title, description, price, icon }: { 
  title: string; 
  description: string; 
  price: string; 
  icon: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border rounded-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {description}
            </p>
            <div className="flex items-center">
              <span className="text-primary font-semibold">{price}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Testimonial component
const Testimonial = ({ quote, name, company, image }: { 
  quote: string; 
  name: string; 
  company: string; 
  image: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border p-6 rounded-lg"
    >
      <div className="flex items-start mb-4">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
          <ImageWithFallback
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </div>
      <p className="text-muted-foreground italic">"{quote}"</p>
    </motion.div>
  );
};

const Pricing = () => {
  const pricingTiers = [
    {
      title: "Standard Website",
      price: "KSH 25,000",
      description: "Perfect for small businesses looking to establish a professional online presence.",
      features: [
        "Custom design and development",
        "Mobile-friendly responsive design",
        "Domain registration & hosting",
        "SEO-optimized structure",
        "Secure HTTPS implementation",
        "Fast-loading optimized performance",
        "Basic analytics integration",
        "Social media integration"
      ],
      buttonText: "Get Started",
      buttonLink: "/contact",
      isPopular: false,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      tier: "standard"
    },
    {
      title: "Business Website",
      price: "KSH 50,000",
      description: "Comprehensive solution for businesses that need advanced content management capabilities.",
      features: [
        "Custom CMS architecture",
        "User-friendly admin dashboard",
        "Content scheduling & management",
        "User role management",
        "Advanced security measures",
        "Third-party integrations",
        "eCommerce capabilities",
        "Training and documentation",
        "3 months of technical support"
      ],
      buttonText: "Get Started",
      buttonLink: "/contact",
      isPopular: true,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      tier: "business"
    },
    {
      title: "Enterprise AI Solutions",
      price: "Custom",
      description: "Tailored AI automation solutions for businesses looking to streamline operations and leverage data.",
      features: [
        "Custom AI solution development",
        "Integration with existing systems",
        "AI-powered chatbots",
        "Workflow automation",
        "Data analytics dashboards",
        "Machine learning implementation",
        "Personalized consultation",
        "Comprehensive training",
        "Ongoing support and maintenance"
      ],
      buttonText: "Request Quote",
      buttonLink: "/contact",
      isPopular: false,
      image: "https://images.unsplash.com/photo-1677442135148-580c71df58db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      tier: "enterprise"
    }
  ];
  
  const strategicServices = [
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including SEO, social media, and Google Ads management.",
      price: "From KSH 15,000/month",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "Branding & UI/UX Design",
      description: "Professional branding services including logo design, brand identity, and UI/UX design.",
      price: "From KSH 30,000",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19L19 12L22 15L15 22L12 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 13L16.5 5.5L2 2L5.5 16.5L13 18L18 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 2L9.586 9.586" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    }
  ];
  
  const technicalServices = [
    {
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support for your website or application.",
      price: "From KSH 5,000/month",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7 6.3C14.8 6.2 15 6.1 15.1 6C16.1 5.4 17.3 5 18.5 5C19.5 5 20 5.5 20 6.5C20 7.3 19.5 8 18.5 8C18.1 8 17.8 7.9 17.5 7.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 5H9C10.1 5 11 5.9 11 7V14C11 15.1 10.1 16 9 16H5L2 19V7C2 5.9 2.9 5 4 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 9H18C19.1 9 20 9.9 20 11V18C20 19.1 19.1 20 18 20H14L11 23V11C11 9.9 11.9 9 13 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "E-commerce Integration",
      description: "Add e-commerce functionality to your website with payment processing and inventory management.",
      price: "From KSH 30,000",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    }
  ];
  
  const knowledgeServices = [
    {
      title: "Content Creation",
      description: "Professional content writing and multimedia creation for your website or marketing campaigns.",
      price: "Custom",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19L19 12L22 15L15 22L12 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 13L16.5 5.5L2 2L5.5 16.5L13 18L18 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 2L9.586 9.586" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "Training & Workshops",
      description: "Comprehensive training sessions and workshops for your team to manage your digital assets.",
      price: "KSH 10,000 per session",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    }
  ];
  
  const faqItems = [
    {
      question: "What is included in the Standard Website package?",
      answer: "Our Standard Website package includes custom design and development, domain registration and hosting, SEO-optimized structure, mobile-friendly responsive design, secure HTTPS implementation, fast-loading optimized performance, basic analytics integration, and social media integration. This package is priced at KSH 25,000."
    },
    {
      question: "How long does it take to develop a Business Website?",
      answer: "The timeline for Business Website development varies depending on the complexity of your requirements. Typically, our projects take between 4-8 weeks from initial consultation to launch. We'll provide you with a detailed timeline during our project planning phase."
    },
    {
      question: "Do you offer maintenance services after the project is completed?",
      answer: "Yes, we offer ongoing maintenance and support services to ensure your website or application continues to perform optimally. Our Business Website package includes 3 months of technical support, and we offer additional maintenance packages starting from KSH 5,000 per month."
    },
    {
      question: "Can you help with migrating content from my existing website?",
      answer: "Absolutely! We provide content migration services to help transition from your existing website to your new one. This can be included in your project scope or added as an additional service depending on the volume and complexity of content."
    },
    {
      question: "How do you determine pricing for custom AI solutions?",
      answer: "Pricing for Enterprise AI solutions is based on several factors including the complexity of the AI functionality, integration requirements, data volume, and ongoing support needs. We provide custom quotes after an initial consultation to understand your specific requirements and goals."
    },
    {
      question: "Do I have to pay the full amount upfront?",
      answer: "No, we typically work with a milestone-based payment schedule. For most projects, we require a 50% deposit to begin work, with the remaining balance divided into milestones throughout the project. For larger projects, we can create a more detailed payment schedule."
    }
  ];
  
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParticleBackground particleCount={30} className="opacity-50" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-0 max-w-2xl mx-auto">
              Choose the plan that fits your business needs with no hidden costs. Every plan includes our commitment to quality and excellence.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Pricing Tiers */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <PricingTier
                key={index}
                title={tier.title}
                price={tier.price}
                description={tier.description}
                features={tier.features}
                buttonText={tier.buttonText}
                buttonLink={tier.buttonLink}
                isPopular={tier.isPopular}
                image={tier.image}
                index={index}
                tier={tier.tier as 'standard' | 'business' | 'enterprise'}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-16 bg-secondary/5 border-y border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-muted-foreground">
              Enhance your digital presence with these specialized services
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Strategic Services */}
            <div>
              <h3 className="text-xl font-medium mb-6 pl-4 border-l-4 border-blue-500">Strategic Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {strategicServices.map((service, i) => (
                  <ServiceCard 
                    key={`strategic-${i}`} 
                    title={service.title} 
                    description={service.description} 
                    price={service.price}
                    icon={service.icon}
                  />
                ))}
              </div>
            </div>
            
            {/* Technical Services */}
            <div>
              <h3 className="text-xl font-medium mb-6 pl-4 border-l-4 border-primary">Technical Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {technicalServices.map((service, i) => (
                  <ServiceCard 
                    key={`technical-${i}`} 
                    title={service.title} 
                    description={service.description} 
                    price={service.price}
                    icon={service.icon}
                  />
                ))}
              </div>
            </div>
            
            {/* Knowledge Services */}
            <div>
              <h3 className="text-xl font-medium mb-6 pl-4 border-l-4 border-purple-500">Knowledge Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {knowledgeServices.map((service, i) => (
                  <ServiceCard 
                    key={`knowledge-${i}`} 
                    title={service.title} 
                    description={service.description} 
                    price={service.price}
                    icon={service.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground mb-8">
              See what businesses across Kenya say about our solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Testimonial 
              quote="SavannahPrime delivered an exceptional AI solution that increased our customer engagement by 40%. Their team's attention to detail and industry knowledge is unmatched."
              name="Sarah Wanjiku"
              company="RetailMaster Kenya"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            />
            <Testimonial 
              quote="Their expertise in web development and AI integration has transformed our business operations. The custom dashboard they built saves us hours of manual work every day."
              name="Michael Odhiambo"
              company="Media Insights"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Have questions? We've got answers to help you make the right decision.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* Custom Quote Section */}
      <section className="py-16 bg-primary/5 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us for a tailored quote specific to your business requirements and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-3 rounded-md font-medium transition-all hover:shadow-lg hover:shadow-primary/20 inline-block"
              >
                Request a Custom Quote
              </Link>
              <Link
                to="/dynamic-pricing"
                className="border border-primary/20 text-primary px-8 py-3 rounded-md font-medium hover:bg-primary hover:text-white transition-all inline-block"
              >
                Try Dynamic Pricing Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Pricing;
