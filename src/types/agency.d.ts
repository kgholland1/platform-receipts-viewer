export type AdditionalField  = {
  id: number,
  fieldName: string,
  fieldIsRequired: boolean
}

export type Agency  = {
  agencyId: number,
  name: string,
  receiptType: string,
  additionalFields: AdditionalField[]
}

export type APIKey  = {
  key: number,
  created: string,
  status: boolean,
  agencyId: number
}