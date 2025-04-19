# ChatAnonymousFE

Frontend application for Chat Anonymous, a real-time anonymous chat platform.

## Backend Configuration

The application is configured to connect to the backend at:
- Backend URL: https://chatanonymousbe.onrender.com
- WebSocket URL: wss://chatanonymousbe.onrender.com/chat

## Development

To start the development server:

```bash
npm run dev
```

This will start the app at http://localhost:3000

## Build

To build the application for production:

```bash
npm run build
```

## Configuration

Backend URL configuration is stored in `src/utils/config.js`. If you need to change the backend URL, update it in this file. 