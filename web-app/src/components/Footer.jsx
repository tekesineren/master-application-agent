import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Master Application Agent</h3>
          <p>AI destekli master programı eşleştirme platformu</p>
        </div>
        <div className="footer-section">
          <h4>Hızlı Linkler</h4>
          <ul>
            <li><a href="#features">Özellikler</a></li>
            <li><a href="#how-it-works">Nasıl Çalışır</a></li>
            <li><a href="/privacy-policy.html">Gizlilik Politikası</a></li>
            <li><a href="/terms-of-service.html">Kullanım Şartları</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>İletişim</h4>
          <p>info@masterapplicationagent.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Master Application Agent. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  )
}

export default Footer

