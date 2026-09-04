# Planejamento de posts | Setembro 2026

> Roteiro de publicação da Sueli Shimoda no Instagram.
> Base: `carrosseis/guia-estrategia-posts.md` (ritmo, pilares, rotação de gancho) e o
> inventário real das pastas em `carrosseis/`, conferido em 01/09/2026.

---

## Ritmo

Dois carrosséis por semana, terça e sexta, como o guia recomenda. Setembro de 2026 começa numa
terça, então dá 9 publicações no mês.

| Terças | Sextas |
|---|---|
| 01, 08, 15, 22, 29 | 04, 11, 18, 25 |

---

## Inventário: o que já está pronto

Onze carrosséis com o conjunto completo de PNGs renderizados.

| Pasta | Tema | Área | Gancho | Slides |
|---|---|---|---|---:|
| `01-apresentacao` | Minha história: o divórcio criou a advogada que eu sou | Família | Storytelling | 8 |
| `02-divorcio` | O jeito mais caro de se divorciar é decidir no impulso | Família | Negativo | 7 |
| `04-pensao-alimenticia` | Pensão atrasada não é falta de sorte, é direito negado | Família | Negativo | 6 |
| `05-revisao-pensao` | 7 sinais para rever a pensão (linha viral, vermelho e preto) | Família | Curioso | 9 |
| `07-revisao-pensao-editorial` | 7 sinais para rever a pensão (linha editorial) | Família | Curioso | 8 |
| `08-cnis-vinculos` | Você trabalhou, o INSS pode não saber | Previdenciário | Negativo | 7 |
| `09-guarda-compartilhada` | Guarda compartilhada não é dividir o filho ao meio | Família | Controverso | 7 |
| `10-aposentadoria-mae-planejamento` | O pedido de aposentadoria começa antes do botão | Previdenciário | Storytelling | 7 |
| `11-pensao-maioridade` | Pensão não acaba automaticamente aos 18 anos | Família | Controverso | 7 |
| `12-inss-atrasado` | Pagar o INSS em atraso não garante o reconhecimento | Previdenciário | Negativo | 7 |
| `13-divorcio-antes-partilha` | O divórcio pode vir antes da partilha | Família | Curioso | 7 |

**Não está pronto:** `03-pensao-7-sinais` tem só a capa em `instagram/`. Os 9 slides internos
não estão renderizados.

---

## Calendário

| # | Data | Pasta | Área | Gancho | Capa |
|---|---|---|---|---|---|
| 1 | Ter 01/09 | `01-apresentacao` | Família | Storytelling | Foto |
| 2 | Sex 04/09 | `08-cnis-vinculos` | Previdenciário | Negativo | Foto |
| 3 | Ter 08/09 | `11-pensao-maioridade` | Família | Controverso | Tipográfica terracota |
| 4 | Sex 11/09 | `10-aposentadoria-mae-planejamento` | Previdenciário | Storytelling | Foto da Sueli |
| 5 | Ter 15/09 | `13-divorcio-antes-partilha` | Família | Curioso | Tipográfica branco editorial |
| 6 | Sex 18/09 | `12-inss-atrasado` | Previdenciário | Negativo | Foto de documentos |
| 7 | Ter 22/09 | `09-guarda-compartilhada` | Família | Controverso | Foto editorial |
| 8 | Sex 25/09 | `02-divorcio` | Família | Negativo | Foto |
| 9 | Ter 29/09 | `07-revisao-pensao-editorial` | Família | Curioso | Foto |

### Por que essa ordem

**A apresentação abre.** É a prioridade que a Sueli marcou no briefing e é o único post que
justifica o perfil existir. Todo o resto depende de quem chega já saber quem ela é.

**Nenhum gancho se repete em posts vizinhos.** A sequência fica Storytelling, Negativo,
Controverso, Storytelling, Curioso, Negativo, Controverso, Negativo, Curioso.

**As duas histórias verdadeiras ficam separadas.** O divórcio dela abre o mês (post 1) e a
aposentadoria da mãe entra no meio (post 4). São os dois ativos que a IA não consegue imitar,
então não faz sentido gastar os dois na mesma semana.

**Previdenciário nas posições 2, 4 e 6.** Alterna com Família durante os dois primeiros terços.

---

## Os três problemas do acervo atual

### 1. O mesmo conteúdo existe em três versões

`03-pensao-7-sinais`, `05-revisao-pensao` e `07-revisao-pensao-editorial` são o mesmo carrossel:
os 7 sinais para rever a pensão. Mudou só a roupa visual. Publicar mais de um seria repetir o
assunto pro mesmo público em semanas próximas.

**Recomendação:** manter `07-revisao-pensao-editorial`, porque a paleta quente dele conversa com
a maioria das outras peças. Mover `03` e `05` para `_arquivados/`. Os dois usam vermelho e preto,
que não existem na paleta oficial.

