/**
 * In-memory rate limiter — 5 submissions per IP per hour.
 * Good enough for MVP. Upgrade to Redis/Upstash if needed.
 */

interface Record {
  count:    number;
  resetAt:  number;
}

const store = new Map<string, Record>();

const MAX_REQUESTS    = 5;
const WINDOW_MS       = 60 * 60 * 1000; // 1 hour

export function checkRateLimit(ip: string): boolean {
  const now   = Date.now();
  const entry = store.get(ip);

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) {
    return false;
  }

  entry.count++;
  return true;
}
