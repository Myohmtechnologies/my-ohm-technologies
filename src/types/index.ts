export interface Realisation {
  id: string;
  title: string;
  description: string;
  images: string[];
  date: Date;
  location: string;
  specifications: {
    puissance: number;
    pannels: number;
    surface: number;
    economie: number;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  images: string[];
  publishDate: Date;
  author: string;
  details: {
    metaDescription: string;
    tags: string[];
    readTime: number;
  };
}

export enum StageType {
  NOUVEAU_CLIENT = 1,
  RDV_COMMERCIAL = 2,
  VISITE_TECHNIQUE = 3,
  DEMARCHES_ADMIN = 4,
  INSTALLATION = 5,
  VALIDATION_CONSUEL = 6,
  RACCORDEMENT = 7
}

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export enum ResidentialStatus {
  OWNER = 'OWNER',
  TENANT = 'TENANT'
}

export enum LogementType {
  HOUSE = 'HOUSE',
  APARTMENT = 'APARTMENT'
}

export enum LeadStatus {
  NEW = 'NEW',
  CONTACTED = 'CONTACTED',
  MEETING_SCHEDULED = 'MEETING_SCHEDULED',
  TECHNICAL_VISIT = 'TECHNICAL_VISIT',
  CONTRACT_SIGNED = 'CONTRACT_SIGNED',
  INSTALLATION = 'INSTALLATION',
  COMPLETED = 'COMPLETED',
  NOT_INTERESTED = 'NOT_INTERESTED'
}

export interface LeadAction {
  _id?: string;
  leadId: string;
  type: 'CALL' | 'EMAIL' | 'MEETING' | 'TECHNICAL_VISIT' | 'CONTRACT' | 'INSTALLATION';
  status: 'PLANNED' | 'COMPLETED' | 'CANCELLED';
  date: string;
  notes: string;
  nextAction?: {
    type: string;
    plannedDate: string;
  };
}

export interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  residentialStatus: ResidentialStatus;
  logementType: LogementType;
  energyBill: string;
  status: LeadStatus;
  createdAt: string;
  lastAction?: LeadAction;
  nextAction?: {
    type: string;
    plannedDate: string;
  };
}

export enum ResidentialStatus {
  OWNER = 'OWNER',
  TENANT = 'TENANT'
}

export enum LogementType {
  HOUSE = 'HOUSE',
  APARTMENT = 'APARTMENT'
}

// Mapping des statuts aux étapes suivantes possibles
export const STATUS_TRANSITIONS: Record<LeadStatus, LeadStatus[]> = {
  NEW: ['CONTACTED', 'NOT_INTERESTED'],
  CONTACTED: ['MEETING_SCHEDULED', 'NOT_INTERESTED'],
  MEETING_SCHEDULED: ['TECHNICAL_VISIT', 'NOT_INTERESTED'],
  TECHNICAL_VISIT: ['CONTRACT_SIGNED', 'NOT_INTERESTED'],
  CONTRACT_SIGNED: ['INSTALLATION'],
  INSTALLATION: ['COMPLETED'],
  COMPLETED: [],
  NOT_INTERESTED: []
};

// Configuration des actions requises pour chaque transition
export const REQUIRED_ACTIONS: Record<LeadStatus, string[]> = {
  NEW: ['CALL', 'EMAIL'],
  CONTACTED: ['MEETING'],
  MEETING_SCHEDULED: ['TECHNICAL_VISIT'],
  TECHNICAL_VISIT: ['CONTRACT'],
  CONTRACT_SIGNED: ['INSTALLATION'],
  INSTALLATION: [],
  COMPLETED: [],
  NOT_INTERESTED: []
};

export interface StageAction {
  id: string;
  stageId: StageType;
  type: 'rdv_fixe' | 'rappel' | 'non_interesse' | 'devis_signe' | 'second_rdv' | 'custom';
  date?: Date;
  note?: string;
  nextStage?: StageType;
}
