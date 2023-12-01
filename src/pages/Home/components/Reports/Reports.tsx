import wave from '../../../../assets/wave.svg';
import imageBlue from '../../../../assets/image-report-blue.png';
import imageOrange from '../../../../assets/image-report-orange.png';
import calendarCoffe from '../../../../assets/icons/calendar-clock.svg';
import homeHeart from '../../../../assets/icons/home-heart.svg';
import paw from '../../../../assets/icons/paw.svg';
import qrCode from '../../../../assets/icons/qrcode.svg';
import { TextDetail } from '../../../../components';
import { Box } from '@mui/material';

const reports = [
  {
    id: 'report-1',
    image: imageBlue,
    report: 60 + ' días',
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
      <div className='items-center mt-[-40px] overflow-hidden '>
        <img src={wave} alt='Reports ' />
      </div>

      <section className='flex flex-col items-center justify-center gap-10 bg-[#f7d8b2] lg:flex-row lg:justify-around'>
        {reports.map((report) => (
          <article key={report.id} className='flex flex-row gap-5 max-w-[450px] w-full'>
            <div className='relative'>
              <img src={report.image} />
              <TextDetail size='xs' weight='bold' className='absolute top-[40%] left-1/4'>
                {report.report}
              </TextDetail>
            </div>
            <div className='flex items-center'>
              <img src={report.icon} className='w-32 p-2' />
              <TextDetail size='xs' weight='bold'>
                {report.description}
              </TextDetail>
            </div>
          </article>
        ))}
      </section>
    </Box>
  );
};

export default Reports;
