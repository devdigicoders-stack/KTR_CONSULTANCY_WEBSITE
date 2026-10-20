import React from 'react';

/**
 * FormattedNotes - Displays rich-text notes or plain-text notes cleanly,
 * preserving HTML formatting (bold, italic, bullet points, numbers, headings, etc.)
 * while safely rendering legacy unformatted strings.
 */
export const FormattedNotes = ({ content, className = '', emptyText = 'No case notes logged.' }) => {
  if (!content || !content.trim()) {
    return <p className="text-[11px] text-gray-400 italic py-1">{emptyText}</p>;
  }

  const hasHtml = /<[a-z][\s\S]*>/i.test(content);

  if (!hasHtml) {
    return (
      <div className={`whitespace-pre-wrap leading-relaxed font-medium ${className}`}>
        {content}
      </div>
    );
  }

  return (
    <div 
      className={`leading-relaxed font-medium space-y-1 [&_b]:font-bold [&_strong]:font-bold [&_i]:italic [&_em]:italic [&_u]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-1.5 [&_li]:my-0.5 [&_h2]:text-sm [&_h2]:font-black [&_h2]:text-[#081326] [&_h2]:my-1.5 [&_h3]:text-xs [&_h3]:font-black [&_h3]:text-[#081326] [&_h3]:my-1 [&_p]:my-0.5 [&_mark]:bg-amber-200 [&_mark]:px-1 [&_mark]:rounded ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default FormattedNotes;
