interface SocialMedia {
  platform: string
  url: string
  handle: string
}

interface DataProcessor {
  name: string
  purpose: string
  country: string
  privacyPolicy: string
  adequacyMechanism?: string // e.g., "Standard Contractual Clauses", "Privacy Shield"
}

interface DataRetentionPolicy {
  category: string
  dataTypes: string[]
  retentionPeriod: string
  legalBasis: string
  justification: string
  deletionProcess: string
}

interface ThirdPartySharing {
  name: string
  purpose: string
  dataShared: string[]
  country: string
  privacyPolicy: string
  transferMechanism?: string
  contractDate: string
  dpaInPlace: boolean // Data Processing Agreement
}

interface AutomatedDecision {
  process: string
  purpose: string
  logicInvolved: string
  significance: string
  consequences: string
  optOutProcess: string
}

interface SecurityMeasure {
  category: 'technical' | 'organizational'
  name: string
  description: string
  implementation: string
  lastReview: string
  nextReview: string
}

// Primero definimos los tipos de empresa/web posibles
type BusinessType = 
  | 'ecommerce'
  | 'saas'
  | 'blog'
  | 'professional_services'
  | 'marketplace'
  | 'social_network'
  | 'educational'
  | 'healthcare'
  | 'financial'
  | 'gaming'

interface OptionalClause {
  id: string
  title: string
  content: string
  applicableTo: BusinessType[]
  required: boolean
  regulations?: string[] // e.g., ["GDPR", "LOPD", "LSSI"]
}

interface CompanyLegalInfo {
  // Basic Company Info
  name: string
  legalName: string // Razón social completa
  brandName?: string // Nombre comercial si es diferente
  website: string
  
  // Registration & Legal
  registration: {
    taxId: string // NIF/CIF
    registryName: string // Registro Mercantil
    registryNumber: string // Número de inscripción
    registryDate: string // Fecha de inscripción
    shareCapital?: string // Capital social
    businessType: string // Forma jurídica (S.L., S.A., etc.)
  }

  // Contact Information
  contact: {
    email: string
    phone: string
    fax?: string
    address: string
    postalCode: string
    city: string
    province: string
    country: string
    openingHours?: string
  }

  // Data Protection
  dpo: {
    name: string
    email: string
    phone: string
    address?: string
    appointmentDate: string
    registrationNumber?: string // Número de registro DPD en AEPD
  }

  // Digital Services
  digital: {
    domains: string[] // Todos los dominios de la empresa
    apps?: {
      name: string
      platform: string
      downloadUrl: string
      version: string
    }[]
    socialMedia: SocialMedia[]
  }

  // Data Processing
  dataProtection: {
    supervisoryAuthority: {
      name: string // e.g., "Agencia Española de Protección de Datos"
      website: string
      contact: string
    }
    dataRetentionPeriods: {
      category: string
      period: string
      justification: string
    }[]
    dataProcessors: DataProcessor[]
    technicalMeasures: string[] // Medidas de seguridad implementadas
    certifications?: string[] // ISO 27001, etc.

    // Detailed data retention policies
    retentionPolicies: {
      customers: DataRetentionPolicy[]
      employees: DataRetentionPolicy[]
      suppliers: DataRetentionPolicy[]
      marketing: DataRetentionPolicy[]
      website: DataRetentionPolicy[]
    }

    // Detailed third party sharing
    thirdPartySharing: {
      processors: ThirdPartySharing[]
      controllers: ThirdPartySharing[]
      recipients: ThirdPartySharing[]
    }

    // Automated decision making
    automatedDecisions: {
      processes: AutomatedDecision[]
      profilingActivities: {
        purpose: string
        categories: string[]
        logic: string
        impact: string
      }[]
    }

    // Detailed security measures
    security: {
      technical: SecurityMeasure[]
      organizational: SecurityMeasure[]
      reviews: {
        lastAudit: string
        nextAudit: string
        certifications: {
          name: string
          issuer: string
          validUntil: string
          scope: string
        }[]
      }
    }
  }

  // Professional Associations & Licenses
  professional?: {
    associations: {
      name: string
      membershipNumber: string
      verificationUrl?: string
    }[]
    licenses: {
      type: string
      number: string
      issuingAuthority: string
      validUntil: string
    }[]
  }

