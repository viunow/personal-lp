'use client';

import { useEffect } from 'react';
import { initSentry } from '@/lib/sentry';
import { initGA, logPageView } from '@/lib/analytics';
import { usePathname, useSearchParams } from 'next/navigation';

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
