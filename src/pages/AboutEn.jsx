import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { publicAsset } from '../utils/publicAsset';
import AboutTeamList from '../components/AboutTeamList';

const STATS = [
  ['01', 'Customer interactions to date', '15M+', 'Customer interactions'],
  ['02', 'Operational service delivery in the Gulf', '4+ years', 'Gulf operations'],
  ['03', 'Healthcare management experience in our leadership team', '15+ years', 'Leadership experience'],
  ['04', 'Specialists trained in healthcare operations', '300+', 'Healthcare specialists'],
  ['05', 'Adherence to agreed service levels (SLA)', '97%', 'SLA adherence'],
  ['06', 'Customer satisfaction (CSAT) rating', '4.76/5', 'Customer satisfaction'],
];

const ENTITIES = ['Hospitals', 'Medical centres', 'Clinics', 'Laboratories', 'Pharmacies', 'Healthcare platforms', 'Telehealth providers'];
const SUPPORT = ['Customer Service & Contact Centres', 'Medical Insurance Administration', 'Customer Relationships & Loyalty Programmes', 'Telesales Teams', 'E-commerce Operations', 'Digital Marketing', 'Telehealth Operations & Support'];

export default function AboutEn() {
  const [activeStat, setActiveStat] = useState(0);
  const [activeSection, setActiveSection] = useState('numbers');
  const current = STATS[activeStat];

  useEffect(() => {
    document.title = 'About Milaserv';
  }, []);

  useEffect(() => {
    const sectionIds = ['numbers', 'operating-model', 'healthcare-scope', 'aboutteamlist'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section) => section !== null);

    if (!('IntersectionObserver' in window) || sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div dir="ltr" lang="en" className="about-page">
      <section className="hero about-hero-banner" id="top">
        <div className="hero__bg-layer is-active" aria-hidden="true">
          <div className="hero__bg-art" style={{ backgroundImage: `linear-gradient(115deg, rgba(7,24,44,.82) 0%, rgba(7,24,44,.48) 100%), url("${publicAsset('Images/HeroBG4.png')}")` }} />
        </div>
        <div className="hero__glow" aria-hidden="true" />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <nav className="crumbs" aria-label="Breadcrumb"><ol><li><Link to="/en">Home</Link></li><li><span aria-current="page">About Us</span></li></ol></nav>
          <div className="about-hero-content hero-text-animate">
            <div className="hero-eyebrow"><span className="hero-eyebrow__dot" /><span>About Milaserv</span></div>
            <h1>Specialist teams for the business of healthcare.</h1>
            <div className="about-hero-paragraphs">
              <p>Milaserv provides outsourced operational support for healthcare organisations across Saudi Arabia and the Gulf. We build and manage dedicated remote teams that work as an extension of our clients’ organisations, helping improve efficiency and the customer experience.</p>
              <p>We have delivered operational services in the Gulf for more than four years. Our leadership team brings over 15 years of healthcare management experience, shaping a service model that combines sector knowledge, dedicated teams and ongoing performance management.</p>
            </div>
            <div className="about-hero-actions"><a className="btn btn-brand-light btn-lg" href="https://calendly.com/milaserv" target="_blank" rel="noopener noreferrer">Book a Consultation</a><Link className="btn btn-outline-light btn-lg" to="/en/services">Explore Our Services</Link></div>
          </div>
        </div>
      </section>

      <nav className="svc-nav about-nav" aria-label="About sections">
        <div className="container"><ul>
          <li><a href="#numbers" className={activeSection === 'numbers' ? 'is-active' : ''} aria-current={activeSection === 'numbers' ? 'true' : undefined}><i className="bi bi-bar-chart-line" />Milaserv in numbers</a></li>
          <li><a href="#operating-model" className={activeSection === 'operating-model' ? 'is-active' : ''} aria-current={activeSection === 'operating-model' ? 'true' : undefined}><i className="bi bi-gear" />Operating model</a></li>
          <li><a href="#healthcare-scope" className={activeSection === 'healthcare-scope' ? 'is-active' : ''} aria-current={activeSection === 'healthcare-scope' ? 'true' : undefined}><i className="bi bi-hospital" />Healthcare focus</a></li>
          <li><a href="#aboutteamlist" className={activeSection === 'aboutteamlist' ? 'is-active' : ''} aria-current={activeSection === 'aboutteamlist' ? 'true' : undefined}><i className="bi bi-people" />Leadership Team</a></li>
        </ul></div>
      </nav>

      <section className="section numbers-light-section" id="numbers">
        <div className="container">
          <div className="section-head numbers-light__head" data-reveal><span className="about-eyebrow about-eyebrow--light">Our impact</span><h2>Milaserv in numbers</h2></div>
          <div className="row align-items-stretch g-4 g-xl-5" data-reveal>
            <div className="col-lg-6"><ul className="numbers-rect-list numbers-rect-list--light">
              {STATS.map(([index, label, value], itemIndex) => (
                <li key={index} className={`number-rect-item ${activeStat === itemIndex ? 'is-active' : ''}`} onMouseEnter={() => setActiveStat(itemIndex)} onClick={() => setActiveStat(itemIndex)} tabIndex={0} onFocus={() => setActiveStat(itemIndex)}>
                  <div className="number-rect-item__right"><span className="number-rect-index">{index}</span><span className="number-rect-label">{label}</span></div>
                  <div className="number-rect-item__left"><span className="number-rect-mini-val">{value}</span><i className="bi bi-arrow-right number-rect-arrow" aria-hidden="true" /></div>
                </li>
              ))}
            </ul></div>
            <div className="col-lg-6"><div className="number-stage-card"><div className="number-stage-card__glow" aria-hidden="true" /><div className="number-stage-card__grid-bg" aria-hidden="true" />
              <div key={current[0]} className="number-stage-content"><div className="number-stage-top"><span className="number-stage-badge"><i className="bi bi-bar-chart" aria-hidden="true" /><span>Metric {current[0]}</span></span><span className="number-stage-counter">{current[0]} / 06</span></div>
                <div className="number-stage-hero-metric"><div className="number-stage-value">{current[2]}</div><div className="number-stage-unit">{current[3]}</div></div>
                <div className="number-stage-footer"><h3>{current[1]}</h3></div>
              </div>
            </div></div>
          </div>
        </div>
      </section>

      <section className="section about-ops-section" id="operating-model">
        <div className="container"><div className="row align-items-center gy-4 gx-xl-5" data-reveal>
          <div className="col-lg-5"><span className="about-eyebrow">Operating model</span><h2>We build the team and manage the service</h2><p className="about-ops-lead">Our teams support clients remotely from our office in Egypt. We take responsibility for selecting and training the right people, preparing them to work with each client’s systems and procedures, and managing daily tasks and performance within an agreed scope. Close coordination with internal teams keeps delivery aligned with the client’s requirements.</p><p className="about-ops-sub">We measure service quality against agreed KPIs and service levels, analyse performance and provide regular reports and recommendations to support operational decisions. Team size, service hours and scope can be adjusted as requirements change.</p></div>
          <div className="col-lg-7"><div className="ops-pillars-stack">
            {[
              ['01', 'bi-person-check', 'Dedicated teams', 'Selecting and training the right people and preparing them to work with each client’s systems and procedures.'],
              ['02', 'bi-graph-up-arrow', 'Performance management', 'Measuring quality against agreed KPIs and service levels, analysing performance and providing regular reports.'],
              ['03', 'bi-sliders', 'Flexible scope', 'Adjusting team size, service hours and scope as requirements change.'],
            ].map(([num, icon, title, description]) => <article key={num} className="ops-pillar-card"><div className="ops-pillar-card__num">{num}</div><div className="ops-pillar-card__icon"><i className={`bi ${icon}`} aria-hidden="true" /></div><div className="ops-pillar-card__body"><h3>{title}</h3><p>{description}</p></div></article>)}
          </div></div>
        </div></div>
      </section>

      <section className="section about-scope-section" id="healthcare-scope">
        <div className="container"><div className="row align-items-center gy-5 gx-xl-5" data-reveal>
          <div className="col-lg-6"><span className="about-eyebrow about-eyebrow--light">Healthcare is our focus</span><h2>Healthcare organisations across every care setting</h2><p className="about-scope-text">We work with hospitals, medical centres, clinics, laboratories and pharmacies, as well as healthcare platforms and telehealth providers.</p><p className="about-scope-text about-scope-text--last">We manage customer service and contact centres, customer relationships and loyalty programmes, and telesales. Our wider services include medical insurance administration, e-commerce operations, digital marketing and operational support for telehealth consultations.</p><div className="mt-4"><Link to="/en/services" className="btn btn-brand btn-pill-cta"><span>Explore Our Services</span><span className="btn-pill-circle" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span></Link></div></div>
          <div className="col-lg-6"><div className="scope-matrix-box"><div className="scope-matrix-group"><span className="scope-matrix-label">Healthcare organisations</span><div className="scope-chips-grid">{ENTITIES.map((entity) => <div key={entity} className="scope-entity-chip"><i className="bi bi-check2-circle" aria-hidden="true" /><span>{entity}</span></div>)}</div></div><div className="scope-matrix-divider" /><div className="scope-matrix-group"><span className="scope-matrix-label">Operational services</span><ul className="scope-services-list">{SUPPORT.map((service) => <li key={service}><i className="bi bi-check2-circle" aria-hidden="true" /><span>{service}</span></li>)}</ul></div></div></div>
        </div></div>
      </section>

      <AboutTeamList isEnglish={true} />

    </div>
  );
}
