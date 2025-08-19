'use client';

import Link from 'next/link';
import { BlogPost } from '@/lib/blog';
import { useState, useEffect } from 'react';

interface BlogListingProps {
  posts: BlogPost[];
}

export default function BlogListing({ posts }: BlogListingProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get all unique categories
  const allCategories = ['all', ...Array.from(new Set(posts.map(post => post.category)))];

  // Filter posts by selected category
  const categoryFilteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <>
      <div className="prose">
        {/* Category Filter Tags */}
        <div className="flex justify-center mb-16">
          <div className="flex gap-12 not-prose">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`pb-2 text-xl font-semibold transition-all duration-200 border-b-2 ${
                  selectedCategory === category
                    ? 'text-black border-black'
                    : 'text-gray-600 border-transparent hover:border-gray-200 hover:text-black'
                }`}
                style={{ background: 'none', boxShadow: 'none' }}
              >
                &nbsp;&nbsp;&nbsp;{category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}&nbsp;&nbsp;&nbsp;
              </button>
            ))}
          </div>
        </div>
        
        {categoryFilteredPosts.length === 0 ? (
          <p>No posts found in this category.</p>
        ) : (
          <div className="space-y-12">
            {categoryFilteredPosts.map((post) => (
              <article key={post.slug} className="border-b border-gray-200 pb-8 last:border-b-0">
                <h2 className="text-xl font-semibold mb-4 text-black">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="hover:text-gray-700 transition-colors no-underline"
                  >
                    {post.title}
                  </Link>
                </h2>
                
                                 {post.excerpt && (
                   <p className="text-gray-600 text-lg leading-relaxed">
                     {post.excerpt}
                   </p>
                 )}
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
