import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function FinalCTA() {
  const { pathname } = useLocation();
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/');
  const base = isEnglish ? '/en' : '';
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="cta" data-reveal>
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <span className="cta-tag">{isEnglish ? 'Start the partnership today' : 'ابدأ الشراكة اليوم'}</span>
              <h2>{isEnglish ? "Let's put the right support in place." : 'جاهز لتخفيف العبء التشغيلي عن منشأتك؟'}</h2>
              <p>{isEnglish ? "Tell us about your priorities and where your team needs help. We'll work with you to identify the services that fit your organisation." : 'تحدث مع فريقنا لنحدد معًا الخدمات الأنسب لاحتياجات منشأتك الصحية.'}</p>
            </div>
            <div className="col-lg-5 text-lg-end">
              <div className="cta__actions">
                <a className="btn btn-brand-light btn-lg" href="https://calendly.com/milaserv" target="_blank" rel="noopener noreferrer">
                  <i className={isEnglish ? 'bi bi-calendar-check' : 'bi bi-calendar-check me-2'}></i> {isEnglish ? 'Book a Consultation' : 'احجز استشارة'}
                </a>
                <Link to={`${base}/contact`} className="btn btn-brand btn-lg">

                  {isEnglish ? 'Contact Us' : 'تواصل معنا'}
                  <i
                    className={`bi ${isEnglish ? 'bi-arrow-up-right' : 'bi-arrow-up-left'}`}
                    style={!isEnglish ? { marginInlineStart: '12px' } : undefined}
                  ></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}