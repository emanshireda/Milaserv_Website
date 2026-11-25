import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { publicAsset } from '../utils/publicAsset';
import PartnerLogos from '../components/PartnerLogos';
import TeamSection from '../components/TeamSection';

const HERO_BANNERS = [
    {
        id: 1,
        image: publicAsset('Images/heroBG.jpg'),
        eyebrow: 'منظومة متكاملة لتشغيل القطاع الصحي',
        titleLines: ['شريكك في تعهيد وإدارة', 'الخدمات التشغيلية للقطاع الصحي'],
        description: 'نساعد المنشآت الصحية في الخليج على رفع كفاءة التشغيل وتحسين تجربة العملاء، من خلال فرق متخصصة تعمل عن بُعد كامتداد لفريقك.',
    },
    {
        id: 2,
        image: publicAsset('Images/HeroBG2.png'),
        eyebrow: 'جودة عالية ومؤشرات أداء دقيقة',
        titleLines: ['4 سنوات من التميز التشغيلي', 'في مراكز الاتصال وتجربة العملاء'],
        description: 'نتولى إدارة تواصل المرضى عبر قنوات الاتصال المختلفة، والرد على استفساراتهم، وتنسيق المواعيد، ومتابعة الطلبات والشكاوى، مع مراقبة جودة الخدمة وقياس الأداء وفق إجراءات المنشأة.',
    },
    {
        id: 3,
        image: publicAsset('Images/HeroBG3.png'),
        eyebrow: 'دورة إيرادات أسرع وأكثر دقة',
        titleLines: ['إدارة العمليات التأمينية', 'والموافقات الطبية'],
        description: 'نضمن سرعة التحقق من أهلية التأمين والحصول على الموافقات ومتابعة المطالبات للحد من حالات الرفض.',
    },
];


