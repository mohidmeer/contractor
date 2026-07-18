"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "./inputs/FormInput";
import { contactPage, siteName } from "@/data";
import { FaCheckCircle } from "react-icons/fa";

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
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "REQUEST_QUOTE",
          name: data.name,
          phone: data.number,
          address: data.address,
          message: data.message,
          site: data.site,
        }),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || "Failed to submit request");
      }

      setSubmitted(true);
      reset({ site: siteName });
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Failed to submit request"
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-white p-8 md:p-10 shadow-lg text-center">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-6 -top-8 text-[6rem] font-bold leading-none text-primary/[0.06]"
        >
          Done
        </span>
        <div className="relative z-[1] flex flex-col items-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/25">
            <FaCheckCircle size={28} />
          </span>
          <h2 className="text-heading font-bold text-2xl">Thank you!</h2>
          <p className="p1 max-w-md">
            Your request has been received. We&apos;ll get back to you as soon
            as possible.
          </p>
          <button
            type="button"
            className="btn-primary !scale-100 mt-2"
            onClick={() => setSubmitted(false)}
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 md:p-10 shadow-lg">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-4 -top-6 select-none text-[5rem] font-bold leading-none text-primary/[0.05]"
      >
        Quote
      </span>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-12 bottom-8 h-36 w-36 rounded-full bg-secondary/20 blur-2xl"
      />

      <div className="relative z-[1] mb-7">
        <p className="flex items-center gap-1.5 mb-2">
          <span className="bg-secondary w-6 h-1 block rounded-full" />
          <span className="text-sm font-bold text-heading">Request form</span>
        </p>
        <h2 className="text-heading font-bold text-2xl md:text-3xl mb-2">
          {contactPage.form.heading}
        </h2>
        <p className="p1">
          Fill out the form below and we&apos;ll get back to you as soon as
          possible.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-[1] flex flex-col gap-5"
      >
        <input className="hidden" defaultValue={siteName} {...register("site")} />
        <FormInput
          label="Name"
          registration={register("name", {
            required: "Please fill out your name",
          })}
          error={errors.name?.message}
          placeholder="Jessi Pinkman"
        />
        <FormInput
          label="Phone Number"
          registration={register("number", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9+\-\s()]{7,}$/,
              message: "Enter a valid phone number",
            },
          })}
          error={errors.number?.message}
          placeholder="1233333444"
          type="tel"
        />
        <FormInput
          label="Address"
          registration={register("address", {
            required: "Address is required",
          })}
          error={errors.address?.message}
          placeholder="1234 Palm Breeze Lane Orlando, FL 32801"
        />
        <FormInput
          label="Message"
          textarea={true}
          registration={register("message", {
            required: "Message is required",
          })}
          error={errors.message?.message}
          placeholder={contactPage.form.messagePlaceholder}
        />
        {submitError && (
          <p className="text-sm text-red-600">{submitError}</p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full h-fit mt-1 hover:scale-[1.02] transition-transform duration-300 disabled:opacity-60 disabled:hover:scale-100"
        >
          {loading ? "Submitting..." : "Submit request"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
