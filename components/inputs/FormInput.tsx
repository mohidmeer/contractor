import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type FormInputProps = {
  label: string;
  error?: string;
  registration: UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({ label, error, registration,placeholder ,...rest }: FormInputProps) => {
  return (
    <div className="w-full">
      <label className="hidden text-sm font-medium mb-1">{label}</label>
      <input
        {...registration}
        {...rest}
        placeholder={error ? error : placeholder}
        className={`input ${
          error ? 'border-red-500 focus:ring-red-500 placeholder:!text-red-500' : 'focus:ring-primary placeholder:text-gray-500'
        }`}
      />
    </div>
  );
};

export default FormInput;