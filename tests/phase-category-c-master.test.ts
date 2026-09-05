import { describe, it, expect, beforeAll } from 'vitest';
import { db } from '../lib/db/client';
import { seedMedievalMasterCanonicalKnowledge } from '../lib/benchmark/batch-medieval-history-canonical-seed';
import { seedModernMasterCanonicalKnowledge } from '../lib/benchmark/batch-modern-history-canonical-seed';
import { seedArtCultureRajasthanMasterCanonicalKnowledge } from '../lib/benchmark/batch-art-culture-rajasthan-canonical-seed';
import { seedWorldHistoryMasterCanonicalKnowledge } from '../lib/benchmark/batch-world-history-canonical-seed';

describe('Category C Full History & Culture Certification Suite (C1, C2, C3, C4)', () => {
  beforeAll(async () => {
    await seedMedievalMasterCanonicalKnowledge();
    await seedModernMasterCanonicalKnowledge();
    await seedArtCultureRajasthanMasterCanonicalKnowledge();
    await seedWorldHistoryMasterCanonicalKnowledge();
  });

  it('1. should verify C1: Medieval Indian History (10 concepts across 8 topics)', async () => {
    const medievalSlugs = [
      'early-medieval-tripartite-struggle-and-chola-village-autonomy',
      'delhi-sultanate-dynastic-succession-balban-kingship-and-iqta-system',
      'alauddin-khalji-market-reforms-and-muhammad-bin-tughlaq-experiments',
      'vijayanagara-empire-dynasties-krishnadevaraya-and-amaranayaka-system',
      'the-bahmani-kingdom-and-the-five-deccan-sultanates',
      'bhakti-and-sufi-movements-saguna-nirguna-and-silsila-traditions',
      'mughal-empire-mansabdari-system-jagirdari-and-todar-mal-zabt-dahsala',
      'mughal-statecraft-rajput-policy-ibadat-khana-and-sulh-i-kul',
      'indo-islamic-architectural-evolution-trabeate-to-arcuate-and-mughal-monuments',
      'foreign-travellers-and-medieval-historiography-albiruni-ibn-battuta-bernier',
    ];

    expect(medievalSlugs.length).toBe(10);

    for (const slug of medievalSlugs) {
      const concept = await db.concept.findFirst({
        where: { slug },
        include: {
          contentBlocks: true,
          claims: { include: { evidence: true } },
          examMappings: true,
          revisionUnits: true,
          questions: true,
        },
      });

      expect(concept, `Medieval concept ${slug} must exist`).toBeDefined();
      expect(concept?.contentBlocks.length).toBeGreaterThanOrEqual(4);
      expect(concept?.claims.length).toBeGreaterThanOrEqual(3);
      expect(concept?.examMappings.length).toBeGreaterThanOrEqual(8);
      expect(concept?.revisionUnits.length).toBeGreaterThanOrEqual(3);
      expect(concept?.questions.length).toBeGreaterThanOrEqual(2);

      for (const clm of concept?.claims || []) {
        expect(clm.evidence.length).toBeGreaterThanOrEqual(1);
        expect(clm.evidence[0].locator).toBeTruthy();
      }
    }
  });

  it('2. should verify C2: Modern Indian History & National Movement (21 concepts across 13 topics)', async () => {
    const modernSlugs = [
      'european-penetration-and-carnatic-wars',
      'plassey-buxar-and-the-dual-government-of-bengal',
      'anglo-mysore-and-anglo-maratha-expansion-wars',
      'subsidiary-alliance-and-doctrine-of-lapse',
      'colonial-land-revenue-systems-permanent-settlement-ryotwari-mahalwari',
      'drain-of-wealth-and-deindustrialization-of-india',
      'the-great-revolt-of-1857-causes-centers-and-suppression',
      'government-of-india-act-1858-and-queen-victorias-proclamation',
      'socio-religious-reform-movements-renaissance-and-revivalism',
      'subaltern-and-anti-caste-emancipation-phule-to-ambedkar',
      'foundation-of-inc-and-moderate-nationalism',
      'extremist-challenge-partition-of-bengal-and-swadeshi',
      'revolutionary-nationalism-anushilan-hra-hsra-and-chittagong',
      'subhas-chandra-bose-and-the-indian-national-army',
      'constitutional-evolution-morley-minto-montagu-chelmsford-and-goi-act-1935',
      'early-gandhian-interventions-champaran-ahmedabad-kheda-and-rowlatt',
      'non-cooperation-movement-and-khilafat',
      'civil-disobedience-movement-dandi-march-and-poona-pact',
      'the-quit-india-movement-and-august-revolution-1942',
      'communal-politics-two-nation-theory-and-road-to-partition',
      'partition-of-india-and-integration-of-princely-states',
    ];

    expect(modernSlugs.length).toBe(21);

    for (const slug of modernSlugs) {
      const concept = await db.concept.findFirst({
        where: { slug },
        include: {
          contentBlocks: true,
          claims: { include: { evidence: true } },
          examMappings: true,
          revisionUnits: true,
          questions: true,
        },
      });

      expect(concept, `Modern concept ${slug} must exist`).toBeDefined();
      expect(concept?.contentBlocks.length).toBeGreaterThanOrEqual(4);
      expect(concept?.claims.length).toBeGreaterThanOrEqual(3);
      expect(concept?.examMappings.length).toBeGreaterThanOrEqual(8);
      expect(concept?.revisionUnits.length).toBeGreaterThanOrEqual(3);
      expect(concept?.questions.length).toBeGreaterThanOrEqual(2);

      for (const clm of concept?.claims || []) {
        expect(clm.evidence.length).toBeGreaterThanOrEqual(1);
        expect(clm.evidence[0].locator).toBeTruthy();
      }
    }
  });

  it('3. should verify C3: Indian Art, Heritage & Rajasthan History (6 concepts across 5 topics)', async () => {
    const artSlugs = [
      'buddhist-stupa-architecture-and-sanchi-morphology',
      'tripartite-hindu-temple-architecture-nagara-dravida-vesara',
      'indian-classical-dances-sangeet-natak-akademi-and-natyashastra-rasa',
      'six-unesco-hill-forts-of-rajasthan-military-architecture-and-jauhars',
      'rajasthan-miniature-painting-schools-mewar-kishangarh-bani-thani-bundi-kota',
      'rajasthan-peasant-revolts-bijolia-movement-and-prajamandals',
    ];

    expect(artSlugs.length).toBe(6);

    for (const slug of artSlugs) {
      const concept = await db.concept.findFirst({
        where: { slug },
        include: {
          contentBlocks: true,
          claims: { include: { evidence: true } },
          examMappings: true,
          revisionUnits: true,
          questions: true,
        },
      });

      expect(concept, `Art/Rajasthan concept ${slug} must exist`).toBeDefined();
      expect(concept?.contentBlocks.length).toBeGreaterThanOrEqual(4);
      expect(concept?.claims.length).toBeGreaterThanOrEqual(3);
      expect(concept?.examMappings.length).toBeGreaterThanOrEqual(8);
      expect(concept?.revisionUnits.length).toBeGreaterThanOrEqual(3);
      expect(concept?.questions.length).toBeGreaterThanOrEqual(2);
    }
  });

  it('4. should verify C4: World History & Modern Revolutions (9 concepts across 9 topics)', async () => {
    const worldSlugs = [
      'the-roman-empire-principate-senate-pax-romana-and-slave-economy',
      'nomadic-empires-genghis-khan-yasa-and-yam-courier-system',
      'feudal-europe-the-three-orders-black-death-and-renaissance-humanism',
      'the-french-revolution-1789-estates-general-rights-of-man-and-napoleon',
      'nineteenth-century-nationalism-unification-of-italy-and-germany',
      'industrial-revolution-in-britain-and-rise-of-capitalism',
      'the-russian-revolution-of-1917-and-soviet-state',
      'interwar-totalitarianism-weimar-republic-and-the-rise-of-hitler-nazism',
      'paths-to-modernisation-japan-meiji-restoration-vs-chinese-revolution',
    ];

    expect(worldSlugs.length).toBe(9);

    for (const slug of worldSlugs) {
      const concept = await db.concept.findFirst({
        where: { slug },
        include: {
          contentBlocks: true,
          claims: { include: { evidence: true } },
          examMappings: true,
          revisionUnits: true,
          questions: true,
        },
      });

      expect(concept, `World history concept ${slug} must exist`).toBeDefined();
      expect(concept?.contentBlocks.length).toBeGreaterThanOrEqual(4);
      expect(concept?.claims.length).toBeGreaterThanOrEqual(3);
      expect(concept?.examMappings.length).toBeGreaterThanOrEqual(8);
      expect(concept?.revisionUnits.length).toBeGreaterThanOrEqual(3);
      expect(concept?.questions.length).toBeGreaterThanOrEqual(2);
    }
  });

  it('5. should verify subject and topic hierarchy across all of Category C (4 subjects, 35 topics, 46 concepts)', async () => {
    const medieval = await db.subject.findUnique({ where: { slug: 'medieval-indian-history' }, include: { topics: true } });
    const modern = await db.subject.findUnique({ where: { slug: 'modern-indian-history' }, include: { topics: true } });
    const art = await db.subject.findUnique({ where: { slug: 'art-culture-rajasthan' }, include: { topics: true } });
    const world = await db.subject.findUnique({ where: { slug: 'world-history' }, include: { topics: true } });

    expect(medieval?.topics.length).toBe(8);
    expect(modern?.topics.length).toBe(13);
    expect(art?.topics.length).toBe(5);
    expect(world?.topics.length).toBe(9);
  });
});
