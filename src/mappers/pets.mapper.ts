import { APIPageableGetPetsResponse, TPageableGetPetsResponse } from '../contracts/pets';

const toFront = (data: APIPageableGetPetsResponse): TPageableGetPetsResponse => {
  return {
    content: data.content,
    pageable: {
      currentPage: data.pageable.pageNumber,
      itemsPerPage: data.pageable.pageSize,
      totalPages: data.totalPages,
      totalElements: data.totalElements,
      isLast: data.last,
      isFirst: data.first,
    },
  };
};

export default { toFront };
