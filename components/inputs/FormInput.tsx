import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type FormInputProps = {
  label: string;
  error?: string;
  registration: UseFormRegisterReturn;
  textarea?: boolean;
} & InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>;

const FormInput = ({ label, error, registration, textarea = false, ...rest }: FormInputProps) => {
  return (
    <div className="w-full">
      <label className={`text-sm font-medium mb-1 block ${error ? 'text-red-600' : ''}`}>
        {error || label}
      </label>

      {textarea ? (
        <textarea
          {...registration}
          {...rest}
          className={`input w-full h-32 resize-none ${error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary placeholder:text-gray-500'}`}
        />
      ) : (
        <input
          {...registration}
          {...rest}
          className={`input w-full ${error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary placeholder:text-gray-500'}`}
        />
      )}
    </div>
  );
};

export default FormInput;