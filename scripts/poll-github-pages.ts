async function checkPages() {
  const targetUrl = 'https://vishalsinghshekhawat18-glitch.github.io/notes/';
  const subroutes = [
    { name: 'Library Homepage', path: '' },
    { name: 'Topic 9: Fundamental Rights', path: 'topics/part-3-fundamental-rights/' },
    { name: 'Concept: Article 14', path: 'concepts/article-14-equality-non-arbitrariness/' },
    { name: 'Concept: Article 21', path: 'concepts/article-21-21a-life-liberty-privacy-education/' },
    { name: 'Topic: Inflation Dynamics', path: 'topics/inflation-dynamics-measurement-policy/' },
    { name: 'Concept: Inflation Definition', path: 'concepts/inflation-definition-distinctions-real-nominal/' },
  ];

  console.log(`Checking GitHub Pages status at: ${targetUrl}`);

  try {
    const res = await fetch(targetUrl, {
      headers: { 'User-Agent': 'ReadingHubVerifier/1.0' },
    });

    console.log(`HTTP Status: ${res.status}`);

    if (res.status === 200) {
      const html = await res.text();
      console.log(`\n======================================================`);
      console.log(`🎉 GITHUB PAGES IS LIVE (HTTP 200 OK)!`);
      console.log(`======================================================\n`);

      for (const route of subroutes) {
        const full = `${targetUrl}${route.path}`;
        const subRes = await fetch(full, {
          headers: { 'User-Agent': 'ReadingHubVerifier/1.0' },
        });
        const subText = await subRes.text();
        const ok = subRes.status === 200;
        console.log(`[${ok ? 'PASS' : 'FAIL'}] [HTTP ${subRes.status}] ${route.name}`);
        console.log(`       URL: ${full}`);
        console.log(`       Size: ${subText.length} bytes\n`);
      }
      return true;
    } else {
      console.log(`GitHub Pages is still activating or awaiting repository Pages settings enablement.`);
      return false;
    }
  } catch (err: any) {
    console.error(`Fetch error:`, err.message);
    return false;
  }
}

checkPages();
