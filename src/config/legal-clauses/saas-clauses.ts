import { LegalClause } from '../legal-types'

export const saasClauses: LegalClause[] = [
  {
    id: "service_availability",
    title: "Disponibilidad y Nivel de Servicio",
    content: [
      "En cumplimiento de la normativa de servicios digitales y mejores prácticas:",
      "1. Niveles de servicio (SLA):",
      "• Disponibilidad comprometida",
      "• Tiempo de respuesta",
      "• Resolución incidencias",
      "• Mantenimientos programados",
      "2. Monitorización:",
      "• Supervisión 24/7",
      "• Métricas rendimiento",
      "• Alertas automáticas",
      "• Reporting periódico",
      "3. Gestión incidencias:",
      "• Clasificación severidad",
      "• Tiempos respuesta",
      "• Procedimientos escalado",
      "• Comunicación usuarios",
      "4. Continuidad servicio:",
      "• Plan recuperación",
      "• Backup datos",
      "• Sistemas redundantes",
      "• Testing periódico",
      "5. Compensaciones:",
      "• Incumplimiento SLA",
      "• Cálculo penalizaciones",
      "• Proceso reclamación"
    ],
    type: "mandatory",
    applicableTo: ["saas", "digital_services"],
    required: true,
    regulations: [
      "DORA",
      "NIS2",
      "ISO 27001"
    ],
    order: 1,
    legalBasis: [
      "Directiva NIS2",
      "Reglamento DORA"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "DORA",
      references: [{
        name: "Reglamento UE 2022/2554",
        article: "Artículos relevantes",
        description: "Resiliencia operativa digital sector financiero",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32022R2554"
      }],
      requirements: [
        "Monitorización continua",
        "Gestión incidencias",
        "Plan continuidad",
        "Reporting supervisores"
      ],
      applicableSince: "2025-01-17",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Actualización DORA",
        "Nuevos KPIs disponibilidad",
        "Mejora planes continuidad"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-02-01",
    warnings: [
      "Monitorización 24/7 obligatoria",
      "Testing trimestral DR/BC",
      "Auditoría anual SLA"
    ]
  },
  {
    id: "data_management",
    title: "Gestión y Protección de Datos",
    content: [
      "En cumplimiento del RGPD y normativa de servicios digitales:",
      "1. Ciclo de vida datos:",
      "• Recopilación",
      "• Procesamiento",
      "• Almacenamiento",
      "• Eliminación",
      "2. Medidas técnicas:",
      "• Cifrado en reposo",
      "• Cifrado en tránsito",
      "• Control accesos",
      "• Segregación datos",
      "3. Localización datos:",
      "• Ubicación servidores",
      "• Transferencias internacionales",
      "• Subprocesadores",
      "4. Derechos usuarios:",
      "• Acceso",
      "• Rectificación",
      "• Portabilidad",
      "• Supresión",
      "5. Retención datos:",
      "• Políticas retención",
      "• Backups",
      "• Archivado",
      "• Destrucción segura"
    ],
    type: "mandatory",
    applicableTo: ["saas", "digital_services"],
    required: true,
    regulations: [
      "RGPD",
      "LOPDGDD",
      "ISO 27701"
    ],
    order: 2,
    legalBasis: [
      "RGPD",
      "LOPDGDD"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "RGPD",
      references: [{
        name: "Reglamento UE 2016/679",
        article: "Artículos 24-32",
        description: "Responsable y encargado del tratamiento",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32016R0679"
      }],
      requirements: [
        "Medidas técnicas",
        "Medidas organizativas",
        "Registro actividades",
        "Evaluación impacto"
      ],
      applicableSince: "2018-05-25",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "3.0",
      date: "2024-01-01",
      changes: [
        "Nuevas medidas seguridad",
        "Actualización políticas",
        "Mejora controles"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Auditoría anual obligatoria",
      "Revisión trimestral controles",
      "Actualización EIPD"
    ]
  },
  {
    id: "security_cybersecurity",
    title: "Seguridad y Ciberseguridad",
    content: [
      "En cumplimiento de NIS2, DORA y estándares de seguridad:",
      "1. Seguridad técnica:",
      "• Arquitectura segura",
      "• Cifrado datos",
      "• Control accesos",
      "• Gestión vulnerabilidades",
      "2. Monitorización:",
      "• SOC 24/7",
      "• SIEM",
      "• IDS/IPS",
      "• Análisis amenazas",
      "3. Gestión incidentes:",
      "• Detección temprana",
      "• Respuesta incidentes",
      "• Análisis forense",
      "• Notificación obligatoria",
      "4. Continuidad negocio:",
      "• Plan recuperación",
      "• Sitios alternos",
      "• Backups cifrados",
      "• Testing periódico",
      "5. Auditorías:",
      "• Pentesting",
      "• Auditoría externa",
      "• Certificaciones",
      "• Compliance"
    ],
    type: "mandatory",
    applicableTo: ["saas", "digital_services"],
    required: true,
    regulations: [
      "NIS2",
      "DORA",
      "ISO 27001"
    ],
    order: 3,
    legalBasis: [
      "Directiva NIS2",
      "ISO 27001"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "NIS2",
      references: [{
        name: "Directiva NIS2",
        article: "Artículos relevantes",
        description: "Medidas de gestión de riesgos de ciberseguridad",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32022L2555"
      }],
      requirements: [
        "Gestión riesgos",
        "Medidas seguridad",
        "Notificación incidentes",
        "Auditorías periódicas"
      ],
      applicableSince: "2024-10-17",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Implementación NIS2",
        "Mejora controles",
        "Nuevos requisitos auditoría"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-02-01",
    warnings: [
      "Auditoría semestral obligatoria",
      "Pentesting trimestral",
      "Actualización continua"
    ]
  },
  {
    id: "api_integrations",
    title: "APIs e Integraciones",
    content: [
      "En cumplimiento de estándares de seguridad y mejores prácticas:",
      "1. Seguridad API:",
      "• Autenticación robusta",
      "• Control de acceso",
      "• Rate limiting",
      "• Validación inputs",
      "2. Documentación:",
      "• Especificación OpenAPI",
      "• Guías integración",
      "• Ejemplos código",
      "• Sandbox testing",
      "3. Versioning:",
      "• Gestión versiones",
      "• Deprecación APIs",
      "• Migración guiada",
      "• Compatibilidad",
      "4. Monitorización:",
      "• Performance APIs",
      "• Uso y patrones",
      "• Alertas automáticas",
      "• Logs detallados",
      "5. SLAs específicos:",
      "• Disponibilidad API",
      "• Latencia máxima",
      "• Tasa de errores",
      "• Soporte técnico"
    ],
    type: "optional",
    applicableTo: ["saas", "api_services"],
    required: true,
    regulations: [
      "ISO 27001",
      "OWASP API Security",
      "PCI-DSS"
    ],
    order: 4,
    legalBasis: [
      "ISO 27001",
      "Estándares industria"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "API Security",
      references: [{
        name: "OWASP API Security",
        article: "Top 10",
        description: "Riesgos seguridad API",
        url: "https://owasp.org/www-project-api-security/"
      }],
      requirements: [
        "Autenticación API",
        "Autorización",
        "Rate limiting",
        "Validación datos"
      ],
      applicableSince: "2023-01-01",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Nuevas medidas seguridad",
        "Mejora documentación",
        "Actualización versioning"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Testing continuo seguridad",
      "Monitorización 24/7",
      "Actualización documentación"
    ]
  },
  {
    id: "intellectual_property",
    title: "Propiedad Intelectual",
    content: [
      "En cumplimiento de la normativa de propiedad intelectual y software:",
      "1. Titularidad derechos:",
      "• Software y código",
      "• Interfaces y diseños",
      "• Documentación técnica",
      "• Marcas y logos",
      "2. Licencia de uso:",
      "• Alcance licencia",
      "• Restricciones uso",
      "• Sublicenciamiento",
      "• Período validez",
      "3. Datos y contenidos:",
      "• Propiedad cliente",
      "• Derechos derivados",
      "• Uso agregado",
      "• Anonimización",
      "4. Desarrollos específicos:",
      "• Customizaciones",
      "• Integraciones",
      "• APIs cliente",
      "• Derechos resultantes",
      "5. Confidencialidad:",
      "• Secretos comerciales",
      "• Know-how",
      "• Información técnica",
      "• Período protección"
    ],
    type: "mandatory",
    applicableTo: ["saas", "digital_services"],
    required: true,
    regulations: [
      "LPI",
      "Directiva 2009/24/CE",
      "Ley 1/2019"
    ],
    order: 7,
    legalBasis: [
      "RDL 1/1996 LPI",
      "Ley 1/2019"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "IP Rights",
      references: [{
        name: "LPI",
        article: "Artículos relevantes",
        description: "Protección jurídica programas ordenador",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930"
      }],
      requirements: [
        "Titularidad derechos",
        "Licencias uso",
        "Protección código",
        "Confidencialidad"
      ],
      applicableSince: "1996-04-23",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Actualización licencias",
        "Nuevas protecciones",
        "Mejora confidencialidad"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Registro propiedad",
      "Protección secretos",
      "Auditoría licencias"
    ]
  },
  {
    id: "service_termination",
    title: "Terminación del Servicio",
    content: [
      "En cumplimiento de la normativa de servicios digitales y protección datos:",
      "1. Causas terminación:",
      "• Finalización contrato",
      "• Incumplimiento",
      "• Fuerza mayor",
      "• Cese actividad",
      "2. Proceso migración:",
      "• Exportación datos",
      "• Formatos estándar",
      "• Período transición",
      "• Asistencia técnica",
      "3. Gestión datos:",
      "• Devolución datos",
      "• Borrado seguro",
      "• Certificación destrucción",
      "• Retención legal",
      "4. Obligaciones post-término:",
      "• Confidencialidad",
      "• Propiedad intelectual",
      "• Pagos pendientes",
      "5. Continuidad negocio:",
      "• Plan transición",
      "• Servicios alternativos",
      "• Minimización impacto"
    ],
    type: "mandatory",
    applicableTo: ["saas", "digital_services"],
    required: true,
    regulations: [
      "RGPD",
      "LSSICE",
      "Normativa sectorial"
    ],
    order: 8,
    legalBasis: [
      "RGPD Art. 28",
      "LSSICE"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "Data Protection",
      references: [{
        name: "RGPD",
        article: "Artículo 28",
        description: "Encargado del tratamiento",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32016R0679"
      }],
      requirements: [
        "Devolución datos",
        "Borrado seguro",
        "Asistencia migración",
        "Confidencialidad"
      ],
      applicableSince: "2018-05-25",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Mejora proceso migración",
        "Nuevos controles borrado",
        "Actualización obligaciones"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-02-01",
    warnings: [
      "Plan terminación actualizado",
      "Testing migración",
      "Verificación borrado"
    ]
  }
] 