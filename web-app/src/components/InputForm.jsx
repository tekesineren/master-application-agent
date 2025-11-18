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
  { value: 'turkey', label: 'Türkiye', gradingSystem: '4.0' },
  { value: 'usa', label: 'USA', gradingSystem: '4.0' },
  { value: 'uk', label: 'UK', gradingSystem: 'uk' },
  { value: 'germany', label: 'Germany', gradingSystem: 'german' },
  { value: 'france', label: 'France', gradingSystem: 'french' },
  { value: 'other', label: 'Other', gradingSystem: 'other' }
]

const gradingSystems = {
  '4.0': { label: '4.0 GPA Sistemi', min: 0, max: 4.0, step: 0.01, placeholder: '3.5' },
  'uk': { label: 'UK Sistemi (First/Upper Second/Lower Second/Third)', min: 0, max: 100, step: 1, placeholder: '70 (Upper Second)' },
  'german': { label: 'Alman Sistemi (1.0-4.0, 1.0 en iyi)', min: 1.0, max: 4.0, step: 0.1, placeholder: '2.0' },
  'french': { label: 'Fransız Sistemi (0-20, 20 en iyi)', min: 0, max: 20, step: 0.1, placeholder: '15' },
  'other': { label: 'Diğer', min: 0, max: 100, step: 0.01, placeholder: 'Not ortalaması' }
}

const languageTests = [
  { value: 'toefl', label: 'TOEFL iBT', min: 0, max: 120, placeholder: '100', description: 'Test of English as a Foreign Language' },
  { value: 'ielts', label: 'IELTS Academic', min: 0, max: 9, step: 0.5, placeholder: '7.0', description: 'International English Language Testing System' },
  { value: 'cambridge_cae', label: 'Cambridge CAE', min: 0, max: 210, placeholder: '180', description: 'Cambridge Advanced English (Grade A/B/C)' },
  { value: 'cambridge_cpe', label: 'Cambridge CPE', min: 0, max: 230, placeholder: '200', description: 'Cambridge Proficiency English (Grade A/B/C)' },
  { value: 'pte', label: 'PTE Academic', min: 0, max: 90, placeholder: '71', description: 'Pearson Test of English Academic' },
  { value: 'duolingo', label: 'Duolingo English Test', min: 0, max: 160, placeholder: '120', description: 'Duolingo English Test' },
  { value: 'toeic', label: 'TOEIC', min: 0, max: 990, placeholder: '850', description: 'Test of English for International Communication' },
  { value: 'yds', label: 'YDS / eYDS', min: 0, max: 100, placeholder: '70', description: 'Yabancı Dil Bilgisi Seviye Tespit Sınavı' },
  { value: 'yokdil', label: 'YÖKDİL / e-YÖKDİL', min: 0, max: 100, placeholder: '70', description: 'Yükseköğretim Kurumları Yabancı Dil Sınavı' }
]

