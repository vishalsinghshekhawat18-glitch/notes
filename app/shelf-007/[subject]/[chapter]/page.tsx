import React from 'react';
import { notFound } from 'next/navigation';
import {
  getEconomicsChapters,
  getIibfDbfChapters,
  getPoliticalScienceChapters,
  getHistoryChapters,
  getQuantitativeAptitudeChapters,
  getGeneralScienceChapters,
  getGeographyChapters,
  getEnglishLanguageChapters,
  getHindiChapters,
  getCurrentAffairsChapters,
  getRajasthanChapters,
  getShelf007ChapterContent,
} from '@/lib/shelf007/service';
import { Shelf007ContinuousReader } from '@/components/shelf007/shelf007-continuous-reader';

interface Shelf007ChapterPageProps {
  params: Promise<{
    subject: string;
    chapter: string;
  }>;
}

export async function generateStaticParams() {
  const econ = getEconomicsChapters().map((c) => ({
    subject: 'economics',
    chapter: c.slug,
  }));
  const dbf = getIibfDbfChapters().map((c) => ({
    subject: 'iibf-dbf',
    chapter: c.slug,
  }));
  const ps = getPoliticalScienceChapters().map((c) => ({
    subject: 'political-science',
    chapter: c.slug,
  }));
  const hist = getHistoryChapters().map((c) => ({
    subject: 'history',
    chapter: c.slug,
  }));
  const quant = getQuantitativeAptitudeChapters().map((c) => ({
    subject: 'quantitative-aptitude',
    chapter: c.slug,
  }));
  const sci = getGeneralScienceChapters().map((c) => ({
    subject: 'general-science',
    chapter: c.slug,
  }));
  const geo = getGeographyChapters().map((c) => ({
    subject: 'geography',
    chapter: c.slug,
  }));
  const eng = getEnglishLanguageChapters().map((c) => ({
    subject: 'english-language',
    chapter: c.slug,
  }));
  const hin = getHindiChapters().map((c) => ({
    subject: 'hindi',
    chapter: c.slug,
  }));
  const ca = getCurrentAffairsChapters().map((c) => ({
    subject: 'current-affairs',
    chapter: c.slug,
  }));
  const raj = getRajasthanChapters().map((c) => ({
    subject: 'rajasthan',
    chapter: c.slug,
  }));
  const legacyDbfSlugs = [
    '01_paper_1_ie_ifs-01_module_a_indian_economic_architecture',
    '01_paper_1_ie_ifs-02_module_b_economic_concepts_related_to_banking',
    '01_paper_1_ie_ifs-03_module_c_indian_financial_architecture',
    '01_paper_1_ie_ifs-04_module_d_financial_products_and_services',
    '02_paper_2_ppb-01_module_a_general_banking_operations',
    '03_paper_3_afmb-01_module_a_accounting_principles_and_processes',
    '04_paper_4_rbwm-01_module_a_retail_banking_overview',
  ].map((slug) => ({ subject: 'iibf-dbf', chapter: slug }));
  return [...econ, ...dbf, ...legacyDbfSlugs, ...ps, ...hist, ...quant, ...sci, ...geo, ...eng, ...hin, ...ca, ...raj];
}

export default async function Shelf007ChapterPage({ params }: Shelf007ChapterPageProps) {
  const { subject, chapter } = await params;

  if (
    subject !== 'economics' &&
    subject !== 'iibf-dbf' &&
    subject !== 'political-science' &&
    subject !== 'history' &&
    subject !== 'quantitative-aptitude' &&
    subject !== 'general-science' &&
    subject !== 'geography' &&
    subject !== 'english-language' &&
    subject !== 'hindi' &&
    subject !== 'current-affairs' &&
    subject !== 'rajasthan'
  ) {
    notFound();
  }

  const data = getShelf007ChapterContent(
    subject as 'economics' | 'iibf-dbf' | 'political-science' | 'history' | 'quantitative-aptitude' | 'general-science' | 'geography' | 'english-language' | 'hindi' | 'current-affairs' | 'rajasthan',
    chapter
  );
  if (!data) {
    notFound();
  }

  const { current, prev, next, allChapters } = data;

  return (
    <Shelf007ContinuousReader
      subject={
        subject as
          | 'economics'
          | 'iibf-dbf'
          | 'political-science'
          | 'history'
          | 'quantitative-aptitude'
          | 'general-science'
          | 'geography'
          | 'english-language'
          | 'hindi'
          | 'current-affairs'
          | 'rajasthan'
      }
      currentChapter={current}
      prevChapter={prev}
      nextChapter={next}
      allChapters={allChapters}
    />
  );
}
