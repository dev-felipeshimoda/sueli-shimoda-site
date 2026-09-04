# Prompts de imagem | Carrossel 02, Divórcio

> Um prompt por slide. Gere no ChatGPT e salve em `../imagens/` com o **nome exato**.
> O `carrossel.html` já aponta pra esses nomes. Enquanto o arquivo não existir, a faixa
> renderiza com uma textura de reserva e o slide continua apresentável.
> Depois de salvar as fotos, rode `node render.js`.

## Como o layout usa a foto

Cada slide tem uma **faixa de foto sangrando de ponta a ponta na base**, e a altura dela muda
de slide pra slide, porque o último bloco de texto sempre desce e fica por cima do topo da foto.
É assim nas referências: a caixa nunca para acima da imagem, ela invade.

| Slide | Faixa de foto | Como a foto aparece |
|---|---|---|
| 02 | 61% da altura | metade de baixo inteira, caixa marrom por cima do topo dela |
| 03 | 49% | faixa média, duas caixas encostando |
| 04 | **quadro inteiro** | foto de fundo em tudo, com véu escuro e texto por cima |
| 05 | 51% | faixa média sob fundo marrom |
| 06 | 55% | faixa média |
| 07 | 62% | metade de baixo, com as duas linhas do CTA por cima |

Por isso os prompts pedem **assunto centralizado e com respiro em volta**: a imagem vai ser
cortada numa tira, e o topo dela ainda leva uma caixa de texto por cima. Nada importante
pode ficar no topo do quadro gerado.

---

## Slide 01 — CAPA
**Não precisa de prompt.** Arte final já salva em `../imagens/capa-divorcio.jpg`.

---

## Slide 02 — "Todo mundo só quer que acabe logo"
**Arquivo:** `../imagens/foto-02-relogio.jpg`
**Ideia:** o tempo passando enquanto se decide com pressa.

```
Editorial still life photograph of an old brass desk clock standing on a warm wooden table,
soft afternoon light coming from the left casting a long shadow across the surface,
a few blurred papers out of focus in the background,
subject centred with generous empty space above and below it,
no people, no faces, no hands, no text, no numbers visible on the dial, no logos,
warm palette of caramel, cream, terracotta and aged wood,
heavy film grain, printed matte texture, shallow depth of field, natural light,
vertical 4:5 composition
```

---

## Slide 03 — ERRO 1, "Abrir mão da partilha pra acabar logo"
**Arquivo:** `../imagens/foto-03-chaves.jpg`
**Ideia:** as chaves da casa sobre a mesa, o patrimônio que se entrega sem pensar.

```
Editorial still life photograph of a set of house keys resting on a folded document
on a warm walnut table, soft directional window light from the right,
a small ceramic dish beside them, quiet and grounded mood,
subject centred with generous empty space above and below it,
no people, no faces, no hands, no readable text on the document, no logos,
warm palette of caramel, taupe, cream and dark wood,
heavy film grain, printed matte texture, shallow depth of field,
vertical 4:5 composition
```

---

## Slide 04 — ERRO 2, "Combinar a pensão só na conversa"
**Arquivo:** `../imagens/foto-04-mesa.jpg`
**Ideia:** a conversa que aconteceu e não virou papel. Duas xícaras, nenhum documento.
**Atenção:** esse é o slide de **foto no quadro inteiro**. Ela leva um véu escuro por cima e
o texto ocupa a metade de cima, então a imagem precisa ser **escura e com o assunto embaixo**.

```
Editorial still life photograph of two empty coffee cups left on a dark wooden table
after a long conversation, one cup slightly pushed away, a phone face down beside them,
the whole arrangement placed in the lower half of the frame,
the upper half is deep shadow and empty dark wall with almost no detail,
low warm lamp light from one side,
no people, no faces, no hands, no text, no logos,
warm dark palette of espresso brown, amber and muted cream,
heavy film grain, printed matte texture, moody low key lighting,
vertical 4:5 composition, dark overall exposure, subject anchored at the bottom
```

---

## Slide 05 — ERRO 3, "Sair de casa sem combinar nada"
**Arquivo:** `../imagens/foto-05-porta.jpg`
**Ideia:** a mala pronta no corredor. Saída, não abandono.

```
Editorial photograph of a single packed leather suitcase standing in a warm hallway
next to a partly open door, soft golden light spilling across the wooden floor,
calm and quiet rather than dramatic,
subject centred with generous empty space above and below it,
no people, no faces, no hands, no text, no logos,
warm palette of terracotta, amber, cream and deep brown,
heavy film grain, printed matte texture, natural light, shallow depth of field,
vertical 4:5 composition
```

---

## Slide 06 — "Decidir devagar sai mais barato"
**Arquivo:** `../imagens/foto-06-caderno.jpg`
**Ideia:** o caderno aberto e a caneta, a decisão sendo pensada com calma.
**Atenção:** esse slide tem fundo claro, então a foto pode ser média ou escura, o contraste vem dela.

```
Editorial still life photograph of an open notebook with blank pages and a fountain pen
resting on a dark walnut desk, a warm desk lamp glowing from the upper right,
deep shadows around the edges of the frame, calm and deliberate mood,
subject centred with generous empty space above and below it,
no people, no faces, no hands, no writing or readable text on the pages, no logos,
warm dark palette of espresso brown, amber and cream,
heavy film grain, printed matte texture, low key lamp light,
vertical 4:5 composition, dark overall exposure
```

---

## Slide 07 — CTA, "Está nessa decisão agora?"
**Arquivo:** `../imagens/foto-07-cafe.jpg`
**Ideia:** duas cadeiras e a mesa posta pra conversa que ainda vai acontecer. Convite, não venda.

```
Editorial interior photograph of two simple chairs facing each other across a small
wooden table with two cups of coffee, seen from a low angle in a warm naturally lit room,
soft daylight from a large window, welcoming and calm atmosphere,
subject centred with generous empty space above and below it,
no people, no faces, no hands, no text, no logos,
warm palette of taupe, cream, terracotta and light wood,
heavy film grain, printed matte texture, natural window light,
vertical 4:5 composition
```

---

## Se alguma foto ficar clara ou escura demais

A faixa de foto não tem véu de cor por cima, porque nas referências a foto aparece limpa.
A única exceção é o slide 04, que é foto no quadro inteiro e por isso tem um véu escuro
no `carrossel.html`, na linha `<div class="veu" ...>`.

Se uma foto brigar com o slide, o ajuste é pedir ao GPT "darker overall exposure" ou
"brighter, low contrast". O slide 05 tem fundo marrom médio e o 04 é escuro; os demais
têm fundo claro e aceitam foto clara ou média.
