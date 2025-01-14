export type BusinessType = 
  | "all" 
  | "ecommerce" 
  | "saas" 
  | "healthcare" 
  | "fintech" 
  | "professional_services";

export type RegulationType = 
  | "RGPD" 
  | "LSSI-CE" 
  | "LOPDGDD" 
  | "ePrivacy" 
  | "Digital Services Act"
  | "Ley de Propiedad Intelectual"
  | "Ley de Marcas"
  | "Directiva 2001/29/CE"
  | "Código Civil"
  | "LPI";

export interface LegalReference {
  name: string
  article: string
  description: string
  url?: string
}

export interface RegulatoryCompliance {
  regulation: RegulationType
  references: LegalReference[]
  requirements: string[]
  applicableSince: string
  lastUpdate: string
}

export interface ClauseVersion {
  version: string
  date: string
  changes: string[]
}

export interface LegalClause {
  id: string
  title: string
  content: string | string[]
  type: 'base' | 'optional' | 'conditional' | 'regulatory'
  applicableTo: BusinessType[]
  required: boolean
  regulations?: RegulationType[]
  order: number
  legalBasis?: string[]
  riskLevel?: 'low' | 'medium' | 'high'
  compliance: RegulatoryCompliance[]
  versions: ClauseVersion[]
  lastReview: string
  nextReview: string
  exceptions?: string[]
  warnings?: string[]
  relatedClauses?: string[]
  countrySpecific?: {
    [country: string]: {
      modifications: string[]
      additionalRequirements: string[]
    }
  }
} 