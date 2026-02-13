import type { Locale } from "@/lib/i18n";

type NavItem = {
  href: string;
  label: string;
};

type OptimizeGroup = {
  title: string;
  items: string[];
};

type RichCopy = {
  intro: string[];
  whatIDo: string;
  whoFor: string[];
  process: string[];
  positioning: string;
  optimizeGroups?: OptimizeGroup[];
};

export type ServiceCopy = {
  title: string;
  line: string;
  bestFor: string;
  bullets: string[];
  cta: string;
  rich: RichCopy;
};

export type StepCopy = {
  title: string;
  text: string;
};

export type SiteCopy = {
  metadataTitle: string;
  metadataDescription: string;
  nav: NavItem[];
  heroBadge: string;
  heroTitle: [string, string, string];
  heroDescription: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  heroPoints: string[];
  servicesTitle: string;
  servicesKicker: string;
  services: ServiceCopy[];
  servicePanel: {
    whatIDo: string;
    whatIOptimize: string;
    whoFor: string;
    process: string;
    positioning: string;
  };
  processTitle: string;
  steps: StepCopy[];
  stepLabel: string;
  aboutTitle: string;
  aboutText: string;
  aboutCta: string;
  criticalTitle: string;
  criticalLine1: string;
  criticalLine2: string;
  contactTitle: string;
  form: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    note: string;
    sentMessage: string;
    errorMessage: string;
    submit: string;
  };
  contactCardTitle: string;
  contactCardText: string;
  contactCardCta: string;
  footer: string;
};

const calendlyCta = {
  pt: "Marcar Chamada de Solucoes para Restaurantes",
  es: "Reservar llamada de soluciones para restaurantes",
  fr: "Reserver un appel de solutions restaurant",
  de: "Restaurant-Loesungsgespraech buchen",
} as const;

export const siteCopy: Record<Locale, SiteCopy> = {
  pt: {
    metadataTitle:
      "The Galzu Universe | Integracao de IA e Consultoria para Restaurantes",
    metadataDescription:
      "Criado por Joao Filipe Catalao. Integracao de IA e consultoria para restaurantes com foco em execucao, otimizacao operacional, sistemas e rentabilidade.",
    nav: [
      { href: "#services", label: "Servicos" },
      { href: "#process", label: "Processo" },
      { href: "#about", label: "Sobre" },
      { href: "#contact", label: "Contato" },
    ],
    heroBadge: "The Galzu Universe",
    heroTitle: ["Estrategia.", "Sistemas.", "Execucao."],
    heroDescription:
      "Criado por Joao Filipe Catalao. Integracao de IA e consultoria para restaurantes com foco em execucao, otimizacao operacional, sistemas e rentabilidade.",
    heroPrimaryCta: calendlyCta.pt,
    heroSecondaryCta: "Ver servicos",
    heroPoints: [
      "Execucao acima de teoria.",
      "Sistemas acima do caos.",
      "Rentabilidade acima do ruido.",
    ],
    servicesTitle: "Servicos",
    servicesKicker: "Criado para performar",
    services: [
      {
        title: "Galzu constroi para voce - Integracao de IA",
        line: "Integracao de IA como infraestrutura",
        bestFor: "Melhor para: founders e equipas de operacoes",
        bullets: [
          "Automacao de fluxos de trabalho personalizados",
          "Agentes de IA internos",
          "Criacao de landing pages",
          "Dashboards de relatorios com IA",
          "Sistemas de suporte a decisao",
          "Reestruturacao de processos com IA",
          "Integracao em equipas existentes",
        ],
        cta: "Marcar chamada de Integracao de IA",
        rich: {
          intro: [
            "IA nao e workshop. Nao e apresentacao. Nao e prompt de ChatGPT.",
            "E infraestrutura.",
          ],
          whatIDo:
            "Desenho e integro sistemas de IA diretamente na operacao do negocio. Isso e feito com o negocio, nao entregue apenas como teoria.",
          whoFor: [
            "Fundadores a escalar operacoes",
            "Empresas afogadas em tarefas repetitivas",
            "Equipas presas em processos manuais",
            "Negocios prontos para aumentar output sem aumentar headcount",
          ],
          process: [
            "Diagnostico Operacional - Mapeamos friccao e ineficiencias.",
            "Arquitetura de Sistema - Desenhamos a camada de integracao de IA.",
            "Implementacao - Construimos e implementamos nos teus fluxos.",
            "Otimizacao - Medimos impacto e refinamos.",
          ],
          positioning:
            "Nao esta a comprar consultoria de IA. Esta a instalar um multiplicador operacional.",
        },
      },
      {
        title: "Consultoria para Restaurantes",
        line: "Estrutura protege lucro",
        bestFor: "Melhor para: donos e operadores de restaurantes",
        bullets: [
          "Controlo de food cost",
          "Engenharia de menu",
          "Analise de margem de contribuicao",
          "Quebra da estrutura de custos",
          "Fluxo de cozinha",
          "Estrutura de servico",
          "Padronizacao",
          "Documentacao de processos",
          "Clareza de papeis",
          "Estrutura de performance",
          "Fluxo de treino",
          "Alinhamento de lideranca",
        ],
        cta: "Marcar chamada de estrategia para restaurantes",
        rich: {
          intro: [
            "Restaurantes nao falham por falta de paixao.",
            "Falham por falta de clareza operacional.",
          ],
          whatIDo:
            "Isto e sobre transformar um restaurante reativo num sistema de negocio controlado.",
          optimizeGroups: [
            {
              title: "Estrutura Financeira",
              items: [
                "Controlo de food cost",
                "Engenharia de menu",
                "Analise de margem de contribuicao",
                "Quebra da estrutura de custos",
              ],
            },
            {
              title: "Fluxo Operacional",
              items: [
                "Fluxo de cozinha",
                "Estrutura de servico",
                "Padronizacao",
                "Documentacao de processos",
              ],
            },
            {
              title: "Equipa e Responsabilidade",
              items: [
                "Clareza de papeis",
                "Estrutura de performance",
                "Fluxo de treino",
                "Alinhamento de lideranca",
              ],
            },
          ],
          whoFor: [
            "Donos de restaurantes independentes",
            "Grupos de hospitalidade em crescimento",
            "Operadores com pressao de margem",
            "Conceitos a preparar escala",
          ],
          process: [
            "Diagnostico",
            "Analise Financeira e Operacional",
            "Redesenho do Sistema",
            "Suporte de Implementacao",
          ],
          positioning:
            "O objetivo e margem previsivel, custos controlados, calma operacional e estrutura escalavel.",
        },
      },
    ],
    servicePanel: {
      whatIDo: "O que eu realmente faco",
      whatIOptimize: "O que eu otimizo",
      whoFor: "Para quem e",
      process: "O processo",
      positioning: "Camada de posicionamento",
    },
    processTitle: "Processo",
    steps: [
      {
        title: "Diagnosticar",
        text: "Mapear restricoes e oportunidades com clareza brutal.",
      },
      {
        title: "Arquitetar",
        text: "Desenhar sistemas que combinam com a tua equipa e operacao real.",
      },
      {
        title: "Implementar",
        text: "Aplicar ferramentas, rotinas e responsabilidade ao nivel de execucao.",
      },
      {
        title: "Otimizar",
        text: "Medir resultados, apertar gargalos e proteger margem.",
      },
    ],
    stepLabel: "Passo",
    aboutTitle: "Sobre",
    aboutText:
      "Joao Filipe Catalao combina pensamento sistemico com execucao criativa. Ajuda equipas a criar infraestrutura pratica, melhorar decisoes e transformar estrategia em resultados mensuraveis.",
    aboutCta: "Conectar no LinkedIn",
    criticalTitle: "Estado Critico (Em breve)",
    criticalLine1: "Ramo cultural do Galzu Universe.",
    criticalLine2:
      "Comedia ao vivo e comunidade, atualmente em modo de espera.",
    contactTitle: "Contato",
    form: {
      name: "Nome",
      namePlaceholder: "O teu nome",
      email: "Email",
      emailPlaceholder: "voce@empresa.com",
      message: "Mensagem",
      messagePlaceholder: "Como podemos ajudar?",
      note: "Este formulario e um placeholder.",
      sentMessage: "Mensagem enviada com sucesso.",
      errorMessage:
        "Erro ao enviar mensagem. Tenta novamente ou usa o Calendly.",
      submit: "Enviar",
    },
    contactCardTitle: "Pronto para mover com estrutura?",
    contactCardText:
      "Agenda diretamente no Calendly para integracao de IA ou estrategia para restaurantes. Comeca por prioridades, restricoes e proximas acoes claras.",
    contactCardCta: calendlyCta.pt,
    footer: "The Galzu Universe",
  },
  es: {
    metadataTitle:
      "The Galzu Universe | Integracion de IA y consultoria para restaurantes",
    metadataDescription:
      "Creado por Joao Filipe Catalao. Integracion de IA y consultoria para restaurantes enfocada en ejecucion, optimizacion operativa, sistemas y rentabilidad.",
    nav: [
      { href: "#services", label: "Servicios" },
      { href: "#process", label: "Proceso" },
      { href: "#about", label: "Sobre" },
      { href: "#contact", label: "Contacto" },
    ],
    heroBadge: "The Galzu Universe",
    heroTitle: ["Estrategia.", "Sistemas.", "Ejecucion."],
    heroDescription:
      "Creado por Joao Filipe Catalao. Integracion de IA y consultoria para restaurantes enfocada en ejecucion, optimizacion operativa, sistemas y rentabilidad.",
    heroPrimaryCta: calendlyCta.es,
    heroSecondaryCta: "Ver servicios",
    heroPoints: [
      "Ejecucion por encima de teoria.",
      "Sistemas por encima del caos.",
      "Rentabilidad por encima del ruido.",
    ],
    servicesTitle: "Servicios",
    servicesKicker: "Creado para rendir",
    services: [],
    servicePanel: {
      whatIDo: "Lo que realmente hago",
      whatIOptimize: "Lo que optimizo",
      whoFor: "Para quien es",
      process: "El proceso",
      positioning: "Capa de posicionamiento",
    },
    processTitle: "Proceso",
    steps: [],
    stepLabel: "Paso",
    aboutTitle: "Sobre",
    aboutText:
      "Joao Filipe Catalao combina pensamiento sistemico con ejecucion creativa. Ayuda a equipos a construir infraestructura practica, mejorar decisiones y convertir estrategia en resultados medibles.",
    aboutCta: "Conectar en LinkedIn",
    criticalTitle: "Estado Critico (Proximamente)",
    criticalLine1: "Rama cultural de Galzu Universe.",
    criticalLine2:
      "Comedia en vivo y comunidad, actualmente en pausa.",
    contactTitle: "Contacto",
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tu@empresa.com",
      message: "Mensaje",
      messagePlaceholder: "Como podemos ayudarte?",
      note: "Este formulario es un placeholder.",
      sentMessage: "Mensaje enviado con exito.",
      errorMessage:
        "Error al enviar el mensaje. Intentalo de nuevo o usa Calendly.",
      submit: "Enviar",
    },
    contactCardTitle: "Listo para avanzar con estructura?",
    contactCardText:
      "Reserva directamente en Calendly para integracion de IA o estrategia para restaurantes. Empieza con prioridades, restricciones y proximos pasos claros.",
    contactCardCta: calendlyCta.es,
    footer: "The Galzu Universe",
  },
  fr: {
    metadataTitle:
      "The Galzu Universe | Integration IA et conseil restaurant",
    metadataDescription:
      "Cree par Joao Filipe Catalao. Integration IA et conseil restaurant axes sur execution, optimisation operationnelle, systemes et rentabilite.",
    nav: [
      { href: "#services", label: "Services" },
      { href: "#process", label: "Processus" },
      { href: "#about", label: "A propos" },
      { href: "#contact", label: "Contact" },
    ],
    heroBadge: "The Galzu Universe",
    heroTitle: ["Strategie.", "Systemes.", "Execution."],
    heroDescription:
      "Cree par Joao Filipe Catalao. Integration IA et conseil restaurant axes sur execution, optimisation operationnelle, systemes et rentabilite.",
    heroPrimaryCta: calendlyCta.fr,
    heroSecondaryCta: "Voir les services",
    heroPoints: [
      "Execution avant la theorie.",
      "Systemes avant le chaos.",
      "Rentabilite avant le bruit.",
    ],
    servicesTitle: "Services",
    servicesKicker: "Concu pour performer",
    services: [],
    servicePanel: {
      whatIDo: "Ce que je fais vraiment",
      whatIOptimize: "Ce que j optimise",
      whoFor: "Pour qui c est",
      process: "Le processus",
      positioning: "Couche de positionnement",
    },
    processTitle: "Processus",
    steps: [],
    stepLabel: "Etape",
    aboutTitle: "A propos",
    aboutText:
      "Joao Filipe Catalao combine pensee systemique et execution creative. Il aide les equipes a construire une infrastructure pratique, ameliorer les decisions et transformer la strategie en resultats mesurables.",
    aboutCta: "Se connecter sur LinkedIn",
    criticalTitle: "Estado Critico (Bientot)",
    criticalLine1: "Branche culturelle de Galzu Universe.",
    criticalLine2:
      "Stand-up live et communaute, actuellement en pause.",
    contactTitle: "Contact",
    form: {
      name: "Nom",
      namePlaceholder: "Votre nom",
      email: "Email",
      emailPlaceholder: "vous@entreprise.com",
      message: "Message",
      messagePlaceholder: "Comment pouvons-nous aider?",
      note: "Ce formulaire est un placeholder.",
      sentMessage: "Message envoye avec succes.",
      errorMessage:
        "Erreur lors de l envoi du message. Reessayez ou utilisez Calendly.",
      submit: "Envoyer",
    },
    contactCardTitle: "Pret a avancer avec structure?",
    contactCardText:
      "Reservez directement sur Calendly pour integration IA ou strategie restaurant. Commencez par les priorites, contraintes et prochaines actions claires.",
    contactCardCta: calendlyCta.fr,
    footer: "The Galzu Universe",
  },
  de: {
    metadataTitle:
      "The Galzu Universe | KI-Integration und Restaurantberatung",
    metadataDescription:
      "Erstellt von Joao Filipe Catalao. KI-Integration und Restaurantberatung mit Fokus auf Umsetzung, operative Optimierung, Systeme und Profitabilitat.",
    nav: [
      { href: "#services", label: "Leistungen" },
      { href: "#process", label: "Prozess" },
      { href: "#about", label: "Ueber" },
      { href: "#contact", label: "Kontakt" },
    ],
    heroBadge: "The Galzu Universe",
    heroTitle: ["Strategie.", "Systeme.", "Umsetzung."],
    heroDescription:
      "Erstellt von Joao Filipe Catalao. KI-Integration und Restaurantberatung mit Fokus auf Umsetzung, operative Optimierung, Systeme und Profitabilitat.",
    heroPrimaryCta: calendlyCta.de,
    heroSecondaryCta: "Leistungen ansehen",
    heroPoints: [
      "Umsetzung vor Theorie.",
      "Systeme vor Chaos.",
      "Profitabilitat vor Laerm.",
    ],
    servicesTitle: "Leistungen",
    servicesKicker: "Fuer Performance gebaut",
    services: [],
    servicePanel: {
      whatIDo: "Was ich wirklich mache",
      whatIOptimize: "Was ich optimiere",
      whoFor: "Fuer wen es ist",
      process: "Der Prozess",
      positioning: "Positionierungsebene",
    },
    processTitle: "Prozess",
    steps: [],
    stepLabel: "Schritt",
    aboutTitle: "Ueber",
    aboutText:
      "Joao Filipe Catalao verbindet systemisches Denken mit kreativer Umsetzung. Er hilft Teams, praktische Infrastruktur aufzubauen, Entscheidungen zu verbessern und Strategie in messbare Ergebnisse zu verwandeln.",
    aboutCta: "Auf LinkedIn verbinden",
    criticalTitle: "Estado Critico (Demnaechst)",
    criticalLine1: "Kultureller Zweig des Galzu Universe.",
    criticalLine2:
      "Live-Comedy und Community, derzeit im Standby.",
    contactTitle: "Kontakt",
    form: {
      name: "Name",
      namePlaceholder: "Ihr Name",
      email: "E-Mail",
      emailPlaceholder: "sie@firma.com",
      message: "Nachricht",
      messagePlaceholder: "Wie koennen wir helfen?",
      note: "Dieses Formular ist ein Placeholder.",
      sentMessage: "Nachricht erfolgreich gesendet.",
      errorMessage:
        "Fehler beim Senden der Nachricht. Bitte erneut versuchen oder Calendly nutzen.",
      submit: "Senden",
    },
    contactCardTitle: "Bereit, strukturiert voranzugehen?",
    contactCardText:
      "Buchen Sie direkt auf Calendly fuer KI-Integration oder Restaurantstrategie. Starten Sie mit Prioritaeten, Einschraenkungen und klaren naechsten Schritten.",
    contactCardCta: calendlyCta.de,
    footer: "The Galzu Universe",
  },
};

const fallbackServices = siteCopy.pt.services;
const fallbackSteps = siteCopy.pt.steps;

siteCopy.es.services = fallbackServices;
siteCopy.fr.services = fallbackServices;
siteCopy.de.services = fallbackServices;
siteCopy.es.steps = fallbackSteps;
siteCopy.fr.steps = fallbackSteps;
siteCopy.de.steps = fallbackSteps;
