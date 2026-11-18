import React from 'react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="cta" data-reveal>
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <span className="cta-tag">ابدأ الشراكة اليوم</span>
              <h2>جاهز لتخفيف العبء التشغيلي عن منشأتك؟</h2>
              <p>تحدث مع فريقنا لنحدد معًا الخدمات الأنسب لاحتياجات منشأتك الصحية.</p>
            </div>
            <div className="col-lg-5 text-lg-end">
              <div className="cta__actions">
                <a className="btn btn-brand-light btn-lg" href="https://calendly.com/milaserv" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-calendar-check me-2"></i> احجز استشارة
                </a>
                <Link to="/contact" target="_blank" className="btn btn-brand btn-lg">

                  تواصل معنا
                  <i className="bi bi-arrow-up-left" style={{ marginInlineStart: '12px' }}></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}