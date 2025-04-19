// Backend services configuration
export const BACKEND_URL = 'https://chatanonymousbe.onrender.com';

// WebSocket URL derived from the backend URL
export const WS_URL = BACKEND_URL.replace('https://', 'wss://').replace('http://', 'ws://');

// API endpoints
export const API_ENDPOINTS = {
  STATS: `${BACKEND_URL}/api/stats`,
  CHAT: `${WS_URL}/chat`,
};

export default {
  BACKEND_URL,
  WS_URL,
  API_ENDPOINTS,
}; 