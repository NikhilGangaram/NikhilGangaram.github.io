'use client';

import { useState, useRef, useEffect } from 'react';
import { BlogPost } from '@/lib/blog';

interface BlogSearchProps {
  posts: BlogPost[];
  onFilteredPosts: (filteredPosts: BlogPost[]) => void;
}

export default function BlogSearch({ posts, onFilteredPosts }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [filteredResults, setFilteredResults] = useState<BlogPost[]>(posts);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      onFilteredPosts(posts);
      setFilteredResults(posts);
      return;
    }

    const filtered = posts.filter(post => {
      const searchTerm = query.toLowerCase();
      return (
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt?.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm) ||
        post.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    });

    onFilteredPosts(filtered);
    setFilteredResults(filtered);
  };

  const handleIconClick = () => {
    setIsExpanded(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleClose = () => {
    setSearchQuery('');
    setIsExpanded(false);
    onFilteredPosts(posts);
  };

  const handleBlur = () => {
    if (!searchQuery) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isExpanded) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isExpanded]);

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="text"
        placeholder="Type to search posts..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
        autoFocus
      />
      
      {searchQuery && (
        <div className="mt-4 text-sm text-gray-600">
          {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
        </div>
      )}
    </div>
  );
}
