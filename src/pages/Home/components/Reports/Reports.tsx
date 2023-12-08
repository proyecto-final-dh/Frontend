import wave from '../../../../assets/wave.svg';
import imageBlue from '../../../../assets/image-report-blue.png';
import imageOrange from '../../../../assets/image-report-orange.png';
import calendarCoffe from '../../../../assets/icons/calendar-clock.svg';
import homeHeart from '../../../../assets/icons/home-heart.svg';
import paw from '../../../../assets/icons/paw.svg';
import qrCode from '../../../../assets/icons/qrcode.svg';
import { TextDetail } from '../../../../components';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Number from '../../../../components/Number';
import useBreakpoint from '../../../../hooks/use-breakpoint';

interface ReportProps {
  enAdopcionCount: number;
  adoptadasCount: number;
  conQrCount: number;
  averageTime: number;
}

const Reports: React.FC<ReportProps> = ({ enAdopcionCount, adoptadasCount, conQrCount, averageTime }: ReportProps) => {
  const { isLg } = useBreakpoint('lg');
  const reports = [
    {
      id: 'report-1',
      image: imageBlue,
      report: averageTime,
      icon: calendarCoffe,
      description: 'Tiempo promedio desde su publicacion a su adopción',
    },
    {
      id: 'report-2',
      image: imageBlue,
      report: enAdopcionCount,
      icon: homeHeart,
      description: 'Total de mascotas que se encuentran buscando un hogar',
    },
    {
      id: 'report-3',
      image: imageOrange,
      report: adoptadasCount,
      icon: paw,
      description: 'Total de mascotas adoptadas a través de nuestra pagina',
    },
    {
      id: 'report-4',
      image: imageOrange,
      report: conQrCount,
      icon: qrCode,
      description: 'Total de mascotas registradas a través de nuestra pagina',
    },
  ];
  return (
    <Box>
      <div className='items-center mt-[-40px] overflow-hidden lg:shadow-lg'>
        <img src={wave} alt='Reports ' />
      </div>

      <section className='flex flex-col items-center justify-center px-4 gap-y-4 gap-x-56 bg-[#f7d8b2] lg:flex-row lg:flex-wrap lg:w-full lg:shadow-lg'>
        {reports.map((report) => (
          <article key={report.id} className='flex flex-row items-center justify-center gap-4 max-w-[450px] w-full'>
            <div className='relative gap-4'>
              <img src={report.image} />
              {report.id === 'report-1' ? (
                <div className='absolute flex flex-col items-center top-[20%]  w-[80%]'>
                  <TextDetail size={isLg ? 'xxl' : 'xl'} weight='bold'>
                    <Number n={report.report}></Number>
                  </TextDetail>
                  <TextDetail size='xs' weight='bold' className='mt-[-0.75rem]'>
                    días
                  </TextDetail>
                </div>
              ) : (
                <div className='absolute flex flex-col items-center top-[20%]  w-[80%]'>
                  <TextDetail size={isLg ? 'xxl' : 'xl'} weight='bold'>
                    <Number n={report.report}></Number>
                  </TextDetail>
                </div>
              )}
            </div>
            <div className='flex items-center justify-center gap-2'>
              <img src={report.icon} className='w-32 p-2' />
              <TextDetail size='xs' weight='bold' className='w-full'>
                {report.description}
              </TextDetail>
            </div>
          </article>
        ))}
      </section>
      <div className='flex justify-center items-center bg-[#f7d8b2] py-6'>
        <Link to='/reports'>
          <Button variant='contained' color='primary' sx={{ borderRadius: '30px', fontWeight: 700, padding: '10px 15px' }}>
            Ver más reportes
          </Button>
        </Link>
      </div>
    </Box>
  );
};

export default Reports;
