#!/usr/bin/env python3
"""Fingerprint and index locally downloaded official RPSC question-paper PDFs.
This script does not download documents or infer missing content.
Usage: python build_local_corpus.py source_pdfs --out indexed_corpus
"""
from pathlib import Path
import argparse, hashlib, json, re, sys

def sha256(p):
    h=hashlib.sha256()
    with p.open('rb') as f:
        for chunk in iter(lambda:f.read(1024*1024), b''):
            h.update(chunk)
    return h.hexdigest()

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument('source_dir',type=Path)
    ap.add_argument('--out',type=Path,default=Path('indexed_corpus'))
    args=ap.parse_args(); args.out.mkdir(parents=True,exist_ok=True)
    pdfs=sorted(args.source_dir.rglob('*.pdf'))
    if not pdfs:
        print(f'No PDFs found under {args.source_dir}; no corpus built.',file=sys.stderr); return 2
    try:
        import fitz
    except ImportError:
        fitz=None
    records=[]; sums=[]
    text_dir=args.out/'text'; text_dir.mkdir(exist_ok=True)
    for p in pdfs:
        rec={'file':str(p),'sha256':sha256(p),'bytes':p.stat().st_size,'pdf_metadata':{},'page_count':None,'text_file':None,'extraction_status':'needs-manual-review'}
        if fitz:
            try:
                doc=fitz.open(p); rec['page_count']=doc.page_count; rec['pdf_metadata']=doc.metadata or {}
                chunks=[]
                for i,page in enumerate(doc):
                    txt=page.get_text('text') or ''
                    chunks.append(f'\n\n--- PAGE {i+1} ---\n{txt}')
                extracted=''.join(chunks)
                safe=re.sub(r'[^A-Za-z0-9_.-]+','_',p.stem)
                tp=text_dir/(safe+'.txt'); tp.write_text(extracted,encoding='utf-8')
                rec['text_file']=str(tp.relative_to(args.out)); rec['extracted_char_count']=len(extracted)
                rec['extraction_status']='text-extracted-review-required' if len(extracted)>500 else 'low-text-likely-scan-or-protected-pdf'
            except Exception as e:
                rec['extraction_status']='extract-failed'; rec['error']=str(e)
        records.append(rec); sums.append(f"{rec['sha256']}  {p.name}")
    (args.out/'local_pdf_manifest.json').write_text(json.dumps(records,ensure_ascii=False,indent=2),encoding='utf-8')
    (args.out/'SHA256SUMS.txt').write_text('\n'.join(sums)+'\n',encoding='utf-8')
    print(f'Indexed {len(records)} PDFs. Keep originals unchanged; manually verify every paper and key.')
    print('If PyMuPDF was unavailable, install it with: python -m pip install pymupdf')
    return 0
if __name__=='__main__': raise SystemExit(main())
