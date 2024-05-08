import React from 'react';

export function highlightText(text, searchTerm) {
  if (!searchTerm) return text; // Return unmodified text if no search term.

  const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? <span key={index} className="highlight">{part}</span> : part
  );
}
