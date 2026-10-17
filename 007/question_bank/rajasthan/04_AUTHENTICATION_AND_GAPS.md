# 04 — Authentication, Coverage Gaps & Non-Claims

**Audit cut-off:** 2026-10-17

## Authentication method

1. Treat the RPSC-hosted paper/key entry as the primary reference.
2. Preserve original bytes; do not alter, combine, reflow or silently OCR-replace the source PDF.
3. Record RPSC catalog label, release date, exam date, file URL, SHA-256 hash, PDF page count and language/variant after the file is downloaded.
4. Compare a final key against the correct paper and version. Keep revised final keys as separate versions; do not overwrite history.
5. When two RPSC records have similar names, compare underlying PDF hashes and first/last pages before deduplicating.
6. Any independently typed version must remain labelled `transcription`, never `original official paper`.

## Coverage currently established from RPSC listings

- Core Prelims: 2013, 2016, 2018, 2021, 2023, 2024.
- Regular four-paper Mains: 2013, 2016, 2018, 2021, 2023, 2024.
- Special four-paper Mains: 2016 cycle, exam held 17–18 December 2018.
- 2013 Prelims: separate blind-candidate version also appears in the official listing. The official listing also has “RAS Pre 2013 (Exam Date-31.10.2015)”; it is kept as a separate record until source files establish its relationship to the 2013 sitting and answer-key version.
- Official objective key listings: revised 2013; final 2016; final 2018; final 2021; final 2023; final 2024.

## Open gaps

### 1. Original question-paper binaries

The browser-searchable official RPSC archive exposed item titles and release dates, but the underlying PDF attachment links for most question papers were not exposed by the indexed listing view used in this session. Direct network retrieval from the execution container also failed. Therefore the original question-paper PDFs are **not included in this ZIP**. This is explicitly not represented as a fully populated text corpus.

### 2. RAS/RTS 2012 Prelims

RPSC’s 2012–13 Annual Report records RAS/RTS Prelims on 14 June 2012 and a Physics re-examination on 23 August 2012. Its question paper was not located in the current indexed RPSC question-paper listing reviewed. Record status: official-cycle evidence, paper not located.

### 3. 2018 duplicate records

Both Prelims and Mains have near-duplicate listing labels/rows in the indexed catalog. Without original bytes, do not assert that these are separate language forms or identical files. Resolve with PDF-level checksums and visual comparison.

### 4. Older cycles

Cycles earlier than 2013 may exist in paper books, archives, coaching collections, or other sites. They are outside the currently verified official-paper set until an original RPSC release or authenticated official record is located. No completeness claim is made beyond the verified list above.

### 5. Topic-level classification and frequency

No exact topic counts have been calculated because the actual question text has not been ingested. The Chapter 01–37 crosswalk is a taxonomy only. It must not be cited as evidence that any specific topic appeared in a specific question paper.

## What would make a record Level A

An original RPSC PDF is physically stored in `source_pdfs/`, its URL is preserved, SHA-256 is recorded, PDF opens successfully, page count and first/last page are checked, and the indexed metadata is verified. Only then should its authentication status be upgraded to Level A.
