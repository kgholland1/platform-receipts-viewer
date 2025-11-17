export type DailyReceiptCount = {
  receiptCount: number,
  receiptTotal: number,
  receiptFees: number
}


export type WeeklyReceiptCount = {
  selectedDate: string[],
  receiptCount: number[],
  receiptTotal: number[]
}

export type AgencyReceiptCount = {
  agencyName: string,
  receiptCount: number,
  receiptTotal: number
}