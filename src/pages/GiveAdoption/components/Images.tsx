import React from 'react';
import PropTypes from 'prop-types';
import { Title, TextBody, useInput } from '../../../components';
import DragAndDrop from './DragAndDrop';

interface Image {
  id: number;
  value: string | null;
  isNew?: boolean;
}

interface ImagesProps {
  images: Image[];
  setImages: React.Dispatch<React.SetStateAction<Image[]>>;
  hasError: boolean;
  minLength: number;
}

const Images: React.FC<ImagesProps> = ({ images, setImages, hasError, minLength }) => {
  const mandatoryValidator = (value: string): [boolean, string] => {
    return [!value, 'Campo obligatorio'];
  };
  const currentImage = useInput('', mandatoryValidator);
  console.log(images);

  return (
    <div>
      <Title variant='h3'>Cargar imágenes</Title>
      <div>
        {images.map((image) => (
          <DragAndDrop
            id={image.id}
            key={image.id}
            value={image.value || currentImage.value}
            onUpload={(value: File) => {
              if (image) {
                image.value = value.name; // Assuming you want to store the file name
                image.isNew = true;
                setImages([...images, { id: image.id + 1, value: '' }]);
                currentImage.onChange({ target: { value: '' } });
              }
            }}
            onRemove={(_, id) => {
              setImages(images.filter((img) => img.id !== id));
              currentImage.onChange({ target: { value: '' } });
            }}
          />
        ))}
      </div>
      {!hasError && <Title variant='h2'>*Obligatorio</Title>}
      {hasError && (
        <TextBody size='s' weight='regular'>
          <span>Se deben cargar mínimo {minLength} imágenes</span>
        </TextBody>
      )}
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
