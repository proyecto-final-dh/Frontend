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
            <th key={header.ref} className='px-3 border first:rounded-tl-lg last:rounded-tr-lg border-gray'>
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

// Example

// const data = [
//   { specie: 'Raza', cat: 'Mestizo/criollo' },
//   { specie: 'Tamaño', cat: 'Mediano' },
//   { specie: 'Edad', cat: '12 meses' },
//   { specie: 'Género', cat: 'Hembra' },
//   { specie: 'Descripción', cat: 'Efusiva y cariñosa' },
//   { specie: 'Localización', cat: 'Medellín-Colombia' },
// ];

// const headers = [
//   { ref: 'specie', label: 'Especie' },
//   { ref: 'cat', label: 'Gato' },
// ];

export default Table;
