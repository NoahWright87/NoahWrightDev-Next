'use client';

import createCache, { Options } from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { useState, type ReactNode } from 'react';
import { CacheProvider } from '@emotion/react';

// Create a unique key for the cache
export const KEY = 'nw-emotion';

export function EmotionCacheProvider({
  children,
  options = undefined,
}: {
  children: ReactNode;
  options?: Partial<Options>;
}) {
  const [cache] = useState(() => {
    // Create an in-memory cache instance during runtime
    const cache = createCache({ key: KEY, ...options });
    cache.compat = true;
    return cache;
  });

  // Use Next.js's useServerInsertedHTML to inject emotion styles into HTML
  useServerInsertedHTML(() => {
    return (
      <>
        {cache.sheet.tags.map((tag, i) => (
          <style
            key={i}
            data-emotion={`${cache.key}`}
            dangerouslySetInnerHTML={{ __html: (tag as HTMLStyleElement).innerHTML }}
          />
        ))}
      </>
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
