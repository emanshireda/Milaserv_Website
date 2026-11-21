import React, { useState, useRef, useEffect } from 'react';
import { publicAsset } from '../utils/publicAsset';
import './TeamSection.css';

const teamMembers = [
  {
    name: '[اسم الرئيس التنفيذي]',
    role: 'الرئيس التنفيذي (CEO)',
    img: publicAsset('Images/team/ceo.png'),
  },
  {
    name: '[اسم رئيس العمليات]',
    role: 'رئيس العمليات التشغيلية (COO)',
    img: publicAsset('Images/team/coo.png'),
  },
  {
    name: '[اسم الرئيس المالي]',
    role: 'الرئيس المالي (CFO)',
    img: publicAsset('Images/team/cfo.png'),
  },
  {
    name: '[اسم مدير الجودة]',
    role: 'مدير ضمان الجودة (Quality Assurance Manager)',
    img: publicAsset('Images/team/qa.png'),
  },
  {
    name: '[اسم مدير الموارد البشرية]',
    role: 'مدير الموارد البشرية (Human Resource Manager)',
    img: publicAsset('Images/team/hr.png'),
  },
  {
    name: '[اسم المدير التجاري]',
    role: 'المدير التجاري (Commercial Manager)',
    img: publicAsset('Images/team/commercial.png'),
  },
];

export default function TeamSection() {
  const sliderRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  // Force scroll to the rightmost starting position on mount or when returning from grid view
  useEffect(() => {
    if (!showAll && sliderRef.current) {
      // In RTL layouts, scrollLeft starts at max negative width or max scroll width
      const viewport = sliderRef.current;
      viewport.scrollLeft = viewport.scrollWidth; 
    }
  }, [showAll]);

  const scrollTeam = (direction) => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector('.team-card');
    const step = card ? card.offsetWidth + 24 : 304;

    sliderRef.current.scrollBy({
      // In RTL, reversing the step direction ensures intuitive arrow navigation
      left: direction === 'next' ? -step : step,
      behavior: 'smooth',
    });
  };

  // Auto-scroll effect (paused on hover)
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const touchViewport = window.matchMedia('(max-width: 767.98px)').matches;
    if (reduceMotion || touchViewport || showAll || !sliderRef.current) return;

    const viewport = sliderRef.current;
    let autoSlide = setInterval(() => {
      const currentScroll = viewport.scrollLeft;
      // If reached the end on the left, loop back to the right starting point
      if (currentScroll <= 10) {
        viewport.scrollTo({ left: viewport.scrollWidth, behavior: 'smooth' });
      } else {
        viewport.scrollBy({ left: -304, behavior: 'smooth' });
      }
    }, 3500);

    const pause = () => clearInterval(autoSlide);
    const resume = () => {
      clearInterval(autoSlide);
      autoSlide = setInterval(() => {
        viewport.scrollBy({ left: -304, behavior: 'smooth' });
      }, 3500);
    };

    viewport.addEventListener('mouseenter', pause);
    viewport.addEventListener('mouseleave', resume);
    return () => {
      clearInterval(autoSlide);
      viewport.removeEventListener('mouseenter', pause);
      viewport.removeEventListener('mouseleave', resume);
    };
  }, [showAll]);

  return (
    <section className="section team-section" id="team" dir="rtl">
      <div className="container">
        {/* Header + Left-Aligned Controls */}
        <div className="team-header" data-reveal>
          <div className="team-header__title">
            <span className="team-tag">فريق القيادة</span>
            <h2>قيادات تقود التميز التشغيلي</h2>
            <p>نخبة من الخبراء والمتخصصين لإدارة وتشغيل خدمات منشأتك الصحية بأعلى معايير الجودة.</p>
          </div>

          <div className="team-header__controls">
            {!showAll && (
              <div className="team-nav">
                <button
                  type="button"
                  className="team-arrow"
                  onClick={() => scrollTeam('prev')}
                  aria-label="السابق"
                >
                  <i className="bi bi-arrow-right"></i>
                </button>
                <button
                  type="button"
                  className="team-arrow"
                  onClick={() => scrollTeam('next')}
                  aria-label="التالي"
                >
                  <i className="bi bi-arrow-left"></i>
                </button>
              </div>
            )}

            <button
              type="button"
              className="btn btn-outline-navy team-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              <span>{showAll ? 'عرض الشريط' : 'عرض المزيد'}</span>
              <i className={`bi ${showAll ? 'bi-grid' : 'bi-arrow-up-left'}`}></i>
            </button>
          </div>
        </div>

        {/* Dynamic View: Horizontal Slider OR Expanded Full Grid */}
        {showAll ? (
          <div className="team-full-grid animate-fade-in">
            {teamMembers.map((member, index) => (
              <article className="team-card" key={index}>
                <div className="team-card__bg" aria-hidden="true"></div>
                <div className="team-card__portrait-wrap">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="team-card__portrait"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="team-card__overlay">
                  <h3 className="team-card__name">{member.name}</h3>
                  <span className="team-card__role">{member.role}</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="team-viewport" ref={sliderRef} data-reveal>
            <div className="team-track">
              {teamMembers.map((member, index) => (
                <article className="team-card" key={index}>
                  <div className="team-card__bg" aria-hidden="true"></div>
                  <div className="team-card__portrait-wrap">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="team-card__portrait"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <div className="team-card__overlay">
                    <h3 className="team-card__name">{member.name}</h3>
                    <span className="team-card__role">{member.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}