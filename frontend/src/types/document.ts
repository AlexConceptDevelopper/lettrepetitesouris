export interface DocumentData {
  childName: string;
  childAge: number;
  childGender?: 'M' | 'F';
  toothType: string;
  toothPosition: string;
  giftType: string;
  customMessage: string;
}

export interface CreateOrderRequest {
  customerEmail: string;
  documentData: DocumentData;
}