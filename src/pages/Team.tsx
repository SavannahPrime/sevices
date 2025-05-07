
import { useState } from 'react';
import { Github, Linkedin, Mail, Users, Twitter } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import ImageWithFallback from '@/components/ui/image-with-fallback';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Team members data with expanded information
const teamMembers = [
  {
    id: 1,
    name: "Fredrick Saruni",
    role: "Founder & CEO",
    bio: "Visionary AI entrepreneur and tech innovator with over 10 years of expertise in machine learning and web development. Fredrick leads SavannahPrime's mission to bring cutting-edge AI solutions to businesses across Kenya and East Africa.",
    longBio: "Fredrick is a passionate AI advocate with a background in Computer Science and Machine Learning. He founded SavannahPrime with a vision to democratize access to advanced AI technologies for African businesses. His work focuses on developing accessible, culturally relevant AI solutions that address local challenges.",
    expertise: ["Machine Learning", "AI Development", "Web Development", "Business Strategy"],
    education: "MSc in Artificial Intelligence, University of Nairobi",
    imageUrl: "/lovable-uploads/0b78033a-2f9f-4d1f-bfae-08c84c8ba8f2.png",
    socialLinks: {
      linkedin: "https://linkedin.com/in/fredricksaruni",
      twitter: "https://twitter.com/fredricksaruni",
      github: "https://github.com/fredricksaruni",
      email: "fredrick@savannahprimeagency.tech"
    }
  },
  {
    id: 2,
    name: "Alex Weru",
    role: "Product Manager & UI/UX Designer",
    bio: "Expert in crafting user-centric designs and managing product lifecycles to deliver exceptional user experiences that delight customers and drive business growth.",
    longBio: "Alex brings over 8 years of experience in product management and UI/UX design. His human-centered approach to design has helped numerous clients transform their digital presence with intuitive, accessible interfaces that solve real user problems.",
    expertise: ["Product Management", "User Experience", "Interface Design", "Design Thinking"],
    education: "Bachelor of Design, Kenya Institute of Design",
    imageUrl: "/lovable-uploads/Alex.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/alexweru",
      twitter: "https://twitter.com/alexweru",
      github: "https://github.com/alexweru",
      email: "alex@savannahprimeagency.tech"
    }
  },
  {
    id: 3,
    name: "Mercy Wanjiru",
    role: "AI Research Lead",
    bio: "Pioneering researcher specializing in natural language processing and machine learning models adapted for African languages and contexts.",
    longBio: "With a PhD in Computational Linguistics, Mercy leads our research initiatives in developing AI models that understand and process African languages. Her work on the Simba LLM project is breaking new ground in making AI accessible in local dialects.",
    expertise: ["Natural Language Processing", "Machine Learning", "Computational Linguistics", "AI Ethics"],
    education: "PhD in Computational Linguistics, University of Cape Town",
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    socialLinks: {
      linkedin: "https://linkedin.com/in/mercywanjiru",
      twitter: "https://twitter.com/mercywanjiru",
      github: "https://github.com/mercywanjiru",
      email: "mercy@savannahprimeagency.tech"
    }
  },
  {
    id: 4,
    name: "Daniel Omondi",
    role: "Lead Developer",
    bio: "Full-stack developer with expertise in AI integration, cloud architecture, and building scalable web applications.",
    longBio: "Daniel has been developing software for over 6 years, with a focus on integrating AI services into web applications. He has led the technical implementation of numerous projects, ensuring they're built on scalable, maintainable architectures.",
    expertise: ["Full-stack Development", "AI Integration", "Cloud Services", "API Development"],
    education: "BSc in Computer Science, Strathmore University",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    socialLinks: {
      linkedin: "https://linkedin.com/in/danielomondi",
      twitter: "https://twitter.com/danielomondi",
      github: "https://github.com/danielomondi",
      email: "daniel@savannahprimeagency.tech"
    }
  }
];

