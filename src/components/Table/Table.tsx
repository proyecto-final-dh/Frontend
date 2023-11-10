import styles from './Table.module.css';
import cn from 'classnames';

type TableProps = {
  data: {
    [key: string]: string;
  }[];
  headers: { ref: string; label: string }[];
};

const Table = ({ data, headers }: TableProps) => {
  return (
    <table className={cn('w-full rounded-lg', styles.table)}>
      <thead>
        <tr className='bg-light-gray text-[16px] font-regular text-left'>
          {headers.map((header) => (
            <th key={header.ref} className='px-3 capitalize border first:rounded-tl-lg last:rounded-tr-lg border-gray'>
              {header.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, headerIndex) => (
              <td className='py-[10px] px-3 border border-gray' key={headerIndex}>
                {row[header.ref]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
