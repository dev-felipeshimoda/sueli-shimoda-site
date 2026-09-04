# Sueli Shimoda | Advocacia

Projeto completo da presença digital da advogada Sueli Shimoda: site, identidade visual, carrosséis e documentação.

## Estrutura

| Pasta | O que é |
| --- | --- |
| `site-v3/` | Site atual, em produção. É essa pasta que vai para a Vercel. |
| `site-v2/`, `site-original/`, `site/` | Versões anteriores, mantidas como histórico. |
| `identidade/` | Logo, paleta, tipografia, aplicações e mockups da marca. |
| `carrosseis/` | Carrosséis para Instagram, com o gerador e as imagens finais. |
| `docs/` | Direção criativa e prompts usados na criação dos assets. |
| `briefing.md`, `marca.md`, `LOGO-BRIEFING.md`, `plano-conteudo.md` | Documentação do projeto. |
| `carrosseis/guia-estrategia-posts.md` | **Régua de copy dos carrosséis:** tipos de gancho, tradução das referências para a advocacia, pilares, banco de ganchos e checklist de conformidade. Ler antes de escrever qualquer post. |

## Deploy na Vercel

A Vercel publica apenas o site, não o restante do repositório.

- **Root Directory:** `site-v3`
- **Framework:** Vite (detectado automaticamente)
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install command:** `npm install`

Manter desmarcada a opção "Include source files outside of the Root Directory in the Build Step". Com ela desmarcada, só o conteúdo de `site-v3` é enviado para o build, então identidade, carrosséis e documentação não chegam à Vercel.

## Rodar o site localmente

```powershell
cd site-v3
npm install
npm run dev
```

## Arquivos gerados

`node_modules/`, `dist/` e `site-v3/standalone.html` ficam fora do versionamento. O standalone é criado por `npm run single` dentro de `site-v3`.