const Team = () => {
  const [expandedMemberId, setExpandedMemberId] = useState<number | null>(null);
  
  const toggleExpandMember = (id: number) => {
    setExpandedMemberId(expandedMemberId === id ? null : id);
  };
  
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-primary/5 border-b border-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" id="team-heading">
              Our Team
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Meet the brilliant minds behind SavannahPrime's innovative AI solutions and web development expertise.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/contact" 
                className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Members Grid */}
      <section className="py-16 md:py-24 bg-background" aria-labelledby="team-members-heading">
        <div className="container-custom">
          <h2 id="team-members-heading" className="sr-only">Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <Card className={`overflow-hidden h-full transition-all duration-300 hover:shadow-md ${expandedMemberId === member.id ? 'border-primary' : 'border-border'}`}>
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="md:w-1/3 h-full">
                        <div className="aspect-square overflow-hidden bg-secondary/30">
                          <ImageWithFallback
                            src={member.imageUrl}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6 flex flex-col">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                          <p className="text-primary font-medium mb-3">{member.role}</p>
                          
                          <p className="text-muted-foreground mb-4">
                            {expandedMemberId === member.id ? member.longBio : member.bio}
                          </p>
                          
                          {expandedMemberId === member.id && (
                            <div className="mb-4 space-y-3">
                              <div>
                                <h4 className="font-semibold mb-1">Expertise</h4>
                                <div className="flex flex-wrap gap-2">
                                  {member.expertise.map((skill, i) => (
                                    <span key={i} className="px-2 py-1 bg-secondary text-xs rounded-full">
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-1">Education</h4>
                                <p className="text-sm text-muted-foreground">{member.education}</p>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className="mt-auto pt-4 flex flex-wrap justify-between items-center">
                          <div className="flex space-x-2">
                            {member.socialLinks.linkedin && (
                              <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn profile`} className="p-2 rounded-full hover:bg-secondary transition-colors">
                                <Linkedin className="h-4 w-4" />
                              </a>
                            )}
                            {member.socialLinks.twitter && (
                              <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s Twitter profile`} className="p-2 rounded-full hover:bg-secondary transition-colors">
                                <Twitter className="h-4 w-4" />
                              </a>
                            )}
                            {member.socialLinks.github && (
                              <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s GitHub profile`} className="p-2 rounded-full hover:bg-secondary transition-colors">
                                <GitHub className="h-4 w-4" />
                              </a>
                            )}
                            {member.socialLinks.email && (
                              <a href={`mailto:${member.socialLinks.email}`} aria-label={`Email ${member.name}`} className="p-2 rounded-full hover:bg-secondary transition-colors">
                                <Mail className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExpandMember(member.id)}
                            aria-expanded={expandedMemberId === member.id}
                            aria-controls={`member-details-${member.id}`}
                          >
                            {expandedMemberId === member.id ? "Show Less" : "Show More"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Values Section */}
      <section className="py-16 bg-secondary/30 border-y border-border" aria-labelledby="team-values-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="team-values-heading" className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">
              The principles that guide our work and define our approach to creating innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-card p-6 rounded-lg border border-border"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Client Partnership</h3>
              <p className="text-muted-foreground">
                We view our clients as partners, collaborating closely to understand their unique needs and deliver tailored solutions that drive real value.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-card p-6 rounded-lg border border-border"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation First</h3>
              <p className="text-muted-foreground">
                We constantly push the boundaries of what's possible with AI and web technologies, staying at the forefront of innovation to deliver cutting-edge solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-card p-6 rounded-lg border border-border"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="m2 9 3-3 3 3" />
                  <path d="M13 18h7a2 2 0 0 0 2-2v-5" />
                  <path d="M22 11V6a2 2 0 0 0-2-2h-5" />
                  <path d="M10 18H6a2 2 0 0 1-2-2v-5" />
                  <path d="M5 13V6a2 2 0 0 1 2-2h5" />
                  <path d="m18 15 3 3 3-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Local Impact</h3>
              <p className="text-muted-foreground">
                We're committed to developing solutions that address the unique challenges of African businesses and contribute to the growth of our local tech ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Join Our Team CTA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-primary/5 border border-primary/20 rounded-xl p-8 md:p-12">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Join Our Team</h3>
                <p className="text-muted-foreground mb-0">
                  We're always looking for talented individuals who are passionate about AI and web development.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="/contact"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-all"
                >
                  View Opportunities
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/5 border-t border-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Want to Work With Our Team?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our team of experts can help bring your vision to life with our AI and web development expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-3 rounded-md font-medium transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Contact Us Today
              </Link>
              <Link
                to="/projects"
                className="border border-primary/30 text-primary px-8 py-3 rounded-md font-medium transition-all hover:bg-primary hover:text-white"
              >
                See Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Team;
