import { LegalClause } from '../legal-types'

export const ecommerceClauses: LegalClause[] = [
  {
    id: "ecommerce_contract",
    title: "Proceso de Contratación y Compra",
    applicationQuestion: "¿Vendes productos o servicios online con proceso de compra?",
    content: [
      "En cumplimiento de la Ley 34/2002 (LSSI-CE) y el Real Decreto Legislativo 1/2007 (TRLGDCU), se informa del proceso de contratación:",
      "1. Proceso de compra:",
      `• Selección de productos en ${COMPANY_NAME}`,
      "• Verificación del carrito",
      "• Identificación del usuario",
      `• Selección del método de pago: ${COMPANY_PAYMENT_METHODS.map(m => m.type).join(', ')}`,
      "• Confirmación y pago",
      "2. Precios:",
      `• Todos los precios incluyen ${COMPANY_TAX_INFO}`,
      `• Los gastos de envío se muestran ${COMPANY_SHIPPING_DISPLAY}`,
      `• ${COMPANY_NAME} se reserva el derecho de modificar los precios en cualquier momento`,
      "3. Confirmación:",
      "• Recibirá un email de confirmación del pedido",
      "• El contrato se considera perfeccionado tras la confirmación del pago",
      "4. Medios técnicos de corrección de errores:",
      "• Puede modificar su pedido en cualquier momento antes de la confirmación final"
    ],
    type: "optional",
    applicableTo: ["ecommerce", "marketplace"],
    required: true,
    regulations: ["LSSI-CE", "TRLGDCU", "Directiva 2011/83/UE"],
    order: 1,
    legalBasis: [
      "Art. 27 LSSI-CE",
      "Art. 97 TRLGDCU"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "LSSI-CE",
      references: [{
        name: "Ley 34/2002",
        article: "Artículo 27",
        description: "Obligaciones previas al proceso de contratación",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758"
      }],
      requirements: [
        "Información precontractual clara",
        "Pasos técnicos de contratación",
        "Medios de corrección de errores",
        "Lenguas disponibles",
        "Condiciones de archivo del documento"
      ],
      applicableSince: "2002-07-12",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "3.0",
      date: "2024-01-01",
      changes: [
        "Actualización requisitos DSA",
        "Mejora información precontractual",
        "Inclusión proceso de pago seguro"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Revisión trimestral de procesos de compra",
      "Actualización ante cambios en métodos de pago",
      "Verificación continua de seguridad en transacciones"
    ],
    countrySpecific: {
      "España": {
        modifications: [
          "Adaptación a normativa de consumo española",
          "Inclusión referencias al sistema arbitral"
        ],
        additionalRequirements: [
          "Información sobre derecho de desistimiento",
          "Hojas de reclamaciones"
        ]
      }
    }
  },
  {
    id: "returns_policy",
    title: "Política de Devoluciones y Derecho de Desistimiento",
    applicationQuestion: "¿Vendes productos físicos a consumidores finales (B2C)?",
    content: [
      "De conformidad con el Real Decreto Legislativo 1/2007 y la Directiva 2011/83/UE:",
      "1. Derecho de desistimiento:",
      "• Plazo de 14 días naturales sin necesidad de justificación",
      "• El plazo expira a los 14 días del día de recepción del producto",
      "• Para servicios, 14 días desde la celebración del contrato",
      "2. Ejercicio del derecho:",
      `• Notificación por escrito a ${COMPANY_EMAIL}`,
      `• Formulario disponible en ${COMPANY_RETURNS_URL}`,
      "• No es necesario indicar el motivo",
      "3. Devolución del producto:",
      "• En perfecto estado y con embalaje original",
      "• Plazo máximo de 14 días desde la comunicación",
      "• Coste de devolución a cargo del cliente, salvo defecto",
      "4. Reembolso:",
      "• Mismo medio de pago utilizado en la compra",
      "• Plazo máximo de 14 días desde la notificación",
      "• Posible retención hasta recepción de productos",
      "5. Excepciones:",
      `${COMPANY_RETURNS_EXCEPTIONS.join('\n• ')}`
    ],
    type: "optional",
    applicableTo: ["ecommerce", "marketplace"],
    required: true,
    regulations: ["TRLGDCU", "Directiva 2011/83/UE"],
    order: 2,
    legalBasis: [
      "Art. 102-108 TRLGDCU",
      "Art. 9-14 Directiva 2011/83/UE"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "TRLGDCU",
      references: [{
        name: "RDL 1/2007",
        article: "Artículos 102-108",
        description: "Derecho de desistimiento",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555"
      }],
      requirements: [
        "Información clara sobre el derecho",
        "Formulario de desistimiento",
        "Plazos y procedimientos",
        "Costes y excepciones",
        "Procedimiento de reembolso"
      ],
      applicableSince: "2007-12-01",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "4.0",
      date: "2024-01-01",
      changes: [
        "Actualización normativa consumo",
        "Mejora proceso devolución",
        "Clarificación excepciones"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Sanción hasta 100.000€ por incumplimiento",
      "Revisión trimestral de procedimientos",
      "Actualización ante cambios normativos"
    ]
  },
  {
    id: "warranties",
    title: "Garantías y Servicio Postventa",
    applicationQuestion: "¿Vendes productos nuevos o de segunda mano con garantía?",
    content: [
      "De conformidad con el Real Decreto Legislativo 1/2007 (TRLGDCU) y la Directiva 2019/771:",
      "1. Garantía legal:",
      "• Plazo de 3 años para productos nuevos desde la entrega",
      "• Plazo de 2 años para productos de segunda mano",
      "• Defectos de conformidad manifestados en los primeros 2 años se presumen existentes en el momento de la entrega",
      "2. Derechos del consumidor:",
      "• Reparación o sustitución del producto",
      "• Reducción del precio",
      "• Resolución del contrato",
      "3. Servicio postventa:",
      `• Disponibilidad de piezas de repuesto: ${COMPANY_SPARE_PARTS_PERIOD}`,
      `• Servicio técnico: ${COMPANY_TECHNICAL_SERVICE.phone}, ${COMPANY_TECHNICAL_SERVICE.email}`,
      `• Horario de atención: ${COMPANY_TECHNICAL_SERVICE.hours}`,
      "4. Garantía comercial adicional:",
      `• Duración: ${COMPANY_COMMERCIAL_WARRANTY.duration}`,
      `• Cobertura: ${COMPANY_COMMERCIAL_WARRANTY.coverage}`,
      `• Condiciones: ${COMPANY_COMMERCIAL_WARRANTY.conditions}`,
      `• Exclusiones: ${COMPANY_COMMERCIAL_WARRANTY.exclusions.join(', ')}`
    ],
    type: "optional",
    applicableTo: ["ecommerce", "marketplace"],
    required: true,
    regulations: ["TRLGDCU", "Directiva 2019/771"],
    order: 3,
    legalBasis: [
      "Art. 114-127 TRLGDCU",
      "Directiva 2019/771"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "TRLGDCU",
      references: [{
        name: "RDL 1/2007",
        article: "Artículos 114-127",
        description: "Garantías y servicios postventa",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555"
      }],
      requirements: [
        "Información sobre garantía legal",
        "Condiciones de garantía comercial",
        "Servicio técnico y repuestos",
        "Procedimiento de reclamación"
      ],
      applicableSince: "2022-01-01",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Actualización plazos garantía legal",
        "Inclusión nuevos derechos consumidor",
        "Adaptación Directiva 2019/771"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-06-01",
    warnings: [
      "Sanción hasta 100.000€ por incumplimiento",
      "Revisión semestral de procedimientos",
      "Actualización documentación garantías"
    ]
  },
  {
    id: "payment_security",
    title: "Proceso de Pago y Seguridad en las Transacciones",
    applicationQuestion: "¿Procesas pagos online en tu web?",
    content: [
      "En cumplimiento del Real Decreto-ley 19/2018 de servicios de pago y la normativa PSD2:",
      "1. Métodos de pago disponibles:",
      `${COMPANY_PAYMENT_METHODS.map(method => 
        `• ${method.type}: ${method.fees}${method.availability ? ` (${method.availability})` : ''}`
      ).join('\n')}`,
      "2. Seguridad en las transacciones:",
      `• Certificados: ${COMPANY_ADDITIONAL_SECURITY.certificates.join(', ')}`,
      `• Monitorización: ${COMPANY_ADDITIONAL_SECURITY.monitoring}`,
      `• Verificaciones: ${COMPANY_ADDITIONAL_SECURITY.verifications.join(', ')}`,
      "3. Procesamiento de pagos:",
      `• Los datos de pago son gestionados directamente por proveedores autorizados`,
      `• ${COMPANY_NAME} no almacena datos de tarjetas de crédito`,
      "4. Confirmación de pago:",
      "• Recibirá confirmación inmediata tras el pago exitoso",
      "• Se enviará factura al email registrado"
    ],
    type: "optional",
    applicableTo: ["ecommerce", "marketplace"],
    required: true,
    regulations: [
      "PSD2",
      "RDL 19/2018",
      "Reglamento UE 2015/751"
    ],
    order: 4,
    legalBasis: [
      "RDL 19/2018",
      "Directiva UE 2015/2366"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "PSD2",
      references: [{
        name: "Directiva UE 2015/2366",
        article: "Art. 97",
        description: "Autenticación y seguridad",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32015L2366"
      }],
      requirements: [
        "Autenticación reforzada",
        "Cifrado de comunicaciones",
        "Gestión de riesgos",
        "Monitorización de transacciones"
      ],
      applicableSince: "2019-09-14",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "3.0",
      date: "2024-01-01",
      changes: [
        "Actualización requisitos PSD2",
        "Mejora medidas seguridad",
        "Inclusión nuevos métodos pago"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Auditoría trimestral de seguridad",
      "Actualización continua protocolos",
      "Monitorización 24/7 transacciones"
    ],
    countrySpecific: {
      "España": {
        modifications: [
          "Adaptación a normativa Banco de España",
          "Inclusión sistemas pago locales"
        ],
        additionalRequirements: [
          "Información sobre Bizum",
          "Requisitos específicos TPV virtual"
        ]
      }
    }
  },
  {
    id: "shipping_delivery",
    title: "Envíos y Entregas",
    applicationQuestion: "¿Realizas envíos físicos de productos?",
    content: [
      "De conformidad con el TRLGDCU y la Directiva 2011/83/UE sobre derechos de los consumidores:",
      "1. Plazos de entrega:",
      "• Plazo máximo: COMPANY_DELIVERY_TIME",
      "• En caso de retraso, se informará al cliente y podrá cancelar el pedido",
      "• Plazo máximo en caso de resolución por retraso: 30 días naturales",
      "2. Zonas de envío:",
      "COMPANY_SHIPPING_ZONES",
      "3. Costes de envío:",
      "• Se especificarán antes de finalizar la compra",
      "• Incluyen IVA/IGIC",
      "• Gastos adicionales para envíos especiales o express",
      "4. Seguimiento de pedidos:",
      "• Sistema de tracking disponible en COMPANY_TRACKING_URL",
      "• Notificaciones por email sobre el estado del envío",
      "5. Incidencias en la entrega:",
      "• Imposibilidad de entrega: COMPANY_FAILED_DELIVERY_POLICY",
      "• Pérdida o daños durante el transporte: COMPANY_DAMAGE_POLICY"
    ],
    type: "optional",
    applicableTo: ["ecommerce", "marketplace"],
    required: true,
    regulations: ["TRLGDCU", "Directiva 2011/83/UE"],
    order: 5,
    legalBasis: [
      "Art. 66 bis TRLGDCU",
      "Art. 18 Directiva 2011/83/UE"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "TRLGDCU",
      references: [{
        name: "RDL 1/2007",
        article: "Artículo 66 bis",
        description: "Entrega de bienes",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555"
      }],
      requirements: [
        "Información clara sobre plazos",
        "Política de retrasos",
        "Costes de envío",
        "Zonas de cobertura",
        "Seguimiento de pedidos"
      ],
      applicableSince: "2007-12-01",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.5",
      date: "2024-01-01",
      changes: [
        "Actualización política de retrasos",
        "Mejora sistema de seguimiento",
        "Inclusión envíos internacionales"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-04-01",
    warnings: [
      "Revisión trimestral de plazos de entrega",
      "Actualización costes de envío",
      "Monitorización incidencias transporte"
    ]
  },
  {
    id: "pricing_promotions",
    title: "Precios, Promociones y Ofertas Comerciales",
    applicationQuestion: "¿Realizas ofertas, descuentos o promociones especiales?",
    content: [
      "En cumplimiento del TRLGDCU y la Ley 7/1996 de Ordenación del Comercio Minorista:",
      "1. Precios:",
      "• Todos los precios incluyen IVA/IGIC",
      "• Se indicará el precio por unidad de medida cuando sea aplicable",
      "• Los gastos de envío se mostrarán separadamente",
      "2. Promociones y ofertas:",
      "• Duración y condiciones claramente especificadas",
      "• Stock disponible para promociones",
      "• Limitaciones geográficas si existen",
      "3. Códigos descuento:",
      "• Condiciones de uso",
      "• Limitaciones y exclusiones",
      "• No acumulables salvo indicación expresa",
      "4. Errores y modificaciones:",
      "• Derecho a corregir errores tipográficos",
      "• Modificaciones de precio antes de aceptar pedido",
      "5. Comparación de precios:",
      "• Precio de referencia verificable",
      "• Período de comparación especificado"
    ],
    type: "optional",
    applicableTo: ["ecommerce", "marketplace"],
    required: true,
    regulations: [
      "TRLGDCU",
      "Ley 7/1996",
      "Directiva 98/6/CE"
    ],
    order: 6,
    legalBasis: [
      "Art. 60 TRLGDCU",
      "Art. 13-14 Ley 7/1996"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "TRLGDCU",
      references: [{
        name: "RDL 1/2007",
        article: "Artículo 60",
        description: "Información previa al contrato",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555"
      }],
      requirements: [
        "Transparencia en precios",
        "Condiciones promocionales",
        "Información sobre descuentos",
        "Precio por unidad de medida"
      ],
      applicableSince: "2007-12-01",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "3.0",
      date: "2024-01-01",
      changes: [
        "Actualización normativa precios",
        "Inclusión nuevas prácticas comerciales",
        "Mejora transparencia promociones"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Revisión mensual de precios y promociones",
      "Verificación descuentos y comparativas",
      "Control stock promocional"
    ],
    countrySpecific: {
      "España": {
        modifications: [
          "Adaptación a Ley de Ordenación del Comercio Minorista",
          "Requisitos específicos rebajas"
        ],
        additionalRequirements: [
          "Información períodos oficiales rebajas",
          "Normativa autonómica comercio"
        ]
      }
    }
  },
  {
    id: "product_liability",
    title: "Responsabilidad sobre Productos",
    applicationQuestion: "¿Vendes productos que podrían causar daños al consumidor?",
    content: [
      "De conformidad con el Real Decreto Legislativo 1/2007 y la Directiva 85/374/CEE sobre responsabilidad por productos defectuosos:",
      "1. Responsabilidad del fabricante:",
      "• Responsabilidad objetiva por daños causados por productos defectuosos",
      "• Plazo de responsabilidad: 10 años desde puesta en circulación",
      "• Obligación de retirada de productos inseguros",
      "2. Responsabilidad del vendedor:",
      "• Conformidad del producto con el contrato",
      "• Obligación de información sobre características",
      "• Deber de seguimiento post-venta",
      "3. Derechos del consumidor:",
      "• Indemnización por daños y perjuicios",
      "• Derecho a producto seguro",
      "• Acciones contra fabricante y vendedor",
      "4. Obligaciones de seguridad:",
      `• Sistema de control de calidad: ${COMPANY_QUALITY_SYSTEM.inspections}`,
      `• Procedimiento de alertas: ${COMPANY_ALERT_SYSTEM.procedure}`,
      "5. Exclusiones de responsabilidad:",
      `${COMPANY_LIABILITY_EXCLUSIONS.join('\n• ')}`
    ],
    type: "optional",
    applicableTo: ["ecommerce", "marketplace"],
    required: true,
    regulations: [
      "TRLGDCU",
      "Directiva 85/374/CEE",
      "Directiva 2001/95/CE"
    ],
    order: 7,
    legalBasis: [
      "Art. 135-146 TRLGDCU",
      "Directiva 85/374/CEE"
    ],
    riskLevel: "critical",
    compliance: [{
      regulation: "TRLGDCU",
      references: [{
        name: "RDL 1/2007",
        article: "Artículos 135-146",
        description: "Responsabilidad civil por productos defectuosos",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555"
      }],
      requirements: [
        "Sistema de control de calidad",
        "Trazabilidad de productos",
        "Procedimiento de retirada",
        "Gestión de reclamaciones"
      ],
      applicableSince: "2007-12-01",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "2.0",
      date: "2024-01-01",
      changes: [
        "Actualización sistema de alertas",
        "Mejora procedimientos seguridad",
        "Inclusión nuevas garantías"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Revisión mensual de incidencias",
      "Actualización continua de medidas",
      "Seguimiento post-venta obligatorio"
    ]
  },
  {
    id: "marketplace_conditions",
    title: "Condiciones Específicas del Marketplace",
    applicationQuestion: "¿Permites que terceros vendan productos en tu plataforma?",
    content: [
      "En cumplimiento de la Digital Services Act y la normativa de comercio electrónico:",
      "1. Naturaleza del servicio:",
      "• COMPANY_NAME actúa como intermediario",
      "• Facilita transacciones entre vendedores y compradores",
      "• No es parte en los contratos entre usuarios",
      "2. Obligaciones del marketplace:",
      "• Verificación de vendedores profesionales",
      "• Sistema de valoraciones y reseñas",
      "• Mecanismo de resolución de disputas",
      "• Monitorización de contenidos ilegales",
      "3. Responsabilidades:",
      "• Limitación de responsabilidad como intermediario",
      "• Procedimiento de notificación y retirada",
      "• Medidas contra productos falsificados",
      "4. Comisiones y pagos:",
      "COMPANY_MARKETPLACE_FEES",
      "5. Garantías adicionales:",
      "COMPANY_MARKETPLACE_GUARANTEES"
    ],
    type: "optional",
    applicableTo: ["marketplace"],
    required: true,
    regulations: [
      "Digital Services Act",
      "LSSI-CE",
      "Platform to Business Regulation"
    ],
    order: 8,
    legalBasis: [
      "DSA Articles 22-24",
      "P2B Regulation"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "DSA",
      references: [{
        name: "Digital Services Act",
        article: "Articles 22-24",
        description: "Obligaciones de marketplaces",
        url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32022R2065"
      }],
      requirements: [
        "Verificación de comerciantes",
        "Trazabilidad de productos",
        "Sistema de reclamaciones",
        "Transparencia en rankings"
      ],
      applicableSince: "2024-02-17",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "1.0",
      date: "2024-01-01",
      changes: [
        "Implementación DSA",
        "Sistema de verificación reforzado",
        "Nuevas medidas de transparencia"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Auditoría DSA obligatoria",
      "Actualización continua de medidas",
      "Monitorización de vendedores"
    ],
    countrySpecific: {
      "España": {
        modifications: [
          "Adaptación a normativa nacional",
          "Requisitos específicos de información"
        ],
        additionalRequirements: [
          "Registro de operadores",
          "Información fiscal específica"
        ]
      }
    }
  },
  {
    id: "subscription_services",
    title: "Suscripciones y Servicios Recurrentes",
    applicationQuestion: "¿Ofreces servicios de suscripción o pagos recurrentes?",
    content: [
      "De conformidad con la normativa de protección al consumidor:",
      "1. Condiciones de suscripción:",
      `• Periodicidad: ${COMPANY_SUBSCRIPTION_TERMS.frequency}`,
      `• Precio: ${COMPANY_SUBSCRIPTION_TERMS.price}`,
      `• Duración mínima: ${COMPANY_SUBSCRIPTION_TERMS.minDuration}`,
      "2. Proceso de cancelación:",
      `• Plazo de preaviso: ${COMPANY_SUBSCRIPTION_TERMS.cancellationNotice}`,
      `• Método de cancelación: ${COMPANY_SUBSCRIPTION_TERMS.cancellationMethod}`,
      `• Penalizaciones: ${COMPANY_SUBSCRIPTION_TERMS.penalties}`,
      "3. Renovación automática:",
      `• Condiciones: ${COMPANY_SUBSCRIPTION_TERMS.autoRenewal}`,
      `• Notificación previa: ${COMPANY_SUBSCRIPTION_TERMS.renewalNotice}`,
      "4. Modificaciones del servicio:",
      `• Proceso de notificación: ${COMPANY_SUBSCRIPTION_TERMS.modificationNotice}`,
      `• Derechos del usuario: ${COMPANY_SUBSCRIPTION_TERMS.userRights}`
    ],
    type: "optional",
    applicableTo: ["ecommerce", "marketplace"],
    required: true,
    regulations: [
      "LSSI-CE",
      "TRLGDCU",
      "Directiva 2011/83/UE"
    ],
    order: 9,
    legalBasis: [
      "Art. 27 LSSI-CE",
      "Art. 97 TRLGDCU"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "LSSI-CE",
      references: [{
        name: "Ley 34/2002",
        article: "Artículo 27",
        description: "Obligaciones previas al proceso de contratación",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758"
      }],
      requirements: [
        "Transparencia en suscripciones",
        "Condiciones claras de suscripción",
        "Procedimiento de cancelación",
        "Renovación automática",
        "Modificaciones del servicio"
      ],
      applicableSince: "2002-07-12",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "3.0",
      date: "2024-01-01",
      changes: [
        "Actualización normativa suscripciones",
        "Mejora transparencia suscripciones",
        "Inclusión nuevas prácticas suscripciones"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Revisión mensual de suscripciones",
      "Verificación suscripciones",
      "Control suscripciones"
    ]
  },
  {
    id: "digital_content",
    title: "Contenido Digital y Licencias",
    applicationQuestion: "¿Vendes contenido digital (software, ebooks, música, etc.)?",
    content: [
      "De conformidad con la Directiva (UE) 2019/770:",
      "1. Características del contenido digital:",
      `• Formato: ${COMPANY_DIGITAL_CONTENT.format}`,
      `• Compatibilidad: ${COMPANY_DIGITAL_CONTENT.compatibility}`,
      `• Requisitos técnicos: ${COMPANY_DIGITAL_CONTENT.requirements}`,
      "2. Licencia de uso:",
      `• Duración: ${COMPANY_DIGITAL_CONTENT.license.duration}`,
      `• Alcance: ${COMPANY_DIGITAL_CONTENT.license.scope}`,
      `• Restricciones: ${COMPANY_DIGITAL_CONTENT.license.restrictions.join(', ')}`,
      "3. Actualizaciones:",
      `• Política: ${COMPANY_DIGITAL_CONTENT.updates.policy}`,
      `• Duración del soporte: ${COMPANY_DIGITAL_CONTENT.updates.duration}`,
      "4. Acceso y descarga:",
      `• Método: ${COMPANY_DIGITAL_CONTENT.access.method}`,
      `• Disponibilidad: ${COMPANY_DIGITAL_CONTENT.access.availability}`
    ],
    type: "optional",
    applicableTo: ["ecommerce", "marketplace"],
    required: true,
    regulations: [
      "LSSI-CE",
      "TRLGDCU",
      "Directiva 2011/83/UE"
    ],
    order: 10,
    legalBasis: [
      "Art. 27 LSSI-CE",
      "Art. 97 TRLGDCU"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "LSSI-CE",
      references: [{
        name: "Ley 34/2002",
        article: "Artículo 27",
        description: "Obligaciones previas al proceso de contratación",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758"
      }],
      requirements: [
        "Transparencia en contenido digital",
        "Condiciones claras de licencia",
        "Requisitos técnicos",
        "Actualizaciones",
        "Acceso y descarga"
      ],
      applicableSince: "2002-07-12",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "3.0",
      date: "2024-01-01",
      changes: [
        "Actualización normativa contenido digital",
        "Mejora transparencia contenido digital",
        "Inclusión nuevas prácticas contenido digital"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Revisión mensual de contenido digital",
      "Verificación contenido digital",
      "Control contenido digital"
    ]
  },
  {
    id: "age_verification",
    title: "Verificación de Edad",
    applicationQuestion: "¿Vendes productos con restricción de edad (alcohol, tabaco, etc.)?",
    content: [
      "De conformidad con la Directiva (UE) 2019/770:",
      "1. Verificación de edad:",
      `• Método: ${COMPANY_AGE_VERIFICATION.method}`,
      `• Disponibilidad: ${COMPANY_AGE_VERIFICATION.availability}`,
      `• Restricciones: ${COMPANY_AGE_VERIFICATION.restrictions.join(', ')}`,
      "2. Procedimiento de verificación:",
      `• Plazo: ${COMPANY_AGE_VERIFICATION.plazo}`,
      `• Notificación: ${COMPANY_AGE_VERIFICATION.notificacion}`,
      `• Responsabilidades: ${COMPANY_AGE_VERIFICATION.responsabilidades.join(', ')}`,
      "3. Exclusiones:",
      `${COMPANY_AGE_VERIFICATION.exclusions.join('\n• ')}`
    ],
    type: "optional",
    applicableTo: ["ecommerce", "marketplace"],
    required: true,
    regulations: [
      "LSSI-CE",
      "TRLGDCU",
      "Directiva 2011/83/UE"
    ],
    order: 11,
    legalBasis: [
      "Art. 27 LSSI-CE",
      "Art. 97 TRLGDCU"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "LSSI-CE",
      references: [{
        name: "Ley 34/2002",
        article: "Artículo 27",
        description: "Obligaciones previas al proceso de contratación",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758"
      }],
      requirements: [
        "Transparencia en verificación de edad",
        "Condiciones claras de verificación",
        "Restricciones",
        "Plazo",
        "Notificación"
      ],
      applicableSince: "2002-07-12",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "3.0",
      date: "2024-01-01",
      changes: [
        "Actualización normativa verificación de edad",
        "Mejora transparencia verificación de edad",
        "Inclusión nuevas prácticas verificación de edad"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Revisión mensual de verificación de edad",
      "Verificación verificación de edad",
      "Control verificación de edad"
    ]
  },
  {
    id: "user_generated_content",
    title: "Contenido Generado por Usuarios",
    applicationQuestion: "¿Permites reseñas, comentarios o contenido generado por usuarios?",
    content: [
      "De conformidad con la Directiva (UE) 2019/770:",
      "1. Contenido generado por usuarios:",
      `• Permisos: ${COMPANY_USER_GENERATED_CONTENT.permisos.join(', ')}`,
      `• Restricciones: ${COMPANY_USER_GENERATED_CONTENT.restricciones.join(', ')}`,
      "2. Procedimiento de moderación:",
      `• Plazo: ${COMPANY_USER_GENERATED_CONTENT.plazo}`,
      `• Notificación: ${COMPANY_USER_GENERATED_CONTENT.notificacion}`,
      `• Responsabilidades: ${COMPANY_USER_GENERATED_CONTENT.responsabilidades.join(', ')}`,
      "3. Exclusiones:",
      `${COMPANY_USER_GENERATED_CONTENT.exclusions.join('\n• ')}`
    ],
    type: "optional",
    applicableTo: ["ecommerce", "marketplace"],
    required: true,
    regulations: [
      "LSSI-CE",
      "TRLGDCU",
      "Directiva 2011/83/UE"
    ],
    order: 12,
    legalBasis: [
      "Art. 27 LSSI-CE",
      "Art. 97 TRLGDCU"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "LSSI-CE",
      references: [{
        name: "Ley 34/2002",
        article: "Artículo 27",
        description: "Obligaciones previas al proceso de contratación",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758"
      }],
      requirements: [
        "Transparencia en contenido generado por usuarios",
        "Condiciones claras de contenido generado por usuarios",
        "Restricciones",
        "Plazo",
        "Notificación"
      ],
      applicableSince: "2002-07-12",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "3.0",
      date: "2024-01-01",
      changes: [
        "Actualización normativa contenido generado por usuarios",
        "Mejora transparencia contenido generado por usuarios",
        "Inclusión nuevas prácticas contenido generado por usuarios"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Revisión mensual de contenido generado por usuarios",
      "Verificación contenido generado por usuarios",
      "Control contenido generado por usuarios"
    ]
  },
  {
    id: "loyalty_program",
    title: "Programa de Fidelización",
    applicationQuestion: "¿Tienes un programa de puntos o fidelización?",
    content: [
      "De conformidad con la Directiva (UE) 2019/770, protección al consumidor:",
      "1. Programa de fidelización:",
      `• Puntos: ${COMPANY_LOYALTY_PROGRAM.puntos.join(', ')}`,
      `• Condiciones: ${COMPANY_LOYALTY_PROGRAM.condiciones.join(', ')}`,
      `• Restricciones: ${COMPANY_LOYALTY_PROGRAM.restricciones.join(', ')}`,
      "2. Procedimiento de acumulación:",
      `• Plazo: ${COMPANY_LOYALTY_PROGRAM.plazo}`,
      `• Notificación: ${COMPANY_LOYALTY_PROGRAM.notificacion}`,
      `• Responsabilidades: ${COMPANY_LOYALTY_PROGRAM.responsabilidades.join(', ')}`,
      "3. Procedimiento de canje:",
      `• Plazo: ${COMPANY_LOYALTY_PROGRAM.plazoCanje}`,
      `• Notificación: ${COMPANY_LOYALTY_PROGRAM.notificacionCanje}`,
      `• Responsabilidades: ${COMPANY_LOYALTY_PROGRAM.responsabilidadesCanje.join(', ')}`,
      "4. Procedimiento de cancelación:",
      `• Plazo: ${COMPANY_LOYALTY_PROGRAM.plazoCancelacion}`,
      `• Notificación: ${COMPANY_LOYALTY_PROGRAM.notificacionCancelacion}`,
      `• Responsabilidades: ${COMPANY_LOYALTY_PROGRAM.responsabilidadesCancelacion.join(', ')}`
    ],
    type: "optional",
    applicableTo: ["ecommerce", "marketplace"],
    required: true,
    regulations: [
      "LSSI-CE",
      "TRLGDCU",
      "Directiva 2011/83/UE"
    ],
    order: 13,
    legalBasis: [
      "Art. 27 LSSI-CE",
      "Art. 97 TRLGDCU"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "LSSI-CE",
      references: [{
        name: "Ley 34/2002",
        article: "Artículo 27",
        description: "Obligaciones previas al proceso de contratación",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758"
      }],
      requirements: [
        "Transparencia en programa de fidelización",
        "Condiciones claras de programa de fidelización",
        "Restricciones",
        "Plazo",
        "Notificación"
      ],
      applicableSince: "2002-07-12",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "3.0",
      date: "2024-01-01",
      changes: [
        "Actualización normativa programa de fidelización",
        "Mejora transparencia programa de fidelización",
        "Inclusión nuevas prácticas programa de fidelización"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Revisión mensual de programa de fidelización",
      "Verificación programa de fidelización",
      "Control programa de fidelización"
    ]
  },
  {
    id: "dropshipping",
    title: "Dropshipping y Proveedores Externos",
    applicationQuestion: "¿Utilizas dropshipping o proveedores externos para el envío directo?",
    content: [
      "De conformidad con la Directiva (UE) 2019/770:",
      "1. Dropshipping:",
      `• Plazo: ${COMPANY_DROPSHIPPING.plazo}`,
      `• Notificación: ${COMPANY_DROPSHIPPING.notificacion}`,
      `• Responsabilidades: ${COMPANY_DROPSHIPPING.responsabilidades.join(', ')}`,
      "2. Proveedores externos:",
      `• Plazo: ${COMPANY_DROPSHIPPING.plazoProveedores}`,
      `• Notificación: ${COMPANY_DROPSHIPPING.notificacionProveedores}`,
      `• Responsabilidades: ${COMPANY_DROPSHIPPING.responsabilidadesProveedores.join(', ')}`,
      "3. Exclusiones:",
      `${COMPANY_DROPSHIPPING.exclusions.join('\n• ')}`
    ],
    type: "optional",
    applicableTo: ["ecommerce", "marketplace"],
    required: true,
    regulations: [
      "LSSI-CE",
      "TRLGDCU",
      "Directiva 2011/83/UE"
    ],
    order: 14,
    legalBasis: [
      "Art. 27 LSSI-CE",
      "Art. 97 TRLGDCU"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "LSSI-CE",
      references: [{
        name: "Ley 34/2002",
        article: "Artículo 27",
        description: "Obligaciones previas al proceso de contratación",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758"
      }],
      requirements: [
        "Transparencia en dropshipping",
        "Condiciones claras de dropshipping",
        "Restricciones",
        "Plazo",
        "Notificación"
      ],
      applicableSince: "2002-07-12",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "3.0",
      date: "2024-01-01",
      changes: [
        "Actualización normativa dropshipping",
        "Mejora transparencia dropshipping",
        "Inclusión nuevas prácticas dropshipping"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Revisión mensual de dropshipping",
      "Verificación dropshipping",
      "Control dropshipping"
    ]
  },
  {
    id: "b2b_specific",
    title: "Condiciones Específicas B2B",
    applicationQuestion: "¿Vendes a otras empresas (B2B)?",
    content: [
      "De conformidad con la Directiva (UE) 2019/770:",
      "1. Condiciones específicas B2B:",
      `• Plazo: ${COMPANY_B2B_SPECIFIC.plazo}`,
      `• Notificación: ${COMPANY_B2B_SPECIFIC.notificacion}`,
      `• Responsabilidades: ${COMPANY_B2B_SPECIFIC.responsabilidades.join(', ')}`,
      "2. Exclusiones:",
      `${COMPANY_B2B_SPECIFIC.exclusions.join('\n• ')}`
    ],
    type: "optional",
    applicableTo: ["ecommerce", "marketplace"],
    required: true,
    regulations: [
      "LSSI-CE",
      "TRLGDCU",
      "Directiva 2011/83/UE"
    ],
    order: 15,
    legalBasis: [
      "Art. 27 LSSI-CE",
      "Art. 97 TRLGDCU"
    ],
    riskLevel: "high",
    compliance: [{
      regulation: "LSSI-CE",
      references: [{
        name: "Ley 34/2002",
        article: "Artículo 27",
        description: "Obligaciones previas al proceso de contratación",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758"
      }],
      requirements: [
        "Transparencia en condiciones específicas B2B",
        "Condiciones claras de condiciones específicas B2B",
        "Restricciones",
        "Plazo",
        "Notificación"
      ],
      applicableSince: "2002-07-12",
      lastUpdate: "2024-01-01"
    }],
    versions: [{
      version: "3.0",
      date: "2024-01-01",
      changes: [
        "Actualización normativa condiciones específicas B2B",
        "Mejora transparencia condiciones específicas B2B",
        "Inclusión nuevas prácticas condiciones específicas B2B"
      ]
    }],
    lastReview: "2024-01-01",
    nextReview: "2024-03-01",
    warnings: [
      "Revisión mensual de condiciones específicas B2B",
      "Verificación condiciones específicas B2B",
      "Control condiciones específicas B2B"
    ]
  }
] 

export const ecommerceClausesPlaceholders = {
  // Company Info
  COMPANY_NAME: "Mi Tienda Online S.L.",
  COMPANY_EMAIL: "atencion@mitienda.es",
  COMPANY_TRACKING_URL: "https://mitienda.es/seguimiento",
  COMPANY_RETURNS_URL: "https://mitienda.es/devoluciones",

  // Returns & Warranty
  COMPANY_RETURNS_EXCEPTIONS: [
    "Productos personalizados",
    "Bienes precintados que hayan sido desprecintados",
    "Productos perecederos",
    "Contenido digital descargable"
  ],
  COMPANY_SPARE_PARTS_PERIOD: "5 años desde la última venta del modelo",
  COMPANY_TECHNICAL_SERVICE: {
    phone: "900 123 456",
    email: "soporte@mitienda.es",
    hours: "Lunes a Viernes 9:00-18:00"
  },
  COMPANY_COMMERCIAL_WARRANTY: {
    duration: "2 años adicionales",
    coverage: "Defectos de fabricación",
    conditions: "Uso doméstico normal",
    exclusions: ["Daños por mal uso", "Desgaste normal"]
  },

  // Shipping
  COMPANY_DELIVERY_TIME: "24-48 horas laborables",
  COMPANY_SHIPPING_ZONES: {
    national: {
      zones: ["Península", "Baleares", "Canarias", "Ceuta", "Melilla"],
      costs: {
        peninsula: "Gratis para pedidos superiores a 50€",
        baleares: "5€ adicionales",
        canarias: "Consultar tasas aduaneras",
        ceutaMelilla: "Consultar tasas aduaneras"
      }
    },
    international: {
      zones: ["UE", "Resto del mundo"],
      restrictions: ["No se envían productos frescos fuera de España"]
    }
  },
  COMPANY_FAILED_DELIVERY_POLICY: {
    attempts: 2,
    storage: "7 días en punto de recogida",
    redelivery: "5€ por intento adicional"
  },
  COMPANY_DAMAGE_POLICY: {
    reportTime: "24 horas desde recepción",
    process: "Fotos del daño y embalaje",
    resolution: "Reemplazo o reembolso en 48h"
  },

  // Payments
  COMPANY_PAYMENT_METHODS: [
    {
      type: "Tarjeta de crédito/débito",
      providers: ["Visa", "Mastercard", "American Express"],
      fees: "Sin comisiones"
    },
    {
      type: "PayPal",
      fees: "Sin comisiones adicionales"
    },
    {
      type: "Transferencia bancaria",
      processing: "1-2 días hábiles"
    },
    {
      type: "Bizum",
      availability: "Solo España"
    }
  ],
  COMPANY_ADDITIONAL_SECURITY: {
    certificates: ["PCI DSS", "SSL EV"],
    monitoring: "Sistema 24/7 de detección de fraude",
    verifications: ["3D Secure", "Verificación en dos pasos"]
  },

  // Quality & Safety
  COMPANY_QUALITY_SYSTEM: {
    certifications: ["ISO 9001:2015"],
    inspections: "Control de calidad en origen y destino",
    tracking: "Sistema de trazabilidad completa"
  },
  COMPANY_ALERT_SYSTEM: {
    notification: "Email y SMS",
    timeframe: "24h desde detección",
    procedure: "Retirada inmediata y contacto proactivo"
  },
  COMPANY_LIABILITY_EXCLUSIONS: [
    "Daños por uso indebido",
    "Modificaciones no autorizadas",
    "Desgaste normal del producto",
    "Condiciones ambientales extremas"
  ],

  // Marketplace
  COMPANY_MARKETPLACE_FEES: {
    commission: "5-15% según categoría",
    subscription: "29,99€/mes plan básico",
    payment: "1.5% por transacción",
    additional: {
      promoted: "2% adicional por listados promocionados",
      featured: "5€ por producto destacado"
    }
  },
  COMPANY_MARKETPLACE_GUARANTEES: {
    buyerProtection: "Hasta 1.000€ por compra",
    disputeResolution: "Mediación en 24h",
    authentication: "Verificación de vendedores en 48h"
  },

  // Promotions
  COMPANY_PROMO_REGIONS: {
    included: ["Península", "Baleares"],
    excluded: ["Canarias", "Ceuta", "Melilla"],
    restrictions: "Algunas promociones pueden tener restricciones adicionales por región"
  },

  // Subscription Services
  COMPANY_SUBSCRIPTION_TERMS: {
    frequency: "Mensual",
    price: "29,99€/mes",
    minDuration: "1 mes",
    cancellationNotice: "30 días",
    cancellationMethod: "Por escrito",
    penalties: "Penalización de 10€ por cancelación anticipada",
    autoRenewal: "Automático",
    renewalNotice: "30 días antes de la renovación",
    modificationNotice: "Por escrito",
    userRights: "Derechos de cancelación y modificación"
  },

  // Digital Content
  COMPANY_DIGITAL_CONTENT: {
    format: "Digital",
    compatibility: "Compatibilidad con dispositivos",
    requirements: "Requisitos técnicos",
    license: {
      duration: "1 año",
      scope: "Global",
      restrictions: ["No se permite la distribución", "No se permite la venta"]
    },
    updates: {
      policy: "Por escrito",
      duration: "1 año"
    },
    access: {
      method: "Descarga directa",
      availability: "Disponible 24/7"
    }
  },

  // Age Verification
  COMPANY_AGE_VERIFICATION: {
    method: "Verificación de edad",
    availability: "Disponible 24/7",
    restrictions: ["No se permite la venta a menores de edad", "Se requiere documentación"]
  },

  // User Generated Content
  COMPANY_USER_GENERATED_CONTENT: {
    permisos: ["Reseñas", "Comentarios", "Contenido generado por usuarios"],
    restricciones: ["No se permite contenido inapropiado", "No se permite contenido ilegal"],
    plazo: "24 horas",
    notificacion: "Por escrito",
    responsabilidades: ["Moderación", "Remoción", "Notificación"],
    exclusions: ["Contenido inapropiado", "Contenido ilegal"]
  },

  // Loyalty Program
  COMPANY_LOYALTY_PROGRAM: {
    puntos: ["1 punto por 1€ gastado", "2 puntos por 1€ gastado"],
    condiciones: ["1 punto = 1€", "2 puntos = 1€"],
    restricciones: ["No se permite la acumulación de puntos", "No se permite la transferencia de puntos"],
    plazo: "1 año",
    notificacion: "Por escrito",
    responsabilidades: ["Moderación", "Remoción", "Notificación"],
    plazoCanje: "1 año",
    notificacionCanje: "Por escrito",
    responsabilidadesCanje: ["Moderación", "Remoción", "Notificación"],
    plazoCancelacion: "1 año",
    notificacionCancelacion: "Por escrito",
    responsabilidadesCancelacion: ["Moderación", "Remoción", "Notificación"]
  },

  // Dropshipping
  COMPANY_DROPSHIPPING: {
    plazo: "24 horas",
    notificacion: "Por escrito",
    responsabilidades: ["Moderación", "Remoción", "Notificación"],
    plazoProveedores: "24 horas",
    notificacionProveedores: "Por escrito",
    responsabilidadesProveedores: ["Moderación", "Remoción", "Notificación"],
    exclusions: ["Productos perecederos", "Productos personalizados"]
  },

  // B2B Specific
  COMPANY_B2B_SPECIFIC: {
    plazo: "24 horas",
    notificacion: "Por escrito",
    responsabilidades: ["Moderación", "Remoción", "Notificación"],
    exclusions: ["Productos perecederos", "Productos personalizados"]
  }
} 