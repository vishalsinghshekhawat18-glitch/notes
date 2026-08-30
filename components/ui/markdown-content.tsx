import React from 'react';
import { renderMarkdownWithMath } from '@/lib/render/markdown-math';

interface MarkdownContentProps {
  content: string | null | undefined;
  className?: string;
}

export function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  if (!content || typeof content !== 'string') {
    return null;
  }

  // Parse markdown with KaTeX math rendering
  const parsedHtml = renderMarkdownWithMath(content);

  return (
    <div
      className={`markdown-content ${className}`}
      dangerouslySetInnerHTML={{ __html: parsedHtml }}
    />
  );
}
