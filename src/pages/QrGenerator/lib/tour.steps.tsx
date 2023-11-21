import { StepType } from '@reactour/tour';
import { TextDetail } from '../../../components';
import qrPreview from '../../../assets/qr-preview.png';

export const qrGeneratorSteps: StepType[] = [
  {
    selector: '#qr-generator-1-step',
    content: () => (
      <TextDetail size='xs' weight='bold'>
        ¡Hola! 🐾 Para empezar, necesitamos que completes un formulario con algunas preguntas para conocer mejor a tu mascota. ¡Será divertido conocer más sobre
        ella! 🐱🐶
      </TextDetail>
    ),
  },
  {
    selector: '#qr-generator-2-step',
    content: () => (
      <TextDetail size='xs' weight='bold'>
        ¡Luego de esto, verás en tiempo real 🕐 tus cambios en este preview!🐱🐶
      </TextDetail>
    ),
  },
  {
    selector: '#qr-generator-3-step',
    content: () => (
      <TextDetail size='xs' weight='bold'>
        🐾 Primero, necesitamos el nombre de tu mascotita. ¿Cómo se llama esa bolita de pelusa tan encantadora? 😊
      </TextDetail>
    ),
  },
  {
    selector: '#qr-generator-4-step',
    content: () => (
      <TextDetail size='xs' weight='bold'>
        🐕 Después de conocer el nombre de tu mascotita, ¿podrías indicarnos la raza y especie a la que pertenece? ¡Queremos saber más sobre ese amiguito
        peludo! 🌈😊
      </TextDetail>
    ),
  },
  {
    selector: '#qr-generator-5-step',
    content: () => (
      <TextDetail size='xs' weight='bold'>
        🐾¿Podrías adjuntarnos una imagen de tu amiguito peludo? Nos encantaría verlo en acción. 📷😊
      </TextDetail>
    ),
  },
  {
    selector: '#qr-generator-6-step',
    content: () => (
      <TextDetail size='xs' weight='bold'>
        ¿Podrías proporcionarnos una encantadora descripción de tu amiguito peludo? ¡Queremos saber más sobre sus travesuras y personalidad! 📖😊
      </TextDetail>
    ),
  },
  {
    selector: '#qr-generator-7-step',
    content: () => (
      <div>
        <TextDetail size='xs' weight='bold'>
          🐾 Después de conocer el nombre de tu mascotita y toda la información sobre raza, especie y una encantadora descripción, ¡vamos a generar un código QR
          mágico! 🌟 Al escanearlo, encontrarás toda la información de tu peludito. ¡Será genial! 📷✨
        </TextDetail>
        <img src={qrPreview} />
      </div>
    ),
  },
];
