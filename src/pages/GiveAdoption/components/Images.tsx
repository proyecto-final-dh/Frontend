import React from 'react';
import PropTypes from 'prop-types';
import { TextDetail } from '../../../components';
import DragAndDrop from './DragAndDrop';

interface Image {
  id: number;
  value: Blob | null;
  isNew?: boolean;
}

interface ImagesProps {
  images: Image[];
  setImages: React.Dispatch<React.SetStateAction<Image[]>>;
  hasError: boolean;
  minLength: number;
}

const Images: React.FC<ImagesProps> = ({ images, setImages }) => {
  // const mandatoryValidator = (value: string): [boolean, string] => {
  //   return [!value, 'Campo obligatorio'];
  // };
  // const currentImage = useInput('', mandatoryValidator);

  return (
    <div className='relative flex flex-wrap justify-center gap-4 p-4 border rounded-lg border-mui-gray md:justify-start' id='qr-generator-5-step'>
      <TextDetail size='xs' weight='regular' className='absolute z-10 px-2 text-black bg-white left-2 -top-3'>
        Imágenes de la mascota
      </TextDetail>
      {images.map((image) => (
        <DragAndDrop
          id={image.id}
          key={image.id}
          value={image.value}
          onUpload={(value: Blob) => {
            if (image) {
              image.value = value; // Assuming you want to store the file name
              image.isNew = true;

              setImages([...images, { id: image.id + 1, value: null }]);
              // currentImage.onChange({ target: { value: '' } });
            }
          }}
          onRemove={(_, id) => {
            setImages(images.filter((img) => img.id !== id));
            // currentImage.onChange({ target: { value: '' } });
          }}
        />
      ))}
    </div>
  );
};

Images.propTypes = {
  images: PropTypes.array.isRequired,
  setImages: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  minLength: PropTypes.number.isRequired,
};

export default Images;
