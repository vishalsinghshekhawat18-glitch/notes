import React from 'react';
import { db } from '@/lib/db/client';
import { seedArticle14Benchmark } from '@/lib/benchmark/article-14-seed';
import { ConceptLearningView } from '@/components/learning/concept-learning-view';

export default async function HomePage() {
  let concept = await db.concept.findFirst({
    where: { slug: 'article-14-equality' },
    include: {
      topic: {
        include: {
          subject: {
            include: {
              domain: true,
            },
          },
        },
      },
      contentBlocks: {
        orderBy: { order: 'asc' },
      },
      claims: {
        include: {
          evidence: {
            include: {
              source: true,
            },
          },
        },
      },
      examMappings: {
        include: {
          exam: true,
        },
      },
      revisionUnits: {
        orderBy: { order: 'asc' },
      },
      questions: {
        orderBy: { difficulty: 'asc' },
      },
      outgoingConnections: {
        include: {
          targetConcept: true,
        },
      },
    },
  });

  if (!concept) {
    await seedArticle14Benchmark();
    concept = await db.concept.findFirst({
      where: { slug: 'article-14-equality' },
      include: {
        topic: {
          include: {
            subject: {
              include: {
                domain: true,
              },
            },
          },
        },
        contentBlocks: {
          orderBy: { order: 'asc' },
        },
        claims: {
          include: {
            evidence: {
              include: {
                source: true,
              },
            },
          },
        },
        examMappings: {
          include: {
            exam: true,
          },
        },
        revisionUnits: {
          orderBy: { order: 'asc' },
        },
        questions: {
          orderBy: { difficulty: 'asc' },
        },
        outgoingConnections: {
          include: {
            targetConcept: true,
          },
        },
      },
    });
  }

  if (!concept) {
    return (
      <div className="max-w-xl mx-auto py-16 text-center text-stone-700">
        <h1 className="text-xl font-serif font-bold">Mind of Aravalli — Reading Hub</h1>
        <p className="mt-2 text-sm">Initializing canonical knowledge base...</p>
      </div>
    );
  }

  const formattedExamMappings = concept.examMappings.map((m) => ({
    examSlug: m.exam.slug,
    examName: m.exam.name,
    syllabusUnit: m.syllabusUnit || 'General Syllabus',
    relevance: m.relevance,
    priority: m.priority,
    requiredDepth: m.requiredDepth,
    questionStyle: m.questionStyle,
    frequentTraps: m.frequentTraps,
    notes: m.notes,
  }));

  const formattedConcept = {
    ...concept,
    examMappings: formattedExamMappings,
  };

  return (
    <main className="min-h-screen bg-[#fafaf9]">
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur-xs sticky top-0 z-10 px-4 py-2.5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-stone-900 text-sm tracking-tight">
              Mind of Aravalli
            </span>
            <span className="text-stone-400 text-xs">/</span>
            <span className="text-xs text-stone-600 font-mono">Reading Hub v1.0</span>
          </div>
          <div className="text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
            Vertical Slice: Indian Polity
          </div>
        </div>
      </header>

      <ConceptLearningView concept={formattedConcept as any} />
    </main>
  );
}
