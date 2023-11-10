import { useMemo, useState } from 'react';
import { Pagination } from '../../components';
import { Card } from '../../components/Card';
import useBreakpoint from '../../hooks/use-breakpoint';
import data from './lib/data';

type AdoptionProps = {
  pages: number;
};

const Adoption = ({ pages }: AdoptionProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLg } = useBreakpoint('lg');

  const maxPagesToShow = useMemo(() => {
    if (isLg) {
      return 5;
    }
    return 4;
  }, [currentPage, isLg]);

  return (
    <div className='p-3 col-span-full'>
      {/* Junior section */}
      {/* End Junior Section */}

      <section className='flex flex-col gap-8'>
        <div className='flex justify-center w-full'>
          <Pagination
            pages={pages}
            maxPagesToShow={maxPagesToShow}
            currentPage={currentPage}
            onPageChange={(page) => {
              if (page >= 1 && page <= pages) setCurrentPage(page);
            }}
          />
        </div>
        <section className='flex flex-wrap justify-center px-10 gap-7'>
          {data.map((item) => (
            <Card key={item.id} {...item} variant={isLg ? 'm' : 's'} />
          ))}
        </section>
        <div className='flex justify-center w-full'>
          <Pagination
            pages={pages}
            maxPagesToShow={maxPagesToShow}
            currentPage={currentPage}
            onPageChange={(page) => {
              if (page >= 1 && page <= pages) setCurrentPage(page);
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Adoption;
