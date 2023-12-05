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

const reports = [
  {
    id: 'report-1',
    image: imageBlue,
    report: 60,
    icon: calendarCoffe,
    description: 'Tiempo promedio desde su publicacion a su adopción',
  },
  {
    id: 'report-2',
    image: imageBlue,
    report: 500,
    icon: homeHeart,
    description: 'Tiempo promedio desde su publicacion a su adopción',
  },
  {
    id: 'report-3',
    image: imageOrange,
    report: 227,
    icon: paw,
    description: 'Tiempo promedio desde su publicacion a su adopción',
  },
  {
    id: 'report-4',
    image: imageOrange,
    report: 500,
    icon: qrCode,
    description: 'Tiempo promedio desde su publicacion a su adopción',
  },
];

const Reports = () => {
  return (
    <Box>
      <div className='items-center mt-[-40px] overflow-hidden lg:shadow-lg'>
        <img src={wave} alt='Reports ' />
      </div>

      <section className='flex flex-col items-center justify-center px-4 gap-y-4 gap-x-56 bg-[#f7d8b2] lg:flex-row lg:flex-wrap lg:w-full lg:shadow-lg'>
        {reports.map((report) => (
          <article key={report.id} className='flex flex-row gap-4 max-w-[450px] w-full'>
            <div className='relative gap-4'>
              <img src={report.image} />
              {report.id === 'report-1' ? (
                <TextDetail size='xs' weight='bold' className='flex absolute top-[40%] right-[40%]'>
                  <Number n={report.report}></Number>
                  <span className='pl-1'> días</span>
                </TextDetail>
              ) : (
                <TextDetail size='xs' weight='bold' className='absolute top-[40%] right-1/2'>
                  <Number n={report.report}></Number>
                </TextDetail>
              )}
            </div>
            <div className='flex items-center justify-center gap-4'>
              <img src={report.icon} className='w-32 p-2' />
              <TextDetail size='xs' weight='bold'>
                {report.description}
              </TextDetail>
            </div>
          </article>
        ))}
      </section>
      <div className='flex justify-center items-center bg-[#f7d8b2] py-6 lg:shadow-lg'>
        <Link to='/qr/create'>
          <Button variant='contained' color='primary' sx={{ borderRadius: '30px', fontWeight: 700, padding: '10px 15px' }}>
            Ver más reportes
          </Button>
        </Link>
      </div>
    </Box>
  );
};

export default Reports;
