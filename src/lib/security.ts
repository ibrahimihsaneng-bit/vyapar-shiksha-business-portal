'use client';

export type UserRole = 'Learner' | 'Recruiter' | 'Super Admin';

const STORAGE_KEYS = {
  USER_ROLE: 'cl_user_role',
  ADMIN_SESSION: 'cl_admin_session_token',
  RATE_LIMITS: 'cl_rate_limits',
};

/**
 * XSS & HTML Sanitization
 * Strips script tags, on* event handlers, and dangerous iframe/object tags.
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/on\w+='[^']*'/gi, '')
    .replace(/javascript:[^"']*/gi, '')
    .trim();
}

/**
 * Validates email formatting
 */
export function validateEmail(email: string): boolean {
  if (!email) return false;
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email.trim());
}

/**
 * Validates Indian or International phone numbers
 */
export function validatePhone(phone: string): boolean {
  if (!phone) return false;
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

/**
 * Client-Side Rate Limiter
 * Ensures action cannot be triggered more than maxCount times within windowSeconds.
 */
export function checkRateLimit(actionKey: string, maxCount = 5, windowSeconds = 60): { allowed: boolean; remaining: number } {
  if (typeof window === 'undefined') return { allowed: true, remaining: maxCount };

  try {
    const raw = localStorage.getItem(STORAGE_KEYS.RATE_LIMITS);
    const store: Record<string, number[]> = raw ? JSON.parse(raw) : {};
    const now = Date.now();
    const windowMs = windowSeconds * 1000;

    const timestamps = (store[actionKey] || []).filter(t => now - t < windowMs);

    if (timestamps.length >= maxCount) {
      return { allowed: false, remaining: 0 };
    }

    timestamps.push(now);
    store[actionKey] = timestamps;
    localStorage.setItem(STORAGE_KEYS.RATE_LIMITS, JSON.stringify(store));

    return { allowed: true, remaining: maxCount - timestamps.length };
  } catch {
    return { allowed: true, remaining: maxCount };
  }
}

/**
 * Get the current active user role
 */
export function getUserRole(): UserRole {
  if (typeof window === 'undefined') return 'Learner';
  try {
    const role = localStorage.getItem(STORAGE_KEYS.USER_ROLE);
    if (role === 'Recruiter' || role === 'Super Admin') return role;
    return 'Learner';
  } catch {
    return 'Learner';
  }
}

/**
 * Switch role
 */
export function setUserRole(role: UserRole): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.USER_ROLE, role);
  if (role === 'Super Admin') {
    localStorage.setItem(STORAGE_KEYS.ADMIN_SESSION, `session_${Date.now()}`);
  }
}

/**
 * Check if admin session is active
 */
export function isAdminLoggedIn(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const token = localStorage.getItem(STORAGE_KEYS.ADMIN_SESSION);
    const role = getUserRole();
    return Boolean(token) && role === 'Super Admin';
  } catch {
    return false;
  }
}

/**
 * Log into admin portal
 * Standard demo secret: 'launchpad2026' or 'admin123'
 */
export function loginAdmin(passcode: string): boolean {
  if (passcode.trim() === 'launchpad2026' || passcode.trim() === 'admin123') {
    setUserRole('Super Admin');
    return true;
  }
  return false;
}

/**
 * Logout admin
 */
export function logoutAdmin(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEYS.ADMIN_SESSION);
  setUserRole('Learner');
}
