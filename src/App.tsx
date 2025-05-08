import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import FAQ from './pages/FAQ.tsx';
import Privacy from './pages/Privacy.tsx';
import Terms from './pages/Terms.tsx';
import Contact from './pages/Contact.tsx';
import NotFound from './pages/NotFound.tsx';
import BlogIndex from './pages/blog/index.tsx';
import BlogPost from './pages/blog/BlogPost.tsx';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0EA5E9" />
        <link rel="manifest" href="/manifest.json" />
      </Helmet>
      
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;