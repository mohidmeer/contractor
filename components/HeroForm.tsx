'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormInput from './inputs/FormInput';
import { siteName } from '@/data';

type FormData = {
    name: string;
    number: string;
    address?: string;
    message?: string;
    site: string;
};

const HeroForm = () => {
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
                    type: 'FREE_CONSULTATION',
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
            <div className="bg-white p-6 rounded-sm shadow overflow-hidden text-center">
                <h2 className="!text-xl mb-3 text-heading">Thank you!</h2>
                <p className="text-gray-600 mb-4">
                    Your free consultation request has been received. We&apos;ll contact you soon.
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
                <FormInput
                    label="Message (optional)"
                    textarea={true}
                    registration={register('message')}
                    error={errors.message?.message}
                    placeholder="Tell us about your project (optional)"
                />
                {submitError && (
                    <p className="text-sm text-red-600">{submitError}</p>
                )}
                <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full h-fit mt-auto mb-auto !scale-100 disabled:opacity-60"
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default HeroForm;
