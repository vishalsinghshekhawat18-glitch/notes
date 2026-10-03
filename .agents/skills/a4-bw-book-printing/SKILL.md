---
name: a4-bw-book-printing
description: Master skill and technical blueprint for designing and compiling publication-grade Black & White A4 printable books and study-codices for Shelf 007 and Mind of Aravalli.
---

# A4 Black & White Book & Magazine Publishing Engine (Mind of Aravalli / Shelf 007)

This skill governs the end-to-end design, styling, and automated generation of publication-grade Black & White A4 printable study-books from canonical notes in Shelf 007 (`007/notes/`).

## Architectural Standard: Oxford Monograph & Magazine Grade
Every subject codex compiled from Shelf 007 must meet the visual and typographic hierarchy of an **Oxford University Press monograph, The Economist magazine, and Harvard Law Review**.

### The 7 Core Pillars of the Printable Format:
1. **Architectural Neoclassical Cover**: Double-ruled framing (`2pt solid #000; outline: 0.75pt solid #000; outline-offset: 3.5mm;`), Roman display serif typography, institutional small-caps masthead, engraved domain medallion, two-column primary sources cartouche, and epistemic motto.
2. **Editorial Front Matter**: Title page, Cataloging-in-Publication (CIP) Colophon Block on verso, and magazine-style Table of Contents with Part banners and dotted leaders.
3. **Magazine Chapter Openers**: Inverted black chapter number pill (`background: #000; color: #fff;`), display serif title, double-rule separator, canonical source ribbon, and classical 3-line drop caps (`float: left; font-size: 3.4em;`).
4. **Sectional Typography**: Section banners with section number tags (`§ 1.1`), clean small-caps subheadings (`H3`), italic sub-subheadings (`H4`), and centered magazine pull quotes with hairline rules.
5. **Specialized Editorial Featurettes**:
   - **Exam Trap Matrix**: Inverted solid black header bar (`⚡ EXAM TRAP ALERT & PITFALL MATRIX`) with 4pt left black rule.
   - **Statutory Mandate Box**: Double-rule border for bare acts and constitutional articles.
   - **First-Principles Mechanism Box**: Technical monograph framing for causal proofs.
6. **Tufte / Booktabs Academic Tables**: Heavy top/bottom rules (`1.5pt solid #000`), mid-header rule (`0.75pt solid #000`), zero harsh vertical cage lines, 25%/75% column balancing for 2-column distinction matrices, and repeating headers (`thead { display: table-header-group; }`).
7. **CSS Paged Media Layout**:
   - `@page { size: A4 portrait; margin: 18mm 16mm 18mm 20mm; }` (20mm binding gutter).
   - Running headers with hairline divider, running footers with small-caps page folios.
   - Cover and title pages suppress running headers/footers (`@page:first`).
