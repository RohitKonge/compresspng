import { Helmet } from 'react-helmet';
import { Scale, AlertCircle, Ban, Lock } from 'lucide-react';

export default function Terms() {
  const lastUpdated = "May 1, 2025";

  return (
    <>
      <Helmet>
        <title>Terms of Service | PNG Compressor - Usage Terms & Conditions</title>
        <meta name="description" content="Read our terms of service to understand the rules, guidelines, and restrictions for using PNG Compressor's image compression service." />
        <meta name="keywords" content="terms of service, usage terms, service conditions, legal terms, png compression terms" />
        <link rel="canonical" href="https://compresspng.xyz/terms" />
      </Helmet>

      <div className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-secondary-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-secondary-600">
              Please read these terms carefully before using our service.
            </p>
            <p className="text-secondary-500 mt-4">Last updated: {lastUpdated}</p>
          </div>

          <div className="space-y-12">
            <section>
              <div className="flex items-center mb-4">
                <Scale className="w-6 h-6 text-primary-600 mr-2" />
                <h2 className="text-2xl font-semibold text-secondary-900">Agreement to Terms</h2>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-secondary-600 mb-4">
                  By accessing or using PNG Compressor at compresspng.xyz ("the Service"), you agree 
                  to be bound by these Terms of Service ("Terms"). If you disagree with any part of 
                  the terms, then you may not access the Service.
                </p>
                <p className="text-secondary-600">
                  We reserve the right to modify these terms at any time. We will notify users of any 
                  changes by updating the "Last updated" date of these terms and providing notice on 
                  our website. Continued use of the Service after such modifications constitutes your 
                  consent to the changes.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-primary-600 mr-2" />
                <h2 className="text-2xl font-semibold text-secondary-900">Intellectual Property</h2>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-secondary-600 mb-4">
                  The Service and its original content, features, and functionality are owned by 
                  PNG Compressor and are protected by international copyright, trademark, patent, 
                  trade secret, and other intellectual property laws.
                </p>
                <p className="text-secondary-600">
                  You retain all rights to your images. We do not claim ownership over any images 
                  processed through our Service. All image processing occurs in your browser, and 
                  we do not store or transmit your images to our servers.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Ban className="w-6 h-6 text-primary-600 mr-2" />
                <h2 className="text-2xl font-semibold text-secondary-900">Restrictions</h2>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-secondary-600 mb-4">You agree not to:</p>
                <ul className="list-disc list-inside text-secondary-600 space-y-2 mb-4">
                  <li>Use the Service for any unlawful purpose or to violate any laws</li>
                  <li>Upload or process any images that infringe on intellectual property rights</li>
                  <li>Attempt to bypass any limitations or security measures</li>
                  <li>Use the Service in a way that could damage or overburden our systems</li>
                  <li>Reverse engineer or attempt to extract the source code of our Service</li>
                  <li>Use automated methods to access or interact with the Service without permission</li>
                </ul>
                <p className="text-secondary-600">
                  Violation of these restrictions may result in termination of your access to the Service.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <AlertCircle className="w-6 h-6 text-primary-600 mr-2" />
                <h2 className="text-2xl font-semibold text-secondary-900">Disclaimers</h2>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-secondary-600 mb-4">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
                  WHETHER EXPRESS OR IMPLIED. We do not warrant that the Service will be uninterrupted, 
                  secure, or error-free.
                </p>
                <p className="text-secondary-600 mb-4">
                  We are not responsible for any damage or loss of data that may occur during the use 
                  of our Service. You are responsible for maintaining backups of your images before 
                  processing them through our Service.
                </p>
                <p className="text-secondary-600">
                  Some jurisdictions do not allow the exclusion of certain warranties or limitations 
                  on applicable statutory rights, so some of these exclusions may not apply to you.
                </p>
              </div>
            </section>

            <section>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Contact Us</h2>
                <p className="text-secondary-600 mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <ul className="text-secondary-600">
                  <li>By email: legal@compresspng.xyz</li>
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