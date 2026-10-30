export interface DocumentData {
  childName: string;
  childAge: number;
  childGender?: 'M' | 'F';
  city?: string;
  toothType: string;
  toothPosition: string;
  giftType: string;
  customMessage: string;
}

export interface CreateOrderRequest {
  customerEmail: string;
  documentData: DocumentData;
  includeEnvelope?: boolean; // Indique si l'enveloppe est incluse (pour compatibilité)
  offerType: 'full' | 'envelope_only'; // Transmet 'full' (1.99€) ou 'envelope_only' (0.99€)
}