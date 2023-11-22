import { useState, useEffect } from 'react';
import useDragAndDrop from '../hooks/DragAndDrop';

interface DragAndDropProps {
  id: number;
  value: File | string;
  onUpload: (file: File, id: number) => void;
  onRemove: (file: File | string, id: number) => void;
  disabled?: boolean;
}

const DragAndDrop: React.FC<DragAndDropProps> = ({ id, value, onUpload, onRemove, disabled }) => {
  const [image, setImage] = useState<string | null>('');
  const { dragOver, setDragOver, onDragOver, onDragLeave, setFileDropError } = useDragAndDrop();

  const onDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();

    setDragOver(false);

    const selectedFile = e?.dataTransfer?.files[0];

    if (selectedFile?.type.split('/')[0] !== 'image') {
      return setFileDropError('Please provide an image file to upload!');
    }

    onUpload(selectedFile, id);
  };

  const fileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e?.target?.files?.[0];

    if (selectedFile?.type.split('/')[0] !== 'image') {
      return setFileDropError('Please provide an image file to upload!');
    }

    setFileDropError('');
    onUpload(selectedFile, id);
  };

  useEffect(() => {
    if (value) setImage(URL.createObjectURL(value));
  }, [value]);

  return (
    <div>
      <label htmlFor='file' onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
        {!value && <h1>{!dragOver ? '+' : 'Drop here...'}</h1>}
      </label>
      {!image && <input type='file' name='file' id='file' onChange={fileSelect} />}
      {image && (
        <div>
          <img src={image} alt={value?.name || ''} />
          <section
            onClick={() => {
              setImage(null);
              onRemove(value, id);
            }}
          >
            <i className='fa-solid fa-x'></i>
          </section>
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;
