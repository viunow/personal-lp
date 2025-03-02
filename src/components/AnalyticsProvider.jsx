'use client';

import { useEffect, usePathname, useSearchParams } from 'next/navigation';
import { initGA, logPageView } from '@/lib/analytics';
import { initSentry } from '@/lib/sentry';

export default function AnalyticsProvider({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    initGA();
    initSentry();
  }, []);

  useEffect(() => {
    if (pathname) {
      const url =
        pathname +
        (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      logPageView(url);
    }
  }, [pathname, searchParams]);

  return children;
}
