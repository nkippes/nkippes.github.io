import { useState, useEffect } from 'react';
import { Mail, Send, Twitter, Linkedin, Instagram, Building2, Home, Calendar } from 'lucide-react';

// Email obfuscation to protect from spam bots
const emailUser = 'nfkippes';
const emailDomain = 'gmail.com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [displayEmail, setDisplayEmail] = useState('');

  // Assemble email on client side to prevent scraping
  useEffect(() => {
    setDisplayEmail(`${emailUser}@${emailDomain}`);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // Generate mailto link dynamically
  const getMailtoLink = () => {
    return `mailto:${emailUser}@${emailDomain}`;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in discussing research collaborations, speaking opportunities, 
            or answering questions about my work. Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-green-600" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-navy-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-navy-600 hover:text-navy-800 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-200 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-200 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-200 outline-none transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="collaboration">Research Collaboration</option>
                    <option value="speaking">Speaking Invitation</option>
                    <option value="student">Student Inquiry</option>
                    <option value="media">Media Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-200 outline-none transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-navy-900 text-white py-4 rounded-lg font-medium hover:bg-navy-800 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Info */}
            <div className="bg-navy-50 p-8 rounded-2xl">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 size={20} className="text-navy-600" />
                  </div>
                  <div>
                    <p className="font-medium text-navy-900">Office</p>
                    <p className="text-gray-600 text-sm">Davis, California</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Home size={20} className="text-navy-600" />
                  </div>
                  <div>
                    <p className="font-medium text-navy-900">Location</p>
                    <p className="text-gray-600 text-sm">Woodland, California</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-navy-600" />
                  </div>
                  <div>
                    <p className="font-medium text-navy-900">
                      {displayEmail || 'Loading...'}
                    </p>
                    <p className="text-gray-600 text-sm">Preferred contact method</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-6">
                Connect Online
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://twitter.com/nfkip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-navy-200 hover:bg-navy-50 transition-all duration-300"
                >
                  <Twitter size={22} className="text-sky-500" />
                  <div>
                    <p className="font-medium text-navy-900">Twitter / X</p>
                    <p className="text-gray-500 text-xs">@nfkip</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/nestorkippes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-navy-200 hover:bg-navy-50 transition-all duration-300"
                >
                  <Linkedin size={22} className="text-blue-700" />
                  <div>
                    <p className="font-medium text-navy-900">LinkedIn</p>
                    <p className="text-gray-500 text-xs">/in/nestorkippes</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/nescalius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-navy-200 hover:bg-navy-50 transition-all duration-300"
                >
                  <Instagram size={22} className="text-pink-600" />
                  <div>
                    <p className="font-medium text-navy-900">Instagram</p>
                    <p className="text-gray-500 text-xs">@nescalius</p>
                  </div>
                </a>

                <a
                  href={getMailtoLink()}
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-navy-200 hover:bg-navy-50 transition-all duration-300"
                >
                  <Mail size={22} className="text-navy-600" />
                  <div>
                    <p className="font-medium text-navy-900">Email</p>
                    <p className="text-gray-500 text-xs">{displayEmail || 'Loading...'}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Book a Call */}
            <a
              href="https://cal.com/nestor-call-scheduler/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-navy-900 to-navy-800 p-8 rounded-2xl text-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <Calendar size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    Book a 15-Minute Call
                  </h3>
                  <p className="text-navy-100 text-sm mb-3">
                    Prefer to chat? Schedule a quick 15-minute video call with me. 
                    I'd be happy to discuss collaborations, answer questions, or explore opportunities.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90 group-hover:text-white">
                    Schedule a call
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>

            {/* Availability */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-serif text-lg font-semibold text-navy-900 mb-2">
                Availability
              </h3>
              <p className="text-gray-600 text-sm">
                I'm typically available for meetings and collaborations during business hours. 
                Please reach out via email to schedule a time to connect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
