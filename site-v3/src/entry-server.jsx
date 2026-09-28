import { renderToString } from 'react-dom/server'
import App, { faqs } from './App.jsx'

export function render() {
  return renderToString(<App />)
}

// Gerado a partir da mesma lista exibida na página, para as duas nunca divergirem.
export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}
