import axios, { type RawAxiosRequestHeaders } from "axios";
import { GOOGLE_FLIGHTS_ENDPOINT } from "./apiConfig";
import {
  getApiKey,
  setApiKey,
  getApiKeyFromHeaders,
  buildRequestHeaders,
  API_KEY_HEADER,
} from "./apiKey";

export interface GoogleFlightsPayload {
  trip_type?: string;
  origin: string;
  destination: string;
  outbound_date: string;
  proxy_geo?: string;
  full_flight?: boolean;
}

export interface FlightResponseItem {
  airline: string;
  flight_number?: string;
  departure_time: string;
  arrival_time?: string;
  arrival_date?: string;
  arr_time?: string;
  arr_date?: string;
  price: string | number;
  stops?: string;
  duration?: string;
}

export interface GoogleFlightsResponse {
  status: string;
  message?: string;
  flights: FlightResponseItem[];
}

export interface RequestOptions {
  headers?: Record<string, string | undefined>;
  apiKey?: string;
  timeout?: number;
}

/**
 * Fetches Google Flights intelligence data.
 *
 * If the user includes an API key in the request headers (X-API-Key),
 * it retrieves the key and passes it along in the outgoing request headers.
 * If not provided in the request headers, it retrieves the stored API key from the separate apiKey file.
 *
 * Headers sent:
 * - Content-Type: application/json
 * - X-API-Key: YOUR_API_KEY (when provided)
 */
export async function fetchGoogleFlights(
  payload: GoogleFlightsPayload,
  optionsOrHeaders?: RequestOptions | Record<string, string | undefined>
): Promise<GoogleFlightsResponse> {
  let customHeaders: Record<string, string | undefined> | undefined;
  let explicitApiKey: string | undefined;
  let customTimeout: number | undefined;

  if (optionsOrHeaders) {
    if ("headers" in optionsOrHeaders || "apiKey" in optionsOrHeaders || "timeout" in optionsOrHeaders) {
      const opts = optionsOrHeaders as RequestOptions;
      customHeaders = opts.headers;
      explicitApiKey = opts.apiKey;
      customTimeout = opts.timeout;
    } else {
      customHeaders = optionsOrHeaders as Record<string, string | undefined>;
    }
  }

  // Retrieve API key from request headers or stored file and build outgoing headers
  const requestHeaders = buildRequestHeaders(customHeaders, explicitApiKey);

  const response = await axios.post<GoogleFlightsResponse>(GOOGLE_FLIGHTS_ENDPOINT, payload, {
    headers: requestHeaders as RawAxiosRequestHeaders,
    timeout: customTimeout ?? 5 * 60 * 1000,
  });

  return response.data;
}

export { getApiKey, setApiKey, getApiKeyFromHeaders, buildRequestHeaders, API_KEY_HEADER };

