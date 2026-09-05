'use client';

import { useEffect } from 'react';

export function ServiceWorkerCleaner() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
          registration.unregister().then((success) => {
            if (success) {
              console.log('[Mind of Aravalli] Unregistered stale service worker:', registration.scope);
            }
          });
        }
      });
    }

    if (typeof window !== 'undefined' && 'caches' in window) {
      caches.keys().then((keys) => {
        for (const key of keys) {
          caches.delete(key).then(() => {
            console.log('[Mind of Aravalli] Deleted stale CacheStorage:', key);
          });
        }
      });
    }
  }, []);

  return null;
}
