// Google Analytics 4 integration
// Measurement ID'yi buraya ekleyeceğiz

let isInitialized = false

export const initAnalytics = (measurementId) => {
  if (isInitialized || !measurementId) return
  
  // Google Analytics script'ini yükle
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)
  
  // gtag fonksiyonunu tanımla
  window.dataLayer = window.dataLayer || []
  function gtag(){window.dataLayer.push(arguments)}
  window.gtag = gtag
  
  gtag('js', new Date())
  gtag('config', measurementId)
  
  isInitialized = true
}

export const trackEvent = (eventName, eventParams = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

export const trackPageView = (pagePath) => {
  if (window.gtag) {
    window.gtag('config', window.GA_MEASUREMENT_ID, {
      page_path: pagePath
    })
  }
}

