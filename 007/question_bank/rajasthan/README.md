# RPSC RAS Previous-Year Questions (PYQ) Corpus — V1 Source Registry

**Snapshot date:** 2026-10-17  
**Scope:** Rajasthan State and Subordinate Services Combined Competitive Examination (RAS/RTS), Prelims and Mains.  
**What this version is:** an official-source-verified corpus register, answer-key register, source audit, and chapter crosswalk.  
**What this version is not yet:** a locally archived full-text question bank. The environment exposed the official RPSC index entries and some direct answer-key PDFs, but did not expose/download the underlying question-paper PDF binaries for every row. No coaching-site scans have been substituted and no missing questions have been reconstructed from memory.

## Official starting points

- [RPSC Question Papers portal]( https://rpsc.rajasthan.gov.in/Home.aspx/viewcommon?Slice=QP )
- [RPSC Answer Keys portal]( https://rpsc.rajasthan.gov.in/Home.aspx/viewcommon?Slice=AK )
- [RPSC Annual Report 2012–13]( https://rpsc.rajasthan.gov.in/Static/AnnualReport/English/2012-2013.pdf ) — evidence that a RAS/RTS Prelims cycle was held in 2012.
- [Direct official final key: RAS Prelims 2024]( https://rpsc.rajasthan.gov.in/Static/AnswerKeys/8F659D53-B8DD-47BE-8CA6-E56AA1A9BE05.pdf )

If a portal requires filters, select the relevant exam year and the exam name *Raj. State and Subordinate Services Combined Competitive Exam / RAS/RTS*. Use the listing label and publication date in `01_MASTER_REGISTER.md` to identify the row.

## Coverage currently established

- **Six core Prelims cycles located:** 2013, 2016, 2018, 2021, 2023, 2024.
- **Additional official Prelims listing records:** a blind-candidate version for 2013, plus a separate “RAS Pre 2013” listing dated 31 October 2015; the latter’s relationship to the original 2013 sitting and answer key remains unresolved.
- **Six regular four-paper Mains sets located:** 2013, 2016, 2018, 2021, 2023, 2024.
- **One separate four-paper 2016 Special Mains set** (exam held 17–18 December 2018).
- **2012 cycle gap:** RPSC's annual report proves the exam/re-exam existed, but its question paper was not located in the current indexed question-paper listing. It remains a gap, not an assumed inclusion.

That is 34 core paper slots (6 Prelims + 24 regular Mains + 4 Special Mains), plus additional official listing variants recorded separately (including the 2013 accessible version and 2013-labelled 2015 sitting). This count describes paper slots documented in official listings, **not locally downloaded files**. Duplicate/near-duplicate listing rows (especially 2018) have not been treated as separate papers unless file-level comparison establishes that they are distinct.

## Authentication levels

- **A — Official file archived & hashed:** the original PDF is locally present, source URL recorded, SHA-256 computed, and metadata checked.
- **B — Official listing verified:** the RPSC portal lists the document and its release date; original PDF payload not archived here.
- **C — Official cycle evidence only:** the cycle is documented by an official report, but paper not located.
- **D — Secondary/unverified:** never treated as authenticated unless reconciled to the official original.

All question-paper records in this V1 register are **Level B**, except the 2012 gap (Level C). The 2024 Prelims final answer key has a direct official PDF URL, but that binary was not included in this package.

## Critical next action to reach a full question-text corpus

Download the papers from the RPSC portal into a folder named `source_pdfs/` without editing them. Record the portal URL in the manifest, and calculate SHA-256 before extraction. Then the question-level index can be built with one record per question, including raw question text, options, final key, syllabus/topic tag(s), Chapter 01–37 mapping, confidence and review status. Do not tag a question from a summary or answer key alone.

## Package files

- `01_MASTER_REGISTER.md` — human-readable paper-by-paper inventory.
- `02_ANSWER_KEY_REGISTER.md` — objective answer-key provenance and status.
- `03_CHAPTER_CROSSWALK.md` — project-level mapping from RAS domains to the 37 chapter architecture.
- `04_AUTHENTICATION_AND_GAPS.md` — source trust rules, duplicates, unresolved years and non-claims.
- `05_SOURCE_ACQUISITION_GUIDE.md` — repeatable acquisition workflow.
- `manifest.json` — machine-readable registry.
- `question_level_schema.json` — future one-question-per-record schema for building the verbatim question bank.
- `index.html` — offline filterable catalog.
- `build_local_corpus.py` — local utility to fingerprint/extract PDFs once original files have been downloaded.
- `SHA256SUMS.txt` — checksums for package files.
