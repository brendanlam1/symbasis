"use client";

import { useSyncExternalStore } from "react";

const PLACEHOLDER = "————.——.—— / ——:——:—— AEST";

function sydneyStamp(now: Date) {
  const parts = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Sydney",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "00";

  const zone =
    new Intl.DateTimeFormat("en-AU", {
      timeZone: "Australia/Sydney",
      timeZoneName: "short",
    })
      .formatToParts(now)
      .find((part) => part.type === "timeZoneName")?.value ?? "AEST";

  const hour = get("hour") === "24" ? "00" : get("hour");

  return `${get("year")}.${get("month")}.${get("day")} / ${hour}:${get("minute")}:${get("second")} ${zone}`;
}

/**
 * The clock lives outside React: a module-level snapshot updated once a second.
 * `useSyncExternalStore` reads it, and the server snapshot is a fixed
 * placeholder so hydration can never mismatch.
 */
let snapshot = "";

function subscribe(onStoreChange: () => void) {
  const id = window.setInterval(() => {
    snapshot = sydneyStamp(new Date());
    onStoreChange();
  }, 1000);
  return () => window.clearInterval(id);
}

function getSnapshot() {
  if (snapshot === "") snapshot = sydneyStamp(new Date());
  return snapshot;
}

function getServerSnapshot() {
  return PLACEHOLDER;
}

/** Live Sydney timestamp, used as technical annotation. */
export function LiveClock({ className = "" }: { className?: string }) {
  const stamp = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return <span className={`mono-data ${className}`}>{stamp}</span>;
}
