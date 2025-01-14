import { LegalClause } from '../legal-types'

export const baseClauses: LegalClause[] = [
  {
    id: "legal_info",
    title: "Información Legal y Datos Identificativos",
    content: [
      "En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), y del principio de transparencia del artículo 5 del Reglamento General de Protección de Datos (RGPD), se informa que el titular de este sitio web es:",
      "COMPANY_INFO",
      "Esta información, permanentemente accesible por medios electrónicos, cumple con los requisitos de veracidad, claridad y transparencia establecidos en la normativa vigente."
    ],
    type: "base",
    applicableTo: ["all"],
    required: true,
    regulations: ["LSSI-CE", "RGPD", "Digital Services Act"],
    order: 1,
    legalBasis: ["Art. 10 LSSI-CE", "Art. 5 RGPD", "Art. 16 DSA"],
    riskLevel: "high",
    compliance: [{
      regulation: "LSSI-CE",
      references: [{
        name: "Ley 34/2002",
        article: "Artículo 10",
        description: "Información general obligatoria",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758"
      }],
      requirements: [
        "Denominación social",
        "NIF/CIF",
        "Domicilio social",
        "Datos registrales",
        "Información de contacto",
        "Códigos de conducta adheridos"
      ],
      applicableSince: "2002-07-12",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "3.0",
      date: "2024-01-01",
      changes: [
        "Actualización DSA",
        "Requisitos de transparencia reforzados",
        "Inclusión de información sobre adhesión a códigos de conducta"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-07-01",
    warnings: [
      "Sanción hasta 150.000€ por información incompleta",
      "Actualización necesaria si cambian datos mercantiles"
    ],
    countrySpecific: {
      "España": {
        modifications: [
          "Incluir número de inscripción en Registro Mercantil",
          "Referencia a LSSI-CE específicamente"
        ],
        additionalRequirements: [
          "Información sobre colegiación profesional si aplica"
        ]
      }
    }
  },
  {
    id: "terms_of_use",
    title: "Condiciones de Uso y Responsabilidades",
    content: [
      "El acceso y uso de este sitio web atribuye la condición de USUARIO e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal desde el momento en que se accede. El usuario se compromete a utilizar el portal, sus servicios y contenidos sin contravenir la legislación vigente, la buena fe, los usos generalmente aceptados y el orden público.",
      "Queda prohibido el uso con fines ilícitos o lesivos contra COMPANY_NAME o terceros, o que pudieran causar perjuicio o impedir el normal funcionamiento del sitio web.",
      "COMPANY_NAME no asume responsabilidad alguna derivada de:",
      "• La conexión o acceso a Internet",
      "• Los errores o retrasos en el acceso al sitio web por parte del USUARIO",
      "• La interrupción en el funcionamiento del sitio web o fallos informáticos",
      "• La presencia de virus o programas maliciosos en el sitio web",
      "• El uso ilícito, negligente, fraudulento o contrario a este Aviso Legal",
      "• La falta de disponibilidad del sitio web por razones de mantenimiento u otras causas"
    ],
    type: "base",
    applicableTo: ["all"],
    required: true,
    regulations: ["LSSI-CE", "Código Civil", "RGPD"],
    order: 2,
    legalBasis: [
      "Art. 1258 Código Civil",
      "Art. 12-14 LSSI-CE"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "LSSI-CE",
      references: [{
        name: "Ley 34/2002",
        article: "Artículos 12-14",
        description: "Régimen de responsabilidad",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758"
      }],
      requirements: [
        "Definición clara de responsabilidades",
        "Limitaciones de uso",
        "Exención de responsabilidades",
        "Obligaciones del usuario"
      ],
      applicableSince: "2002-07-12",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.1",
      date: "2024-01-01",
      changes: [
        "Actualización de limitaciones de responsabilidad",
        "Inclusión de nuevos supuestos de exención"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-07-01",
    warnings: [
      "Necesaria actualización ante cambios en servicios",
      "Revisar tras incidentes de seguridad"
    ]
  },
  {
    id: "intellectual_property",
    title: "Propiedad Intelectual e Industrial",
    content: [
      "Todos los derechos de propiedad intelectual e industrial del sitio web, incluyendo pero no limitado a:",
      "• La estructura de navegación",
      "• El diseño gráfico y código fuente",
      "• Los textos, fotografías, gráficos, imágenes, videos, sonidos",
      "• Las marcas, logotipos, nombres comerciales y signos distintivos",
      "Son titularidad de COMPANY_NAME o de sus licenciantes, estando protegidos por la legislación nacional e internacional sobre propiedad intelectual e industrial.",
      "Queda expresamente prohibida la reproducción total o parcial de este sitio web y de cualquiera de sus contenidos sin el permiso expreso y por escrito de COMPANY_NAME.",
      "El usuario se compromete a respetar los derechos de Propiedad Intelectual e Industrial titularidad de COMPANY_NAME. Podrá visualizar los elementos del portal e incluso imprimirlos, copiarlos y almacenarlos en el disco duro de su ordenador o en cualquier otro soporte físico siempre y cuando sea, única y exclusivamente, para su uso personal y privado."
    ],
    type: "base",
    applicableTo: ["all"],
    required: true,
    regulations: [
      "Ley de Propiedad Intelectual",
      "Ley de Marcas",
      "Directiva 2001/29/CE"
    ],
    order: 3,
    legalBasis: [
      "RDL 1/1996 Ley de Propiedad Intelectual",
      "Ley 17/2001 de Marcas"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "LPI",
      references: [{
        name: "RDL 1/1996",
        article: "Artículos 17-23",
        description: "Derechos de explotación",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930"
      }],
      requirements: [
        "Identificación clara de titularidad",
        "Alcance de la protección",
        "Limitaciones de uso",
        "Acciones contra infracciones"
      ],
      applicableSince: "1996-04-12",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "3.0",
      date: "2024-01-01",
      changes: [
        "Actualización protección contenidos digitales",
        "Inclusión NFTs y activos digitales"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-07-01",
    warnings: [
      "Registro recomendado de contenidos originales",
      "Monitorización activa de infracciones"
    ]
  },
  {
    id: "data_protection",
    title: "Protección de Datos y Privacidad",
    content: [
      "En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos que:",
      "• El responsable del tratamiento es COMPANY_NAME",
      "• Finalidad: COMPANY_PURPOSES",
      "• Base legal: COMPANY_LEGAL_BASIS",
      "• Conservación: COMPANY_RETENTION",
      "• Destinatarios: COMPANY_RECIPIENTS",
      "• Transferencias internacionales: COMPANY_TRANSFERS",
      "Derechos: Puede ejercer sus derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad contactando con nuestro Delegado de Protección de Datos en: DPO_EMAIL",
      "Para más información detallada sobre el tratamiento de sus datos personales, consulte nuestra Política de Privacidad."
    ],
    type: "base",
    applicableTo: ["all"],
    required: true,
    regulations: ["RGPD", "LOPDGDD", "ePrivacy"],
    order: 4,
    legalBasis: [
      "Art. 13-14 RGPD",
      "Art. 11 LOPDGDD"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "RGPD",
      references: [{
        name: "Reglamento (UE) 2016/679",
        article: "Artículos 13-14",
        description: "Información y transparencia",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32016R0679"
      }],
      requirements: [
        "Identidad del responsable",
        "Finalidades del tratamiento",
        "Base jurídica",
        "Plazos de conservación",
        "Derechos del interesado",
        "Procedimiento de ejercicio de derechos"
      ],
      applicableSince: "2018-05-25",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "4.0",
      date: "2024-01-01",
      changes: [
        "Actualización según nuevas directrices EDPB",
        "Inclusión de información sobre IA y decisiones automatizadas",
        "Refuerzo de información sobre transferencias internacionales"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-04-01",
    warnings: [
      "Sanciones de hasta 20M€ o 4% facturación global",
      "Revisión trimestral obligatoria",
      "Actualización necesaria ante cambios en tratamientos"
    ],
    countrySpecific: {
      "España": {
        modifications: [
          "Referencia específica a la LOPDGDD",
          "Mención al procedimiento ante la AEPD"
        ],
        additionalRequirements: [
          "Información sobre videovigilancia si aplica",
          "Información sobre sistemas de exclusión publicitaria"
        ]
      }
    }
  },
  {
    id: "cookies",
    title: "Cookies y Tecnologías Similares",
    content: [
      "Este sitio web utiliza cookies y tecnologías similares para:",
      "• Garantizar el correcto funcionamiento técnico (cookies técnicas)",
      "• Recordar sus preferencias (cookies de personalización)",
      "• Analizar su navegación (cookies analíticas)",
      "• Mostrar publicidad personalizada (cookies publicitarias)",
      "COMPANY_COOKIES_INFO",
      "Puede gestionar sus preferencias de cookies en cualquier momento a través de nuestro panel de configuración.",
      "Para información detallada sobre las cookies utilizadas, consulte nuestra Política de Cookies."
    ],
    type: "base",
    applicableTo: ["all"],
    required: true,
    regulations: ["RGPD", "LSSI-CE", "ePrivacy"],
    order: 5,
    legalBasis: [
      "Art. 22.2 LSSI-CE",
      "Directiva ePrivacy",
      "Guía AEPD sobre Cookies"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "LSSI-CE",
      references: [{
        name: "Ley 34/2002",
        article: "Artículo 22.2",
        description: "Cookies y tecnologías similares",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758"
      }],
      requirements: [
        "Información clara y completa",
        "Obtención del consentimiento",
        "Configuración granular",
        "Posibilidad de revocación",
        "Registro de consentimientos"
      ],
      applicableSince: "2002-07-12",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "3.5",
      date: "2024-01-01",
      changes: [
        "Actualización según guía EDPB sobre cookies",
        "Inclusión de nuevas tecnologías de tracking",
        "Refuerzo del mecanismo de consentimiento"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Revisión bimestral de tecnologías de tracking",
      "Actualización necesaria ante nuevas cookies",
      "Mantenimiento del registro de consentimientos"
    ]
  }
  // ... continuará con más cláusulas base ...
] 