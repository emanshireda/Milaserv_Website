import React from 'react';

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
                <a className="btn btn-whatsapp btn-lg" href="https://wa.me/201055577579" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-whatsapp me-2"></i> تواصل عبر واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}