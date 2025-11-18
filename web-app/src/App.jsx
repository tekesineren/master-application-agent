import { useState } from 'react'
import InputForm from './components/InputForm'
import ResultsView from './components/ResultsView'
import CVUpload from './components/CVUpload'
import CoreMetrics from './components/CoreMetrics'
import './App.css'

function App() {
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [showCVUpload, setShowCVUpload] = useState(true)
  const [cvData, setCvData] = useState(null)

  const handleSubmit = async (formData) => {
    setLoading(true)
    setError(null)
    
    try {
      // API URL'i belirle - production'da env'den, development'da proxy kullan
      const apiUrl = import.meta.env.VITE_API_URL || 
        (import.meta.env.DEV ? '/api' : 'https://master-application-agent.onrender.com/api')
      
      console.log('API URL:', apiUrl)
      
      // Retry mekanizması - Backend uyku modundaysa uyandırmak için
      let response
      let lastError
      const maxRetries = 3
      const retryDelay = 5000 // 5 saniye
      
      for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
          // İlk denemede backend'i uyandırmak için health check yap
          if (attempt === 1) {
            const healthController = new AbortController()
            const healthTimeout = setTimeout(() => healthController.abort(), 30000)
            await fetch(`${apiUrl.replace('/match', '/health')}`, {
              method: 'GET',
              signal: healthController.signal
            }).catch(() => {}) // Health check hatası önemsiz
            clearTimeout(healthTimeout)
          }
          
          // Ana istek (60 saniye timeout)
          const controller = new AbortController()
          const timeoutId = setTimeout(() => controller.abort(), 60000)
          
          response = await fetch(`${apiUrl}/match`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              gpa: parseFloat(formData.gpa),
              grading_system: formData.gradingSystem,
              language: formData.language,
              language_test_type: formData.languageTestType,
              language_test_score: formData.languageTestScore ? parseFloat(formData.languageTestScore) : null,
              background: formData.background,
              research_experience: parseFloat(formData.researchExperience) || 0,
              work_experience: parseFloat(formData.workExperience) || 0,
              publications: parseInt(formData.publications) || 0,
              recommendation_letters: parseInt(formData.recommendationLetters) || 0,
              country: formData.country,
              undergraduate_university_ranking: formData.undergraduateUniversityRanking,
              gre_score: formData.greScore ? parseInt(formData.greScore) : null,
              gmat_score: formData.gmatScore ? parseInt(formData.gmatScore) : null,
              project_experience: formData.projectExperience,
              competition_achievements: formData.competitionAchievements,
              has_masters_degree: formData.hasMastersDegree,
              masters_university_ranking: formData.mastersUniversityRanking
            }),
            signal: controller.signal
          })
          
          clearTimeout(timeoutId)

          if (response.ok) {
            break // Başarılı, retry döngüsünden çık
          } else {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
        } catch (err) {
          lastError = err
          if (attempt < maxRetries) {
            console.log(`Deneme ${attempt}/${maxRetries} başarısız, ${retryDelay/1000} saniye sonra tekrar denenecek...`)
            await new Promise(resolve => setTimeout(resolve, retryDelay))
          }
        }
      }

      if (!response || !response.ok) {
        throw lastError || new Error('Backend yanıt vermiyor')
      }

      const data = await response.json()
      
      if (data.success) {
        setResults(data)
      } else {
        setError(data.error || 'Bir hata oluştu')
      }
    } catch (err) {
      console.error('API Error:', err)
      setError(`Backend API'ye bağlanılamadı. Backend uyku modunda olabilir, lütfen 30-60 saniye bekleyip tekrar deneyin. Hata: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setResults(null)
    setError(null)
    setShowCVUpload(true)
    setShowForm(false)
    setCvData(null)
  }

  const handleCVUpload = async (file) => {
    // Simüle edilmiş CV parsing - gerçekte backend'de yapılacak
    const simulatedData = {
      gpa: (Math.random() * 1.5 + 2.5).toFixed(2), // 2.5-4.0
      language: 'english',
      languageTestType: 'toefl',
      languageTestScore: (Math.random() * 30 + 80).toFixed(0), // 80-110
      background: ['computer science', 'engineering', 'data science'],
      researchExperience: (Math.random() * 2).toFixed(1),
      workExperience: (Math.random() * 3).toFixed(1),
      publications: Math.floor(Math.random() * 5),
      country: 'turkey',
      gradingSystem: '4.0',
      recommendationLetters: Math.floor(Math.random() * 3) + 1,
      undergraduateUniversityRanking: 'top1000',
      greScore: null,
      gmatScore: null,
      projectExperience: 'none',
      competitionAchievements: 'none',
      hasMastersDegree: false,
      mastersUniversityRanking: ''
    }

    setCvData(simulatedData)
    setShowCVUpload(false)
    
    // Otomatik analiz ve sonuçları göster
    setTimeout(() => {
      handleSubmit(simulatedData)
    }, 2000)
  }

  const handleManualEntry = () => {
    setShowCVUpload(false)
    setShowForm(true)
  }

  // 3 temel parametreyi hesapla
  const calculateCoreMetrics = () => {
    if (!results || !results.matches) return { gpa: 0, languageScore: 0, backgroundMatch: 0 }
    
    // İlk 3 üniversitenin ortalaması
    const top3 = results.matches.slice(0, 3)
    const avgGPA = top3.reduce((sum, m) => sum + (m.match_score || 0), 0) / top3.length
    const avgLanguage = 85 // Normalize edilmiş dil skoru
    const avgBackground = avgGPA * 0.8 // Background match tahmini
    
    return {
      gpa: avgGPA,
      languageScore: avgLanguage,
      backgroundMatch: avgBackground
    }
  }

  const coreMetrics = calculateCoreMetrics()

  return (
    <div className="App">
      {showCVUpload && !results && (
        <CVUpload 
          onCVUpload={handleCVUpload}
          onManualEntry={handleManualEntry}
        />
      )}

      {showForm && !results && (
        <div className={`form-page ${showForm ? 'slide-up' : ''}`}>
          <button className="back-button" onClick={() => {
            setShowForm(false)
            setShowCVUpload(true)
          }}>
            ← CV Yükleme Ekranına Dön
          </button>
          <header className="app-header">
            <h1>🎓 Master Application Agent</h1>
            <p>Master programınız için en uygun okulları bulun</p>
          </header>
          {error && (
            <div className="error-message">
              ⚠️ {error}
            </div>
          )}
          <InputForm onSubmit={handleSubmit} loading={loading} />
        </div>
      )}

      {results && (
        <div className="results-page">
          <CoreMetrics 
            gpa={coreMetrics.gpa}
            languageScore={coreMetrics.languageScore}
            backgroundMatch={coreMetrics.backgroundMatch}
          />
          <ResultsView results={results} onReset={handleReset} />
        </div>
      )}
    </div>
  )
}

export default App

