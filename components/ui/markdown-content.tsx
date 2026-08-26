import React from 'react';
import { marked } from 'marked';

// Configure marked with GFM and line breaks
marked.setOptions({
  gfm: true,
  breaks: true,
});

interface MarkdownContentProps {
  content: string | null | undefined;
  className?: string;
}

export function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  if (!content || typeof content !== 'string') {
    return null;
  }

  // Parse markdown synchronously
  const parsedHtml = marked.parse(content, { async: false }) as string;

  return (
    <div
      className={`markdown-content ${className}`}
      dangerouslySetInnerHTML={{ __html: parsedHtml }}
    />
  );
}
