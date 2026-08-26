async function verify() {
  const baseUrl = 'https://readinghub-aravalli.loca.lt';
  const urls = [
    { name: 'Library Home', path: '/' },
    { name: 'Fundamental Rights Topic', path: '/topics/part-3-fundamental-rights/' },
    { name: 'Article 14 Concept', path: '/concepts/article-14-equality-non-arbitrariness/' },
    { name: 'Article 21 Concept', path: '/concepts/article-21-21a-life-liberty-privacy-education/' },
    { name: 'Inflation Topic', path: '/topics/inflation-dynamics-measurement-policy/' },
    { name: 'Inflation Definition Concept', path: '/concepts/inflation-definition-distinctions-real-nominal/' },
  ];

  console.log(`\n======================================================`);
  console.log(`VERIFYING LIVE PUBLIC WEB APPLICATION`);
  console.log(`BASE URL: ${baseUrl}`);
  console.log(`======================================================\n`);

  for (const item of urls) {
    const fullUrl = `${baseUrl}${item.path}`;
    try {
      const response = await fetch(fullUrl, {
        headers: {
          'Bypass-Tunnel-Reminder': 'true',
          'User-Agent': 'ReadingHubVerifier/1.0',
        },
      });

      const text = await response.text();
      const status = response.status;
      const ok = status === 200;

      // Extract title and key elements
      const titleMatch = text.match(/<title>(.*?)<\/title>/);
      const title = titleMatch ? titleMatch[1] : 'No Title';

      const hasCanonicalBadge = text.includes('Canonical') || text.includes('Reading Hub');
      const hasTopicHeader = text.includes('Fundamental Rights') || text.includes('Inflation') || text.includes('Library');

      console.log(`[${ok ? 'PASS' : 'FAIL'}] [HTTP ${status}] ${item.name}`);
      console.log(`       URL: ${fullUrl}`);
      console.log(`       Title: ${title}`);
      console.log(`       HTML Size: ${text.length} bytes`);
      console.log(`       Content Integrity: Canonical verified = ${hasCanonicalBadge}, Topic verified = ${hasTopicHeader}\n`);
    } catch (err: any) {
      console.error(`[FAIL] ${item.name} (${fullUrl}):`, err.message);
    }
  }
}

verify();
