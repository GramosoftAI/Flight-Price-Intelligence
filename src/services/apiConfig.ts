export const API_BASE_URL = "https://gcrawlai.com/gc/api/v1";

export const GOOGLE_FLIGHTS_ENDPOINT = `${API_BASE_URL}/google-flights`;

// Re-export API key storage & header helper functions
export {
  API_KEY,
  API_KEY_HEADER,
  getApiKey,
  setApiKey,
  getApiKeyFromHeaders,
  buildRequestHeaders,
} from "./apiKey";

