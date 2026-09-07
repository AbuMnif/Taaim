import "./not-found.css";

const CONFIG = {
    name: "طَعِيم",
};

export default function NotFound() {
    return (
        <main className="ta-404">
            <div className="ta-404-blob one"></div>
            <div className="ta-404-blob two"></div>

            <div className="ta-404-image-wrap">
                <img
                    src="/not-found.jbg"
                    alt="طاهي طَعِيم حزين لأن الصفحة غير موجودة - 404"
                    className="ta-404-image"
                />
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
    );
}
