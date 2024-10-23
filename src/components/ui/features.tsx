'use client';

import React from 'react';

import FeatureCard from '@/components/ui/feature-card';
import SectionHeading from '@/components/ui/section-heading';
import { featuresData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export default function Features() {
  const { ref } = useSectionInView('Features');

  return (
    <section
      className="mx-auto max-w-3xl scroll-m-28 px-4 duration-300 animate-in fade-in slide-in-from-bottom"
      id="features"
      ref={ref}
    >
      <SectionHeading>Features</SectionHeading>
      <div className="mb-32 grid grid-cols-1 gap-y-10">
        {featuresData.map(feature => (
          <React.Fragment key={feature.title}>
            <FeatureCard {...feature} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
