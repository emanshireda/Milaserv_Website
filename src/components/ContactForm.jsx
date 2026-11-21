import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ContactForm.css';

const AVAILABLE_SERVICES_AR = [
  'خدمة العملاء ومراكز الاتصال',
  'المبيعات الهاتفية',
  'إدارة التجارة الإلكترونية',
  'إدارة علاقات المرضى وبرامج الولاء',
  'ضمان الجودة واختبار الأنظمة',
  'تصميم الجرافيك ومونتتاج الفيديو',
  'حلول مخصصة',
];

const AVAILABLE_SERVICES_EN = [
  'Customer Service & Contact Centres',
  'Telesales',
  'E-commerce Operations',
  'Patient Relationships & Loyalty',
  'Quality Assurance & System Testing',
  'Graphic Design & Video Editing',
  'Custom Solutions',
];

const FACILITY_TYPES_AR = ['مستشفى', 'مجمع طبي', 'عيادة خاصة', 'مختبر طبي', 'صيدلية', 'منصة رعاية صحية', 'أخرى'];
const FACILITY_TYPES_EN = ['Hospital', 'Medical Centre', 'Private Clinic', 'Medical Laboratory', 'Pharmacy', 'Digital Health Platform', 'Other'];
const TEAM_SIZES_AR = ['1 - 5 موظفين', '6 - 15 موظف', '16 - 50 موظف', 'أكثر من 50 موظف', 'لست متأكداً بعد'];
const TEAM_SIZES_EN = ['1 - 5 employees', '6 - 15 employees', '16 - 50 employees', 'More than 50 employees', 'Not sure yet'];

