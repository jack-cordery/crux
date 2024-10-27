import About from '@/components/ui/about';
import ContactUs from '@/components/ui/contact-us';
import Features from '@/components/ui/features';
import Header from '@/components/ui/header';
import Intro from '@/components/ui/intro';
import Languages from '@/components/ui/languages';
import SectionDivider from '@/components/ui/section-divider';
import { Timeline } from '@/components/ui/timeline';
import { timelineData } from '@/components/ui/timeline-data';
import ActiveSectionContextProvider from '@/context/active-section';

export default function Home() {
  return (
    <>
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(#c0c0c0_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)]"></div>
      <main className="flex flex-col items-center justify-center">
        <ActiveSectionContextProvider>
          <Header />
          <Intro />
          <SectionDivider />
          <Features />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Languages />
          <SectionDivider />
          <Timeline data={timelineData} />
          <SectionDivider />
          <ContactUs />
        </ActiveSectionContextProvider>
      </main>
    </>
  );
}
