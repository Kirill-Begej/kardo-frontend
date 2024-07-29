import { useState, useEffect, ChangeEvent } from 'react';

interface ValidationContext {
  email?: string;
  password?: string;
  name?: string;
  [key: string]: any;
}

type ValidateFunction = (value: ValidationContext, context: string) => Record<string, string>;

export function useFormValid(validate: ValidateFunction, context: string) {
  const [value, setValue] = useState<ValidationContext>({});
  const [error, setError] = useState<Record<string, string>>({});
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { target } = evt;
    const values = target.value;
    const { name } = target;
    const newValue = {
      ...value,
      [name]: values,
    };
    setValue(newValue);

    setError(validate(newValue, context));
  };

  useEffect(() => {
    setIsValid(Object.keys(error).length === 0 && Object.keys(value).length > 0);
  }, [error, value]);

  return {
    handleChange,
    value,
    error,
    setValue,
    isValid,
  };
}

export function validation(value: ValidationContext, context: string): Record<string, string> {
  const error: Record<string, string> = {};
  if (context === 'register' || context === 'login') {
    if (!value.email) {
      error.email = 'Заполните поле Email!';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.email)) {
      error.email = 'Невалидный Email';
    }
  }
  if (context === 'register' || context === 'login') {
    if (!value.password) {
      error.password = 'Заполните поле пароль!';
    } else if (value.password.length < 8) {
      const count = 8 - value.password.length;
      error.password = `Пароль должен быть длиной ${count} ${count === 1 ? 'символ' : 'символа'}`;
    }
  }

  if (context === 'register' || context !== 'login') {
    if (!value.name) {
      error.name = 'Заполните поле Имени!';
    } else if (value.name.length < 2) {
      const count = 2 - value.name.length;
      error.name = `Имя должно быть длиной ${count} ${count === 1 ? 'символ' : 'символа'}`;
    } else if (value.name.length > 30) {
      error.name = 'Имя должно быть меньше 30 символов';
    }
  }

  return error;
}