export default function ContactForm() {
  const { pathname } = useLocation();
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/');
  const availableServices = isEnglish ? AVAILABLE_SERVICES_EN : AVAILABLE_SERVICES_AR;
  const facilityTypes = isEnglish ? FACILITY_TYPES_EN : FACILITY_TYPES_AR;
  const teamSizes = isEnglish ? TEAM_SIZES_EN : TEAM_SIZES_AR;

  const [formData, setFormData] = useState({
    fullName: '',
    facilityName: '',
    email: '',
    countryCode: '+966 SA',
    phone: '',
    facilityType: '',
    teamSize: '',
    services: [],
    message: '',
    agreePrivacy: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((item) => item !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    setSubmitting(true);
    setSubmitError('');
    setSubmitted(false);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitError(
        isEnglish
          ? 'This form is not currently connected to a submission service. Please book a consultation or contact us through WhatsApp.'
          : 'النموذج غير متصل حاليًا بخدمة إرسال. يرجى حجز استشارة أو التواصل معنا عبر واتساب.'
      );
    }, 300);
  };

  return (
    <section className="section contact-form-section" id="contact" dir={isEnglish ? 'ltr' : 'rtl'}>
      <div className="container">
        <div className="contact-form-wrapper" data-reveal>
          <div className="contact-form__head">
            <span className="contact-tag">{isEnglish ? 'Contact Us' : 'تواصل معنا'}</span>
            <h2>{isEnglish ? 'Send Us Your Request' : 'أرسل لنا طلبك'}</h2>
            <p>{isEnglish
              ? <>Complete the form and one of our healthcare experts will contact you. Fields marked with <span className="required-star">*</span> are required.</>
              : <>املأ النموذج وسيتواصل معك أحد خبراء الرعاية الصحية لدينا. الحقول المعلّمة بـ <span className="required-star">*</span> مطلوبة.</>}</p>
          </div>

          {submitted ? (
            <div className="contact-success-box">
              <div className="success-icon"><i className="bi bi-check-circle-fill"></i></div>
              <h3>{isEnglish ? 'Your request has been submitted successfully!' : 'تم إرسال طلبك بنجاح!'}</h3>
              <p>{isEnglish ? 'Thank you for contacting Milaserv. Our specialist team will contact you shortly.' : 'شكراً لتواصلك مع ميلاسيرف. سيتواصل معك فريق المختصين لدينا في أقرب وقت.'}</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label>{isEnglish ? 'Full Name' : 'الاسم الكامل'} <span className="required-star">*</span></label>
                  <input type="text" required placeholder={isEnglish ? 'Example: Ahmed Mohamed' : 'مثال: أحمد محمد'} value={formData.fullName} onChange={(event) => setFormData({ ...formData, fullName: event.target.value })} />
                </div>
                <div className="form-group">
                  <label>{isEnglish ? 'Facility Name' : 'اسم المنشأة'} <span className="required-star">*</span></label>
                  <input type="text" required placeholder={isEnglish ? 'Pharmacy / Hospital / Company name' : 'اسم الصيدلية / المستشفى / الشركة'} value={formData.facilityName} onChange={(event) => setFormData({ ...formData, facilityName: event.target.value })} />
                </div>
              </div>

              <div className="form-group">
                <label>{isEnglish ? 'Email Address' : 'البريد الإلكتروني'} <span className="required-star">*</span></label>
                <input type="email" required placeholder="name@company.com" dir="ltr" className="text-start" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
              </div>

              <div className="form-group">
                <label>{isEnglish ? 'Mobile / WhatsApp Number' : 'رقم الجوال / واتساب'} <span className="required-star">*</span></label>
                <div className="phone-input-group">
                  <input type="tel" required placeholder="5X XXX XXXX" dir="ltr" className="text-start phone-number-field" value={formData.phone} onChange={(event) => setFormData({ ...formData, phone: event.target.value })} />
                  <select className="country-code-select" value={formData.countryCode} onChange={(event) => setFormData({ ...formData, countryCode: event.target.value })}>
                    <option value="+966 SA">+966 SA</option>
                    <option value="+971 AE">+971 AE</option>
                    <option value="+974 QA">+974 QA</option>
                    <option value="+965 KW">+965 KW</option>
                    <option value="+20 EG">+20 EG</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>{isEnglish ? 'Facility Type' : 'نوع المنشأة'} <span className="required-star">*</span></label>
                  <select required value={formData.facilityType} onChange={(event) => setFormData({ ...formData, facilityType: event.target.value })}>
                    <option value="" disabled>{isEnglish ? 'Select facility type' : 'اختر نوع المنشأة'}</option>
                    {facilityTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>{isEnglish ? 'Required Team Size' : 'حجم الفريق المطلوب'}</label>
                  <select value={formData.teamSize} onChange={(event) => setFormData({ ...formData, teamSize: event.target.value })}>
                    <option value="" disabled>{isEnglish ? 'Not sure yet' : 'لست متأكداً بعد'}</option>
                    {teamSizes.map((size) => <option key={size} value={size}>{size}</option>)}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>{isEnglish ? 'Services You Need' : 'الخدمات التي تهمك'} <span className="optional-tag">{isEnglish ? '(you can select more than one)' : '(يمكنك اختيار أكثر من خدمة)'}</span></label>
                <div className="service-tags-grid">
                  {availableServices.map((service) => (
                    <button type="button" key={service} className={`service-pill ${formData.services.includes(service) ? 'active' : ''}`} onClick={() => handleServiceToggle(service)}>
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>{isEnglish ? 'How Can We Help?' : 'كيف يمكننا مساعدتك؟'} <span className="required-star">*</span></label>
                <textarea rows="4" required placeholder={isEnglish ? 'Tell us about your needs: required roles, systems used, performance indicators, and any compliance requirements.' : 'أخبرنا باحتياجاتك: الأدوار المطلوبة، الأنظمة التي تستخدمها، مؤشرات الأداء، وأي متطلبات امتثال.'} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })}></textarea>
              </div>

              {submitError && (
                <div className="contact-submit-error" role="alert">
                  {submitError}
                  {' '}
                  <a href="https://wa.me/201055577579" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </div>
              )}

              <div className="form-footer-group">
                <label className="privacy-checkbox-label">
                  <input type="checkbox" required checked={formData.agreePrivacy} onChange={(event) => setFormData({ ...formData, agreePrivacy: event.target.checked })} />
                  <span>{isEnglish
                    ? <>I agree to Milaserv contacting me regarding my request and to the <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</>
                    : <>أوافق على تواصل ميلاسيرف معي بخصوص طلبي، وعلى <a href="/privacy" target="_blank" rel="noopener noreferrer">سياسة الخصوصية</a>.</>}</span>
                </label>
                <div className="form-submit-row">
                  <span className="data-security-note">{isEnglish ? 'Your data is secure and will only be used to respond to your request.' : 'بياناتك محفوظة ولن تُستخدم إلا للرد على طلبك.'}</span>
                  <button type="submit" className="btn btn-brand-light btn-lg submit-btn" disabled={submitting}>
                    <span>{submitting ? (isEnglish ? 'Submitting...' : 'جارٍ الإرسال...') : (isEnglish ? 'Submit Request' : 'إرسال الطلب')}</span>
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
