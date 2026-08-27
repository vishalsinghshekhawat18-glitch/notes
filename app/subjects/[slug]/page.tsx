import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db/client';
import { getSubjectWithTopics } from '@/lib/knowledge/web-data';

interface SubjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const subjects = await db.subject.findMany({
    select: { slug: true },
  });
  return subjects.map((s) => ({ slug: s.slug }));
}

interface TopicGroup {
  groupTitle: string;
  topics: Array<{
    id: string;
    slug: string;
    title: string;
    description: string | null;
    order: number;
    conceptsCount: number;
    estimatedMinutes: number;
  }>;
}

function getOrganizedTopicGroups(subjectSlug: string, topics: any[]): TopicGroup[] {
  if (subjectSlug === 'iibf-banking-regulations') {
    const p1 = topics.filter((t) => t.order >= 38 && t.order <= 41);
    const p2 = topics.filter((t) => t.order >= 42 && t.order <= 45);
    const p3 = topics.filter((t) => t.order >= 46 && t.order <= 48);
    const p4 = topics.filter((t) => t.order === 49);
    const p5 = topics.filter((t) => t.order === 50);
    const p6 = topics.filter((t) => t.order === 51);

    const groups: TopicGroup[] = [];
    if (p1.length) groups.push({ groupTitle: 'Paper 1: Indian Economy & Indian Financial System (IE&IFS)', topics: p1 });
    if (p2.length) groups.push({ groupTitle: 'Paper 2: Principles & Practices of Banking (PPB)', topics: p2 });
    if (p3.length) groups.push({ groupTitle: 'Paper 3: Accounting & Financial Management for Bankers (AFMB)', topics: p3 });
    if (p4.length) groups.push({ groupTitle: 'Paper 4: Retail Banking & Wealth Management (RBWM)', topics: p4 });
    if (p5.length) groups.push({ groupTitle: 'Statutory Banking Regulations & Prudential Supervision', topics: p5 });
    if (p6.length) groups.push({ groupTitle: 'RBI Grade B (FM) Management & Organisational Behaviour', topics: p6 });
    return groups;
  }

  if (subjectSlug === 'indian-economy') {
    const g1 = topics.filter((t) => t.order >= 27 && t.order <= 29);
    const g2 = topics.filter((t) => t.order >= 30 && t.order <= 32);
    const g3 = topics.filter((t) => t.order >= 33 && t.order <= 37);

    const groups: TopicGroup[] = [];
    if (g1.length) groups.push({ groupTitle: 'Module I: National Income, Inflation & Macroeconomic Dynamics', topics: g1 });
    if (g2.length) groups.push({ groupTitle: 'Module II: Monetary, Fiscal & External Sector Policies', topics: g2 });
    if (g3.length) groups.push({ groupTitle: 'Module III: Agriculture, Industry, Public Finance & Structural Trends', topics: g3 });
    return groups;
  }

  if (subjectSlug === 'indian-polity') {
    const g1 = topics.filter((t) => t.order >= 1 && t.order <= 6);
    const g2 = topics.filter((t) => t.order >= 7 && t.order <= 10);
    const g3 = topics.filter((t) => t.order >= 11 && t.order <= 13);
    const g4 = topics.filter((t) => t.order >= 14 && t.order <= 15);
    const g5 = topics.filter((t) => t.order >= 16 && t.order <= 18);
    const g6 = topics.filter((t) => t.order >= 19 && t.order <= 20);
    const g7 = topics.filter((t) => t.order >= 21 && t.order <= 23);
    const g8 = topics.filter((t) => t.order >= 24 && t.order <= 25);

    const groups: TopicGroup[] = [];
    if (g1.length) groups.push({ groupTitle: 'Part I: Constitutional Foundations & Philosophy', topics: g1 });
    if (g2.length) groups.push({ groupTitle: 'Part II: Fundamental Rights, Directive Principles & Duties', topics: g2 });
    if (g3.length) groups.push({ groupTitle: 'Part III: The Union & State Executive Machinery', topics: g3 });
    if (g4.length) groups.push({ groupTitle: 'Part IV: Parliament & State Legislatures', topics: g4 });
    if (g5.length) groups.push({ groupTitle: 'Part V: The Judiciary & Tribunals', topics: g5 });
    if (g6.length) groups.push({ groupTitle: 'Part VI: Federalism, Centre-State Relations & Emergency', topics: g6 });
    if (g7.length) groups.push({ groupTitle: 'Part VII: Constitutional & Statutory Oversight Bodies', topics: g7 });
    if (g8.length) groups.push({ groupTitle: 'Part VIII: State Governance & Comparative Jurisprudence', topics: g8 });
    return groups;
  }

  return [
    {
      groupTitle: 'All Curriculum Topics',
      topics: topics,
    },
  ];
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const { slug } = await params;
  const subject = await getSubjectWithTopics(slug);

  if (!subject) {
    notFound();
  }

  const mappedTopics = subject.topics.map((t) => ({
    id: t.id,
    slug: t.slug,
    title: t.title,
    description: t.description,
    order: t.order,
    conceptsCount: t.concepts.length,
    estimatedMinutes: t.concepts.length * 4,
  }));

  const totalConcepts = mappedTopics.reduce((acc, t) => acc + t.conceptsCount, 0);
  const topicGroups = getOrganizedTopicGroups(subject.slug, mappedTopics);
  const firstTopicSlug = mappedTopics[0]?.slug;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-10 font-sans space-y-8">
      {/* Breadcrumb Navigation */}
      <nav className="text-xs font-mono text-stone-500 flex items-center gap-2">
        <Link href="/" className="hover:text-stone-900 transition-colors">
          Library
        </Link>
        <span>›</span>
        <span>{subject.domain.name}</span>
        <span>›</span>
        <span className="text-stone-800 font-semibold">{subject.name}</span>
      </nav>

      {/* Subject Header & Quick Actions */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <span className="text-emerald-800 uppercase font-semibold tracking-wider">
            {subject.domain.name}
          </span>
          <div className="flex items-center gap-2 text-stone-500">
            <span className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md font-medium">
              {mappedTopics.length} Topics
            </span>
            <span>•</span>
            <span className="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md font-semibold">
              {totalConcepts} Canonical Concepts
            </span>
          </div>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            {subject.name}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 mt-2.5 max-w-3xl leading-relaxed">
            {subject.description || subject.scopeStatement || 'Structured canonical study curriculum designed for continuous sequential reading.'}
          </p>
        </div>

        {firstTopicSlug && (
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href={`/topics/${firstTopicSlug}/read`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-sm font-semibold rounded-xl shadow-xs transition-colors"
            >
              <span>▶ Start Continuous Reading</span>
              <span className="text-emerald-200 text-xs font-normal">from Topic 1</span>
            </Link>

            <span className="text-xs text-stone-500 font-mono hidden sm:inline">
              Read all topics in sequence or jump to any chapter below
            </span>
          </div>
        )}
      </div>

      {/* Structured Topic Groups */}
      <div className="space-y-8">
        {topicGroups.map((group, groupIdx) => (
          <section key={groupIdx} className="space-y-4">
            <div className="flex items-center gap-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-600 shrink-0">
                {group.groupTitle}
              </h2>
              <span className="h-px bg-stone-200 flex-1" />
              <span className="text-[11px] font-mono text-stone-400">
                {group.topics.length} {group.topics.length === 1 ? 'Topic' : 'Topics'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.topics.map((topic) => (
                <div
                  key={topic.id}
                  className="bg-white border border-stone-200 hover:border-stone-400 rounded-xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-stone-500">
                      <span className="font-semibold text-stone-600">Topic {topic.order || 1}</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-semibold text-[10px]">
                        {topic.conceptsCount} Concepts (~{topic.estimatedMinutes}m)
                      </span>
                    </div>

                    <Link href={`/topics/${topic.slug}/read`}>
                      <h3 className="font-serif font-bold text-base text-stone-900 group-hover:text-emerald-900 transition-colors">
                        {topic.title}
                      </h3>
                    </Link>

                    {topic.description && (
                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {topic.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                    <Link
                      href={`/topics/${topic.slug}`}
                      className="text-xs text-stone-500 hover:text-stone-800 transition-colors font-mono"
                    >
                      Outline
                    </Link>
                    <Link
                      href={`/topics/${topic.slug}/read`}
                      className="text-xs font-semibold px-3 py-1 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg shadow-2xs transition-colors inline-flex items-center gap-1"
                    >
                      <span>Read Topic</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
