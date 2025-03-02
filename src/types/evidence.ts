export interface EvidenceType {
  id: string;
  title: string;
  description: string;
  analysisTypes: string[];
  collection: string[];
  steps: {
    title: string;
    details: string[];
  }[];
  interpretation: string[];
}
