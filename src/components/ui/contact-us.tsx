'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { type FieldValues, FormProvider, useForm, useFormContext } from 'react-hook-form';
import { FaPaperPlane } from 'react-icons/fa';
import ClipLoader from 'react-spinners/ClipLoader';

import { sendEmail } from '@/lib/actions';
import { useSectionInView } from '@/lib/hooks';
import { contactSchema } from '@/validations/ui-validations';

import AnimatedCheckIcon from './animated-check-icon';
import SectionHeading from './section-heading';

export default function ContactUs() {
  const methods = useForm({ resolver: zodResolver(contactSchema) });
  const { ref } = useSectionInView('Contact');

  return (
    <FormProvider {...methods}>
      <section
        className="mb-28 mt-4 scroll-mt-28 px-4 md:mb-[100rem] md:w-[38rem] lg:w-[48rem]"
        id="contact"
        ref={ref}
      >
        <div className="mx-auto w-full rounded-lg border border-black/10 bg-white px-10 py-8 dark:bg-white/0 dark:bg-gradient-to-r dark:from-slate-900/50 dark:to-slate-700/50 dark:outline dark:outline-white/20">
          <SectionHeading>Contact Us</SectionHeading>
          <ContactCard />
        </div>
      </section>
    </FormProvider>
  );
}

function SentMessage() {
  return (
    <div className=" col-span-1 mb-20 flex-col items-center justify-center px-10 text-center">
      <div className="flex size-96 w-full items-center justify-center">
        <AnimatedCheckIcon />
      </div>
      <p className="mt-4 text-center text-gray-700 dark:text-gray-400">
        Thanks! your message was sent. We will get back to you in due course.
      </p>
    </div>
  );
}

function ContactCard() {
  const { formState } = useFormContext();
  return (
    formState.isSubmitSuccessful ? <SentMessage /> : <ContactForm />
  );
}

function ContactForm() {
  const { register, formState, handleSubmit, reset } = useFormContext();
  const { errors, isSubmitting } = formState;
  const onSubmit = async (formData: FieldValues) => { // Changed from FormData to FieldValues
    await sendEmail(formData);
    reset();
  };

  return (
    <div>
      <p className="text-center text-gray-700 dark:text-gray-400">
        Please contact us directly at
        {' '}
        <a className="underline" href="mailto:crux.dev@proton.me">
          crux.dev@proton.me
        </a>
        {' '}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-gray-900"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="h-14 rounded-lg border border-black/10 bg-white/80 px-4 py-2 text-lg placeholder:text-gray-600 dark:bg-gray-950 dark:text-gray-50 dark:placeholder:text-gray-400"
          id="emailAddress"
          {...register('emailAddress')}
          placeholder="Your email"
        />
        {errors.emailAddress && <span className="text-destructive">{String(errors.emailAddress.message)}</span>}
        <textarea
          className="mt-4 h-52 rounded-lg border border-black/10 px-4 py-2 text-lg placeholder:text-gray-600 dark:bg-gray-950 dark:text-gray-50 dark:placeholder:text-gray-400"
          {...register('emailContent')}
          placeholder="Please write here..."
          rows={8}
        />
        {errors.emailContent && <span className="text-destructive">{String(errors.emailContent.message)}</span>}
        <button
          className="group mx-auto mt-4 flex w-32 items-center justify-center rounded-lg bg-black px-4 py-2 text-white hover:scale-105 focus:scale-100  md:w-48"
          type="submit"
          disabled={isSubmitting}
        >
          {!isSubmitting && `Submit`}
          {isSubmitting ? <ClipLoader color="#808080" aria-label="Loading Spinner" /> : <FaPaperPlane className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-2 group-hover:scale-110" /> }
        </button>
      </form>
    </div>
  );
}
