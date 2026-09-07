import "./not-found.css";

const CONFIG = {
    name: "طَعِيم",
};

const NAV_LINKS = [
    { href: "/", label: "الرئيسية" },
    { href: "#menu", label: "القائمة" },
    { href: "#offers", label: "العروض" },
    { href: "#about", label: "عن طَعِيم" },
];

function Header404() {
    return (
        <header className="ta-header">
            <div className="ta-header-inner">
                <a href="/" className="ta-logo-block">
                    <span className="ta-logo">{CONFIG.name}</span>
                    <span className="ta-logo-sub">Ta&apos;aim</span>
                </a>

                <nav className="ta-nav">
                    {NAV_LINKS.map((link, i) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={i === 0 ? "active" : ""}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}

function ChefHatIcon() {
    return (
        <div className="mini-hat">
            <div className="mini-hat-poof"></div>
            <div className="mini-hat-band"></div>
        </div>
    );
}

export default function NotFound() {
    return (
        <>
            <Header404 />

            <main className="ta-404">
                <div className="ta-404-blob one"></div>
                <div className="ta-404-blob two"></div>

                <div className="ta-404-scene">
                    {/* ERROR BOARD */}
                    <div className="board">
                        <span className="tag">&lt;error&gt;</span>
                        <p>الصفحة غير موجودة</p>
                        <span className="tag">&lt;/error&gt;</span>
                        <ChefHatIcon />
                    </div>

                    {/* STICKY NOTE */}
                    <div className="sticky">
                        <p>حتى الطباخ يحتاج راحة!</p>
                        <span className="smiley"></span>
                    </div>

                    {/* BOOKS + TOMATO */}
                    <div className="books">
                        <div className="tomato">
                            <span className="leaf"></span>
                        </div>
                        <div className="book book-1">Food</div>
                        <div className="book book-2">Recipes</div>
                        <div className="book book-3">Code</div>
                    </div>

                    {/* MUG */}
                    <div className="mug">
                        <span>طعيم</span>
                    </div>

                    {/* CHEF CHARACTER */}
                    <div className="chef">
                        <div className="chef-hat">
                            <div className="hat-poof"></div>
                            <div className="hat-band"></div>
                        </div>

                        <div className="chef-face">
                            <span className="eyebrow left"></span>
                            <span className="eyebrow right"></span>
                            <span className="eye left"></span>
                            <span className="eye right"></span>
                            <span className="mouth"></span>
                        </div>

                        <div className="chef-body">
                            <div className="apron">
                                <span className="strap left"></span>
                                <span className="strap right"></span>
                                <span className="apron-logo">طعيم</span>
                            </div>

                            <div className="chef-arm">
                                <span className="chef-hand"></span>
                            </div>
                        </div>
                    </div>

                    {/* LAPTOP */}
                    <div className="laptop">
                        <div className="laptop-note">الطبق يعد قليل...</div>

                        <div className="laptop-screen">
                            <span className="cam"></span>
                            <span className="code-line line-1"></span>
                            <span className="code-line line-2"></span>
                            <span className="code-line line-3"></span>
                            <span className="laptop-logo">طعيم</span>
                        </div>

                        <div className="laptop-base"></div>
                        <span className="code-chip">&lt;/&gt;</span>
                    </div>

                    {/* UTENSIL HOLDER */}
                    <div className="utensil-holder">
                        <span className="utensil u1"></span>
                        <span className="utensil u2"></span>
                        <span className="utensil u3"></span>
                    </div>
                </div>

                <div className="ta-404-number">
                    <span className="mark">↝</span>
                    404
                    <span className="mark">↜</span>
                </div>

                <h1>هذه الصفحة ضاعت في المطبخ!</h1>

                <p>
                    يبدو أنك وصلت لصفحة غير موجودة أو أن طهاة {CONFIG.name} لا
                    يزالون يعملون على إعداد محتواها.
                </p>

                <a href="/" className="ta-404-button">
                    <span>←</span> العودة للقائمة الرئيسية
                </a>

                <p className="ta-404-footer-note">
                    لا تقلق .. ستجد طعامك قريباً <span>❤️</span>
                </p>
            </main>
        </>
    );
}
