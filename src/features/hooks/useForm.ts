import { useState, ChangeEvent } from 'react';

interface InputItems {
  [name: string]: string;
}

export const useForm = (inputValues: InputItems) => {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
};
