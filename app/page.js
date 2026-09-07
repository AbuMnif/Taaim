import './page.css';

export default function Home() {
  return (
    <div>
      {/* القائمة العلوية */}
      <nav className="navbar">
        <div className="logo">
          طعيم<span>.</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">الرئيسية</a></li>
          <li><a href="/menu">المينو</a></li>
          <li><a href="/about">عن طعيم</a></li>
          <li><a href="/contact">تواصل معنا</a></li>
        </ul>
        <a href="/menu" className="btn-primary">اطلب الآن</a>
      </nav>

      {/* قسم الواجهة الرئيسية (Hero Section) */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-tag">طعم لا يُنسى</span>
          <h1 className="hero-title">
            تجربة طهي عصرية بلمسة <span>طعيم</span> المميزة
          </h1>
          <p className="hero-description">
            نقدم لك أشهى الأطباق المحضرة يومياً بأعلى معايير الجودة والمكونات الطازجة. استمتع بمذاق فريد وتصميم عصري يرضي ذائقتك.
          </p>
          <div className="hero-buttons">
            <a href="/menu" className="btn-primary">استعرض المينو</a>
            <a href="/about" className="btn-secondary">تعرّف علينا</a>
          </div>
        </div>

        {/* التشكيلات البصرية العصرية */}
        <div className="hero-visual">
          <div className="red-circle-outline"></div>
          <div className="hero-card">
            <div className="hero-card-icon">🍽️</div>
            <h3>أطباق خاصة</h3>
            <p>وصفات طعيم الحصرية طازجة يومياً</p>
          </div>
        </div>
      </section>

      {/* ميزات المطعم */}
      <section className="features">
        <div className="feature-item">
          <h4>مكونات طازجة 🌿</h4>
          <p>نختار أفضل المكونات الطبيعية واليومية لنضمن لك طعماً أصيلاً ونظيفاً.</p>
        </div>
        <div className="feature-item">
          <h4>تحضير سريع ⚡</h4>
          <p>سرعة في الأداء واحترافية في التقديم مع الحفاظ على أعلى مستويات الجودة.</p>
        </div>
        <div className="feature-item">
          <h4>تجربة فريدة 🌟</h4>
          <p>نحرص على تقديم تجربة متكاملة تبدأ من الطلب وحتى آخر لقمة.</p>
        </div>
      </section>
    </div>
  );
}
