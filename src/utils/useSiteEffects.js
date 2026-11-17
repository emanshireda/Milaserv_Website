// src/utils/useSiteEffects.js
import { useEffect } from 'react';

export function useSiteEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* 1. Header border after scrolling */
    const header = document.getElementById('header');
    const onScroll = () => {
      if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    if (header) {
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    /* 2. Close mobile menu on link click */
    const menu = document.getElementById('mainNav');
    const handleMenuClick = (e) => {
      if (e.target.tagName === 'A' && menu && menu.classList.contains('show') && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    };
    if (menu) menu.addEventListener('click', handleMenuClick);

    /* 3. Reveal [data-reveal] items */
    const revealElements = document.querySelectorAll('[data-reveal]');
    let revealObserver;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('is-visible'));
    } else {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            revealObserver.unobserve(e.target);
          }
        });
      }, { threshold: 0.15 });

      revealElements.forEach((el, i) => {
        el.style.setProperty('--d', `${(i % 3) * 0.1}s`);
        revealObserver.observe(el);
      });
    }

    /* 4. Count-up for metrics */
    const countElements = document.querySelectorAll('[data-count]');
    const countObservers = [];

    function countUp(el) {
      const target = parseFloat(el.dataset.count);
      const decimals = Number(el.dataset.decimals) || 0;
      const fmt = new Intl.NumberFormat('ar-EG', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      });

      const duration = reduceMotion ? 0 : 1600;
      const start = performance.now();

      function tick(now) {
        const progress = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = fmt.format(progress === 1 ? target : target * eased);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    if ('IntersectionObserver' in window) {
      const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            countUp(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      countElements.forEach(el => {
        countObserver.observe(el);
        countObservers.push(countObserver);
      });
    } else {
      countElements.forEach(countUp);
    }

    /* 5. Recent Essays Carousel */
    const essaysViewport = document.getElementById('essaysViewport');
    const essayPrev = document.getElementById('essayPrev');
    const essayNext = document.getElementById('essayNext');
    let autoSlide;

    if (essaysViewport) {
      const getStepWidth = () => {
        const card = essaysViewport.querySelector('.essay-card');
        return card ? card.offsetWidth + 24 : 340;
      };

      const slideEssays = (direction) => {
        const step = getStepWidth();
        const maxScroll = essaysViewport.scrollWidth - essaysViewport.clientWidth;
        const currentScroll = Math.abs(essaysViewport.scrollLeft);

        if (direction === 'next') {
          if (currentScroll >= maxScroll - 10) {
            essaysViewport.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            essaysViewport.scrollBy({ left: -step, behavior: 'smooth' });
          }
        } else {
          if (currentScroll <= 10) {
            essaysViewport.scrollTo({ left: -maxScroll, behavior: 'smooth' });
          } else {
            essaysViewport.scrollBy({ left: step, behavior: 'smooth' });
          }
        }
      };

      const handleNext = () => slideEssays('next');
      const handlePrev = () => slideEssays('prev');

      if (essayNext) essayNext.addEventListener('click', handleNext);
      if (essayPrev) essayPrev.addEventListener('click', handlePrev);

      if (!reduceMotion) {
        autoSlide = setInterval(() => slideEssays('next'), 3500);
        const pauseAutoSlide = () => clearInterval(autoSlide);
        const resumeAutoSlide = () => {
          clearInterval(autoSlide);
          autoSlide = setInterval(() => slideEssays('next'), 3500);
        };

        essaysViewport.addEventListener('mouseenter', pauseAutoSlide);
        essaysViewport.addEventListener('mouseleave', resumeAutoSlide);
      }
    }

    /* Cleanup listeners and observers on unmount */
    return () => {
      if (header) window.removeEventListener('scroll', onScroll);
      if (menu) menu.removeEventListener('click', handleMenuClick);
      if (revealObserver) revealObserver.disconnect();
      countObservers.forEach(obs => obs.disconnect());
      if (autoSlide) clearInterval(autoSlide);
    };
  }, []);
}