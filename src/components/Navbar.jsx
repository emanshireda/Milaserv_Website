import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { publicAsset } from '../utils/publicAsset';

const SERVICES_LINKS = [
  { to: '/services#svc-1', label: 'خدمة العملاء ومراكز الاتصال' },
  { to: '/services#svc-2', label: 'إدارة العمليات التأمينية' },
  { to: '/services#svc-3', label: 'إدارة علاقات المرضى وبرامج الولاء' },
  { to: '/services#svc-4', label: 'فرق مبيعات هاتفية' },
  { to: '/services#svc-5', label: 'إدارة عمليات التجارة الإلكترونية' },
  { to: '/services#svc-6', label: 'التسويق الرقمي' },
  { to: '/services#svc-7', label: 'الاستشارات الطبية عن بُعد' },
];

const SECTORS_LINKS = [
  { to: '/#sectors', label: 'المستشفيات' },
  { to: '/#sectors', label: 'المجمعات الطبية' },
  { to: '/#sectors', label: 'العيادات الخاصة' },
  { to: '/#sectors', label: 'المختبرات الطبية' },
  { to: '/#sectors', label: 'الصيدليات' },
  { to: '/#sectors', label: 'منصات الرعاية الصحية' },
  { to: '/#sectors', label: 'مزودو خدمات الطب الاتصالي' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/');
  const base = isEnglish ? '/en' : '';
  const arabicPath = isEnglish
    ? pathname === '/en/services'
      ? '/services'
      : pathname === '/en/about'
        ? '/about'
        : pathname === '/en/contact'
          ? '/contact'
          : '/'
    : pathname;
  const englishPath = !isEnglish
    ? pathname === '/services'
      ? '/en/services'
      : pathname === '/about'
        ? '/en/about'
        : pathname === '/contact'
          ? '/en/contact'
          : '/en'
    : pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const toggleDropdown = (menuName) => {
    setOpenDropdown((prev) => (prev === menuName ? null : menuName));
  };

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Scoped styles directly inside Navbar so they are guaranteed to load */}
      <style>{`
        .ms-nav-item {
          position: relative !important;
          display: flex !important;
          align-items: center !important;
        }
        .ms-nav-item.is-open .nav-chevron {
          transform: rotate(180deg);
        }
        .ms-nav-item.is-open .link-text {
          color: #078B86 !important;
        }
        .ms-dropdown-menu {
          position: absolute !important;
          top: calc(100% + 18px) !important;
          right: 0 !important;
          left: auto !important;
          min-width: 270px !important;
          list-style: none !important;
          margin: 0 !important;
          padding: 8px !important;
          background: #ffffff !important;
          border: 1px solid rgba(217, 227, 230, 0.9) !important;
          border-radius: 10px !important;
          box-shadow: 0 20px 45px rgba(7, 24, 44, 0.18) !important;
          z-index: 999999 !important;
          display: block !important;
        }
        .ms-dropdown-menu li {
          list-style: none !important;
          margin: 0 !important;
          padding: 0 !important;
          display: block !important;
          width: 100% !important;
        }
        .ms-dropdown-item {
          display: block !important;
          width: 100% !important;
          padding: 10px 14px !important;
          border-radius: 10px !important;
          font-size: 0.94rem !important;
          font-weight: 500 !important;
          color: #17283B !important;
          text-align: right !important;
          text-decoration: none !important;
          white-space: nowrap !important;
          transition: background-color 0.2s ease, color 0.2s ease !important;
        }
        .ms-dropdown-item:hover {
          background-color: #0B2340 !important;
          color: #ffffff !important;
        }
        @media (max-width: 991.98px) {
          .ms-nav-item {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
          }
          .ms-dropdown-menu {
            position: static !important;
            width: 100% !important;
            margin-top: 6px !important;
            box-shadow: none !important;
            background: #F5F9F8 !important;
          }
        }
      `}</style>

      <header
        ref={headerRef}
        className={`site-header fixed-top ${isScrolled ? 'is-scrolled' : ''}`}
        id="header"
      >
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-pill">
            {/* Brand / Logo */}
            <Link className="brand" to={`${base}/#top`} onClick={closeAll}>
              <img src={publicAsset('Images/Logo.png')} alt="MilaServ" height="42" width="42" />
              <span>Milaserv</span>
            </Link>

            {/* Mobile Toggler */}
            <button
              className="navbar-toggler border-0 shadow-none"
              type="button"
              aria-controls="mainNav"
              aria-expanded={mobileOpen}
              aria-label={isEnglish ? 'Open menu' : 'فتح القائمة'}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links */}
            <div className={`collapse navbar-collapse ${mobileOpen ? 'show' : ''}`} id="mainNav">
              <ul className="navbar-nav mx-lg-auto align-lg-items-center gap-2 gap-lg-4">
                
                {/* Dropdown 1: services */}
                <li className={`ms-nav-item ${openDropdown === 'services' ? 'is-open' : ''}`}>
                  <button
                    className="btn nav-link dropdown-custom p-0 border-0 bg-transparent"
                    type="button"
                    aria-expanded={openDropdown === 'services'}
                    onClick={() => toggleDropdown('services')}
                  >
                    <span className="link-text">{isEnglish ? 'Services' : 'خدماتنا'}</span>
                    <i className="bi bi-chevron-down nav-chevron" aria-hidden="true"></i>
                  </button>
                  {openDropdown === 'services' && (
                    <ul className="ms-dropdown-menu" role="menu">
                      {(isEnglish ? [
                        { to: '/en/services#svc-1', label: 'Customer Service & Contact Centres' },
                        { to: '/en/services#svc-2', label: 'Medical Insurance Administration' },
                        { to: '/en/services#svc-3', label: 'Customer Relationships & Loyalty' },
                        { to: '/en/services#svc-4', label: 'Telesales Teams' },
                        { to: '/en/services#svc-5', label: 'E-commerce Operations' },
                        { to: '/en/services#svc-6', label: 'Digital Marketing' },
                        { to: '/en/services#svc-7', label: 'Telehealth Operations & Support' },
                      ] : SERVICES_LINKS).map((item) => (
                        <li key={item.to} role="none">
                          <Link
                            className="ms-dropdown-item"
                            to={item.to}
                            role="menuitem"
                            onClick={closeAll}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>


                {/* Dropdown 2: القطاعات */}
                <li className={`ms-nav-item ${openDropdown === 'sectors' ? 'is-open' : ''}`}>
                  <button
                    className="btn nav-link dropdown-custom p-0 border-0 bg-transparent"
                    type="button"
                    aria-expanded={openDropdown === 'sectors'}
                    onClick={() => toggleDropdown('sectors')}
                  >
                    <span className="link-text">{isEnglish ? 'Sectors' : 'القطاعات'}</span>
                    <i className="bi bi-chevron-down nav-chevron" aria-hidden="true"></i>
                  </button>
                  {openDropdown === 'sectors' && (
                    <ul className="ms-dropdown-menu" role="menu">
                      {(isEnglish ? [
                        { to: '/en/#sectors', label: 'Hospitals' },
                        { to: '/en/#sectors', label: 'Medical Centres' },
                        { to: '/en/#sectors', label: 'Private Clinics' },
                        { to: '/en/#sectors', label: 'Medical Laboratories' },
                        { to: '/en/#sectors', label: 'Pharmacies' },
                        { to: '/en/#sectors', label: 'Digital Health Platforms' },
                        { to: '/en/#sectors', label: 'Telehealth Providers' },
                      ] : SECTORS_LINKS).map((item, idx) => (
                        <li key={idx} role="none">
                          <Link
                            className="ms-dropdown-item"
                            to={item.to}
                            role="menuitem"
                            onClick={closeAll}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Regular Link: عن ميلاسيرف*/}
                <li className="nav-item">
                  <Link className="nav-link" to={`${base}/about`} onClick={closeAll}>
                    {isEnglish ? 'About Us' : 'عن ميلاسيرف'}
                  </Link>
                </li>

                 {/* Regular Link: المدونة*/}
                <li className="nav-item">
                  <Link className="nav-link" to="#" onClick={closeAll}>
                   {isEnglish ? 'Insights' : 'المدونة'}
                  </Link>
                </li>

              {/* Regular Link: career*/}
                <li className="nav-item">
                  <Link className="nav-link" to="#" onClick={closeAll}>
                   Career
                  </Link>
                </li>
              </ul>

              {/* Pill Action Button */}
              <div className="d-flex align-items-center gap-2 ms-lg-2">
              <a href="#contact" className="btn btn-brand btn-pill-cta" onClick={closeAll}>
                <span>{isEnglish ? 'Book a Consultation' : 'احجز استشارة'}</span>
                <span className="btn-pill-circle" aria-hidden="true">
                  <i className={`bi ${isEnglish ? 'bi-arrow-up-right' : 'bi-arrow-up-left'}`}></i>
                </span>
              </a>
              <div className="language-switcher" aria-label="Language">
                <Link
                  to={arabicPath}
                  className={!isEnglish ? 'is-active' : ''}
                  onClick={closeAll}
                >
                  عربي
                </Link>
                <Link
                  to={englishPath}
                  className={isEnglish ? 'is-active' : ''}
                  onClick={closeAll}
                >
                  EN
                </Link>
              </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}