import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { publicAsset } from '../utils/publicAsset';
import '../styles/sectors.css';

const SECTORS_CONTENT = {
  ar: {
    lang: 'ar',
    dir: 'rtl',
    breadcrumbHome: 'الرئيسية',
    breadcrumbCurrent: 'القطاعات',
    eyebrow: 'القطاعات الصحية التي نخدمها في الخليج',
    title: 'تعهيد خدمة العملاء ومراكز الاتصال للقطاع الصحي',
    introOne:
      'نوفر فرق تشغيل متخصصة للمستشفيات والعيادات والصيدليات والمختبرات وشركات التأمين في الخليج، تعمل كامتداد لعملياتك وتلتزم بأنظمتك وإجراءاتك.',
    introTwo:
      'نغطي مختلف المنشآت الصحية وسلاسل الإمداد الطبية ومنصات الرعاية الرقمية مع التزام واضح بمستويات الخدمة وجودة الأداء.',
    ctaPrimary: 'احجز استشارة مجانية',
    ctaSecondary: 'اطلب خطة فريق مخصصة',
    whyEyebrow: 'لماذا ميلا سيرف؟',
    whyPillars: [
      {
        icon: 'bi-person-badge',
        title: 'توظيف مخصص',
        desc: 'نختار الوكلاء حسب مجالك وأدواتك.',
      },
      {
        icon: 'bi-journal-check',
        title: 'تدريب لكل دور',
        desc: 'انضمام مبني على سير عملك.',
      },
      {
        icon: 'bi-globe-americas',
        title: 'خبرة بسوق الخليج',
        desc: 'نفهم الثقافة وتوقعات العملاء.',
      },
    ],
    deliverablesHeading: 'ما تشمله الخدمة',
    outcomeLabel: 'النتيجة',
    ctaLinkLabel: 'احجز مكالمة استراتيجية',
    groups: [
      {
        id: 'sec-1',
        navLabel: 'مقدمو الرعاية الصحية',
        icon: 'bi-hospital',
        tag: 'المجموعة الأولى • مقدمو الرعاية الصحية',
        title: 'مقدمو الرعاية الصحية',
        lead: 'حلول تشغيلية متكاملة للمستشفيات والمراكز الطبية والعيادات ومراكز التصوير والمختبرات والرعاية المنزلية والطب عن بُعد لتخفيف الضغط التشغيلي ورفع جودة تجربة المريض.',
        sectors: [
          {
            id: 'hospitals',
            title: 'المستشفيات والمراكز الطبية',
            subtitle: 'حجم مرضى ومواعيد ومكالمات ضخم يحتاج تشغيلا دقيقًا.',
            image: publicAsset('Images/sectors/hospitals.jpg'),
            imageAlt: 'المستشفيات والمراكز الطبية',
            points: [
              'مركز اتصال للحجوزات والاستفسارات والطوارئ',
              'متابعة النتائج والمواعيد واستبيانات الرضا',
              'دعم الفوترة والتأمين والتحقق من الأهلية',
              'إدخال البيانات وفرق QA لمراجعة الدقة',
            ],
            outcome: 'ضغط أقل على الطاقم، تجربة مريض أفضل، وأخطاء تشغيلية أقل.',
          },
          {
            id: 'multi-branch',
            title: 'سلاسل المراكز الطبية',
            subtitle: 'توحيد مستوى الخدمة والإجراءات عبر كل الفروع.',
            image: publicAsset('Images/sectors/multi-branch.jpg'),
            imageAlt: 'سلاسل المراكز الطبية',
            points: [
              'مركز تشغيل موحد',
              'مركز اتصال مشترك وتوزيع المواعيد بين الفروع',
              'توحيد إجراءات التشغيل (SOPs) ومراقبتها بفرق QA',
              'تقارير أداء لكل فرع',
            ],
            outcome: 'تجربة موحدة للمريض، توسّع أسهل، وتحكم أعلى في الأداء.',
          },
          {
            id: 'clinics',
            title: 'العيادات الخاصة ومراكز التخصصات',
            subtitle: 'حجز ومتابعة سلسة، وتجربة مريض راقية من أول اتصال.',
            image: publicAsset('Images/sectors/clinics.jpg'),
            imageAlt: 'العيادات الخاصة ومراكز التخصصات',
            points: [
              'حجوزات عبر المكالمات والواتساب والنماذج',
              'متابعة ما بعد الزيارة (Post-Visit Follow-up)',
              'إدارة التقييمات وتحسين السمعة الرقمية',
              'حملات لإعادة تفعيل المرضى غير النشطين',
            ],
            outcome: 'حضور أعلى، فوات مواعيد (No-show) أقل، وزيارات أكثر لكل مريض.',
          },
          {
            id: 'radiology',
            title: 'مراكز الأشعة والتصوير الطبي',
            subtitle: 'دقة المواعيد وسرعة تسليم التقارير.',
            image: publicAsset('Images/sectors/radiology.jpg'),
            imageAlt: 'مراكز الأشعة والتصوير الطبي',
            points: [
              'حجوزات وتذكير بالمواعيد',
              'تنسيق مع المستشفيات والعيادات المحيلة',
              'إشعار المريض والطبيب بجاهزية التقارير',
              'الرد على استفسارات التحضير قبل الفحص',
            ],
            outcome: 'سير عمل أسلس وضغط أقل على فريق الاستقبال.',
          },
          {
            id: 'labs',
            title: 'المختبرات الطبية والتحاليل',
            subtitle: 'إدارة الطلبات والسحب المنزلي وتسليم النتائج بأكثر من قناة.',
            image: publicAsset('Images/sectors/labs.jpg'),
            imageAlt: 'المختبرات الطبية والتحاليل',
            points: [
              'مركز اتصال لطلبات التحاليل والسحب المنزلي',
              'إبلاغ المرضى بجاهزية النتائج وطريقة الاستلام',
              'دعم علاقات الأطباء الشركاء (Physician Liaison)',
              'إدخال البيانات غير السريرية والفواتير',
            ],
            outcome: 'دورة عمل أسرع، استفسارات متكررة أقل، ورضا أعلى.',
          },
          {
            id: 'home-care',
            title: 'خدمات التمريض والرعاية المنزلية',
            subtitle: 'تنسيق بين التمريض والأطباء والمرضى وأسرهم.',
            image: publicAsset('Images/sectors/home-care.jpg'),
            imageAlt: 'خدمات التمريض والرعاية المنزلية',
            points: [
              'إدارة طلبات الزيارات وجدولة الطاقم',
              'متابعة المرضى مع الأسرة',
              'تذكير بالمواعيد والأدوية والجلسات',
              'دعم الفوترة وموافقات التأمين',
            ],
            outcome: 'تنسيق أفضل، إلغاءات أقل، واستمرارية رعاية.',
          },
          {
            id: 'telemedicine',
            title: 'الطب عن بعد (Tele-medicine)',
            subtitle: 'تجربة رقمية سلسة من حجز الجلسة حتى استلام الوصفة.',
            image: publicAsset('Images/sectors/telemedicine.jpg'),
            imageAlt: 'الطب عن بعد',
            points: [
              'حجز الجلسات وتنظيم جداول الأطباء',
              'دعم المرضى في الدخول للجلسات وإرسال التقارير',
              'متابعة ما بعد الاستشارة: الأدوية، إعادة التعبئة، زيارة حضورية',
              'ربط المنصة بالصيدليات والمختبرات الشريكة',
            ],
            outcome: 'جلسات مكتملة أكثر والتزام أعلى بالخطة العلاجية.',
          },
        ],
      },
      {
        id: 'sec-2',
        navLabel: 'الصيدلة والتوريد الطبي',
        icon: 'bi-capsule',
        tag: 'المجموعة الثانية • الصيدلة والتوريد الطبي',
        title: 'الصيدلة والتوريد الطبي',
        lead: 'تشغيل منظم لسلاسل الصيدليات وشركات الأجهزة والمستلزمات الطبية لدعم المبيعات والطلبات والوصفات الإلكترونية وخدمة ما بعد البيع.',
        sectors: [
          {
            id: 'pharmacies',
            title: 'الصيدليات وسلاسل الصيدلة',
            subtitle: 'تشغيل منظم بين الفروع مع سرعة الخدمة ودقة الصرف.',
            image: publicAsset('Images/sectors/pharmacies.jpg'),
            imageAlt: 'الصيدليات وسلاسل الصيدلة',
            points: [
              'خدمة عملاء عبر الهاتف والموقع والتطبيق والواتساب',
              'الوصفات الإلكترونية (مثل وصفتي) والتأمين والتحقق من الأهلية',
              'تتبع الطلبات والتوصيل ومعالجة الشكاوى',
              'إدارة محتوى ومنتجات المتجر الإلكتروني',
            ],
            outcome: 'تجربة أفضل، مبيعات رقمية أعلى، وضغط أقل على صيدلي الفرع.',
          },
          {
            id: 'medical-devices',
            title: 'شركات الأجهزة والمستلزمات الطبية',
            subtitle: 'سلسلة توريد معقدة وطلبات B2B ودعم ما بعد البيع.',
            image: publicAsset('Images/sectors/medical-devices.jpg'),
            imageAlt: 'شركات الأجهزة والمستلزمات الطبية',
            points: [
              'فرق مبيعات داخلية (Inside Sales)',
              'دعم فني أساسي وتنسيق الصيانة الميدانية',
              'إدارة الطلبات والعقود وعروض الأسعار',
              'دعم المتجر الإلكتروني (إن وجد)',
            ],
            outcome: 'مبيعات B2B أعلى، متابعة أنظم مع العملاء، وتجربة ما بعد بيع أفضل.',
          },
        ],
      },
      {
        id: 'sec-3',
        navLabel: 'التأمين والتقنية الصحية',
        icon: 'bi-shield-check',
        tag: 'المجموعة الثالثة • التأمين والتقنية الصحية',
        title: 'التأمين والتقنية الصحية',
        lead: 'دعم تشغيلي وتقني لشركات التأمين الصحي والمنصات الصحية الرقمية لاستيعاب النمو ومعالجة الاستفسارات والموافقات والتذاكر بكفاءة.',
        sectors: [
          {
            id: 'insurance',
            title: 'شركات التأمين الصحي',
            subtitle: 'مطالبات واستفسارات وموافقات مسبقة وشكاوى بأعداد كبيرة.',
            image: publicAsset('Images/sectors/insurance.jpg'),
            imageAlt: 'شركات التأمين الصحي',
            points: [
              'مركز اتصال لاستفسارات التغطية والشبكة المعتمدة',
              'الموافقات المسبقة (Pre-authorization) والمطالبات غير السريرية',
              'متابعة الشكاوى وتصعيد الحالات الحرجة',
              'تقارير تشغيلية عن أنماط الاستخدام',
            ],
            outcome: 'انتظار أقل، رضا أعلى للمؤمن عليهم، وعبء أقل على فرق المطالبات.',
          },
          {
            id: 'healthtech',
            title: 'المنصات الصحية الرقمية (HealthTech)',
            subtitle: 'دعم تشغيلي وتقني يواكب نمو المستخدمين.',
            image: publicAsset('Images/sectors/healthtech.jpg'),
            imageAlt: 'المنصات الصحية الرقمية',
            points: [
              'فرق Onboarding للأطباء والعيادات',
              'دعم المستخدمين المرضى ومقدمي الخدمة عبر قنوات متعددة',
              'QA واختبار الأنظمة قبل الإطلاق والتحديثات',
              'إدارة المحتوى الطبي والتثقيفي',
            ],
            outcome: 'تذاكر تقنية متكررة أقل، احتفاظ أعلى بالمستخدمين، وإطلاق أسرع.',
          },
        ],
      },
    ],
    bottomCta: {
      eyebrow: 'حلول تشغيلية مصممة لقطاعك',
      title: 'تبحث عن حل مخصص لقطاعك؟',
      desc: 'سنعرض لك كيف ساعدنا شركات مشابهة في بناء فرق خارجية موثوقة وعالية الأداء، وكيف يمكننا فعل الأمر نفسه لك.',
      primary: 'احجز مكالمة استراتيجية مجانية',
      secondary: 'اطلب خطة فريق مخصصة',
    },
  },
  en: {
    lang: 'en',
    dir: 'ltr',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Sectors',
    eyebrow: 'HEALTHCARE SECTORS WE SERVE ACROSS THE GULF',
    title: 'Customer Service and Contact Center Outsourcing for the Healthcare Sector',
    introOne:
      'We provide dedicated operations teams to hospitals, clinics, pharmacies, laboratories, and insurers across the Gulf. Our teams operate as an extension of your own, working within your systems and following your procedures.',
    introTwo:
      'Built for high-volume healthcare environments, our model combines role-specific onboarding, quality assurance, and measurable SLA tracking.',
    ctaPrimary: 'Book a Free Consultation',
    ctaSecondary: 'Request a Dedicated Team Plan',
    whyEyebrow: 'WHY MILASERV?',
    whyPillars: [
      {
        icon: 'bi-person-badge',
        title: 'Dedicated recruitment',
        desc: 'We select agents to match your specialty and the tools you use.',
      },
      {
        icon: 'bi-journal-check',
        title: 'Role-specific training',
        desc: 'Onboarding is built around how your organization actually works.',
      },
      {
        icon: 'bi-globe-americas',
        title: 'Gulf market experience',
        desc: 'We understand the culture and what customers expect.',
      },
    ],
    deliverablesHeading: 'Key Operational Scope',
    outcomeLabel: 'Outcome',
    ctaLinkLabel: 'Book a Strategy Call',
    groups: [
      {
        id: 'sec-1',
        navLabel: 'Healthcare Providers',
        icon: 'bi-hospital',
        tag: 'GROUP 01 • HEALTHCARE PROVIDERS',
        title: 'Healthcare Providers',
        lead: 'Dedicated support for hospitals, medical center groups, clinics, imaging centers, laboratories, home care, and telemedicine providers.',
        sectors: [
          {
            id: 'hospitals',
            title: 'Hospitals and Medical Centers',
            subtitle: 'High volumes of patients, appointments, and calls demand precise operations.',
            image: publicAsset('Images/sectors/hospitals.jpg'),
            imageAlt: 'Hospitals and Medical Centers',
            points: [
              'Contact center for bookings, inquiries, and emergencies',
              'Follow-up on results and appointments, plus satisfaction surveys',
              'Billing, insurance, and eligibility verification support',
              'Data entry and QA teams to review accuracy',
            ],
            outcome: 'Less strain on staff, a better patient experience, and fewer operational errors.',
          },
          {
            id: 'multi-branch',
            title: 'Multi-Branch Medical Center Groups',
            subtitle: 'Consistent service standards and procedures across every branch.',
            image: publicAsset('Images/sectors/multi-branch.jpg'),
            imageAlt: 'Multi-Branch Medical Center Groups',
            points: [
              'Unified operations hub',
              'Shared contact center with appointment distribution across branches',
              'Standardized operating procedures (SOPs), monitored by QA teams',
              'Performance reporting for each branch',
            ],
            outcome: 'A consistent patient experience, simpler expansion, and tighter control over performance.',
          },
          {
            id: 'clinics',
            title: 'Private Clinics and Specialty Centers',
            subtitle: 'Smooth booking and follow-up, with a polished patient experience from the very first call.',
            image: publicAsset('Images/sectors/clinics.jpg'),
            imageAlt: 'Private Clinics and Specialty Centers',
            points: [
              'Bookings by phone, WhatsApp, and online forms',
              'Post-visit follow-up',
              'Review management and online reputation improvement',
              'Reactivation campaigns for inactive patients',
            ],
            outcome: 'Higher attendance, fewer no-shows, and more visits per patient.',
          },
          {
            id: 'radiology',
            title: 'Radiology and Medical Imaging Centers',
            subtitle: 'Accurate scheduling and faster report delivery.',
            image: publicAsset('Images/sectors/radiology.jpg'),
            imageAlt: 'Radiology and Medical Imaging Centers',
            points: [
              'Bookings and appointment reminders',
              'Coordination with referring hospitals and clinics',
              'Notifications to patients and physicians when reports are ready',
              'Answers to pre-scan preparation questions',
            ],
            outcome: 'A smoother workflow and less pressure on the front desk.',
          },
          {
            id: 'labs',
            title: 'Medical Laboratories and Diagnostics',
            subtitle: 'Order management, home sample collection, and result delivery across multiple channels.',
            image: publicAsset('Images/sectors/labs.jpg'),
            imageAlt: 'Medical Laboratories and Diagnostics',
            points: [
              'Contact center for test requests and home collection',
              'Notifying patients when results are ready and how to collect them',
              'Support for partner physician relations (liaison physicians)',
              'Non-clinical data entry and invoicing',
            ],
            outcome: 'A faster turnaround cycle, fewer repeat inquiries, and higher satisfaction.',
          },
          {
            id: 'home-care',
            title: 'Nursing and Home Healthcare Services',
            subtitle: 'Coordination between nurses, physicians, patients, and their families.',
            image: publicAsset('Images/sectors/home-care.jpg'),
            imageAlt: 'Nursing and Home Healthcare Services',
            points: [
              'Visit request management and staff scheduling',
              'Patient follow-up with family members',
              'Reminders for appointments, medication, and sessions',
              'Billing and insurance approval support',
            ],
            outcome: 'Better coordination, fewer cancellations, and continuity of care.',
          },
          {
            id: 'telemedicine',
            title: 'Telemedicine',
            subtitle: 'A digital experience that runs from booking the session to receiving the prescription.',
            image: publicAsset('Images/sectors/telemedicine.jpg'),
            imageAlt: 'Telemedicine',
            points: [
              'Session booking and physician schedule management',
              'Support for patients joining sessions and submitting reports',
              'Post-consultation follow-up: medication, refills, and in-person visits',
              'Integration of the platform with partner pharmacies and laboratories',
            ],
            outcome: 'More completed sessions and stronger adherence to treatment plans.',
          },
        ],
      },
      {
        id: 'sec-2',
        navLabel: 'Pharmacy & Medical Supply',
        icon: 'bi-capsule',
        tag: 'GROUP 02 • PHARMACY AND MEDICAL SUPPLY',
        title: 'Pharmacy and Medical Supply',
        lead: 'Structured omnichannel support for pharmacy chains and medical device suppliers across B2B orders, e-prescriptions, and after-sales care.',
        sectors: [
          {
            id: 'pharmacies',
            title: 'Pharmacies and Pharmacy Chains',
            subtitle: 'Organized operations across branches, with fast service and accurate dispensing.',
            image: publicAsset('Images/sectors/pharmacies.jpg'),
            imageAlt: 'Pharmacies and Pharmacy Chains',
            points: [
              'Customer service by phone, website, app, and WhatsApp',
              'E-prescriptions (such as Wasfaty), insurance, and eligibility verification',
              'Order tracking, delivery, and complaint handling',
              'E-commerce content and product management',
            ],
            outcome: 'A better customer experience, stronger digital sales, and less pressure on branch pharmacists.',
          },
          {
            id: 'medical-devices',
            title: 'Medical Device and Supply Companies',
            subtitle: 'Complex supply chains, B2B orders, and after-sales support.',
            image: publicAsset('Images/sectors/medical-devices.jpg'),
            imageAlt: 'Medical Device and Supply Companies',
            points: [
              'Inside sales teams',
              'First-line technical support and field maintenance coordination',
              'Order, contract, and quotation management',
              'E-commerce support, where applicable',
            ],
            outcome: 'Higher B2B sales, more organized client follow-up, and a better after-sales experience.',
          },
        ],
      },
      {
        id: 'sec-3',
        navLabel: 'Insurance & Health Tech',
        icon: 'bi-shield-check',
        tag: 'GROUP 03 • INSURANCE AND HEALTH TECH',
        title: 'Insurance and Health Tech',
        lead: 'Scalable operational and technical support for health insurers and digital health platforms handling claims, approvals, and user growth.',
        sectors: [
          {
            id: 'insurance',
            title: 'Health Insurance Companies',
            subtitle: 'High volumes of claims, inquiries, pre-authorizations, and complaints.',
            image: publicAsset('Images/sectors/insurance.jpg'),
            imageAlt: 'Health Insurance Companies',
            points: [
              'Contact center for coverage and approved-network inquiries',
              'Pre-authorizations and non-clinical claims',
              'Complaint follow-up and escalation of critical cases',
              'Operational reporting on usage patterns',
            ],
            outcome: 'Shorter wait times, higher member satisfaction, and a lighter load on claims teams.',
          },
          {
            id: 'healthtech',
            title: 'Digital Health Platforms (Health Tech)',
            subtitle: 'Operational and technical support that keeps pace with user growth.',
            image: publicAsset('Images/sectors/healthtech.jpg'),
            imageAlt: 'Digital Health Platforms',
            points: [
              'Onboarding teams for physicians and clinics',
              'Multichannel support for users, both patients and providers',
              'QA and system testing ahead of launches and updates',
              'Medical and educational content management',
            ],
            outcome: ' Fewer repeat technical tickets, stronger user retention, and faster launches.',
          },
        ],
      },
    ],
    bottomCta: {
      eyebrow: 'TAILORED TO YOUR HEALTHCARE OPERATION',
      title: 'Looking for a solution tailored to your sector?',
      desc: 'We will show you how we have helped similar companies build reliable, high-performing external teams, and how we can do the same for you.',
      primary: 'Book a Free Strategy Call',
      secondary: 'Request a Dedicated Team Plan',
    },
  },
};

