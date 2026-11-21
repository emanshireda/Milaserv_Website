import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { publicAsset } from '../utils/publicAsset';
import TeamSection from '../components/TeamSection';

const HEROES = [
  {
    image: 'Images/heroBG.jpg',
    eyebrow: 'Healthcare outsourcing across the Gulf',
    title: ['Extend your team without rebuilding', 'your operations.'],
    description: 'Milaserv builds, trains, and manages dedicated remote teams around your systems and procedures. From patient communications and insurance administration to sales and digital services, we help healthcare organisations across the Gulf work more efficiently, ease daily workloads, and deliver a better experience for patients and customers.',
  },
  {
    image: 'Images/HeroBG2.png',
    eyebrow: 'High quality and precise performance indicators',
    title: ['Patient communications managed', 'with clear service standards'],
    description: 'We manage patient communications across multiple channels, answer enquiries, coordinate appointments, and follow up requests and complaints while monitoring service quality and performance.',
  },
  {
    image: 'Images/HeroBG3.png',
    eyebrow: 'A faster, more accurate revenue cycle',
    title: ['Medical insurance operations', 'and authorisations'],
    description: 'We support insurance eligibility checks, authorisations, claims follow-up and denial management to reduce administrative pressure.',
  },
];

const SERVICES = [
  ['bi-headset', 'Customer Service & Contact Centres', 'Our specialist teams manage patient enquiries and communications across multiple channels, helping you respond promptly and maintain a consistent standard of service.'],
  ['bi-shield-check', 'Medical Insurance Administration', 'Stay on top of medical insurance approvals and claims. We handle follow-ups and coordination with insurers, helping reduce administrative pressure and keep workflows organised.'],
  ['bi-heart-pulse', 'Patient Relationships & Loyalty Programmes', 'Keep patients connected beyond their appointment. We help you build lasting relationships through loyalty programmes and engagement strategies tailored to healthcare.'],
  ['bi-telephone-outbound', 'Patient Outreach & Telesales', 'Our trained teams reach out to existing and prospective patients, explain your services, and help turn interest into bookings that support revenue growth.'],
  ['bi-cart3', 'E-commerce Operations', 'Put a dedicated team behind your online business. We support daily tasks and workflows for online pharmacies and digital health platforms, helping you keep work organised and improve efficiency.'],
  ['bi-graph-up-arrow', 'Digital Marketing', 'Get your services in front of the right audience. From content writing and SEO to advertising campaigns, design, and video editing, we help you build a stronger digital presence and reach more potential customers.'],
  ['bi-camera-video', 'Telehealth Services & Support', 'From booking consultations to following up with patients, we help you manage the delivery of telehealth services. We can also provide licensed doctors to meet your organisation’s needs.'],
];

const SECTORS = [
  ['Hospitals', 'Specialist teams to manage patient communications and enquiries across hospital services.', 'hospital.jpg'],
  ['Medical Centres', 'Coordinated communication across your clinics and departments.', 'medical center.jpg'],
  ['Private Clinics', 'Operational support that reduces the daily workload on your clinic team.', 'Clinic.webp'],
  ['Medical Laboratories', 'Clear communication with laboratory patients and follow-up on their enquiries.', 'lab.jpg'],
  ['Pharmacies', 'Customer communication and operational support for your pharmacy’s online store.', 'Phramcy.jpg'],
  ['Digital Health Platforms', 'Dedicated teams to assist users and improve their experience.', 'platforms.jpg'],
  ['Telehealth Providers', 'Support for virtual consultations, appointment scheduling, and clinical triage to improve the patient experience.', 'healthcare.jpg'],
];

