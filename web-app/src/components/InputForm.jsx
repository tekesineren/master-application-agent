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
    background: [],
    researchExperience: '',
    workExperience: '',
    publications: '',
    recommendationLetters: '0'
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
    
    if (!formData.gpa || !formData.languageScore || formData.background.length === 0) {
      alert('Lütfen tüm zorunlu alanları doldurun')
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
          <h2>🔬 Araştırma Deneyimi</h2>
          <div className="form-group">
            <label htmlFor="researchExperience">Araştırma Deneyimi (Yıl)</label>
            <input
              type="number"
              id="researchExperience"
              name="researchExperience"
              value={formData.researchExperience}
              onChange={handleChange}
              min="0"
              max="10"
              step="0.5"
              placeholder="0"
            />
            <small>Örn: 1.5 yıl araştırma asistanlığı</small>
          </div>
        </div>

        <div className="form-section">
          <h2>💼 İş Deneyimi</h2>
          <div className="form-group">
            <label htmlFor="workExperience">İş Deneyimi (Yıl)</label>
            <input
              type="number"
              id="workExperience"
              name="workExperience"
              value={formData.workExperience}
              onChange={handleChange}
              min="0"
              max="20"
              step="0.5"
              placeholder="0"
            />
            <small>İlgili alanda çalışma deneyimi</small>
          </div>
        </div>

        <div className="form-section">
          <h2>📄 Yayınlar</h2>
          <div className="form-group">
            <label htmlFor="publications">Yayın Sayısı</label>
            <input
              type="number"
              id="publications"
              name="publications"
              value={formData.publications}
              onChange={handleChange}
              min="0"
              max="50"
              placeholder="0"
            />
            <small>Hakemli dergilerde yayınlanmış makale sayısı</small>
          </div>
        </div>

        <div className="form-section">
          <h2>📝 Referans Mektupları</h2>
          <div className="form-group">
            <label htmlFor="recommendationLetters">Referans Mektubu Sayısı</label>
            <select
              id="recommendationLetters"
              name="recommendationLetters"
              value={formData.recommendationLetters}
              onChange={handleChange}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
            <small>Hazır olan referans mektubu sayısı</small>
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

