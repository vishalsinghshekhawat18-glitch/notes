/**
 * Amit Sengupta Physical Geography Lecture Series — Source Coverage Ledger
 * Source ID: SRC-YT-AMIT-SENGUPTA-GEOGRAPHY
 * Video: Important Geographical Terms Features Landforms Of Earth [8McizDCj6qE]
 * Mind of Aravalli — Academic Reading Hub
 */

export interface GeographyVideoCoverageUnit {
  id: string;
  videoId: string;
  order: number;
  label: string;
  scopeDescription: string;
  pillar: string;
  targetConceptId: string;
  status: 'PROCESSED' | 'MAPPED' | 'IN_REVIEW';
  canonicalMappingStatus: 'MAPPED' | 'ENRICHED' | 'SALVAGED';
  notes: string;
}

export const AMIT_SENGUPTA_GEOGRAPHY_SOURCE = {
  id: 'SRC-YT-AMIT-SENGUPTA-GEOGRAPHY',
  title: 'Amit Sengupta Physical Geography Master Series: Landforms & Terms [8McizDCj6qE]',
  sourceType: 'VIDEO_LECTURE',
  authorityTier: 'SECONDARY_PEDAGOGICAL',
  description:
    'Comprehensive pedagogical visual glossary of 50+ geomorphological terms, landforms, and physical features of Earth (Fluvial, Glacial, Aeolian, Karst, Coastal, and Tectonic), decomposed under the Zero Unaccounted-For Source Omission principle.',
  url: 'https://www.youtube.com/watch?v=8McizDCj6qE',
  author: 'Amit Sengupta',
  edition: '2020-2024 Educational Series',
};

export const AMIT_SENGUPTA_GEOGRAPHY_COVERAGE_UNITS: GeographyVideoCoverageUnit[] = [
  {
    id: 'CU-YT-GEO-LANDFORMS-01',
    videoId: '8McizDCj6qE',
    order: 1,
    label: 'Important Geographical Terms Features Landforms Of Earth',
    scopeDescription:
      'Amit Sengupta Physical Geography Master Lecture [8McizDCj6qE]: Systematic visual glossary of planetary landforms across 6 physical domains (Fluvial, Glacial, Aeolian, Karst, Marine, and Tectonic/Topographic).',
    pillar: 'Geomorphology, Landform Evolution & Physical Earth Lexicon',
    targetConceptId: 'CON-GEO-003',
    status: 'PROCESSED',
    canonicalMappingStatus: 'ENRICHED',
    notes:
      'Mapped directly into CON-GEO-003 as ContentBlock 5 (Universal Landform Master Matrix) with full erosional vs depositional taxonomy, claims CLM-GEO-003-04 & CLM-GEO-003-05, and active recall elimination drills.',
  },
];
