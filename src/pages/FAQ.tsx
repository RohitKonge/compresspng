import { Helmet } from 'react-helmet';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does PNG compression work?",
    answer: "Our PNG compression uses advanced algorithms that analyze image data to remove redundant information while preserving visual quality. The process involves optimizing color palettes, reducing bit depth where possible, and applying lossless compression techniques that maintain image transparency and quality."
  },
  {
    question: "Is there a file size limit?",
    answer: "Yes, we accept PNG files up to 50MB per image. For larger files, we recommend splitting them into smaller parts or contacting our support for enterprise solutions that can handle bigger file sizes."
  },
  {
    question: "Will I lose image quality after compression?",
    answer: "No, our compression algorithm is designed to maintain visual quality while reducing file size. We use intelligent optimization techniques that preserve important image details, especially in areas with text or sharp edges."
  },
  {
    question: "Is my data secure when using your service?",
    answer: "Absolutely! All image processing happens directly in your browser - your files never leave your device. We don't store any of your images on our servers, ensuring complete privacy and security of your data."
  },
  {
    question: "Can I compress multiple images at once?",
    answer: "Yes! Our bulk compression feature allows you to upload and compress multiple PNG files simultaneously. You can then download them individually or as a single ZIP archive."
  },
  {
    question: "Do you support other image formats?",
    answer: "Currently, we specialize in PNG compression to provide the best possible results for this format. However, we're working on adding support for other formats like JPEG, WebP, and SVG in future updates."
  },
  {
    question: "What compression ratio can I expect?",
    answer: "Compression results vary depending on the image content and original optimization level. Typically, users see file size reductions of 40-80% while maintaining visual quality. Complex images with lots of colors might see lower compression ratios to preserve quality."
  },
  {
    question: "Can I automate the compression process?",
    answer: "Yes! We offer an API for developers who need to automate image compression. Check out our API documentation for integration details, or contact us for enterprise solutions with higher usage limits."
  },
  {
    question: "Is this service really free?",
    answer: "Yes, our basic compression service is completely free to use with no registration required. We also offer premium features for businesses and power users who need additional capabilities or higher usage limits."
  },
  {
    question: "What happens to the transparency in PNG files?",
    answer: "Our compression algorithm fully preserves PNG transparency (alpha channel). You can compress PNG files with transparency without worrying about losing the transparent background or semi-transparent elements."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | PNG Compressor - Image Compression Guide</title>
        <meta name="description" content="Get answers to common questions about PNG compression, file size limits, image quality, security, and more. Learn how to optimize your images effectively." />
        <meta name="keywords" content="png compression faq, image optimization guide, png compressor help, image compression questions" />
        <link rel="canonical" href="https://compresspng.xyz/faq" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-secondary-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-secondary-600">
              Everything you need to know about PNG compression and our service
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h2 className="text-lg font-semibold text-secondary-900">{faq.question}</h2>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-secondary-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-secondary-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-secondary-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Still have questions?</h2>
            <p className="text-secondary-600 mb-8">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors shadow-sm hover:shadow-md"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </>
  );
}