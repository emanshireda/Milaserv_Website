import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/services.css';

const SERVICES_NAV = [
  { id: 'svc-1', icon: 'bi-headset', label: 'خدمة العملاء' },
  { id: 'svc-2', icon: 'bi-shield-check', label: 'العمليات التأمينية' },
  { id: 'svc-3', icon: 'bi-heart-pulse', label: 'علاقات العملاء والولاء' },
  { id: 'svc-4', icon: 'bi-telephone-outbound', label: 'المبيعات الهاتفية' },
  { id: 'svc-5', icon: 'bi-cart3', label: 'التجارة الإلكترونية' },
  { id: 'svc-6', icon: 'bi-graph-up-arrow', label: 'التسويق الرقمي' },
  { id: 'svc-7', icon: 'bi-camera-video', label: 'الاستشارات عن بُعد' },
];

export default function Services() {
  const [activeId, setActiveId] = useState('svc-1');

  // Highlight active service link on scroll
  useEffect(() => {
    const blocks = document.querySelectorAll('.svc-block');
    if (!('IntersectionObserver' in window) || !blocks.length) return;

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );

    blocks.forEach((b) => spy.observe(b));
    return () => spy.disconnect();
  }, []);

  return (
    <>
      <section className="page-hero" id="top">
        <div className="page-hero__glow" aria-hidden="true"></div>
        <div className="container position-relative">
          <nav className="crumbs" aria-label="مسار التصفح">
            <ol>
              <li><Link to="/">الرئيسية</Link></li>
              <li><span aria-current="page">خدماتنا</span></li>
            </ol>
          </nav>

          <div className="hero-eyebrow">
            <span className="hero-eyebrow__dot"></span>
            <span>منظومة متكاملة لتشغيل القطاع الصحي</span>
          </div>

          <h1>شريكك في تعهيد وإدارة الخدمات التشغيلية للقطاع الصحي</h1>

          <div className="page-hero__intro">
            <p>نساعد المنشآت الصحية في السعودية والخليج على رفع كفاءة التشغيل وتحسين تجربة العملاء، من خلال فرق متخصصة تعمل عن بُعد كامتداد لفريقك، وفق إجراءات واضحة ومؤشرات أداء محددة.</p>
            <p>نقدّم حلولًا تشغيلية مساندة للمستشفيات والمجمعات الطبية والعيادات والصيدليات ومنصات الرعاية الصحية، بما يتناسب مع طبيعة عمل كل منشأة واحتياجاتها.</p>
          </div>

          <div className="page-hero__actions">
            <a className="btn btn-brand-light btn-lg" href="https://calendly.com/milaserv" target="_blank" rel="noopener noreferrer">
              تحدث مع فريقنا
            </a>
            <a className="btn btn-glass btn-lg" href="#svc-1">
              استكشف الخدمات <i className="bi bi-arrow-down-short" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>

      <nav className="svc-nav" aria-label="فهرس الخدمات">
        <div className="svc-nav__progress" id="svcProgress" aria-hidden="true"></div>
        <div className="container">
          <ul>
            {SERVICES_NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeId === item.id ? 'is-active' : ''}
                  aria-current={activeId === item.id ? 'true' : undefined}
                >
                  <i className={`bi ${item.icon}`} aria-hidden="true"></i>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="svc-blocks">
        {/* 01 */}
        <section className="svc-block" id="svc-1" aria-labelledby="svc-1-t">
          <div className="container svc-block__inner">
            <div className="svc-block__head" data-reveal>
              <div className="svc-block__meta">
                <span className="svc-block__no" aria-hidden="true">01</span>
                <div className="svc-block__icon"><i className="bi bi-headset" aria-hidden="true"></i></div>
              </div>
              <span className="svc-block__tag">تجربة المرضى والتواصل</span>
              <h2 id="svc-1-t">مركز الاتصال الطبي وخدمة العملاء</h2>
            </div>
            <div className="svc-block__body" data-reveal>
              <p className="svc-block__lead">توفّر ميلاسيرف فرقًا متخصصة لإدارة تواصل المنشآت الصحية مع المرضى عبر المكالمات الهاتفية وواتساب والبريد الإلكتروني والدردشة ومنصات التواصل الاجتماعي، مع إدارة الاستفسارات وحجز المواعيد والمتابعة، بما يدعم سرعة الاستجابة وتحسين تجربة العملاء.</p>
              <div className="includes includes--cols">
                <h3>ما تشمله الخدمة</h3>
                <ul>
                  <li>المكالمات الهاتفية</li>
                  <li>واتساب</li>
                  <li>البريد الإلكتروني</li>
                  <li>الدردشة</li>
                  <li>منصات التواصل الاجتماعي</li>
                  <li>إدارة الاستفسارات وحجز المواعيد والمتابعة</li>
                </ul>
              </div>
              <a className="link-more" href="#contact">اكتشف الخدمة<span className="visually-hidden">: مركز الاتصال الطبي وخدمة العملاء</span></a>
            </div>
          </div>
        </section>

        {/* 02 */}
        <section className="svc-block" id="svc-2" aria-labelledby="svc-2-t">
          <div className="container svc-block__inner">
            <div className="svc-block__head" data-reveal>
              <div className="svc-block__meta">
                <span className="svc-block__no" aria-hidden="true">02</span>
                <div className="svc-block__icon"><i className="bi bi-shield-check" aria-hidden="true"></i></div>
              </div>
              <span className="svc-block__tag">دورة الإيرادات والموافقات</span>
              <h2 id="svc-2-t">إدارة العمليات التأمينية</h2>
            </div>
            <div className="svc-block__body" data-reveal>
              <p className="svc-block__lead">تدعم ميلاسيرف المنشآت الصحية في إدارة إجراءات التأمين الطبي، بدءًا من التحقق من أهلية التأمين والحصول على الموافقات الطبية، وصولًا إلى متابعة المطالبات التأمينية والتعامل مع حالات الرفض، بما يساعد على تسريع الإجراءات، وتقليل الأخطاء وحالات الرفض التأميني، وتحسين كفاءة دورة الإيرادات.</p>
              <div className="includes">
                <h3>مسار إدارة العملية التأمينية</h3>
                <ol className="steps4">
                  <li>التحقق من أهلية التأمين</li>
                  <li>الحصول على الموافقات الطبية</li>
                  <li>متابعة المطالبات التأمينية</li>
                  <li>التعامل مع حالات الرفض</li>
                </ol>
              </div>
              <a className="link-more" href="#contact">اكتشف الخدمة<span className="visually-hidden">: إدارة العمليات التأمينية</span></a>
            </div>
          </div>
        </section>

        {/* 03 */}
        <section className="svc-block" id="svc-3" aria-labelledby="svc-3-t">
          <div className="container svc-block__inner">
            <div className="svc-block__head" data-reveal>
              <div className="svc-block__meta">
                <span className="svc-block__no" aria-hidden="true">03</span>
                <div className="svc-block__icon"><i className="bi bi-heart-pulse" aria-hidden="true"></i></div>
              </div>
              <span className="svc-block__tag">الاحتفاظ بالعملاء والنمو</span>
              <h2 id="svc-3-t">إدارة علاقات العملاء وبرامج الولاء</h2>
            </div>
            <div className="svc-block__body" data-reveal>
              <p className="svc-block__lead">تساعد ميلاسيرف المنشآت الصحية على تعزيز علاقاتها بالعملاء من خلال إدارة بياناتهم وتحليلها لفهم احتياجاتهم وسلوكهم، وتحديد فرص تحسين تجربة العملاء وزيادة ولائهم والاحتفاظ بهم. كما تدير برامج الولاء التي تدعم استمرارية التفاعل مع العملاء، وتسهم في تعزيز الاحتفاظ بهم ودعم نمو الإيرادات.</p>
              <div className="includes includes--cols">
                <h3>ما تشمله الخدمة</h3>
                <ul>
                  <li>إدارة بيانات العملاء وتحليلها</li>
                  <li>فهم احتياجاتهم وسلوكهم</li>
                  <li>تحسين تجربة العملاء وزيادة ولائهم</li>
                  <li>برامج الولاء ودعم الاحتفاظ بالعملاء</li>
                </ul>
              </div>
              <a className="link-more" href="#contact">اكتشف الخدمة<span className="visually-hidden">: إدارة علاقات العملاء وبرامج الولاء</span></a>
            </div>
          </div>
        </section>

        {/* 04 */}
        <section className="svc-block" id="svc-4" aria-labelledby="svc-4-t">
          <div className="container svc-block__inner">
            <div className="svc-block__head" data-reveal>
              <div className="svc-block__meta">
                <span className="svc-block__no" aria-hidden="true">04</span>
                <div className="svc-block__icon"><i className="bi bi-telephone-outbound" aria-hidden="true"></i></div>
              </div>
              <span className="svc-block__tag">تعظيم التحويل والحجوزات</span>
              <h2 id="svc-4-t">فرق المبيعات الهاتفية (<bdi dir="ltr">Telesales</bdi>)</h2>
            </div>
            <div className="svc-block__body" data-reveal>
              <p className="svc-block__lead">توفّر ميلاسيرف فرق مبيعات هاتفية متخصصة للتواصل مع العملاء الحاليين والمحتملين، ومتابعة فرص البيع وتحويلها إلى حجوزات وطلبات فعلية، بما يدعم نمو الإيرادات.</p>
              <div className="includes">
                <h3>ما تشمله الخدمة</h3>
                <ul>
                  <li>التواصل مع العملاء الحاليين والمحتملين</li>
                  <li>متابعة فرص البيع</li>
                  <li>تحويلها إلى حجوزات وطلبات فعلية</li>
                </ul>
              </div>
              <a className="link-more" href="#contact">اكتشف الخدمة<span className="visually-hidden">: فرق المبيعات الهاتفية (Telesales)</span></a>
            </div>
          </div>
        </section>

        {/* 05 */}
        <section className="svc-block" id="svc-5" aria-labelledby="svc-5-t">
          <div className="container svc-block__inner">
            <div className="svc-block__head" data-reveal>
              <div className="svc-block__meta">
                <span className="svc-block__no" aria-hidden="true">05</span>
                <div className="svc-block__icon"><i className="bi bi-cart3" aria-hidden="true"></i></div>
              </div>
              <span className="svc-block__tag">المتاجر والصيدليات الرقمية</span>
              <h2 id="svc-5-t">تعهيد عمليات التجارة الإلكترونية</h2>
            </div>
            <div className="svc-block__body" data-reveal>
              <p className="svc-block__lead">توفّر ميلاسيرف فرقًا متخصصة لدعم العمليات اليومية لمتاجر الصيدليات والمنصات الصحية الإلكترونية، من خلال متابعة الطلبات ومعالجة استفسارات العملاء وتنظيم المهام التشغيلية، بما يسهم في رفع كفاءة التشغيل وتحسين تجربة العملاء.</p>
              <div className="includes">
                <h3>ما تشمله الخدمة</h3>
                <ul>
                  <li>متابعة الطلبات</li>
                  <li>معالجة استفسارات العملاء</li>
                  <li>تنظيم المهام التشغيلية</li>
                </ul>
              </div>
              <a className="link-more" href="#contact">اكتشف الخدمة<span className="visually-hidden">: تعهيد عمليات التجارة الإلكترونية</span></a>
            </div>
          </div>
        </section>

        {/* 06 */}
        <section className="svc-block" id="svc-6" aria-labelledby="svc-6-t">
          <div className="container svc-block__inner">
            <div className="svc-block__head" data-reveal>
              <div className="svc-block__meta">
                <span className="svc-block__no" aria-hidden="true">06</span>
                <div className="svc-block__icon"><i className="bi bi-graph-up-arrow" aria-hidden="true"></i></div>
              </div>
              <span className="svc-block__tag">الحضور الرقمي والاستقطاب</span>
              <h2 id="svc-6-t">التسويق الرقمي للمنشآت الصحية</h2>
            </div>
            <div className="svc-block__body" data-reveal>
              <p className="svc-block__lead">تساعد ميلاسيرف المنشآت الصحية على تعزيز حضورها الرقمي والوصول إلى جمهورها المستهدف من خلال حلول تسويقية متخصصة تشمل كتابة المحتوى الطبي، وتحسين محركات البحث (<bdi dir="ltr">SEO</bdi>)، وإدارة الحملات الإعلانية، والتصميم، وإنتاج الفيديو، بما يدعم أهداف المنشأة التسويقية.</p>
              <div className="includes includes--cols">
                <h3>ما تشمله الخدمة</h3>
                <ul>
                  <li>كتابة المحتوى الطبي</li>
                  <li>تحسين محركات البحث <span dir="ltr">(SEO)</span></li>
                  <li>إدارة الحملات الإعلانية</li>
                  <li>التصميم</li>
                  <li>إنتاج الفيديو</li>
                </ul>
              </div>
              <a className="link-more" href="#contact">اكتشف الخدمة<span className="visually-hidden">: التسويق الرقمي للمنشآت الصحية</span></a>
            </div>
          </div>
        </section>

        {/* 07 */}
        <section className="svc-block" id="svc-7" aria-labelledby="svc-7-t">
          <div className="container svc-block__inner">
            <div className="svc-block__head" data-reveal>
              <div className="svc-block__meta">
                <span className="svc-block__no" aria-hidden="true">07</span>
                <div className="svc-block__icon"><i className="bi bi-camera-video" aria-hidden="true"></i></div>
              </div>
              <span className="svc-block__tag">الطب الاتصالي والرعاية عن بُعد</span>
              <h2 id="svc-7-t">إدارة خدمات الاستشارات الطبية عن بُعد</h2>
            </div>
            <div className="svc-block__body" data-reveal>
              <p className="svc-block__lead">تدعم ميلاسيرف المنشآت الصحية في تشغيل خدمات الاستشارات الطبية عن بُعد، من خلال إدارة الحجوزات ومتابعة المرضى قبل الاستشارة وبعدها، مع إمكانية توفير أطباء مرخّصين وفقًا لاحتياجات المنشأة ونطاق الخدمة.</p>
              <div className="includes">
                <h3>ما تشمله الخدمة</h3>
                <ul>
                  <li>إدارة الحجوزات</li>
                  <li>متابعة المرضى قبل الاستشارة وبعدها</li>
                  <li>أطباء مرخّصين وفقًا لاحتياجات المنشأة ونطاق الخدمة</li>
                </ul>
              </div>
              <a className="link-more" href="#contact">اكتشف الخدمة<span className="visually-hidden">: إدارة خدمات الاستشارات الطبية عن بُعد</span></a>
            </div>
          </div>
        </section>
      </div>

    </>
  );
}

