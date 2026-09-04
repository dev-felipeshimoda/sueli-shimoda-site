# Carrossel 01 | Minha história

> Apresentação de quem é a Sueli. Substitui a versão institucional anterior,
> que foi preservada em `v1-institucional/`.
> **Capa:** arte final fornecida pronta (`imagens/capa-minha-historia.jpg`), usada como veio.
> 8 slides, 1080x1350.

## Regras desta linha de conteúdo

- **Áreas:** só Família e Previdenciário.
- Estrutura de conflito: cria um problema e resolve ele.
- Contradição ou curiosidade absurda na abertura.
- Se o seguidor precisar pensar pra entender, perdeu. Frase direta.
- Não é a frase que prende, é o incômodo que ela causa.
- Leve, simples, direto e verdadeiro. Histórias reais do briefing, nada inventado.

## Sistema visual

Cada slide foi montado em cima de um layout específico das referências, não de um layout genérico:

| Slide | Layout de referência | O que caracteriza |
|---|---|---|
| 02 | "SEGREDO QUASE IMORAL" | script pequeno em cima, display gigante empilhado e centralizado, texto embaixo |
| 03 | "COMECE PELA CAPA" | tudo alinhado à esquerda, tarjas escalonadas uma por linha |
| 04 | "CONTEÚDO FEITO POR ROBÔ" | card de papel girado, com fita no topo e borda tracejada |
| 05 | "14 MIL SEGUIDORES" | script cruzando por cima do display, caixa escura tracejada embaixo |
| 06 | "REDE SOCIAL" | tarja curta, display, curva/chave desenhada, caixa tracejada |
| 07 | "NINGUEM ABRE O INSTAGRAM" | selo colorido no topo, display, blocos lado a lado |
| 08 | "AGORA SALVA" | script cruzando o display, texto e botão |

Elementos fixos, todos vindos das referências:

- **Marca nos quatro cantos**, duas linhas, caixa alta, igual ao "MATHDSG.PSD / CAPTAÇÃO DE CLIENTES".
- **Grão de filme** em todos os slides, pro acabamento impresso.
- **Composição sobe**, deixando o terço ou a metade de baixo livre pro personagem da foto.
  Nas referências o personagem nunca fica atrás do texto: ocupa o espaço que o texto deixou.
- **Display:** Anton, a mesma linguagem do "CRIOU / A ADVOGADA" da capa.
- **Script:** Yellowtail, no papel do "meu divórcio" da capa.
- **Corpo:** Archivo.
- **As três fontes estão embutidas em base64 no `carrossel.html`.** Abre e renderiza offline.

### Cores, todas ligadas ao branding

As referências usam rosa e verde como acento. Traduzi esses papéis pra paleta da Sueli:

- terracota luminoso `#C05533`, amostrado da própria capa, conversa com o terracota oficial `#603020`
- creme `#F7E5CC`, amostrado da capa, conversa com o branco editorial `#F3F0EB` e o champagne `#B8A078`
- **rosé queimado `#B68C76` da marca entra no lugar do rosa das referências**, como cor do script
- espresso `#241210` nas tarjas e caixas
- taupe `#AD9D8E` nas texturas de fundo

---

## Roteiro

### Slide 01 | CAPA (fornecida)
*meu divórcio* CRIOU A ADVOGADA QUE EU SOU

### Slide 02 | A CONTRADIÇÃO
*eu conhecia* **A LEI INTEIRA**
E mesmo assim, no meu próprio divórcio, eu me senti tão perdida quanto qualquer pessoa.

> O incômodo: uma advogada que sabia tudo e ainda assim se perdeu. Não deveria acontecer.

### Slide 03 | O QUE REALMENTE DOÍA
*não era o processo* **QUE DOÍA.**
Era não saber o que ia acontecer com a minha casa, com o meu dinheiro e com a minha rotina inteira.

### Slide 04 | A SEGUNDA VEZ
*e então veio* **A APOSENTADORIA DA MINHA MÃE**
Papelada que não acaba. Regra que muda no meio. E o medo dela perder o benefício depois de uma vida inteira de trabalho.

### Slide 05 | A RESOLUÇÃO DO CONFLITO
**NUNCA FOI A LEI** *era a falta de tradução*
Advogado que não explica deixa a pessoa sozinha no meio do próprio caso.

### Slide 06 | COMO ELA ATENDE
Por isso eu mudei a ordem: **EU EXPLICO ANTES.**
Escuto a história inteira. Falo em português, não em juridiquês.
Você entende cada passo do que está acontecendo com a sua própria vida.

### Slide 07 | ONDE ELA ATUA
Se você chegou até aqui, **É AQUI QUE EU ATUO**
FAMÍLIA: divórcio, pensão, guarda e partilha de bens.
PREVIDENCIÁRIO: aposentadoria, pensão por morte, auxílio e BPC.

### Slide 08 | CTA
**ME CHAMA** *antes de decidir*
A primeira coisa que eu faço é te explicar onde você está. Sem juridiquês e sem pressa.
Chame no direct

---

## Imagens

Os slides 02 a 08 apontam pra `imagens/foto-XX.jpg`. Esses arquivos ainda não existem, então
hoje cada slide renderiza com uma textura de reserva (madeira, papel, linho, brasa) montada em CSS
na paleta da marca. Os prompts estão em `prompts img/prompts.md`, **um por slide, e cada um
descreve em que parte do quadro o assunto tem que ficar**, pra bater com o espaço que o layout
daquele slide reservou. Depois de gerar e salvar as fotos, rodar `node render.js`.

## Guardrail OAB

Só histórias reais do briefing: o divórcio dela e a aposentadoria da mãe. Nenhuma promessa
de resultado. O CTA promete explicação, não desfecho. A Sueli é a responsável final pela conformidade.
