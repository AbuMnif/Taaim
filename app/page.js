"use client";

import { useEffect, useRef, useState } from "react";
import "./page.css";

/* =========================================================
   CONFIG
========================================================= */

const CONFIG = {
    name: "طَعِيم",
    englishName: "Ta'aim",
    logo: "/logo.PNG",
};

const MENU_ITEMS = [
    {
        icon: "🍔",
        title: "برجر طَعِيم",
        description: "برجر شهي بطعم غني ومكونات مختارة.",
        price: "2,500",
    },
    {
        icon: "🍕",
        title: "بيتزا خاصة",
        description: "عجينة طازجة ونكهات تجمعها في لقمة واحدة.",
        price: "3,000",
    },
    {
        icon: "🍗",
        title: "وجبة الدجاج",
        description: "وجبة شهية ومشبعة لمحبي الدجاج.",
        price: "3,500",
    },
    {
        icon: "🍝",
        title: "باستا",
        description: "طبق كريمي غني بالنكهة.",
        price: "2,800",
    },
    {
        icon: "🥗",
        title: "سلطة طَعِيم",
        description: "اختيار خفيف وطازج.",
        price: "1,800",
    },
    {
        icon: "🍰",
        title: "حلى اليوم",
        description: "الحلو دائماً له مكان.",
        price: "1,500",
    },
];

const NAV_LINKS = [
    { href: "/", label: "الرئيسية" },
    { href: "#menu", label: "القائمة" },
    { href: "#offers", label: "العروض" },
    { href: "#about", label: "عن طَعِيم" },
];

const MOBILE_LINKS = [
    { href: "/", label: "🏠 الرئيسية" },
    { href: "#menu", label: "🍽️ القائمة" },
    { href: "#offers", label: "🔥 العروض" },
    { href: "#about", label: "❤️ عن طَعِيم" },
];

/* =========================================================
   WEBSITE CLOSED OVERLAY
========================================================= */

