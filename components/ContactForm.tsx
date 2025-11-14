'use client';

import { useForm } from 'react-hook-form';
import FormInput from './inputs/FormInput';
import { contactPage, siteName } from '@/data';

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
        <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl border border-primary/10 hover:border-primary/30 transition-all duration-300'>
            <div className="mb-8">
                <h2 className='text-3xl font-bold text-heading mb-2'>{contactPage.form.heading}</h2>
                <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
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
                    registration={register('message', { required: 'Message is required' })}
                    error={errors.message?.message}
                    placeholder={contactPage.form.messagePlaceholder}
                />
                <button type="submit" className="btn-primary w-full h-fit mt-2 hover:scale-105 transition-transform duration-300">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;