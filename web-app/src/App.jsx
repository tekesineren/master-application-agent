import { useState } from 'react'
import InputForm from './components/InputForm'
import ResultsView from './components/ResultsView'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)

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
            await fetch(`${apiUrl.replace('/match', '/health')}`, {
              method: 'GET',
              timeout: 30000
            }).catch(() => {}) // Health check hatası önemsiz
          }
          
          // Ana istek
          response = await fetch(`${apiUrl}/match`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              gpa: parseFloat(formData.gpa),
              language_score: parseInt(formData.languageScore),
              motivation_letter: formData.motivationLetter,
              background: formData.background
            }),
            signal: AbortSignal.timeout(60000) // 60 saniye timeout
          })

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
  }

  return (
    <div className="App">
      {!showForm && !results && (
        <>
          <HeroSection onGetStarted={() => setShowForm(true)} />
          <FeaturesSection />
          <HowItWorks />
          <Footer />
        </>
      )}

      {showForm && !results && (
        <div className="form-page">
          <button className="back-button" onClick={() => setShowForm(false)}>
            ← Ana Sayfaya Dön
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
        <ResultsView results={results} onReset={() => {
          setResults(null)
          setShowForm(false)
        }} />
      )}
    </div>
  )
}

export default App

