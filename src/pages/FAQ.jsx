import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/faq.css';

const FAQ_DATA = {
  ar: {
    lang: 'ar',
    dir: 'rtl',
    toggleLabel: 'English',
    eyebrow: 'الأسئلة الشائعة',
    title: 'إجابات واضحة حول',
    titleHighlight: 'تشغيل وخدمات ميلاسيرف',
    subtitle:
      'كل ما تحتاج معرفته عن نماذج التعهيد التشغيلي، وتخصيص الفرق، والانضمام، وجودة الأداء، وحماية البيانات للمنشآت الصحية.',
    searchPlaceholder: 'ابحث عن سؤال أو كلمة مفتاحية...',
    expandAll: 'فتح الكل',
    collapseAll: 'إغلاق الكل',
    allCategories: 'جميع الأسئلة',
    noResultsTitle: 'لم نعثر على نتائج مطابقة لبحثك',
    noResultsDesc: 'جرّب كلمات بحث أخرى أو انتقل إلى فئة مختلفة للاطلاع على بقية الأسئلة.',
    resetFilters: 'عرض جميع الأسئلة',
    ctaEyebrow: 'تواصل مباشر مع فريقنا',
    ctaTitleQuestion: 'لم تجد إجابة سؤالك؟',
    ctaTitleFollowup: 'تواصل معنا واحجز استشارة.',
    ctaDesc:
      'فريقنا التشغيلي جاهز لمناقشة احتياجات منشأتك الصحية وتصميم نموذج عمل مخصص يتوافق مع أنظمتك ومعاييرك.',
    ctaPrimary: 'احجز استشارة',
    ctaSecondary: 'تواصل معنا',
    categories: [
      {
        id: 'service-team',
        title: 'عن الخدمة والفريق',
        icon: 'bi-people-fill',
        items: [
          {
            q: 'أين يعمل فريق Milaserv ، وكيف يتم تخصيصه لمنشأتي؟',
            a: 'يعمل فريق Milaserv من مقر الشركة في مصر، ويُخصص لمنشأتك الصحية ليكون امتدادًا لفريقك، ويلتزم بإجراءات عملك واحتياجاتك ومعاييرك في تقديم الخدمة.',
          },
          {
            q: 'ما اللغة التي يستخدمها فريق Milaserv مع المرضى؟',
            a: 'يتواصل فريق Milaserv باللغة العربية البيضاء بأسلوب واضح ومهني، ويتدرب على المصطلحات والتعبيرات المتداولة في المملكة العربية السعودية، بما يناسب طبيعة القطاع الصحي واحتياجات المرضى.',
          },
          {
            q: 'لماذا أتعامل مع Milaserv بدلا من توظيف فريق داخلي؟',
            a: 'نوفر لك فريقًا متخصصا ومخصصا لمنشأتك الصحية، دون أعباء التوظيف والتدريب والإدارة اليومية. نتولى تجهيز الفريق وإدارة أدائه، لتتوسع بمرونة وتركز على تطوير خدماتك الصحية.',
          },
          {
            q: 'ما الذي يميز خدمتنا عن مراكز الاتصال التقليدية؟',
            a: 'نوفر فريقا مخصصا لمنشأتك الصحية، متخصصا في القطاع الصحي، وبخبرة 4 سنوات في السوق السعودي، وتدعمه إدارة تمتلك 15 عاما من الخبرة في الرعاية الصحية السعودية. يعمل الفريق وفق إجراءات منشأتك وأهدافها ومعايير الجودة الخاصة بها، مع متابعة مؤشرات الأداء وإمكانية تعديل حجم الفريق ونطاق الخدمة حسب احتياجك.',
          },
          {
            q: 'ما قنوات خدمة العملاء التي يمكن للفريق التعامل معها؟',
            a: 'يتعامل فريق Milaserv مع قنوات متعددة وفق نطاق الخدمة المتفق عليه، تشمل المكالمات الهاتفية الواردة والصادرة، والبريد الإلكتروني، ومحادثات WhatsApp ، والمنصات الرقمية الأخرى، وتدار جميعها بشكل منظم.',
          },
        ],
      },
      {
        id: 'operations-setup',
        title: 'التشغيل والتجهيز',
        icon: 'bi-gear-wide-connected',
        items: [
          {
            q: 'كم يستغرق تجهيز الفريق وبدء العمل؟',
            a: 'يستغرق التجهيز وبدء التشغيل عادةً نحو شهر، وفقًا لطبيعة الخدمة ومتطلبات منشأتك الصحية.',
          },
          {
            q: 'ما خطوات تجهيز الفريق قبل بدء التشغيل؟',
            a: 'نبدأ بفهم احتياجات منشأتك الصحية، ثم نختار الفريق المناسب وندربه على إجراءات العمل والأنظمة المستخدمة، ونتأكد من جاهزيته قبل بدء التشغيل.',
          },
          {
            q: 'هل يعمل الفريق وفق أنظمتنا وإجراء اتنا؟',
            a: 'نعم، يعمل فريق Milaserv وفق إجراءات العمل المعتمدة لدى منشأتك الصحية، وباستخدام الأنظمة المطلوبة ضمن نطاق الخدمة المتفق عليه.',
          },
          {
            q: 'هل يتلقى الفريق تدريبا على إجراءات منشأتنا؟',
            a: 'نعم، يتلقى الفريق تدريبا على سياسات خدمة العملاء وآلية التعامل مع استفسارات المرضى ومسارات العمل واستخدام الأنظمة المعتمدة، قبل بدء التشغيل.',
          },
          {
            q: 'كم عدد المكالمات التي يستطيع الموظف التعامل معها يوميًا؟',
            a: 'يعتمد العدد على طبيعة الخدمة ومتوسط مدة المكالمة وحجم المهام المطلوبة. لذلك نحدد حجم الفريق المناسب وفق احتياجات منشأتك وحجم التواصل المتوقع.',
          },
          {
            q: 'هل يمكن تعديل حجم الفريق أو ساعات التغطية لاحقا؟',
            a: 'نعم، نوفر مرونة في تعديل حجم الفريق وساعات التغطية وفق تغير احتياجاتك، سواء بزيادة عدد الموظفين أو توسيع ساعات التشغيل أو تعديل نطاق الخدمة.',
          },
          {
            q: 'كيف يتم التنسيق بين فريق Milaserv والمنشأة الصحية؟',
            a: 'يعمل الفريق وفق إجراءات العمل المتفق عليها مع منشأتك، بما يضمن التنسيق مع الجهات المعنية داخلها ومتابعة سير العمل وفق المتطلبات التشغيلية.',
          },
        ],
      },
      {
        id: 'quality-reporting',
        title: 'الجودة والتقارير',
        icon: 'bi-bar-chart-line-fill',
        items: [
          {
            q: 'كيف أتابع أداء الفريق؟',
            a: 'تتابع أداء الفريق من خلال 360 Mila، وهو نظام مخصص لإدارة الفريق، يتيح لك رؤية واضحة لأداء الفريق والمهام المسؤول عنها وسير العمل، إلى جانب مؤشرات الأداء المتفق عليها، بما يساعدك على تقييم مستوى الخدمة ومدى توافقه مع متطلبات منشأتك.',
          },
          {
            q: 'كيف تتم مراقبة جودة المكالمات والتفاعلات؟',
            a: 'يتولى فريق متخصص في ضمان الجودة مراجعة المكالمات والتفاعلات بشكل يومي وفق المعايير المتفق عليها، بما يساعد على تقييم الأداء وتحديد فرص التحسين وضمان توافق الخدمة مع إجراءات منشأتك ومستويات الخدمة المطلوبة.',
          },
          {
            q: 'هل سأحصل على تقارير أداء دورية؟',
            a: 'نعم، نوفر تقارير أداء يومية وأسبوعية وشهرية، تساعدك على متابعة نتائج الخدمة وفق مؤشرات الأداء المتفق عليها، بما يدعم قراراتك التشغيلية ويحدد فرص التحسين.',
          },
          {
            q: 'هل تختلف اتفاقية مستوى الخدمة (SLA) حسب الخدمة؟',
            a: 'نعم، تُحدد مؤشرات الأداء ومستويات الخدمة المتوقعة وفق طبيعة الخدمة وأهداف منشأتك الصحية ومتطلبات كل مشروع.',
          },
        ],
      },
      {
        id: 'data-security',
        title: 'البيانات والأمان',
        icon: 'bi-shield-lock-fill',
        items: [
          {
            q: 'كيف تتعاملون مع بيانات المرضى والمعلومات الصحية؟',
            a: 'نتعامل مع بيانات المرضى والمعلومات الصحية وفق سياسات الخصوصية وضوابط حماية البيانات المعتمدة، مع تنظيم صلاحيات الوصول بما يناسب طبيعة العمل، ومراعاة الأنظمة المعمول بها في الدولة التي تعمل بها منشأتك.',
          },
          {
            q: 'أين يتم تخزين بيانات العملاء؟',
            a: 'يتم تخزين البيانات على أنظمة منشأتك الصحية، ويعمل الفريق عليها وفق صلاحيات الوصول المتفق عليها.',
          },
        ],
      },
    ],
  },
  en: {
    lang: 'en',
    dir: 'ltr',
    toggleLabel: 'العربية',
    eyebrow: 'FREQUENTLY ASKED QUESTIONS',
    title: 'Clear Answers on',
    titleHighlight: 'Milaserv Operations & Support',
    subtitle:
      'Everything you need to know about dedicated healthcare teams, onboarding timelines, SLA reporting, and patient data security.',
    searchPlaceholder: 'Search a question or keyword...',
    expandAll: 'Expand All',
    collapseAll: 'Collapse All',
    allCategories: 'All Questions',
    noResultsTitle: 'No matching questions found',
    noResultsDesc: 'Try a different keyword or switch categories to browse all FAQ items.',
    resetFilters: 'Show All Questions',
    ctaEyebrow: 'DIRECT CONSULTATION',
    ctaTitleQuestion: 'Still have questions?',
    ctaTitleFollowup: 'Talk to our team and book a consultation.',
    ctaDesc:
      'We help healthcare providers across Saudi Arabia and the Gulf scale patient operations with dedicated teams and measurable SLAs.',
    ctaPrimary: 'Book a Consultation',
    ctaSecondary: 'Contact Us',
    categories: [
      {
        id: 'service-team',
        title: 'Your Team & Our Service',
        icon: 'bi-people-fill',
        items: [
          {
            q: 'Where is the team based, and will it be dedicated to our organisation?',
            a: "Your team works from Milaserv's office in Egypt and is dedicated to your healthcare organisation. It follows your procedures, requirements, and service standards, working as an extension of your own team.",
          },
          {
            q: 'What language does the team use with patients?',
            a: "The team communicates in clear, neutral Arabic with a professional tone. Training includes terminology and expressions commonly used in Saudi Arabia, with particular attention to healthcare communication and patients' needs.",
          },
          {
            q: 'Why choose Milaserv instead of hiring an internal team?',
            a: "You get a specialist team dedicated to your organisation, while Milaserv takes care of recruitment, training, and daily management. We prepare the team and manage its performance so you can expand flexibly and focus on developing your healthcare services.",
          },
          {
            q: 'How is Milaserv different from a traditional contact centre?',
            a: 'Milaserv specialises in healthcare, with 4 years in the Saudi market and a management team with 15 years of experience in Saudi healthcare. Your dedicated team works in line with your procedures, objectives, and quality standards. We monitor performance indicators and can adjust the team size and service scope as your needs change.',
          },
          {
            q: 'Which customer service channels can the team manage?',
            a: 'The team can handle inbound and outbound phone calls, email, WhatsApp, and other digital platforms, depending on the agreed service scope. We manage activity across these channels through organised workflows.',
          },
        ],
      },
      {
        id: 'operations-setup',
        title: 'Getting Started & Daily Operations',
        icon: 'bi-gear-wide-connected',
        items: [
          {
            q: 'How long does it take to get started?',
            a: "It typically takes around one month to prepare the team and begin operations. Timing depends on the service and your organisation's requirements.",
          },
          {
            q: 'What happens before the team starts work?',
            a: 'We start by understanding your requirements, then select the right people and train them on your procedures and systems. We confirm that the team is ready before operations begin.',
          },
          {
            q: 'Can the team work with our systems and procedures?',
            a: 'Yes. Your team follows your organisation\'s approved procedures and uses the systems required within the agreed service scope.',
          },
          {
            q: 'Will the team be trained on our procedures?',
            a: 'Yes. Before launch, we train the team on your customer service policies, workflows, and approved systems, including how to handle patient enquiries.',
          },
          {
            q: 'How many calls can each team member handle per day?',
            a: 'Daily capacity varies with the service, average call length, and overall workload. We use your requirements and expected contact volumes to determine the right team size.',
          },
          {
            q: 'Can we change the team size or coverage hours later?',
            a: 'Yes. As your needs change, we can adjust team size, coverage hours, and service scope. This can include adding team members or extending operating hours.',
          },
          {
            q: 'How will your team coordinate with our organisation?',
            a: 'We follow the procedures agreed with your organisation, coordinate with the relevant internal teams, and monitor work in line with your operational requirements.',
          },
        ],
      },
      {
        id: 'quality-reporting',
        title: 'Performance, Quality & Reporting',
        icon: 'bi-bar-chart-line-fill',
        items: [
          {
            q: "How can we track our team's performance?",
            a: "Mila360 provides a clear view of your team's performance, assigned tasks, and workflows, alongside agreed performance indicators. This team management system helps you assess service quality and how closely delivery matches your organisation's requirements.",
          },
          {
            q: 'How do you monitor the quality of calls and customer interactions?',
            a: 'Our specialist quality assurance team reviews calls and interactions daily against agreed standards. The reviews assess performance, identify areas for improvement, and check that delivery follows your procedures and meets the required service levels.',
          },
          {
            q: 'Will we receive regular performance reports?',
            a: 'Yes. We provide daily, weekly, and monthly reports based on the agreed performance indicators. They show service results, support operational decisions, and highlight opportunities to improve.',
          },
          {
            q: 'Does the service level agreement (SLA) vary by service?',
            a: "Yes. We define performance indicators and expected service levels based on the service, your organisation's objectives, and the requirements of each project.",
          },
        ],
      },
      {
        id: 'data-security',
        title: 'Data & Security',
        icon: 'bi-shield-lock-fill',
        items: [
          {
            q: 'How do you handle patient data and health information?',
            a: 'We handle patient data and health information under approved privacy policies and data protection controls. Access permissions are set according to the work involved. We also take account of the regulations that apply where your organisation operates.',
          },
          {
            q: 'Where is customer data stored?',
            a: "Data is stored in your healthcare organisation's systems. Our team works within those systems using the access permissions agreed with you.",
          },
        ],
      },
    ],
  },
};

