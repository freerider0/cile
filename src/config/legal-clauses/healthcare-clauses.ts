import { LegalClause } from '../legal-types'

export const healthcareClauses: LegalClause[] = [
  {
    id: "health_data_protection",
    title: "Protección de Datos de Salud",
    content: [
      "En cumplimiento del RGPD y la LOPDGDD, con especial atención a datos de categoría especial (salud):",
      "1. Base legal del tratamiento:",
      "• Consentimiento explícito",
      "• Fines de medicina preventiva",
      "• Gestión servicios sanitarios",
      "• Investigación científica",
      "2. Medidas de seguridad reforzadas:",
      "• Cifrado de datos",
      "• Control de accesos",
      "• Registro de actividades",
      "• Evaluación de impacto",
      "3. Derechos específicos:",
      "• Acceso a historia clínica",
      "• Portabilidad de datos",
      "• Rectificación y cancelación",
      "4. Confidencialidad:",
      "• Secreto profesional",
      "• Deber de confidencialidad",
      "• Acceso por personal autorizado",
      "5. Conservación:",
      "• Plazos legales mínimos",
      "• Criterios de archivo",
      "• Destrucción segura"
    ],
    type: "optional",
    applicableTo: ["healthcare", "medical_services"],
    required: true,
    regulations: [
      "RGPD",
      "LOPDGDD",
      "Ley 41/2002"
    ],
    order: 1,
    legalBasis: [
      "Art. 9 RGPD",
      "Ley 41/2002"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "RGPD",
      references: [{
        name: "Reglamento UE 2016/679",
        article: "Artículo 9",
        description: "Tratamiento de categorías especiales de datos",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32016R0679"
      }],
      requirements: [
        "Consentimiento explícito",
        "Medidas técnicas reforzadas",
        "Evaluación de impacto",
        "Registro de actividades"
      ],
      applicableSince: "2018-05-25",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Actualización medidas seguridad",
        "Nuevos requisitos AEPD",
        "Mejora gestión consentimientos"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-02-01",
    warnings: [
      "Auditoría bianual obligatoria",
      "Revisión mensual de accesos",
      "Control diario de incidencias"
    ],
    countrySpecific: {
      "España": {
        modifications: [
          "Adaptación Ley 41/2002",
          "Requisitos autonómicos"
        ],
        additionalRequirements: [
          "Historia clínica digital",
          "Interoperabilidad SNS"
        ]
      }
    }
  },
  {
    id: "telemedicine_services",
    title: "Servicios de Telemedicina",
    content: [
      "En cumplimiento de la normativa sanitaria y de servicios digitales:",
      "1. Prestación del servicio:",
      "• Alcance y limitaciones",
      "• Protocolos clínicos",
      "• Situaciones de emergencia",
      "2. Requisitos técnicos:",
      "• Plataforma segura",
      "• Calidad de comunicación",
      "• Respaldo de datos",
      "• Plan de contingencia",
      "3. Responsabilidades profesionales:",
      "• Identificación del profesional",
      "• Cualificación y licencias",
      "• Seguro de responsabilidad",
      "4. Derechos del paciente:",
      "• Consentimiento informado",
      "• Privacidad consulta",
      "• Acceso a información",
      "5. Documentación clínica:",
      "• Registro de consultas",
      "• Historia clínica digital",
      "• Prescripción electrónica"
    ],
    type: "optional",
    applicableTo: ["healthcare", "telemedicine"],
    required: true,
    regulations: [
      "Ley 41/2002",
      "RGPD",
      "Directiva 2011/24/UE"
    ],
    order: 2,
    legalBasis: [
      "Ley 41/2002",
      "Directiva 2011/24/UE"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "Telemedicina",
      references: [{
        name: "Directiva 2011/24/UE",
        article: "Artículos relevantes",
        description: "Asistencia sanitaria transfronteriza",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32011L0024"
      }],
      requirements: [
        "Plataforma segura",
        "Protocolos clínicos",
        "Documentación digital",
        "Gestión emergencias"
      ],
      applicableSince: "2013-10-25",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Actualización protocolos",
        "Mejora seguridad",
        "Nuevos requisitos técnicos"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Revisión trimestral protocolos",
      "Actualización continua plataforma",
      "Monitorización 24/7"
    ]
  },
  {
    id: "clinical_research",
    title: "Investigación Clínica y Ensayos",
    content: [
      "En cumplimiento del Reglamento UE 536/2014 y Real Decreto 1090/2015:",
      "1. Requisitos éticos:",
      "• Aprobación comité ético",
      "• Consentimiento informado",
      "• Protección de participantes",
      "• Balance beneficio-riesgo",
      "2. Gestión de datos:",
      "• Protocolo de investigación",
      "• Registro de datos",
      "• Monitorización",
      "• Análisis estadístico",
      "3. Derechos participantes:",
      "• Información completa",
      "• Retirada voluntaria",
      "• Compensación daños",
      "• Confidencialidad",
      "4. Obligaciones investigadores:",
      "• Cualificación adecuada",
      "• Seguimiento protocolo",
      "• Registro acontecimientos",
      "• Informes periódicos",
      "5. Farmacovigilancia:",
      "• Notificación eventos adversos",
      "• Seguimiento seguridad",
      "• Medidas urgentes"
    ],
    type: "optional",
    applicableTo: ["healthcare", "research"],
    required: true,
    regulations: [
      "Reglamento UE 536/2014",
      "RD 1090/2015",
      "Declaración Helsinki"
    ],
    order: 3,
    legalBasis: [
      "Reglamento UE 536/2014",
      "RD 1090/2015"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "Clinical Trials",
      references: [{
        name: "Reglamento UE 536/2014",
        article: "Artículos relevantes",
        description: "Ensayos clínicos de medicamentos",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32014R0536"
      }],
      requirements: [
        "Autorización previa",
        "Consentimiento informado",
        "Monitorización seguridad",
        "Registro resultados"
      ],
      applicableSince: "2022-01-31",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Actualización requisitos UE",
        "Mejora protección datos",
        "Nuevos procedimientos"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-02-01",
    warnings: [
      "Auditoría anual obligatoria",
      "Revisión continua seguridad",
      "Monitorización eventos adversos"
    ]
  },
  {
    id: "medical_devices",
    title: "Dispositivos Médicos Conectados",
    content: [
      "En cumplimiento del Reglamento UE 2017/745 (MDR) y normativa de ciberseguridad:",
      "1. Requisitos dispositivos:",
      "• Marcado CE",
      "• Clasificación riesgo",
      "• Evaluación conformidad",
      "• Seguimiento post-comercialización",
      "2. Seguridad:",
      "• Ciberseguridad",
      "• Protección datos",
      "• Actualizaciones software",
      "• Gestión vulnerabilidades",
      "3. Conectividad:",
      "• Protocolos comunicación",
      "• Interoperabilidad",
      "• Backup datos",
      "• Continuidad servicio",
      "4. Documentación técnica:",
      "• Especificaciones",
      "• Validación clínica",
      "• Análisis riesgos",
      "• Instrucciones uso",
      "5. Vigilancia:",
      "• Incidentes graves",
      "• Acciones correctivas",
      "• Trazabilidad",
      "• Reporting autoridades"
    ],
    type: "optional",
    applicableTo: ["healthcare", "medical_devices"],
    required: true,
    regulations: [
      "MDR",
      "RGPD",
      "NIS2"
    ],
    order: 4,
    legalBasis: [
      "Reglamento UE 2017/745",
      "Directiva NIS2"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "MDR",
      references: [{
        name: "Reglamento UE 2017/745",
        article: "Anexo I",
        description: "Requisitos generales de seguridad y funcionamiento",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32017R0745"
      }],
      requirements: [
        "Seguridad dispositivos",
        "Evaluación clínica",
        "Sistema calidad",
        "Vigilancia post-comercialización"
      ],
      applicableSince: "2021-05-26",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Actualización MDR",
        "Nuevos requisitos ciberseguridad",
        "Mejora trazabilidad"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Auditoría semestral",
      "Monitorización continua",
      "Actualización documentación"
    ]
  },
  {
    id: "e_prescription",
    title: "Prescripción Electrónica",
    content: [
      "En cumplimiento del RD 1718/2010 y normativa de receta electrónica:",
      "1. Requisitos sistema:",
      "• Identificación prescriptor",
      "• Firma electrónica cualificada",
      "• Trazabilidad prescripción",
      "• Interoperabilidad SNS",
      "2. Seguridad:",
      "• Autenticación robusta",
      "• Cifrado comunicaciones",
      "• Control de accesos",
      "• Registro de operaciones",
      "3. Contenido prescripción:",
      "• Datos del paciente",
      "• Medicamento prescrito",
      "• Posología y duración",
      "• Instrucciones específicas",
      "4. Validación y dispensación:",
      "• Verificación prescripción",
      "• Control de duplicidades",
      "• Registro dispensación",
      "5. Conservación:",
      "• Período legal",
      "• Formato electrónico",
      "• Acceso autorizado"
    ],
    type: "optional",
    applicableTo: ["healthcare", "pharmacy"],
    required: true,
    regulations: [
      "RD 1718/2010",
      "Ley 16/2003",
      "RGPD"
    ],
    order: 5,
    legalBasis: [
      "RD 1718/2010",
      "Ley 16/2003 SNS"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "e-Prescription",
      references: [{
        name: "RD 1718/2010",
        article: "Artículos relevantes",
        description: "Receta médica y órdenes de dispensación",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2011-1013"
      }],
      requirements: [
        "Sistema electrónico seguro",
        "Firma electrónica cualificada",
        "Interoperabilidad",
        "Trazabilidad"
      ],
      applicableSince: "2011-01-21",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "3.0",
      date: "2024-01-01",
      changes: [
        "Actualización requisitos técnicos",
        "Mejora interoperabilidad",
        "Nuevas medidas seguridad"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-02-01",
    warnings: [
      "Auditoría semestral obligatoria",
      "Monitorización continua sistema",
      "Actualización certificados"
    ]
  },
  {
    id: "health_interoperability",
    title: "Interoperabilidad Sanitaria",
    content: [
      "En cumplimiento de la Directiva 2011/24/UE y estándares de interoperabilidad:",
      "1. Estándares técnicos:",
      "• HL7 FHIR",
      "• SNOMED CT",
      "• DICOM",
      "• IHE Profiles",
      "2. Intercambio de datos:",
      "• Historia clínica digital",
      "• Informes clínicos",
      "• Pruebas diagnósticas",
      "• Prescripciones",
      "3. Seguridad:",
      "• Identificación paciente",
      "• Control de accesos",
      "• Trazabilidad",
      "• Cifrado extremo a extremo",
      "4. Consentimientos:",
      "• Gestión de permisos",
      "• Acceso transfronterizo",
      "• Revocación",
      "5. Calidad datos:",
      "• Validación semántica",
      "• Completitud",
      "• Consistencia"
    ],
    type: "optional",
    applicableTo: ["healthcare", "medical_services"],
    required: true,
    regulations: [
      "Directiva 2011/24/UE",
      "RD 4/2010 ENI",
      "ISO 13606"
    ],
    order: 6,
    legalBasis: [
      "Directiva 2011/24/UE",
      "Ley 16/2003 SNS"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "eHealth",
      references: [{
        name: "Directiva 2011/24/UE",
        article: "Artículo 14",
        description: "Sanidad electrónica",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32011L0024"
      }],
      requirements: [
        "Estándares técnicos",
        "Interoperabilidad semántica",
        "Seguridad datos",
        "Identificación pacientes"
      ],
      applicableSince: "2013-10-25",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Nuevos estándares FHIR",
        "Mejora semantic interop",
        "Actualización seguridad"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Revisión anual estándares",
      "Testing periódico conexiones",
      "Monitorización calidad datos"
    ]
  },
  {
    id: "emergency_management",
    title: "Gestión de Emergencias Médicas",
    content: [
      "En cumplimiento de la normativa de urgencias y emergencias sanitarias:",
      "1. Protocolos de actuación:",
      "• Clasificación emergencias",
      "• Tiempos de respuesta",
      "• Coordinación servicios",
      "• Activación recursos",
      "2. Requisitos técnicos:",
      "• Sistema de comunicaciones",
      "• Geolocalización",
      "• Registro incidentes",
      "• Backup sistemas",
      "3. Personal sanitario:",
      "• Cualificación específica",
      "• Formación continua",
      "• Turnos y disponibilidad",
      "4. Documentación clínica:",
      "• Registro actuaciones",
      "• Historia clínica urgente",
      "• Transferencia información",
      "5. Coordinación:",
      "• Centros sanitarios",
      "• Servicios emergencia",
      "• Autoridades sanitarias"
    ],
    type: "optional",
    applicableTo: ["healthcare", "emergency_services"],
    required: true,
    regulations: [
      "RD 836/2012",
      "Ley 16/2003",
      "Normativa autonómica"
    ],
    order: 7,
    legalBasis: [
      "RD 836/2012",
      "Ley 16/2003 SNS"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "Emergency Services",
      references: [{
        name: "RD 836/2012",
        article: "Artículos relevantes",
        description: "Características técnicas, equipamiento sanitario y dotación de personal",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2012-7655"
      }],
      requirements: [
        "Protocolos actuación",
        "Equipamiento técnico",
        "Personal cualificado",
        "Sistemas comunicación"
      ],
      applicableSince: "2012-06-08",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Actualización protocolos",
        "Mejora sistemas técnicos",
        "Nuevos requisitos coordinación"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-02-01",
    warnings: [
      "Revisión mensual protocolos",
      "Testing semanal sistemas",
      "Simulacros periódicos"
    ]
  },
  {
    id: "digital_health",
    title: "Servicios de Salud Digital",
    content: [
      "En cumplimiento de la normativa de servicios sanitarios digitales:",
      "1. Servicios ofrecidos:",
      "• Consulta virtual",
      "• Monitorización remota",
      "• Apps salud",
      "• Wearables médicos",
      "2. Seguridad y privacidad:",
      "• Cifrado datos salud",
      "• Autenticación usuarios",
      "• Control accesos",
      "• Auditoría actividad",
      "3. Calidad servicio:",
      "• Disponibilidad 24/7",
      "• Tiempo respuesta",
      "• Backup sistemas",
      "• Plan contingencia",
      "4. Responsabilidades:",
      "• Límites servicio",
      "• Emergencias",
      "• Derivación presencial",
      "5. Documentación:",
      "• Registro actividad",
      "• Historia clínica digital",
      "• Informes seguimiento"
    ],
    type: "optional",
    applicableTo: ["healthcare", "digital_services"],
    required: true,
    regulations: [
      "RGPD",
      "MDR",
      "Ley 41/2002"
    ],
    order: 8,
    legalBasis: [
      "RGPD Art. 9",
      "MDR"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "Digital Health",
      references: [{
        name: "MDR",
        article: "Artículo 6",
        description: "Ventas a distancia",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32017R0745"
      }],
      requirements: [
        "Seguridad sistemas",
        "Protección datos salud",
        "Calidad servicio",
        "Documentación clínica"
      ],
      applicableSince: "2021-05-26",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Nuevos servicios digitales",
        "Mejora seguridad",
        "Actualización protocolos"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Monitorización 24/7",
      "Auditoría trimestral",
      "Actualización continua"
    ]
  },
  {
    id: "ai_healthcare",
    title: "Inteligencia Artificial en Salud",
    content: [
      "En cumplimiento del AI Act y normativa específica de IA en salud:",
      "1. Clasificación de riesgo:",
      "• Sistemas de alto riesgo",
      "• Evaluación conformidad",
      "• Requisitos específicos",
      "• Supervisión humana",
      "2. Transparencia algoritmica:",
      "• Explicabilidad decisiones",
      "• Sesgos y limitaciones",
      "• Documentación técnica",
      "• Registro de modelos",
      "3. Validación clínica:",
      "• Estudios clínicos",
      "• Evaluación rendimiento",
      "• Monitorización continua",
      "• Actualización modelos",
      "4. Responsabilidad:",
      "• Marco legal aplicable",
      "• Roles y obligaciones",
      "• Seguros específicos",
      "5. Derechos pacientes:",
      "• Información uso IA",
      "• Consentimiento específico",
      "• Decisiones automatizadas"
    ],
    type: "optional",
    applicableTo: ["healthcare", "ai_services"],
    required: true,
    regulations: [
      "AI Act",
      "MDR",
      "RGPD"
    ],
    order: 9,
    legalBasis: [
      "AI Act",
      "Art. 22 RGPD"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "AI Act",
      references: [{
        name: "AI Act",
        article: "Título III",
        description: "Sistemas de IA de alto riesgo",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A52021PC0206"
      }],
      requirements: [
        "Evaluación conformidad",
        "Gestión riesgos",
        "Supervisión humana",
        "Documentación técnica"
      ],
      applicableSince: "2024-01-01",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "1.0",
      date: "2024-01-01",
      changes: [
        "Implementación AI Act",
        "Nuevos controles validación",
        "Marco responsabilidad"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-02-01",
    warnings: [
      "Evaluación impacto obligatoria",
      "Auditoría algoritmos periódica",
      "Monitorización sesgos"
    ]
  },
  {
    id: "personalized_medicine",
    title: "Medicina Personalizada",
    content: [
      "En cumplimiento de la normativa de medicina personalizada y datos genéticos:",
      "1. Datos genéticos:",
      "• Protección especial",
      "• Consentimiento específico",
      "• Almacenamiento seguro",
      "• Acceso restringido",
      "2. Análisis clínico:",
      "• Protocolos validados",
      "• Calidad laboratorio",
      "• Interpretación resultados",
      "• Informes personalizados",
      "3. Asesoramiento:",
      "• Consejo genético",
      "• Implicaciones resultados",
      "• Opciones terapéuticas",
      "• Seguimiento",
      "4. Investigación:",
      "• Uso secundario datos",
      "• Anonimización",
      "• Biobancos",
      "5. Derechos específicos:",
      "• No discriminación",
      "• Confidencialidad",
      "• Derecho no saber"
    ],
    type: "optional",
    applicableTo: ["healthcare", "genetic_services"],
    required: true,
    regulations: [
      "RGPD",
      "Ley 14/2007",
      "Convenio Oviedo"
    ],
    order: 10,
    legalBasis: [
      "Art. 9 RGPD",
      "Ley 14/2007"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "Genetic Data",
      references: [{
        name: "Ley 14/2007",
        article: "Artículos relevantes",
        description: "Investigación biomédica",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-12945"
      }],
      requirements: [
        "Protección datos genéticos",
        "Consentimiento informado",
        "Consejo genético",
        "Calidad análisis"
      ],
      applicableSince: "2007-07-04",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Actualización protocolos",
        "Nuevas medidas seguridad",
        "Mejora asesoramiento"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Auditoría anual obligatoria",
      "Revisión consentimientos",
      "Control accesos datos"
    ]
  },
  {
    id: "telemonitoring",
    title: "Servicios de Telemonitorización",
    content: [
      "En cumplimiento de la normativa de dispositivos médicos y telemedicina:",
      "1. Dispositivos de monitorización:",
      "• Certificación MDR",
      "• Calibración periódica",
      "• Mantenimiento preventivo",
      "• Gestión incidencias",
      "2. Transmisión de datos:",
      "• Cifrado extremo a extremo",
      "• Frecuencia envío",
      "• Verificación integridad",
      "• Backup automático",
      "3. Alertas y alarmas:",
      "• Configuración umbrales",
      "• Protocolos actuación",
      "• Gestión emergencias",
      "• Notificación profesionales",
      "4. Seguimiento clínico:",
      "• Evaluación datos",
      "• Ajuste tratamientos",
      "• Informes periódicos",
      "5. Formación paciente:",
      "• Uso dispositivos",
      "• Interpretación datos",
      "• Actuación emergencias"
    ],
    type: "optional",
    applicableTo: ["healthcare", "remote_monitoring"],
    required: true,
    regulations: [
      "MDR",
      "RGPD",
      "ISO 13485"
    ],
    order: 11,
    legalBasis: [
      "Reglamento UE 2017/745",
      "RGPD Art. 9"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "MDR",
      references: [{
        name: "Reglamento UE 2017/745",
        article: "Anexo I",
        description: "Requisitos generales de seguridad y funcionamiento",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32017R0745"
      }],
      requirements: [
        "Certificación dispositivos",
        "Gestión datos salud",
        "Protocolos seguimiento",
        "Sistema alertas"
      ],
      applicableSince: "2021-05-26",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Nuevos dispositivos certificados",
        "Mejora sistema alertas",
        "Actualización protocolos"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-02-01",
    warnings: [
      "Monitorización 24/7",
      "Verificación diaria sistemas",
      "Calibración periódica"
    ]
  },
  {
    id: "mental_health",
    title: "Servicios de Salud Mental Digital",
    content: [
      "En cumplimiento de la normativa de salud mental y servicios digitales:",
      "1. Modalidades de atención:",
      "• Telepsiquiatría",
      "• Psicoterapia online",
      "• Apps terapéuticas",
      "• Grupos virtuales",
      "2. Protocolos específicos:",
      "• Evaluación riesgo",
      "• Crisis e urgencias",
      "• Derivación presencial",
      "• Seguimiento continuo",
      "3. Confidencialidad:",
      "• Entorno privado",
      "• Cifrado comunicaciones",
      "• Acceso restringido",
      "• Notas clínicas",
      "4. Consentimiento informado:",
      "• Alcance servicio",
      "• Limitaciones",
      "• Riesgos específicos",
      "5. Calidad asistencial:",
      "• Supervisión profesional",
      "• Formación continua",
      "• Evaluación resultados"
    ],
    type: "optional",
    applicableTo: ["healthcare", "mental_health"],
    required: true,
    regulations: [
      "Ley 41/2002",
      "RGPD",
      "Normativa autonómica"
    ],
    order: 12,
    legalBasis: [
      "Ley 41/2002",
      "RGPD Art. 9"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "Mental Health",
      references: [{
        name: "Ley 41/2002",
        article: "Artículos relevantes",
        description: "Autonomía del paciente y documentación clínica",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-22188"
      }],
      requirements: [
        "Protocolos específicos",
        "Gestión emergencias",
        "Confidencialidad reforzada",
        "Supervisión profesional"
      ],
      applicableSince: "2002-05-16",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Nuevos servicios digitales",
        "Mejora protocolos crisis",
        "Actualización consentimientos"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Evaluación riesgo continua",
      "Supervisión casos complejos",
      "Actualización protocolos"
    ]
  }
] 