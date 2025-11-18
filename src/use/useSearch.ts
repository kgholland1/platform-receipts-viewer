import type { QueryFilter } from "@/types/receipt";

export default function useSearch() {
  const formatQueryFilter = (
    searchItem: QueryFilter | null = null
  ): string  => {
    let queryString = ""; 
    
    if (searchItem?.pageSize) {
      queryString = `?PageSize=${searchItem.pageSize}&PageNumber=${searchItem.pageNumber}`;
    }

    if (searchItem?.agencyId) {
      queryString += `&AgencyId=${searchItem.agencyId}`;
    }

    if (searchItem?.receiptNumber) {
      queryString += `&ReceiptNumber=${searchItem.receiptNumber}`;
    }

    if (searchItem?.agencyReference) {
      queryString += `&AgencyUniqueReference=${searchItem.agencyReference}`;
    }

    if (searchItem?.startDate) {
      queryString += `&StartDate=${searchItem.startDate}`;
    }

    if (searchItem?.endDate) {
      queryString += `&EndDate=${searchItem.endDate}`;
    }

    return queryString; 
  };

  return {
    formatQueryFilter,
  };
}
