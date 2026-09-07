"use client";

import Image from "next/image";
import "./page.css";
import taaimIllustration from "./F91CEB7E-01E6-463E-9B06-E938715D3242.png";

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
        <header className="ta-header scrolled">
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

export default function NotFound() {
    return (
        <>
            <Header404 />

            <main className="ta-404">
                <div className="ta-404-blob one"></div>
                <div className="ta-404-blob two"></div>
                <div className="ta-404-chefhat-outline">🧑‍🍳</div>

                <div className="ta-404-image-wrap">
                    <Image
                        src={taaimIllustration}
                        alt="طاهي طَعِيم يبحث عن الصفحة المفقودة"
                        priority
                        className="ta-404-image"
                    />
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
        
