import { useState, useRef } from 'react'
import './CVUpload.css'

function CVUpload({ onCVUpload, onManualEntry }) {
  const [isDragging, setIsDragging] = useState(false)
  const [uploadedFile, setUploadedFile] = useState(null)
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

  const handleFile = (file) => {
    if (file.type === 'application/pdf' || 
        file.type === 'application/msword' || 
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      setUploadedFile(file)
      // Simüle edilmiş CV parsing - gerçekte backend'de yapılacak
      setTimeout(() => {
        onCVUpload(file)
      }, 500)
    } else {
      alert('Lütfen PDF, DOC veya DOCX formatında bir dosya yükleyin')
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
            <h2>CV Başarıyla Yüklendi!</h2>
            <p className="file-name">{uploadedFile.name}</p>
            <p className="processing">Bilgileriniz analiz ediliyor...</p>
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

