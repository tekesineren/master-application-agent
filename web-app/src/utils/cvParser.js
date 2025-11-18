// CV Parser utility - Frontend'de temel validasyon ve text extraction

export const validateCVFile = (file) => {
  // Dosya tipi kontrolü
  const validTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]
  
  if (!validTypes.includes(file.type)) {
    return { valid: false, error: 'Lütfen PDF, DOC veya DOCX formatında bir dosya yükleyin' }
  }
  
  // Dosya boyutu kontrolü (max 10MB)
  const maxSize = 10 * 1024 * 1024 // 10MB
  if (file.size > maxSize) {
    return { valid: false, error: 'Dosya boyutu 10MB\'dan büyük olamaz' }
  }
  
  if (file.size === 0) {
    return { valid: false, error: 'Dosya boş görünüyor' }
  }
  
  return { valid: true }
}

export const extractTextFromFile = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    
    reader.onload = async (e) => {
      try {
        const arrayBuffer = e.target.result
        
        if (file.type === 'application/pdf') {
          // PDF için backend'e gönderilecek
          resolve({ text: null, type: 'pdf', needsBackend: true, file: arrayBuffer })
        } else if (file.type.includes('wordprocessingml') || file.type === 'application/msword') {
          // DOCX için backend'e gönderilecek
          resolve({ text: null, type: 'docx', needsBackend: true, file: arrayBuffer })
        } else {
          reject(new Error('Desteklenmeyen dosya formatı'))
        }
      } catch (error) {
        reject(error)
      }
    }
    
    reader.onerror = () => reject(new Error('Dosya okunamadı'))
    reader.readAsArrayBuffer(file)
  })
}

export const validateCVContent = (text) => {
  if (!text || text.trim().length < 50) {
    return { valid: false, error: 'CV içeriği çok kısa veya boş görünüyor' }
  }
  
  // CV'de olması gereken anahtar kelimeler
  const cvKeywords = [
    'education', 'eğitim', 'üniversite', 'university', 'gpa', 'not',
    'experience', 'deneyim', 'work', 'iş', 'skill', 'beceri',
    'publication', 'yayın', 'research', 'araştırma', 'language', 'dil',
    'toefl', 'ielts', 'cv', 'resume', 'curriculum', 'vitae'
  ]
  
  const lowerText = text.toLowerCase()
  const foundKeywords = cvKeywords.filter(keyword => lowerText.includes(keyword))
  
  if (foundKeywords.length < 3) {
    return { 
      valid: false, 
      error: 'Bu dosya bir CV gibi görünmüyor. Lütfen geçerli bir CV yükleyin.' 
    }
  }
  
  return { valid: true, confidence: foundKeywords.length / cvKeywords.length }
}

