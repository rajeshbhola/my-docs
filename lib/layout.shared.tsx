import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { source } from '@/lib/source';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'My Docs',
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [],
  };
}
