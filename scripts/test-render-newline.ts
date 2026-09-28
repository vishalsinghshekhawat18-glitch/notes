import { renderMarkdownWithMath } from '../lib/render/markdown-math';

const rawString = "### Critical Traps & Multi-Statement Pitfalls for Aspirants:\\n\\n1. **Article & Nomenclature Confusion:** Examiners frequently confuse identical sounding powers across Union and State levels (e.g. Art 123 vs Art 213; Art 72 vs Art 161). Verify whether the authority belongs to the President or Governor.\\n\\n2. **Absolute vs Qualified Language Trap:** Beware of statements containing absolute words like *\"solely\"*, *\"without exception\"*, or *\"unconditional\"*. Most constitutional powers are subject to ministerial aid and advice (Art 74/163) or judicial review (*Basic Structure doctrine*).\\n\\n3. **Constitutional vs Statutory Distinction:** Do not confuse bodies created by constitutional articles (e.g. UPSC, Finance Commission, ECI) with statutory watchdogs created by ordinary Acts of Parliament (e.g. NGT, CVC, Lokpal, NHRC).\\n\\n4. **Appointment vs Removal Asymmetry:** Remember high-yield asymmetries—such as State PSC members being appointed by the Governor but removable *only* by the President after a Supreme Court inquiry under Article 317.";

console.log('--- CURRENT RENDER ---');
console.log(renderMarkdownWithMath(rawString));

console.log('--- WITH UNESCAPED NEWLINES ---');
console.log(renderMarkdownWithMath(rawString.replace(/\\n/g, '\n')));
