export type APIPagination<T> = {
  content: T[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  sort: Sort2;
  first: boolean;
  empty: boolean;
};

type Pageable = {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

type Sort = {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
};

type Sort2 = {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
};
