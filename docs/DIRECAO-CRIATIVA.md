# Direção criativa | Site V3 Sueli Shimoda

## Síntese dos sete prompts

Os sete prompts originais têm uma boa ordem de raciocínio, mas repetem contexto e pedem códigos separados antes de existir uma integração real. Isso aumenta o risco de conflito entre Three.js, animações, design system e copy.

A V3 usa uma sequência mais eficiente:

1. Estratégia, conceito e copy são definidos juntos.
2. O sistema visual nasce do posicionamento da marca.
3. A cena 3D é desenhada dentro do layout real.
4. Scroll e microinterações são implementados na mesma base.
5. Performance e mobile fazem parte da arquitetura, não de um remendo final.
6. A validação acontece sobre o site integrado.

## Conceito central

### Camadas de amparo

Órbitas douradas envolvem um núcleo de luz suave. Elas representam três dimensões do atendimento:

- Cuidado com a pessoa.
- Clareza para decidir.
- Estratégia para proteger direitos.

O 3D aparece apenas na primeira dobra. Ele reforça a promessa de proteção sem transformar a advocacia em uma estética tecnológica fria.

## Objetivo e público

- Tipo: landing page institucional com foco em contato.
- Objetivo: apresentar Sueli Shimoda, explicar sua atuação e levar o visitante ao WhatsApp.
- Público: pessoas vivendo questões familiares ou previdenciárias e que precisam de orientação clara.
- Sensação: sofisticação, confiança, acolhimento e discrição.

## Estrutura

1. Hero imersivo: promessa principal, retrato da Sueli, cena 3D e contato.
2. Faixa de confiança: escuta, clareza e responsabilidade.
3. Áreas de atuação: Família e Previdenciário.
4. História pessoal: divórcio da Sueli e aposentadoria da mãe.
5. Princípios: sigilo, linguagem simples e acompanhamento.
6. Processo: contato, análise, caminhos e condução.
7. Sobre: apresentação profissional com a foto aprovada.
8. Contato: chamada final para WhatsApp.

## Sistema visual

### Cores

- Azul-marinho dominante: `#0D1B2A`, 60% da composição.
- Off-white: `#F2EFE9`, 25% da composição.
- Azul-ardósia de apoio: `#334155`, 10% da composição.
- Dourado fosco: `#CBA15A`, 5% da composição.

O azul-marinho cria confiança e discrição. O off-white traz respiro e acolhimento. O azul-ardósia separa camadas sem competir com a base, enquanto o dourado aparece apenas em pontos de atenção. Transparências e gradientes usam somente derivações dessas quatro cores.

### Tipografia

- Títulos: Italiana.
- Corpo e interface: DM Sans.
- Títulos com peso visual criado por escala e respiro, não por negrito.
- Corpo com largura controlada e entrelinha generosa.

## Cena 3D

- Tecnologia: Three.js com geometria procedural.
- Elementos: núcleo facetado, quatro órbitas metálicas e partículas discretas.
- Interação: reação leve ao ponteiro e mudança gradual com o scroll.
- Carregamento: importação adiada após o conteúdo principal.
- Mobile: menos partículas, menos segmentos, pixel ratio limitado e escala reduzida.
- Acessibilidade: a cena é removida com preferência por movimento reduzido ou economia de dados.
- Fallback: brilho e círculos em CSS aparecem imediatamente.

## Animações

- Entrada do hero: sequência curta de texto e retrato.
- Revelação de seções: deslocamento vertical de baixa amplitude.
- Cards: stagger curto, sem bloquear leitura.
- Processo: linha de progresso ligada ao scroll.
- Imagens: parallax somente em desktop.
- Preferência por movimento reduzido: conteúdo permanece estático e visível.

## Performance

- JavaScript inicial comprimido: cerca de 100 KB.
- Cena 3D comprimida: cerca de 120 KB, carregada depois.
- Sem modelos 3D externos e sem pós-processamento.
- Imagens carregadas pela página abaixo de 800 KB cada. A imagem social não entra no carregamento da página.
- Meta de carga inicial: até 1,5 MB em condições normais.
- Meta de execução: 60 fps em dispositivo mediano.
- Limite de pixel ratio: 1,5 no desktop e 1,15 no mobile.

## Erro que mais deixaria este site amador

Usar símbolos jurídicos, dourado e animação em todos os blocos ao mesmo tempo. O resultado seria literal, pesado e previsível. A V3 concentra o impacto no hero e usa o restante do site para dar clareza ao conteúdo.

## Pendência conhecida

O número disponível nos arquivos não contém DDD confirmado. Antes de publicar, atualizar `src/wa.js` com `55 + DDD + número`.
