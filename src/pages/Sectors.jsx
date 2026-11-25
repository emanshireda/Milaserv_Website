import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/sectors.css';

const SECTOR_MEDIA = {
  heroBanner:
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=85',
  hospitals:
    './Images/hospital.jpg',
  multiBranch:
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85',
  labs:
    'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1400&q=85',
  pharmacies:
    './Images/Phramcy.jpg',
  healthtech:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85',
  telemedicine:
    './Images/healthcare.jpg',
};

const SECTORS_DATA = {
  ar: {
    lang: 'ar',
    dir: 'rtl',
    breadcrumbHome: 'الرئيسية',
    breadcrumbCurrent: 'القطاعات',
    eyebrow: 'القطاعات التي نخدمها',
    title: 'حلول تشغيلية متخصصة لمختلف قطاعات الرعاية الصحية',
    introOne:
      'لكل منشأة صحية متطلبات تشغيلية تختلف باختلاف طبيعة خدماتها وحجم أعمالها، من إدارة تواصل المرضى وتنظيم المواعيد إلى متابعة الطلبات والعمليات الإدارية.',
    introTwo:
      'في ميلا سيرف، نوفر فرق عمل متخصصة عن بعد لدعم المستشفيات والمراكز والمجمعات الطبية والمختبرات والصيدليات ومنصات الرعاية الصحية ومزودي خدمات الطب الاتصالي في المملكة العربية السعودية ودول الخليج.',
    ctaPrimary: 'احجز استشارة مجانية',
    ctaSecondary: 'استعراض القطاعات',
    scopeHeading: 'كيف ندعم عمليات منشأتك؟',
    outcomeLabel: 'القيمة التشغيلية',
    sectors: [
      {
        id: 'hospitals',
        num: '01',
        navLabel: 'المستشفيات',
        icon: 'bi-hospital',
        title: 'المستشفيات',
        subtitle: 'دعم تشغيلي يواكب حجم العمليات وتعدد الأقسام',
        summary:
          'تتطلب إدارة التواصل مع المرضى والمراجعين في المستشفيات تنسيقًا مستمرًا بين الأقسام، وقدرة على التعامل مع أعداد كبيرة من المواعيد والاستفسارات والطلبات، مع الحفاظ على جودة الخدمة ودقة المتابعة.',
        image: SECTOR_MEDIA.hospitals,
        points: [
          'إدارة المكالمات الواردة والصادرة واستفسارات المرضى والمراجعين.',
          'تنظيم حجوزات المواعيد وتأكيدها ومتابعة التعديلات.',
          'متابعة الطلبات والشكاوى وتنسيق تصعيدها إلى الأقسام المختصة.',
          'دعم الإجراءات الإدارية المتعلقة بالتأمين الطبي والتحقق من الأهلية والموافقات والمطالبات.',
          'تنظيم التواصل بشأن جاهزية النتائج والمواعيد وفق إجراءات المستشفى.',
          'متابعة جودة التواصل وإعداد التقارير التشغيلية وفق مؤشرات الأداء المتفق عليها.',
        ],
        outcome:
          'تخفيف الأعباء الإدارية عن الفرق الداخلية، وتحسين التنسيق بين الأقسام، ودعم تجربة أكثر تنظيمًا للمرضى والمراجعين.',
      },
      {
        id: 'multi-branch',
        num: '02',
        navLabel: 'المراكز والمجمعات الطبية',
        icon: 'bi-building-check',
        title: 'المراكز والمجمعات الطبية',
        subtitle: 'إدارة أكثر تنظيمًا للتواصل والمواعيد عبر التخصصات المختلفة',
        summary:
          'تتطلب المراكز والمجمعات الطبية تنسيقًا مستمرًا بين التخصصات والأقسام، مع إدارة دقيقة للمواعيد واستفسارات المرضى ومتابعة الخدمات، بما يحافظ على جودة التواصل ويخفف الأعباء التشغيلية عن الفرق الداخلية.',
        image: SECTOR_MEDIA.multiBranch,
        points: [
          'إدارة استفسارات المرضى عبر الهاتف وواتساب والقنوات الرقمية المعتمدة.',
          'تنظيم الحجوزات وتنسيق المواعيد وفق التخصصات والجداول المحددة.',
          'تأكيد المواعيد وإرسال التذكيرات ومتابعة التعديلات والإلغاءات.',
          'متابعة طلبات المرضى وشكاواهم والتنسيق مع الأقسام المختصة.',
          'جمع تقييمات العملاء وملاحظاتهم ومتابعة فرص تحسين تجربة الخدمة.',
          'تحديث بيانات التواصل وإعداد التقارير التشغيلية ومؤشرات الأداء المتفق عليها.',
        ],
        outcome:
          'تنظيم التواصل والحجوزات بين التخصصات المختلفة، وتخفيف الضغط على فرق الاستقبال، ودعم تجربة أكثر اتساقًا للعملاء.',
      },
      {
        id: 'labs',
        num: '03',
        navLabel: 'المختبرات الطبية',
        icon: 'bi-eyedropper',
        title: 'المختبرات الطبية',
        subtitle: 'تواصل منظم يدعم تجربة العملاء من الحجز إلى المتابعة',
        summary:
          'تتطلب خدمات المختبرات الطبية تنسيقًا دقيقًا للحجوزات وطلبات الفحوصات، إلى جانب متابعة الاستفسارات والتواصل بشأن جاهزية النتائج وطرق استلامها.',
        image: SECTOR_MEDIA.labs,
        points: [
          'استقبال استفسارات العملاء وحجز مواعيد الفحوصات.',
          'تنظيم طلبات السحب المنزلي وتنسيق المواعيد مع الفرق المختصة.',
          'تأكيد الحجوزات وإرسال التذكيرات عند الحاجة.',
          'إخطار العملاء بجاهزية النتائج وطرق استلامها وفق الإجراءات المعتمدة.',
          'متابعة الشكاوى والملاحظات وتصعيد الحالات إلى الأقسام المختصة.',
          'دعم إدخال البيانات الإدارية وإعداد تقارير التواصل والمتابعة.',
        ],
        outcome:
          'تنظيم أفضل للحجوزات والطلبات، وتقليل الأعباء على فرق الاستقبال، وتحسين متابعة استفسارات العملاء.',
      },
      {
        id: 'pharmacies',
        num: '04',
        navLabel: 'الصيدليات',
        icon: 'bi-capsule-pill',
        title: 'الصيدليات',
        subtitle: 'دعم تشغيلي يربط خدمة العملاء بالمتاجر الإلكترونية',
        summary:
          'تتعامل الصيدليات مع احتياجات متعددة تشمل استفسارات العملاء والطلبات الإلكترونية وخدمات التوصيل وبرامج الولاء، ما يتطلب تنسيقًا مستمرًا بين قنوات التواصل والعمليات اليومية.',
        image: SECTOR_MEDIA.pharmacies,
        points: [
          'إدارة استفسارات العملاء عبر الهاتف وواتساب والموقع الإلكتروني والتطبيق.',
          'استقبال الطلبات الإلكترونية وتأكيدها ومتابعة حالاتها.',
          'التنسيق بشأن عمليات التوصيل والمرتجعات وفق السياسات المعتمدة.',
          'تحديث بيانات المنتجات والأسعار والكميات المتاحة وفق المعلومات المعتمدة من الصيدلية.',
          'تشغيل برامج الولاء والمكافآت وتنظيم أنشطة التواصل مع العملاء.',
          'متابعة الشكاوى وتقييمات العملاء وإعداد التقارير التشغيلية.',
        ],
        outcome:
          'تحسين التنسيق بين خدمة العملاء والمتجر الإلكتروني، وتنظيم متابعة الطلبات، وتخفيف المهام الإدارية عن فرق الصيدليات. وتنفذ المهام وفق الضوابط المنظمة للنشاط الصيدلي، مع بقاء القرارات الصيدلانية والمهام المهنية من اختصاص المسؤولين المخولين.',
      },
      {
        id: 'healthtech',
        num: '05',
        navLabel: 'منصات الرعاية الصحية',
        icon: 'bi-phone-flip',
        title: 'منصات الرعاية الصحية',
        subtitle: 'فرق تشغيل تدعم المستخدمين وتواكب نمو المنصة',
        summary:
          'مع توسع منصات الرعاية الصحية الرقمية، تزداد الحاجة إلى تنظيم التواصل مع المستخدمين، وإدارة الطلبات والاستفسارات وتقديم دعم مستمر يتناسب مع طبيعة الخدمات الرقمية.',
        image: SECTOR_MEDIA.healthtech,
        points: [
          'إدارة استفسارات المستخدمين عبر قنوات التواصل المعتمدة.',
          'دعم تسجيل المستخدمين ومقدمي الخدمات وتهيئة حساباتهم.',
          'متابعة الطلبات والملاحظات المتعلقة باستخدام المنصة.',
          'استقبال المشكلات التقنية وتوثيقها وتصعيدها إلى الفرق المختصة.',
          'تنظيم التواصل والمتابعة المرتبطة بالخدمات المقدمة عبر المنصة.',
          'متابعة مؤشرات جودة الدعم وإعداد التقارير التشغيلية.',
        ],
        outcome:
          'تنظيم تجربة دعم المستخدمين، وتحسين متابعة الطلبات والمشكلات، وتخفيف الضغط عن الفرق الداخلية خلال مراحل النمو والتوسع.',
      },
      {
        id: 'telemedicine',
        num: '06',
        navLabel: 'الطب الاتصالي',
        icon: 'bi-camera-video',
        title: 'مزودو خدمات الطب الاتصالي',
        subtitle: 'دعم متكامل لتشغيل الاستشارات الطبية الافتراضية',
        summary:
          'تتطلب خدمات الطب الاتصالي تنسيقًا مستمرًا بين المرضى والأطباء والفرق المسؤولة عن تشغيل المنصة، لضمان تنظيم المواعيد وتوفير الدعم اللازم قبل الاستشارات وبعدها.',
        image: SECTOR_MEDIA.telemedicine,
        points: [
          'استقبال طلبات الاستشارات الافتراضية وإدارة الحجوزات.',
          'تنظيم جداول الأطباء وتأكيد المواعيد وإرسال التذكيرات.',
          'مساعدة المرضى في الوصول إلى الجلسات واستخدام المنصة.',
          'متابعة الاستفسارات والطلبات قبل الاستشارة وبعدها.',
          'دعم التنسيق الإداري للفرز الطبي وفق البروتوكولات المعتمدة، مع إحالة القرارات الطبية إلى المختصين المخولين.',
          'تنسيق المتابعات والمواعيد والخدمات المرتبطة بالاستشارات وفق نطاق الخدمة.',
        ],
        outcome:
          'تنظيم تجربة الاستشارات الافتراضية، وتحسين التنسيق بين الأطراف المعنية، ودعم استمرارية التواصل والمتابعة مع المرضى.',
      },
    ],
  },
  en: {
    lang: 'en',
    dir: 'ltr',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Sectors',
    eyebrow: 'INDUSTRIES WE SERVE',
    title: 'Healthcare Operations Support Tailored to Your Sector',
    introOne:
      'Every healthcare organisation has its own operational demands. From managing patient communications and appointments to coordinating administrative workflows, the support required depends on the services you provide and the scale of your operations.',
    introTwo:
      'At Milaserv, we build and manage dedicated remote teams for hospitals, medical centres, laboratories, pharmacies, healthcare platforms and telehealth providers across Saudi Arabia and the GCC.',
    ctaPrimary: 'Book a Free Consultation',
    ctaSecondary: 'Explore All Sectors',
    scopeHeading: 'How We Support Your Organisation',
    outcomeLabel: 'The Operational Value',
    sectors: [
      {
        id: 'hospitals',
        num: '01',
        navLabel: 'Hospitals',
        icon: 'bi-hospital',
        title: 'Hospitals',
        subtitle: 'Coordinated Support for Complex Hospital Operations',
        summary:
          'Managing patient communications across hospital departments requires consistent coordination, particularly when dealing with high volumes of appointments, enquiries and service requests.',
        image: SECTOR_MEDIA.hospitals,
        points: [
          'Handle inbound and outbound calls and respond to patient and visitor enquiries.',
          'Manage appointment bookings, confirmations and schedule changes.',
          'Track requests and complaints, coordinating escalations with the appropriate departments.',
          'Support insurance-related administration, including eligibility verification, prior authorisations and claims follow-up.',
          'Coordinate appointment communications and notifications when results are ready, in line with hospital procedures.',
          'Monitor communication quality and prepare operational reports against agreed performance indicators.',
        ],
        outcome:
          'Less administrative pressure on internal teams, better coordination across departments and a more organised experience for patients and visitors.',
      },
      {
        id: 'multi-branch',
        num: '02',
        navLabel: 'Medical Centres',
        icon: 'bi-building-check',
        title: 'Medical Centres & Polyclinics',
        subtitle: 'Consistent Patient Communication Across Specialties',
        summary:
          'With multiple specialties and departments to coordinate, medical centres need reliable appointment management, clear patient communication and consistent service standards across their operations.',
        image: SECTOR_MEDIA.multiBranch,
        points: [
          'Manage patient enquiries across phone, WhatsApp and approved digital channels.',
          'Coordinate bookings based on specialties and approved schedules.',
          'Confirm appointments, send reminders and manage rescheduling and cancellations.',
          'Track patient requests and complaints, coordinating follow-up with the relevant departments.',
          'Collect customer feedback and identify opportunities to improve the service experience.',
          'Update communication records and prepare agreed operational and performance reports.',
        ],
        outcome:
          'More coordinated bookings and communications across specialties, reduced pressure on reception teams and a more consistent customer experience.',
      },
      {
        id: 'labs',
        num: '03',
        navLabel: 'Laboratories',
        icon: 'bi-eyedropper',
        title: 'Medical Laboratories',
        subtitle: 'Reliable Communication from Booking to Results Follow-Up',
        summary:
          'Laboratory services rely on accurate booking coordination, timely responses to enquiries and clear communication about test results and collection arrangements.',
        image: SECTOR_MEDIA.labs,
        points: [
          'Respond to customer enquiries and schedule laboratory tests.',
          'Coordinate home sample collection requests with the appropriate teams.',
          'Confirm bookings and send reminders when required.',
          'Notify customers when results are ready and explain approved collection procedures.',
          'Track complaints and feedback, escalating cases that require specialist attention.',
          'Support administrative data entry and prepare operational follow-up reports.',
        ],
        outcome:
          'Better organised bookings and requests, less pressure on reception staff and more efficient handling of customer enquiries.',
      },
      {
        id: 'pharmacies',
        num: '04',
        navLabel: 'Pharmacies',
        icon: 'bi-capsule-pill',
        title: 'Pharmacies',
        subtitle: 'Connecting Customer Service with E-commerce Operations',
        summary:
          'Pharmacies manage customer enquiries, online orders, deliveries and loyalty programmes across multiple channels. Keeping these activities coordinated is essential to maintaining efficient daily operations.',
        image: SECTOR_MEDIA.pharmacies,
        points: [
          'Manage customer enquiries across phone, WhatsApp, websites and mobile applications.',
          'Receive and confirm online orders and track their status.',
          'Coordinate deliveries and returns in line with approved store policies.',
          'Update product information, prices and stock availability using data approved by your pharmacy.',
          'Administer loyalty and rewards programmes and coordinate customer engagement activities.',
          'Monitor complaints and customer reviews, and prepare operational reports.',
        ],
        outcome:
          'Better coordination between customer service and online store operations, more organised order follow-up and less administrative workload for pharmacy teams. All activities follow applicable pharmacy regulations and approved procedures, with pharmaceutical decisions and professional responsibilities remaining with authorised personnel.',
      },
      {
        id: 'healthtech',
        num: '05',
        navLabel: 'Health Platforms',
        icon: 'bi-phone-flip',
        title: 'Healthcare Platforms',
        subtitle: 'Scalable Operational Support for Digital Healthcare',
        summary:
          'As healthcare platforms expand, managing user enquiries, service requests and day-to-day support becomes increasingly important to delivering a consistent digital experience.',
        image: SECTOR_MEDIA.healthtech,
        points: [
          'Manage user enquiries through approved communication channels.',
          'Assist with user and healthcare provider registration and account setup.',
          'Track requests and feedback related to platform services.',
          'Record technical issues and escalate them to the appropriate specialist teams.',
          'Coordinate communications and follow-ups related to services delivered through the platform.',
          'Monitor support quality indicators and prepare regular operational reports.',
        ],
        outcome:
          'More structured user support, clearer tracking of requests and technical issues, and reduced pressure on internal teams as the platform grows.',
      },
      {
        id: 'telemedicine',
        num: '06',
        navLabel: 'Telehealth',
        icon: 'bi-camera-video',
        title: 'Telehealth Providers',
        subtitle: 'Operational Support Throughout the Virtual Care Journey',
        summary:
          'Delivering virtual healthcare requires effective coordination between patients, physicians and platform support teams. From scheduling consultations to managing follow-ups, reliable operational support helps keep the experience organised.',
        image: SECTOR_MEDIA.telemedicine,
        points: [
          'Receive virtual consultation requests and manage appointment bookings.',
          'Coordinate physician schedules, confirm appointments and send reminders.',
          'Help patients access virtual sessions and navigate the platform.',
          'Handle enquiries and service requests before and after consultations.',
          'Support administrative coordination of medical triage under approved protocols, with clinical decisions referred to authorised healthcare professionals.',
          'Coordinate follow-up appointments and related services within the agreed scope.',
        ],
        outcome:
          'Better organised virtual consultations, smoother coordination between patients and care teams, and more consistent communication before and after appointments.',
      },
    ],
  },
};

