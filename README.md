# Sueli Shimoda | Advocacia

Projeto completo da presença digital da advogada Sueli Shimoda: site, identidade visual, carrosséis e documentação.

## Estrutura

| Pasta | O que é |
| --- | --- |
| `site-v3/` | Site atual. O `dist/` gerado dele vai para a Locaweb. |
| `site-v2/`, `site-original/`, `site/` | Versões anteriores, mantidas como histórico. |
| `identidade/` | Logo, paleta, tipografia, aplicações e mockups da marca. |
| `carrosseis/` | Carrosséis para Instagram, com o gerador e as imagens finais. |
| `docs/` | Direção criativa e prompts usados na criação dos assets. |
| `briefing.md`, `marca.md`, `LOGO-BRIEFING.md`, `plano-conteudo.md` | Documentação do projeto. |
| `carrosseis/guia-estrategia-posts.md` | **Régua de copy dos carrosséis:** tipos de gancho, tradução das referências para a advocacia, pilares, banco de ganchos e checklist de conformidade. Ler antes de escrever qualquer post. |

## Publicar o site na Locaweb

Domínio: `shimoda.adv.br`. Hospedagem: Locaweb, envio manual por FTP.

1. Dentro de `site-v3`, rodar `npm run build`
2. Enviar **todo o conteúdo de dentro de `dist/`** para a pasta `public_html` do domínio
3. Enviar também o arquivo oculto `.htaccess`, que vai junto no `dist`. Ele força https, tira o www,
   comprime e define cache. Muitos programas de FTP escondem arquivos que começam com ponto,
   é preciso ligar "mostrar arquivos ocultos"
4. Ativar o certificado SSL no painel da Locaweb, se ainda não estiver ativo

O site é uma página só, sem rotas, então não precisa de regra de reescrita além do que já está no `.htaccess`.

## Vercel (só teste)

A Vercel continua ligada a este repositório e atualiza a cada push, mas serve só para ver o site
antes de subir na Locaweb. O `site-v3/vercel.json` manda os buscadores não indexarem a cópia da Vercel,
para ela não disputar com o `shimoda.adv.br` no Google. Configuração: Root Directory `site-v3`,
build `npm run build`, saída `dist`.

## Rodar o site localmente

```powershell
cd site-v3
npm install
npm run dev
```

## Arquivos gerados

`node_modules/`, `dist/` e `site-v3/standalone.html` ficam fora do versionamento. O standalone é criado por `npm run single` dentro de `site-v3`.
