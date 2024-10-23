import React from 'react';

import FeatureCard from '@/components/ui/feature-card';
import SectionHeading from '@/components/ui/section-heading';
import { featuresData } from '@/lib/data';

export default function Features() {
  return (
    <section className="mx-auto max-w-3xl px-4">
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
