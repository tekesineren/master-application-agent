import './CoreMetrics.css'

function CoreMetrics({ gpa, languageScore, backgroundMatch }) {
  // 3 parametrenin ortalaması
  const average = ((gpa || 0) + (languageScore || 0) + (backgroundMatch || 0)) / 3

  return (
    <div className="core-metrics">
      <div className="metrics-header">
        <h2>📊 Temel Parametreler</h2>
        <div className="average-score">
          <span className="average-label">Ortalama</span>
          <span className="average-value">{average.toFixed(1)}</span>
        </div>
      </div>
      
      <div className="metrics-grid">
        <div className="metric-card gpa">
          <div className="metric-icon">🎓</div>
          <div className="metric-content">
            <h3>GPA</h3>
            <div className="metric-value">{gpa ? gpa.toFixed(2) : 'N/A'}</div>
            <div className="metric-bar">
              <div 
                className="metric-fill" 
                style={{ width: `${((gpa || 0) / 4.0) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="metric-card language">
          <div className="metric-icon">🌐</div>
          <div className="metric-content">
            <h3>Dil Skoru</h3>
            <div className="metric-value">{languageScore ? languageScore.toFixed(1) : 'N/A'}</div>
            <div className="metric-bar">
              <div 
                className="metric-fill" 
                style={{ width: `${((languageScore || 0) / 100) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="metric-card background">
          <div className="metric-icon">🎯</div>
          <div className="metric-content">
            <h3>Background Match</h3>
            <div className="metric-value">{backgroundMatch ? backgroundMatch.toFixed(1) : 'N/A'}</div>
            <div className="metric-bar">
              <div 
                className="metric-fill" 
                style={{ width: `${((backgroundMatch || 0) / 100) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoreMetrics

