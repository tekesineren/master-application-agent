import './FeaturesSection.css'

const features = [
  {
    icon: '🎯',
    title: 'Akıllı Eşleştirme',
    description: 'GPA, dil skoru, background ve motivation letter\'ınıza göre en uygun programları bulun'
  },
  {
    icon: '📊',
    title: 'Detaylı Analiz',
    description: 'Her okul için eşleşme skorunu ve başvuru şansınızı görün'
  },
  {
    icon: '⚡',
    title: 'Hızlı Sonuç',
    description: 'Saniyeler içinde yüzlerce okul arasından size en uygun olanları bulun'
  },
  {
    icon: '💡',
    title: 'Ekstra Öneriler',
    description: 'Şansınız düşük olsa bile deneyebileceğiniz okulları keşfedin'
  },
  {
    icon: '🔒',
    title: 'Güvenli & Ücretsiz',
    description: 'Verileriniz güvende, analiz tamamen ücretsiz'
  },
  {
    icon: '📱',
    title: 'Her Yerden Erişim',
    description: 'Mobil, tablet ve bilgisayardan kullanın'
  }
]

function FeaturesSection() {
  return (
    <div className="features-section">
      <div className="features-container">
        <h2 className="features-title">Neden Master Application Agent?</h2>
        <p className="features-subtitle">
          Binlerce öğrenci master programı bulmak için bize güveniyor
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection

