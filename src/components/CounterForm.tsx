'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import type { FieldValues } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { incrementCount } from '@/libs/actions';
import { CounterValidation } from '@/validations/CounterValidation';

export const CounterForm = () => {
  const t = useTranslations('CounterForm');

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<z.infer<typeof CounterValidation>>({
    resolver: zodResolver(CounterValidation),
    defaultValues: {
      increment: 0,
    },
  });

  const onSubmit = async (data: FieldValues) => {
    await incrementCount(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>{t('presentation')}</p>
      <div>
        <label className="text-sm font-bold text-gray-700" htmlFor="increment">
          {t('label_increment')}
          <input
            id="increment"
            type="number"
            className="ml-2 w-32 appearance-none rounded border px-2 py-1 text-sm leading-tight text-gray-700 focus:outline-none focus:ring focus:ring-blue-300/50"
            {...register('increment')}
          />
        </label>

        {errors.increment?.message && (
          <div className="my-2 text-xs italic text-red-500">{errors.increment?.message}</div>
        )}
      </div>

      <div className="mt-2">
        <button
          className="rounded bg-blue-500 px-5 py-1 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300/50 disabled:pointer-events-none disabled:opacity-50"
          type="submit"
          disabled={isSubmitting}
        >
          {t('button_increment')}
        </button>
      </div>
    </form>
  );
};
