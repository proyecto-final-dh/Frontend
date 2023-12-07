import Title from '../Title';
import Button from '../Botones/Button';
import { IconX } from '@tabler/icons-react';
import { QRCode } from 'react-qrcode-logo';
import logo from './../../assets/logo.png';
import useBreakpoint from '../../hooks/use-breakpoint';

interface QrModalProps {
  closeModal: () => void;
  url: string;
}

const QrModal = ({ closeModal, url }: QrModalProps) => {
  const { isLg } = useBreakpoint('lg');
  const onDownload = () => {
    const image = document.getElementById('qr-image') as HTMLCanvasElement;
    const img = image.toDataURL();

    const link = document.createElement('a');
    link.download = 'qr-code.png';
    link.href = img;
    link.click();
  };

  const onPrint = () => {
    const image = document.getElementById('qr-image') as HTMLCanvasElement;
    const img = image.toDataURL();

    const printWindow = window.open('', 'PRINT', 'height=400,width=600');

    printWindow?.document.write('<html><body>');
    printWindow?.document.write(`<img id="printed-image" src='${img}' />`);
    printWindow?.document.write('</body></html>');

    const printedImage = printWindow?.document.getElementById('printed-image') as HTMLImageElement;
    printedImage.onload = () => {
      printWindow?.document.close();
      printWindow?.focus();
      printWindow?.print();
      printWindow?.close();
    };
  };

  return (
    <div className='fixed w-screen h-screen top-0 left-0 z-[10] flex justify-center items-center bg-primary/80 mt-10'>
      <section className='relative flex flex-col justify-center w-10/12 p-4 bg-white h-5/6 lg:w-6/12 rounded-3xl lg:p-8'>
        <IconX onClick={closeModal} className='absolute text-orange-dark top-4 right-4' />
        <Title variant='h2' className='text-center font-bold text-[22px] lg:text-[28px]'>
          Tu QR ha sido generado exitosamente
        </Title>
        <div className='flex justify-center w-full'>
          <QRCode value={url} id='qr-image' logoImage={logo} logoPadding={2} logoPaddingStyle='circle' size={isLg ? 250 : 200} />
        </div>
        <div className='flex justify-center gap-4 lg:gap-8'>
          <Button label='Descargar' variant='primary' onClick={onDownload} />
          <Button label='Imprimir' variant='secundary' onClick={onPrint} />
        </div>
      </section>
    </div>
  );
};

export default QrModal;
