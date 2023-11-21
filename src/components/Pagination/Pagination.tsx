import { useMemo } from 'react';
import cn from 'classnames';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

type PaginationProps = {
  pages: number;
  maxPagesToShow: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ pages, maxPagesToShow, currentPage, onPageChange }: PaginationProps) => {
  const pagesToRender = useMemo(() => {
    const pagesArray: (string | number)[] = [];

    // Si hay menos páginas o igual que el máximo a mostrar, se muestran todas las páginas.
    if (pages <= maxPagesToShow) {
      for (let i = 1; i <= pages; i++) {
        pagesArray.push(i);
      }
    } else if (currentPage <= maxPagesToShow - 2) {
      // Si la página actual está cerca del comienzo, se muestran las primeras páginas y agregar puntos suspensivos al final.
      for (let i = 1; i <= maxPagesToShow - 1; i++) {
        pagesArray.push(i);
      }
      if (pagesArray[pagesArray.length - 1] !== pages) {
        pagesArray.push('...');
        pagesArray.push(pages);
      }
      // Si la página actual está cerca del final, se muestran las últimas páginas y agregar puntos suspensivos al principio.
    } else if (currentPage >= pages - maxPagesToShow + 3) {
      pagesArray.push(1);
      if (pagesArray[pagesArray.length - 1] !== '...') {
        pagesArray.push('...');
      }
      for (let i = pages - maxPagesToShow + 2; i <= pages; i++) {
        pagesArray.push(i);
      }
      // Se muestran las páginas alrededor de la página actual y agregar puntos suspensivos al principio y al final.
    } else {
      pagesArray.push(1);
      if (pagesArray[pagesArray.length - 1] !== '...') {
        pagesArray.push('...');
      }
      for (let i = currentPage - Math.floor((maxPagesToShow - 3) / 2); i <= currentPage + Math.floor((maxPagesToShow - 3) / 2); i++) {
        pagesArray.push(i);
      }
      if (pagesArray[pagesArray.length - 1] !== '...') {
        pagesArray.push('...');
      }
      pagesArray.push(pages);
    }

    return pagesArray;
  }, [pages, maxPagesToShow, currentPage]);

  const handlePageKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      onPageChange(currentPage - 1);
    }
    if (event.key === 'ArrowRight') {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className='flex items-center justify-center gap-5 px-4 py-3 border-2 border-black rounded-l-full rounded-r-full w-fit'>
      <IconChevronLeft
        className={cn('w-4 h-4 min-w-[16px] min-h-[16px] stroke-2 stroke-black', { 'opacity-40': currentPage === 1 })}
        onClick={() => onPageChange(currentPage - 1)}
      />
      {pagesToRender.map((page, index) => (
        <div
          key={index}
          className={cn('w-4 h-4 p-[15px] flex justify-center items-center text-black rounded-full cursor-pointer', {
            'bg-primary text-white': page === currentPage,
          })}
          onClick={() => {
            if (page !== '...') {
              onPageChange(Number(page));
            }
          }}
          onKeyDown={(event) => handlePageKeyDown(event)}
        >
          <span className='text-[16px]'>{page}</span>
        </div>
      ))}
      <IconChevronRight
        className={cn('w-4 h-4 min-w-[16px] min-h-[16px] stroke-2 stroke-black', { 'opacity-40': currentPage === pages })}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </div>
  );
};

export default Pagination;
