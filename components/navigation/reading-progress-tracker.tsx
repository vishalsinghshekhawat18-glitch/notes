'use client';

import { useEffect } from 'react';

interface ReadingProgressTrackerProps {
  subjectName: string;
  subjectSlug: string;
  topicTitle: string;
  topicSlug: string;
  initialConceptSlug?: string;
  initialConceptTitle?: string;
}

export function ReadingProgressTracker({
  subjectName,
  subjectSlug,
  topicTitle,
  topicSlug,
  initialConceptSlug,
  initialConceptTitle,
}: ReadingProgressTrackerProps) {
  useEffect(() => {
    try {
      const position = {
        subjectName,
        subjectSlug,
        topicTitle,
        topicSlug,
        conceptTitle: initialConceptTitle || topicTitle,
        conceptSlug: initialConceptSlug || '',
        url: initialConceptSlug
          ? `/topics/${topicSlug}/read#${initialConceptSlug}`
          : `/topics/${topicSlug}/read`,
        timestamp: Date.now(),
      };
      localStorage.setItem('reading_hub_last_position', JSON.stringify(position));
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [subjectName, subjectSlug, topicTitle, topicSlug, initialConceptSlug, initialConceptTitle]);

  return null;
}
