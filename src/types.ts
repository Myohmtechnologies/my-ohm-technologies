export type LeadStatus =
  | 'NEW'
  | 'CONTACTED'
  | 'RDV_SCHEDULED'
  | 'TECHNICAL_VISIT'
  | 'DEMARCHE_ADMINISTRATIF'
  | 'INSTALLATION'
  | 'CONSUAL'
  | 'RACORDEMENT_EDF'
  | 'COMPLETED'
  | 'NOT_INTERESTED';

export interface Address {
  street: string;
  postalCode: string;
  city: string;
  additionalInfo?: string;
}

export interface NextAction {
  date: string;
  description: string;
  address?: Address;
}

export interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  status: LeadStatus;
  logementType: 'HOUSE' | 'APARTMENT';
  energyBill: number;
  address?: string;
  postalCode?: string;
  city?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  nextAction?: NextAction;
}

export interface LeadAction {
  _id: string;
  leadId: string;
  type: 'STATUS_CHANGE' | 'NOTE';
  status: LeadStatus;
  date: string;
  notes?: string;
  nextAction?: NextAction;
}
