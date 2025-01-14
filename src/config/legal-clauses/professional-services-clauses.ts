import { LegalClause } from '../legal-types'

export const professionalServicesClauses: LegalClause[] = [
  {
    id: "professional_liability",
    title: "Responsabilidad Profesional",
    content: [
      "En cumplimiento de la normativa de servicios profesionales:",
      "1. Alcance servicios:",
      "• Descripción detallada",
      "• Limitaciones",
      "• Exclusiones",
      "• Entregables",
      "2. Estándares profesionales:",
      "• Cualificación requerida",
      "• Mejores prácticas",
      "• Códigos conducta",
      "• Actualización continua",
      "3. Responsabilidad civil:",
      "• Seguro profesional",
      "• Cobertura mínima",
      "• Exclusiones",
      "• Reclamaciones",
      "4. Confidencialidad:",
      "• Información cliente",
      "• Secreto profesional",
      "• Período protección",
      "• Excepciones legales",
      "5. Conflictos interés:",
      "• Identificación",
      "• Prevención",
      "• Gestión",
      "• Comunicación"
    ],
    type: "mandatory",
    applicableTo: ["professional_services"],
    required: true,
    regulations: [
      "Código Civil",
      "Normativa sectorial",
      "Códigos deontológicos"
    ],
    order: 1,
    legalBasis: [
      "Código Civil",
      "Ley servicios profesionales"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "Professional Services",
      references: [{
        name: "Normativa sectorial",
        article: "Artículos relevantes",
        description: "Requisitos ejercicio profesional",
        url: "https://www.boe.es/"
      }],
      requirements: [
        "Cualificación profesional",
        "Seguro responsabilidad",
        "Confidencialidad",
        "Estándares servicio"
      ],
      applicableSince: "2024-01-01",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "1.0",
      date: "2024-01-01",
      changes: [
        "Primera versión",
        "Requisitos básicos",
        "Estándares servicio"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Revisión anual seguro",
      "Actualización cualificaciones",
      "Control conflictos"
    ]
  },
  {
    id: "service_delivery",
    title: "Prestación del Servicio",
    content: [
      "En cumplimiento de estándares profesionales y mejores prácticas:",
      "1. Metodología:",
      "• Fases proyecto",
      "• Hitos clave",
      "• Control calidad",
      "• Gestión cambios",
      "2. Equipo profesional:",
      "• Roles y responsabilidades",
      "• Cualificaciones",
      "• Supervisión",
      "• Sustituciones",
      "3. Comunicación:",
      "• Informes progreso",
      "• Reuniones seguimiento",
      "• Gestión incidencias",
      "• Escalado problemas",
      "4. Entregables:",
      "• Especificaciones",
      "• Plazos entrega",
      "• Criterios aceptación",
      "• Revisiones",
      "5. Garantías:",
      "• Calidad servicio",
      "• Cumplimiento plazos",
      "• Conformidad requisitos",
      "• Medidas correctivas"
    ],
    type: "mandatory",
    applicableTo: ["professional_services"],
    required: true,
    regulations: [
      "ISO 9001",
      "Normativa sectorial",
      "Estándares profesionales"
    ],
    order: 2,
    legalBasis: [
      "Código Civil",
      "Normativa sectorial"
    ],
    riskLevel: "medium",
    compliance: [{
      regulation: "Quality Standards",
      references: [{
        name: "ISO 9001",
        article: "Requisitos",
        description: "Sistema gestión calidad",
        url: "https://www.iso.org/standard/62085.html"
      }],
      requirements: [
        "Procesos documentados",
        "Control calidad",
        "Mejora continua",
        "Satisfacción cliente"
      ],
      applicableSince: "2024-01-01",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "1.0",
      date: "2024-01-01",
      changes: [
        "Primera versión",
        "Metodología base",
        "Controles calidad"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-02-01",
    warnings: [
      "Revisión mensual proyectos",
      "Control plazos",
      "Evaluación calidad"
    ]
  },
  {
    id: "billing_fees",
    title: "Facturación y Honorarios Profesionales",
    content: [
      "En cumplimiento de la normativa fiscal y colegial:",
      "1. Estructura honorarios:",
      "• Tarifas horarias",
      "• Precios fijos",
      "• Success fees",
      "• Gastos reembolsables",
      "2. Proceso facturación:",
      "• Periodicidad",
      "• Desglose servicios",
      "• Plazos pago",
      "• Intereses demora",
      "3. Transparencia:",
      "• Presupuesto previo",
      "• Modificaciones",
      "• Costes adicionales",
      "• Información cliente",
      "4. Provisiones fondos:",
      "• Cálculo importe",
      "• Gestión fondos",
      "• Liquidación final",
      "5. Impagos:",
      "• Gestión recobro",
      "• Suspensión servicios",
      "• Garantías pago",
      "• Resolución contrato"
    ],
    type: "mandatory",
    applicableTo: ["professional_services"],
    required: true,
    regulations: [
      "Ley 2/2007",
      "Normativa colegial",
      "Ley 15/2007"
    ],
    order: 3,
    legalBasis: [
      "Ley 2/2007",
      "RD 1619/2012"
    ],
    riskLevel: "medium",
    compliance: [{
      regulation: "Professional Fees",
      references: [{
        name: "Ley 2/2007",
        article: "Artículos relevantes",
        description: "Sociedades profesionales",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-5584"
      }],
      requirements: [
        "Transparencia honorarios",
        "Facturación correcta",
        "Gestión fondos",
        "Documentación"
      ],
      applicableSince: "2007-03-16",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Actualización honorarios",
        "Mejora transparencia",
        "Nuevos procedimientos"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Revisión anual tarifas",
      "Control provisiones",
      "Seguimiento impagos"
    ]
  },
  {
    id: "confidentiality_data",
    title: "Confidencialidad y Protección de Datos",
    content: [
      "En cumplimiento del RGPD y secreto profesional:",
      "1. Alcance confidencialidad:",
      "• Información cliente",
      "• Documentación caso",
      "• Comunicaciones",
      "• Know-how",
      "2. Medidas protección:",
      "• Control accesos",
      "• Cifrado datos",
      "• Custodia documentos",
      "• Destrucción segura",
      "3. Equipo profesional:",
      "• Acuerdos confidencialidad",
      "• Formación específica",
      "• Acceso necesario",
      "• Responsabilidades",
      "4. Excepciones:",
      "• Obligaciones legales",
      "• Requerimientos judiciales",
      "• Consentimiento cliente",
      "5. Período protección:",
      "• Duración obligación",
      "• Post-terminación",
      "• Devolución información",
      "• Certificación destrucción"
    ],
    type: "mandatory",
    applicableTo: ["professional_services"],
    required: true,
    regulations: [
      "RGPD",
      "LOPDGDD",
      "Normativa sectorial"
    ],
    order: 4,
    legalBasis: [
      "RGPD",
      "Códigos deontológicos"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "Data Protection",
      references: [{
        name: "RGPD",
        article: "Artículo 9",
        description: "Tratamiento de categorías especiales de datos",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32016R0679"
      }],
      requirements: [
        "Medidas seguridad",
        "Confidencialidad",
        "Formación personal",
        "Documentación"
      ],
      applicableSince: "2018-05-25",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Nuevas medidas seguridad",
        "Actualización protocolos",
        "Mejora formación"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-02-01",
    warnings: [
      "Auditoría anual",
      "Revisión accesos",
      "Control documentación"
    ]
  }
  // ... continuará con más cláusulas servicios profesionales ...
] 