// Reusable Counter Component for Metrics
function Counter({ target, decimals = 0 }) {
    const [displayValue, setDisplayValue] = useState('0');
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const el = elementRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    runCountUp();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [hasAnimated, target, decimals]);

    const runCountUp = () => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const duration = reduceMotion ? 0 : 1600;
        const start = performance.now();
        const fmt = new Intl.NumberFormat('ar-EG', {
            numberingSystem: 'latn',
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        });

        const tick = (now) => {
            const progress = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;

            setDisplayValue(fmt.format(progress === 1 ? target : current));

            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        };

        requestAnimationFrame(tick);
    };

    return <b ref={elementRef}>{displayValue}</b>;
}

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Rotate the hero banner every 12 seconds.
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_BANNERS.length);
        }, 12000);
        return () => clearInterval(timer);
    }, []);

    const banner = HERO_BANNERS[currentSlide];

    // 1. Sectors Interactive State
    const [activeSector, setActiveSector] = useState(0);
    const sectorsData = [
    {
        id: 'hospitals',
        num: '01',
        title: 'المستشفيات',
        subtitle: 'دعم تشغيلي يواكب حجم العمليات وتعدد الأقسام',
        desc: 'إدارة المكالمات والمواعيد والطلبات والمتابعات عبر أقسام المستشفى بكفاءة وتنسيق مستمر.',
        img: './Images/hospital.jpg',
    },
    {
        id: 'multi-branch',
        num: '02',
        title: 'المراكز والمجمعات الطبية',
        subtitle: 'إدارة أكثر تنظيمًا للتواصل والمواعيد عبر التخصصات المختلفة',
        desc: 'تنسيق الحجوزات والتذكيرات والاستفسارات ومتابعة المراجعين عبر مختلف التخصصات.',
        img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85',
    },
    {
        id: 'labs',
        num: '03',
        title: 'المختبرات الطبية',
        subtitle: 'تواصل منظم يدعم تجربة العملاء من الحجز إلى المتابعة',
        desc: 'تنظيم طلبات الفحوصات والسحب المنزلي وإخطار العملاء بجاهزية النتائج وطرق الاستلام.',
        img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1400&q=85',
    },
    {
        id: 'pharmacies',
        num: '04',
        title: 'الصيدليات',
        subtitle: 'دعم تشغيلي يربط خدمة العملاء بالمتاجر الإلكترونية',
        desc: 'إدارة استفسارات العملاء والطلبات الإلكترونية والتوصيل وبرامج الولاء وتحديث بيانات المنتجات.',
        img: './Images/Phramcy.jpg',
    },
    {
        id: 'healthtech',
        num: '05',
        title: 'منصات الرعاية الصحية',
        subtitle: 'فرق تشغيل تدعم المستخدمين وتواكب نمو المنصة',
        desc: 'دعم استفسارات المستخدمين وتهيئة الحسابات وتوثيق المشكلات التقنية وتصعيدها.',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85',
    },
    {
        id: 'telemedicine',
        num: '06',
        title: 'مزودو خدمات الطب الاتصالي',
        subtitle: 'دعم متكامل لتشغيل الاستشارات الطبية الافتراضية',
        desc: 'إدارة حجوزات الاستشارات الافتراضية وجداول الأطباء والدعم قبل وبعد الجلسات.',
        img: './Images/healthcare.jpg',
    },
];

    // 2. Essays Carousel Ref & Scroll Logic
    const essaysViewportRef = useRef(null);

    useEffect(() => {
        if (essaysViewportRef.current) {
            essaysViewportRef.current.scrollLeft = 0;
        }
    }, []);

    const scrollEssays = (direction) => {
        if (!essaysViewportRef.current) return;
        const card = essaysViewportRef.current.querySelector('.essay-card');
        const step = card ? card.offsetWidth + 24 : 340;

        essaysViewportRef.current.scrollBy({
            left: direction === 'next' ? -step : step,
            behavior: 'smooth'
        });
    };

    // Auto-slide essays effect
    useEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const touchViewport = window.matchMedia('(max-width: 767.98px)').matches;
        if (reduceMotion || touchViewport || !essaysViewportRef.current) return;

        const viewport = essaysViewportRef.current;
        let autoSlide = setInterval(() => {
            const maxScroll = viewport.scrollWidth - viewport.clientWidth;
            const currentScroll = Math.abs(viewport.scrollLeft);
            if (currentScroll >= maxScroll - 10) {
                viewport.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                viewport.scrollBy({ left: -340, behavior: 'smooth' });
            }
        }, 3500);

        const pause = () => clearInterval(autoSlide);
        const resume = () => {
            clearInterval(autoSlide);
            autoSlide = setInterval(() => {
                viewport.scrollBy({ left: -340, behavior: 'smooth' });
            }, 3500);
        };

        viewport.addEventListener('mouseenter', pause);
        viewport.addEventListener('mouseleave', resume);
        return () => {
            clearInterval(autoSlide);
            viewport.removeEventListener('mouseenter', pause);
            viewport.removeEventListener('mouseleave', resume);
        };
    }, []);

    // 3. Scroll Reveal Effect for [data-reveal] elements
    useEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const elements = document.querySelectorAll('[data-reveal]');

        if (reduceMotion || !('IntersectionObserver' in window)) {
            elements.forEach(el => el.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('is-visible');
                    observer.unobserve(e.target);
                }
            });
        }, { threshold: 0.15 });

        elements.forEach((el, i) => {
            el.style.setProperty('--d', `${(i % 3) * 0.1}s`);
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* ================= HERO ================= */}
            <section className="hero" id="top">
                {/* Render all background layers simultaneously to enable smooth cross-fading */}
                {HERO_BANNERS.map((item, index) => (
                    <div
                        key={item.id}
                        className={`hero__bg-layer ${currentSlide === index ? 'is-active' : ''}`}
                        style={{
                            backgroundImage: `linear-gradient(115deg, rgba(7, 24, 44, 0.85) 0%, rgba(7, 24, 44, 0.55) 100%), url("${item.image}")`,
                        }}
                        aria-hidden="true"
                    ></div>
                ))}

                <div className="hero__glow" aria-hidden="true"></div>
                <div className="container position-relative" style={{ zIndex: 2 }}>
                    {/* Sliding Content Area with entrance animation trigger */}
                    <div key={currentSlide} className="hero-slide-container hero-text-animate">
                        <div className="hero-eyebrow">
                            <span className="hero-eyebrow__dot"></span>
                            <span>{banner.eyebrow}</span>
                        </div>

                        <h1>
                            {banner.titleLines[0]}
                            <br />
                            {banner.titleLines[1]}
                        </h1>

                        <div className="hero__intro">
                            <p>{banner.description}</p>
                        </div>
                    </div>

                    {/* Fixed Action Buttons & Dots */}
                    <div className="hero__actions-wrapper">
                        <div className="hero__actions">
                            <a className="btn btn-brand-light btn-lg" href="https://calendly.com/milaserv" target="_blank" rel="noopener noreferrer">
                                احجز استشارة
                            </a>
                            <Link className="btn btn-outline-light btn-lg" to="/services">
                                اكتشف خدماتنا
                            </Link>
                        </div>

                        <div className="hero-dots" aria-label="تنقل الشرائح">
                            {HERO_BANNERS.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`hero-dot ${currentSlide === index ? 'active' : ''}`}
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`الانتقال إلى الشريحة ${index + 1}`}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>

                <PartnerLogos />

            </section>

            {/* ================= RESTORED STATS STRIP ================= */}
            <div className="stats-wrap">
                <div className="container">
                    <ul className="stats">
                        <li>
                            <div><Counter target={4} /><span>سنوات</span></div>
                            <p> خبرة في السوق الخليجي.</p>
                        </li>
                        <li>
                            <div><Counter target={15} /><span>مليون</span></div>
                            <p>تفاعل سنويًا.</p>
                        </li>
                        <li>
                            <div><Counter target={4.7} decimals={1} /><span>/ 5</span></div>
                            <p>متوسط رضا العملاء.</p>
                        </li>
                        <li>
                            <div><Counter target={96} /><span>%</span></div>
                            <p>نسبة قبول المطالبات التأمينية.</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* ================= SERVICES BENTO GRID ================= */}
            <section className="section services-section" id="services">
                <div className="container">
                    <div className="svc-bento-grid">
                        <div className="svc-bento-title-box" data-reveal>
                            <span className="svc-bento-tag">خدماتنا</span>
                            <h2>خدماتنا التشغيلية</h2>
                            <p>حلول متكاملة مصممة خصيصاً لدعم المنشآت الصحية ورفع كفاءة تشغيلها.</p>
                        </div>

                        <article className="svc-bento-card" id="svc-1" data-reveal>
                            <div className="svc-bento__icon"><i className="bi bi-headset" aria-hidden="true"></i></div>
                            <div className="svc-bento__body">
                                <h3>خدمة العملاء ومراكز الاتصال</h3>
                                <p>فرق متخصصة تدير تواصل منشأتك مع المرضى عبر قنوات متعددة، بسرعة استجابة وجودة ثابتة.</p>
                                <Link className="link-more" to="/services#svc-1">اكتشف المزيد</Link>
                            </div>
                        </article>

                        <article className="svc-bento-card" id="svc-2" data-reveal>
                            <div className="svc-bento__icon"><i className="bi bi-shield-check" aria-hidden="true"></i></div>
                            <div className="svc-bento__body">
                                <h3>إدارة العمليات التأمينية</h3>
                                <p>ندعم المنشآت الصحية في إدارة إجراءات التأمين الطبي، من متابعة الموافقات ومطالبات التأمين.</p>
                                <Link className="link-more" to="/services#svc-2">اكتشف المزيد</Link>
                            </div>
                        </article>

                        <article className="svc-bento-card" id="svc-3" data-reveal>
                            <div className="svc-bento__icon"><i className="bi bi-heart-pulse" aria-hidden="true"></i></div>
                            <div className="svc-bento__body">
                                <h3>إدارة علاقات المرضى وبرامج الولاء</h3>
                                <p>نعزز ولاء المرضى ونحافظ على استمرار علاقتهم بمنشأتك عبر برامج ولاء واستراتيجيات مخصصة.</p>
                                <Link className="link-more" to="/services#svc-3">اكتشف المزيد</Link>
                            </div>
                        </article>

                        <article className="svc-bento-card" id="svc-4" data-reveal>
                            <div className="svc-bento__icon"><i className="bi bi-telephone-outbound" aria-hidden="true"></i></div>
                            <div className="svc-bento__body">
                                <h3>فرق مبيعات هاتفية</h3>
                                <p>فرق مدرّبة تتواصل مع المرضى للتعريف بخدماتكم، وتحويل فرص التواصل إلى حجوزات.</p>
                                <Link className="link-more" to="/services#svc-4">اكتشف المزيد</Link>
                            </div>
                        </article>

                        <article className="svc-bento-card" id="svc-5" data-reveal>
                            <div className="svc-bento__icon"><i className="bi bi-cart3" aria-hidden="true"></i></div>
                            <div className="svc-bento__body">
                                <h3>إدارة عمليات التجارة الإلكترونية</h3>
                                <p>فرق تدعم العمليات اليومية لمتاجر الصيدليات والمنصات الصحية الإلكترونية.</p>
                                <Link className="link-more" to="/services#svc-5">اكتشف المزيد</Link>
                            </div>
                        </article>

                        <article className="svc-bento-card" id="svc-6" data-reveal>
                            <div className="svc-bento__icon"><i className="bi bi-graph-up-arrow" aria-hidden="true"></i></div>
                            <div className="svc-bento__body">
                                <h3>التسويق الرقمي</h3>
                                <p>نساعد المنشآت على تعزيز حضورها الرقمي من خلال كتابة المحتوى وتحسين محركات البحث.</p>
                                <Link className="link-more" to="/services#svc-6">اكتشف المزيد</Link>
                            </div>
                        </article>

                        <article className="svc-bento-card" id="svc-7" data-reveal>
                            <div className="svc-bento__icon"><i className="bi bi-camera-video" aria-hidden="true"></i></div>
                            <div className="svc-bento__body">
                                <h3>الاستشارات الطبية عن بُعد</h3>
                                <p>ندعم المنشآت في إدارة خدمات الطب عن بُعد، من الحجوزات ومتابعة المرضى.</p>
                                <Link className="link-more" to="/services#svc-7">اكتشف المزيد</Link>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* ================= HOW WE WORK ================= */}
            <section className="section section-how" id="how">
                <div className="container">
                    <header className="section-head text-center mx-auto">
                        <span className="how-tag">آلية العمل</span>
                        <h2>كيف نعمل؟</h2>
                        <p>ثلاث خطوات لبناء وإدارة فرق عمل متخصصة، وفق نموذج تشغيلي يعتمد على الخبرة الصحية وتحليل البيانات وقياس الأداء.</p>
                    </header>

                    <div className="journey-wrapper">
                        <svg className="journey-wave d-none d-lg-block" viewBox="0 0 1100 120" fill="none" preserveAspectRatio="none" aria-hidden="true">
                            <circle cx="1075" cy="60" r="6" stroke="#28c2ba" strokeWidth="2" />
                            <circle cx="1075" cy="60" r="2" fill="#28c2ba" />
                            <path
                                d="M 1060 60 C 920 15, 780 15, 650 60 C 520 105, 380 105, 250 60 C 160 30, 90 45, 35 60"
                                stroke="rgba(40, 194, 186, 0.35)"
                                strokeWidth="2"
                                strokeDasharray="6 6"
                            />
                            <path d="M 22 54 L 34 60 L 22 66 Z" fill="#28c2ba" />
                        </svg>

                        <ol className="journey-steps">
                            <li className="journey-step" data-reveal>
                                <div className="journey-node">
                                    <div className="journey-circle">
                                        <i className="bi bi-clipboard2-pulse" aria-hidden="true"></i>
                                    </div>
                                    <span className="journey-badge">01</span>
                                </div>
                                <h3>نفهم احتياج منشأتك</h3>
                                <p>ندرس طبيعة نشاط منشأتك وحجم أعمالها وإجراءاتها المعتمدة، لتحديد احتياجاتها التشغيلية وتصميم نموذج العمل والفريق الأنسب لها.</p>
                            </li>

                            <li className="journey-step" data-reveal>
                                <div className="journey-node">
                                    <div className="journey-circle">
                                        <i className="bi bi-people" aria-hidden="true"></i>
                                    </div>
                                    <span className="journey-badge">02</span>
                                </div>
                                <h3>نجهّز فريقك ونُدرّبه</h3>
                                <p>نبني فريقًا طبيًا مؤهلًا ومخصصًا لمنشأتك، ونُدرّبه على أنظمتك وسياساتك وإجراءات التشغيل المعتمدة، لضمان جاهزيته وتكامله مع أعمالك.</p>
                            </li>

                            <li className="journey-step" data-reveal>
                                <div className="journey-node">
                                    <div className="journey-circle">
                                        <i className="bi bi-graph-up-arrow" aria-hidden="true"></i>
                                    </div>
                                    <span className="journey-badge">03</span>
                                </div>
                                <h3>نشغّل ونحلّل ونطوّر</h3>
                                <p>ندير العمليات وفق مؤشرات أداء ومستويات خدمة واضحة، ونحلّل البيانات لرصد نقاط التسرب وفرص النمو، مع تقديم تقارير وتوصيات دورية لتحسين الكفاءة ودعم نمو الإيرادات.</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* ================= SECTORS ================= */}
            <section className="section sectors-section" id="sectors">
                <div className="container">
                    <div className="sectors-header mb-5" data-reveal>
                        <span className="svc-bento-tag">القطاعات التي نخدمها</span>
                        <h2>القطاعات</h2>
                        <p>حلول تشغيلية متخصصة لمختلف قطاعات الرعاية الصحية في السعودية ودول الخليج.</p>
                    </div>

                    <div className="row align-items-stretch g-4 g-xl-5">
                        <div className="col-lg-7" data-reveal>
                            <ul className="sectors-interactive-list">
                                {sectorsData.map((sec, index) => (
                                    <li key={sec.id}>
                                        <Link
                                            className={`sector-item ${activeSector === index ? 'active' : ''}`}
                                            to={`/sectors#${sec.id}`}
                                            onMouseEnter={() => setActiveSector(index)}
                                            onFocus={() => setActiveSector(index)}
                                        >
                                            <div className="sector-item__info">
                                                <h3>{sec.title}</h3>
                                                <p>{sec.desc}</p>
                                            </div>
                                            <div className="sector-item__arrow">
                                                <i className="bi bi-arrow-left" aria-hidden="true" />
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-5" data-reveal>
                            <div className="sector-preview-wrapper">
                                <img
                                    src={sectorsData[activeSector].img}
                                    alt={sectorsData[activeSector].title}
                                    className="sector-preview-img active"
                                />
                                <div className="sector-preview-overlay" />
                                <div className="sector-preview-content">
                                    <span className="sector-preview-badge">القطاع {sectorsData[activeSector].num}</span>
                                    <h3>{sectorsData[activeSector].title}</h3>
                                    <p>{sectorsData[activeSector].subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHY MILASERV ================= */}
            <section className="why" id="why">
                <div className="container">
                    <header className="section-head" data-reveal>
                        <span className="why-tag">مزايا الشراكة</span>
                        <h2>لماذا ميلاسيرف؟</h2>
                        <p>شريك تشغيلي يفهم احتياجات مؤسستك الصحية</p>
                    </header>

                    <div className="row gy-4 gx-xl-5 align-items-stretch">
                        <div className="col-lg-8">
                            <div className="why__grid">
                                <article className="why__item" data-reveal>
                                    <div className="why__item-top"><span className="why__num">01</span><i className="bi bi-hospital" aria-hidden="true"></i></div>
                                    <h3>خبرة متخصصة في القطاع الصحي</h3>
                                    <p>من إدارة الحجوزات والاستفسارات إلى متابعة المرضى والتعامل مع الشكاوى.</p>
                                </article>
                                <article className="why__item" data-reveal>
                                    <div className="why__item-top"><span className="why__num">02</span><i className="bi bi-diagram-3" aria-hidden="true"></i></div>
                                    <h3>فرق عمل مرنة تعمل وفق نظام مؤسستك</h3>
                                    <p>نوفر فرقًا متخصصة تعمل وفق إجراءات منشأتك وأنظمتها المعتمدة.</p>
                                </article>
                                <article className="why__item" data-reveal>
                                    <div className="why__item-top"><span className="why__num">03</span><i className="bi bi-sliders2" aria-hidden="true"></i></div>
                                    <h3>عمليات أكثر تنظيمًا، وضغط تشغيلي أقل</h3>
                                    <p>نتولى إدارة مهام التشغيل والتواصل والمتابعة ضمن نطاق الخدمات المتفق عليه.</p>
                                </article>
                                <article className="why__item" data-reveal>
                                    <div className="why__item-top"><span className="why__num">04</span><i className="bi bi-bar-chart-line" aria-hidden="true"></i></div>
                                    <h3>أداء واضح وفرص مستمرة للتحسين</h3>
                                    <p>من خلال التقارير الدورية ومتابعة مؤشرات الأداء المتفق عليها.</p>
                                </article>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <article className="why__gov" data-reveal>
                                <div className="why__gov-header">
                                    <div className="why__gov-icon"><i className="bi bi-shield-lock" aria-hidden="true"></i></div>
                                    <span className="why__gov-badge">أمان وخصوصية</span>
                                </div>
                                <h3>حوكمة البيانات وسرية المعلومات</h3>
                                <p>نتعامل مع بيانات المرضى بسرية، ونعمل وفق سياسات الخصوصية وإجراءات حماية البيانات.</p>
                                <div className="why__gov-footer"><span><i className="bi bi-check2-circle"></i> التزام تام بسياسات الخصوصية الطبية</span></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= ESSAYS ================= */}
            <section className="section section--tint essays-section" id="essays">
                <div className="container">
                    <div className="essays-header" data-reveal>
                        <div className="essays-header__title">
                            <span className="essays-tag">المدونة والرؤى</span>
                            <h2>أحدث المقالات</h2>
                        </div>
                        <div className="essays-header__controls">
                            <div className="essays-nav">
                                <button type="button" className="essay-arrow" onClick={() => scrollEssays('prev')} aria-label="المقال السابق">
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                                <button type="button" className="essay-arrow" onClick={() => scrollEssays('next')} aria-label="المقال التالي">
                                    <i className="bi bi-arrow-left"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="essays-viewport" ref={essaysViewportRef} data-reveal>
                        <div className="essays-track">
                            <article className="essay-card">
                                <div className="essay-card__banner">
                                    <img src={publicAsset('Images/Essay Banner1.png')} alt="مقال 1" />
                                    <span className="essay-card__cat">التعهيد الصحي</span>
                                </div>
                                <div className="essay-card__body">
                                    <span className="essay-card__date"><i className="bi bi-calendar3"></i> 15 نوفمبر 2026</span>
                                    <h3><Link to="/blog/medical-call-centre-beyond-calls">هل تعتقد أن تعهيد مركز الاتصال الطبي يقتصر على الرد على المكالمات؟</Link></h3>
                                    <Link to="/blog/medical-call-centre-beyond-calls" className="link-more">اقرأ المقال</Link>
                                </div>
                            </article>

                            <article className="essay-card">
                                <div className="essay-card__banner">
                                    <img src={publicAsset('Images/Banner2.png')} alt="مقال 2" />
                                    <span className="essay-card__cat">تجربة المرضى</span>
                                </div>
                                <div className="essay-card__body">
                                    <span className="essay-card__date"><i className="bi bi-calendar3"></i> 10 نوفمبر 2026</span>
                                    <h3><Link to="/blog/how-medical-call-centre-improves-patient-experience">كيف يساعد الكول سنتر الطبي في تحسين تجربة المرضى؟</Link></h3>
                                    <Link to="/blog/how-medical-call-centre-improves-patient-experience" className="link-more">اقرأ المقال</Link>
                                </div>
                            </article>

                            <article className="essay-card">
                                <div className="essay-card__banner">
                                    <img src={publicAsset('Images/Banner3.png')} alt="مقال 3" />
                                    <span className="essay-card__cat">التحول الرقمي</span>
                                </div>
                                <div className="essay-card__body">
                                    <span className="essay-card__date"><i className="bi bi-calendar3"></i> 04 نوفمبر 2026</span>
                                    <h3><Link to="/blog/digital-transformation-saudi-healthcare-operations">التحول الرقمي في الرعاية الصحية السعودية: كيف تغيّرت طريقة تشغيل الخدمات؟</Link></h3>
                                    <Link to="/blog/digital-transformation-saudi-healthcare-operations" className="link-more">اقرأ المقال</Link>
                                </div>
                            </article>

                            <article className="essay-card">
                                <div className="essay-card__banner">
                                    <img src={publicAsset('Images/Banner4.png')} alt="مقال 4" />
                                    <span className="essay-card__cat">التعهيد الطبي</span>
                                </div>
                                <div className="essay-card__body">
                                    <span className="essay-card__date"><i className="bi bi-calendar3"></i> 28 أكتوبر 2026</span>
                                    <h3><Link to="/blog/medical-call-centre-for-pharmacies">الكول سنتر الطبي للصيدليات: خدمات يمكن تعهيدها</Link></h3>
                                    <Link to="/blog/medical-call-centre-for-pharmacies" className="link-more">اقرأ المقال</Link>
                                </div>
                            </article>

                            <article className="essay-card">
                                <div className="essay-card__banner">
                                    <img src={publicAsset('Images/Banner5.png')} alt="عنوان المقال الخامس" />
                                    <span className="essay-card__cat">التعهيد الطبي</span>
                                </div>
                                <div className="essay-card__body">
                                    <span className="essay-card__date"><i className="bi bi-calendar3"></i> 20 أكتوبر 2026</span>
                                    <h3><Link to="/blog/key-medical-call-centre-kpis-and-sla">أهم مؤشرات أداء مركز الاتصال الطبي وكيفية قياس كفاءته</Link></h3>
                                    <Link to="/blog/key-medical-call-centre-kpis-and-sla" className="link-more">اقرأ المقال</Link>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= TEAM SECTION (NEW) ================= */}
            <TeamSection />
        </>
    );
}
