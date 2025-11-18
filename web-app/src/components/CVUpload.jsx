import { useState, useRef } from 'react'
import { validateCVFile, extractTextFromFile, validateCVContent } from '../utils/cvParser'
import './CVUpload.css'

function CVUpload({ onCVUpload, onManualEntry }) {
  const [isDragging, setIsDragging] = useState(false)
  const [uploadedFile, setUploadedFile] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null)

  const handleDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files && files.length > 0) {
      handleFile(files[0])
    }
  }

  const handleFileSelect = (e) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFile(files[0])
    }
  }

  const handleFile = async (file) => {
    setError(null)
    
    // 1. Dosya validasyonu
    const validation = validateCVFile(file)
    if (!validation.valid) {
      setError(validation.error)
      return
    }
    
    setIsProcessing(true)
    setUploadedFile(file)
    
    try {
      // 2. Dosyayı backend'e gönder ve parse et
      const formData = new FormData()
      formData.append('cv', file)
      
      const apiUrl = import.meta.env.VITE_API_URL || 
        (import.meta.env.DEV ? '/api' : 'https://master-application-agent-production.up.railway.app/api')
      
      const response = await fetch(`${apiUrl}/parse-cv`, {
        method: 'POST',
        body: formData
      })
      
      if (!response.ok) {
        throw new Error('CV analiz edilemedi')
      }
      
      const data = await response.json()
      
      if (!data.success) {
        throw new Error(data.error || 'CV içeriği analiz edilemedi')
      }
      
      // 3. CV içeriği validasyonu
      if (data.extracted_text) {
        const contentValidation = validateCVContent(data.extracted_text)
        if (!contentValidation.valid) {
          setError(contentValidation.error)
          setUploadedFile(null)
          setIsProcessing(false)
          return
        }
      }
      
      // 4. Başarılı - CV verilerini gönder
      onCVUpload(file, data.extracted_data || {})
      
    } catch (err) {
      console.error('CV parsing error:', err)
      setError(err.message || 'CV analiz edilirken bir hata oluştu. Lütfen manuel giriş yapın.')
      setUploadedFile(null)
      setIsProcessing(false)
    }
  }

  return (
    <div className="cv-upload-container">
      <div className="cv-upload-header">
        <h1>🎓 Master Application Agent</h1>
        <p className="subtitle">CV'nizi yükleyin, size en uygun üniversiteleri bulalım</p>
      </div>

      <div 
        className={`cv-upload-area ${isDragging ? 'dragging' : ''} ${uploadedFile ? 'uploaded' : ''}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !uploadedFile && fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
        
        {!uploadedFile ? (
          <>
            <div className="upload-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
            </div>
            <h2>CV'nizi buraya sürükleyin</h2>
            <p>veya tıklayarak seçin</p>
            <div className="file-formats">
              <span>PDF, DOC, DOCX</span>
            </div>
          </>
        ) : (
          <>
            <div className="upload-success">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2>{isProcessing ? 'CV Analiz Ediliyor...' : 'CV Başarıyla Yüklendi!'}</h2>
            <p className="file-name">{uploadedFile.name}</p>
            <p className="processing">
              {isProcessing ? 'CV içeriği çıkarılıyor ve doğrulanıyor...' : 'Bilgileriniz analiz ediliyor...'}
            </p>
            {error && (
              <div className="error-message-cv" style={{ 
                marginTop: '15px', 
                padding: '10px', 
                background: '#fee2e2', 
                color: '#dc2626', 
                borderRadius: '8px',
                fontSize: '0.9rem'
              }}>
                ⚠️ {error}
              </div>
            )}
          </>
        )}
      </div>

      <div className="auto-info">
        <div className="info-icon">✨</div>
        <p>
          <strong>Otomatik Analiz:</strong> CV'nizden tüm bilgiler otomatik olarak çıkarılacak 
          (GPA, dil skorları, araştırma/iş deneyimi, background, yayınlar). 
          Hiçbir şey manuel girmenize gerek kalmayacak!
        </p>
      </div>

      <button 
        className="manual-entry-btn"
        onClick={onManualEntry}
        disabled={uploadedFile !== null}
      >
        📝 Manuel Giriş Yap
      </button>
    </div>
  )
}

export default CVUpload

