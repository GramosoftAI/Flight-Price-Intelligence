/**
 * apiKey.ts - Stored API Key File
 *
 * Enter your API key below and save this file.
 * When running requests, the application automatically retrieves this saved API key
 * and passes it in the request headers:
 *
 *   -H "Content-Type: application/json" \
 *   -H "X-API-Key: YOUR_API_KEY"
 */

// ============================================================================
// >>> ENTER YOUR API KEY HERE AND SAVE THIS FILE <<<
// ============================================================================
export const API_KEY: string = "";
// ============================================================================

// Header name constant
export const API_KEY_HEADER = "X-API-Key";

/**
 * Sanitizes an API key string to prevent HTTP header injection (CRLF).
 */
export function sanitizeApiKey(key?: string | null): string {
  if (!key) return "";
  return String(key).replace(/[\r\n]/g, "").trim();
}

/**
 * Retrieves the stored API key.
 * Checks in order:
 * 1. Saved API_KEY constant in this file
 * 2. Vite environment variable: import.meta.env.VITE_API_KEY
 * 3. Browser localStorage (if previously stored)
 */
export function getApiKey(): string {
  // 1. Saved API_KEY from this file
  if (API_KEY) {
    const clean = sanitizeApiKey(API_KEY);
    if (clean) return clean;
  }

  // 2. Check Vite environment variable
  try {
    const envKey = (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_KEY) as string | undefined;
    if (envKey) {
      const clean = sanitizeApiKey(envKey);
      if (clean) return clean;
    }
  } catch {
    // Ignore environment lookup errors
  }

  // 3. Check browser storage fallback
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      const stored = window.localStorage.getItem("gcrawlai_api_key");
      if (stored) {
        const clean = sanitizeApiKey(stored);
        if (clean) return clean;
      }
    } catch {
      // Ignore localStorage errors
    }
  }

  return "";
}

/**
 * Stores the API key in browser localStorage if needed.
 */
export function setApiKey(key: string): void {
  const clean = sanitizeApiKey(key);
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      if (clean) {
        window.localStorage.setItem("gcrawlai_api_key", clean);
      } else {
        window.localStorage.removeItem("gcrawlai_api_key");
      }
    } catch {
      // Ignore localStorage errors
    }
  }
}

/**
 * Retrieves the API key from incoming request headers if provided under 'X-API-Key'.
 * Checks for 'X-API-Key' or 'x-api-key' (case-insensitive).
 */
export function getApiKeyFromHeaders(
  headers?: Record<string, any> | Headers | [string, string][]
): string | undefined {
  if (!headers) return undefined;

  // Handle Fetch API Headers instance
  if (typeof Headers !== "undefined" && headers instanceof Headers) {
    const fromHeaders = headers.get(API_KEY_HEADER) || headers.get("x-api-key");
    if (fromHeaders) {
      const clean = sanitizeApiKey(fromHeaders);
      if (clean) return clean;
    }
    return undefined;
  }

  // Handle Array of entries [[key, value]]
  if (Array.isArray(headers)) {
    for (const [k, v] of headers) {
      if (k && k.toLowerCase() === "x-api-key" && v) {
        const clean = sanitizeApiKey(String(v));
        if (clean) return clean;
      }
    }
    return undefined;
  }

  // Handle plain Record<string, any>
  if (typeof headers === "object") {
    for (const key of Object.keys(headers)) {
      if (key.toLowerCase() === "x-api-key") {
        const val = headers[key];
        if (val !== undefined && val !== null) {
          const clean = sanitizeApiKey(String(val));
          if (clean) return clean;
        }
      }
    }
  }

  return undefined;
}

/**
 * Helper to build the request headers:
 * - Content-Type: application/json
 * - X-API-Key: YOUR_API_KEY (if provided in file, headers, or override)
 */
export function buildRequestHeaders(
  customHeaders?: Record<string, string | undefined>,
  overrideApiKey?: string
): Record<string, string> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Retrieve API key with priority:
  // 1. Explicit overrideApiKey
  // 2. Incoming X-API-Key header in customHeaders
  // 3. Stored API key from getApiKey() (from this file)
  const apiKey =
    sanitizeApiKey(overrideApiKey) ||
    getApiKeyFromHeaders(customHeaders) ||
    getApiKey();

  if (apiKey) {
    headers[API_KEY_HEADER] = apiKey;
  }

  // Merge any other custom headers, preserving Content-Type and X-API-Key
  if (customHeaders) {
    for (const [key, value] of Object.entries(customHeaders)) {
      if (key.toLowerCase() !== "x-api-key" && value !== undefined && value !== null) {
        headers[key] = String(value);
      }
    }
  }

  return headers;
}
