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