import { useState, useEffect, ChangeEvent, DragEvent } from 'react';
import useDragAndDrop from './hooks/useDragAndDrop';

type DragAndDropProps = {
  id: number;
  value: File | null;
  onUpload: (file: File, id: number) => void;
  onRemove: (file: File, id: number) => void;
};

const DragAndDrop = ({ id, value, onUpload, onRemove }: DragAndDropProps) => {
  const [image, setImage] = useState<string | null>(null);
  const { dragOver, setDragOver, onDragOver, onDragLeave, setFileDropError } = useDragAndDrop();

  const onDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();

    setDragOver(false);

    const selectedFile = e?.dataTransfer?.files[0];

    if (selectedFile.type.split('/')[0] !== 'image') {
      return setFileDropError('Please provide an image file to upload!');
    }

    onUpload(selectedFile, id);
  };

  const fileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e?.target?.files?.[0];
    if (selectedFile) {
      if (selectedFile.type.split('/')[0] !== 'image') {
        return setFileDropError('Please provide an image file to upload!');
      }

      setFileDropError('');
      onUpload(selectedFile, id);
    }
  };

  useEffect(() => {
    if (value) setImage(URL.createObjectURL(value));
  }, [value]);

  return (
    <div className='bg-white w-[200px] h-[150px] overflow-hidden relative border-dashed border border-primary rounded-lg'>
      <label
        className='flex items-center justify-center w-full h-full cursor-pointer text-[30px]'
        htmlFor='file'
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {!value && <h1 className='text-[30px] text-center text-primary'>{!dragOver ? '+' : 'Cargar...'}</h1>}
      </label>
      {!image && <input className='hidden' type='file' name='file' id='file' onChange={fileSelect} />}
      {image && (
        <div className='absolute top-0 w-full h-full cursor-pointer'>
          <img className='w-full h-full' src={image} alt={value?.name || ''} />
          <section
            className='bg-[transparent] flex items-center justify-center w-full h-full text-[transparent] absolute top-0 text-[30px] hover:text-black hover:bg-white/70'
            onClick={() => {
              if (value) {
                setImage(null);
                onRemove(value, id);
              }
            }}
          >
            X
          </section>
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;
