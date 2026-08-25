import { TOPIC_9_SEMANTIC_UNITS } from '../lib/ingestion/semantic-coverage';

console.log(`Current Semantic Units in DB definition: ${TOPIC_9_SEMANTIC_UNITS.length}`);
TOPIC_9_SEMANTIC_UNITS.forEach((u, i) => {
  console.log(`[${i + 1}] ${u.semanticUnitId} (p. ${u.printedPage} / PDF ${u.pdfPage}): ${u.localHeading} [${u.contentType}]`);
});
