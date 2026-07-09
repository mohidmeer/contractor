'use client';

import { useState } from 'react';
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
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        setSubmitError(null);

        try {
            const res = await fetch('/api/requests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'REQUEST_QUOTE',
                    name: data.name,
                    phone: data.number,
                    address: data.address,
                    message: data.message,
                    site: data.site,
                }),
            });

            const result = await res.json();
            if (!res.ok) {
                throw new Error(result.error || 'Failed to submit request');
            }

            setSubmitted(true);
            reset({ site: siteName });
        } catch (err) {
            setSubmitError(err instanceof Error ? err.message : 'Failed to submit request');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="bg-white p-8 rounded-xl shadow-lg border border-primary/10 text-center">
                <h2 className="text-3xl font-bold text-heading mb-2">Thank you!</h2>
                <p className="text-gray-600 mb-4">
                    Your request has been received. We&apos;ll get back to you as soon as possible.
                </p>
                <button
                    type="button"
                    className="btn-primary !scale-100"
                    onClick={() => setSubmitted(false)}
                >
                    Submit another request
                </button>
            </div>
        );
    }

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
                {submitError && (
                    <p className="text-sm text-red-600">{submitError}</p>
                )}
                <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full h-fit mt-2 hover:scale-105 transition-transform duration-300 disabled:opacity-60 disabled:hover:scale-100"
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
