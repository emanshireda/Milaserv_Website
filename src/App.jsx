import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import ContactForm from './components/ContactForm';
import HomeEn from './pages/HomeEn';
import ServicesEn from './pages/ServicesEn';
import AboutEn from './pages/AboutEn';
import Sectors from './pages/Sectors';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import ArticleDetail from './pages/ArticleDetail';

function Layout() {
  const { pathname, hash } = useLocation();
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/');
  const isContactPage = pathname === '/contact' || pathname === '/en/contact';
  const isFaqPage = pathname === '/faq' || pathname === '/en/faq';

  useEffect(() => {
    document.documentElement.lang = isEnglish ? 'en' : 'ar';
    document.documentElement.dir = isEnglish ? 'ltr' : 'rtl';
  }, [isEnglish]);

  // 1. Handle route & hash scrolling
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.replace('#', ''));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  // 2. Ported from main.js: trigger [data-reveal] animations on every route
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('[data-reveal]');

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el, i) => {
      el.style.setProperty('--d', `${(i % 3) * 0.1}s`);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#main">{isEnglish ? 'Skip to content' : 'تخطي إلى المحتوى'}</a>
      <Navbar />
      <main id="main" tabIndex="-1">
        <Outlet />
        {!isContactPage && !isFaqPage && <FinalCTA />}
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/en" element={<HomeEn />} />
          <Route path="/en/services" element={<ServicesEn />} />
          <Route path="/en/contact" element={<ContactForm />} />
          <Route path="/en/about" element={<AboutEn />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/en/sectors" element={<Sectors initialLang="en" />} />
          <Route path="/faq" element={<FAQ initialLang="ar" />} />
          <Route path="/en/faq" element={<FAQ initialLang="en" />} />
          <Route path="/en/blog" element={<Navigate to="/blog" replace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<ArticleDetail />} />

          {/* Fallback to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}