function ClosedOverlay() {
    return (
        <div className="ta-closed-overlay">
            <div className="ta-closed-bg"></div>

            <div className="ta-closed-content">
                <div className="ta-closed-sign">
                    <div className="ta-closed-lock">🔒</div>
                    <span>تم إغلاق الموقع</span>
                </div>

                <div className="ta-closed-divider"></div>

                <h1>
                    لعدم التوصل إلى اتفاق
                    <br />
                    <span>مع المطعم</span>
                </h1>

                <p className="ta-closed-description">
                    تم إيقاف الموقع حالياً لعدم التوصل إلى اتفاق مع إدارة المطعم.
                </p>

                <div className="ta-closed-contact">
                    <div className="ta-contact-item">
                        <span className="ta-contact-icon">👤</span>

                        <div>
                            <small>التواصل</small>
                            <strong>محمد حلمي</strong>
                        </div>
                    </div>

                    <div className="ta-contact-line"></div>

                    <a
                        href="https://wa.me/967783342178"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ta-contact-item whatsapp"
                    >
                        <span className="ta-contact-icon">💬</span>

                        <div>
                            <small>واتساب</small>
                            <strong dir="ltr">783342178</strong>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

/* =========================================================
   HEADER
========================================================= */

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);

        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header className={`ta-header${scrolled ? " scrolled" : ""}`}>
                <div className="ta-header-inner">
                    <a href="/" className="ta-logo">
                        <span className="ta-logo-mark">
                            <img
                                src={CONFIG.logo}
                                alt={`شعار ${CONFIG.name}`}
                                className="ta-logo-img"
                            />
                        </span>

                        <span>{CONFIG.name}</span>
                    </a>

                    <nav className="ta-nav">
                        {NAV_LINKS.map((link) => (
                            <a key={link.href} href={link.href}>
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <a href="#menu" className="ta-header-button">
                        استعرض القائمة
                    </a>

                    <button
                        className="ta-menu-button"
                        aria-label="فتح القائمة"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? "×" : "☰"}
                    </button>
                </div>
            </header>

            <div className={`ta-mobile-menu${menuOpen ? " open" : ""}`}>
                {MOBILE_LINKS.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </>
    );
}

/* =========================================================
   MENU CARD
========================================================= */

function MenuCard({ item, cardRef }) {
    return (
        <article className="ta-menu-card" ref={cardRef}>
            <div className="ta-menu-image">{item.icon}</div>

            <div className="ta-menu-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="ta-menu-bottom">
                    <span className="ta-price">{item.price}</span>

                    <button
                        className="ta-order-small"
                        aria-label="إضافة"
                    >
                        +
                    </button>
                </div>
            </div>
        </article>
    );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
    return (
        <footer className="ta-footer">
            <div className="ta-footer-inner">
                <div>
                    <div className="ta-footer-logo">
                        {CONFIG.name}
                    </div>

                    <p>
                        نكهة تستحق التجربة، وتجربة تستحق العودة.
                    </p>
                </div>

                <div>
                    <h3>روابط سريعة</h3>

                    <div className="ta-footer-links">
                        {NAV_LINKS.map((link) => (
                            <a key={link.href} href={link.href}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h3>تواصل معنا</h3>

                    <div className="ta-footer-links">
                        <a href="#">📞 تواصل معنا</a>
                        <a href="#">📍 موقعنا</a>
                        <a href="#">📱 حساباتنا</a>
                    </div>
                </div>
            </div>

            <div className="ta-footer-bottom">
                © {new Date().getFullYear()} {CONFIG.name} — جميع الحقوق محفوظة
            </div>
        </footer>
    );
}

/* =========================================================
   PAGE
========================================================= */

export default function Home() {
    const animatedRefs = useRef([]);

    const registerAnimatedRef = (el) => {
        if (
            el &&
            !animatedRefs.current.includes(el)
        ) {
            animatedRefs.current.push(el);
        }
    };

    useEffect(() => {
        const elements = animatedRefs.current;

        if (!("IntersectionObserver" in window)) {
            elements.forEach((el) => {
                el.classList.add("visible");
            });

            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* =====================================================
                شاشة إغلاق الموقع
                تغطي الموقع بالكامل
            ===================================================== */}

            <ClosedOverlay />

            {/* =====================================================
                الموقع الأصلي
            ===================================================== */}

            <Header />

            <main>
                {/* =================================================
                    HERO
                ================================================= */}

                <section className="ta-hero">
                    <div className="ta-hero-inner">
                        <div className="ta-hero-content">
                            <div className="ta-badge">
                                <span className="ta-badge-dot"></span>
                                نكهة تستحق التجربة
                            </div>

                            <h1>
                                أهلاً بك في <span>طَعِيم</span>
                            </h1>

                            <p className="ta-hero-description">
                                هنا تبدأ الحكاية من أول لقمة. أطباق شهية،
                                نكهات مميزة، وتجربة صُممت لتخلي كل زيارة
                                تستحق التكرار.
                            </p>

                            <div className="ta-hero-actions">
                                <a
                                    href="#menu"
                                    className="ta-primary-button"
                                >
                                    🍽️ استعرض القائمة
                                </a>

                                <a
                                    href="#about"
                                    className="ta-secondary-button"
                                >
                                    اكتشف طَعِيم
                                </a>
                            </div>
                        </div>

                        <div className="ta-hero-visual">
                            <div className="ta-food-circle">
                                <div className="ta-food-symbol">
                                    <img
                                        src={CONFIG.logo}
                                        alt={`شعار ${CONFIG.name}`}
                                        className="ta-food-symbol-img"
                                    />
                                </div>
                            </div>

                            <div className="ta-floating-card one">
                                ⭐ نكهة مميزة
                            </div>

                            <div className="ta-floating-card two">
                                ❤️ صُنعت بحب
                            </div>
                        </div>
                    </div>
                </section>

                {/* =================================================
                    FEATURES
                ================================================= */}

                <section className="ta-section">
                    <div className="ta-section-inner">
                        <div className="ta-section-head">
                            <span className="ta-section-kicker">
                                لماذا طَعِيم؟
                            </span>

                            <h2>
                                أكثر من مجرد وجبة
                            </h2>

                            <p>
                                نهتم بالتفاصيل الصغيرة التي تجعل تجربة
                                الطعام مختلفة.
                            </p>
                        </div>

                        <div className="ta-features">
                            <div
                                className="ta-feature"
                                ref={registerAnimatedRef}
                            >
                                <div className="ta-feature-icon">
                                    🍽️
                                </div>

                                <h3>
                                    مذاق مميز
                                </h3>

                                <p>
                                    نختار المكونات بعناية لنقدم لك
                                    مذاقاً تتذكره.
                                </p>
                            </div>

                            <div
                                className="ta-feature"
                                ref={registerAnimatedRef}
                            >
                                <div className="ta-feature-icon">
                                    ⚡
                                </div>

                                <h3>
                                    خدمة سريعة
                                </h3>

                                <p>
                                    لأننا نعرف أن وقتك مهم، نحرص على
                                    سرعة الخدمة وجودتها.
                                </p>
                            </div>

                            <div
                                className="ta-feature"
                                ref={registerAnimatedRef}
                            >
                                <div className="ta-feature-icon">
                                    ❤️
                                </div>

                                <h3>
                                    صُنعت بحب
                                </h3>

                                <p>
                                    كل طبق نقدمه يحمل اهتماماً
                                    بالتفاصيل وشغفاً بالطعام.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =================================================
                    MENU
                ================================================= */}

                <section
                    className="ta-section gray"
                    id="menu"
                >
                    <div className="ta-section-inner">
                        <div className="ta-section-head">
                            <span className="ta-section-kicker">
                                قائمتنا
                            </span>

                            <h2>
                                اختر ما تشتهيه
                            </h2>

                            <p>
                                مجموعة من الأطباق المختارة بعناية.
                            </p>
                        </div>

                        <div className="ta-menu-grid">
                            {MENU_ITEMS.map((item) => (
                                <MenuCard
                                    key={item.title}
                                    item={item}
                                    cardRef={registerAnimatedRef}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* =================================================
                    OFFER
                ================================================= */}

                <section
                    className="ta-section"
                    id="offers"
                >
                    <div className="ta-section-inner">
                        <div className="ta-offer">
                            <div>
                                <h2>
                                    جوعان؟ 😋
                                </h2>

                                <p>
                                    اكتشف قائمتنا واختر وجبتك المفضلة اليوم.
                                </p>
                            </div>

                            <a
                                href="#menu"
                                className="ta-offer-button"
                            >
                                اطلب الآن
                            </a>
                        </div>
                    </div>
                </section>

                {/* =================================================
                    ABOUT
                ================================================= */}

                <section
                    className="ta-section gray"
                    id="about"
                >
                    <div className="ta-section-inner">
                        <div className="ta-about">
                            <div className="ta-about-visual">
                                <img
                                    src={CONFIG.logo}
                                    alt={`شعار ${CONFIG.name}`}
                                    className="ta-about-visual-img"
                                />
                            </div>

                            <div className="ta-about-content">
                                <h2>
                                    طَعِيم{" "}
                                    <span>
                                        بطريقة مختلفة.
                                    </span>
                                </h2>

                                <p>
                                    في طَعِيم نؤمن أن الطعام ليس مجرد
                                    وجبة، بل تجربة.
                                </p>

                                <p>
                                    لذلك نهتم بالمذاق، الجودة، وطريقة
                                    تقديم كل طبق حتى تكون زيارتك تجربة
                                    تستحق العودة إليها.
                                </p>

                                <a
                                    href="#menu"
                                    className="ta-primary-button"
                                >
                                    اكتشف قائمتنا
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