  // Insurance
  insurance?: {
    provider: string
    policyNumber: string
    coverage: string
    amount: string
  }

  // Banking Information
  banking?: {
    name: string
    iban: string
    swift: string
  }

  // Legal Representatives
  representatives: {
    role: string
    name: string
    appointmentDate: string
    contact?: {
      email: string
      phone: string
    }
  }[]

  // Compliance
  compliance: {
    gdpr: boolean
    cookiePolicy: boolean
    lssiCe: boolean
    aepd: boolean
    lastUpdate: string
  }

  businessType: BusinessType[]  // Una empresa puede ser de varios tipos
  
  legalClauses: {
    optionalClauses: {
      ecommerce?: {
        returns: boolean
        shipping: boolean
        payment: boolean
      }
      subscription?: {
        cancellation: boolean
        billing: boolean
        trialPeriod: boolean
      }
      userContent?: {
        moderation: boolean
        intellectualProperty: boolean
        userRights: boolean
      }
      professional?: {
        qualifications: boolean
        insurance: boolean
        regulations: boolean
      }
      marketplace?: {
        sellerVerification: boolean
        disputeResolution: boolean
        commissions: boolean
      }
      healthcare?: {
        medicalDisclaimer: boolean
        emergencyServices: boolean
        prescriptions: boolean
      }
      financial?: {
        investments: boolean
        risks: boolean
        licensing: boolean
      }
    }
  }
}

// Definir las cláusulas opcionales
export const optionalClauses: OptionalClause[] = [
  {
    id: "ecommerce_returns",
    title: "Política de Devoluciones",
    content: `De acuerdo con el Real Decreto Legislativo 1/2007, los clientes tienen derecho a desistir del contrato durante un período de 14 días naturales sin necesidad de justificación. El período de desistimiento expirará a los 14 días naturales del día en que usted o un tercero por usted indicado, distinto del transportista, adquirió la posesión material de los bienes...`,
    applicableTo: ['ecommerce', 'marketplace'],
    required: true,
    regulations: ["Consumer Rights Directive", "LSSI-CE"]
  },
  {
    id: "saas_service_level",
    title: "Acuerdo de Nivel de Servicio (SLA)",
    content: `Nos comprometemos a proporcionar un nivel de servicio con una disponibilidad del 99.9% del tiempo. El tiempo de inactividad no incluirá: (a) mantenimiento programado previamente notificado; (b) eventos de fuerza mayor...`,
    applicableTo: ['saas'],
    required: false,
    regulations: ["LSSI-CE"]
  },
  {
    id: "marketplace_seller_verification",
    title: "Verificación de Vendedores",
    content: `Todos los vendedores en nuestra plataforma pasan por un proceso de verificación que incluye: validación de identidad, verificación de dirección comercial, y revisión de antecedentes comerciales...`,
    applicableTo: ['marketplace'],
    required: true,
    regulations: ["AML", "KYC"]
  },
  {
    id: "healthcare_disclaimer",
    title: "Descargo de Responsabilidad Médica",
    content: `La información proporcionada en este sitio web es solo para fines informativos generales y no sustituye el consejo médico profesional. Siempre busque el consejo de su médico u otro proveedor de salud calificado...`,
    applicableTo: ['healthcare'],
    required: true,
    regulations: ["Healthcare Regulations", "HIPAA"]
  },
  {
    id: "financial_risk",
    title: "Advertencia de Riesgo Financiero",
    content: `Las inversiones conllevan riesgos, incluyendo la posible pérdida del capital invertido. El rendimiento pasado no garantiza resultados futuros...`,
    applicableTo: ['financial'],
    required: true,
    regulations: ["MiFID II", "CNMV"]
  },
  {
    id: "user_content",
    title: "Contenido Generado por Usuarios",
    content: `Los usuarios son los únicos responsables del contenido que publican. Nos reservamos el derecho de moderar, editar o eliminar contenido que viole nuestras normas comunitarias...`,
    applicableTo: ['social_network', 'blog', 'marketplace'],
    required: false,
    regulations: ["GDPR", "LSSI-CE"]
  },
  {
    id: "professional_qualifications",
    title: "Cualificaciones Profesionales",
    content: `Todos nuestros profesionales están debidamente cualificados y colegiados en sus respectivos colegios profesionales. Las certificaciones y números de colegiado están disponibles bajo petición...`,
    applicableTo: ['professional_services', 'healthcare'],
    required: true,
    regulations: ["Professional Services Regulations"]
  },
  {
    id: "educational_certification",
    title: "Certificación Educativa",
    content: `Los cursos y certificaciones ofrecidos no constituyen una titulación oficial reconocida por el Ministerio de Educación...`,
    applicableTo: ['educational'],
    required: true,
    regulations: ["Educational Regulations"]
  },
  {
    id: "gaming_age_restriction",
    title: "Restricción de Edad",
    content: `Este servicio está restringido a usuarios mayores de 18 años. Se realizarán verificaciones de edad según la normativa vigente...`,
    applicableTo: ['gaming'],
    required: true,
    regulations: ["Gaming Regulations", "COPPA"]
  }
]