export default function Sectors({ initialLang = 'ar' }) {
  const lang = initialLang === 'en' ? 'en' : 'ar';
  const content = SECTORS_DATA[lang];
  const { hash } = useLocation();
  const [activeSectorId, setActiveSectorId] = useState(content.sectors[0].id);

  useEffect(() => {
    const sections = document.querySelectorAll('.sec-band');
    if (!('IntersectionObserver' in window) || !sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectorId(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -58% 0px' }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [lang]);

  useEffect(() => {
    if (!hash) return;
    const targetId = hash.replace('#', '');
    setActiveSectorId(targetId);
    const el = document.getElementById(targetId);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }, [hash]);

  return (
    <div dir={content.dir} lang={content.lang} className="sectors-page">
      {/* ================= HERO ================= */}
      <section className="page-hero sec-hero" id="top">
        <div
          className="sec-hero__bg-media"
          style={{ backgroundImage: `url(${SECTOR_MEDIA.heroBanner})` }}
          aria-hidden="true"
        />
        <div className="sec-hero__scrim" aria-hidden="true" />
        <div className="sec-orb sec-orb--one" aria-hidden="true" />
        <div className="sec-orb sec-orb--two" aria-hidden="true" />

        <div className="container position-relative">
          <div className="sec-hero__top">
            <nav className="crumbs" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link to={lang === 'en' ? '/en' : '/'}>{content.breadcrumbHome}</Link>
                </li>
                <li>
                  <span aria-current="page">{content.breadcrumbCurrent}</span>
                </li>
              </ol>
            </nav>
          </div>

          <div className="sec-hero__content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow__dot" />
              <span>{content.eyebrow}</span>
            </div>

            <h1>{content.title}</h1>

            <div className="page-hero__intro">
              <p>{content.introOne}</p>
              <p>{content.introTwo}</p>
            </div>

            <div className="page-hero__actions">
              <a
                className="btn btn-brand-light btn-lg"
                href="https://calendly.com/milaserv"
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.ctaPrimary}
              </a>
              <a className="btn btn-glass btn-lg" href={`#${content.sectors[0].id}`}>
                {content.ctaSecondary} <i className="bi bi-arrow-down-short" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STICKY MOVING SECTOR NAVBAR ================= */}
      <nav className="sec-sticky-nav" aria-label={content.breadcrumbCurrent}>
        <div className="container">
          <div className="sec-sticky-nav__pill">
            <ul>
              {content.sectors.map((sec) => {
                const isActive = activeSectorId === sec.id;
                return (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className={isActive ? 'is-active' : ''}
                      aria-current={isActive ? 'true' : undefined}
                      onClick={() => setActiveSectorId(sec.id)}
                    >
                      <i className={`bi ${sec.icon}`} aria-hidden="true" />
                      <span>{sec.navLabel}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {/* ================= INDIVIDUAL SECTION PER SECTOR (ODD = WHITE, EVEN = TEAL-WHITE GRADIENT) ================= */}
      <div className="sec-sections-stream">
        {content.sectors.map((sec, idx) => {
          const isEven = idx % 2 === 1;
          const isBannerAtStart = idx % 2 === 0;

          return (
            <section
              key={sec.id}
              id={sec.id}
              className={`sec-band ${isEven ? 'sec-band--even' : 'sec-band--odd'}`}
              aria-labelledby={`${sec.id}-heading`}
            >
              <div className="container">
                <div className={`sec-band__layout ${isBannerAtStart ? '' : 'sec-band__layout--flipped'}`}>
                  {/* Creative Framed Banner */}
                  <div className="sec-band__visual-col">
                    <div className="sec-banner-frame">
                      <div className="sec-banner-frame__sheen" aria-hidden="true" />
                      <img
                        src={sec.image}
                        alt={sec.title}
                        loading="lazy"
                        className="sec-banner-frame__img"
                      />
                      <div className="sec-banner-frame__scrim" aria-hidden="true" />

                      <div className="sec-banner-frame__top">
                        <span className="sec-banner-frame__num">{sec.num}</span>
                        <span className="sec-banner-frame__icon" aria-hidden="true">
                          <i className={`bi ${sec.icon}`} />
                        </span>
                      </div>

                      <div className="sec-banner-frame__caption">
                        <span className="sec-banner-frame__sub">{sec.subtitle}</span>
                        <strong>{sec.title}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Structured Sector Data */}
                  <div className="sec-band__data-col">
                    <div className="sec-band__header">
                      <span className="sec-band__tag">
                        {sec.num} • {sec.navLabel}
                      </span>
                      <h2 id={`${sec.id}-heading`}>{sec.title}</h2>
                      <p className="sec-band__subtitle">{sec.subtitle}</p>
                      <p className="sec-band__summary">{sec.summary}</p>
                    </div>

                    <div className="sec-scope-box">
                      <h3>{content.scopeHeading}</h3>
                      <ul className="sec-scope-list">
                        {sec.points.map((pt, pIdx) => (
                          <li key={pIdx}>
                            <span className="sec-scope-list__idx">
                              {String(pIdx + 1).padStart(2, '0')}
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="sec-value-box">
                      <span className="sec-value-box__label">
                        <i className="bi bi-check2-circle" aria-hidden="true" />
                        {content.outcomeLabel}
                      </span>
                      <p>{sec.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      
    </div>
  );
}