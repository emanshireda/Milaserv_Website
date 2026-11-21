import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { publicAsset } from '../utils/publicAsset';

export default function Footer() {
  const { pathname } = useLocation();
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/');
  const base = isEnglish ? '/en' : '';
  const currentYear = new Intl.NumberFormat(isEnglish ? 'en' : 'ar-EG', { numberingSystem: 'latn', useGrouping: false }).format(new Date().getFullYear());

  return (
  <footer className="footer">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4">
          <a className="brand" href="#top"><img src={publicAsset('Images/Logo1.png')} alt={isEnglish ? 'Milaserv' : 'ميلاسيرف'} width="34"
              height="34"/><span>Milaserv</span></a>
          <p className="mt-3">{isEnglish ? 'Your partner for managed healthcare operations.' : 'شريكك في تعهيد وإدارة الخدمات التشغيلية للقطاع الصحي.'}</p>
        </div>
        <div className="col-6 col-lg-2">
          <h2 className="footer__h">{isEnglish ? 'Pages' : 'الصفحة'}</h2>
          <ul>
            <li><Link to={`${base}/services`}>{isEnglish ? 'Services' : 'خدماتنا'}</Link></li>
            <li><Link to={`${base}/#process`}>{isEnglish ? 'How We Work' : 'كيف نعمل؟'}</Link></li>
            <li><Link to={`${base}/#sectors`}>{isEnglish ? 'Sectors' : 'القطاعات'}</Link></li>
            <li><Link to={`${base}/#why`}>{isEnglish ? 'Why Milaserv' : 'لماذا ميلاسيرف؟'}</Link></li>
            <li><a href="https://milaserv.com/ar/privacy-policy" target="_blank" rel="noopener">{isEnglish ? 'Privacy Policy' : 'سياسة الخصوصية'}</a></li>
          </ul>
        </div>
        <div className="col-6 col-lg-3">
          <h2 className="footer__h">{isEnglish ? 'Our Services' : 'خدماتنا'}</h2>
          <ul>
            <li><Link to={`${base}/services#svc-1`}>{isEnglish ? 'Customer Service & Contact Centres' : 'خدمة العملاء ومراكز الاتصال'}</Link></li>
            <li><Link to={`${base}/services#svc-2`}>{isEnglish ? 'Medical Insurance Administration' : 'إدارة العمليات التأمينية'}</Link></li>
            <li><Link to={`${base}/services#svc-3`}>{isEnglish ? 'Customer Relationships & Loyalty' : 'إدارة علاقات المرضى وبرامج الولاء'}</Link></li>
            <li><Link to={`${base}/services#svc-4`}>{isEnglish ? 'Telesales Teams' : 'فرق مبيعات هاتفية'}</Link></li>
            <li><Link to={`${base}/services#svc-5`}>{isEnglish ? 'E-commerce Operations' : 'إدارة عمليات التجارة الإلكترونية'}</Link></li>
            <li><Link to={`${base}/services#svc-6`}>{isEnglish ? 'Digital Marketing' : 'التسويق الرقمي'}</Link></li>
            <li><Link to={`${base}/services#svc-7`}>{isEnglish ? 'Telehealth Operations & Support' : 'الاستشارات الطبية عن بُعد'}</Link></li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h2 className="footer__h">{isEnglish ? 'Contact Us' : 'تواصل معنا'}</h2>
          <ul>
            <li><a href="https://calendly.com/milaserv" target="_blank" rel="noopener">{isEnglish ? 'Book a Consultation' : 'احجز استشارة'}</a></li>
            <li><a href="https://wa.me/201055577579" target="_blank" rel="noopener">WhatsApp</a></li>
            <li><a href="https://www.linkedin.com/company/milaserv-company/" target="_blank" rel="noopener">LinkedIn</a>
            </li>
            <li><a href="https://www.instagram.com/milaserv.eg/" target="_blank" rel="noopener">Instagram</a></li>
          </ul>
        </div>
      </div>
      <p className="footer__legal">© <span id="year">{currentYear}</span> {isEnglish ? 'Milaserv. All rights reserved.' : 'ميلاسيرف. جميع الحقوق محفوظة.'}</p>
    </div>
  </footer>
  );
}
