import { Helmet } from 'react-helmet';
import { Shield, Eye, Cookie, BarChart } from 'lucide-react';

export default function Privacy() {
  const lastUpdated = "May 1, 2025";

  return (
    <>
      <Helmet>
        <title>Privacy Policy | PNG Compressor - Your Data Security & Privacy</title>
        <meta name="description" content="Read our privacy policy to understand how PNG Compressor handles your data, uses cookies, and protects your privacy while using our image compression service." />
        <meta name="keywords" content="privacy policy, data protection, cookie policy, user privacy, image compression privacy" />
        <link rel="canonical" href="https://compresspng.xyz/privacy" />
      </Helmet>

      <div className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-secondary-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-secondary-600">
              Your privacy is important to us. This policy explains how we handle your data.
            </p>
            <p className="text-secondary-500 mt-4">Last updated: {lastUpdated}</p>
          </div>

          <div className="space-y-12">
            <section>
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-primary-600 mr-2" />
                <h2 className="text-2xl font-semibold text-secondary-900">Introduction</h2>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-secondary-600 mb-4">
                  PNG Compressor ("we", "our", or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, and safeguard your information 
                  when you visit our website (compresspng.xyz) and use our image compression services.
                </p>
                <p className="text-secondary-600">
                  By using our service, you agree to the collection and use of information in 
                  accordance with this policy. We will not use or share your information with 
                  anyone except as described in this Privacy Policy.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-primary-600 mr-2" />
                <h2 className="text-2xl font-semibold text-secondary-900">Information Collection</h2>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">Images and Files</h3>
                <p className="text-secondary-600 mb-4">
                  All image processing occurs directly in your browser. We do not store, collect, 
                  or transmit your images to any servers. Your files never leave your device during 
                  the compression process.
                </p>

                <h3 className="text-lg font-semibold text-secondary-900 mb-3">Usage Data</h3>
                <p className="text-secondary-600 mb-4">
                  We collect anonymous usage data to improve our service, including:
                </p>
                <ul className="list-disc list-inside text-secondary-600 mb-4">
                  <li>Browser type and version</li>
                  <li>Usage patterns and features accessed</li>
                  <li>Device type and operating system</li>
                  <li>Anonymous compression statistics</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Cookie className="w-6 h-6 text-primary-600 mr-2" />
                <h2 className="text-2xl font-semibold text-secondary-900">Cookies</h2>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-secondary-600 mb-4">
                  We use cookies and similar tracking technologies to track activity on our service 
                  and hold certain information. Cookies are files with small amount of data that 
                  may include an anonymous unique identifier.
                </p>
                <p className="text-secondary-600 mb-4">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie 
                  is being sent. However, if you do not accept cookies, you may not be able to use 
                  some portions of our service.
                </p>
                <p className="text-secondary-600">
                  We use the following types of cookies:
                </p>
                <ul className="list-disc list-inside text-secondary-600 mt-2">
                  <li>Essential cookies for service functionality</li>
                  <li>Analytics cookies to understand usage patterns</li>
                  <li>Preference cookies to remember your settings</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <BarChart className="w-6 h-6 text-primary-600 mr-2" />
                <h2 className="text-2xl font-semibold text-secondary-900">Analytics</h2>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-secondary-600 mb-4">
                  We use Google Analytics to monitor and analyze the use of our service. Google 
                  Analytics is a web analytics service that tracks and reports website traffic. 
                  This data is shared with other Google services. Google may use the collected 
                  data to contextualize and personalize the ads of its own advertising network.
                </p>
                <p className="text-secondary-600 mb-4">
                  You can opt-out of having your activity on the service available to Google 
                  Analytics by installing the Google Analytics opt-out browser add-on.
                </p>
                <p className="text-secondary-600">
                  For more information on the privacy practices of Google, please visit the 
                  Google Privacy & Terms web page.
                </p>
              </div>
            </section>

            <section>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Contact Us</h2>
                <p className="text-secondary-600 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="text-secondary-600">
                  <li>By email: privacy@compresspng.xyz</li>
                  <li>By visiting our contact page: <a href="/contact" className="text-primary-600 hover:text-primary-700">Contact Form</a></li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}