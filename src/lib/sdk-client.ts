/**
 * TipForge SDK Client
 * Singleton SDK instance for the application
 */

import { TipForgeClient } from 'tipforge-sdk';
import { useAuthStore } from '@/stores/auth-store';

let sdkClient: TipForgeClient | null = null;

/**
 * Initialize SDK client
 */
export function initSDKClient(): TipForgeClient {
  if (sdkClient) {
    return sdkClient;
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  const token = useAuthStore.getState().token;

  sdkClient = new TipForgeClient({
    baseUrl,
    token: token || undefined,
    timeout: 30000,
  });

  return sdkClient;
}

/**
 * Get SDK client instance
 */
export function getSDKClient(): TipForgeClient {
  if (!sdkClient) {
    return initSDKClient();
  }
  return sdkClient;
}

/**
 * Update SDK token when auth changes
 */
export function updateSDKToken(token: string | null): void {
  const client = getSDKClient();
  if (token) {
    client.setToken(token);
  } else {
    client.clearToken();
  }
}

/**
 * SDK Hooks and utilities
 */

/**
 * Hook to get SDK client
 */
export function useSDKClient(): TipForgeClient {
  const token = useAuthStore((state) => state.token);

  if (!sdkClient) {
    sdkClient = initSDKClient();
  }

  // Update token if it changed
  if (token && (!sdkClient || sdkClient.getConfig().token !== token)) {
    updateSDKToken(token);
  }

  return sdkClient;
}
