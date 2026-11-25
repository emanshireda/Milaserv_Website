import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { publicAsset } from '../utils/publicAsset';
import AboutTeamList from '../components/AboutTeamList';

const STATS = [
  {
    id: 'interactions',
    index: '01',
    icon: 'bi-chat-dots',
    value: '+15 مليون',
    unit: 'تفاعل',
    label: 'إجمالي التفاعلات مع العملاء',
    detail: 'إدارة تواصل المرضى والمراجعين عبر الهاتف والمنصات الرقمية بكفاءة واستمرارية.',
  },
  {
    id: 'gulf-years',
    index: '02',
    icon: 'bi-globe2',
    value: '+4 سنوات',
    unit: 'في الخليج',
    label: 'تقديم الخدمات التشغيلية في الخليج',
    detail: 'خبرة ميدانية في السوق السعودي والخليجي وفهم عميق لمتطلبات المنشآت الصحية.',
  },
  {
    id: 'mgmt-years',
    index: '03',
    icon: 'bi-award',
    value: '+15 عامًا',
    unit: 'خبرة إدارية',
    label: 'الخبرة الإدارية في قطاع الرعاية الصحية',
    detail: 'قيادة تنفيذية متخصصة في بناء العمليات الصحية وإدارة الجودة وتطوير الفرق.',
  },
  {
    id: 'specialists',
    index: '04',
    icon: 'bi-people',
    value: '+300',
    unit: 'متخصص',
    label: 'المتخصصون المدربون في العمليات الصحية',
    detail: 'كفاءات مؤهلة ومدرّبة على الأنظمة الطبية وإجراءات التشغيل المعتمدة لكل منشأة.',
  },
  {
    id: 'sla',
    index: '05',
    icon: 'bi-shield-check',
    value: '97%',
    unit: 'التزام SLA',
    label: 'معدل الالتزام بمستويات الخدمة المتفق عليها (SLA)',
    detail: 'متابعة يومية دقيقة لمؤشرات الأداء وسرعة الاستجابة لضمان ثبات الجودة.',
  },
  {
    id: 'csat',
    index: '06',
    icon: 'bi-emoji-smile',
    value: '4.765',
    unit: 'من 5',
    label: 'تقييم رضا العملاء (CSAT)',
    detail: 'انطباع إيجابي مستمر يعكس احترافية التعامل وسرعة حل استفسارات المرضى.',
  },
];

const ABOUT_NAV = [
  { id: 'numbers', icon: 'bi-bar-chart-line', label: 'ميلاسيرف بالأرقام' },
  { id: 'operating-model', icon: 'bi-gear', label: 'نموذج التشغيل' },
  { id: 'healthcare-scope', icon: 'bi-hospital', label: 'نطاق التغطية' },
  { id: 'aboutteamlist', icon: 'bi-people', label: 'فريق القيادة' },
];

const OPS_PILLARS = [
  {
    num: '01',
    icon: 'bi-person-check',
    title: 'اختيار وتدريب الكفاءات',
    desc: 'نُعدّ فرقًا مخصصة من مقرنا في مصر، ونُدرّبها على أنظمة المنشأة وإجراءاتها المعتمدة قبل بدء التشغيل.',
  },
  {
    num: '02',
    icon: 'bi-graph-up-arrow',
    title: 'قياس الجودة والتقارير الدورية',
    desc: 'نتابع الأداء وفق مؤشرات KPIs ومستويات خدمة SLA محددة، مع تحليل البيانات وتقديم توصيات مستمرة للتحسين.',
  },
  {
    num: '03',
    icon: 'bi-sliders',
    title: 'مرونة التوسع وحجم الفريق',
    desc: 'نتيح تعديل حجم الفريق وساعات تقديم الخدمة ونطاقها بسلاسة وفق تغير احتياجات المنشأة.',
  },
];

const HEALTHCARE_ENTITIES = [
  { icon: 'bi-hospital', label: 'المستشفيات' },
  { icon: 'bi-building-add', label: 'المجمعات الطبية' },
  { icon: 'bi-heart-pulse', label: 'العيادات' },
  { icon: 'bi-eyedropper', label: 'المختبرات' },
  { icon: 'bi-capsule', label: 'الصيدليات' },
  { icon: 'bi-laptop', label: 'منصات الرعاية الصحية' },
  { icon: 'bi-camera-video', label: 'مزودو الطب الاتصالي' },
];

const SUPPORT_SERVICES = [
  'خدمة العملاء ومراكز الاتصال',
  'إدارة العمليات التأمينية',
  'علاقات العملاء وبرامج الولاء',
  'المبيعات الهاتفية',
  'عمليات التجارة الإلكترونية',
  'التسويق الرقمي',
  'دعم تشغيل الاستشارات الطبية عن بُعد',
];