**Pendência do 07:** os fundos internos ainda são degradê de reserva. Os prompts das fotos estão
em `07-revisao-pensao-editorial/prompts-imagens.md`. Gerar e rodar `node render.js` antes de 29/09.

### 2. Pensão ocupa metade do acervo

Entre `03`, `04`, `05`, `07` e `11`, cinco dos doze carrosséis falam de pensão. É o tema mais
buscado, mas o perfil corre o risco de virar monotemático.

**Recomendação:** só um post de pensão em setembro (o 11, dia 08) mais o fechamento do dia 29.
`04-pensao-alimenticia` fica de reserva para outubro.

### 3. O último terço do mês fica desequilibrado

Os posts 7, 8 e 9 são todos de Família e todos com capa fotográfica. Não existe mais nenhum
carrossel de Previdenciário pronto para intercalar.

**Recomendação:** produzir dois posts previdenciários antes de 22/09 e trocá-los pelos posts 8 e
9. Os prontos que saírem viram os dois primeiros de outubro, sem perda de trabalho. Os temas
sugeridos estão na próxima seção.

---

## Assuntos novos a produzir

Todos saem do banco de ganchos do guia e nenhum foi usado ainda. Ordenados por prioridade.

### Prioridade alta, para fechar setembro

**N1. Tem gente recebendo BPC achando que é aposentadoria** | Previdenciário | Controverso

Corrige um mito com consequência concreta. Quem recebe BPC costuma descobrir tarde que o
benefício não gera décimo terceiro, não deixa pensão por morte e depende da renda familiar. A
mudança de percepção é entender que assistência social e previdência são coisas diferentes,
ainda que o dinheiro caia igual todo mês.

**N2. Pensão por morte tem prazo, e muita gente descobre tarde** | Previdenciário | Curioso

A duração varia conforme a idade de quem recebe e o tempo de casamento e de contribuição. Muita
viúva planeja a vida achando que o benefício é vitalício. O post explica que existe uma tabela e
que ela precisa ser conferida, sem afirmar prazo específico para nenhum caso.

### Prioridade média, para outubro

**N3. Auxílio-doença negado não é o fim da história** | Previdenciário | Negativo

Negativa por perícia não encerra o assunto. Existem caminhos de reanálise. O cuidado é não
prometer reversão, só mostrar que o processo continua.

**N4. Trabalho rural conta, mas só se você conseguir provar** | Previdenciário | Prevenção

Post de documento: o que serve de prova e por que reunir antes importa. Conversa direto com a
região e com o público de idade mais alta.

**N5. Ninguém casa lendo o regime de bens, e é ele que decide tudo no fim** | Família | Curioso

Prevenção pura. Boa porta de entrada para quem ainda não está em conflito, público que os outros
posts não alcançam.

**N6. Pensão combinada só na conversa não se cobra** | Família | Negativo

Acordo verbal não vira título executivo. Erro comum e com consequência prática imediata.

### Formatos ainda não usados

O guia lista dois formatos que nenhuma peça explorou: **mito contra verdade** e **antes de
assinar**. N1 e N5 são os candidatos naturais para estrear cada um.

---

## O que trava a publicação hoje

Estes itens valem para o mês inteiro, não para um post específico.

1. **Número de inscrição na OAB com seccional.** O guia exige o dado em toda peça e nenhum dos
   onze carrosséis prontos tem. Enquanto não vier da Sueli, nada deveria ir ao ar.
2. **@ do Instagram**, para o rodapé das artes e das legendas.
3. **Hashtag da cidade**, ausente em todas as legendas.
4. **Telefone novo**, pendente desde o briefing de junho.
5. **Aprovação da Sueli**, peça por peça. Ela é a responsável final pela conformidade.

O item 1 é o único que impede publicar. Os outros quatro reduzem alcance e conversão, mas não
geram risco disciplinar.

---

## Convivência de linhas visuais

O acervo hoje tem quatro linguagens diferentes: a institucional terracota, a linha marrom das
referências do carrossel 02, a viral em vermelho e preto, e a editorial. Quatro sistemas em um
perfil que ainda não publicou nada significa que o feed nasce sem assinatura reconhecível.

O calendário acima já evita o pior ao deixar a linha vermelha de fora. Vale decidir com a Sueli
qual das três restantes vira o padrão, e adaptar as outras conforme o mês avança.

---

## Métricas do ciclo

O guia pede um ciclo de teste de quatro a seis semanas alternando os quatro ganchos. Setembro
cobre exatamente esse período. Registrar por post:

- alcance da capa;
- percentual que chega ao último slide;
- salvamentos e compartilhamentos;
- comentários com dúvida real;
- mensagens no direct sobre o tema.

Curtida é sinal secundário. No fim de setembro, repetir os temas e ganchos com melhor resposta,
sem reaproveitar a mesma frase de capa.
