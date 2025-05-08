import { Helmet } from 'react-helmet';
import { Award, Shield, Clock, Users } from 'lucide-react';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - PNG Compressor | Leading Online Image Compression Tool</title>
        <meta name="description" content="Learn about PNG Compressor - the most trusted online PNG compression tool. Our mission is to make image optimization accessible to everyone with cutting-edge technology." />
        <meta name="keywords" content="about png compressor, image compression history, online compression tool, png optimization experts" />
        <link rel="canonical" href="https://compresspng.xyz/about" />
      </Helmet>

      <div className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-secondary-900 mb-4">
              About PNG Compressor
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We're on a mission to make image optimization accessible to everyone through 
              cutting-edge compression technology that maintains quality while reducing file size.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Our Story</h2>
              <p className="text-secondary-600 mb-4">
                Founded in 2020, PNG Compressor emerged from a simple idea: making high-quality 
                image compression accessible to everyone. Our team of imaging experts and 
                developers worked tirelessly to create an algorithm that perfectly balances 
                compression and quality.
              </p>
              <p className="text-secondary-600">
                Today, we serve millions of users worldwide, helping them optimize their images 
                while maintaining the highest standards of quality and security.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Our Technology</h2>
              <p className="text-secondary-600 mb-4">
                Our proprietary compression algorithm uses advanced techniques to analyze and 
                optimize PNG images. By identifying redundant data patterns and applying smart 
                compression strategies, we achieve remarkable file size reductions while 
                preserving visual quality.
              </p>
              <p className="text-secondary-600">
                All processing happens directly in your browser, ensuring your images never 
                leave your device - maintaining complete privacy and security.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">100M+ Users</h3>
              <p className="text-secondary-600">Trusted by users worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Best in Class</h3>
              <p className="text-secondary-600">Industry-leading compression</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">100% Secure</h3>
              <p className="text-secondary-600">Browser-based processing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">24/7 Available</h3>
              <p className="text-secondary-600">Always ready to serve</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Join Millions of Satisfied Users</h2>
            <p className="text-secondary-600 mb-8 max-w-2xl mx-auto">
              Experience why PNG Compressor is trusted by professionals, businesses, and individuals 
              worldwide. Try our tool today and see the difference in your image optimization workflow.
            </p>
            <a href="/" className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors shadow-sm hover:shadow-md">
              Start Compressing Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}