export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('numbers');
  const currentStat = STATS[activeIndex];

  useEffect(() => {
    const sections = ABOUT_NAV
      .map(({ id }) => document.getElementById(id))
      .filter((section) => section !== null);

    if (!('IntersectionObserver' in window) || sections.length === 0) return;

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
    <div dir="rtl" className="about-page">
      {/* ================= 1. HERO (Clean Spacing, No Overlap) ================= */}
      <section className="hero about-hero-banner" id="top">
        <div
          className="hero__bg-layer is-active"
          style={{
            backgroundImage: `linear-gradient(115deg, rgba(7, 24, 44, 0.85) 0%, rgba(7, 24, 44, 0.51) 100%), url("${publicAsset('Images/HeroBG4.png')}")`,
          }}
          aria-hidden="true"
        />
        <div className="hero__glow" aria-hidden="true" />

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <nav className="crumbs" aria-label="مسار التصفح">
            <ol>
              <li><Link to="/">الرئيسية</Link></li>
              <li><span aria-current="page">عن ميلاسيرف</span></li>
            </ol>
          </nav>

          <div className="about-hero-content hero-text-animate">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow__dot" />
              <span>من نحن</span>
            </div>

            <h1>
              ميلاسيرف شريك تشغيلي
              <span className="hero__soft ">متخصص في القطاع الصحي</span>
            </h1>

            <div className="about-hero-paragraphs">
              <p>
                ميلاسيرف شركة متخصصة في تعهيد وإدارة الخدمات التشغيلية والمساندة للمنشآت الصحية في المملكة العربية السعودية ودول الخليج. نساعد شركاءنا على رفع كفاءة التشغيل وتحسين تجربة العملاء، من خلال فرق مخصصة تعمل كامتداد لفرقهم، وفق أنظمتهم ومعايير الخدمة المتفق عليها.
              </p>
              <p>
                نقدم خدماتنا في الخليج منذ أكثر من 4 سنوات، مستندين إلى خبرة إدارية تتجاوز 15 عامًا في قطاع الرعاية الصحية. ويجمع نموذج عملنا بين التخصص في العمليات الصحية، وإدارة الفرق، وقياس الأداء وتطويره.
              </p>
            </div>

            <div className="about-hero-actions">
              <a
                className="btn btn-brand-light btn-lg"
                href="https://calendly.com/milaserv"
                target="_blank"
                rel="noopener noreferrer"
              >
                احجز استشارة
              </a>
              <Link className="btn btn-outline-light btn-lg" to="/services">
                اكتشف خدماتنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      <nav className="svc-nav about-nav" aria-label="أقسام من نحن">
        <div className="container">
          <ul>
            {ABOUT_NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'is-active' : ''}
                  aria-current={activeSection === item.id ? 'true' : undefined}
                >
                  <i className={`bi ${item.icon}`} aria-hidden="true" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ================= 2. NUMBERS (Light Section + Dark Left Display Stage) ================= */}
      <section className="section numbers-light-section" id="numbers">
        <div className="container">
          <div className="section-head numbers-light__head" data-reveal>
            <span className="about-eyebrow about-eyebrow--light">أثرنا التشغيلي</span>
            <h2>ميلاسيرف بالأرقام</h2>
            <p>مؤشرات تعكس خبرتنا التشغيلية وثقة شركائنا في القطاع الصحي</p>
          </div>

          <div className="row align-items-stretch g-4 g-xl-5" data-reveal>
            {/* RIGHT COLUMN: Light Interactive Rectangles */}
            <div className="col-lg-6">
              <ul className="numbers-rect-list numbers-rect-list--light">
                {STATS.map((item, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <li
                      key={item.id}
                      className={`number-rect-item ${isActive ? 'is-active' : ''}`}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={() => setActiveIndex(idx)}
                      tabIndex={0}
                      onFocus={() => setActiveIndex(idx)}
                    >
                      <div className="number-rect-item__right">
                        <span className="number-rect-index">{item.index}</span>
                        <span className="number-rect-label">{item.label}</span>
                      </div>

                      <div className="number-rect-item__left">
                        <span className="number-rect-mini-val">{item.value}</span>
                        <i className="bi bi-arrow-left number-rect-arrow" aria-hidden="true" />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* LEFT COLUMN: Dark Navy & Teal Spotlight Display Stage */}
            <div className="col-lg-6">
              <div className="number-stage-card">
                <div className="number-stage-card__glow" aria-hidden="true" />
                <div className="number-stage-card__grid-bg" aria-hidden="true" />

                <div key={currentStat.id} className="number-stage-content">
                  <div className="number-stage-top">
                    <span className="number-stage-badge">
                      <i className={`bi ${currentStat.icon}`} aria-hidden="true" />
                      <span>مؤشر رقم {currentStat.index}</span>
                    </span>
                    <span className="number-stage-counter">
                      {currentStat.index} / 0{STATS.length}
                    </span>
                  </div>

                  <div className="number-stage-hero-metric">
                    <div className="number-stage-value">{currentStat.value}</div>
                    <div className="number-stage-unit">{currentStat.unit}</div>
                  </div>

                  <div className="number-stage-footer">
                    <h3>{currentStat.label}</h3>
                    <p>{currentStat.detail}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3A. INDIVIDUAL SECTION 1: OPERATING MODEL ================= */}
      <section className="section about-ops-section" id="operating-model">
        <div className="container">
          <div className="row align-items-center gy-4 gx-xl-5" data-reveal>
            <div className="col-lg-5">
              <span className="about-eyebrow">نموذج التشغيل</span>
              <h2>إدارة تشغيلية متكاملة عن بُعد بمعايير دقيقة</h2>
              <p className="about-ops-lead">
                من مقر الشركة في مصر، نُعدّ فرقًا مخصصة للعمل عن بعد مع منشآت عملائنا ونتولى اختيار الكفاءات وتدريبها على الأنظمة والإجراءات المعتمدة، ثم إدارة مهامها اليومية ومتابعة أدائها، بالتنسيق مع فرق المنشأة وضمن نطاق الخدمة المتفق عليه.
              </p>
              <p className="about-ops-sub">
                ونتابع جودة الخدمة وفق مؤشرات أداء ومستويات خدمة محددة، مع تحليل البيانات وتقديم التقارير والتوصيات الدورية لتحديد فرص التحسين ودعم القرارات التشغيلية. كما نتيح تعديل حجم الفريق وساعات تقديم الخدمة ونطاقها وفق تغير احتياجات المنشأة.
              </p>
            </div>

            <div className="col-lg-7">
              <div className="ops-pillars-stack">
                {OPS_PILLARS.map((pillar) => (
                  <article key={pillar.num} className="ops-pillar-card">
                    <div className="ops-pillar-card__num">{pillar.num}</div>
                    <div className="ops-pillar-card__icon">
                      <i className={`bi ${pillar.icon}`} aria-hidden="true" />
                    </div>
                    <div className="ops-pillar-card__body">
                      <h3>{pillar.title}</h3>
                      <p>{pillar.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3B. INDIVIDUAL SECTION 2: HEALTHCARE SCOPE ================= */}
      <section className="section about-scope-section" id="healthcare-scope">
        <div className="container">
          <div className="row align-items-center gy-5 gx-xl-5" data-reveal>
            <div className="col-lg-6">
              <span className="about-eyebrow about-eyebrow--light">نطاق التغطية</span>
              <h2>خدمات مساندة لمختلف المنشآت الصحية</h2>
              <p className="about-scope-text">
                نخدم المستشفيات والمجمعات الطبية والعيادات والمختبرات والصيدليات، إلى جانب منصات الرعاية الصحية ومزودي خدمات الطب الاتصالي.
              </p>
              <p className="about-scope-text about-scope-text--last">
                ويشمل نطاق عملنا خدمة العملاء ومراكز الاتصال، وإدارة العمليات التأمينية، وعلاقات العملاء وبرامج الولاء، والمبيعات الهاتفية، وعمليات التجارة الإلكترونية، والتسويق الرقمي، ودعم تشغيل الاستشارات الطبية عن بعد.
              </p>
              <div className="mt-4">
                <Link to="/services" className="btn btn-brand btn-pill-cta">
                  <span>تعرف على خدماتنا</span>
                  <span className="btn-pill-circle" aria-hidden="true">
                    <i className="bi bi-arrow-up-left" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="scope-matrix-box">
                <div className="scope-matrix-group">
                  <span className="scope-matrix-label">المنشآت الصحية التي نخدمها</span>
                  <div className="scope-chips-grid">
                    {HEALTHCARE_ENTITIES.map((entity, idx) => (
                      <div key={idx} className="scope-entity-chip">
                        <i className={`bi ${entity.icon}`} aria-hidden="true" />
                        <span>{entity.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="scope-matrix-divider" />

                <div className="scope-matrix-group">
                  <span className="scope-matrix-label">مجالات الخدمات المساندة</span>
                  <ul className="scope-services-list">
                    {SUPPORT_SERVICES.map((srv, idx) => (
                      <li key={idx}>
                        <i className="bi bi-check2-circle" aria-hidden="true" />
                        <span>{srv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. TEAM SECTION (Dark Portrait Cards — Full Grid, No Slider) ================= */}

      <AboutTeamList isEnglish={false} />

    </div>
  );
}