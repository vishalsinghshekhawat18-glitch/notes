import { TOPIC_9_SEMANTIC_UNITS } from '../lib/ingestion/semantic-coverage';

const expectedMandatoryKeywords = [
  { key: 'Article 12', desc: 'Definition of State' },
  { key: 'Article 13', desc: 'Judicial review & Doctrines' },
  { key: 'Article 14', desc: 'Right to Equality' },
  { key: 'Article 15', desc: 'Non-discrimination & Protective clauses' },
  { key: 'Article 16', desc: 'Public employment & Reservations' },
  { key: 'Article 17', desc: 'Abolition of Untouchability' },
  { key: 'Article 18', desc: 'Abolition of Titles' },
  { key: 'Article 19', desc: '6 Democratic Freedoms' },
  { key: 'Article 20', desc: 'Protection against Conviction' },
  { key: 'Article 21', desc: 'Right to Life & Personal Liberty' },
  { key: 'Article 21A', desc: 'Right to Education' },
  { key: 'Article 22', desc: 'Preventive Detention' },
  { key: 'Article 23', desc: 'Prohibition of Begar & Trafficking' },
  { key: 'Article 24', desc: 'Prohibition of Child Labour' },
  { key: 'Article 25', desc: 'Freedom of Religion' },
  { key: 'Article 29', desc: 'Protection of Minorities' },
  { key: 'Article 30', desc: 'Minority Educational Institutions' },
  { key: 'Article 32', desc: 'Constitutional Remedies & 5 Writs' },
  { key: 'Article 33', desc: 'Armed forces restrictions' },
  { key: 'Article 35', desc: 'Legislation to give effect to FRs' },
];

for (const exp of expectedMandatoryKeywords) {
  const found = TOPIC_9_SEMANTIC_UNITS.some(
    (u) => u.localHeading.includes(exp.key) || u.shortDescription.includes(exp.key)
  );
  console.log(`Keyword "${exp.key}": found = ${found}`);
}
