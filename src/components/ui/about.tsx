import React from 'react';

import SectionHeading from '@/components/section-heading';

export default function About() {
  return (
    <section className="delay-275 mx-auto max-w-3xl px-4 text-center duration-300 animate-in fade-in slide-in-from-bottom">
      <SectionHeading>About us</SectionHeading>
      <p className="font-light text-gray-700 dark:text-slate-200">
        At
        {' '}
        <span className="font-extrabold">Crux</span>
        , we believe in
        {'  '}
        <span className="font-extrabold">less talking, more doing</span>
        .

        Our product
        {' '}
        <span className="font-extrabold">speaks volumes</span>
        , bridging the gap between Leadership and Engineering with
        <span className="font-extrabold">concrete results</span>
        , not empty promises.

        Experience the power of
        {' '}
        <span className="font-extrabold">actionable insights</span>
        {' '}
        that drive your tech productivity forward.
      </p>
    </section>
  );
}
