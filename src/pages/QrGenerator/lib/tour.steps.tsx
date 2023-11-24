import { StepType } from '@reactour/tour';
import { TextDetail } from '../../../components';
import qrPreview from '../../../assets/qr-preview.png';

export const qrGeneratorSteps: StepType[] = [
  {
    selector: '#qr-generator-1-step',
    content: () => (
      <TextDetail size='xs' weight='bold'>
        ¡Hola! 🐾 Para empezar, necesitamos que completes este formulario con algunas preguntas sobre tu mascota. ¡Y obtené tu QR personalizado! 🐱🐶
      </TextDetail>
    ),
  },
  {
    selector: '#qr-generator-2-step',
    content: () => (
      <TextDetail size='xs' weight='bold'>
        ¡Podrás ver en tiempo real 🕐 tus cambios en este preview!🐱🐶
      </TextDetail>
    ),
  },
  {
    selector: '#qr-generator-3-step',
    content: () => (
      <TextDetail size='xs' weight='bold'>
        🐾 Primero, necesitamos el nombre de tu mascota. 😊
      </TextDetail>
    ),
  },
  {
    selector: '#qr-generator-4-step',
    content: () => (
      <TextDetail size='xs' weight='bold'>
        🐕 Después te pedimos nos indiques la raza y especie a la que pertenece, ¡Queremos saber más sobre ese amiguito peludo! 🌈😊
      </TextDetail>
    ),
  },
  {
    selector: '#qr-generator-5-step',
    content: () => (
      <TextDetail size='xs' weight='bold'>
        🐾¿Podes adjuntar una imagen de tu amiguito peludo? 📷😊
      </TextDetail>
    ),
  },
  {
    selector: '#qr-generator-6-step',
    content: () => (
      <TextDetail size='xs' weight='bold'>
        ¿Podes agregar una descripción de tu amiguito peludo? ¡Queremos saber más sobre sus travesuras y personalidad! 📖😊
      </TextDetail>
    ),
  },
  {
    selector: '#qr-generator-7-step',
    content: () => (
      <div>
        <TextDetail size='xs' weight='bold'>
          🐾 Una vez completado todos los campos, ¡vamos a generar un código QR! 🌟 Al escanearlo, encontrarás toda la información de tu peludito 📷✨
        </TextDetail>
        <img src={qrPreview} />
      </div>
    ),
  },
];
