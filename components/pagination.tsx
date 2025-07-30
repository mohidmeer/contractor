import Link from 'next/link';
import { MdForward } from 'react-icons/md';

const Pagination = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  const visiblePages = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 3) return [1, 2, 3];
    if (currentPage >= totalPages - 2) return [totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  return (
    <nav aria-label="Pagination" className='flex items-center gap-2'>
      {/* Previous */}
      <Link href={`/blogs?page=${currentPage - 1}`} passHref>
        <button
          disabled={currentPage === 1}
          className={`btn-primary !px-3 ${currentPage === 1 ? 'cursor-not-allowed opacity-50 ' : ''}`}
        >
         <MdForward className='rotate-180'/>
        </button>
      </Link>
      {/* Page numbers */}
      {visiblePages().map((page) => (
        <Link key={page} href={`/blogs?page=${page}`}>
          <button
            className={`btn-primary !px-3 text-sm ${
              page === currentPage
                ? 'bg-primary text-white'
                : '!bg-white !text-primary border !border-primary'
            }`}
          >
            {page}
          </button>
        </Link>
      ))}
      {/* More pages */}
      {currentPage < totalPages - 2 && (
        <span className='text-sm text-gray-500'>....</span>
      )}
      {/* Next */}
      <Link href={`/blogs?page=${currentPage + 1}`} passHref>
        <button
          disabled={currentPage === totalPages}
          className={`btn-primary  !px-3 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <MdForward/>
        </button>
      </Link>
    </nav>
  );
};

export default Pagination;