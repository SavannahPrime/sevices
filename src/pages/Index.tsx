
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import TestimonialCard from '@/components/TestimonialCard';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import AILab from '@/components/AILab';
import StatsSection from '@/components/StatsSection';
import ServiceCard from '@/components/ServiceCard';
import { Cpu, Code, Database, BarChart4, PenTool, MessageSquare as MessageIcon } from 'lucide-react';

const Index = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Services Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Premium Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI & Automation <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-0 max-w-3xl mx-auto">
              We offer a comprehensive range of AI and automation solutions to transform 
              your business operations and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="AI Application Development"
              description="Custom AI applications tailored for your business needs, from intelligent chatbots to predictive analytics systems."
              icon={<Cpu className="h-6 w-6" />}
              link="/services"
              features={[
                "Custom AI model development",
                "Intelligent automation workflows",
                "Scalable cloud infrastructure"
              ]}
            />
            
            <ServiceCard
              title="ML Solutions & Integration"
              description="Machine learning solutions that integrate seamlessly with your existing systems and provide actionable insights."
              icon={<Code className="h-6 w-6" />}
              link="/services"
              features={[
                "Custom ML model training",
                "API development and integration",
                "Data pipeline optimization"
              ]}
            />
            
            <ServiceCard
              title="Data Analytics & AI"
              description="Transform your raw data into valuable business intelligence with our advanced analytics and AI solutions."
              icon={<Database className="h-6 w-6" />}
              link="/services"
              features={[
                "Predictive analytics models",
                "Real-time data processing",
                "Custom dashboard development"
              ]}
            />
            
            <ServiceCard
              title="Conversational AI"
              description="Create sophisticated conversational AI solutions for customer service, sales, and internal operations."
              icon={<MessageIcon className="h-6 w-6" />}
              link="/services"
              features={[
                "Natural language processing",
                "Custom knowledge base integration",
                "Multi-channel deployment"
              ]}
            />
            
            <ServiceCard
              title="Business Intelligence"
              description="Advanced BI solutions that leverage AI to provide deeper insights and drive better business decisions."
              icon={<BarChart4 className="h-6 w-6" />}
              link="/services"
              features={[
                "Interactive visualization tools",
                "Automated reporting systems",
                "Decision support systems"
              ]}
            />
            
            <ServiceCard
              title="AI UI/UX Design"
              description="User-centered design services for AI applications that ensure intuitive and effective user experiences."
              icon={<PenTool className="h-6 w-6" />}
              link="/services"
              features={[
                "AI interface design",
                "User journey optimization",
                "Accessible AI interactions"
              ]}
            />
          </div>
        </div>
      </section>
      
      {/* AI Technology Lab */}
      <AILab />
      
      {/* Process Section */}
      <ProcessSection />
      
      {/* Testimonials Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Client Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground mb-0 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="SavannahPrime's AI solution completely transformed our customer service operations, reducing response times by 70% and increasing customer satisfaction."
              name="David Kamau"
              company="TechSolutions Ltd"
              rating={5}
            />
            
            <TestimonialCard
              quote="The automated data analytics platform they built has given us insights we never thought possible. Our decision-making is faster and more accurate now."
              name="Sarah Wanjiku"
              company="RetailMaster Kenya"
              rating={5}
            />
            
            <TestimonialCard
              quote="Working with SavannahPrime was seamless. Their AI integration with our existing systems was smooth, and the results have exceeded our expectations."
              name="Michael Odhiambo"
              company="Media Insights"
              rating={4}
            />
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              to="/reviews" 
              className="inline-flex items-center text-primary hover:underline"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Read more reviews or share your experience
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5 border-y border-primary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and automation solutions can help your business unlock new opportunities and drive growth.
            </p>
            <Link
              to="/contact"
              className="button-hover-effect bg-primary text-white px-8 py-3 rounded-md font-medium text-lg hover:shadow-lg hover:shadow-primary/20 transition-all inline-block"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
