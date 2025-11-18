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
  'physics',
  'data science',
  'artificial intelligence',
  'machine learning',
  'software engineering',
  'biomedical engineering',
  'chemical engineering',
  'civil engineering',
  'aerospace engineering',
  'industrial engineering',
  'materials science',
  'statistics',
  'applied mathematics',
  'computational science',
  'information technology',
  'cybersecurity',
  'bioengineering',
  'environmental engineering',
  'systems engineering',
  'mechatronics',
  'automation',
  'signal processing',
  'optimization',
  'control theory',
  'neural networks',
  'computer vision',
  'natural language processing',
  'quantum computing',
  'biotechnology',
  'nanotechnology',
  'renewable energy',
  'sustainable engineering',
  'project management',
  'business administration',
  'economics',
  'finance',
  'marketing',
  'management',
  'entrepreneurship',
  'other'
]

// Whitelist for "other" field - approved academic/professional fields
const approvedOtherFields = [
  'architecture', 'urban planning', 'design', 'art', 'music', 'theater',
  'literature', 'linguistics', 'philosophy', 'psychology', 'sociology',
  'political science', 'international relations', 'law', 'medicine',
  'pharmacy', 'nursing', 'public health', 'education', 'journalism',
  'communication', 'media studies', 'anthropology', 'history', 'geography',
  'geology', 'meteorology', 'oceanography', 'astronomy', 'chemistry',
  'biology', 'biochemistry', 'molecular biology', 'genetics', 'ecology',
  'agriculture', 'forestry', 'veterinary science', 'food science',
  'nutrition', 'sports science', 'kinesiology', 'rehabilitation',
  'social work', 'counseling', 'theology', 'religious studies'
]

function InputForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    gpa: '',
    languageScore: '',
    background: [],
    researchExperience: '',
    workExperience: '',
    publications: '',
    recommendationLetters: '0',
    otherBackground: '',
    otherConfirmed: false
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleBackgroundToggle = (option) => {
    if (option === 'other') {
      // "Other" seçildiğinde sadece toggle yap, input alanı açılacak
      setFormData(prev => ({
        ...prev,
        background: prev.background.includes('other')
          ? prev.background.filter(b => b !== 'other')
          : [...prev.background, 'other'],
        otherConfirmed: false,
        otherBackground: ''
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        background: prev.background.includes(option)
          ? prev.background.filter(b => b !== option)
          : [...prev.background, option]
      }))
    }
  }

  const handleOtherInputChange = (e) => {
    const value = e.target.value
    setFormData(prev => ({
      ...prev,
      otherBackground: value, // Original case'i koru
      otherConfirmed: false // Input değiştiğinde confirmation'ı sıfırla
    }))
  }

  const handleOtherConfirm = () => {
    const value = formData.otherBackground.toLowerCase().trim()
    
    // Minimum uzunluk kontrolü
    if (value.length < 3) {
      alert('Lütfen en az 3 karakter girin')
      return
    }
    
    // Uygunsuz kelimeler kontrolü
    const inappropriateWords = ['test', 'deneme', 'asdf', 'qwerty', '123', 'abc', 'xxx', 'lol', 'haha', 'spam']
    if (inappropriateWords.some(word => value.includes(word))) {
      alert('Lütfen geçerli bir akademik veya profesyonel alan girin')
      return
    }
    
    // Whitelist kontrolü
    const isApproved = approvedOtherFields.some(field => {
      const fieldLower = field.toLowerCase()
      return fieldLower.includes(value) || value.includes(fieldLower) || 
        value.split(' ').some(word => word.length > 2 && fieldLower.includes(word.substring(0, 3)))
    })
    
    if (!isApproved && value.length > 0) {
      // Whitelist'te yoksa kullanıcıya onay sor
      const confirmMessage = `"${formData.otherBackground}" whitelist'te yok. Yine de eklemek istiyor musunuz?`
      if (!window.confirm(confirmMessage)) {
        return
      }
    }
    
    setFormData(prev => ({
      ...prev,
      otherConfirmed: true,
      otherBackground: formData.otherBackground // Original case'i koru
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // "Other" seçildiyse ama confirm edilmediyse uyar
    if (formData.background.includes('other') && !formData.otherConfirmed) {
      alert('Lütfen "Other" alanını doldurup onaylayın (✓ butonuna basın)')
      return
    }
    
    if (!formData.gpa || !formData.languageScore || formData.background.length === 0) {
      alert('Lütfen tüm zorunlu alanları doldurun')
      return
    }

    const gpa = parseFloat(formData.gpa)
    if (isNaN(gpa) || gpa < 0 || gpa > 4.0) {
      alert('GPA 0-4.0 arasında olmalıdır')
      return
    }

    // Final background array'i oluştur
    const finalBackground = formData.background
      .filter(b => b !== 'other' || formData.otherConfirmed)
      .map(b => b === 'other' ? formData.otherBackground : b)

    onSubmit({
      ...formData,
      background: finalBackground
    })
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
            {backgroundOptions.filter(opt => opt !== 'other').map(option => (
              <label key={option} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.background.includes(option)}
                  onChange={() => handleBackgroundToggle(option)}
                />
                <span>{option.charAt(0).toUpperCase() + option.slice(1).replace(/\b\w/g, l => l.toUpperCase())}</span>
              </label>
            ))}
          </div>
          
          {/* Other option with input */}
          <div className="other-background-container">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.background.includes('other')}
                onChange={() => handleBackgroundToggle('other')}
              />
              <span>Other</span>
            </label>
            
            {formData.background.includes('other') && (
              <div className="other-input-wrapper">
                <input
                  type="text"
                  value={formData.otherBackground}
                  onChange={handleOtherInputChange}
                  placeholder="Enter your field (e.g., architecture, psychology)"
                  className="other-input"
                  disabled={formData.otherConfirmed}
                />
                <button
                  type="button"
                  onClick={handleOtherConfirm}
                  className={`confirm-button ${formData.otherConfirmed ? 'confirmed' : ''}`}
                  disabled={!formData.otherBackground.trim() || formData.otherConfirmed}
                >
                  {formData.otherConfirmed ? '✓' : '✓'}
                </button>
              </div>
            )}
            
            {formData.background.includes('other') && formData.otherConfirmed && (
              <div className="other-confirmed">
                ✓ Added: <strong>{formData.otherBackground}</strong>
              </div>
            )}
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

