import './ResultsView.css'

function ResultsView({ results, onReset }) {
  if (!results || !results.results) {
    return null
  }

  const { high_match, medium_match, low_match, extra_options } = results.results

  const Section = ({ title, subtitle, universities, color, emoji }) => {
    if (!universities || universities.length === 0) return null

    return (
      <div className="results-section">
        <div className="section-header" style={{ borderLeftColor: color }}>
          <h2>
            <span className="emoji">{emoji}</span> {title}
          </h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
        
        <div className="universities-grid">
          {universities.map(uni => (
            <div key={uni.id} className="university-card">
              <div className="card-header">
                <h3>{uni.name}</h3>
                <div className="match-score" style={{ backgroundColor: `${color}20`, color: color }}>
                  {Math.round(uni.match_score)}%
                </div>
              </div>
              
              <p className="program-name">{uni.program}</p>
              <p className="country">{uni.country}</p>
              
              <div className="requirements">
                <div className="requirement-item">
                  <span className="requirement-label">Min GPA:</span>
                  <span className="requirement-value">{uni.min_gpa}</span>
                </div>
                <div className="requirement-item">
                  <span className="requirement-label">Min Dil Skoru:</span>
                  <span className="requirement-value">{uni.min_language_score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="results-container">
      <div className="results-header">
        <button onClick={onReset} className="back-button-results">
          ← Geri
        </button>
        <h1>🎯 Eşleşme Sonuçları</h1>
        <button onClick={onReset} className="reset-button">
          🔄 Yeni Analiz
        </button>
      </div>

      <Section
        title="Yüksek Eşleşme"
        subtitle="Bu okullara başvurmanızı öneriyoruz"
        universities={high_match}
        color="#10b981"
        emoji="🎯"
      />

      <Section
        title="İyi Eşleşme"
        subtitle="Başvurmayı düşünebilirsiniz"
        universities={medium_match}
        color="#3b82f6"
        emoji="✅"
      />

      <Section
        title="Düşük Eşleşme"
        subtitle="Başvurabilirsiniz ama şansınız düşük"
        universities={low_match}
        color="#f59e0b"
        emoji="⚠️"
      />

      <Section
        title="Ekstra Seçenekler"
        subtitle="Hiçbir şey kaybetmezsiniz, deneyebilirsiniz"
        universities={extra_options}
        color="#6b7280"
        emoji="💡"
      />
    </div>
  )
}

export default ResultsView

