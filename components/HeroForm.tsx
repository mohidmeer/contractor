'use client';

import { useForm } from 'react-hook-form';
import FormInput from './inputs/FormInput';
import { siteName } from '@/data/constants';

type FormData = {
    name: string;
    number: string;
    address?:string;
    site:string
};

const HeroForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div className=' bg-white p-6 rounded-sm shadow overflow-hidden'>
            <h2 className='!text-xl mb-6'>Book a Free Consultation</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <input className='hidden' defaultValue={siteName}  {...register('site')}  />
                <FormInput
                    label="Name"
                    registration={register('name', { required: 'Please fill out your name' })}
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
                 <FormInput
                    label="Address"
                    registration={register('address',{required:'Address is required'} )}
                    error={errors.address?.message}
                    placeholder="Your Address"
                />
                <button type="submit" className="btn-primary w-full h-fit mt-auto mb-auto !scale-100">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default HeroForm;