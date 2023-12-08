import { Title, MainBanner, Loader } from '../../components';
import { useEffect, useMemo, useState } from 'react';
import imgBannerChart from '../../assets/banner-chart.png';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FormControl } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { useLazyGetSpeciesReportQuery, useLazyGetStatusReportQuery } from '../../store/apis/resqpet.api';
import { EN_ADOPCION } from '../../constants/pet-statuses.constants';

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

const AdoptionChart = () => {
  const [
    getSpeciesReport,
    {
      isSuccess: isSuccessSpeciesReport,
      isFetching: isFetchingSpeciesReport,
      isLoading: isLoadingSpeciesReport,
      data: speciesReport,
      isError: isSpeciesReportError,
    },
  ] = useLazyGetSpeciesReportQuery();
  const [
    getStatusReport,
    {
      isSuccess: isSuccessStatusReport,
      isFetching: isFetchingStatusReport,
      isLoading: isLoadingStatusReport,
      data: statusReport,
      isError: isStatusReportError,
    },
  ] = useLazyGetStatusReportQuery();

  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const isLoading = isFetchingSpeciesReport || isLoadingSpeciesReport || isFetchingStatusReport || isLoadingStatusReport;

  const statusData = useMemo(() => {
    if (!statusReport) return null;
    return {
      labels: statusReport[0].result.map((item) => item.date),
      datasets: statusReport.map((item) => ({
        label: item.status,
        data: item.result.map((resultItem) => resultItem.count),
        backgroundColor: item.status === EN_ADOPCION ? 'rgba(255, 149, 135, 255)' : 'rgba(255, 222, 139, 255)',
      })),
    };
  }, [statusReport]);

  const speciesData = useMemo(() => {
    if (!speciesReport) return null;
    return {
      labels: speciesReport[0].result.map((item) => item.date),
      datasets: speciesReport.map((item) => ({
        label: item.species,
        data: item.result.map((resultItem) => resultItem.count),
        backgroundColor: item.species === 'Gato' ? 'rgba(255, 149, 135, 255)' : 'rgba(255, 222, 139, 255)',
      })),
    };
  }, [speciesReport]);

  useEffect(() => {
    if (isSpeciesReportError) console.log({ error: isSpeciesReportError });
    if (isStatusReportError) console.log({ error: isStatusReportError });
  }, [isSpeciesReportError, isStatusReportError]);

  useEffect(() => {
    if (startDate && endDate) {
      getSpeciesReport({ startDate: startDate.format('YYYY-MM-DD'), endDate: endDate.format('YYYY-MM-DD') });
      getStatusReport({ startDate: startDate.format('YYYY-MM-DD'), endDate: endDate.format('YYYY-MM-DD') });
    }
  }, [startDate, endDate]);

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
                minDate={dayjs('2023-01')}
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

          {isSuccessStatusReport && (
            <>
              <Title variant='h3' className='pr-4 font-bold !text-[18px] lg:!text-[24px]'>
                Mascotas disponibles en adopción por especie
              </Title>

              <div className='flex justify-center w-full'>
                <div className='lg:w-2/3'>
                  {speciesData ? <Bar options={options} data={speciesData} /> : <Title variant='h1'>No tenemos datos por el momento 😿</Title>}
                </div>
              </div>
            </>
          )}

          <div className='w-full h-1 my-5 lg:my-10 bg-gray'></div>

          {isSuccessSpeciesReport && (
            <>
              <Title variant='h3' className='pr-4 font-bold !text-[18px] lg:!text-[24px]'>
                Informe Mascotas en Adopción VS Mascotas Adoptadas
              </Title>
              <div className='flex justify-center w-full'>
                <div className='lg:w-2/3'>
                  {statusData ? <Bar options={options} data={statusData} /> : <Title variant='h1'>No tenemos datos por el momento 😿</Title>}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AdoptionChart;
