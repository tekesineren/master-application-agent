import { useState } from 'react'
import './InputForm.css'

const backgroundOptions = [
  'engineering',
  'robotics',
  'control systems',
  'mechanical engineering',
  'computer science',
  'electrical engineering',
  'mathematics',
  'physics'
]

function InputForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    gpa: '',
    languageScore: '',
    motivationLetter: '',
    background: []
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleBackgroundToggle = (option) => {
    setFormData(prev => ({
      ...prev,
      background: prev.background.includes(option)
        ? prev.background.filter(b => b !== option)
        : [...prev.background, option]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.gpa || !formData.languageScore || !formData.motivationLetter || formData.background.length === 0) {
      alert('Lütfen tüm alanları doldurun')
      return
    }

    const gpa = parseFloat(formData.gpa)
    if (isNaN(gpa) || gpa < 0 || gpa > 4.0) {
      alert('GPA 0-4.0 arasında olmalıdır')
      return
    }

    onSubmit(formData)
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="input-form">
        <div className="form-section">
          <h2>📊 Akademik Bilgiler</h2>
          
          <div className="form-group">
            <label htmlFor="gpa">GPA (0-4.0)</label>
            <input
              type="number"
              id="gpa"
              name="gpa"
              value={formData.gpa}
              onChange={handleChange}
              step="0.01"
              min="0"
              max="4.0"
              placeholder="3.5"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="languageScore">Dil Skoru (TOEFL/IELTS)</label>
            <input
              type="number"
              id="languageScore"
              name="languageScore"
              value={formData.languageScore}
              onChange={handleChange}
              min="0"
              placeholder="110"
              required
            />
          </div>
        </div>

        <div className="form-section">
          <h2>🎯 Background</h2>
          <div className="background-grid">
            {backgroundOptions.map(option => (
              <label key={option} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.background.includes(option)}
                  onChange={() => handleBackgroundToggle(option)}
                />
                <span>{option.charAt(0).toUpperCase() + option.slice(1)}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <h2>✍️ Motivation Letter</h2>
          <textarea
            name="motivationLetter"
            value={formData.motivationLetter}
            onChange={handleChange}
            placeholder="Motivation letter'ınızı buraya yazın... (En az 200 kelime önerilir)"
            rows="10"
            required
          />
          <div className="word-count">
            Kelime sayısı: {formData.motivationLetter.split(/\s+/).filter(w => w.length > 0).length}
          </div>
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={loading}
        >
          {loading ? '⏳ Analiz ediliyor...' : '🚀 Eşleştirmeyi Başlat'}
        </button>
      </form>
    </div>
  )
}

export default InputForm

