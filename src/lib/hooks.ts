import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useActiveSection } from '@/context/use-active-section';
import type { SectionName } from '@/lib/types';

export function useSectionInView(sectionName: SectionName, threshold: number = 0.5) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}
