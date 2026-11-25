import React, { useEffect, useRef, useState } from 'react';
import { publicAsset } from '../utils/publicAsset';
import './AboutTeamList.css';

const leadersData = [
  {
    id: 'ceo',
    index: '01',
    nameAr: 'د/ مصطفى سالم',
    nameEn: 'Dr. Mostafa Salem',
    roleAr: 'الرئيس التنفيذي (CEO)',
    roleEn: 'Chief Executive Officer (CEO)',
    focusAr: 'الرؤية والتوسع الاستراتيجي',
    focusEn: 'Strategy & Scaling',
    briefAr:
      'يقود الرؤية الاستراتيجية والتوسع التشغيلي لمنظومة ميلاسيرف لضمان نمو مستدام ورفع كفاءة الخدمات المقدمة للمنشآت الصحية والشركاء.',
    briefEn:
      'Leads strategic vision and operational scaling across MilaServ to drive sustainable growth and high-standard healthcare operations.',
    img: publicAsset('Images/Mostafa Sleem.png'),
  },
  {
    id: 'coo',
    index: '02',
    nameAr: '[اسم رئيس العمليات]',
    nameEn: 'Dr. Fathy ',
    roleAr: 'رئيس العمليات التشغيلية (COO)',
    roleEn: 'Chief Operating Officer (COO)',
    focusAr: 'انضباط التشغيل وجودة التنفيذ',
    focusEn: 'Operations & Execution',
    briefAr:
      'يشرف على إدارة العمليات اليومية وتكامل الفرق التشغيلية وتحسين مسارات العمل لضمان سرعة الاستجابة ودقة التنفيذ.',
    briefEn:
      'Oversees daily operations, cross-functional team alignment, and workflow efficiency for consistent service delivery.',
    img: publicAsset('Images/Dr. Fathy.png'),
  },
  {
    id: 'cfo',
    index: '03',
    nameAr: 'أ/ أحمد سمير',
    nameEn: 'Mr. Ahmed Samir',
    roleAr: 'الرئيس المالي (CFO)',
    roleEn: 'Chief Financial Officer (CFO)',
    focusAr: 'الحوكمة والتخطيط المالي',
    focusEn: 'Finance & Governance',
    briefAr:
      'يدير التخطيط المالي، الموازنات، والرقابة المالية لدعم الاستقرار المالي وتمكين التوسع المدروس عبر جميع القطاعات.',
    briefEn:
      'Directs financial planning, budgeting, and governance to safeguard stability and support disciplined expansion.',
    img: publicAsset('Images/Ahmed Samir.png'),
  },
  {
    id: 'hr',
    index: '05',
    nameAr: 'أ/ أسامة الجندي',
    nameEn: 'Mr. Osama Elgendy',
    roleAr: 'مدير الموارد البشرية (Human Resource Manager)',
    roleEn: 'Human Resources Manager',
    focusAr: 'بناء الكفاءات وثقافة العمل',
    focusEn: 'Talent & Culture',
    briefAr:
      'يقود استقطاب الكفاءات المتخصصة، تطوير المهارات، وبناء بيئة عمل محفزة تدعم استمرارية وتميز الفرق.',
    briefEn:
      'Drives specialized talent acquisition, skill development, and a high-trust culture that keeps teams thriving.',
    img: publicAsset('Images/Osama Elgendy.png'),
  },
  {
    id: 'commercial',
    index: '06',
    nameAr: 'م/ محمد عزيز',
    nameEn: 'Mr. Mohamed Aziz',
    roleAr: 'المدير التجاري (Commercial Manager)',
    roleEn: 'Commercial Manager',
    focusAr: 'الشراكات والنمو التجاري',
    focusEn: 'Partnerships & Growth',
    briefAr:
      'يطور الشراكات الاستراتيجية وفرص النمو التجاري ويواءم الحلول التشغيلية مع احتياجات السوق والعملاء.',
    briefEn:
      'Builds strategic partnerships and commercial growth pathways aligned with market and client priorities.',
    img: publicAsset('Images/Mohamed Aziz.png'),
  },
];

