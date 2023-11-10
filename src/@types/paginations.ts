declare global {
  type TPagination<T> = {
    content: T[];
    pageable: {
      currentPage: number;
      itemsPerPage: number;
      totalPages: number;
      totalElements: number;
      isLast: boolean;
      isFirst: boolean;
    };
  };
}
export {};
