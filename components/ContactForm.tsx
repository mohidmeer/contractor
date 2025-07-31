'use client';

import { useForm } from 'react-hook-form';
import FormInput from './inputs/FormInput';
import { pages, siteName } from '@/data/constants';

type FormData = {
    name: string;
    number: string;
    address?: string;
    site: string;
    message: string;
};

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div className=' bg-white p-6 rounded-sm shadow overflow-hidden card'>
            <h2 className='!text-xl mb-6'>{pages.contact.form.heading}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <input className='hidden' defaultValue={siteName}  {...register('site')} />
                <FormInput
                    label="Name"
                    registration={register('name', { required: 'Please fill out your name' })}
                    error={errors.name?.message}
                    placeholder="Jessi Pinkman"
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
                    placeholder="1233333444"
                    type="tel"
                />
                <FormInput
                    label="Address"
                    registration={register('address', { required: 'Address is required' })}
                    error={errors.address?.message}
                    placeholder="1234 Palm Breeze Lane Orlando, FL 32801"
                />
                <FormInput
                    label="Message"
                    textarea={true}
                    registration={register('address', { required: 'Address is required' })}
                    error={errors.address?.message}
                    placeholder={pages.contact.form.messagePlaceholder}
                />
                <button type="submit" className="btn-primary w-full h-fit mt-auto mb-auto !scale-100">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;