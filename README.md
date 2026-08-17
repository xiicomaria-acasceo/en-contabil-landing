# Landing page — EN Contábil

Landing page institucional para a **EN Contábil**, construída a partir da
identidade visual real do perfil oficial no Instagram
([@encontabil__contabilidade](https://www.instagram.com/encontabil__contabilidade/)),
enviada pelo usuário em formato de prints (logo em alta resolução, tela do
perfil e uma publicação).

> **Não há acesso de rede a instagram.com neste ambiente** (bloqueio de
> política do proxy, confirmado via diagnóstico). Toda a análise abaixo foi
> feita em cima dos prints enviados manualmente — não houve raspagem
> automatizada do perfil.

## 1. Identidade visual — como foi extraída

O logotipo foi recortado dos prints enviados (`en-contabil-logo.png`) e as
cores foram medidas **por amostragem de pixel** com Python/Pillow sobre a
imagem original — não foram escolhidas visualmente. Processo:

1. Recorte da área do círculo do logo (removendo fundo da foto do celular).
2. Classificação de pixels por matiz (azul vs. dourado) sobre a imagem em
   resolução original.
3. Média de centenas de milhares de pixels de cada classe → cor final.

| Papel | HEX | RGB | HSL |
|---|---|---|---|
| **Primária** (azul do logo) | `#055493` | `5, 84, 147` | `207°, 93%, 30%` |
| Primária escura (hover/pressed) | `#033862` | `3, 56, 98` | derivada, L-10% |
| Primária mais escura (seções escuras/rodapé) | `#02213A` | `2, 33, 58` | derivada, L-18% |
| **Destaque/dourado** (logo) | `#F2CC16` | `242, 204, 22` | `50°, 89%, 52%` |
| Dourado escurecido (texto sobre fundo claro) | `#C0A10B` | — | derivada, L-12% |

Tokens em `css/variables.css`. As demais cores (superfícies, texto, bordas)
são neutras derivadas para compor um sistema utilizável — não fazem parte da
identidade de marca, são necessidades funcionais de UI.

### Elementos gráficos identificados no logo
- Monograma manuscrito "en" em traço contínuo, estilo assinatura.
- Arco circular incompleto (não fecha 360°) contornando o monograma.
- Wordmark "CONTABILIDADE" em caixa alta, peso bold, tracking levemente
  aberto, também em dourado.
- Fundo circular sólido azul (usado como foto de perfil/selo).

### Tipografia
Os posts analisados usam as **fontes nativas de texto do Instagram**
(estilo "datilografia" para citações, estilo "bold caps" para avisos) — não
há uma tipografia proprietária consistente na conta. Por isso, a tipografia
do site foi escolhida para ecoar o *tom* do logo em vez de copiar um
recurso genérico do Instagram:

- **Assinatura/destaque** (`--font-display`): Alex Brush — cursivo próximo
  ao traço manuscrito do monograma "en".
- **Títulos** (`--font-heading`): Poppins — geométrica e confiante, no
  espírito do wordmark "CONTABILIDADE" em caixa alta.
- **Corpo de texto** (`--font-body`): Inter — leitura confortável em tela.
- **Citações/depoimentos** (`--font-quote`): Playfair Display itálica — tom
  editorial para a seção "Sobre".

### Pergunta de reconhecimento
*"Se eu retirasse o nome e o logo da publicação, quais elementos fariam
alguém reconhecer que aquela arte pertence à EN Contábil?"*

Resposta com base no material analisado: a combinação **azul petróleo +
dourado**; o tom de voz em primeira pessoa, informal e bem-humorado, falando
diretamente com o MEI sobre problemas reais (DAS atrasado, prazos, malha
fina); fotos reais de bastidor (não banco de imagens) do dia a dia da
contadora; texto grande sobreposto direto na foto (não em card separado); e
o uso recorrente de emojis no fechamento da legenda.

## 2. Conteúdo — confirmado vs. não confirmado

**Confirmado a partir do Instagram:**
- Nome: ENContábil — Contabilidade e Gestão Empresarial
- Cobertura: atuação em todo o Brasil | Online & Presencial
- Localização (geotag de publicação): Oriximiná, Pará, Brasil
- Perfis citados na bio: `@ellen_panttoja`, `@nara_martinsdiniz`
- Temas recorrentes no conteúdo: guias DAS em atraso, parcelamento de
  débitos do MEI, prazo de declaração de Imposto de Renda, fiscalização da
  Receita Federal sobre faturamento do MEI

**Confirmado diretamente pelo cliente nesta conversa:**
- WhatsApp da equipe:
  - Nara Martins — +55 93 99205-7227
  - Ellen Oliveira — +55 93 99239-0237
- Posicionamento: contabilidade e gestão empresarial para pequenos
  negócios em geral — **não exclusivo para MEI**, ainda que o MEI seja um
  público de destaque forte (correção feita a pedido do cliente; a versão
  inicial havia colocado o MEI como foco único, o que não reflete o
  posicionamento real).

**NÃO confirmado — não foi inventado, está deixado como pendência
configurável em `js/config.js`:**
- Telefone fixo / e-mail / endereço completo / horário de funcionamento
- Site/domínio oficial (o `index.html` usa `encontabil.com.br` como
  placeholder de SEO — **trocar pelo domínio real antes de publicar**)
- Lista oficial de serviços com nomes/preços (a lista atual foi **inferida**
  do conteúdo dos posts, sinalizado como tal no próprio config)
- Depoimentos, números de clientes, tempo de mercado, certificações

Assim que os dados restantes forem confirmados, basta preenchê-los em
`js/config.js` — o site já está preparado para exibi-los automaticamente.

### Sobre o posicionamento "totalmente dinâmico"

Todo o texto de hero, "Sobre", "Para quem é" e o banner de conversão é
renderizado via `js/main.js` a partir de `js/config.js` (funções
`renderCopy`/`renderTeam`) — não é preciso editar `index.html` para ajustar
ênfase de posicionamento, trocar contatos da equipe ou atualizar serviços;
tudo isso vive em um único arquivo de configuração.

## 3. Estrutura do projeto

```
en-contabil-landing/
├── index.html
├── css/
│   ├── variables.css   # design tokens
│   └── style.css
├── js/
│   ├── config.js       # configuração central (textos, contatos, serviços)
│   └── main.js         # menu, scroll reveal, montagem dos cards via config
├── assets/
│   ├── logo/           # logo real recortado do print + variações de tamanho
│   └── og/             # imagem de compartilhamento (Open Graph)
├── robots.txt
├── sitemap.xml
└── README.md
```

Sem framework/build step — HTML/CSS/JS puro, carregamento rápido, fácil de
hospedar em qualquer serviço estático (Netlify, Vercel, GitHub Pages, cPanel).

## 4. Decisões técnicas

- **Mobile-first**, com menu hambúrguer, CTA de WhatsApp fixo (FAB) e cards
  em coluna única no mobile.
- **Acessibilidade**: skip-link, foco visível (outline dourado), HTML
  semântico, `<details>` nativo no FAQ, contraste verificado nos textos
  sobre fundo azul/dourado, respeita `prefers-reduced-motion`.
- **Sem JS = conteúdo visível**: as animações de scroll-reveal só ficam
  "escondidas até revelar" quando o JavaScript roda de fato (classe `js` é
  adicionada por um script inline); sem JS, tudo aparece normalmente.
- **SEO**: title/description/OG/Twitter card, `schema.org` (`AccountingService`,
  só com dados confirmados — sem telefone/endereço inventados),
  `sitemap.xml`, `robots.txt`.
- **Performance**: sem dependências externas além das Google Fonts
  (pré-conectadas), imagens do logo em PNG otimizado, JS mínimo e sem
  bibliotecas.

## 5. Validação visual (Instagram × landing page)

Testado em navegador real (Chromium/Playwright) em desktop (1440px) e
mobile (390px):

| Elemento | Instagram | Landing page |
|---|---|---|
| Cores | Azul `#055493` + dourado `#F2CC16` | Mesmas cores, medidas por pixel |
| Logo | Monograma "en" + arco + wordmark | Logo real recortado, sem distorção |
| Tom | Direto, próximo, focado no MEI | Copy mantém a mesma linguagem |
| Composição | Foto real + texto grande sobreposto | Hero com anéis dourados ecoando o arco do logo, texto grande sobre fundo escuro |

## 6. Pendências / próximos passos recomendados

1. Confirmar e preencher e-mail, endereço e horário em `js/config.js`
   (WhatsApp da equipe já preenchido).
2. Confirmar domínio oficial e atualizar `canonical`, OG e `sitemap.xml`.
3. Validar a lista de serviços com a EN Contábil (a atual foi inferida do
   conteúdo público, não é uma lista oficial).
4. Se houver um manual de marca ou arquivo vetorial do logo, substituir o
   PNG recortado por ele (melhor qualidade em qualquer tamanho).
5. Fotos reais adicionais do negócio (equipe, escritório) deixariam a seção
   "Sobre" mais forte — hoje ela usa apenas texto e uma citação.
