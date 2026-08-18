export const WA_NUMBER = '5511919190999'

export function waLink(message = 'Olá, Sueli. Encontrei seu site e gostaria de conversar sobre o meu caso.') {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}
