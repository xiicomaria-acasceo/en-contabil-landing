/**
 * Configuração central — EN Contábil
 *
 * Edite aqui para atualizar textos, contatos e serviços em todo o site.
 * Textos de hero/sobre/público-alvo são renderizados via JS a partir
 * daqui (ver js/main.js) — não há necessidade de editar o HTML para
 * mudar posicionamento, ênfase ou contatos.
 *
 * Campos marcados como `null` são informações que ainda NÃO foram
 * confirmadas e não devem ser inventadas. Preencha com o dado real
 * assim que ele estiver disponível — o site já está preparado para
 * exibir os elementos automaticamente.
 */
window.ENC_CONFIG = {
  brand: {
    name: "EN Contábil",
    fullName: "ENContábil — Contabilidade e Gestão Empresarial",
    // Posicionamento geral: contabilidade e gestão empresarial para
    // pequenos negócios, com o MEI como destaque forte — não como público
    // exclusivo.
    tagline: "Contabilidade e Gestão Empresarial · Destaque em MEI e Simples Nacional",
    coverage: "Atuação em todo o Brasil · Online & Presencial",
    instagramHandle: "@encontabil__contabilidade",
    instagramUrl: "https://www.instagram.com/encontabil__contabilidade/",
  },

  hero: {
    eyebrow: "Contabilidade e Gestão Empresarial",
    // HTML simples permitido (ex.: <span class="text-accent">) — renderizado via innerHTML.
    headline: 'Contabilidade sem enrolação para o seu <span class="text-accent">negócio</span> crescer',
    subheadline:
      "Atendimento online para todo o Brasil e presencial em Oriximiná/PA — da rotina do Simples Nacional às particularidades de quem é MEI.",
  },

  about: {
    eyebrow: "Sobre a EN Contábil",
    heading: "Contabilidade e gestão pensadas para o seu negócio",
    lede:
      "A EN Contábil cuida da contabilidade e da gestão empresarial de pequenos negócios, com atendimento online para todo o Brasil e presencial em Oriximiná, no Pará — com destaque especial para quem é Microempreendedor Individual (MEI).",
    body:
      "O trabalho nasce da rotina real de quem cuida da contabilidade de pequenos negócios: resolver guias atrasadas, explicar prazos de forma simples e evitar que problemas com a Receita Federal cheguem a virar dor de cabeça para quem só quer empreender.",
  },

  audience: {
    eyebrow: "Para quem é",
    heading: "Feito para pequenos negócios — com destaque para o MEI",
    description:
      "Atendemos empresas do Simples Nacional que precisam de contabilidade e gestão financeira no dia a dia, com atenção especial ao microempreendedor individual (MEI) que precisa regularizar o CNPJ, colocar guias em dia ou entender a própria contabilidade sem juridiquês.",
  },

  ctaBanner: {
    heading: "Pronto para colocar a contabilidade do seu negócio em dia?",
    subheading: "Fale agora com a EN Contábil e resolva sua pendência.",
  },

  // Contatos confirmados diretamente pela EN Contábil.
  contact: {
    whatsapp: "5593992057227", // Nara Martins — usado como padrão nos CTAs gerais do site
    phone: null,
    email: null,
    address: null,       // ex.: "Rua Exemplo, 123 — Oriximiná/PA"
    hours: null,         // ex.: "Seg. a Sex., 8h às 18h"
    city: "Oriximiná, Pará",
  },

  // Equipe — cada pessoa com seu próprio WhatsApp direto.
  team: [
    {
      name: "Nara Martins",
      role: "Contadora",
      whatsapp: "5593992057227", // +55 93 99205-7227
    },
    {
      name: "Ellen Oliveira",
      role: "Contadora",
      whatsapp: "5593992390237", // +55 93 99239-0237
    },
  ],

  whatsappMessages: {
    default: "Olá! Conheci a EN Contábil pelo site e gostaria de saber mais sobre os serviços.",
    service: (serviceName) =>
      `Olá! Tenho interesse em ${serviceName} e gostaria de receber mais informações.`,
    team: (personName) =>
      `Olá, ${personName}! Conheci a EN Contábil pelo site e gostaria de falar sobre o meu negócio.`,
  },

  // Serviços identificados a partir do conteúdo público do Instagram
  // (legendas e temas recorrentes). Ajuste nomes/descrições conforme
  // a lista oficial de serviços da EN Contábil.
  services: [
    {
      icon: "gestao",
      name: "Contabilidade e Gestão Empresarial",
      description:
        "Organização contábil e financeira para pequenos negócios, com orientação de gestão no dia a dia.",
      benefit: "Mais clareza sobre a saúde financeira do seu negócio, com quem entende do assunto.",
    },
    {
      icon: "simples",
      name: "Simples Nacional",
      description:
        "Apuração e acompanhamento mensal das obrigações do Simples Nacional para pequenas empresas.",
      benefit: "Tranquilidade para focar no seu negócio enquanto a parte fiscal fica em dia.",
    },
    {
      icon: "mei",
      name: "Abertura e regularização de MEI",
      description:
        "Formalização do seu CNPJ como Microempreendedor Individual e regularização de pendências.",
      benefit: "Comece a emitir nota fiscal e a operar dentro da lei sem dor de cabeça.",
    },
    {
      icon: "das",
      name: "Guias DAS e parcelamento de débitos",
      description:
        "Emissão da guia DAS em dia e negociação de parcelamento para CNPJs com pendências acumuladas.",
      benefit: "Evite bloqueios e multas — resolva débitos atrasados com um plano que cabe no bolso.",
    },
    {
      icon: "ir",
      name: "Declaração de Imposto de Renda",
      description:
        "Apoio na declaração anual do Imposto de Renda dentro do prazo, evitando a malha fina.",
      benefit: "Declaração enviada certinha e no prazo, sem sustos com a Receita Federal.",
    },
  ],

  // Diferenciais observados de forma recorrente no conteúdo público.
  differentiators: [
    {
      title: "Atendimento humano e próximo",
      description: "Comunicação direta e sem burocracia, pensada para quem empreende.",
    },
    {
      title: "Online e presencial",
      description: "Atendimento em todo o Brasil pela internet, com presença local em Oriximiná/PA.",
    },
    {
      title: "Atenção especial ao MEI",
      description: "Contabilidade para o seu negócio como um todo, com know-how específico para as rotinas do microempreendedor individual.",
    },
  ],

  faq: [
    {
      q: "A EN Contábil atende só MEI ou qualquer pequeno negócio?",
      a: "Atendemos pequenos negócios em geral no Simples Nacional, com destaque especial para o Microempreendedor Individual (MEI).",
    },
    {
      q: "Vocês atendem qualquer estado do Brasil?",
      a: "Sim. O atendimento é feito online para todo o Brasil, com atendimento presencial disponível em Oriximiná/PA.",
    },
    {
      q: "Estou com guias DAS atrasadas, ainda dá pra resolver?",
      a: "Sim, débitos de MEI em aberto podem ser negociados e parcelados. Fale com a gente para avaliar o seu caso.",
    },
    {
      q: "Vocês ajudam com a declaração de Imposto de Renda?",
      a: "Sim, apoiamos a organização e o envio da declaração anual dentro do prazo.",
    },
  ],
};
