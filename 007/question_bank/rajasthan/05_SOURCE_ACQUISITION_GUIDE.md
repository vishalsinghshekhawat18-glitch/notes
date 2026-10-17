# 05 — Source Acquisition & Local Corpus Build Guide

## Step 1: Fetch original files from RPSC

1. Open the official [Question Papers portal](https://rpsc.rajasthan.gov.in/Home.aspx/viewcommon?Slice=QP).
2. Set Exam Year and Exam Name filters where available. Search the specific RAS/RTS Combined Competitive exam cycle.
3. Match the RPSC listing label and release date against `01_MASTER_REGISTER.md`.
4. Download the original PDF without renaming or editing its contents. Store it in a folder `source_pdfs/` using a stable filename, e.g. `RAS_PRE_2024_GK_GS.pdf`, `RAS_MAIN_2024_PAPER_I.pdf`.
5. Use the official [Answer Keys portal](https://rpsc.rajasthan.gov.in/Home.aspx/viewcommon?Slice=AK) for final/revised keys. Preserve preliminary/model/final/revised status explicitly.

## Step 2: Verify source bytes

- Run `python build_local_corpus.py /path/to/source_pdfs --out /path/to/indexed_corpus`.
- Compare the printed RPSC title and PDF exam-date line with the master register.
- Check that the PDF opens and has a nonzero page count.
- Keep `SHA256SUMS.txt` and never replace a file without recording the change.

## Step 3: Extract and tag questions

- Extract text programmatically, but visually inspect the PDF if extraction order or tables are garbled.
- OCR only when the PDF is scanned. Keep OCR output separate from the unchanged original.
- Preserve every printed question number, option order, language, deleted/withdrawn question and key-version status.
- Use the 37-chapter crosswalk for a first-pass tag, then human review.
- Keep final key from RPSC separate from any model explanation generated later.

## Local builder script

The included script fingerprints each source PDF, tries text extraction with PyMuPDF if installed, emits a JSON index, and marks low-text PDFs for manual OCR/review. It does not download or fabricate any question paper.
