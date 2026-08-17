"use client";

import { useCallback, useSyncExternalStore } from "react";

function alwaysFalse() {
  return false;
}

/**
 * Reads a media query as external state. `useSyncExternalStore` keeps it out of
 * effects (no setState-in-effect) and renders `false` on the server so
 * hydration always matches.
 */
export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onStoreChange);
      return () => mql.removeEventListener("change", onStoreChange);
    },
    [query]
  );

  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [query]
  );

  return useSyncExternalStore(subscribe, getSnapshot, alwaysFalse);
}

/** True when the visitor has asked the OS to reduce motion. */
export function useReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
