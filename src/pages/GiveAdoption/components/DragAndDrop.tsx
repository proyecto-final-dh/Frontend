import { useState, useEffect } from 'react';
import useDragAndDrop from '../hooks/DragAndDrop';


interface DragAndDropProps {
  id: number;
  value: File;
  onUpload: (file: File, id: number) => void;
  onRemove: (file: File | string, id: number) => void;
  disabled?: boolean;
}

const DragAndDrop: React.FC<DragAndDropProps> = ({ id, value, onUpload, onRemove }) => {
  const [image, setImage] = useState<string | null>();
  const { dragOver, setDragOver, onDragOver, onDragLeave, setFileDropError } = useDragAndDrop();
  console.log(value)
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
    if (value) setImage(`${value}`);
  }, [value]);

  return (
    <div className='bg-wheat w-200 h-150'>
      <label className='label w-full h-full flex cursor-pointer justify-center items-center text-30' htmlFor='file' onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
        {!value && <h1>{!dragOver ? '+' : 'Drop here...'}</h1>}
      </label>
      {!image && <input className='input hidden' type='file' name='file' id='file' onChange={fileSelect} />}
      {image && (
        <div className='w-150 h-150 bg-gray-300 absolute'>
          <img className='image w-full h-full' src={image} alt={value?.name || ''} />
          <section
            className='layout bg-transparent flex justify-center items-center w-full h-full text-transparent absolute top-0 text-30'
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
