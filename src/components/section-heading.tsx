import React from 'react';

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 text-2xl">{children}</h2>
  );
}
