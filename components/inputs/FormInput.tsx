import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type FormInputProps = {
  label: string;
  error?: string;
  registration: UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({ label, error, registration, ...rest }: FormInputProps) => {
  return (
    <div className="w-full">
      <label className={`text-sm  font-medium mb-1 ${error && '!text-red-600'}`} >{ error ? error  : label }</label>
      <input
        {...registration}
        {...rest}
        className={`input w-fit ${error ? 'border-red-500 focus:ring-red-500 ' : 'focus:ring-primary placeholder:text-gray-500'
          }`}
      />
    </div>
  );
};

export default FormInput;