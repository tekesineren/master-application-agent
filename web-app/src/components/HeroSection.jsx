import './HeroSection.css'

function HeroSection({ onGetStarted }) {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Master Programınız İçin
          <span className="gradient-text"> En İyi Eşleşmeyi</span> Bulun
        </h1>
        <p className="hero-subtitle">
          AI destekli analiz ile GPA, dil skoru, motivation letter ve background'ınıza göre 
          size en uygun master programlarını keşfedin
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Okul Veritabanı</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">%95</div>
            <div className="stat-label">Doğruluk Oranı</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Başarılı Eşleşme</div>
          </div>
        </div>
        <button className="cta-button" onClick={onGetStarted}>
          Ücretsiz Analiz Başlat
          <span className="arrow">→</span>
        </button>
      </div>
      <div className="hero-visual">
        <div className="floating-card card-1">
          <div className="card-icon">🎓</div>
          <div className="card-text">ETH Zurich</div>
          <div className="card-score">95%</div>
        </div>
        <div className="floating-card card-2">
          <div className="card-icon">🏛️</div>
          <div className="card-text">MIT</div>
          <div className="card-score">88%</div>
        </div>
        <div className="floating-card card-3">
          <div className="card-icon">🌍</div>
          <div className="card-text">Stanford</div>
          <div className="card-score">92%</div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

