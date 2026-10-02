const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const dir = path.join(process.cwd(), '007', "PDF's");
const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf')).sort();

async function run() {
  const results = [];

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const buffer = fs.readFileSync(fullPath);
    try {
      const p = new PDFParse(new Uint8Array(buffer));
      await p.load();
      const textObj = await p.getText();
      const rawText = textObj.text || '';
      const totalWords = rawText.split(/\s+/).filter(Boolean).length;
      
      // Extract headings / bullet points / lines
      const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
      
      // Look for notable patterns
      const headings = [];
      for (const line of lines) {
        if (line.length > 5 && line.length < 80) {
          if (/^[A-Z0-9\s:–—•\-]{6,}$/.test(line) && !line.includes('HTTP') && !line.includes('WWW') && !line.includes('TELEGRAM') && !line.includes('YOUTUBE')) {
            headings.push(line);
          } else if (/^(Chapter|Module|Topic|Unit|Part|Section)\b/i.test(line)) {
            headings.push(line);
          }
        }
      }

      // Check for PYQs
      const hasPYQs = /PYQ|Previous Year|RBI Grade B 20|NABARD|Question 1|Phase 2/i.test(rawText);

      // Unique sample headings
      const uniqueHeadings = Array.from(new Set(headings)).slice(0, 15);

      results.push({
        file,
        sizeKB: (buffer.length / 1024).toFixed(1),
        words: totalWords,
        hasPYQs,
        previewHeadings: uniqueHeadings,
        sampleText: rawText.replace(/\s+/g, ' ').slice(0, 300)
      });
    } catch (e) {
      results.push({ file, error: e.message });
    }
  }

  fs.writeFileSync(path.join(process.cwd(), '007', 'scripts', 'esi_analysis_summary.json'), JSON.stringify(results, null, 2));
  console.log(`Successfully analyzed ${results.length} files. Output saved to 007/scripts/esi_analysis_summary.json`);
}

run();
