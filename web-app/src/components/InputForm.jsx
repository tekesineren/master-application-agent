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

const countries = [
  { value: 'turkey', label: 'Türkiye', examType: 'osym' },
  { value: 'usa', label: 'USA', examType: 'sat' },
  { value: 'uk', label: 'UK', examType: 'a-levels' },
  { value: 'germany', label: 'Germany', examType: 'abitur' },
  { value: 'china', label: 'China', examType: 'gaokao' },
  { value: 'france', label: 'France', examType: 'baccalaureat' },
  { value: 'other', label: 'Other', examType: 'other' }
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
    otherConfirmed: false,
    country: 'turkey',
    entranceExamType: 'osym',
    entranceExamScore: '',
    entranceExamRank: '',
    undergraduateUniversityRanking: '',
    greScore: '',
    gmatScore: '',
    projectExperience: '',
    competitionAchievements: '',
    hasMastersDegree: false,
    mastersUniversityRanking: ''
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
            <label htmlFor="country">Ülke</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={(e) => {
                const selectedCountry = countries.find(c => c.value === e.target.value)
                setFormData(prev => ({
                  ...prev,
                  country: e.target.value,
                  entranceExamType: selectedCountry?.examType || 'other'
                }))
              }}
            >
              {countries.map(country => (
                <option key={country.value} value={country.value}>{country.label}</option>
              ))}
            </select>
            <small>Lisans eğitimi aldığınız ülke</small>
          </div>

          <div className="form-group">
            <label htmlFor="gpa">GPA / Not Ortalaması (0-4.0)</label>
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
            <small>4.00 üzerinden lisans mezuniyet not ortalaması</small>
          </div>

          <div className="form-group">
            <label htmlFor="entranceExamType">Giriş Sınavı Türü</label>
            <select
              id="entranceExamType"
              name="entranceExamType"
              value={formData.entranceExamType}
              onChange={handleChange}
            >
              <option value="osym">ÖSYM (Türkiye)</option>
              <option value="sat">SAT (USA)</option>
              <option value="gre">GRE</option>
              <option value="gmat">GMAT</option>
              <option value="a-levels">A-Levels (UK)</option>
              <option value="abitur">Abitur (Germany)</option>
              <option value="gaokao">Gaokao (China)</option>
              <option value="baccalaureat">Baccalauréat (France)</option>
              <option value="other">Diğer / Yok</option>
            </select>
          </div>

          {formData.entranceExamType === 'osym' && (
            <div className="form-group">
              <label htmlFor="entranceExamRank">ÖSYM Sıralaması</label>
              <input
                type="number"
                id="entranceExamRank"
                name="entranceExamRank"
                value={formData.entranceExamRank}
                onChange={handleChange}
                min="1"
                placeholder="15000"
              />
              <small>Örn: 15000 (sıralama)</small>
            </div>
          )}

          {(formData.entranceExamType === 'sat' || formData.entranceExamType === 'gre' || formData.entranceExamType === 'gmat') && (
            <div className="form-group">
              <label htmlFor="entranceExamScore">
                {formData.entranceExamType === 'sat' ? 'SAT Skoru' : 
                 formData.entranceExamType === 'gre' ? 'GRE Skoru' : 'GMAT Skoru'}
              </label>
              <input
                type="number"
                id="entranceExamScore"
                name="entranceExamScore"
                value={formData.entranceExamScore}
                onChange={handleChange}
                min="0"
                placeholder={formData.entranceExamType === 'sat' ? '1500' : 
                             formData.entranceExamType === 'gre' ? '320' : '700'}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="undergraduateUniversityRanking">Lisans Üniversitesi Sıralaması</label>
            <select
              id="undergraduateUniversityRanking"
              name="undergraduateUniversityRanking"
              value={formData.undergraduateUniversityRanking}
              onChange={handleChange}
            >
              <option value="">Seçiniz</option>
              <option value="top100">QS/THE/RUR - İlk 100</option>
              <option value="top500">QS/THE/RUR - İlk 500</option>
              <option value="top1000">QS/THE/RUR - İlk 1000</option>
              <option value="other">Diğer / Bilinmiyor</option>
            </select>
            <small>QS, THE veya RUR sıralamalarından herhangi birinde</small>
          </div>

          <div className="form-group">
            <label htmlFor="languageScore">Yabancı Dil Skoru</label>
            <select
              id="languageScore"
              name="languageScore"
              value={formData.languageScore}
              onChange={handleChange}
              required
            >
              <option value="">Seçiniz</option>
              <option value="100">TOEFL iBT ≥ 100 / IELTS ≥ 7.0</option>
              <option value="90">TOEFL iBT ≥ 90 / IELTS ≥ 6.5</option>
              <option value="84">TOEFL iBT ≥ 84 / IELTS ≥ 6.0</option>
              <option value="70">TOEFL iBT ≥ 70 / IELTS ≥ 5.5</option>
              <option value="0">Yok / Düşük</option>
            </select>
            <small>TOEFL, IELTS veya eşdeğer sınav skoru</small>
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

        <div className="form-section">
          <h2>🎓 Ek Akademik Bilgiler</h2>
          
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.hasMastersDegree}
                onChange={(e) => setFormData(prev => ({ ...prev, hasMastersDegree: e.target.checked }))}
              />
              <span style={{ marginLeft: '8px' }}>Yüksek Lisans Derecesi Var</span>
            </label>
          </div>

          {formData.hasMastersDegree && (
            <div className="form-group">
              <label htmlFor="mastersUniversityRanking">Yüksek Lisans Üniversitesi Sıralaması</label>
              <select
                id="mastersUniversityRanking"
                name="mastersUniversityRanking"
                value={formData.mastersUniversityRanking}
                onChange={handleChange}
              >
                <option value="">Seçiniz</option>
                <option value="top100">QS/THE/RUR - İlk 100</option>
                <option value="top500">QS/THE/RUR - İlk 500</option>
                <option value="top1000">QS/THE/RUR - İlk 1000</option>
                <option value="other">Diğer</option>
              </select>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="greScore">GRE Skoru (Opsiyonel)</label>
            <input
              type="number"
              id="greScore"
              name="greScore"
              value={formData.greScore}
              onChange={handleChange}
              min="260"
              max="340"
              placeholder="320"
            />
            <small>GRE General Test skoru (260-340 arası)</small>
          </div>

          <div className="form-group">
            <label htmlFor="gmatScore">GMAT Skoru (Opsiyonel)</label>
            <input
              type="number"
              id="gmatScore"
              name="gmatScore"
              value={formData.gmatScore}
              onChange={handleChange}
              min="200"
              max="800"
              placeholder="700"
            />
            <small>GMAT skoru (200-800 arası)</small>
          </div>
        </div>

        <div className="form-section">
          <h2>🏆 Proje ve Başarılar</h2>
          
          <div className="form-group">
            <label htmlFor="projectExperience">Proje Deneyimi</label>
            <select
              id="projectExperience"
              name="projectExperience"
              value={formData.projectExperience}
              onChange={handleChange}
            >
              <option value="none">Yok</option>
              <option value="national">Ulusal Proje (TÜBİTAK, vb.)</option>
              <option value="eu">AB Projesi</option>
              <option value="international">Uluslararası Proje</option>
              <option value="multiple">Birden Fazla Proje</option>
            </select>
            <small>Araştırmacı veya bursiyer olarak görev aldığınız projeler</small>
          </div>

          <div className="form-group">
            <label htmlFor="competitionAchievements">Yarışma Başarıları</label>
            <select
              id="competitionAchievements"
              name="competitionAchievements"
              value={formData.competitionAchievements}
              onChange={handleChange}
            >
              <option value="none">Yok</option>
              <option value="bronze">3. (Bronz)</option>
              <option value="silver">2. (Gümüş)</option>
              <option value="gold">1. (Altın)</option>
              <option value="multiple">Birden Fazla</option>
            </select>
            <small>TEKNOFEST, hackathon, vb. yarışmalarda derece</small>
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

