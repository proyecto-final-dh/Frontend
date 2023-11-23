import React from 'react';
import PropTypes from 'prop-types';
import { Title, TextBody, useInput } from '../../../components';
import DragAndDrop from './DragAndDrop';
import cn from 'classnames';

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

  return (
    <div className="images-container">
      <Title className='title text-primary mb-13' variant='h3'>Cargar imágenes</Title>
      <div className="images-list flex flex-wrap gap-16">
        {images.map((image) => (
          <DragAndDrop
            id={image.id}
            key={image.id}
            value={image.value || currentImage.value}
            onUpload={(value: File) => {
              if (image) {
                image.value = value.name; // Assuming you want to store the file name
                image.isNew = true;
            
                const imageUrl = URL.createObjectURL(value);
                image.value = imageUrl;

                setImages([...images, { id: image.id + 1, value: '' }]);
                currentImage.onChange({ target: { value: '' } });
              }
            }}
            onRemove={(_, id) => {
              setImages(images.filter((img) => img.id !== id));
              currentImage.onChange({ target: { value: ''} });
            }}
          />
        ))}
      </div>
      {!hasError && <Title className='mt-12 text-right' variant='h2'>*Obligatorio</Title>}
      {hasError && (
        <TextBody className='text-error' size='s' weight='regular'>
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
