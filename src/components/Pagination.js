import React from 'react';

export default function Pagination({ linkHeader, onPageChange }) {
    // Parse the Link header to extract next and previous URLs
    const parseLinkHeader = (linkHeader) => {
        if (!linkHeader) return { next: null, prev: null };
        
        const links = { next: null, prev: null };
        
        // Link header format: <url>; rel="next", <url>; rel="prev"
        const parts = linkHeader.split(',');
        
        parts.forEach(part => {
            const match = part.match(/<([^>]+)>; rel="([^"]+)"/);
            if (match) {
                const url = match[1];
                const rel = match[2];
                links[rel] = url;
            }
        });
        
        return links;
    };
    
    const { next, prev } = parseLinkHeader(linkHeader);
    
    const handlePrevious = () => {
        if (prev && onPageChange) {
            onPageChange(prev);
        }
    };
    
    const handleNext = () => {
        if (next && onPageChange) {
            onPageChange(next);
        }
    };
    
    return (
        <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button onClick={handlePrevious} disabled={!prev}>
                Previous
            </button>
            <button onClick={handleNext} disabled={!next}>
                Next
            </button>
        </div>
    );
}
