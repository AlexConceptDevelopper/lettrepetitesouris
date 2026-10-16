import { getApiUrl, post } from './client';
import type { CreateOrderRequest } from '../types/document';
import type { StripeResponse } from '../types/stripe';

/**
 * Crée une session de commande pour le pack de documents.
 */
export async function checkoutOrder(request: CreateOrderRequest): Promise<StripeResponse> {
  try {
    return await post<StripeResponse>('/orders/checkout', request);
  } catch (error) {
    console.error("Erreur lors de la création de la session de paiement :", error);
    throw error;
  }
}

export function getPdfDownloadUrl(sessionId: string): string {
  return getApiUrl(`/orders/download-pdf?sessionId=${sessionId}`);
}