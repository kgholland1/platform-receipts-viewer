export type Receipt = {
  id: number,
  receiptNumber: string,
  agencyUniqueReference: number,
  receiptDate: string,
  recipientName: string,
  recipientEmail?: number,
  recipientPhone?: number,
  amount: number,
  fee: number,
  receiptType: string,
  agencyName: string
}

export type ApiBlobResult = {
  blob: Blob | null,
  success: boolean
}

export type AgencyLookup = {
  id: number,
  name: string
}

export type QueryFilter = {
  agencyId?: number,
  receiptNumber?: string,
  agencyReference?: string,
  startDate?: string,
  endDate?: string,
  pageSize: number,
  pageNumber: number
}

export type PaginationMetadata = {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
  previousPageLink?: string;
  nextPageLink?: string;
}