export default function Sectors({ initialLang = 'ar' }) {
  const lang = initialLang === 'en' ? 'en' : 'ar';
  const [activeId, setActiveId] = useState('sec-1');

  const content = SECTORS_CONTENT[lang];

  useEffect(() => {
    const blocks = document.querySelectorAll('.sec-group-block');
    if (!('IntersectionObserver' in window) || !blocks.length) return;

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );

    blocks.forEach((b) => spy.observe(b));
    return () => spy.disconnect();
  }, [lang]);

  return (
    <div dir={content.dir} lang={content.lang} className="sectors-page">
      {/* ================= HERO (Matches Services & Homepage Aesthetic) ================= */}
      <section className="page-hero sec-hero" id="top">
        <div className="page-hero__glow" aria-hidden="true" />
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
            <a className="btn btn-glass btn-lg" href="#sec-1">
              {content.ctaSecondary} <i className="bi bi-arrow-down-short" aria-hidden="true" />
            </a>
          </div>

          {/* Why MilaServ Strip */}
          <div className="sec-why-bar">
            <span className="sec-why-bar__label">{content.whyEyebrow}</span>
            <div className="sec-why-grid">
              {content.whyPillars.map((pillar) => (
                <div key={pillar.title} className="sec-why-card">
                  <div className="sec-why-card__icon" aria-hidden="true">
                    <i className={`bi ${pillar.icon}`} />
                  </div>
                  <div>
                    <strong>{pillar.title}</strong>
                    <p>{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= STICKY PILL INDEX BAR ================= */}
      <nav className="svc-nav sec-sticky-nav" aria-label="Sector groups">
        <div className="container">
          <ul>
            {content.groups.map((grp) => (
              <li key={grp.id}>
                <a
                  href={`#${grp.id}`}
                  className={activeId === grp.id ? 'is-active' : ''}
                  aria-current={activeId === grp.id ? 'true' : undefined}
                >
                  <i className={`bi ${grp.icon}`} aria-hidden="true" />
                  {grp.navLabel}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ================= ALTERNATING LIGHT & DARK NAVY SECTOR BLOCKS ================= */}
      <div className="svc-blocks sec-blocks">
        {content.groups.map((grp, groupIdx) => {
          const groupNum = String(groupIdx + 1).padStart(2, '0');
          return (
            <section
              key={grp.id}
              id={grp.id}
              className="svc-block sec-group-block"
              aria-labelledby={`${grp.id}-title`}
            >
              <div className="container">
                <div className="sec-group-header">
                  <div className="sec-group-header__meta">
                    <span className="svc-block__no" aria-hidden="true">
                      {groupNum}
                    </span>
                    <div className="svc-block__icon" aria-hidden="true">
                      <i className={`bi ${grp.icon}`} />
                    </div>
                  </div>
                  <span className="svc-block__tag">{grp.tag}</span>
                  <h2 id={`${grp.id}-title`}>{grp.title}</h2>
                  <p className="svc-block__lead sec-group-header__lead">{grp.lead}</p>
                </div>

                <div className="sec-cards-grid">
                  {grp.sectors.map((sec, idx) => (
                    <article key={sec.id} id={sec.id} className="sec-feature-card">
                      {/* Photo / Visual Frame for Each Sector */}
                      <div className="sec-feature-card__media">
                        <img
                          src={sec.image}
                          alt={sec.imageAlt}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.classList.add('is-fallback');
                          }}
                        />
                        <div className="sec-feature-card__media-badge">
                          <span>{String(idx + 1).padStart(2, '0')}</span>
                        </div>
                        <div className="sec-feature-card__media-fallback" aria-hidden="true">
                          <i className={`bi ${grp.icon}`} />
                        </div>
                      </div>

                      <div className="sec-feature-card__body">
                        <h3>{sec.title}</h3>
                        <p className="sec-feature-card__subtitle">{sec.subtitle}</p>

                        <div className="sec-feature-card__scope">
                          <h4>{content.deliverablesHeading}</h4>
                          <ul>
                            {sec.points.map((pt, pIdx) => (
                              <li key={pIdx}>{pt}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="sec-feature-card__outcome">
                          <span className="sec-outcome-tag">
                            <i className="bi bi-check2-circle" aria-hidden="true" />
                            <span>{content.outcomeLabel}:</span>
                          </span>
                          <p>{sec.outcome}</p>
                        </div>

                        <a
                          className="link-more sec-feature-card__cta"
                          href="https://calendly.com/milaserv"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {content.ctaLinkLabel}
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ================= BOTTOM CTA BAND ================= */}
      <section className="sec-bottom-cta">
        <div className="container">
          <div className="sec-bottom-cta__box">
            <div className="row align-items-center gy-4">
              <div className="col-lg-7">
                <span className="sec-bottom-cta__eyebrow">{content.bottomCta.eyebrow}</span>
                <h2>{content.bottomCta.title}</h2>
                <p>{content.bottomCta.desc}</p>
              </div>
              <div className="col-lg-5">
                <div className="sec-bottom-cta__actions">
                  <a
                    className="btn btn-brand-light btn-lg"
                    href="https://calendly.com/milaserv"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.bottomCta.primary}
                  </a>
                  <a
                    className="btn btn-glass btn-lg"
                    href="https://calendly.com/milaserv"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.bottomCta.secondary}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}