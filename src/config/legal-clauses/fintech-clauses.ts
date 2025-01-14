import { LegalClause } from '../legal-types'

export const fintechClauses: LegalClause[] = [
  {
    id: "financial_services_info",
    title: "Información sobre Servicios Financieros",
    content: [
      "En cumplimiento de la Ley 22/2007 sobre comercialización a distancia de servicios financieros y la normativa MiFID II:",
      "1. Información del proveedor:",
      "• Entidad: COMPANY_NAME",
      "• Autorización: COMPANY_LICENSE_NUMBER",
      "• Supervisor: COMPANY_REGULATOR",
      "2. Naturaleza de los servicios:",
      "• Descripción detallada de servicios financieros",
      "• Riesgos asociados",
      "• Nivel de complejidad de productos",
      "3. Costes y comisiones:",
      "• Desglose completo de costes",
      "• Comisiones aplicables",
      "• Impuestos y gastos adicionales",
      "4. Advertencias de riesgo:",
      "• Riesgo de pérdida de capital",
      "• Rentabilidades pasadas no garantizan futuras",
      "• Fluctuaciones de mercado"
    ],
    type: "optional",
    applicableTo: ["fintech", "financial_services"],
    required: true,
    regulations: [
      "MiFID II",
      "Ley 22/2007",
      "PRIIPs",
      "IDD"
    ],
    order: 1,
    legalBasis: [
      "Directiva 2014/65/UE",
      "Ley 22/2007"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "MiFID II",
      references: [{
        name: "Directiva 2014/65/UE",
        article: "Artículos 24-30",
        description: "Protección al inversor",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32014L0065"
      }],
      requirements: [
        "Información precontractual",
        "Evaluación de idoneidad",
        "Transparencia de costes",
        "Clasificación de clientes"
      ],
      applicableSince: "2018-01-03",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "3.0",
      date: "2024-01-01",
      changes: [
        "Actualización MiFID II",
        "Nuevos requisitos PRIIPs",
        "Mejora transparencia costes"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Revisión mensual obligatoria",
      "Actualización ante cambios regulatorios",
      "Monitorización continua de cumplimiento"
    ],
    countrySpecific: {
      "España": {
        modifications: [
          "Adaptación a normativa CNMV",
          "Requisitos Banco de España"
        ],
        additionalRequirements: [
          "Información FOGAIN",
          "Documentación KYC reforzada"
        ]
      }
    }
  },
  {
    id: "aml_kyc",
    title: "Prevención de Blanqueo de Capitales y KYC",
    content: [
      "En cumplimiento de la Ley 10/2010 de prevención del blanqueo de capitales y financiación del terrorismo:",
      "1. Proceso de identificación:",
      "• Documentación requerida",
      "• Verificación de identidad",
      "• Comprobación de autenticidad",
      "2. Obligaciones del cliente:",
      "• Proporcionar documentación veraz",
      "• Actualizar información",
      "• Declarar titular real",
      "3. Monitorización:",
      "• Seguimiento continuo de operaciones",
      "• Análisis de patrones sospechosos",
      "• Reporting a autoridades",
      "4. Medidas de diligencia debida:",
      "• Estándar",
      "• Reforzada",
      "• Simplificada",
      "5. Conservación de documentación:",
      "• Período mínimo de 10 años",
      "• Acceso autoridades competentes"
    ],
    type: "optional",
    applicableTo: ["fintech", "financial_services"],
    required: true,
    regulations: [
      "Ley 10/2010",
      "RD 304/2014",
      "Directiva UE 2015/849"
    ],
    order: 2,
    legalBasis: [
      "Ley 10/2010",
      "5AMLD"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "PBC/FT",
      references: [{
        name: "Ley 10/2010",
        article: "Artículos 3-16",
        description: "Medidas de diligencia debida",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2010-6737"
      }],
      requirements: [
        "Identificación formal",
        "Titular real",
        "Propósito de la relación",
        "Origen de fondos",
        "Monitorización continua"
      ],
      applicableSince: "2010-04-30",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "4.0",
      date: "2024-01-01",
      changes: [
        "Actualización 6AMLD",
        "Nuevos requisitos KYC digital",
        "Mejora procesos verificación"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-02-01",
    warnings: [
      "Sanciones muy graves hasta 10M€",
      "Revisión mensual obligatoria",
      "Auditoría externa anual"
    ]
  },
  {
    id: "payment_services",
    title: "Servicios de Pago y PSD2",
    content: [
      "En cumplimiento del Real Decreto-ley 19/2018 de servicios de pago y PSD2 (Directiva UE 2015/2366):",
      "1. Servicios ofrecidos:",
      "• Tipos de servicios de pago disponibles",
      "• Límites operativos",
      "• Horarios de procesamiento",
      "2. Seguridad y autenticación:",
      "• Autenticación reforzada (SCA)",
      "• Medidas de seguridad específicas",
      "• Gestión de acceso a terceros (TPPs)",
      "3. Derechos y obligaciones:",
      "• Responsabilidades del usuario",
      "• Obligaciones de la entidad",
      "• Procedimiento de reclamaciones",
      "4. Protección del usuario:",
      "• Fondo de garantía de depósitos",
      "• Seguro de responsabilidad civil",
      "• Medidas de salvaguarda de fondos"
    ],
    type: "optional",
    applicableTo: ["fintech", "payment_services"],
    required: true,
    regulations: [
      "PSD2",
      "RDL 19/2018",
      "RTS SCA"
    ],
    order: 3,
    legalBasis: [
      "Directiva UE 2015/2366",
      "RDL 19/2018"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "PSD2",
      references: [{
        name: "Directiva UE 2015/2366",
        article: "Artículos 66-98",
        description: "Servicios de pago y seguridad",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32015L2366"
      }],
      requirements: [
        "Implementación SCA",
        "APIs para TPPs",
        "Gestión de incidentes",
        "Reporting al supervisor"
      ],
      applicableSince: "2019-09-14",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Actualización requisitos SCA",
        "Nuevas APIs Open Banking",
        "Mejora gestión consentimientos"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-02-01",
    warnings: [
      "Auditoría técnica trimestral",
      "Monitorización 24/7",
      "Actualización continua de seguridad"
    ]
  },
  {
    id: "investor_protection",
    title: "Protección del Inversor y Transparencia",
    content: [
      "De conformidad con MiFID II y la normativa nacional de mercado de valores:",
      "1. Clasificación de clientes:",
      "• Minorista",
      "• Profesional",
      "• Contraparte elegible",
      "2. Evaluación de idoneidad:",
      "• Test de conveniencia",
      "• Test de idoneidad para asesoramiento",
      "• Perfilado de riesgo",
      "3. Información sobre productos:",
      "• Documentos de datos fundamentales (KID)",
      "• Riesgos específicos",
      "• Costes y gastos totales",
      "4. Mejor ejecución:",
      "• Política de mejor ejecución",
      "• Centros de ejecución",
      "• Informes de calidad",
      "5. Conflictos de interés:",
      "• Identificación",
      "• Gestión",
      "• Revelación"
    ],
    type: "optional",
    applicableTo: ["fintech", "investment_services"],
    required: true,
    regulations: [
      "MiFID II",
      "PRIIPs",
      "LMV"
    ],
    order: 4,
    legalBasis: [
      "Directiva 2014/65/UE",
      "Reglamento PRIIPs"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "MiFID II",
      references: [{
        name: "Directiva 2014/65/UE",
        article: "Artículos 24-30",
        description: "Protección del inversor",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32014L0065"
      }],
      requirements: [
        "Clasificación de clientes",
        "Tests de idoneidad",
        "Información precontractual",
        "Mejor ejecución"
      ],
      applicableSince: "2018-01-03",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "3.0",
      date: "2024-01-01",
      changes: [
        "Actualización requisitos ESG",
        "Nuevos KIDs PRIIPs",
        "Mejora transparencia costes"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Revisión trimestral obligatoria",
      "Actualización documentación PRIIPs",
      "Monitorización conflictos interés"
    ],
    countrySpecific: {
      "España": {
        modifications: [
          "Adaptación normativa CNMV",
          "Requisitos específicos LMV"
        ],
        additionalRequirements: [
          "Información FOGAIN",
          "Documentación en castellano"
        ]
      }
    }
  },
  {
    id: "asset_custody",
    title: "Custodia y Salvaguarda de Activos",
    content: [
      "De conformidad con MiFID II y la Ley del Mercado de Valores:",
      "1. Segregación de activos:",
      "• Separación de activos de clientes",
      "• Cuentas globales (ómnibus)",
      "• Conciliación periódica",
      "2. Subcustodios:",
      "• Criterios de selección",
      "• Responsabilidades",
      "• Cadena de custodia",
      "3. Protección de activos:",
      "• Fondo de Garantía de Inversiones",
      "• Seguros adicionales",
      "• Medidas de control interno",
      "4. Uso de activos de clientes:",
      "• Prohibición de uso sin consentimiento",
      "• Acuerdos de garantía",
      "• Préstamo de valores",
      "5. Informes y comunicaciones:",
      "• Estados periódicos",
      "• Movimientos y saldos",
      "• Eventos corporativos"
    ],
    type: "optional",
    applicableTo: ["fintech", "investment_services"],
    required: true,
    regulations: [
      "MiFID II",
      "LMV",
      "Circular 5/2009 CNMV"
    ],
    order: 5,
    legalBasis: [
      "Art. 40-43 RD 217/2008",
      "Directiva 2014/65/UE"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "MiFID II",
      references: [{
        name: "RD 217/2008",
        article: "Artículos 40-43",
        description: "Protección de instrumentos financieros",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2008-2824"
      }],
      requirements: [
        "Segregación de activos",
        "Control de subcustodios",
        "Conciliación de cuentas",
        "Reporting al supervisor"
      ],
      applicableSince: "2008-02-15",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.5",
      date: "2024-01-01",
      changes: [
        "Refuerzo medidas segregación",
        "Nuevos controles subcustodia",
        "Mejora reporting"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-02-01",
    warnings: [
      "Auditoría anual obligatoria",
      "Revisión mensual conciliaciones",
      "Control diario posiciones"
    ]
  },
  {
    id: "risk_management",
    title: "Gestión de Riesgos y Control Interno",
    content: [
      "En cumplimiento de la normativa prudencial y de control interno:",
      "1. Marco de gestión de riesgos:",
      "• Identificación de riesgos",
      "• Evaluación y medición",
      "• Monitorización continua",
      "• Reporting interno y externo",
      "2. Tipos de riesgos cubiertos:",
      "• Riesgo operacional",
      "• Riesgo tecnológico",
      "• Riesgo de crédito/contraparte",
      "• Riesgo de liquidez",
      "• Riesgo reputacional",
      "3. Controles internos:",
      "• Primera línea de defensa",
      "• Segunda línea de defensa",
      "• Tercera línea de defensa",
      "4. Plan de continuidad:",
      "• Escenarios contemplados",
      "• Procedimientos de actuación",
      "• Pruebas periódicas",
      "5. Gobierno corporativo:",
      "• Roles y responsabilidades",
      "• Comités de control",
      "• Reporting a la alta dirección"
    ],
    type: "optional",
    applicableTo: ["fintech", "financial_services"],
    required: true,
    regulations: [
      "CRD IV",
      "Circular 2/2016 BdE",
      "EBA Guidelines"
    ],
    order: 6,
    legalBasis: [
      "Directiva 2013/36/UE",
      "Reglamento UE 575/2013"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "CRD IV",
      references: [{
        name: "Directiva 2013/36/UE",
        article: "Artículos 74-96",
        description: "Gobierno corporativo y gestión de riesgos",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32013L0036"
      }],
      requirements: [
        "Marco de gestión de riesgos",
        "Sistema de control interno",
        "Gobierno corporativo",
        "Reporting supervisor"
      ],
      applicableSince: "2014-01-01",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "3.0",
      date: "2024-01-01",
      changes: [
        "Actualización marco riesgos ESG",
        "Nuevos controles operacionales",
        "Mejora reporting interno"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Revisión trimestral del marco",
      "Actualización ante nuevos riesgos",
      "Testing periódico controles"
    ]
  },
  {
    id: "regulatory_reporting",
    title: "Reporting Regulatorio y Obligaciones de Información",
    content: [
      "En cumplimiento de las obligaciones de reporting a supervisores:",
      "1. Reporting periódico:",
      "• Estados financieros",
      "• Ratios prudenciales",
      "• Información estadística",
      "• Incidentes operacionales",
      "2. Reporting específico:",
      "• Operaciones sospechosas (STOR)",
      "• Transacciones (MIFIR)",
      "• Incidentes de seguridad (PSD2)",
      "3. Plazos de presentación:",
      "• Diario: COMPANY_DAILY_REPORTING",
      "• Mensual: COMPANY_MONTHLY_REPORTING",
      "• Trimestral: COMPANY_QUARTERLY_REPORTING",
      "• Anual: COMPANY_ANNUAL_REPORTING",
      "4. Calidad de la información:",
      "• Procedimientos de verificación",
      "• Controles de calidad",
      "• Trazabilidad de datos"
    ],
    type: "optional",
    applicableTo: ["fintech", "financial_services"],
    required: true,
    regulations: [
      "MiFID II/MiFIR",
      "CRR",
      "EMIR",
      "PSD2"
    ],
    order: 7,
    legalBasis: [
      "Reglamento UE 600/2014",
      "Reglamento UE 575/2013"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "MiFIR",
      references: [{
        name: "Reglamento UE 600/2014",
        article: "Artículos 26-27",
        description: "Obligaciones de reporting de operaciones",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32014R0600"
      }],
      requirements: [
        "Reporting de operaciones",
        "Calidad de datos",
        "Plazos de presentación",
        "Conservación de información"
      ],
      applicableSince: "2018-01-03",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Nuevos requisitos reporting",
        "Mejora calidad datos",
        "Automatización procesos"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-02-01",
    warnings: [
      "Sanciones por retraso o error",
      "Revisión diaria de reporting",
      "Auditoría trimestral de calidad"
    ]
  },
  {
    id: "crypto_services",
    title: "Servicios de Criptoactivos (MiCA)",
    content: [
      "En cumplimiento del Reglamento MiCA y normativa relacionada:",
      "1. Servicios ofrecidos:",
      "• Custodia de criptoactivos",
      "• Plataforma de negociación",
      "• Ejecución de órdenes",
      "• Asesoramiento",
      "2. Protección del inversor:",
      "• Evaluación de idoneidad",
      "• Información sobre riesgos",
      "• Segregación de activos",
      "• Medidas de ciberseguridad",
      "3. Obligaciones operativas:",
      "• Registro de operaciones",
      "• Prevención de abuso de mercado",
      "• Gestión de conflictos",
      "4. Requisitos prudenciales:",
      "• Capital mínimo",
      "• Seguros de responsabilidad",
      "• Fondos propios",
      "5. Transparencia:",
      "• Información pre/post negociación",
      "• Reporting de operaciones",
      "• Libro de órdenes"
    ],
    type: "optional",
    applicableTo: ["fintech", "crypto_services"],
    required: true,
    regulations: [
      "MiCA",
      "DORA",
      "AML 6AMLD"
    ],
    order: 8,
    legalBasis: [
      "Reglamento UE 2023/1114",
      "Directiva UE 2018/843"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "MiCA",
      references: [{
        name: "Reglamento UE 2023/1114",
        article: "Artículos relevantes",
        description: "Regulación de mercados de criptoactivos",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32023R1114"
      }],
      requirements: [
        "Autorización previa",
        "Requisitos operativos",
        "Protección del inversor",
        "Prevención de abuso de mercado"
      ],
      applicableSince: "2024-12-30",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "1.0",
      date: "2024-01-01",
      changes: [
        "Implementación inicial MiCA",
        "Adaptación operativa",
        "Nuevos controles"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-02-01",
    warnings: [
      "Régimen transitorio hasta 2024",
      "Actualización continua requisitos",
      "Monitorización 24/7"
    ],
    countrySpecific: {
      "España": {
        modifications: [
          "Registro en Banco de España",
          "Requisitos CNMV"
        ],
        additionalRequirements: [
          "Circular 1/2022 CNMV",
          "Publicidad criptoactivos"
        ]
      }
    }
  },
  {
    id: "robo_advisory",
    title: "Servicios de Inversión Automatizada (Robo-Advisory)",
    content: [
      "En cumplimiento de MiFID II y las directrices de ESMA sobre automatización:",
      "1. Naturaleza del servicio:",
      "• Asesoramiento automatizado",
      "• Gestión discrecional algorítmica",
      "• Límites de la automatización",
      "2. Proceso de inversión:",
      "• Perfilado automatizado",
      "• Algoritmos de asignación",
      "• Rebalanceo automático",
      "• Supervisión humana",
      "3. Transparencia algorítmica:",
      "• Lógica de decisión",
      "• Factores considerados",
      "• Limitaciones del modelo",
      "4. Gobierno del servicio:",
      "• Testing de algoritmos",
      "• Control de sesgos",
      "• Auditoría periódica",
      "5. Información al cliente:",
      "• Riesgos específicos",
      "• Costes del servicio",
      "• Derechos del cliente"
    ],
    type: "optional",
    applicableTo: ["fintech", "investment_services"],
    required: true,
    regulations: [
      "MiFID II",
      "ESMA Guidelines",
      "AI Act"
    ],
    order: 9,
    legalBasis: [
      "Directiva 2014/65/UE",
      "ESMA/2012/387"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "MiFID II",
      references: [{
        name: "ESMA Guidelines",
        article: "Sección 2",
        description: "Automatización en servicios financieros",
        url: "https://www.esma.europa.eu/sites/default/files/library/guidelines_on_certain_aspects_of_the_mifid_ii_suitability_requirements.pdf"
      }],
      requirements: [
        "Gobierno de algoritmos",
        "Transparencia al cliente",
        "Control de calidad",
        "Supervisión humana"
      ],
      applicableSince: "2018-01-03",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Adaptación AI Act",
        "Mejora transparencia algoritmos",
        "Nuevos controles automatizados"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Revisión trimestral de algoritmos",
      "Testing continuo de modelos",
      "Monitorización de resultados"
    ]
  },
  {
    id: "open_banking",
    title: "Open Banking y APIs",
    content: [
      "En cumplimiento de PSD2 y los estándares RTS:",
      "1. Servicios ofrecidos:",
      "• Iniciación de pagos (PISP)",
      "• Información de cuentas (AISP)",
      "• Confirmación de fondos (CBPII)",
      "2. Interfaces de acceso:",
      "• APIs dedicadas",
      "• Mecanismo de contingencia",
      "• Documentación técnica",
      "3. Seguridad:",
      "• Autenticación reforzada",
      "• Certificados eIDAS",
      "• Encriptación de datos",
      "4. Gestión de consentimientos:",
      "• Obtención explícita",
      "• Renovación periódica",
      "• Revocación",
      "5. Disponibilidad y rendimiento:",
      "• SLAs comprometidos",
      "• Monitorización 24/7",
      "• Gestión de incidencias"
    ],
    type: "optional",
    applicableTo: ["fintech", "payment_services"],
    required: true,
    regulations: [
      "PSD2",
      "RTS SCA",
      "eIDAS"
    ],
    order: 10,
    legalBasis: [
      "Directiva UE 2015/2366",
      "Reglamento UE 2018/389"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "PSD2",
      references: [{
        name: "RTS SCA",
        article: "Artículos 30-36",
        description: "Interfaces de comunicación",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32018R0389"
      }],
      requirements: [
        "Disponibilidad APIs",
        "Rendimiento interfaces",
        "Gestión consentimientos",
        "Seguridad comunicaciones"
      ],
      applicableSince: "2019-09-14",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "3.0",
      date: "2024-01-01",
      changes: [
        "Nuevos estándares API",
        "Mejora monitorización",
        "Actualización seguridad"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-02-01",
    warnings: [
      "Monitorización continua APIs",
      "Testing trimestral contingencia",
      "Auditoría anual obligatoria"
    ]
  },
  {
    id: "credit_scoring",
    title: "Servicios de Scoring y Credit Reporting",
    content: [
      "En cumplimiento del RGPD y la normativa de crédito al consumo:",
      "1. Tratamiento de datos:",
      "• Fuentes de información",
      "• Categorías de datos",
      "• Período de conservación",
      "2. Modelos de scoring:",
      "• Variables utilizadas",
      "• Metodología de cálculo",
      "• Actualización de modelos",
      "3. Derechos del interesado:",
      "• Acceso al scoring",
      "• Rectificación de datos",
      "• Oposición al tratamiento",
      "4. Decisiones automatizadas:",
      "• Lógica aplicada",
      "• Intervención humana",
      "• Consecuencias evaluación",
      "5. Comunicación a sistemas de información crediticia:",
      "• Condiciones de inclusión",
      "• Plazos de permanencia",
      "• Procedimiento de rectificación"
    ],
    type: "optional",
    applicableTo: ["fintech", "credit_services"],
    required: true,
    regulations: [
      "RGPD",
      "Ley 16/2011",
      "Circular 1/2013 BdE"
    ],
    order: 11,
    legalBasis: [
      "Art. 22 RGPD",
      "Ley 16/2011"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "RGPD",
      references: [{
        name: "Reglamento UE 2016/679",
        article: "Artículo 22",
        description: "Decisiones individuales automatizadas",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32016R0679"
      }],
      requirements: [
        "Transparencia algoritmos",
        "Derechos ARCO-POL",
        "Intervención humana",
        "Evaluación impacto"
      ],
      applicableSince: "2018-05-25",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Actualización modelos scoring",
        "Mejora transparencia algoritmos",
        "Nuevos derechos interesados"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Evaluación impacto obligatoria",
      "Revisión trimestral modelos",
      "Auditoría protección datos"
    ]
  },
  {
    id: "digital_identity",
    title: "Identidad Digital y eIDAS",
    content: [
      "En cumplimiento del Reglamento eIDAS y su evolución (eIDAS 2.0):",
      "1. Servicios de identificación:",
      "• Verificación de identidad",
      "• Autenticación digital",
      "• Firma electrónica",
      "2. Niveles de seguridad:",
      "• Básico",
      "• Sustancial",
      "• Alto",
      "3. Medios de identificación:",
      "• Certificados cualificados",
      "• Identidad soberana (SSI)",
      "• Wallets digitales",
      "4. Interoperabilidad:",
      "• Reconocimiento transfronterizo",
      "• Estándares técnicos",
      "• Nodos eIDAS",
      "5. Protección de datos:",
      "• Minimización de datos",
      "• Medidas de seguridad",
      "• Conservación limitada"
    ],
    type: "optional",
    applicableTo: ["fintech", "digital_services"],
    required: true,
    regulations: [
      "eIDAS",
      "eIDAS 2.0",
      "RGPD"
    ],
    order: 12,
    legalBasis: [
      "Reglamento UE 910/2014",
      "Propuesta eIDAS 2.0"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "eIDAS",
      references: [{
        name: "Reglamento UE 910/2014",
        article: "Artículos relevantes",
        description: "Identificación electrónica",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32014R0910"
      }],
      requirements: [
        "Verificación identidad",
        "Niveles seguridad",
        "Interoperabilidad",
        "Protección datos"
      ],
      applicableSince: "2014-07-23",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "3.0",
      date: "2024-01-01",
      changes: [
        "Adaptación eIDAS 2.0",
        "Implementación SSI",
        "Nuevos niveles seguridad"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-02-01",
    warnings: [
      "Actualización eIDAS 2.0 pendiente",
      "Auditoría seguridad trimestral",
      "Monitorización continua"
    ]
  }
] 