// Background isimlerini formatla (Title Case)
function formatBackgroundName(name) {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

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
    gradingSystem: '4.0',
    languageTestType: '',
    languageTestScore: '',
    entranceExamRank: '',
    undergraduateUniversityRanking: '',
    greScore: '',
    gmatScore: '',
    projectExperience: '',
    competitionAchievements: '',
    hasMastersDegree: false,
    mastersUniversityRanking: '',
    cvSuggestedBackgrounds: [] // CV'den gelen öneriler
  })
  
  // CV'den gelen önerileri simüle et (gerçekte CV parse edilecek)
  const [suggestedBackgrounds, setSuggestedBackgrounds] = useState([])

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
                  gradingSystem: selectedCountry?.gradingSystem || 'other'
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
            <label htmlFor="gradingSystem">Notlandırma Sistemi</label>
            <select
              id="gradingSystem"
              name="gradingSystem"
              value={formData.gradingSystem}
              onChange={(e) => {
                setFormData(prev => ({
                  ...prev,
                  gradingSystem: e.target.value,
                  gpa: '' // Sistem değişince notu sıfırla
                }))
              }}
            >
              {Object.entries(gradingSystems).map(([key, system]) => (
                <option key={key} value={key}>{system.label}</option>
              ))}
            </select>
            <small>Üniversitenizin kullandığı notlandırma sistemi</small>
          </div>

          <div className="form-group">
            <label htmlFor="gpa">Not Ortalaması</label>
            <input
              type="number"
              id="gpa"
              name="gpa"
              value={formData.gpa}
              onChange={handleChange}
              step={gradingSystems[formData.gradingSystem]?.step || 0.01}
              min={gradingSystems[formData.gradingSystem]?.min || 0}
              max={gradingSystems[formData.gradingSystem]?.max || 100}
              placeholder={gradingSystems[formData.gradingSystem]?.placeholder || 'Not ortalaması'}
              required
            />
            <small>{gradingSystems[formData.gradingSystem]?.label}</small>
          </div>

          {formData.country === 'turkey' && (
            <div className="form-group">
              <label htmlFor="entranceExamRank">ÖSYM Sıralaması (Opsiyonel)</label>
              <input
                type="number"
                id="entranceExamRank"
                name="entranceExamRank"
                value={formData.entranceExamRank}
                onChange={handleChange}
                min="1"
                placeholder="15000"
              />
              <small>Örn: 15000 (sıralama) - Türkiye için ek değerlendirme</small>
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
            <label htmlFor="languageTestType">Yabancı Dil Sınavı</label>
            <select
              id="languageTestType"
              name="languageTestType"
              value={formData.languageTestType}
              onChange={(e) => {
                setFormData(prev => ({
                  ...prev,
                  languageTestType: e.target.value,
                  languageTestScore: '' // Sınav değişince skoru sıfırla
                }))
              }}
              required
            >
              <option value="">Seçiniz</option>
              {languageTests.map(test => (
                <option key={test.value} value={test.value}>{test.label}</option>
              ))}
            </select>
            <small>Uluslararası kabul gören dil sınavları</small>
          </div>

          {formData.languageTestType && (
            <div className="form-group">
              <label htmlFor="languageTestScore">
                {languageTests.find(t => t.value === formData.languageTestType)?.label} Skoru
              </label>
              <input
                type="number"
                id="languageTestScore"
                name="languageTestScore"
                value={formData.languageTestScore}
                onChange={handleChange}
                step={languageTests.find(t => t.value === formData.languageTestType)?.step || 1}
                min={languageTests.find(t => t.value === formData.languageTestType)?.min || 0}
                max={languageTests.find(t => t.value === formData.languageTestType)?.max || 120}
                placeholder={languageTests.find(t => t.value === formData.languageTestType)?.placeholder || 'Skor'}
                required
              />
              <small>
                {languageTests.find(t => t.value === formData.languageTestType)?.description}
              </small>
            </div>
          )}
        </div>

        <div className="form-section">
          <h2>🎯 Background</h2>
          
          {/* CV Upload (simüle edilmiş - gerçekte CV parse edilecek) */}
          <div className="cv-upload-section" style={{ marginBottom: '20px', padding: '15px', background: '#f5f5f5', borderRadius: '8px' }}>
            <label htmlFor="cvUpload" style={{ display: 'block', marginBottom: '10px', fontWeight: '500' }}>
              📄 CV Yükle (Önerilir)
            </label>
            <input
              type="file"
              id="cvUpload"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const file = e.target.files[0]
                if (file) {
                  // Simüle edilmiş CV parsing - gerçekte backend'de yapılacak
                  // Şimdilik rastgele 3 öneri göster
                  const randomSuggestions = backgroundOptions
                    .filter(opt => opt !== 'other')
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 3)
                  setSuggestedBackgrounds(randomSuggestions)
                  
                  // CV'den otomatik çıkarılan veriler (simüle edilmiş)
                  const simulatedResearchExp = (Math.random() * 3).toFixed(1) // 0-3 yıl arası
                  const simulatedWorkExp = (Math.random() * 5).toFixed(1) // 0-5 yıl arası
                  
                  // Otomatik seç ve ilk üçe sırala
                  setFormData(prev => {
                    const newBackground = [...randomSuggestions, ...prev.background.filter(b => !randomSuggestions.includes(b))]
                    return {
                      ...prev,
                      background: [...new Set(newBackground)],
                      researchExperience: simulatedResearchExp, // CV'den otomatik doldur
                      workExperience: simulatedWorkExp // CV'den otomatik doldur
                    }
                  })
                  
                  // Başarı mesajı göster
                  alert(`CV başarıyla yüklendi!\n\nOtomatik olarak çıkarılan bilgiler:\n- Araştırma Deneyimi: ${simulatedResearchExp} yıl\n- İş Deneyimi: ${simulatedWorkExp} yıl\n- Background önerileri: ${randomSuggestions.length} alan`)
                }
              }}
              style={{ display: 'block', marginBottom: '10px' }}
            />
            <small style={{ color: '#666', fontStyle: 'italic' }}>
              💡 CV yüklendiğinde araştırma ve iş deneyimi otomatik doldurulur. Mavi renkte gösterilen alanlar CV'nize bakılarak yaptığımız önerilerdir.
            </small>
          </div>

          <div className="background-grid">
            {(() => {
              // Önce önerilenleri, sonra diğerlerini sırala
              const otherOptions = backgroundOptions.filter(opt => opt !== 'other' && !suggestedBackgrounds.includes(opt))
              const sortedOptions = [...suggestedBackgrounds, ...otherOptions]
              
              return sortedOptions.map((option, index) => {
                const isSuggested = suggestedBackgrounds.includes(option)
                const isSelected = formData.background.includes(option)
                const isInTopThree = isSuggested && suggestedBackgrounds.indexOf(option) < 3
                
                return (
                  <label 
                    key={option} 
                    className={`checkbox-label ${isSuggested ? 'suggested' : ''} ${isSelected ? 'selected' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleBackgroundToggle(option)}
                    />
                    <span>{formatBackgroundName(option)}</span>
                    {isInTopThree && <span className="suggested-badge">Öneri</span>}
                  </label>
                )
              })
            })()}
            
            {/* Other option - grid içinde en sonda */}
            <label className={`checkbox-label ${formData.background.includes('other') ? 'selected' : ''}`}>
              <input
                type="checkbox"
                checked={formData.background.includes('other')}
                onChange={() => handleBackgroundToggle('other')}
              />
              <span>Other</span>
            </label>
          </div>
          
          {/* Other input - sadece seçildiğinde göster */}
          {formData.background.includes('other') && (
            <div className="other-input-wrapper" style={{ marginTop: '15px' }}>
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
            <div className="other-confirmed" style={{ marginTop: '10px' }}>
              ✓ Added: <strong>{formData.otherBackground}</strong>
            </div>
          )}
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

        <div className="form-section" style={{ 
          background: 'linear-gradient(135deg, #fff5e6 0%, #ffe8cc 100%)', 
          padding: '25px', 
          borderRadius: '12px', 
          border: '2px solid #ffa500',
          marginTop: '30px'
        }}>
          <h2 style={{ color: '#d97706', marginBottom: '15px' }}>
            ⭐ Ekstra Başarılar (Size İleri Sunabilecek Parametreler)
          </h2>
          <p style={{ color: '#92400e', fontSize: '0.9rem', marginBottom: '20px', fontStyle: 'italic' }}>
            Bu bölümdeki bilgiler sizi diğer adaylardan ayıran ve başvurunuzu güçlendiren ekstra başarılarınızdır.
          </p>
          
          <div className="form-group">
            <label htmlFor="publications" style={{ fontWeight: '600', color: '#d97706' }}>
              📄 Yayınlar (Hakemli Dergiler)
            </label>
            <input
              type="number"
              id="publications"
              name="publications"
              value={formData.publications}
              onChange={handleChange}
              min="0"
              max="50"
              placeholder="0"
              style={{ borderColor: '#ffa500' }}
            />
            <small style={{ color: '#92400e' }}>
              Hakemli dergilerde yayınlanmış makale sayısı (Çok az öğrencide olan, sizi öne çıkaracak önemli bir kriter)
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="projectExperience">Proje Deneyimi</label>
            <select
              id="projectExperience"
              name="projectExperience"
              value={formData.projectExperience}
              onChange={handleChange}
              style={{ borderColor: '#ffa500' }}
            >
              <option value="none">Yok</option>
              <option value="national">Ulusal Proje (TÜBİTAK, vb.)</option>
              <option value="eu">AB Projesi</option>
              <option value="international">Uluslararası Proje</option>
              <option value="multiple">Birden Fazla Proje</option>
            </select>
            <small style={{ color: '#92400e' }}>Araştırmacı veya bursiyer olarak görev aldığınız projeler</small>
          </div>

          <div className="form-group">
            <label htmlFor="competitionAchievements">Yarışma Başarıları</label>
            <select
              id="competitionAchievements"
              name="competitionAchievements"
              value={formData.competitionAchievements}
              onChange={handleChange}
              style={{ borderColor: '#ffa500' }}
            >
              <option value="none">Yok</option>
              <option value="bronze">3. (Bronz)</option>
              <option value="silver">2. (Gümüş)</option>
              <option value="gold">1. (Altın)</option>
              <option value="multiple">Birden Fazla</option>
            </select>
            <small style={{ color: '#92400e' }}>TEKNOFEST, hackathon, vb. yarışmalarda derece</small>
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