export default function FAQ({ initialLang = 'ar' }) {
  const [lang, setLang] = useState(initialLang === 'en' ? 'en' : 'ar');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState(() => new Set(['service-team-0']));

  useEffect(() => {
    setLang(initialLang === 'en' ? 'en' : 'ar');
  }, [initialLang]);

  const content = FAQ_DATA[lang];

  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return content.categories
      .filter((cat) => activeCategory === 'all' || cat.id === activeCategory)
      .map((cat) => {
        const items = cat.items
          .map((item, idx) => ({ ...item, key: `${cat.id}-${idx}` }))
          .filter((item) => {
            if (!q) return true;
            return (
              item.q.toLowerCase().includes(q) ||
              item.a.toLowerCase().includes(q) ||
              cat.title.toLowerCase().includes(q)
            );
          });
        return { ...cat, items };
      })
      .filter((cat) => cat.items.length > 0);
  }, [content, activeCategory, searchQuery]);

  const toggleItem = (key) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const handleExpandAll = () => {
    const allKeys = new Set();
    filteredCategories.forEach((cat) => {
      cat.items.forEach((item) => allKeys.add(item.key));
    });
    setOpenIds(allKeys);
  };

  const handleCollapseAll = () => {
    setOpenIds(new Set());
  };

  return (
    <div dir={content.dir} lang={content.lang} className="faq-page">
      {/* ================= LIGHT CORPORATE HEADER WITH DARK TOPOGRAPHY ACCENT ================= */}
      <section className="faq-hero">
        <div className="faq-topo-layer" aria-hidden="true" />
        <div className="container position-relative">
          <div className="faq-hero__top-bar">
            <span className="faq-eyebrow-pill">
              <span className="faq-eyebrow-dot" aria-hidden="true" />
              <span>{content.eyebrow}</span>
            </span>

          </div>

          <h1 className="faq-hero__title">
            {content.title}{' '}
            <span className="faq-hero__highlight">{content.titleHighlight}</span>
          </h1>
          <p className="faq-hero__subtitle">{content.subtitle}</p>

          {/* Search & Controls Bar */}
          <div className="faq-toolbar">
            <div className="faq-search-box">
              <i className="bi bi-search faq-search-box__icon" aria-hidden="true" />
              <input
                type="search"
                className="faq-search-box__input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={content.searchPlaceholder}
                aria-label={content.searchPlaceholder}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="faq-search-box__clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <i className="bi bi-x-lg" aria-hidden="true" />
                </button>
              )}
            </div>

            <div className="faq-toolbar__actions">
              <button type="button" className="faq-action-btn" onClick={handleExpandAll}>
                <i className="bi bi-arrows-expand" aria-hidden="true" />
                <span>{content.expandAll}</span>
              </button>
              <button type="button" className="faq-action-btn" onClick={handleCollapseAll}>
                <i className="bi bi-arrows-collapse" aria-hidden="true" />
                <span>{content.collapseAll}</span>
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="faq-filters" role="tablist" aria-label="FAQ categories">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'all'}
              className={`faq-filter-chip ${activeCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              {content.allCategories}
            </button>
            {content.categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`faq-filter-chip ${activeCategory === cat.id ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <i className={`bi ${cat.icon}`} aria-hidden="true" />
                <span>{cat.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GLASSMORPHIC ACCORDION SECTIONS ================= */}
      <section className="section faq-body-section">
        <div className="container">
          {filteredCategories.length === 0 ? (
            <div className="faq-empty-card">
              <div className="faq-dark-icon-badge" aria-hidden="true">
                <i className="bi bi-question-lg" />
              </div>
              <h3>{content.noResultsTitle}</h3>
              <p>{content.noResultsDesc}</p>
              <button
                type="button"
                className="btn btn-brand"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
              >
                {content.resetFilters}
              </button>
            </div>
          ) : (
            <div className="faq-groups">
              {filteredCategories.map((cat) => (
                <div key={cat.id} id={cat.id} className="faq-group">
                  <div className="faq-group__header">
                    <div className="faq-group__title-wrap">
                      <span className="faq-dark-icon-badge" aria-hidden="true">
                        <i className={`bi ${cat.icon}`} />
                      </span>
                      <h2>{cat.title}</h2>
                    </div>
                  </div>

                  <div className="faq-accordion-list">
                    {cat.items.map((item, idx) => {
                      const isOpen = openIds.has(item.key);
                      const numLabel = String(idx + 1).padStart(2, '0');
                      return (
                        <article
                          key={item.key}
                          className={`faq-glass-card ${isOpen ? 'is-open' : ''}`}
                        >
                          <button
                            type="button"
                            className="faq-glass-card__trigger"
                            aria-expanded={isOpen}
                            onClick={() => toggleItem(item.key)}
                          >
                            <span className="faq-glass-card__num">{numLabel}</span>
                            <span className="faq-glass-card__question">{item.q}</span>
                            <span className="faq-glass-card__icon" aria-hidden="true">
                              <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-plus-lg'}`} />
                            </span>
                          </button>

                          {isOpen && (
                            <div className="faq-glass-card__panel">
                              <p>{item.a}</p>
                            </div>
                          )}
                        </article>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ================= BOTTOM CTA BANNER ================= */}
          <div className="faq-bottom-cta">
            <div className="row align-items-center gy-4 position-relative">
              <div className="col-lg-7">
                <span className="faq-bottom-cta__tag">{content.ctaEyebrow}</span>
                <h3>{content.ctaTitleQuestion}<br />{content.ctaTitleFollowup}</h3>
                <p>{content.ctaDesc}</p>
              </div>
              <div className="col-lg-5">
                <div className="faq-bottom-cta__actions">
                  <a
                    className="btn btn-brand-light btn-lg"
                    href="https://calendly.com/Milaserv"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.ctaPrimary}
                  </a>
                  <Link className="btn btn-brand btn-lg" to={lang === 'en' ? '/en/contact' : '/contact'}>
                    {content.ctaSecondary}
                    <i
                      className={`bi ${lang === 'en' ? 'bi-arrow-up-right' : 'bi-arrow-up-left'}`}
                      style={lang === 'ar' ? { marginInlineStart: '12px' } : undefined}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}