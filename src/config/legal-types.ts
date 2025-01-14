export type BusinessType = 
  | 'ecommerce'
  | 'marketplace'
  | 'saas'
  | 'professional_services'
  | 'healthcare'
  | 'financial_services'
  | 'gaming'
  | 'social_network'
  | 'educational'
  | 'crypto'
  | 'real_estate'
  | 'travel'
  | 'food_delivery'
  | 'subscription_services'
  | 'digital_content'
  | 'iot_services'
  | 'ai_services'
  | 'legal_services'
  | 'advertising'

export type RegulationType =
  | 'RGPD'
  | 'LOPDGDD'
  | 'LSSI-CE'
  | 'Consumer Rights'
  | 'AML'
  | 'KYC'
  | 'PSD2'
  | 'MiFID II'
  | 'GDPR'
  | 'ePrivacy'
  | 'Digital Services Act'
  | 'Digital Markets Act'
  | 'AI Act'
  | 'Data Act'
  | 'NIS2'
  | 'eIDAS'
  | 'Platform-to-Business'

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