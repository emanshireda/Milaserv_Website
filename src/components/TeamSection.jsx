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

const englishTeamMembers = [
  { name: '[Chief Executive Name]', role: 'Chief Executive Officer (CEO)' },
  { name: '[Operations Director Name]', role: 'Chief Operating Officer (COO)' },
  { name: '[Finance Director Name]', role: 'Chief Financial Officer (CFO)' },
  { name: '[Quality Manager Name]', role: 'Quality Assurance Manager' },
  { name: '[HR Manager Name]', role: 'Human Resources Manager' },
  { name: '[Commercial Manager Name]', role: 'Commercial Manager' },
];

export default function TeamSection({ isEnglish = false }) {
  const sliderRef = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const members = isEnglish
    ? teamMembers.map((member, index) => ({ ...member, ...englishTeamMembers[index] }))
    : teamMembers;

  // Start at the first card in each reading direction.
  useEffect(() => {
    if (!showAll && sliderRef.current) {
      const viewport = sliderRef.current;
      viewport.scrollLeft = isEnglish ? 0 : viewport.scrollWidth;
    }
  }, [isEnglish, showAll]);

  const scrollTeam = (direction) => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector('.team-card');
    const step = card ? card.offsetWidth + 24 : 304;

    sliderRef.current.scrollBy({
      left: isEnglish
        ? (direction === 'next' ? step : -step)
        : (direction === 'next' ? -step : step),
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
      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      const atEnd = isEnglish
        ? viewport.scrollLeft >= maxScroll - 10
        : viewport.scrollLeft <= 10;

      if (atEnd) {
        viewport.scrollTo({ left: isEnglish ? 0 : viewport.scrollWidth, behavior: 'smooth' });
      } else {
        viewport.scrollBy({ left: isEnglish ? 304 : -304, behavior: 'smooth' });
      }
    }, 3500);

    const pause = () => clearInterval(autoSlide);
    const resume = () => {
      clearInterval(autoSlide);
      autoSlide = setInterval(() => {
        const maxScroll = viewport.scrollWidth - viewport.clientWidth;
        const atEnd = isEnglish
          ? viewport.scrollLeft >= maxScroll - 10
          : viewport.scrollLeft <= 10;

        if (atEnd) {
          viewport.scrollTo({ left: isEnglish ? 0 : viewport.scrollWidth, behavior: 'smooth' });
        } else {
          viewport.scrollBy({ left: isEnglish ? 304 : -304, behavior: 'smooth' });
        }
      }, 3500);
    };

    viewport.addEventListener('mouseenter', pause);
    viewport.addEventListener('mouseleave', resume);
    return () => {
      clearInterval(autoSlide);
      viewport.removeEventListener('mouseenter', pause);
      viewport.removeEventListener('mouseleave', resume);
    };
  }, [isEnglish, showAll]);

  return (
    <section className="section team-section" id="team" dir={isEnglish ? 'ltr' : 'rtl'}>
      <div className="container">
        {/* Header + Left-Aligned Controls */}
        <div className="team-header" data-reveal>
          <div className="team-header__title">
            <span className="team-tag">{isEnglish ? 'Leadership Team' : 'فريق القيادة'}</span>
            <h2>{isEnglish ? 'Leaders driving operational excellence' : 'قيادات تقود التميز التشغيلي'}</h2>
            <p>{isEnglish ? 'A team of experienced specialists managing and operating your healthcare services to the highest standards.' : 'نخبة من الخبراء والمتخصصين لإدارة وتشغيل خدمات منشأتك الصحية بأعلى معايير الجودة.'}</p>
          </div>

          <div className="team-header__controls">
            {!showAll && (
              <div className="team-nav">
                <button
                  type="button"
                  className="team-arrow"
                  onClick={() => scrollTeam('prev')}
                  aria-label={isEnglish ? 'Previous' : 'السابق'}
                >
                  <i className={`bi ${isEnglish ? 'bi-arrow-left' : 'bi-arrow-right'}`}></i>
                </button>
                <button
                  type="button"
                  className="team-arrow"
                  onClick={() => scrollTeam('next')}
                  aria-label={isEnglish ? 'Next' : 'التالي'}
                >
                  <i className={`bi ${isEnglish ? 'bi-arrow-right' : 'bi-arrow-left'}`}></i>
                </button>
              </div>
            )}

            <button
              type="button"
              className="btn btn-outline-navy team-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              <span>{showAll ? (isEnglish ? 'Show slider' : 'عرض الشريط') : (isEnglish ? 'View more' : 'عرض المزيد')}</span>
              <i className={`bi ${showAll ? 'bi-grid' : 'bi-arrow-up-left'}`}></i>
            </button>
          </div>
        </div>

        {/* Dynamic View: Horizontal Slider OR Expanded Full Grid */}
        {showAll ? (
          <div className="team-full-grid animate-fade-in">
            {members.map((member, index) => (
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
              {members.map((member, index) => (
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