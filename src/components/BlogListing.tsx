import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

interface BlogListingProps {
  posts: BlogPost[];
}

export default function BlogListing({ posts }: BlogListingProps) {
  return (
    <>
      <div className="prose">
        {posts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          <div className="space-y-12">
            {posts.map((post) => (
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
