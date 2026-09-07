import './not-found.css';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <span className="not-found-badge">مطعم طعيم</span>
      <h1 className="not-found-code">404</h1>
      <h2 className="not-found-title">هذه الصفحة قيد التحضير! 🍽️</h2>
      <p className="not-found-desc">
        يبدو أنك وصلت لصفحة غير موجودة أو أن طهاة "طعيم" لا يزالون يعملون على إعداد محتواها حالياً.
      </p>
      <a href="/" className="not-found-btn">
        العودة للقائمة الرئيسية
      </a>
    </div>
  );
}