export const companyLegalInfo: CompanyLegalInfo = {
  name: "Tu Empresa S.L.",
  legalName: "Tu Empresa Sociedad Limitada",
  website: "https://www.tuempresa.com",

  registration: {
    taxId: "B12345678",
    registryName: "Registro Mercantil de Madrid",
    registryNumber: "Tomo XXXX, Folio YYY, Hoja M-ZZZZZZ",
    registryDate: "2024-01-01",
    businessType: "Sociedad Limitada",
    shareCapital: "3.000€"
  },

  contact: {
    email: "info@tuempresa.com",
    phone: "+34 900 000 000",
    address: "Calle Ejemplo 123",
    postalCode: "28001",
    city: "Madrid",
    province: "Madrid",
    country: "España",
    openingHours: "Lunes a Viernes de 9:00 a 18:00"
  },

  dpo: {
    name: "Nombre del DPO",
    email: "dpo@tuempresa.com",
    phone: "+34 900 000 001",
    appointmentDate: "2024-01-01",
    registrationNumber: "DPD-2024/000001"
  },

  digital: {
    domains: ["tuempresa.com", "tuempresa.es"],
    apps: [
      {
        name: "Tu Empresa App",
        platform: "iOS/Android",
        downloadUrl: "https://app.tuempresa.com",
        version: "1.0.0"
      }
    ],
    socialMedia: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/company/tuempresa",
        handle: "@tuempresa"
      }
    ]
  },

  dataProtection: {
    supervisoryAuthority: {
      name: "Agencia Española de Protección de Datos",
      website: "https://www.aepd.es",
      contact: "https://www.aepd.es/es/contacto"
    },
    dataRetentionPeriods: [
      {
        category: "Datos de clientes",
        period: "5 años",
        justification: "Obligación legal fiscal"
      }
    ],
    dataProcessors: [
      {
        name: "Amazon Web Services",
        purpose: "Hosting",
        country: "Irlanda",
        privacyPolicy: "https://aws.amazon.com/privacy",
        adequacyMechanism: "Standard Contractual Clauses"
      }
    ],
    technicalMeasures: [
      "Cifrado de datos en tránsito y en reposo",
      "Autenticación de doble factor",
      "Firewalls",
      "Sistemas de detección de intrusiones"
    ],
    certifications: ["ISO 27001", "ISO 9001"],

    retentionPolicies: {
      customers: [
        {
          category: "Datos de cuenta",
          dataTypes: ["email", "nombre", "dirección", "teléfono"],
          retentionPeriod: "Duración de la relación + 5 años",
          legalBasis: "Ejecución del contrato y obligación legal",
          justification: "Art. 30 Código de Comercio",
          deletionProcess: "Anonimización automática tras período de retención"
        },
        {
          category: "Datos financieros",
          dataTypes: ["facturas", "transacciones", "datos bancarios"],
          retentionPeriod: "6 años",
          legalBasis: "Obligación legal",
          justification: "Ley General Tributaria",
          deletionProcess: "Eliminación segura tras período fiscal"
        }
      ],
      employees: [
        {
          category: "Documentación laboral",
          dataTypes: ["contratos", "nóminas", "evaluaciones"],
          retentionPeriod: "4 años",
          legalBasis: "Obligación legal",
          justification: "Estatuto de los Trabajadores",
          deletionProcess: "Archivo seguro y eliminación programada"
        }
      ],
      marketing: [
        {
          category: "Suscriptores newsletter",
          dataTypes: ["email", "preferencias"],
          retentionPeriod: "Hasta baja del servicio + 1 mes",
          legalBasis: "Consentimiento",
          justification: "Interés legítimo marketing",
          deletionProcess: "Eliminación inmediata tras solicitud de baja"
        }
      ],
      suppliers: [],
      website: []
    },

    thirdPartySharing: {
      processors: [
        {
          name: "Amazon Web Services",
          purpose: "Hosting y almacenamiento",
          dataShared: ["datos de usuario", "logs de sistema"],
          country: "Irlanda",
          privacyPolicy: "https://aws.amazon.com/privacy",
          transferMechanism: "Cláusulas Contractuales Tipo",
          contractDate: "2024-01-01",
          dpaInPlace: true
        },
        {
          name: "Mailchimp",
          purpose: "Email marketing",
          dataShared: ["email", "nombre", "preferencias"],
          country: "Estados Unidos",
          privacyPolicy: "https://mailchimp.com/legal/privacy",
          transferMechanism: "Cláusulas Contractuales Tipo",
          contractDate: "2024-01-01",
          dpaInPlace: true
        }
      ],
      controllers: [],
      recipients: []
    },

    automatedDecisions: {
      processes: [
        {
          process: "Evaluación de crédito",
          purpose: "Determinar límite de crédito para clientes",
          logicInvolved: "Algoritmo basado en historial de pagos y volumen de compras",
          significance: "Alta - Determina límites de crédito",
          consequences: "Puede afectar a límites de compra y condiciones de pago",
          optOutProcess: "Solicitud de revisión manual a través de atención al cliente"
        }
      ],
      profilingActivities: [
        {
          purpose: "Personalización de ofertas",
          categories: ["preferencias de compra", "historial de navegación"],
          logic: "Análisis de comportamiento y preferencias",
          impact: "Bajo - Solo afecta a recomendaciones de productos"
        }
      ]
    },

    security: {
      technical: [
        {
          category: "technical",
          name: "Cifrado de datos",
          description: "Cifrado AES-256 para datos en reposo y TLS 1.3 para transmisión",
          implementation: "A nivel de infraestructura y aplicación",
          lastReview: "2024-01-01",
          nextReview: "2024-07-01"
        }
      ],
      organizational: [
        {
          category: "organizational",
          name: "Control de acceso",
          description: "Política de mínimo privilegio y autenticación multifactor",
          implementation: "Procedimientos documentados y auditorías regulares",
          lastReview: "2024-01-01",
          nextReview: "2024-07-01"
        }
      ],
      reviews: {
        lastAudit: "2024-01-01",
        nextAudit: "2024-12-31",
        certifications: [
          {
            name: "ISO 27001",
            issuer: "Bureau Veritas",
            validUntil: "2025-12-31",
            scope: "Sistemas de información y procesos de negocio"
          }
        ]
      }
    }
  },

  representatives: [
    {
      role: "Administrador Único",
      name: "Nombre del Administrador",
      appointmentDate: "2024-01-01",
      contact: {
        email: "admin@tuempresa.com",
        phone: "+34 900 000 002"
      }
    }
  ],

  compliance: {
    gdpr: true,
    cookiePolicy: true,
    lssiCe: true,
    aepd: true,
    lastUpdate: "2024-03-01"
  },

  businessType: ['ecommerce', 'marketplace'],
  
  legalClauses: {
    optionalClauses: {
      ecommerce: {
        returns: true,
        shipping: true,
        payment: true
      },
      marketplace: {
        sellerVerification: true,
        disputeResolution: true,
        commissions: true
      }
    }
  }
} 

export function isClauseRequired(businessTypes: BusinessType[], clauseId: string): boolean {
  const clause = optionalClauses.find(c => c.id === clauseId)
  return clause?.required && businessTypes.some(type => clause.applicableTo.includes(type)) || false
}

export function getApplicableClauses(businessTypes: BusinessType[]): OptionalClause[] {
  return optionalClauses.filter(clause => 
    businessTypes.some(type => clause.applicableTo.includes(type))
  )
} 