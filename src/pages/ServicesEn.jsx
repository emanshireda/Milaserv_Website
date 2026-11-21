import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/services.css';

const NAV = [
  ['svc-1', 'bi-headset', 'Customer Service'],
  ['svc-2', 'bi-shield-check', 'Insurance Administration'],
  ['svc-3', 'bi-heart-pulse', 'Relationships & Loyalty'],
  ['svc-4', 'bi-telephone-outbound', 'Telesales'],
  ['svc-5', 'bi-cart3', 'E-commerce'],
  ['svc-6', 'bi-graph-up-arrow', 'Digital Marketing'],
  ['svc-7', 'bi-camera-video', 'Telehealth'],
];

const SERVICES = [
  ['01', 'bi-headset', 'Patient experience & communication', 'Customer Service & Contact Centres', 'Meet patients on the channels they use. Our specialist teams handle enquiries, appointment bookings, and follow-ups across phone, WhatsApp, email, chat, and social media, helping you respond faster and deliver a better customer experience.', [['Channels', ['Phone', 'WhatsApp', 'Email', 'Chat', 'Social media', 'Enquiries, appointment bookings and follow-ups']]]],
  ['02', 'bi-shield-check', 'Revenue cycle & authorisations', 'Medical Insurance Administration', 'We verify insurance eligibility, help obtain medical authorisations, follow up on claims, and manage denials. Our teams help speed up processing, reduce errors and denials, and improve revenue cycle efficiency.', [['Process', ['Verify insurance eligibility', 'Obtain medical authorisations', 'Follow up on claims', 'Manage denials']]]],
  ['03', 'bi-heart-pulse', 'Retention & growth', 'Customer Relationships & Loyalty Programmes', 'Turn customer insight into stronger relationships. We manage and analyse customer data to understand their needs and behaviour and identify opportunities to improve their experience. We also manage loyalty programmes that sustain engagement, strengthen loyalty and retention, and support revenue growth.', [['Includes', ['Manage and analyse customer data', 'Understand customer needs and behaviour', 'Identify opportunities to improve experience', 'Manage loyalty programmes']]]],
  ['04', 'bi-telephone-outbound', 'Conversion & bookings', 'Telesales Teams', 'Give sales opportunities the follow-up they need. Our specialist telesales teams reach out to existing and prospective customers, helping turn conversations into bookings and orders that support revenue growth.', [['Includes', ['Reach existing and prospective customers', 'Follow up sales opportunities', 'Turn conversations into bookings and orders']]]],
  ['05', 'bi-cart3', 'Digital pharmacies & stores', 'E-commerce Operations', 'We follow up on orders, handle customer enquiries, and organise daily tasks for online pharmacies and digital health platforms, helping improve efficiency and the customer experience.', [['Includes', ['Follow up on orders', 'Handle customer enquiries', 'Organise daily operational tasks']]]],
  ['06', 'bi-graph-up-arrow', 'Digital presence & reach', 'Digital Marketing for Healthcare', 'Build visibility with healthcare content and campaigns that speak to the right audience. Our services cover medical content writing, search engine optimisation (SEO), advertising campaign management, design, and video production, all aligned with your marketing objectives.', [['Includes', ['Medical content writing', 'Search engine optimisation (SEO)', 'Advertising campaign management', 'Design', 'Video production']]]],
  ['07', 'bi-camera-video', 'Virtual care & remote consultation', 'Telehealth Operations & Support', 'From booking an appointment to following up before and after the consultation, our teams help you coordinate virtual care. We can also provide licensed doctors based on your requirements and the agreed service scope.', [['Includes', ['Appointment booking', 'Follow-up before and after consultation', 'Licensed doctors based on requirements and scope']]]],
];

export default function ServicesEn() {
  const [activeId, setActiveId] = useState('svc-1');

  useEffect(() => {
    document.title = 'Our Services';
    const blocks = document.querySelectorAll('.svc-block');
    if (!('IntersectionObserver' in window) || !blocks.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveId(entry.target.id);
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    blocks.forEach((block) => observer.observe(block));
    return () => observer.disconnect();
  }, []);

  return (
    <div dir="ltr" lang="en">
      <section className="page-hero" id="top">
        <div className="page-hero__glow" aria-hidden="true" />
        <div className="container position-relative">
          <nav className="crumbs" aria-label="Breadcrumb"><ol><li><Link to="/en">Home</Link></li><li><span aria-current="page">Our Services</span></li></ol></nav>
          <div className="hero-eyebrow"><span className="hero-eyebrow__dot" /><span>Managed remote teams for healthcare</span></div>
          <h1>Expand your operational capacity with managed remote teams.</h1>
          <div className="page-hero__intro">
            <p>Milaserv builds and manages specialist remote teams for healthcare organisations in Saudi Arabia and across the Gulf. Working as an extension of your team, we use clear procedures and defined performance indicators to improve efficiency and the customer experience.</p>
            <p>We tailor our services to the needs of hospitals, medical centres, clinics, pharmacies, and digital health platforms.</p>
          </div>
          <div className="page-hero__actions">
            <a className="btn btn-brand-light btn-lg" href="https://calendly.com/milaserv" target="_blank" rel="noopener noreferrer">Talk to Our Team</a>
            <a className="btn btn-glass btn-lg" href="#svc-1">Explore Our Services <i className="bi bi-arrow-down-short" aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <nav className="svc-nav" aria-label="Service index">
        <div className="container"><ul>{NAV.map(([id, icon, label]) => (
          <li key={id}><a href={`#${id}`} className={activeId === id ? 'is-active' : ''} aria-current={activeId === id ? 'true' : undefined}><i className={`bi ${icon}`} aria-hidden="true" />{label}</a></li>
        ))}</ul></div>
      </nav>

      <div className="svc-blocks">
        {SERVICES.map(([number, icon, tag, title, lead, groups]) => (
          <section className="svc-block" id={`svc-${Number(number)}`} aria-labelledby={`svc-${Number(number)}-t`} key={title}>
            <div className="container svc-block__inner">
              <div className="svc-block__head" data-reveal>
                <div className="svc-block__meta"><span className="svc-block__no" aria-hidden="true">{number}</span><div className="svc-block__icon"><i className={`bi ${icon}`} aria-hidden="true" /></div></div>
                <span className="svc-block__tag">{tag}</span><h2 id={`svc-${Number(number)}-t`}>{title}</h2>
              </div>
              <div className="svc-block__body" data-reveal>
                <p className="svc-block__lead">{lead}</p>
                {groups.map(([heading, items]) => (
                  <div className="includes includes--cols" key={heading}><h3>{heading}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>
                ))}
                <a className="link-more" href="#contact">Explore This Service<span className="visually-hidden">: {title}</span></a>
              </div>
            </div>
          </section>
        ))}
      </div>

    </div>
  );
}
