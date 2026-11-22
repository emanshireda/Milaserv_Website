import React, { useState } from 'react';
import { publicAsset } from '../utils/publicAsset';
import './AboutTeamList.css';

const leadersData = [
  {
    id: 'ceo',
    index: '01',
    nameAr: 'د/ مصطفى سالم',
    nameEn: '[Chief Executive Name]',
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
    nameEn: '[Operations Director Name]',
    roleAr: 'رئيس العمليات التشغيلية (COO)',
    roleEn: 'Chief Operating Officer (COO)',
    focusAr: 'انضباط التشغيل وجودة التنفيذ',
    focusEn: 'Operations & Execution',
    briefAr:
      'يشرف على إدارة العمليات اليومية وتكامل الفرق التشغيلية وتحسين مسارات العمل لضمان سرعة الاستجابة ودقة التنفيذ.',
    briefEn:
      'Oversees daily operations, cross-functional team alignment, and workflow efficiency for consistent service delivery.',
    img: publicAsset('Images/team/coo.png'),
  },
  {
    id: 'cfo',
    index: '03',
    nameAr: 'أ/ احمد سمير',
    nameEn: '[Finance Director Name]',
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
    id: 'qa',
    index: '04',
    nameAr: '[اسم مدير الجودة]',
    nameEn: '[Quality Manager Name]',
    roleAr: 'مدير ضمان الجودة (Quality Assurance Manager)',
    roleEn: 'Quality Assurance Manager',
    focusAr: 'معايير الجودة والامتثال',
    focusEn: 'Quality & Compliance',
    briefAr:
      'يضع أطر الجودة ومؤشرات الأداء ويتابع الالتزام التشغيلي لضمان مخرجات دقيقة ومتسقة وفق أعلى المعايير.',
    briefEn:
      'Establishes quality frameworks, performance benchmarks, and compliance audits to keep every deliverable sharp.',
    img: publicAsset('Images/team/qa.png'),
  },
  {
    id: 'hr',
    index: '05',
    nameAr: 'أ/ أسامة الجندي',
    nameEn: '[HR Manager Name]',
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
    nameEn: '[Commercial Manager Name]',
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
  const [activeId, setActiveId] = useState(leadersData[0].id);

  return (
    <section
      className="ms-about-team"
      id="aboutteamlist"
      dir={isEnglish ? 'ltr' : 'rtl'}
    >
      <div className="ms-about-team__inner">
        {/* Top Row matching your layout rhythm */}
        <div className="ms-about-team__top">
          <div className="ms-about-team__heading">
            <h2>
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
              <i className={`bi ${isEnglish ? 'bi-arrow-up-right' : 'bi-arrow-up-left'}`}></i>
            </button>
          )}
        </div>

        {/* Full Creative List (No Slider) */}
        <div className="ms-leader-showcase" role="list">
          {leadersData.map((leader) => {
            const isSelected = activeId === leader.id;
            const name = isEnglish ? leader.nameEn : leader.nameAr;
            const role = isEnglish ? leader.roleEn : leader.roleAr;
            const focus = isEnglish ? leader.focusEn : leader.focusAr;
            const brief = isEnglish ? leader.briefEn : leader.briefAr;

            return (
              <article
                key={leader.id}
                role="listitem"
                className={`ms-leader-item ${isSelected ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveId(leader.id)}
                onClick={() => setActiveId(leader.id)}
              >
                {/* Portrait Card matching your dark card style */}
                <div className="ms-leader-portrait-card">
                  <span className="ms-leader-num">{leader.index}</span>
                  <img
                    src={leader.img}
                    alt={name}
                    className="ms-leader-img"
                    onError={(e) => {
                      e.currentTarget.style.opacity = '0';
                    }}
                  />
                  <div className="ms-leader-portrait-overlay">
                    <span className="ms-leader-focus-pill">{focus}</span>
                    <h3 className="ms-leader-name">{name}</h3>
                    <span className="ms-leader-role">{role}</span>
                  </div>
                </div>

                {/* Creative Brief Panel integrated right beside/below each leader */}
                <div className="ms-leader-brief-panel">
                  <div className="ms-leader-brief-head">
                    <span className="ms-leader-brief-tag">{focus}</span>
                    <span className="ms-leader-brief-code">#{leader.index}</span>
                  </div>

                  <h4 className="ms-leader-brief-title">{name}</h4>
                  <div className="ms-leader-brief-role">{role}</div>
                  <p className="ms-leader-brief-text">{brief}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}