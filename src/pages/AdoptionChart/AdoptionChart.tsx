import { Title, MainBanner } from '../../components';
import React from 'react';
import imgBannerChart from '../../assets/banner-chart.png';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
const labelFontSize = 14;

// ************ Grafica de Mascotas en Adopción**************
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    // title: {
    //   display: true,
    //   text: 'Mascotas Disponibles en Adopción',
    // },
    tooltip: {
      titleFont: { size: labelFontSize },
      bodyFont: { size: labelFontSize },
    },
    scales: {
      x: {
        ticks: {
          font: { size: labelFontSize },
        },
      },
      y: {
        ticks: {
          font: { size: labelFontSize },
        },
      },
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

// ************ Options para la gráfica de Mascotas en Adopción VS Mascotas Adoptadas**************
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

function MascotasEnAdopcionSuma(gatoData: number[], perroData: number[]): number[] | null {
  if (gatoData.length !== perroData.length) {
    console.error('Los arrays no tienen la misma longitud.');
    return null; // Otra opción sería lanzar una excepción o manejarlo de otra manera según tus necesidades
  }
  // Suma
  const result: number[] = gatoData.map((valor, indice) => valor + perroData[indice]);

  return result;
}
const MascotasAdoptadasData = [10, 28];
const MascotasenAdopcionData = MascotasEnAdopcionSuma(gatoData, perroData);

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
  return (
    <div className='bg-white col-span-full'>
      <MainBanner images={imgBannerChart} />
      <div className='p-4'>
        <div className='p-4 lg:p-8'>
          <Title variant='h3' className='pr-4 font-bold text-center'>
            Informes de adopciones
          </Title>
        </div>
        <Bar options={options} data={data} />
        <div className='p-4 lg:p-8'>
          <Title variant='h3' className='pr-4 font-bold text-center'>
            Informe Mascotas en Adopción VS Mascotas Adoptadas
          </Title>
        </div>
        <Bar options={options_2} data={dataMascotasEnAdopVSMascotasAdop} />
      </div>
    </div>
  );
};

export default AdoptionChart;
