import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Users, Calendar, Heart, HandHeart, Mail, Phone, MapPin } from 'lucide-react';
import { getDonationUrl } from '../lib/utils';

const GetInvolvedPage: React.FC = () => {
  const routerNavigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle the form submission here
    alert("Thanks for reaching out! We'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  const volunteerOpportunities = [
    {
      title: 'Trail Maintenance Volunteer',
      description: 'Help maintain and improve hiking trails in our local areas. Perfect for those who love hands-on outdoor work.',
      commitment: '3-6 hours per month',
      icon: Users
    },
    {
      title: 'Event Coordinator',
      description: 'Assist in planning and organizing our community events, workshops, and group hikes.',
      commitment: '5-10 hours per event',
      icon: Calendar
    },
    {
      title: 'Social Media Ambassador',
      description: 'Help spread the word about our mission and events through social media platforms.',
      commitment: '2-4 hours per week',
      icon: Heart
    },
    {
      title: 'Conservation Project Leader',
      description: 'Lead conservation projects and educational programs in local communities.',
      commitment: '8-12 hours per month',
      icon: HandHeart
    }
  ];

  const partnershipPrograms = [
    {
      title: 'Corporate Partnerships',
      description: 'Partner with us to provide team-building experiences and support conservation efforts.',
      benefits: ['Brand visibility', 'Employee engagement', 'CSR impact', 'Networking opportunities']
    },
    {
      title: 'Local Business Collaboration',
      description: 'Work together to promote outdoor activities and sustainable tourism in our region.',
      benefits: ['Local community support', 'Cross-promotion', 'Shared resources', 'Economic impact']
    },
    {
      title: 'Educational Institution Partnerships',
      description: 'Collaborate on educational programs, research projects, and student internships.',
      benefits: ['Educational impact', 'Research opportunities', 'Student involvement', 'Knowledge sharing']
    }
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-green-800 to-blue-900" id="hero">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/IMG_7476.jpeg')`
            }}
          ></div>
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Join our community of outdoor enthusiasts and conservation advocates. 
              Together, we can make a difference in preserving and enjoying our natural spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" onClick={() => routerNavigate('/get-involved#volunteer')}>
                Volunteer Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors" onClick={() => routerNavigate('/get-involved#partnerships')}>
                Partner With Us
              </button>
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities Section */}
        <section className="py-16" id="volunteer">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Volunteer Opportunities
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We offer various ways to get involved, from hands-on conservation work to community outreach. 
                Find the perfect opportunity that matches your interests and schedule.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {volunteerOpportunities.map((opportunity, index) => {
                const IconComponent = opportunity.icon;
                return (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary text-white p-3 rounded-lg">
                        <IconComponent size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {opportunity.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          {opportunity.description}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-medium">Time Commitment:</span>
                          <span className="ml-2">{opportunity.commitment}</span>
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                      Apply Now
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership Programs Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" id="partnerships">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Partnership Programs
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Collaborate with us to create meaningful impact. We welcome partnerships with businesses, 
                educational institutions, and organizations that share our vision.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {partnershipPrograms.map((program, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {program.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">Benefits:</h4>
                    <ul className="space-y-1">
                      {program.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Host an Event Section */}
        <section className="py-16" id="host-event">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Host an Event with Us
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Planning a corporate retreat, team-building event, or community gathering? 
                We can help you create memorable outdoor experiences that inspire and connect people.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    What We Offer
                  </h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      Customized event planning and logistics
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      Experienced guides and facilitators
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      Safety equipment and risk management
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      Educational and team-building activities
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      Catering and accommodation coordination
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Event Types
                  </h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      Corporate team building retreats
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      School and youth group adventures
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      Community conservation projects
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      Private group hiking experiences
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      Wellness and mindfulness retreats
                    </li>
                  </ul>
                </div>
              </div>
              
              <button className="mt-8 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors" onClick={() => routerNavigate('/get-involved#contact')}>
                Request Event Proposal
              </button>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="relative py-16 bg-primary text-white" id="donate">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/IMG_8582.jpeg')`
            }}
          ></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Mission</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Your donation helps us continue our conservation work, maintain trails, 
              organize community events, and educate the next generation of outdoor enthusiasts.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">$25</div>
                <div className="text-sm opacity-90">Maintains 1 mile of trail</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">$100</div>
                <div className="text-sm opacity-90">Funds a community workshop</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">$500</div>
                <div className="text-sm opacity-90">Supports youth education programs</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" onClick={() => {
                const url = getDonationUrl();
                if (url) {
                  window.open(url, '_blank', 'noopener,noreferrer');
                } else {
                  alert("Donation system is currently being set up. Please check back soon!");
                }
              }}>
                Donate Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors" onClick={() => {
                const url = getDonationUrl();
                if (url) {
                  window.open(url, '_blank', 'noopener,noreferrer');
                } else {
                  alert("Monthly donation system is currently being set up. Please check back soon!");
                }
              }}>
                Become Monthly Donor
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" id="contact">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Have questions about getting involved? We'd love to hear from you!
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="text-primary" size={20} />
                      <span className="text-gray-600 dark:text-gray-300">info@darrensadventures.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="text-primary" size={20} />
                      <span className="text-gray-600 dark:text-gray-300">(555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-primary" size={20} />
                      <span className="text-gray-600 dark:text-gray-300">123 Adventure Lane, Nature Valley, CA 90210</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Quick Contact Form
                  </h3>
                  <form className="space-y-4" onSubmit={handleContactSubmit}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      aria-label="Your Name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      aria-label="Your Email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <textarea
                      placeholder="Your Message"
                      aria-label="Your Message"
                      rows={3}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default GetInvolvedPage;
