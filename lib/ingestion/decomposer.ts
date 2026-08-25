import { db } from '../db/client';

export interface SectionNodeInput {
  title: string;
  sectionType: string; // VOLUME, PART, CHAPTER, SUBCHAPTER, ARTICLE, CLAUSE, SECTION, TABLE, FOOTNOTE, APPENDIX
  locator?: string;
  pageStart?: number;
  pageEnd?: number;
  order?: number;
  scopeDescription?: string;
  createCoverageUnit?: boolean; // If true, automatically generates a trackable CoverageUnit
  children?: SectionNodeInput[];
}

export interface DecomposeSourcePayload {
  sourceId: string;
  sections: SectionNodeInput[];
  strategy?: 'ARTICLE_GRANULARITY' | 'SECTION_GRANULARITY' | 'HYBRID';
}

/**
 * Recursively creates a hierarchical SourceSection tree and attaches CoverageUnits.
 */
export async function decomposeSource(payload: DecomposeSourcePayload) {
  const source = await db.source.findUnique({
    where: { id: payload.sourceId },
  });

  if (!source) {
    throw new Error(`Source with ID "${payload.sourceId}" not found.`);
  }

  const createdSections: Array<{ id: string; title: string }> = [];
  const createdCoverageUnits: Array<{ id: string; label: string }> = [];

  let globalOrder = 0;

  async function processNode(node: SectionNodeInput, parentId: string | null = null): Promise<string> {
    globalOrder += 1;
    const currentOrder = node.order ?? globalOrder;

    // 1. Create SourceSection
    const section = await db.sourceSection.create({
      data: {
        sourceId: source!.id,
        parentId: parentId,
        title: node.title,
        sectionType: node.sectionType,
        locator: node.locator,
        pageStart: node.pageStart,
        pageEnd: node.pageEnd,
        order: currentOrder,
      },
    });

    createdSections.push({ id: section.id, title: section.title });

    // 2. If node is a terminal leaf or explicitly flagged, create a CoverageUnit
    const isLeaf = !node.children || node.children.length === 0;
    const shouldCreateUnit = node.createCoverageUnit ?? isLeaf;

    if (shouldCreateUnit) {
      const coverageUnit = await db.coverageUnit.create({
        data: {
          sourceId: source!.id,
          sourceSectionId: section.id,
          label: `${node.sectionType}: ${node.title}`,
          scopeDescription: node.scopeDescription || `${node.title} (${node.locator || 'Unspecified location'})`,
          order: currentOrder,
          status: 'UNPROCESSED',
          extractionStatus: 'PENDING',
          verificationStatus: 'UNCHECKED',
          canonicalMappingStatus: 'UNMAPPED',
        },
      });
      createdCoverageUnits.push({ id: coverageUnit.id, label: coverageUnit.label });
    }

    // 3. Process children recursively
    if (node.children && node.children.length > 0) {
      for (const child of node.children) {
        await processNode(child, section.id);
      }
    }

    return section.id;
  }

  for (const rootSection of payload.sections) {
    await processNode(rootSection, null);
  }

  return {
    sourceId: source.id,
    sectionsCreatedCount: createdSections.length,
    coverageUnitsCreatedCount: createdCoverageUnits.length,
    sections: createdSections,
    coverageUnits: createdCoverageUnits,
  };
}
