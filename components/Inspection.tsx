'use client';

import { useForm } from 'react-hook-form';
import FormInput from './inputs/FormInput';

type FormData = {
    name: string;
    number: string;
};

const Inspection = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div className='max-w-5xl mx-auto bg-white p-6 rounded-sm shadow'>
            <h2 className='!text-xl mb-6'>Book a Free Consultation</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="  grid grid-cols-3 gap-10">
                <FormInput
                    label="Name"
                    registration={register('name', { required: 'Name is required' })}
                    error={errors.name?.message}
                    placeholder="Enter your name"
                />
                <FormInput
                    label="Phone Number"
                    registration={register('number', {
                        required: 'Phone number is required',
                        pattern: {
                            value: /^[0-9+\-\s()]{7,}$/,
                            message: 'Enter a valid phone number',
                        },
                    })}
                    error={errors.number?.message}
                    placeholder="Enter your number"
                    type="tel"
                />
                <button type="submit" className="btn-primary w-full h-fit mt-auto mb-auto">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Inspection;