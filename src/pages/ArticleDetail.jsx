import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ARTICLES } from '../data/articles';
import { publicAsset } from '../utils/publicAsset';
import '../styles/blog.css';

export default function ArticleDetail() {
  const { slug } = useParams();
  const [progress, setProgress] = useState(0);

  const articleIndex = useMemo(
    () => ARTICLES.findIndex((item) => item.slug === slug),
    [slug]
  );

  const article = articleIndex !== -1 ? ARTICLES[articleIndex] : null;

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return ARTICLES.filter((item) => item.slug !== article.slug).slice(0, 3);
  }, [article]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (article) {
      document.title = `${article.title} | ميلاسيرف`;
    }
  }, [article]);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, Math.max(0, (scrolled / total) * 100)) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div dir="rtl" lang="ar" className="article-reader-page">
      <div
        className="article-progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <section className="article-reader-shell">
        <div className="container" style={{ maxWidth: '1040px' }}>
          <div className="article-top-bar">
            <Link to="/blog" className="article-back-pill">
              <i className="bi bi-arrow-right" aria-hidden="true" />
              <span>العودة إلى جميع المقالات</span>
            </Link>
            {article && (
              <span className="article-index-chip">
                مقال {String(articleIndex + 1).padStart(2, '0')} / {String(ARTICLES.length).padStart(2, '0')}
              </span>
            )}
          </div>

          {!article ? (
            <div className="faq-empty-card">
              <h1>المقال غير موجود</h1>
              <p>تعذر العثور على المقال المطلوب، يمكنك استعراض جميع المقالات من المدونة.</p>
              <Link to="/blog" className="btn btn-brand">
                العودة إلى المدونة
              </Link>
            </div>
          ) : (
            <>
              <header className="article-hero-card">
                <div className="blog-topo-layer" aria-hidden="true" />
                <div className="position-relative" style={{ zIndex: 2 }}>
                  <span className="blog-eyebrow-pill">
                    <span className="blog-eyebrow-dot" aria-hidden="true" />
                    <span>{article.category}</span>
                  </span>

                  <h1>{article.title}</h1>

                  <div className="article-hero-card__meta">
                    <span>
                      <i className="bi bi-calendar3" aria-hidden="true" /> {article.date}
                    </span>
                    {article.readTime && (
                      <span>
                        <i className="bi bi-clock" aria-hidden="true" /> {article.readTime}
                      </span>
                    )}
                  </div>

                  {article.excerpt && (
                    <p className="article-hero-card__lead">{article.excerpt}</p>
                  )}

                  {article.banner && (
                    <div className="article-hero-card__banner">
                      <img src={publicAsset(article.banner)} alt={article.title} />
                      <div className="article-hero-card__banner-gradient" aria-hidden="true" />
                    </div>
                  )}
                </div>
              </header>

              <div className="article-body-layout">
                {article.sections?.length > 1 && (
                  <aside className="article-toc-card" aria-label="محاور المقال">
                    <div className="article-toc-card__header">
                      <i className="bi bi-list-nested" aria-hidden="true" />
                      <span>محاور المقال</span>
                    </div>
                    <nav className="article-toc-list">
                      {article.sections.map((sec, idx) => (
                        <a key={idx} href={`#sec-${idx + 1}`} className="article-toc-link">
                          <span className="article-toc-num">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span>{sec.heading}</span>
                        </a>
                      ))}
                    </nav>
                  </aside>
                )}

                <article className="article-sections-stack">
                  {article.sections?.map((sec, idx) => (
                    <section
                      key={idx}
                      id={`sec-${idx + 1}`}
                      className="article-section-block"
                    >
                      <div className="article-section-block__head">
                        <span className="article-section-badge">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <h2>{sec.heading}</h2>
                      </div>

                      {sec.paragraphs?.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}

                      {sec.bullets && sec.bullets.length > 0 && (
                        <ul>
                          {sec.bullets.map((b, bIdx) => (
                            <li key={bIdx}>{b}</li>
                          ))}
                        </ul>
                      )}

                      {sec.outro && (
                        <div className="article-section-outro">
                          <p className="mb-0">{sec.outro}</p>
                        </div>
                      )}
                    </section>
                  ))}
                </article>
              </div>


              {relatedArticles.length > 0 && (
                <div className="article-related-section">
                  <div className="article-related-head">
                    <h2>مقالات أخرى قد تهمك</h2>
                    <Link to="/blog" className="link-more">
                      عرض الكل
                    </Link>
                  </div>
                  <div className="row g-4">
                    {relatedArticles.map((item) => (
                      <div className="col-md-4" key={item.slug}>
                        <article className="blog-card">
                          <div className="blog-card__media">
                            <img
                              src={publicAsset(item.banner)}
                              alt={item.title}
                              loading="lazy"
                            />
                            <div className="blog-card__gradient" aria-hidden="true" />
                            <span className="blog-card__cat">{item.category}</span>
                          </div>
                          <div className="blog-card__body">
                            <div className="blog-card__meta">
                              <i className="bi bi-calendar3" aria-hidden="true" />
                              <span>{item.date}</span>
                            </div>
                            <h3>
                              <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                            </h3>
                            <div className="blog-card__footer">
                              <Link className="link-more" to={`/blog/${item.slug}`}>
                                اقرأ المقال
                              </Link>
                            </div>
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}