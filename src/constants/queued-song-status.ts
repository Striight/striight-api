export const PENDING = 'pending' as const;

export const CANCELLED = 'cancelled' as const;

export const PUBLISHED = 'published' as const;

export type Status = typeof PENDING | typeof PUBLISHED | typeof CANCELLED;
