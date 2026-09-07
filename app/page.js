/* =========================================================
   TA'AIM | طَعِيم
   Complete Website - JS Only
   ========================================================= */

(() => {
    "use strict";

    /* =========================================================
       CONFIG
    ========================================================= */

    const CONFIG = {
        name: "طَعِيم",
        englishName: "Ta'aim",
        primary: "#ed3344",
        primaryDark: "#d92335",
        dark: "#151515",
        muted: "#747474",
        light: "#fafafa",

        /*
         * ضع هنا رابط الشعار لاحقاً إذا رفعته على Vercel.
         * مثال:
         * logo: "/logo.png"
         */
        logo: null,

        phone: "#",
        menu: "#menu",
        offers: "#offers",
        about: "#about"
    };


    /* =========================================================
       GLOBAL CSS
    ========================================================= */

    const CSS = `
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap');

    :root {
        --red: ${CONFIG.primary};
        --red-dark: ${CONFIG.primaryDark};
        --black: ${CONFIG.dark};
        --muted: ${CONFIG.muted};
        --light: ${CONFIG.light};
        --white: #ffffff;
        --border: rgba(0,0,0,.07);
        --shadow: 0 20px 60px rgba(0,0,0,.08);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        direction: rtl;
    }

    body {
        margin: 0;
        font-family: "Cairo", Arial, sans-serif;
        background: #fff;
        color: var(--black);
        overflow-x: hidden;
    }

    body,
    button,
    input,
    textarea {
        font-family: inherit;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        border: 0;
        cursor: pointer;
    }

    img {
        max-width: 100%;
        display: block;
    }

    /* =========================================================
       SCROLLBAR
    ========================================================= */

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #f5f5f5;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--red);
        border-radius: 20px;
    }

    /* =========================================================
       HEADER
    ========================================================= */

    .ta-header {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 9999;

        height: 82px;

        background: rgba(255,255,255,.82);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);

        border-bottom: 1px solid transparent;

        transition:
            .35s ease;
    }

    .ta-header.scrolled {
        height: 72px;
        background: rgba(255,255,255,.96);
        border-bottom-color: var(--border);
        box-shadow: 0 10px 35px rgba(0,0,0,.05);
    }

    .ta-header-inner {
        max-width: 1250px;
        height: 100%;
        margin: auto;
        padding: 0 24px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 25px;
    }

    /* LOGO */

    .ta-logo {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        font-size: 25px;
        color: var(--red);
        white-space: nowrap;
    }

    .ta-logo-mark {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: var(--red);

        display: flex;
        align-items: center;
        justify-content: center;

        color: white;
        font-size: 20px;

        box-shadow:
            0 8px 25px rgba(237,51,68,.25);
    }

    /* NAV */

    .ta-nav {
        display: flex;
        align-items: center;
        gap: 32px;
    }

    .ta-nav a {
        position: relative;

        font-size: 15px;
        font-weight: 700;

        color: #333;

        transition: .25s ease;
    }

    .ta-nav a::after {
        content: "";

        position: absolute;
        right: 0;
        bottom: -8px;

        width: 0;
        height: 2px;

        background: var(--red);

        transition: .25s ease;
    }

    .ta-nav a:hover {
        color: var(--red);
    }

    .ta-nav a:hover::after {
        width: 100%;
    }

    /* HEADER BUTTON */

    .ta-header-button {
        padding: 11px 22px;

        background: var(--red);
        color: white;

        border-radius: 40px;

        font-size: 14px;
        font-weight: 800;

        box-shadow:
            0 8px 25px rgba(237,51,68,.18);

        transition: .25s ease;
    }

    .ta-header-button:hover {
        background: var(--red-dark);
        transform: translateY(-2px);
    }

    /* MOBILE BUTTON */

    .ta-menu-button {
        display: none;

        width: 44px;
        height: 44px;

        border-radius: 50%;
        background: #f7f7f7;

        font-size: 22px;
    }

    /* =========================================================
       MOBILE MENU
    ========================================================= */

    .ta-mobile-menu {
        position: fixed;

        top: 82px;
        right: 15px;
        left: 15px;

        padding: 18px;

        background: rgba(255,255,255,.98);
        backdrop-filter: blur(20px);

        border: 1px solid var(--border);
        border-radius: 24px;

        box-shadow: 0 20px 70px rgba(0,0,0,.15);

        opacity: 0;
        pointer-events: none;

        transform: translateY(-15px);

        transition: .3s ease;

        z-index: 9998;
    }

    .ta-mobile-menu.open {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
    }

    .ta-mobile-menu a {
        display: block;

        padding: 15px;

        border-radius: 14px;

        font-weight: 700;

        transition: .2s ease;
    }

    .ta-mobile-menu a:hover {
        background: #fff0f1;
        color: var(--red);
    }

    /* =========================================================
       HERO
    ========================================================= */

    .ta-hero {
        min-height: 100vh;

        position: relative;
        overflow: hidden;

        display: flex;
        align-items: center;

        padding:
            150px 24px
            80px;
    }

    .ta-hero::before {
        content: "";

        position: absolute;

        width: 650px;
        height: 650px;

        border-radius: 50%;

        background:
            radial-gradient(
                circle,
                rgba(237,51,68,.11),
                rgba(237,51,68,0)
            );

        top: -220px;
        left: -150px;

        pointer-events: none;
    }

    .ta-hero::after {
        content: "";

        position: absolute;

        width: 500px;
        height: 500px;

        border-radius: 50%;

        background:
            radial-gradient(
                circle,
                rgba(237,51,68,.07),
                rgba(237,51,68,0)
            );

        bottom: -250px;
        right: -180px;

        pointer-events: none;
    }

    .ta-hero-inner {
        width: 100%;
        max-width: 1250px;

        margin: auto;

        display: grid;

        grid-template-columns:
            1.05fr
            .95fr;

        align-items: center;

        gap: 80px;

        position: relative;
        z-index: 2;
    }

    /* HERO TEXT */

    .ta-hero-content {
        animation:
            heroText .9s ease both;
    }

    .ta-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;

        padding: 8px 17px;

        background: #fff0f1;
        color: var(--red);

        border-radius: 50px;

        font-size: 14px;
        font-weight: 800;

        margin-bottom: 22px;
    }

    .ta-badge-dot {
        width: 7px;
        height: 7px;

        border-radius: 50%;

        background: var(--red);

        animation: pulse 1.7s infinite;
    }

    .ta-hero h1 {
        font-size: clamp(45px, 6vw, 78px);

        line-height: 1.13;

        font-weight: 900;

        letter-spacing: -2px;

        margin-bottom: 25px;
    }

    .ta-hero h1 span {
        color: var(--red);
    }

    .ta-hero-description {
        max-width: 590px;

        color: var(--muted);

        font-size: 18px;
        line-height: 2;

        margin-bottom: 32px;
    }

    .ta-hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 13px;
    }

    .ta-primary-button,
    .ta-secondary-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        min-height: 53px;

        padding: 0 28px;

        border-radius: 50px;

        font-weight: 800;

        transition: .3s ease;
    }

    .ta-primary-button {
        color: white;
        background: var(--red);

        box-shadow:
            0 12px 35px rgba(237,51,68,.23);
    }

    .ta-primary-button:hover {
        background: var(--red-dark);
        transform: translateY(-4px);

        box-shadow:
            0 17px 40px rgba(237,51,68,.3);
    }

    .ta-secondary-button {
        border: 1px solid #e6e6e6;
        color: #333;
        background: white;
    }

    .ta-secondary-button:hover {
        border-color: var(--red);
        color: var(--red);
        transform: translateY(-3px);
    }

    /* HERO VISUAL */

    .ta-hero-visual {
        position: relative;

        display: flex;
        justify-content: center;

        animation:
            heroVisual .9s .1s ease both;
    }

    .ta-food-circle {
        width: min(470px, 80vw);
        aspect-ratio: 1;

        border-radius: 50%;

        background:
            linear-gradient(
                145deg,
                #fff4f5,
                #ffffff
            );

        border: 1px solid rgba(237,51,68,.1);

        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;

        box-shadow:
            0 30px 90px rgba(0,0,0,.08);
    }

    .ta-food-circle::before {
        content: "";

        position: absolute;

        inset: 25px;

        border-radius: 50%;

        border: 1px dashed rgba(237,51,68,.2);

        animation: rotate 25s linear infinite;
    }

    .ta-food-symbol {
        width: 210px;
        height: 210px;

        border-radius: 50%;

        background: var(--red);

        color: white;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 100px;

        box-shadow:
            0 25px 60px rgba(237,51,68,.25);

        animation:
            float 4s ease-in-out infinite;
    }

    .ta-floating-card {
        position: absolute;

        background: white;

        padding: 15px 19px;

        border-radius: 17px;

        box-shadow:
            0 15px 40px rgba(0,0,0,.1);

        font-size: 13px;
        font-weight: 800;

        animation: float 4s ease-in-out infinite;
    }

    .ta-floating-card.one {
        top: 18%;
        right: -10px;
    }

    .ta-floating-card.two {
        bottom: 17%;
        left: -15px;

        animation-delay: -1.5s;
    }

    /* =========================================================
       SECTION
    ========================================================= */

    .ta-section {
        padding: 105px 24px;
    }

    .ta-section.gray {
        background: #fafafa;
    }

    .ta-section-inner {
        max-width: 1250px;
        margin: auto;
    }

    .ta-section-head {
        text-align: center;
        max-width: 650px;

        margin:
            0 auto
            55px;
    }

    .ta-section-kicker {
        display: block;

        color: var(--red);

        font-size: 14px;
        font-weight: 900;

        margin-bottom: 8px;
    }

    .ta-section-head h2 {
        font-size: clamp(30px, 5vw, 46px);

        line-height: 1.3;

        font-weight: 900;

        margin-bottom: 12px;
    }

    .ta-section-head p {
        color: var(--muted);
        line-height: 1.9;
    }

    /* =========================================================
       FEATURES
    ========================================================= */

    .ta-features {
        display: grid;

        grid-template-columns:
            repeat(3, 1fr);

        gap: 22px;
    }

    .ta-feature {
        padding: 32px;

        background: white;

        border:
            1px solid
            var(--border);

        border-radius: 25px;

        transition: .3s ease;

        opacity: 0;
        transform: translateY(25px);
    }

    .ta-feature.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .ta-feature:hover {
        transform: translateY(-8px);

        box-shadow:
            var(--shadow);
    }

    .ta-feature-icon {
        width: 57px;
        height: 57px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 17px;

        background: #fff0f1;
        color: var(--red);

        font-size: 25px;

        margin-bottom: 20px;
    }

    .ta-feature h3 {
        font-size: 20px;
        font-weight: 900;
        margin-bottom: 9px;
    }

    .ta-feature p {
        color: var(--muted);
        line-height: 1.9;
        font-size: 14px;
    }

    /* =========================================================
       MENU CARDS
    ========================================================= */

    .ta-menu-grid {
        display: grid;

        grid-template-columns:
            repeat(3, 1fr);

        gap: 22px;
    }

    .ta-menu-card {
        overflow: hidden;

        border-radius: 25px;

        background: white;

        border: 1px solid var(--border);

        transition: .3s ease;

        opacity: 0;
        transform: translateY(25px);
    }

    .ta-menu-card.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .ta-menu-card:hover {
        transform: translateY(-8px);

        box-shadow:
            var(--shadow);
    }

    .ta-menu-image {
        height: 220px;

        display: flex;
        align-items: center;
        justify-content: center;

        background:
            linear-gradient(
                135deg,
                #fff1f2,
                #fafafa
            );

        font-size: 85px;
    }

    .ta-menu-content {
        padding: 23px;
    }

    .ta-menu-content h3 {
        font-size: 20px;
        font-weight: 900;

        margin-bottom: 7px;
    }

    .ta-menu-content p {
        color: var(--muted);

        font-size: 14px;
        line-height: 1.8;
    }

    .ta-menu-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-top: 18px;
    }

    .ta-price {
        color: var(--red);

        font-size: 20px;
        font-weight: 900;
    }

    .ta-order-small {
        width: 40px;
        height: 40px;

        border-radius: 50%;

        background: #fff0f1;
        color: var(--red);

        display: flex;
        align-items: center;
        justify-content: center;

        transition: .2s ease;
    }

    .ta-order-small:hover {
        background: var(--red);
        color: white;
    }

    /* =========================================================
       OFFER
    ========================================================= */

    .ta-offer {
        position: relative;
        overflow: hidden;

        background:
            linear-gradient(
                120deg,
                #ed3344,
                #c92537
            );

        border-radius: 35px;

        padding: 55px;

        color: white;

        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 40px;
    }

    .ta-offer::before {
        content: "";

        position: absolute;

        width: 300px;
        height: 300px;

        border-radius: 50%;

        border: 50px solid rgba(255,255,255,.06);

        left: -100px;
        bottom: -150px;
    }

    .ta-offer h2 {
        font-size: clamp(28px, 4vw, 45px);
        font-weight: 900;

        margin-bottom: 10px;
    }

    .ta-offer p {
        opacity: .85;
        line-height: 1.9;
    }

    .ta-offer-button {
        flex-shrink: 0;

        padding: 15px 27px;

        border-radius: 50px;

        background: white;
        color: var(--red);

        font-weight: 900;

        transition: .25s ease;
    }

    .ta-offer-button:hover {
        transform: scale(1.04);
    }

    /* =========================================================
       ABOUT
    ========================================================= */

    .ta-about {
        display: grid;

        grid-template-columns:
            1fr
            1fr;

        gap: 80px;

        align-items: center;
    }

    .ta-about-visual {
        min-height: 400px;

        border-radius: 35px;

        background:
            linear-gradient(
                145deg,
                #fff0f1,
                #fafafa
            );

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 130px;

        position: relative;
    }

    .ta-about-content h2 {
        font-size: clamp(30px, 5vw, 47px);
        line-height: 1.3;

        font-weight: 900;

        margin-bottom: 20px;
    }

    .ta-about-content h2 span {
        color: var(--red);
    }

    .ta-about-content p {
        color: var(--muted);

        line-height: 2;

        margin-bottom: 20px;
    }

    /* =========================================================
       FOOTER
    ========================================================= */

    .ta-footer {
        background: #141414;
        color: white;

        padding: 65px 24px 30px;
    }

    .ta-footer-inner {
        max-width: 1250px;
        margin: auto;

        display: grid;

        grid-template-columns:
            1.5fr
            1fr
            1fr;

        gap: 60px;
    }

    .ta-footer-logo {
        font-size: 31px;
        color: var(--red);
        font-weight: 900;

        margin-bottom: 15px;
    }

    .ta-footer p {
        color: #999;
        line-height: 1.9;
        font-size: 14px;
    }

    .ta-footer h3 {
        margin-bottom: 18px;
        font-size: 17px;
    }

    .ta-footer-links {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .ta-footer-links a {
        color: #aaa;
        font-size: 14px;

        transition: .2s ease;
    }

    .ta-footer-links a:hover {
        color: var(--red);
        transform: translateX(-3px);
    }

    .ta-footer-bottom {
        max-width: 1250px;

        margin:
            50px auto 0;

        padding-top: 20px;

        border-top:
            1px solid
            rgba(255,255,255,.08);

        text-align: center;

        color: #777;

        font-size: 13px;
    }

    /* =========================================================
       404
    ========================================================= */

    .ta-404 {
        min-height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 120px 20px 60px;

        position: relative;
        overflow: hidden;

        text-align: center;
    }

    .ta-404::before {
        content: "";

        position: absolute;

        width: 550px;
        height: 550px;

        border-radius: 50%;

        background:
            radial-gradient(
                circle,
                rgba(237,51,68,.1),
                transparent 70%
            );

        top: -280px;
        right: -220px;
    }

    .ta-404-content {
        max-width: 750px;
        position: relative;
        z-index: 2;

        animation:
            errorEnter .8s ease both;
    }

    .ta-404-brand {
        display: inline-flex;

        padding: 9px 25px;

        border:
            2px solid
            var(--red);

        border-radius: 50px;

        color: var(--red);

        font-weight: 900;

        margin-bottom: 25px;
    }

    .ta-404-number {
        font-family: Arial, sans-serif;

        font-size: clamp(130px, 24vw, 230px);

        font-weight: 900;

        line-height: .9;

        letter-spacing: -15px;

        color: var(--red);

        margin-left: -15px;

        animation:
            numberFloat 4s ease-in-out infinite;
    }

    .ta-404 h1 {
        font-size: clamp(30px, 6vw, 52px);

        font-weight: 900;

        line-height: 1.35;

        margin:
            25px
            0
            15px;
    }

    .ta-404 p {
        color: var(--muted);

        max-width: 600px;

        margin: auto;

        line-height: 2;

        font-size: 17px;
    }

    .ta-404-button {
        display: inline-flex;

        margin-top: 30px;

        padding: 16px 32px;

        background: var(--red);
        color: white;

        border-radius: 50px;

        font-weight: 900;

        box-shadow:
            0 12px 35px rgba(237,51,68,.22);

        transition: .25s ease;
    }

    .ta-404-button:hover {
        transform: translateY(-4px);
        background: var(--red-dark);
    }

    /* =========================================================
       ANIMATIONS
    ========================================================= */

    @keyframes heroText {
        from {
            opacity: 0;
            transform: translateY(30px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes heroVisual {
        from {
            opacity: 0;
            transform: scale(.88);
        }

        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes float {
        0%,100% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-10px);
        }
    }

    @keyframes numberFloat {
        0%,100% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-8px);
        }
    }

    @keyframes pulse {
        0%,100% {
            box-shadow: 0 0 0 0 rgba(237,51,68,.3);
        }

        50% {
            box-shadow: 0 0 0 8px rgba(237,51,68,0);
        }
    }

    @keyframes rotate {
        from {
            transform: rotate(0);
        }

        to {
            transform: rotate(360deg);
        }
    }

    @keyframes errorEnter {
        from {
            opacity: 0;
            transform: translateY(25px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* =========================================================
       RESPONSIVE
    ========================================================= */

    @media (max-width: 950px) {

        .ta-nav {
            display: none;
        }

        .ta-menu-button {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .ta-header-button {
            display: none;
        }

        .ta-hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 55px;
        }

        .ta-hero-content {
            order: 1;
        }

        .ta-hero-visual {
            order: 0;
        }

        .ta-hero-description {
            margin-left: auto;
            margin-right: auto;
        }

        .ta-hero-actions {
            justify-content: center;
        }

        .ta-features,
        .ta-menu-grid {
            grid-template-columns:
                repeat(2, 1fr);
        }

        .ta-about {
            grid-template-columns: 1fr;
        }

        .ta-footer-inner {
            grid-template-columns:
                1fr
                1fr;
        }
    }

    @media (max-width: 600px) {

        .ta-header {
            height: 70px;
        }

        .ta-header.scrolled {
            height: 65px;
        }

        .ta-header-inner {
            padding: 0 17px;
        }

        .ta-logo {
            font-size: 22px;
        }

        .ta-logo-mark {
            width: 39px;
            height: 39px;
            font-size: 18px;
        }

        .ta-mobile-menu {
            top: 78px;
        }

        .ta-hero {
            padding:
                120px 18px
                65px;
        }

        .ta-hero h1 {
            font-size: 43px;
            letter-spacing: -1px;
        }

        .ta-hero-description {
            font-size: 16px;
        }

        .ta-food-circle {
            width: 310px;
        }

        .ta-food-symbol {
            width: 145px;
            height: 145px;
            font-size: 65px;
        }

        .ta-floating-card {
            font-size: 11px;
            padding: 11px 13px;
        }

        .ta-floating-card.one {
            right: -2px;
        }

        .ta-floating-card.two {
            left: -2px;
        }

        .ta-section {
            padding: 70px 18px;
        }

        .ta-features,
        .ta-menu-grid {
            grid-template-columns: 1fr;
        }

        .ta-offer {
            padding: 35px 25px;
            flex-direction: column;
            align-items: flex-start;
            border-radius: 27px;
        }

        .ta-about-visual {
            min-height: 300px;
            font-size: 95px;
        }

        .ta-footer {
            padding: 50px 20px 25px;
        }

        .ta-footer-inner {
            grid-template-columns: 1fr;
            gap: 35px;
        }

        .ta-404-number {
            font-size: 125px;
            letter-spacing: -9px;
        }

        .ta-404 h1 {
            font-size: 30px;
        }

        .ta-404 p {
            font-size: 15px;
        }
    }

    @media (prefers-reduced-motion: reduce) {

        *,
        *::before,
        *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
        }
    }
    `;


    /* =========================================================
       INJECT CSS
    ========================================================= */

    function injectCSS() {
        const style = document.createElement("style");

        style.id = "taaim-styles";
        style.textContent = CSS;

        document.head.appendChild(style);
    }


    /* =========================================================
       HEADER
    ========================================================= */

    function createHeader() {

        const header = document.createElement("header");

        header.className = "ta-header";

        header.innerHTML = `

            <div class="ta-header-inner">

                <a href="/" class="ta-logo">

                    <span class="ta-logo-mark">
                        🍽
                    </span>

                    <span>
                        ${CONFIG.name}
                    </span>

                </a>

                <nav class="ta-nav">

                    <a href="/">
                        الرئيسية
                    </a>

                    <a href="#menu">
                        القائمة
                    </a>

                    <a href="#offers">
                        العروض
                    </a>

                    <a href="#about">
                        عن طَعِيم
                    </a>

                </nav>

                <a
                    href="#menu"
                    class="ta-header-button"
                >
                    استعرض القائمة
                </a>

                <button
                    class="ta-menu-button"
                    aria-label="فتح القائمة"
                >
                    ☰
                </button>

            </div>

        `;

        document.body.appendChild(header);


        /* MOBILE MENU */

        const mobileMenu =
            document.createElement("div");

        mobileMenu.className =
            "ta-mobile-menu";

        mobileMenu.innerHTML = `

            <a href="/">
                🏠 الرئيسية
            </a>

            <a href="#menu">
                🍽️ القائمة
            </a>

            <a href="#offers">
                🔥 العروض
            </a>

            <a href="#about">
                ❤️ عن طَعِيم
            </a>

        `;

        document.body.appendChild(mobileMenu);


        const menuButton =
            header.querySelector(
                ".ta-menu-button"
            );

        menuButton.addEventListener(
            "click",
            () => {

                mobileMenu.classList.toggle(
                    "open"
                );

                menuButton.textContent =
                    mobileMenu.classList.contains("open")
                        ? "×"
                        : "☰";
            }
        );


        mobileMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        mobileMenu.classList.remove(
                            "open"
                        );

                        menuButton.textContent =
                            "☰";
                    }
                );

            });


        window.addEventListener(
            "scroll",
            () => {

                header.classList.toggle(
                    "scrolled",
                    window.scrollY > 20
                );

            },
            { passive: true }
        );
    }


    /* =========================================================
       HOME PAGE
    ========================================================= */

    function createHome() {

        document.body.innerHTML = "";

        createHeader();


        const main =
            document.createElement("main");

        main.innerHTML = `

        <!-- HERO -->

        <section class="ta-hero">

            <div class="ta-hero-inner">

                <div class="ta-hero-content">

                    <div class="ta-badge">
                        <span class="ta-badge-dot"></span>
                        نكهة تستحق التجربة
                    </div>

                    <h1>
                        أهلاً بك في
                        <span>طَعِيم</span>
                    </h1>

                    <p class="ta-hero-description">
                        هنا تبدأ الحكاية من أول لقمة.
                        أطباق شهية، نكهات مميزة،
                        وتجربة صُممت لتخلي كل زيارة
                        تستحق التكرار.
                    </p>

                    <div class="ta-hero-actions">

                        <a
                            href="#menu"
                            class="ta-primary-button"
                        >
                            🍽️ استعرض القائمة
                        </a>

                        <a
                            href="#about"
                            class="ta-secondary-button"
                        >
                            اكتشف طَعِيم
                        </a>

                    </div>

                </div>


                <div class="ta-hero-visual">

                    <div class="ta-food-circle">

                        <div class="ta-food-symbol">
                            🍴
                        </div>

                    </div>

                    <div class="ta-floating-card one">
                        ⭐ نكهة مميزة
                    </div>

                    <div class="ta-floating-card two">
                        ❤️ صُنعت بحب
                    </div>

                </div>

            </div>

        </section>


        <!-- FEATURES -->

        <section class="ta-section">

            <div class="ta-section-inner">

                <div class="ta-section-head">

                    <span class="ta-section-kicker">
                        لماذا طَعِيم؟
                    </span>

                    <h2>
                        أكثر من مجرد وجبة
                    </h2>

                    <p>
                        نهتم بالتفاصيل الصغيرة
                        التي تجعل تجربة الطعام
                        مختلفة.
                    </p>

                </div>


                <div class="ta-features">

                    <div class="ta-feature">

                        <div class="ta-feature-icon">
                            🍽️
                        </div>

                        <h3>
                            مذاق مميز
                        </h3>

                        <p>
                            نختار المكونات بعناية
                            لنقدم لك مذاقاً تتذكره.
                        </p>

                    </div>


                    <div class="ta-feature">

                        <div class="ta-feature-icon">
                            ⚡
                        </div>

                        <h3>
                            خدمة سريعة
                        </h3>

                        <p>
                            لأننا نعرف أن وقتك مهم،
                            نحرص على سرعة الخدمة
                            وجودتها.
                        </p>

                    </div>


                    <div class="ta-feature">

                        <div class="ta-feature-icon">
                            ❤️
                        </div>

                        <h3>
                            صُنعت بحب
                        </h3>

                        <p>
                            كل طبق نقدمه يحمل
                            اهتماماً بالتفاصيل
                            وشغفاً بالطعام.
                        </p>

                    </div>

                </div>

            </div>

        </section>


        <!-- MENU -->

        <section
            class="ta-section gray"
            id="menu"
        >

            <div class="ta-section-inner">

                <div class="ta-section-head">

                    <span class="ta-section-kicker">
                        قائمتنا
                    </span>

                    <h2>
                        اختر ما تشتهيه
                    </h2>

                    <p>
                        مجموعة من الأطباق
                        المختارة بعناية.
                    </p>

                </div>


                <div class="ta-menu-grid">

                    ${menuCard(
                        "🍔",
                        "برجر طَعِيم",
                        "برجر شهي بطعم غني ومكونات مختارة.",
                        "2,500"
                    )}

                    ${menuCard(
                        "🍕",
                        "بيتزا خاصة",
                        "عجينة طازجة ونكهات تجمعها في لقمة واحدة.",
                        "3,000"
                    )}

                    ${menuCard(
                        "🍗",
                        "وجبة الدجاج",
                        "وجبة شهية ومشبعة لمحبي الدجاج.",
                        "3,500"
                    )}

                    ${menuCard(
                        "🍝",
                        "باستا",
                        "طبق كريمي غني بالنكهة.",
                        "2,800"
                    )}

                    ${menuCard(
                        "🥗",
                        "سلطة طَعِيم",
                        "اختيار خفيف وطازج.",
                        "1,800"
                    )}

                    ${menuCard(
                        "🍰",
                        "حلى اليوم",
                        "الحلو دائماً له مكان.",
                        "1,500"
                    )}

                </div>

            </div>

        </section>


        <!-- OFFER -->

        <section
            class="ta-section"
            id="offers"
        >

            <div class="ta-section-inner">

                <div class="ta-offer">

                    <div>

                        <h2>
                            جوعان؟ 😋
                        </h2>

                        <p>
                            اكتشف قائمتنا واختر
                            وجبتك المفضلة اليوم.
                        </p>

                    </div>

                    <a
                        href="#menu"
                        class="ta-offer-button"
                    >
                        اطلب الآن
                    </a>

                </div>

            </div>

        </section>


        <!-- ABOUT -->

        <section
            class="ta-section gray"
            id="about"
        >

            <div class="ta-section-inner">

                <div class="ta-about">

                    <div class="ta-about-visual">
                        🍴
                    </div>

                    <div class="ta-about-content">

                        <h2>
                            طَعِيم
                            <span>بطريقة مختلفة.</span>
                        </h2>

                        <p>
                            في طَعِيم نؤمن أن الطعام
                            ليس مجرد وجبة، بل تجربة.
                        </p>

                        <p>
                            لذلك نهتم بالمذاق،
                            الجودة، وطريقة تقديم
                            كل طبق حتى تكون زيارتك
                            تجربة تستحق العودة إليها.
                        </p>

                        <a
                            href="#menu"
                            class="ta-primary-button"
                        >
                            اكتشف قائمتنا
                        </a>

                    </div>

                </div>

            </div>

        </section>

        `;

        document.body.appendChild(main);

        createFooter();

        activateAnimations();
    }


    /* =========================================================
       MENU CARD
    ========================================================= */

    function menuCard(
        icon,
        title,
        description,
        price
    ) {

        return `

        <article class="ta-menu-card">

            <div class="ta-menu-image">
                ${icon}
            </div>

            <div class="ta-menu-content">

                <h3>
                    ${title}
                </h3>

                <p>
                    ${description}
                </p>

                <div class="ta-menu-bottom">

                    <span class="ta-price">
                        ${price}
                    </span>

                    <button
                        class="ta-order-small"
                        aria-label="إضافة"
                    >
                        +
                    </button>

                </div>

            </div>

        </article>

        `;
    }


    /* =========================================================
       FOOTER
    ========================================================= */

    function createFooter() {

        const footer =
            document.createElement("footer");

        footer.className =
            "ta-footer";

        footer.innerHTML = `

            <div class="ta-footer-inner">

                <div>

                    <div class="ta-footer-logo">
                        ${CONFIG.name}
                    </div>

                    <p>
                        نكهة تستحق التجربة،
                        وتجربة تستحق العودة.
                    </p>

                </div>


                <div>

                    <h3>
                        روابط سريعة
                    </h3>

                    <div class="ta-footer-links">

                        <a href="/">
                            الرئيسية
                        </a>

                        <a href="#menu">
                            القائمة
                        </a>

                        <a href="#offers">
                            العروض
                        </a>

                        <a href="#about">
                            عن طَعِيم
                        </a>

                    </div>

                </div>


                <div>

                    <h3>
                        تواصل معنا
                    </h3>

                    <div class="ta-footer-links">

                        <a href="#">
                            📞 تواصل معنا
                        </a>

                        <a href="#">
                            📍 موقعنا
                        </a>

                        <a href="#">
                            📱 حساباتنا
                        </a>

                    </div>

                </div>

            </div>


            <div class="ta-footer-bottom">

                © ${new Date().getFullYear()}
                ${CONFIG.name}
                — جميع الحقوق محفوظة

            </div>

        `;

        document.body.appendChild(footer);
    }


    /* =========================================================
       404 PAGE
    ========================================================= */

    function create404() {

        document.body.innerHTML = "";

        createHeader();


        const page =
            document.createElement("main");

        page.className =
            "ta-404";

        page.innerHTML = `

            <div class="ta-404-content">

                <div class="ta-404-brand">
                    ${CONFIG.name}
                </div>

                <div class="ta-404-number">
                    404
                </div>

                <h1>
                    هذه الصفحة قيد التحضير! 🍽️
                </h1>

                <p>
                    يبدو أنك وصلت إلى صفحة
                    غير موجودة، أو أن طهاة
                    ${CONFIG.name}
                    لا يزالون يعملون على
                    إعداد محتواها.
                </p>

                <a
                    href="/"
                    class="ta-404-button"
                >
                    ← العودة للقائمة الرئيسية
                </a>

            </div>

        `;

        document.body.appendChild(page);

        createFooter();
    }


    /* =========================================================
       SCROLL ANIMATIONS
    ========================================================= */

    function activateAnimations() {

        const elements =
            document.querySelectorAll(
                ".ta-feature, .ta-menu-card"
            );

        if (!("IntersectionObserver" in window)) {

            elements.forEach(el => {
                el.classList.add("visible");
            });

            return;
        }


        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: .12
                }
            );


        elements.forEach(
            element =>
                observer.observe(element)
        );
    }


    /* =========================================================
       INITIALIZE
    ========================================================= */

    function init() {

        injectCSS();

        const path =
            window.location.pathname
                .replace(/\/+$/, "");

        /*
         * أي رابط غير "/" يعتبر 404.
         */

        if (
            path === "" ||
            path === "/"
        ) {

            createHome();

        } else {

            create404();

        }
    }


    /* =========================================================
       START
    ========================================================= */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            init
        );

    } else {

        init();

    }

})();
