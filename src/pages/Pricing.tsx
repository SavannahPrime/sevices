
import { CheckCircle, XCircle } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import ImageWithFallback from '@/components/ui/image-with-fallback';

interface PricingTierProps {
  title: string;
  nowPrice: string;
  wasPrice: string;
  description: string;
  features: {
    included: string[];
    excluded?: string[];
  };
  buttonText: string;
  buttonLink: string;
  isPopular?: boolean;
  image?: string;
  index?: number;
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  nowPrice,
  wasPrice,
  description,
  features,
  buttonText,
  buttonLink,
  isPopular = false,
  image,
  index = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'relative rounded-lg border transition-all duration-300 hover:shadow-lg overflow-hidden',
        isPopular
          ? 'border-primary shadow-md shadow-primary/10 bg-primary/5 z-10'
          : 'border-border hover:border-primary/20'
      )}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <span className="bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      {image && (
        <div className="relative h-40 w-full overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
        </div>
      )}

      <div className="p-8">
        {!image && <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>}

        <div className="mb-6 text-center">
          <div className="flex justify-center items-center space-x-2">
            <span className="text-4xl font-bold text-primary">{nowPrice}</span>
            <span className="text-lg text-muted-foreground line-through">{wasPrice}</span>
          </div>
          <span className="text-sm text-muted-foreground">Limited Easter Offer</span>
        </div>

        <p className="text-muted-foreground mb-6 text-center">{description}</p>

        <ul className="space-y-3 mb-8">
          {features.included.map((feature, index) => (
            <li key={`included-${index}`} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
              <span>{feature}</span>
            </li>
          ))}

          {features.excluded?.map((feature, index) => (
            <li key={`excluded-${index}`} className="flex items-start text-muted-foreground">
              <XCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          to={buttonLink}
          className={cn(
            'block text-center py-3 px-6 rounded-md font-medium transition-all',
            isPopular
              ? 'bg-primary text-white hover:shadow-md hover:shadow-primary/20'
              : 'border border-primary/20 text-primary hover:bg-primary hover:text-white'
          )}
        >
          {buttonText}
        </Link>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const pricingTiers = [
    {
      title: 'Basic Website',
      nowPrice: '25,000 KSH',
      wasPrice: '40,000 KSH',
      description: 'Perfect for small businesses looking to establish a professional online presence.',
      features: {
        included: [
          'Custom design and development',
          'Domain registration & hosting',
          'SEO-optimized structure',
          'Mobile-friendly responsive design',
          'Secure HTTPS implementation',
          'Fast-loading optimized performance',
          'Basic analytics integration',
          'Social media integration'
        ],
        excluded: ['Advanced CMS features', 'AI-powered automation', 'Custom integrations']
      },
      buttonText: 'Get Started',
      buttonLink: '/contact',
      isPopular: false,
      image: 'https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80'
    },
    {
      title: 'Advanced Website',
      nowPrice: '50,000 KSH',
      wasPrice: '70,000 KSH',
      description: 'Comprehensive solution for businesses that need advanced content management capabilities.',
      features: {
        included: [
          'Custom CMS architecture',
          'User-friendly admin dashboard',
          'Content scheduling & management',
          'User role management',
          'Advanced security measures',
          'Third-party integrations',
          'eCommerce capabilities',
          'Training and documentation',
          '3 months of technical support'
        ]
      },
      buttonText: 'Get Started',
      buttonLink: '/contact',
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80'
    },
    {
      title: 'AI Solutions',
      nowPrice: 'Custom',
      wasPrice: 'Custom',
      description: 'Tailored AI automation solutions for businesses looking to streamline operations.',
      features: {
        included: [
          'Custom AI solution development',
          'Integration with existing systems',
          'AI-powered chatbots',
          'Workflow automation',
          'Data analytics dashboards',
          'Machine learning implementation',
          'Personalized consultation',
          'Comprehensive training',
          'Ongoing support and maintenance'
        ]
      },
      buttonText: 'Request Quote',
      buttonLink: '/contact',
      isPopular: false,
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80'
    }
  ];
  
  const faqItems = [
    {
      question: "What is included in the Basic Website package?",
      answer: "Our Basic Website package includes custom design and development, domain registration and hosting, SEO-optimized structure, mobile-friendly responsive design, secure HTTPS implementation, fast-loading optimized performance, basic analytics integration, and social media integration. Pricing ranges from 25,000 to 40,000 KSH depending on your specific requirements."
    },
    {
      question: "How long does it take to develop an Advanced Website?",
      answer: "The timeline for Advanced Website development varies depending on the complexity of your requirements. Typically, our projects take between 4-8 weeks from initial consultation to launch. We'll provide you with a detailed timeline during our project planning phase."
    },
    {
      question: "Do you offer maintenance services after the project is completed?",
      answer: "Yes, we offer ongoing maintenance and support services to ensure your website or application continues to perform optimally. Our Advanced Website package includes 3 months of technical support, and we offer additional maintenance packages for all our services."
    },
    {
      question: "Can you help with migrating content from my existing website?",
      answer: "Absolutely! We provide content migration services to help transition from your existing website to your new one. This can be included in your project scope or added as an additional service depending on the volume and complexity of content."
    },
    {
      question: "How do you determine pricing for custom AI solutions?",
      answer: "Pricing for AI solutions is based on several factors including the complexity of the AI functionality, integration requirements, data volume, and ongoing support needs. We provide custom quotes after an initial consultation to understand your specific requirements and goals."
    },
    {
      question: "Do I have to pay the full amount upfront?",
      answer: "No, we typically work with a milestone-based payment schedule. For most projects, we require a 50% deposit to begin work, with the remaining balance divided into milestones throughout the project. For larger projects, we can create a more detailed payment schedule."
    }
  ];
  
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 border-b border-primary/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-network-pattern opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Limited Time Easter Offer
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent & Flexible <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-0 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. All plans include our commitment to quality and excellence.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Pricing Tiers */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pricingTiers.map((tier, index) => (
              <PricingTier
                key={index}
                title={tier.title}
                nowPrice={tier.nowPrice}
                wasPrice={tier.wasPrice}
                description={tier.description}
                features={tier.features}
                buttonText={tier.buttonText}
                buttonLink={tier.buttonLink}
                isPopular={tier.isPopular}
                image={tier.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-16 bg-secondary/30 border-y border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-muted-foreground">
              Enhance your project with these additional services and features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Digital Marketing",
                description: "Comprehensive digital marketing strategies including SEO, social media, and Google Ads management.",
                price: "Custom",
                icon: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Branding & UI/UX Design",
                description: "Professional branding services including logo design, brand identity, and UI/UX design.",
                price: "Custom",
                icon: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Maintenance & Support",
                description: "Ongoing maintenance, updates, and technical support for your website or application.",
                price: "5,000 KSH monthly",
                icon: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Content Creation",
                description: "Professional content writing and multimedia creation for your website or marketing campaigns.",
                price: "Custom",
                icon: "https://images.unsplash.com/photo-1521931961826-fe48677230a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "E-commerce Integration",
                description: "Add e-commerce functionality to your website with payment processing and inventory management.",
                price: "30,000 KSH",
                icon: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Training & Workshops",
                description: "Comprehensive training sessions and workshops for your team to manage your digital assets.",
                price: "10,000 KSH per session",
                icon: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <div className="h-32 overflow-hidden relative">
                  <ImageWithFallback
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 flex items-end">
                    <h3 className="text-xl font-semibold p-4 text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Starting from</p>
                    <span className="text-primary font-semibold">{service.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground mb-8">
              Don't just take our word for it. Hear from businesses that have transformed their operations with our solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "SavannahPrime delivered exceptional value with their AI solution. Our customer engagement has increased by 40% since implementation.",
                name: "Sarah Wanjiku",
                company: "RetailMaster Kenya",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                quote: "The team's expertise in AI development is unmatched. They understood our business needs perfectly and delivered a solution that exceeded our expectations.",
                name: "Michael Odhiambo",
                company: "Media Insights",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border p-6 rounded-lg"
              >
                <div className="flex items-start mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Have questions? We've got answers to help you make the right decision.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-border rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Quote Section */}
      <section className="py-16 bg-primary/5 border-t border-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us for a custom quote tailored to your specific business requirements and goals.
            </p>
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-3 rounded-md font-medium transition-all hover:shadow-lg hover:shadow-primary/20 inline-block"
            >
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic Pricing Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Looking for a Custom Quote?</h2>
        <p className="text-lg text-muted-foreground mb-4">
          Use our dynamic pricing calculator to estimate the cost of your project.
        </p>
        <Link
          to="/dynamic-pricing"
          className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:shadow-lg"
        >
          Go to Dynamic Pricing
        </Link>
      </section>
    </PageTransition>
  );
};

export default Pricing;
