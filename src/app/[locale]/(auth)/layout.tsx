import { enUS, frFR } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';

import { AppConfig } from '@/utils/AppConfig';

export default async function AuthLayout(
  props: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
  },
) {
  let clerkLocale = enUS;
  let signInUrl = '/sign-in';
  let signUpUrl = '/sign-up';
  let dashboardUrl = '/dashboard';
  let afterSignOutUrl = '/';

  if ((await props.params).locale === 'fr') {
    clerkLocale = frFR;
  }

  if ((await props.params).locale !== AppConfig.defaultLocale) {
    signInUrl = `/${(await props.params).locale}${signInUrl}`;
    signUpUrl = `/${(await props.params).locale}${signUpUrl}`;
    dashboardUrl = `/${(await props.params).locale}${dashboardUrl}`;
    afterSignOutUrl = `/${(await props.params).locale}${afterSignOutUrl}`;
  }

  return (
    <ClerkProvider
      localization={clerkLocale}
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
      signInFallbackRedirectUrl={dashboardUrl}
      signUpFallbackRedirectUrl={dashboardUrl}
      afterSignOutUrl={afterSignOutUrl}
    >
      {props.children}
    </ClerkProvider>
  );
}
