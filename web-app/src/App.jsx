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
      const apiUrl = import.meta.env.VITE_API_URL || '/api'
      const response = await fetch(`${apiUrl}/match`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          gpa: parseFloat(formData.gpa),
          language_score: parseInt(formData.languageScore),
          motivation_letter: formData.motivationLetter,
          background: formData.background
        })
      })

      const data = await response.json()
      
      if (data.success) {
        setResults(data)
      } else {
        setError(data.error || 'Bir hata oluştu')
      }
    } catch (err) {
      setError('Backend API\'ye bağlanılamadı. Backend\'in çalıştığından emin olun.')
      console.error('Error:', err)
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