function AnimatedNumber({ value, decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    let frameId;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const duration = reduceMotion ? 0 : 1400;
      const start = performance.now();
      const update = (now) => {
        const progress = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(value * eased);
        if (progress < 1) frameId = requestAnimationFrame(update);
      };
      frameId = requestAnimationFrame(update);
    }, { threshold: 0.2 });
    observer.observe(element);
    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [value]);

  return <span ref={ref}>{new Intl.NumberFormat('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(count)}</span>;
}

export default function HomeEn() {
  const [slide, setSlide] = useState(0);
  const [sector, setSector] = useState(0);
  const essaysRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setSlide((value) => (value + 1) % HEROES.length), 12000);
    return () => clearInterval(timer);
  }, []);

  const hero = HEROES[slide];

  useEffect(() => {
    document.title = 'Healthcare Outsourcing Across the Gulf';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Managed healthcare outsourcing teams for organisations across the Gulf.');
  }, []);

  const scrollEssays = (direction) => {
    const viewport = essaysRef.current;
    if (!viewport) return;
    const card = viewport.querySelector('.essay-card');
    const step = card ? card.offsetWidth + 24 : 340;
    viewport.scrollBy({ left: direction === 'next' ? step : -step, behavior: 'smooth' });
  };

  return (
    <div dir="ltr" lang="en">
      <section className="hero" id="top">
        {HEROES.map((item, index) => (
          <div key={item.image} className={`hero__bg-layer ${slide === index ? 'is-active' : ''}`} aria-hidden="true">
            <div className="hero__bg-art" style={{ backgroundImage: `linear-gradient(115deg, rgba(7,24,44,.82) 0%, rgba(7,24,44,.48) 100%), url("${publicAsset(item.image)}")` }} />
          </div>
        ))}
        <div className="hero__glow" aria-hidden="true" />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div key={slide} className="hero-slide-container hero-text-animate">
            <div className="hero-eyebrow"><span className="hero-eyebrow__dot" /><span>{hero.eyebrow}</span></div>
            <h1>{hero.title[0]}<br />{hero.title[1]}</h1>
            <div className="hero__intro"><p>{hero.description}</p></div>
          </div>
          <div className="hero__actions-wrapper">
            <div className="hero__actions">
              <a className="btn btn-brand-light btn-lg" href="https://calendly.com/milaserv" target="_blank" rel="noopener noreferrer">Book a Consultation</a>
              <Link className="btn btn-outline-light btn-lg" to="/en/services">Explore Our Services</Link>
            </div>
            <div className="hero-dots" aria-label="Hero slides">
              {HEROES.map((item, index) => (
                <button key={item.image} type="button" className={`hero-dot ${slide === index ? 'active' : ''}`} onClick={() => setSlide(index)} aria-label={`Go to slide ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="stats-wrap">
        <div className="container">
          <ul className="stats">
            <li><div><b><AnimatedNumber value={4} /></b><span> years</span></div><p>serving the Gulf market.</p></li>
            <li><div><b><AnimatedNumber value={15} /></b><span> million</span></div><p>interactions a year.</p></li>
            <li><div><b><AnimatedNumber value={4.7} decimals={1} /></b><span>/5</span></div><p>average customer satisfaction.</p></li>
            <li><div><b><AnimatedNumber value={96} /></b><span>%</span></div><p>insurance claims acceptance rate.</p></li>
          </ul>
        </div>
      </div>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="svc-bento-grid">
            <div className="svc-bento-title-box" data-reveal>
              <span className="svc-bento-tag">Our Services</span>
              <h2>One partner for patient services, administration, and growth.</h2>
              <p>Choose the services you need, delivered by specialist teams who understand healthcare.</p>
            </div>
            {SERVICES.map(([icon, title, description], index) => (
              <article className="svc-bento-card" id={`svc-${index + 1}`} data-reveal key={title}>
                <div className="svc-bento__icon"><i className={`bi ${icon}`} aria-hidden="true" /></div>
                <div className="svc-bento__body">
                  <h3>{title}</h3><p>{description}</p>
                  <Link className="link-more" to={`/en/services#svc-${index + 1}`}>Learn More</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-how" id="process">
        <div className="container">
          <header className="section-head text-center mx-auto">
            <span className="how-tag">How We Work</span>
            <h2>We build the team. We manage the delivery.</h2>
            <p>Our approach combines healthcare experience, data analysis, and clear performance measures.</p>
          </header>
          <div className="journey-wrapper">
            <svg className="journey-wave d-none d-lg-block" viewBox="0 0 1100 120" fill="none" preserveAspectRatio="none" aria-hidden="true">
              <circle cx="1075" cy="60" r="6" stroke="#28c2ba" strokeWidth="2" />
              <circle cx="1075" cy="60" r="2" fill="#28c2ba" />
              <path d="M 1060 60 C 920 15, 780 15, 650 60 C 520 105, 380 105, 250 60 C 160 30, 90 45, 35 60" stroke="rgba(40, 194, 186, 0.35)" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M 22 54 L 34 60 L 22 66 Z" fill="#28c2ba" />
            </svg>
            <ol className="journey-steps">
              {[
                ['bi-clipboard2-pulse', 'Understand the work', 'We review your services, workloads, and existing procedures to identify where support is needed. That understanding shapes the operating model and the team we build for you.'],
                ['bi-people', 'Build and train the team', 'We assemble a dedicated remote team and train its members on your systems, policies, and approved procedures, preparing them to work effectively within your organisation.'],
                ['bi-graph-up-arrow', 'Manage, measure, and improve', 'With agreed performance indicators and service levels in place, we manage daily delivery and analyse performance data. Regular reports highlight operational gaps, growth opportunities, and practical recommendations to improve efficiency and support revenue growth.'],
              ].map(([icon, title, description], index) => (
                <li className="journey-step" data-reveal key={title}>
                  <div className="journey-node"><div className="journey-circle"><i className={`bi ${icon}`} aria-hidden="true" /></div><span className="journey-badge">0{index + 1}</span></div>
                  <h3>{title}</h3><p>{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section sectors-section" id="sectors">
        <div className="container">
          <div className="sectors-header mb-5" data-reveal><h2>Who we serve</h2><p>From private clinics to hospitals and digital platforms, we tailor our teams to the demands of your healthcare setting.</p></div>
          <div className="row align-items-stretch g-4 g-xl-5">
            <div className="col-lg-7" data-reveal>
              <ul className="sectors-interactive-list">
                {SECTORS.map(([title, description], index) => (
                  <li key={title} className={`sector-item ${sector === index ? 'active' : ''}`} onMouseEnter={() => setSector(index)} onClick={() => setSector(index)} role="button" tabIndex={0} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') setSector(index); }}>
                    <div className="sector-item__info"><h3>{title}</h3><p>{description}</p></div><div className="sector-item__arrow"><i className="bi bi-arrow-right" /></div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-5" data-reveal>
              <div className="sector-preview-wrapper">
                <img src={publicAsset(`Images/${SECTORS[sector][2]}`)} alt={SECTORS[sector][0]} className="sector-preview-img active" />
                <div className="sector-preview-overlay" />
                <div className="sector-preview-content"><span className="sector-preview-badge">Healthcare sectors</span><h3>{SECTORS[sector][0]}</h3><p>{SECTORS[sector][1]}</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why" id="why">
        <div className="container">
          <header className="section-head" data-reveal><span className="why-tag">Why Milaserv</span><h2>Healthcare experience that shapes the service</h2><p>Our services are shaped by the realities of healthcare, from handling appointment enquiries to managing patient follow-ups and complaints.</p></header>
          <div className="row gy-4 gx-xl-5 align-items-stretch">
            <div className="col-lg-8"><div className="why__grid">
              {[
                ['bi-hospital', 'Healthcare experience', 'We adapt our approach to the specific needs of each organisation.'],
                ['bi-diagram-3', 'Capacity that adapts to demand', 'Expand your team and its responsibilities as workloads grow.'],
                ['bi-sliders2', 'Less daily pressure on your people', 'We take on operational tasks, communications, and follow-ups within the agreed scope.'],
                ['bi-bar-chart-line', 'A clear view of service quality', 'Agreed performance indicators and regular reporting give you visibility into delivery.'],
              ].map(([icon, title, description], index) => (
                <article className="why__item" data-reveal key={title}><div className="why__item-top"><span className="why__num">0{index + 1}</span><i className={`bi ${icon}`} aria-hidden="true" /></div><h3>{title}</h3><p>{description}</p></article>
              ))}
            </div></div>
            <div className="col-lg-4"><article className="why__gov" data-reveal><div className="why__gov-header"><div className="why__gov-icon"><i className="bi bi-shield-lock" aria-hidden="true" /></div><span className="why__gov-badge">Security & confidentiality</span></div><h3>Data governance and confidentiality</h3><p>We handle patient information confidentially and follow the privacy policies and data protection procedures approved and agreed with your organisation.</p></article></div>
          </div>
        </div>
      </section>

      <section className="section section--tint essays-section" id="essays">
        <div className="container">
          <div className="essays-header" data-reveal><div className="essays-header__title"><span className="essays-tag">Insights</span><h2>Latest articles</h2></div><div className="essays-header__controls"><div className="essays-nav"><button type="button" className="essay-arrow" onClick={() => scrollEssays('prev')} aria-label="Previous article"><i className="bi bi-arrow-left" /></button><button type="button" className="essay-arrow" onClick={() => scrollEssays('next')} aria-label="Next article"><i className="bi bi-arrow-right" /></button></div></div></div>
          <div className="essays-viewport" ref={essaysRef} data-reveal>
            <div className="essays-track">
              {[
                ['Essay Banner1.png', 'Healthcare Outsourcing', '15 November 2026', 'Is medical call centre outsourcing limited to answering calls?', 'https://tinyurl.com/5febu9tf'],
                ['Banner2.png', 'Patient Experience', '10 November 2026', 'How does a medical call centre improve patient experience?', 'https://tinyurl.com/y6uce8v8'],
                ['Banner3.png', 'Digital Transformation', '4 November 2026', 'Digital transformation in Saudi healthcare: how have operating services changed?', 'https://shorturl.at/HWPan'],
                ['Banner4.png', 'Healthcare Outsourcing', '28 October 2026', 'Medical call centres for pharmacies: services that can be outsourced', 'https://shorturl.at/iI3Z7'],
                ['Banner5.png', 'Healthcare Outsourcing', '20 October 2026', 'Key medical call centre performance indicators and how to measure efficiency', '#'],
              ].map(([image, category, date, title, link]) => (
                <article className="essay-card" key={title}><div className="essay-card__banner"><img src={publicAsset(`Images/${image}`)} alt="" /><span className="essay-card__cat">{category}</span></div><div className="essay-card__body"><span className="essay-card__date"><i className="bi bi-calendar3" /> {date}</span><h3><a href={link}>{title}</a></h3><a href={link} className="link-more">Read article</a></div></article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <TeamSection isEnglish />
    </div>
  );
}
