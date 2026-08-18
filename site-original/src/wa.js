// Número da Sueli — confirmar DDD com o Felipe (atual: 9 1919-0999, sem DDD).
// Formato internacional completo: 55 + DDD + número.
export const WA_NUMBER = '55919190999'
export const WA_MSG_PADRAO =
  'Olá, Sueli! Encontrei seu site e gostaria de conversar sobre o meu caso.'

export function waLink(msg) {
  const texto = msg || WA_MSG_PADRAO
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(texto)}`
}
