import { Link } from 'react-router-dom';
import { Image, Info, MessageCircle, FileText, Phone, Book } from 'lucide-react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <Image className="w-8 h-8 text-primary-600" />
                <span className="ml-2 text-xl font-bold text-secondary-900">PNG Compressor</span>
              </Link>
            </div>
            <div className="hidden sm:flex sm:space-x-8 items-center">
              <Link to="/about" className="text-secondary-600 hover:text-secondary-900 flex items-center">
                <Info className="w-4 h-4 mr-1" />
                About
              </Link>
              <Link to="/faq" className="text-secondary-600 hover:text-secondary-900 flex items-center">
                <MessageCircle className="w-4 h-4 mr-1" />
                FAQ
              </Link>
              <Link to="/blog" className="text-secondary-600 hover:text-secondary-900 flex items-center">
                <Book className="w-4 h-4 mr-1" />
                Blog
              </Link>
              <Link to="/terms" className="text-secondary-600 hover:text-secondary-900 flex items-center">
                <FileText className="w-4 h-4 mr-1" />
                Terms
              </Link>
              <Link to="/contact" className="text-secondary-600 hover:text-secondary-900 flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-secondary-900 tracking-wider uppercase">Company</h3>
              <div className="mt-4 space-y-2">
                <Link to="/about" className="text-secondary-600 hover:text-secondary-900 block">About Us</Link>
                <Link to="/contact" className="text-secondary-600 hover:text-secondary-900 block">Contact</Link>
                <Link to="/blog" className="text-secondary-600 hover:text-secondary-900 block">Blog</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-secondary-900 tracking-wider uppercase">Legal</h3>
              <div className="mt-4 space-y-2">
                <Link to="/privacy" className="text-secondary-600 hover:text-secondary-900 block">Privacy Policy</Link>
                <Link to="/terms" className="text-secondary-600 hover:text-secondary-900 block">Terms of Service</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-secondary-900 tracking-wider uppercase">Support</h3>
              <div className="mt-4 space-y-2">
                <Link to="/faq" className="text-secondary-600 hover:text-secondary-900 block">FAQ</Link>
                <a href="mailto:support@compresspng.xyz" className="text-secondary-600 hover:text-secondary-900 block">Email Support</a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-secondary-900 tracking-wider uppercase">Connect</h3>
              <div className="mt-4 space-y-2">
                <a href="https://twitter.com/compresspng" target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-secondary-900 block">Twitter</a>
                <a href="https://github.com/compresspng" target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-secondary-900 block">GitHub</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-secondary-500">© {new Date().getFullYear()} PNG Compressor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}