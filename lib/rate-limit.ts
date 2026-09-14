import "server-only";

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

type RateLimitResult = {
  success: boolean;
  retryAfterSeconds: number;
};

/**
 * Fixed-window rate limiter for a single server instance.
 * Suitable for a portfolio contact form; use a shared store if you run many instances.
 */
export function rateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now();
  pruneExpired(now);

  const current = buckets.get(key);

  if (!current || now >= current.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { success: true, retryAfterSeconds: 0 };
  }

  if (current.count >= limit) {
    return {
      success: false,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  return { success: true, retryAfterSeconds: 0 };
}

function pruneExpired(now: number): void {
  if (buckets.size < 500) return;

  for (const [key, bucket] of buckets) {
    if (now >= bucket.resetAt) buckets.delete(key);
  }
}
