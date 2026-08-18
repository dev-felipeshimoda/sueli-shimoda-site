# Site Sueli Shimoda — React + Framer Motion

Site reconstruído como projeto React (Vite) com a biblioteca **Framer Motion**.
Interatividade de mouse (parallax, tilt nos cards, brilho que segue o cursor) e
de scroll (reveal, parallax de fundo, springs, barra de progresso no topo).

## Rodar localmente (ver no navegador)

```
npm install      # só na primeira vez
npm run dev      # abre em http://localhost:5173
```

## Publicar (deploy)

O site agora tem etapa de build. Gera arquivos estáticos na pasta `dist/`:

```
npm run build
```

Na Vercel/Netlify, configurar o projeto apontando para esta pasta com:

- Build command: `npm run build`
- Output directory: `dist`

Ou subir manualmente o conteúdo de `dist/` para qualquer hospedagem estática.

## Estrutura

- `index.html` — entry do Vite
- `src/App.jsx` — monta todas as seções
- `src/components/` — cada seção e os utilitários de animação
- `src/hooks/useTilt.js` — tilt 3D dos cards
- `src/wa.js` — número e mensagens do WhatsApp (ajustar DDD aqui)
- `public/assets/` — imagens
- `_backup-static/index.html` — versão antiga (HTML único), guardada como backup

## Ajustar o WhatsApp

Editar `src/wa.js`: `WA_NUMBER` no formato `55 + DDD + número`.
