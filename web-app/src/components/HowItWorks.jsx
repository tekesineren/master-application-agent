import './HowItWorks.css'

const steps = [
  {
    number: '01',
    title: 'Bilgilerinizi Girin',
    description: 'GPA, dil skoru, background ve motivation letter\'ınızı ekleyin',
    icon: '📝'
  },
  {
    number: '02',
    title: 'AI Analiz Ediyor',
    description: 'Yapay zeka algoritmamız yüzlerce okulu analiz ediyor',
    icon: '🤖'
  },
  {
    number: '03',
    title: 'Sonuçları Görün',
    description: 'Size en uygun okulları kategorilere göre görüntüleyin',
    icon: '📊'
  },
  {
    number: '04',
    title: 'Başvurunuzu Yapın',
    description: 'Önerilen okullara başvurun ve hayalinizdeki master\'a başlayın',
    icon: '🎓'
  }
]

function HowItWorks() {
  return (
    <div className="how-it-works">
      <div className="how-it-works-container">
        <h2 className="how-it-works-title">Nasıl Çalışır?</h2>
        <p className="how-it-works-subtitle">
          4 basit adımda master programınızı bulun
        </p>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks

