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
  en: "Book a Call Now",
  pt: "Marcar Chamada de Solucoes para Restaurantes",
  es: "Reservar llamada de soluciones para restaurantes",
  fr: "Reserver un appel de solutions restaurant",
  de: "Restaurant-Loesungsgespraech buchen",
} as const;

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    metadataTitle:
      "The Galzu Universe | AI Integration & Restaurant Consulting",
    metadataDescription:
      "Built by Joao Filipe Catalao. AI integration and restaurant consulting focused on execution, operational optimization, systems, and profitability.",
    nav: [
      { href: "#services", label: "Services" },
      { href: "#process", label: "Process" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
    ],
    heroBadge: "The Galzu Universe",
    heroTitle: ["Strategy.", "Systems.", "Execution."],
    heroDescription:
      "Built by Joao Filipe Catalao. AI integration and restaurant consulting focused on execution, operational optimization, systems, and profitability.",
    heroPrimaryCta: calendlyCta.en,
    heroSecondaryCta: "View services",
    heroPoints: [
      "Execution over theory.",
      "Systems over chaos.",
      "Profitability over noise.",
    ],
    servicesTitle: "Services",
    servicesKicker: "Built to perform",
    services: [
      {
        title: "Galzu Builds for You - AI Integration",
        line: "AI Integration as Infrastructure",
        bestFor: "Best for: founders and ops teams",
        bullets: [
          "Custom workflow automation",
          "Internal AI agents",
          "Build landing pages",
          "AI-powered reporting dashboards",
          "Decision-support systems",
          "Process restructuring using AI",
          "Integration into existing teams",
        ],
        cta: "Book AI Integration Call",
        rich: {
          intro: [
            "AI is not a workshop. It is not a presentation. It is not ChatGPT prompts.",
            "It is infrastructure.",
          ],
          whatIDo:
            "I design and integrate AI systems directly into your business operations. This is done with your business, not delivered as theory.",
          whoFor: [
            "Founders scaling operations",
            "Companies drowning in repetitive tasks",
            "Teams stuck in manual processes",
            "Businesses ready to increase output without increasing headcount",
          ],
          process: [
            "Operational Diagnosis - We map friction and inefficiencies.",
            "System Architecture - We design the AI integration layer.",
            "Implementation - We build and deploy directly into your workflows.",
            "Optimization - We measure impact and refine.",
          ],
          positioning:
            "You are not buying AI consulting. You are installing an operational multiplier.",
        },
      },
      {
        title: "Restaurant Consulting",
        line: "Structure Protects Profit",
        bestFor: "Best for: restaurant owners and operators",
        bullets: [
          "Food cost control",
          "Menu engineering",
          "Contribution margin analysis",
          "Cost structure breakdown",
          "Kitchen workflow",
          "Service structure",
          "Standardization",
          "Process documentation",
          "Role clarity",
          "Performance structure",
          "Training flow",
          "Leadership alignment",
        ],
        cta: "Book Restaurant Strategy Call",
        rich: {
          intro: [
            "Restaurants do not fail from lack of passion.",
            "They fail from lack of operational clarity.",
          ],
          whatIDo:
            "This is about turning a reactive restaurant into a controlled business system.",
          optimizeGroups: [
            {
              title: "Financial Structure",
              items: [
                "Food cost control",
                "Menu engineering",
                "Contribution margin analysis",
                "Cost structure breakdown",
              ],
            },
            {
              title: "Operational Flow",
              items: [
                "Kitchen workflow",
                "Service structure",
                "Standardization",
                "Process documentation",
              ],
            },
            {
              title: "Team and Accountability",
              items: [
                "Role clarity",
                "Performance structure",
                "Training flow",
                "Leadership alignment",
              ],
            },
          ],
          whoFor: [
            "Independent restaurant owners",
            "Growing hospitality groups",
            "Operators with margin pressure",
            "Concepts preparing to scale",
          ],
          process: [
            "Diagnostic Review",
            "Financial and Operational Analysis",
            "System Redesign",
            "Implementation Support",
          ],
          positioning:
            "The goal is predictable margins, controlled costs, operational calm, and a scalable structure.",
        },
      },
    ],
    servicePanel: {
      whatIDo: "What I actually do",
      whatIOptimize: "What I optimize",
      whoFor: "Who this is for",
      process: "The process",
      positioning: "Positioning layer",
    },
    processTitle: "Process",
    steps: [
      {
        title: "Diagnose",
        text: "Map constraints and opportunities with brutal clarity.",
      },
      {
        title: "Architect",
        text: "Design systems that match your team and real operations.",
      },
      {
        title: "Implement",
        text: "Deploy tools, routines, and accountability at execution level.",
      },
      {
        title: "Optimize",
        text: "Measure outcomes, tighten bottlenecks, and protect margin.",
      },
    ],
    stepLabel: "Step",
    aboutTitle: "About",
    aboutText:
      "Joao Filipe Catalao combines systems thinking with creative execution. He helps teams build practical infrastructure, improve decisions, and turn strategy into measurable outcomes.",
    aboutCta: "Connect on LinkedIn",
    criticalTitle: "Estado Critico (Coming Soon)",
    criticalLine1: "Cultural branch of the Galzu Universe.",
    criticalLine2: "Live comedy and community, currently on standby.",
    contactTitle: "Contact",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@company.com",
      message: "Message",
      messagePlaceholder: "How can we help?",
      note: "This form is a placeholder.",
      sentMessage: "Message sent successfully.",
      errorMessage:
        "Error sending message. Please try again or use Calendly.",
      submit: "Submit",
    },
    contactCardTitle: "Ready to move with structure?",
    contactCardText:
      "Book directly on Calendly for AI integration or restaurant strategy. Start with priorities, constraints, and clear next actions.",
    contactCardCta: calendlyCta.en,
    footer: "The Galzu Universe",
  },
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
    services: [
      {
        title: "Galzu construye para ti - Integracion de IA",
        line: "Integracion de IA como infraestructura",
        bestFor: "Mejor para: founders y equipos de operaciones",
        bullets: [
          "Automatizacion de flujos de trabajo personalizados",
          "Agentes internos de IA",
          "Creacion de landing pages",
          "Dashboards de reportes con IA",
          "Sistemas de soporte a la decision",
          "Reestructuracion de procesos con IA",
          "Integracion en equipos existentes",
        ],
        cta: "Reservar llamada de Integracion de IA",
        rich: {
          intro: [
            "La IA no es un taller. No es una presentacion. No es prompts de ChatGPT.",
            "Es infraestructura.",
          ],
          whatIDo:
            "Diseno e integro sistemas de IA directamente en las operaciones del negocio. Esto se hace con tu empresa, no como teoria.",
          whoFor: [
            "Fundadores escalando operaciones",
            "Empresas ahogadas en tareas repetitivas",
            "Equipos atascados en procesos manuales",
            "Negocios listos para aumentar output sin aumentar headcount",
          ],
          process: [
            "Diagnostico Operativo - Mapeamos fricciones e ineficiencias.",
            "Arquitectura del Sistema - Disenamos la capa de integracion de IA.",
            "Implementacion - Construimos e integramos en tus flujos.",
            "Optimizacion - Medimos impacto y refinamos.",
          ],
          positioning:
            "No estas comprando consultoria de IA. Estas instalando un multiplicador operativo.",
        },
      },
      {
        title: "Consultoria para Restaurantes",
        line: "La estructura protege el beneficio",
        bestFor: "Mejor para: duenos y operadores de restaurantes",
        bullets: [
          "Control de food cost",
          "Ingenieria de menu",
          "Analisis de margen de contribucion",
          "Desglose de estructura de costos",
          "Flujo de cocina",
          "Estructura de servicio",
          "Estandarizacion",
          "Documentacion de procesos",
          "Claridad de roles",
          "Estructura de rendimiento",
          "Flujo de formacion",
          "Alineacion de liderazgo",
        ],
        cta: "Reservar llamada de estrategia para restaurantes",
        rich: {
          intro: [
            "Los restaurantes no fallan por falta de pasion.",
            "Fallan por falta de claridad operativa.",
          ],
          whatIDo:
            "Se trata de transformar un restaurante reactivo en un sistema de negocio controlado.",
          optimizeGroups: [
            {
              title: "Estructura Financiera",
              items: [
                "Control de food cost",
                "Ingenieria de menu",
                "Analisis de margen de contribucion",
                "Desglose de estructura de costos",
              ],
            },
            {
              title: "Flujo Operativo",
              items: [
                "Flujo de cocina",
                "Estructura de servicio",
                "Estandarizacion",
                "Documentacion de procesos",
              ],
            },
            {
              title: "Equipo y Responsabilidad",
              items: [
                "Claridad de roles",
                "Estructura de rendimiento",
                "Flujo de formacion",
                "Alineacion de liderazgo",
              ],
            },
          ],
          whoFor: [
            "Duenos de restaurantes independientes",
            "Grupos de hospitalidad en crecimiento",
            "Operadores con presion de margen",
            "Conceptos preparandose para escalar",
          ],
          process: [
            "Diagnostico",
            "Analisis Financiero y Operativo",
            "Rediseno del Sistema",
            "Soporte de Implementacion",
          ],
          positioning:
            "El objetivo es margen predecible, costos controlados, calma operativa y una estructura escalable.",
        },
      },
    ],
    servicePanel: {
      whatIDo: "Lo que realmente hago",
      whatIOptimize: "Lo que optimizo",
      whoFor: "Para quien es",
      process: "El proceso",
      positioning: "Capa de posicionamiento",
    },
    processTitle: "Proceso",
    steps: [
      {
        title: "Diagnosticar",
        text: "Mapear restricciones y oportunidades con claridad brutal.",
      },
      {
        title: "Arquitectar",
        text: "Disenar sistemas que encajen con tu equipo y operacion real.",
      },
      {
        title: "Implementar",
        text: "Aplicar herramientas, rutinas y responsabilidad a nivel de ejecucion.",
      },
      {
        title: "Optimizar",
        text: "Medir resultados, ajustar cuellos de botella y proteger margen.",
      },
    ],
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
    services: [
      {
        title: "Galzu construit pour vous - Integration IA",
        line: "Integration IA comme infrastructure",
        bestFor: "Ideal pour: founders et equipes operationnelles",
        bullets: [
          "Automatisation de workflows sur mesure",
          "Agents IA internes",
          "Creation de landing pages",
          "Tableaux de bord de reporting assistes par IA",
          "Systemes d aide a la decision",
          "Restructuration des processus avec IA",
          "Integration aux equipes existantes",
        ],
        cta: "Reserver un appel d Integration IA",
        rich: {
          intro: [
            "L IA n est pas un atelier. Ce n est pas une presentation. Ce n est pas des prompts ChatGPT.",
            "C est une infrastructure.",
          ],
          whatIDo:
            "Je conçois et integre des systemes IA directement dans vos operations. Cela se fait avec votre entreprise, pas comme simple theorie.",
          whoFor: [
            "Fondateurs en phase de scale",
            "Entreprises noyees dans les taches repetitives",
            "Equipes bloquees dans des processus manuels",
            "Entreprises pretes a augmenter l output sans augmenter les effectifs",
          ],
          process: [
            "Diagnostic Operationnel - Nous cartographions les frictions et inefficacites.",
            "Architecture Systeme - Nous concevons la couche d integration IA.",
            "Implementation - Nous construisons et deployons dans vos workflows.",
            "Optimisation - Nous mesurons l impact et raffinons.",
          ],
          positioning:
            "Vous n achetez pas du conseil IA. Vous installez un multiplicateur operationnel.",
        },
      },
      {
        title: "Conseil en restauration",
        line: "La structure protege la marge",
        bestFor: "Ideal pour: proprietaires et operateurs de restaurants",
        bullets: [
          "Controle du food cost",
          "Ingenierie de menu",
          "Analyse de marge de contribution",
          "Detail de la structure de couts",
          "Flux cuisine",
          "Structure de service",
          "Standardisation",
          "Documentation des processus",
          "Clarification des roles",
          "Cadre de performance",
          "Parcours de formation",
          "Alignement du leadership",
        ],
        cta: "Reserver un appel de strategie restaurant",
        rich: {
          intro: [
            "Les restaurants n echouent pas par manque de passion.",
            "Ils echouent par manque de clarte operationnelle.",
          ],
          whatIDo:
            "Il s agit de transformer un restaurant reactif en systeme d exploitation maitrise.",
          optimizeGroups: [
            {
              title: "Structure Financiere",
              items: [
                "Controle du food cost",
                "Ingenierie de menu",
                "Analyse de marge de contribution",
                "Detail de la structure de couts",
              ],
            },
            {
              title: "Flux Operationnel",
              items: [
                "Flux cuisine",
                "Structure de service",
                "Standardisation",
                "Documentation des processus",
              ],
            },
            {
              title: "Equipe et responsabilite",
              items: [
                "Clarification des roles",
                "Cadre de performance",
                "Parcours de formation",
                "Alignement du leadership",
              ],
            },
          ],
          whoFor: [
            "Proprietaires de restaurants independants",
            "Groupes hospitality en croissance",
            "Operateurs sous pression de marge",
            "Concepts en preparation de scale",
          ],
          process: [
            "Diagnostic",
            "Analyse Financiere et Operationnelle",
            "Refonte du Systeme",
            "Support d Implementation",
          ],
          positioning:
            "L objectif est une marge previsible, des couts controles, une operation sereine et une structure scalable.",
        },
      },
    ],
    servicePanel: {
      whatIDo: "Ce que je fais vraiment",
      whatIOptimize: "Ce que j optimise",
      whoFor: "Pour qui c est",
      process: "Le processus",
      positioning: "Couche de positionnement",
    },
    processTitle: "Processus",
    steps: [
      {
        title: "Diagnostiquer",
        text: "Cartographier contraintes et opportunites avec une clarte totale.",
      },
      {
        title: "Architecturer",
        text: "Concevoir des systemes adaptes a votre equipe et vos operations reelles.",
      },
      {
        title: "Implementer",
        text: "Deployer outils, routines et responsabilite au niveau execution.",
      },
      {
        title: "Optimiser",
        text: "Mesurer les resultats, resserrer les goulets et proteger la marge.",
      },
    ],
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
    services: [
      {
        title: "Galzu baut fuer Sie - KI-Integration",
        line: "KI-Integration als Infrastruktur",
        bestFor: "Am besten fuer: founders und Ops-Teams",
        bullets: [
          "Individuelle Workflow-Automatisierung",
          "Interne KI-Agenten",
          "Erstellung von Landingpages",
          "KI-gestuetzte Reporting-Dashboards",
          "Entscheidungsunterstuetzungssysteme",
          "Prozess-Neustrukturierung mit KI",
          "Integration in bestehende Teams",
        ],
        cta: "KI-Integrationsgespraech buchen",
        rich: {
          intro: [
            "KI ist kein Workshop. Keine Praesentation. Keine ChatGPT-Prompts.",
            "Sie ist Infrastruktur.",
          ],
          whatIDo:
            "Ich entwerfe und integriere KI-Systeme direkt in Ihre Geschaeftsablaeufe. Das passiert mit Ihrem Unternehmen, nicht nur als Theorie.",
          whoFor: [
            "Founder beim Skalieren von Operations",
            "Unternehmen mit zu vielen repetitiven Aufgaben",
            "Teams, die in manuellen Prozessen feststecken",
            "Unternehmen, die Output steigern wollen ohne mehr Personal",
          ],
          process: [
            "Operative Diagnose - Wir kartieren Reibung und Ineffizienzen.",
            "Systemarchitektur - Wir entwerfen die KI-Integrationsschicht.",
            "Implementierung - Wir bauen und integrieren direkt in Ihre Workflows.",
            "Optimierung - Wir messen Wirkung und verfeinern.",
          ],
          positioning:
            "Sie kaufen keine KI-Beratung. Sie installieren einen operativen Multiplikator.",
        },
      },
      {
        title: "Restaurantberatung",
        line: "Struktur schuetzt Profit",
        bestFor: "Am besten fuer: Restaurant-Eigentuemer und Operatoren",
        bullets: [
          "Food-Cost-Kontrolle",
          "Menu-Engineering",
          "Deckungsbeitragsanalyse",
          "Aufschluesselung der Kostenstruktur",
          "Kuechen-Workflow",
          "Service-Struktur",
          "Standardisierung",
          "Prozessdokumentation",
          "Rollenklarheit",
          "Leistungsstruktur",
          "Trainingsablauf",
          "Leadership-Alignment",
        ],
        cta: "Restaurant-Strategiegespraech buchen",
        rich: {
          intro: [
            "Restaurants scheitern nicht an fehlender Leidenschaft.",
            "Sie scheitern an fehlender operativer Klarheit.",
          ],
          whatIDo:
            "Es geht darum, ein reaktives Restaurant in ein kontrolliertes Business-System zu transformieren.",
          optimizeGroups: [
            {
              title: "Finanzstruktur",
              items: [
                "Food-Cost-Kontrolle",
                "Menu-Engineering",
                "Deckungsbeitragsanalyse",
                "Aufschluesselung der Kostenstruktur",
              ],
            },
            {
              title: "Operativer Ablauf",
              items: [
                "Kuechen-Workflow",
                "Service-Struktur",
                "Standardisierung",
                "Prozessdokumentation",
              ],
            },
            {
              title: "Team und Verantwortung",
              items: [
                "Rollenklarheit",
                "Leistungsstruktur",
                "Trainingsablauf",
                "Leadership-Alignment",
              ],
            },
          ],
          whoFor: [
            "Unabhaengige Restaurant-Eigentuemer",
            "Wachsende Hospitality-Gruppen",
            "Operatoren unter Margendruck",
            "Konzepte in Skalierungsvorbereitung",
          ],
          process: [
            "Diagnose",
            "Finanz- und Operationsanalyse",
            "System-Redesign",
            "Implementierungs-Support",
          ],
          positioning:
            "Das Ziel sind planbare Margen, kontrollierte Kosten, operative Ruhe und eine skalierbare Struktur.",
        },
      },
    ],
    servicePanel: {
      whatIDo: "Was ich wirklich mache",
      whatIOptimize: "Was ich optimiere",
      whoFor: "Fuer wen es ist",
      process: "Der Prozess",
      positioning: "Positionierungsebene",
    },
    processTitle: "Prozess",
    steps: [
      {
        title: "Diagnostizieren",
        text: "Engpaesse und Chancen mit kompromissloser Klarheit abbilden.",
      },
      {
        title: "Architektur bauen",
        text: "Systeme entwerfen, die zu Team und realen Ablaufen passen.",
      },
      {
        title: "Implementieren",
        text: "Tools, Routinen und Verantwortung auf Execution-Ebene ausrollen.",
      },
      {
        title: "Optimieren",
        text: "Ergebnisse messen, Bottlenecks straffen und Marge schuetzen.",
      },
    ],
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
