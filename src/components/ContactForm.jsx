import React, { useState } from 'react';
import './ContactForm.css';

const AVAILABLE_SERVICES = [
  'خدمة العملاء ومراكز الاتصال',
  'المبيعات الهاتفية',
  'إدارة التجارة الإلكترونية',
  'إدارة علاقات المرضى وبرامج الولاء',
  'ضمان الجودة واختبار الأنظمة',
  'تصميم الجرافيك ومونتتاج الفيديو',
  'حلول مخصصة'
];

const FACILITY_TYPES = [
  'مستشفى',
  'مجمع طبي',
  'عيادة خاصة',
  'مختبر طبي',
  'صيدلية',
  'منصة رعاية صحية',
  'أخرى'
];

const TEAM_SIZES = [
  '1 - 5 موظفين',
  '6 - 15 موظف',
  '16 - 50 موظف',
  'أكثر من 50 موظف',
  'لست متأكداً بعد'
];

export default function ContactForm() {
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
    agreePrivacy: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleServiceToggle = (service) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your form submission logic here (API call, EmailJS, etc.)
  };

  return (
    <section className="section contact-form-section" id="contact" dir="rtl">
      <div className="container">
        <div className="contact-form-wrapper" data-reveal>
          {/* Header */}
          <div className="contact-form__head">
            <span className="contact-tag">تواصل معنا</span>
            <h2>أرسل لنا طلبك</h2>
            <p>املأ النموذج وسيتواصل معك أحد خبراء الرعاية الصحية لدينا. الحقول المعلّمة بـ <span className="required-star">*</span> مطلوبة.</p>
          </div>

          {submitted ? (
            <div className="contact-success-box">
              <div className="success-icon"><i className="bi bi-check-circle-fill"></i></div>
              <h3>تم إرسال طلبك بنجاح!</h3>
              <p>شكراً لتواصلك مع ميلاسيرف. سيتواصل معك فريق المختصين لدينا في أقرب وقت.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>

              {/* Row 1: Full Name & Facility Name */}
              <div className="form-row">
                <div className="form-group">
                  <label>الاسم الكامل <span className="required-star">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: أحمد محمد"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>اسم المنشأة <span className="required-star">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="اسم الصيدلية / المستشفى / الشركة"
                    value={formData.facilityName}
                    onChange={(e) => setFormData({ ...formData, facilityName: e.target.value })}
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div className="form-group">
                <label>البريد الإلكتروني <span className="required-star">*</span></label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  dir="ltr"
                  className="text-start"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* Row 3: Phone & WhatsApp */}
              <div className="form-group">
                <label>رقم الجوال / واتساب <span className="required-star">*</span></label>
                <div className="phone-input-group">
                  <input
                    type="tel"
                    required
                    placeholder="5X XXX XXXX"
                    dir="ltr"
                    className="text-start phone-number-field"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <select
                    className="country-code-select"
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                  >
                    <option value="+966 SA">+966 SA</option>
                    <option value="+971 AE">+971 AE</option>
                    <option value="+974 QA">+974 QA</option>
                    <option value="+965 KW">+965 KW</option>
                    <option value="+20 EG">+20 EG</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Facility Type & Team Size */}
              <div className="form-row">
                <div className="form-group">
                  <label>نوع المنشأة <span className="required-star">*</span></label>
                  <select
                    required
                    value={formData.facilityType}
                    onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                  >
                    <option value="" disabled>اختر نوع المنشأة</option>
                    {FACILITY_TYPES.map((type, idx) => (
                      <option key={idx} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>حجم الفريق المطلوب</label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                  >
                    <option value="" disabled>لست متأكداً بعد</option>
                    {TEAM_SIZES.map((size, idx) => (
                      <option key={idx} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5: Services Tags (Multi-select) */}
              <div className="form-group">
                <label>الخدمات التي تهمك <span className="optional-tag">(يمكنك اختيار أكثر من خدمة)</span></label>
                <div className="service-tags-grid">
                  {AVAILABLE_SERVICES.map((service, idx) => {
                    const isSelected = formData.services.includes(service);
                    return (
                      <button
                        type="button"
                        key={idx}
                        className={`service-pill ${isSelected ? 'active' : ''}`}
                        onClick={() => handleServiceToggle(service)}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 6: Message */}
              <div className="form-group">
                <label>كيف يمكننا مساعدتك؟ <span className="required-star">*</span></label>
                <textarea
                  rows="4"
                  required
                  placeholder="أخبرنا باحتياجاتك: الأدوار المطلوبة، الأنظمة التي تستخدمها، مؤشرات الأداء، وأي متطلبات امتثال."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              {/* Row 7: Privacy Checkbox & Submit */}
              <div className="form-footer-group">
                <label className="privacy-checkbox-label">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreePrivacy}
                    onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                  />
                  <span>أوافق على تواصل ميلاسيرف معي بخصوص طلبي، وعلى <a href="/privacy" target="_blank" rel="noopener noreferrer">سياسة الخصوصية</a>.</span>
                </label>

                <div className="form-submit-row">
                  <span className="data-security-note">بياناتك محفوظة ولن تُستخدم إلا للرد على طلبك.</span>
                  <button type="submit" className="btn btn-brand-light btn-lg submit-btn">
                    <span>إرسال الطلب</span>
                    <i className="bi bi-arrow-left"></i>
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