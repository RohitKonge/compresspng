import { Helmet } from 'react-helmet';
import { FileQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | PNG Compressor</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage to compress your PNG images." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileQuestion className="w-24 h-24 text-primary-500 mx-auto mb-8" />
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-secondary-600 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors shadow-sm hover:shadow-md"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </>
  );
}