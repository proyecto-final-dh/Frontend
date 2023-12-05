import { Title, MainBanner, Loader } from '../../components';
import { useState } from 'react';
import imgBannerChart from '../../assets/banner-chart.png';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FormControl } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
const labelFontSize = 14;

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },

    tooltip: {
      titleFont: { size: labelFontSize },
      bodyFont: { size: labelFontSize },
    },
  },
};

const labels = ['Noviembre', 'Diciembre'];

const gatoData = [10, 5];
const perroData = [20, 35];
export const data = {
  labels,
  datasets: [
    {
      label: 'Gato',
      data: gatoData,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Perro',
      data: perroData,
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const options_2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Mascotas en Adopción VS Mascotas Adoptadas',
    },
  },
};

const MascotasAdoptadasData = [10, 28];
const MascotasenAdopcionData = [30, 5];

export const dataMascotasEnAdopVSMascotasAdop = {
  labels,
  datasets: [
    {
      label: 'Mascotas Adoptadas',
      data: MascotasAdoptadasData,
      backgroundColor: 'rgba(255, 222, 139, 255)',
    },
    {
      label: 'Mascotas en Adopción',
      data: MascotasenAdopcionData,
      backgroundColor: 'rgba(255, 149, 135, 255)',
    },
  ],
};

const AdoptionChart = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const isLoading = false;

  return (
    <div className='bg-white col-span-full'>
      <MainBanner images={imgBannerChart} />
      {isLoading && <Loader opacity={60} />}
      {!isLoading && (
        <div className='p-10'>
          <div className='p-4 lg:p-8'>
            <Title variant='h3' className='pr-4 font-bold text-center'>
              Informes de adopciones
            </Title>
          </div>
          <div className='flex flex-col w-full gap-4 px-4 mb-5 lg:flex-row'>
            <FormControl fullWidth>
              <DatePicker
                label='Fecha inicio'
                onChange={(e) => {
                  setStartDate(dayjs(e));
                }}
                views={['month', 'year']}
                value={startDate}
                minDate={dayjs('2023-11')}
                maxDate={dayjs()}
              />
            </FormControl>
            <FormControl fullWidth>
              <DatePicker
                label='Fecha fin'
                disabled={!startDate}
                views={['month', 'year']}
                value={endDate}
                minDate={startDate}
                maxDate={dayjs()}
                onChange={(e) => {
                  setEndDate(dayjs(e));
                }}
              />
            </FormControl>
          </div>
          <Title variant='h3' className='pr-4 font-bold !text-[18px] lg:!text-[24px]'>
            Mascotas disponibles en adopción por especie
          </Title>
          <div className='px-10 mt-4'>
            <Bar options={options} data={data} />
          </div>

          <div className='w-full h-1 my-5 lg:my-10 bg-gray'></div>

          <Title variant='h3' className='pr-4 font-bold !text-[18px] lg:!text-[24px]'>
            Informe Mascotas en Adopción VS Mascotas Adoptadas
          </Title>
          <div className='px-10 mt-4'>
            <Bar options={options_2} data={dataMascotasEnAdopVSMascotasAdop} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdoptionChart;
