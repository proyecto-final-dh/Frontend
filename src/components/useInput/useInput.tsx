import { useState, ChangeEvent } from 'react';

type Validator = (value: string) => [boolean, string];

interface UseInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  hasError: boolean;
  errorMessage: string;
}

const useInput = (initialValue: string, validator: Validator) => {
  const [value, setValue] = useState<string>(initialValue);
  const [error, setError] = useState<[boolean, string]>([false, '']);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setError(validator?.(event.target.value) || [false, '']);
  };

  const inputProps: UseInputProps = {
    value,
    onChange: handleChange,
    hasError: error[0],
    errorMessage: error[1],
  };

  return inputProps;
};

export default useInput;
