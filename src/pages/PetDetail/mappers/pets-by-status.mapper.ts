import { APIPageableGetPetsByStatusResponse, TPageableGetPetsByStatusResponse } from '../contracts/pets-by-status.contract';

const toFront = (data: APIPageableGetPetsByStatusResponse): TPageableGetPetsByStatusResponse => {
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
