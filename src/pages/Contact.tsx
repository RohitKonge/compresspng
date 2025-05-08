import { Helmet } from 'react-helmet';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | PNG Compressor - Get Support & Help</title>
        <meta name="description" content="Get in touch with the PNG Compressor team for support, feedback, or business inquiries. We're here to help you with all your image compression needs." />
        <meta name="keywords" content="contact png compressor, support, help, feedback, business inquiries" />
        <link rel="canonical" href="https://compresspng.xyz/contact" />
      </Helmet>

      <div className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-secondary-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-secondary-600">
              Have a question or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Email Us</h3>
                    <p className="text-secondary-600">
                      <a href="mailto:support@compresspng.xyz" className="hover:text-primary-600">
                        support@compresspng.xyz
                      </a>
                    </p>
                    <p className="text-sm text-secondary-500 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Location</h3>
                    <p className="text-secondary-600">
                      San Francisco, CA
                    </p>
                    <p className="text-sm text-secondary-500 mt-1">
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Phone</h3>
                    <p className="text-secondary-600">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-sm text-secondary-500 mt-1">
                      Mon-Fri 9am-5pm PST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full rounded-lg border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full rounded-lg border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="mt-1 block w-full rounded-lg border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-1 block w-full rounded-lg border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full flex justify-center items-center px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 transition-colors shadow-sm hover:shadow-md"
                    >
                      {status === 'sending' ? (
                        <>
                          <Send className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>

                  {status === 'success' && (
                    <div className="p-4 bg-green-50 text-green-700 rounded-lg">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                      There was an error sending your message. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}