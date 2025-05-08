import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  featuredImage?: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    slug: 'png-compression-guide-2025',
    title: 'Complete Guide to PNG Compression in 2025',
    description: 'Learn everything about PNG compression, from basic concepts to advanced techniques. Optimize your images like a pro.',
    author: 'Adam Smith',
    date: 'May 8, 2025',
    readTime: '8 min',
    featuredImage: 'https://images.unsplash.com/photo-1533561052604-c3beb6d55b8d?w=1600',
    tags: ['Guide', 'PNG Compression', 'Optimization']
  },
  {
    slug: 'maximize-image-quality',
    title: 'How to Maximize Image Quality While Reducing File Size',
    description: 'Discover the best practices for maintaining image quality while achieving optimal compression ratios.',
    author: 'Sarah Johnson',
    date: 'May 7, 2025',
    readTime: '6 min',
    featuredImage: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=1600',
    tags: ['Tips', 'Image Quality', 'Best Practices']
  }
];

export default function BlogIndex() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "PNG Compressor Blog",
    "description": "Expert tips, guides, and insights about PNG compression and image optimization.",
    "publisher": {
      "@type": "Organization",
      "name": "PNG Compressor",
      "logo": {
        "@type": "ImageObject",
        "url": "https://compresspng.xyz/png.svg"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "datePublished": post.date,
      "image": post.featuredImage
    }))
  };

  return (
    <>
      <Helmet>
        <title>Image Compression Blog | PNG Compressor</title>
        <meta 
          name="description" 
          content="Discover expert tips, guides, and insights about PNG compression and image optimization. Stay updated with the latest techniques and best practices." 
        />
        <meta 
          name="keywords" 
          content="png compression blog, image optimization guides, compression techniques, image optimization tips" 
        />
        <link rel="canonical" href="https://compresspng.xyz/blog" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h1 className="text-4xl font-bold text-secondary-900 mb-4">
              Image Compression Blog
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Expert insights, guides, and tips about PNG compression and image optimization
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {blogPosts.map((post) => (
              <article 
                key={post.slug} 
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {post.featuredImage && (
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-2xl font-bold text-secondary-900 mb-2">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="hover:text-primary-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-secondary-600 mb-4">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-secondary-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </span>
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <p className="text-secondary-600 mb-8">
              Subscribe to our newsletter to get the latest articles and updates directly in your inbox.
            </p>
            <form className="max-w-lg mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors shadow-sm hover:shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}