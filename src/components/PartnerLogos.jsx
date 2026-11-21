import React from 'react';
import { publicAsset } from '../utils/publicAsset';

const partners = [
  { name: { ar: 'المتحدة', en: 'Al Motaheda' }, logo: 'Images/Logo11.webp' },
  { name: { ar: 'شمس', en: 'Shams' }, logo: 'Images/Logo4.svg' },
  { name: { ar: 'القدس', en: 'Al Quds' }, logo: 'Images/Logo2.png' },
  { name: { ar: 'اجورا', en: 'Agora' }, logo: 'Images/Logo3.webp' },
];

export default function PartnerLogos({ isEnglish = false }) {
  const extendedPartners = [...partners, ...partners, ...partners];

  return (
    <div className="hero-partners-bar" dir={isEnglish ? 'ltr' : 'rtl'}>
      <div className="hero-marquee">
        <div className="hero-marquee__track">
          {extendedPartners.map((partner, index) => {
            const name = isEnglish ? partner.name.en : partner.name.ar;
            return (
              <div className="hero-partner-pill" key={`${partner.logo}-${index}`}>
                <img
                  src={publicAsset(partner.logo)}
                  alt={name}
                  className="hero-partner-pill__logo"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                    event.currentTarget.nextElementSibling.style.display = 'block';
                  }}
                />
                <span className="hero-partner-pill__fallback" style={{ display: 'none' }}>
                  {name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
