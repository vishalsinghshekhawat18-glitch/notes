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

export const CLEAR_VISION_MAPPING_SOURCE = {
  id: 'SRC-YT-CLEAR-VISION-MAPPING-2026',
  title: 'Clear Vision For UPSC Indian Mapping Master Series (8 Lectures) [PLvvSFoSiIxO23gWf3vMDPWekdHniYN01j]',
  sourceType: 'VIDEO_COURSE',
  authorityTier: 'SECONDARY_PEDAGOGICAL',
  description:
    'Comprehensive visual mapping curriculum with 40-year UPSC Prelims PYQ locations covering Mountain Passes, Peaks, Frontiers, Maritime Channels, and River Confluences.',
  url: 'https://youtube.com/playlist?list=PLvvSFoSiIxO23gWf3vMDPWekdHniYN01j',
  author: 'Clear Vision For UPSC',
  edition: '2026 UPSC Prelims Mapping Edition',
};

export const CLEAR_VISION_MAPPING_COVERAGE_UNITS: GeographyVideoCoverageUnit[] = [
  {
    id: 'CU-YT-GEO-MAP-01',
    videoId: 'fy2AtizrSxg',
    order: 1,
    label: 'Indian Mountain Passes in One Video: Himalaya to Northeast & Peninsular Ghats',
    scopeDescription:
      'Systematic spatial mapping of 25+ strategic mountain passes ordered West-to-East across Ladakh, Jammu & Kashmir, Himachal Pradesh, Uttarakhand, Sikkim, Arunachal Pradesh, and Western Ghats gaps (Thal, Bhor, Palakkad, Shencottah).',
    pillar: 'Orography, Mountain Passes & Strategic Communications',
    targetConceptId: 'CON-GEO-010',
    status: 'PROCESSED',
    canonicalMappingStatus: 'ENRICHED',
    notes: 'Ingested into CON-GEO-010 as dedicated ContentBlock with full West-to-East sequencing table and transport corridors.',
  },
  {
    id: 'CU-YT-GEO-MAP-02',
    videoId: '7XC1pxg3vO0',
    order: 2,
    label: 'India’s Important Peaks in One Shot: Complete Mapping + 25 Years PYQs',
    scopeDescription:
      'Comprehensive elevation hierarchy of highest mountain peaks across all Indian ranges (Karakoram, Great Himalayas, Aravalli, Vindhya, Satpura, Western Ghats, Eastern Ghats, Purvanchal, and Andaman & Nicobar).',
    pillar: 'Orography, Peak Elevations & Regional Geomorphology',
    targetConceptId: 'CON-GEO-010',
    status: 'PROCESSED',
    canonicalMappingStatus: 'ENRICHED',
    notes: 'Ingested into CON-GEO-010 as comprehensive Highest Regional Peaks by Range table with UNESCO status and state locators.',
  },
  {
    id: 'CU-YT-GEO-MAP-03',
    videoId: 'cL6fqb55qFw',
    order: 3,
    label: 'Himalayan & Peninsular River Confluences & Panch Prayag Architecture',
    scopeDescription:
      'Alaknanda confluences descending from Satopanth (Vishnuprayag, Nandaprayag, Karnaprayag, Rudraprayag, Devprayag) and major inter-river confluences (Harike, Tandi).',
    pillar: 'Fluvial Hydrology & Confluence Topography',
    targetConceptId: 'CON-GEO-011',
    status: 'PROCESSED',
    canonicalMappingStatus: 'ENRICHED',
    notes: 'Ingested into CON-GEO-011 as Master Panch Prayag and Strategic River Confluences Matrix.',
  },
  {
    id: 'CU-YT-GEO-MAP-04',
    videoId: '9V8GcC3R_tA',
    order: 4,
    label: 'Indian Frontiers, Coastal Geography, Tropic of Cancer & Maritime Channels',
    scopeDescription:
      'Geographical coordinates, 8°/9°/10° Channels, Duncan Passage, Great Channel, Tropic of Cancer state sequence, and Indian Standard Meridian (82°30’E).',
    pillar: 'Political & Physical Frontiers, Spatial Geometry',
    targetConceptId: 'CON-GEO-010',
    status: 'PROCESSED',
    canonicalMappingStatus: 'ENRICHED',
    notes: 'Consolidated into CON-GEO-010 maritime transect and frontier tables.',
  },
];

