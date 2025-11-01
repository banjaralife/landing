'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { useEffect } from 'react';

export function PHProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      posthog.init('phc_r6EzNWdnoa9pwsogHv3RarzvSZbghC4p1A3FLyvsv8g', {
        api_host: '/ingest',
        ui_host: 'https://eu.posthog.com',
        capture_pageview: true,
        capture_pageleave: true,
      });
    }
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
