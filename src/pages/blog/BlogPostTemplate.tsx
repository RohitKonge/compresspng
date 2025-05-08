import { Helmet } from 'react-helmet';
import { Calendar, User, Tag, Share2 } from 'lucide-react';

interface BlogPostProps {
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  content: string;
  readTime: string;
  featuredImage?: string;
}

export default function BlogPostTemplate({
  title,
  description,
  author,
  date,
  tags,
  content,
  readTime,
  featuredImage
}: BlogPostProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author
    },
    "datePublished": date,
    "image": featuredImage,
    "publisher": {
      "@type": "Organization",
      "name": "PNG Compressor",
      "logo": {
        "@type": "ImageObject",
        "url": "https://compresspng.xyz/png.svg"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{title} | PNG Compressor Blog</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="keywords" content={tags.join(", ")} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {featuredImage && <meta property="og:image" content={featuredImage} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {featuredImage && <meta name="twitter:image" content={featuredImage} />}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {featuredImage && (
          <img
            src={featuredImage}
            alt={title}
            className="w-full h-[400px] object-cover rounded-2xl mb-8"
          />
        )}

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">
            {title}
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-secondary-600 mb-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {date}
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {author}
            </div>
            <div className="flex items-center">
              <Tag className="w-4 h-4 mr-2" />
              {readTime} read
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-lg max-w-none prose-primary mb-12">
          {content}
        </div>

        <footer className="border-t border-secondary-200 pt-8">
          <div className="flex justify-between items-center">
            <div className="text-sm text-secondary-600">
              Did you find this article helpful?
            </div>
            <div className="flex space-x-4">
              <button
                className="flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>
          </div>
        </footer>
      </article>
    </>
  );
}