export default function AboutTeamList({ isEnglish = false, onActionClick }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionKey, setTransitionKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);
  const tabRefs = useRef([]);

  const activeLeader = leadersData[activeIndex] || leadersData[0];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const selectLeader = (nextIndex) => {
    const total = leadersData.length;
    const normalized = ((nextIndex % total) + total) % total;
    if (normalized === activeIndex) return;
    setActiveIndex(normalized);
    setTransitionKey((prev) => prev + 1);
  };

  const handleTabKeyDown = (event, idx) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      const next = (idx + 1) % leadersData.length;
      selectLeader(next);
      tabRefs.current[next]?.focus();
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const prev = (idx - 1 + leadersData.length) % leadersData.length;
      selectLeader(prev);
      tabRefs.current[prev]?.focus();
    } else if (event.key === 'Home') {
      event.preventDefault();
      selectLeader(0);
      tabRefs.current[0]?.focus();
    } else if (event.key === 'End') {
      event.preventDefault();
      const last = leadersData.length - 1;
      selectLeader(last);
      tabRefs.current[last]?.focus();
    }
  };

  const activeName = isEnglish ? activeLeader.nameEn : activeLeader.nameAr;
  const activeRole = isEnglish ? activeLeader.roleEn : activeLeader.roleAr;
  const activeFocus = isEnglish ? activeLeader.focusEn : activeLeader.focusAr;
  const activeBrief = isEnglish ? activeLeader.briefEn : activeLeader.briefAr;

  return (
    <section
      ref={sectionRef}
      className={`ms-about-team ${isVisible ? 'is-revealed' : ''}`}
      id="aboutteamlist"
      dir={isEnglish ? 'ltr' : 'rtl'}
      aria-labelledby="ms-team-heading"
    >
      <div className="ms-about-team__inner">
        {/* Top Row */}
        <div className="ms-about-team__top">
          <div className="ms-about-team__heading">
            <span className="ms-about-team__eyebrow">
              {isEnglish
                ? 'THE PEOPLE BEHIND THE PERFORMANCE'
                : 'القيادات وراء الأداء التشغيلي'}
            </span>
            <h2 id="ms-team-heading">
              {isEnglish
                ? 'Leaders driving operational excellence'
                : 'قيادات تقود التميز التشغيلي'}
            </h2>
            <p>
              {isEnglish
                ? 'A team of experienced specialists managing and operating your healthcare services to the highest standards.'
                : 'نخبة من الخبراء والمتخصصين لإدارة وتشغيل خدمات منشأتك الصحية بأعلى معايير الجودة.'}
            </p>
          </div>

          {onActionClick && (
            <button
              type="button"
              className="ms-about-team__cta"
              onClick={onActionClick}
            >
              <span>{isEnglish ? 'View more' : 'عرض المزيد'}</span>
              <i
                className={`bi ${isEnglish ? 'bi-arrow-up-right' : 'bi-arrow-up-left'}`}
                aria-hidden="true"
              />
            </button>
          )}
        </div>

        {/* Asymmetric Editorial Leadership Stage */}
        <div className="ms-leader-stage">
          {/* Numbered Navigation Rail */}
          <nav
            className="ms-leader-nav"
            aria-label={isEnglish ? 'Leadership team selector' : 'اختيار أفراد القيادة'}
          >
            <div className="ms-leader-nav__list" role="tablist">
              {leadersData.map((leader, idx) => {
                const isSelected = idx === activeIndex;
                const itemName = isEnglish ? leader.nameEn : leader.nameAr;
                const itemRole = isEnglish ? leader.roleEn : leader.roleAr;

                return (
                  <button
                    key={leader.id}
                    ref={(el) => {
                      tabRefs.current[idx] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`ms-leader-tab-${leader.id}`}
                    aria-selected={isSelected}
                    aria-controls={`ms-leader-panel-${leader.id}`}
                    tabIndex={isSelected ? 0 : -1}
                    className={`ms-leader-nav__item ${isSelected ? 'is-active' : ''}`}
                    onClick={() => selectLeader(idx)}
                    onKeyDown={(e) => handleTabKeyDown(e, idx)}
                  >
                    <span className="ms-leader-nav__index">{leader.index}</span>
                    <span className="ms-leader-nav__meta">
                      <span className="ms-leader-nav__name">{itemName}</span>
                      <span className="ms-leader-nav__role">{itemRole}</span>
                    </span>
                    <span className="ms-leader-nav__bar" aria-hidden="true">
                      <span className="ms-leader-nav__bar-fill" />
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Featured Spotlight: Portrait Zone + Editorial Info Zone */}
          <div
            key={`${activeLeader.id}-${transitionKey}`}
            id={`ms-leader-panel-${activeLeader.id}`}
            role="tabpanel"
            aria-labelledby={`ms-leader-tab-${activeLeader.id}`}
            className="ms-leader-spotlight ms-leader-animate"
          >
            {/* A. Portrait Area */}
            <div className="ms-leader-portrait-zone">
              <div className="ms-leader-glow" aria-hidden="true" />
              <div className="ms-leader-portrait-frame">
                <img
                  src={activeLeader.img}
                  alt={activeName}
                  className="ms-leader-portrait-img"
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                />
                <div className="ms-leader-portrait-scrim" aria-hidden="true" />
                <div className="ms-leader-role-badge">
                  <span className="ms-leader-role-dot" aria-hidden="true" />
                  <span>{activeName}</span>
                </div>
              </div>
            </div>

            {/* B. Information Area */}
            <div className="ms-leader-info-zone">
              <div className="ms-leader-info-header">
                <span className="ms-leader-focus-label">{activeFocus}</span>
              </div>

              <h3 className="ms-leader-featured-name">{activeName}</h3>
              <p className="ms-leader-featured-role">{activeRole}</p>

              <div className="ms-leader-divider" aria-hidden="true" />

              <p className="ms-leader-featured-brief">{activeBrief}</p>

              <div className="ms-leader-controls">
                <div className="ms-leader-counter" aria-live="polite">
                  
              
                 
                </div>

                <div className="ms-leader-step-btns">
                  <button
                    type="button"
                    className="ms-leader-step-btn"
                    onClick={() => selectLeader(activeIndex - 1)}
                    aria-label={isEnglish ? 'Previous leader' : 'القيادي السابق'}
                  >
                    <i
                      className={`bi ${isEnglish ? 'bi-arrow-left' : 'bi-arrow-right'}`}
                      aria-hidden="true"
                    />
                  </button>
                  <button
                    type="button"
                    className="ms-leader-step-btn"
                    onClick={() => selectLeader(activeIndex + 1)}
                    aria-label={isEnglish ? 'Next leader' : 'القيادي التالي'}
                  >
                    <i
                      className={`bi ${isEnglish ? 'bi-arrow-right' : 'bi-arrow-left'}`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}