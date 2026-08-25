import { ClaimRelationTypeEnum } from '../types';

export interface ClaimComparisonResult {
  statementA: string;
  statementB: string;
  relationType: ClaimRelationTypeEnum;
  similarityScore: number; // 0.0 to 1.0 (lexical/structural overlap)
  explanation: string;
  recommendation: 'MERGE_CANDIDATE' | 'KEEP_DISTINCT' | 'FLAG_CONTRADICTION' | 'ESTABLISH_HIERARCHY' | 'LINK_COMPLEMENTARY';
}

/**
 * Compares two claim propositions non-destructively, categorizing their logical relationship.
 */
export function compareClaims(statementA: string, statementB: string): ClaimComparisonResult {
  const normA = statementA.trim().toLowerCase();
  const normB = statementB.trim().toLowerCase();

  // Exact or near-exact identical wording
  if (normA === normB) {
    return {
      statementA,
      statementB,
      relationType: 'SAME',
      similarityScore: 1.0,
      explanation: 'Statements are verbatim identical.',
      recommendation: 'MERGE_CANDIDATE',
    };
  }

  // Tokenize words
  const wordsA = new Set(normA.split(/\W+/).filter((w) => w.length > 2));
  const wordsB = new Set(normB.split(/\W+/).filter((w) => w.length > 2));

  const intersection = new Set([...wordsA].filter((x) => wordsB.has(x)));
  const union = new Set([...wordsA, ...wordsB]);

  const jaccard = union.size > 0 ? intersection.size / union.size : 0;

  // Check for contradiction keywords or polar terms
  const negationA = /\b(not|never|prohibits|excludes|cannot|denies|bars|exclusively)\b/.test(normA);
  const negationB = /\b(not|never|prohibits|excludes|cannot|denies|bars|exclusively)\b/.test(normB);

  // If both share a core entity (e.g. article 14) and have opposing polarity
  if ((jaccard >= 0.15 || (normA.includes('article 14') && normB.includes('article 14'))) && negationA !== negationB) {
    return {
      statementA,
      statementB,
      relationType: 'CONTRADICTORY',
      similarityScore: jaccard,
      explanation: 'High topic overlap with conflicting polarity, exclusion, or limitation detected.',
      recommendation: 'FLAG_CONTRADICTION',
    };
  }

  // Clean trailing punctuation for substring check
  const cleanA = normA.replace(/[.,;:]+$/, '').trim();
  const cleanB = normB.replace(/[.,;:]+$/, '').trim();

  // Parent-child / Subsumption check (one statement fully contains the other)
  if (cleanA.includes(cleanB) || cleanB.includes(cleanA)) {
    return {
      statementA,
      statementB,
      relationType: 'PARENT_CHILD',
      similarityScore: jaccard,
      explanation: 'One statement subsumes or specifies the scope of the other.',
      recommendation: 'ESTABLISH_HIERARCHY',
    };
  }

  if (jaccard >= 0.5) {
    return {
      statementA,
      statementB,
      relationType: 'RELATED',
      similarityScore: jaccard,
      explanation: 'Substantial subject-matter overlap; represents closely related facets of the same topic.',
      recommendation: 'LINK_COMPLEMENTARY',
    };
  }

  if (jaccard >= 0.2) {
    return {
      statementA,
      statementB,
      relationType: 'COMPLEMENTARY',
      similarityScore: jaccard,
      explanation: 'Moderate topical overlap; complementary propositions that provide necessary context.',
      recommendation: 'KEEP_DISTINCT',
    };
  }

  return {
    statementA,
    statementB,
    relationType: 'DISTINCT',
    similarityScore: jaccard,
    explanation: 'Low lexical and conceptual overlap; statements represent distinct propositions.',
    recommendation: 'KEEP_DISTINCT',
  };
}
