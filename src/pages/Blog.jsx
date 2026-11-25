import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../data/articles';
import { publicAsset } from '../utils/publicAsset';
import '../styles/blog.css';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [query, setQuery] = useState('');

  const categories = useMemo(() => {
    const unique = new Set(ARTICLES.map((item) => item.category).filter(Boolean));
    return ['ALL', ...Array.from(unique)];
  }, []);

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return ARTICLES.filter((item) => {
      const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;

      const inTitle = item.title?.toLowerCase().includes(normalizedQuery);
      const inExcerpt = item.excerpt?.toLowerCase().includes(normalizedQuery);
      const inCategory = item.category?.toLowerCase().includes(normalizedQuery);
      return inTitle || inExcerpt || inCategory;
    });
  }, [selectedCategory, query]);

  return (
    <div dir="rtl" lang="ar" className="blog-page">
      <header className="blog-hero">
        <div className="blog-topo-layer" aria-hidden="true" />
        <div className="container">
          <span className="blog-eyebrow-pill">
            <span className="blog-eyebrow-dot" aria-hidden="true" />
            <span>المدونة والرؤى</span>
          </span>
          <h1>المقالات والدراسات</h1>
          <p>
            مقالات متخصصة حول تعهيد مراكز الاتصال الطبية، تجربة المرضى، التحول الرقمي، ومؤشرات الأداء.
          </p>
        </div>
      </header>

      <section className="blog-controls-section">
        <div className="container">
          <div className="blog-toolbar">
            <div className="blog-search-box">
              <i className="bi bi-search blog-search-box__icon" aria-hidden="true" />
              <input
                type="search"
                className="blog-search-box__input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ابحث عن مقال أو موضوع أو تصنيف..."
                aria-label="ابحث في المقالات"
              />
              {query && (
                <button
                  type="button"
                  className="blog-search-box__clear"
                  onClick={() => setQuery('')}
                  aria-label="مسح البحث"
                >
                  <i className="bi bi-x-lg" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          <div className="blog-filters" role="tablist" aria-label="تصنيفات المقالات">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  className={`blog-filter-chip ${active ? 'is-active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === 'ALL' ? 'الكل' : cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="blog-grid-section">
        <div className="container">
          {filteredArticles.length === 0 ? (
            <div className="faq-empty-card">
              <h3>لا توجد مقالات مطابقة للبحث</h3>
              <p>جرّب كلمة بحث أخرى أو اختر تصنيفًا مختلفًا.</p>
              <button
                type="button"
                className="btn btn-brand"
                onClick={() => {
                  setQuery('');
                  setSelectedCategory('ALL');
                }}
              >
                إعادة ضبط الفلاتر
              </button>
            </div>
          ) : (
            <div className="row g-4">
              {filteredArticles.map((article) => (
                <div className="col-md-6 col-lg-4" key={article.slug}>
                  <article className="blog-card">
                    <div className="blog-card__media">
                      <img src={publicAsset(article.banner)} alt={article.title} loading="lazy" />
                      <div className="blog-card__gradient" aria-hidden="true" />
                      <span className="blog-card__cat">{article.category}</span>
                    </div>
                    <div className="blog-card__body">
                      <div className="blog-card__meta">
                        <i className="bi bi-calendar3" aria-hidden="true" />
                        <span>{article.date}</span>
                        {article.readTime && <span>• {article.readTime}</span>}
                      </div>
                      <h3>
                        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                      </h3>
                      <p className="blog-card__excerpt">{article.excerpt}</p>
                      <div className="blog-card__footer">
                        <Link className="link-more" to={`/blog/${article.slug}`}>
                          اقرأ المقال
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}