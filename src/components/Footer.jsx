import React from 'react';
import { Link } from 'react-router-dom';
import { publicAsset } from '../utils/publicAsset';

export default function Footer() {
  const currentYear = new Intl.NumberFormat('ar-EG', { numberingSystem: 'latn', useGrouping: false }).format(new Date().getFullYear());

  return (
  <footer className="footer">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4">
          <a className="brand" href="#top"><img src={publicAsset('Images/Logo1.png')} alt="ميلاسيرف" width="34"
              height="34"/><span>Milaserv</span></a>
          <p className="mt-3">شريكك في تعهيد وإدارة الخدمات التشغيلية للقطاع الصحي.</p>
        </div>
        <div className="col-6 col-lg-2">
          <h2 className="footer__h">الصفحة</h2>
          <ul>
            <li><a href="#services">خدماتنا</a></li>
            <li><a href="#process">كيف نعمل؟</a></li>
            <li><a href="#sectors">القطاعات</a></li>
            <li><a href="#why">لماذا ميلاسيرف؟</a></li>
            <li><a href="https://milaserv.com/ar/privacy-policy" target="_blank" rel="noopener">سياسة الخصوصية</a></li>
          </ul>
        </div>
        <div className="col-6 col-lg-3">
          <h2 className="footer__h">خدماتنا</h2>
          <ul>
            <li><a href="#svc-1">خدمة العملاء ومراكز الاتصال</a></li>
            <li><a href="#svc-2">إدارة العمليات التأمينية</a></li>
            <li><a href="#svc-3">إدارة علاقات المرضى وبرامج الولاء</a></li>
            <li><a href="#svc-4">فرق مبيعات هاتفية</a></li>
            <li><a href="#svc-5">إدارة عمليات التجارة الإلكترونية</a></li>
            <li><a href="#svc-6">التسويق الرقمي</a></li>
            <li><a href="#svc-7">الاستشارات الطبية عن بُعد</a></li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h2 className="footer__h">تواصل معنا</h2>
          <ul>
            <li><a href="https://calendly.com/milaserv" target="_blank" rel="noopener">احجز استشارة</a></li>
            <li><a href="https://wa.me/201055577579" target="_blank" rel="noopener">WhatsApp</a></li>
            <li><a href="https://www.linkedin.com/company/milaserv-company/" target="_blank" rel="noopener">LinkedIn</a>
            </li>
            <li><a href="https://www.instagram.com/milaserv.eg/" target="_blank" rel="noopener">Instagram</a></li>
          </ul>
        </div>
      </div>
      <p className="footer__legal">© <span id="year">{currentYear}</span> ميلاسيرف. جميع الحقوق محفوظة.</p>
    </div>
  </footer>
  );
}
