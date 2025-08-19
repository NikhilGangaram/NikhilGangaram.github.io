import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="main-content">
        <div className="container">
          <div className="prose">
            <Link 
              href="/blog"
              className="text-blue-600 hover:text-blue-800 text-sm underline mb-6 inline-block"
            >
              ← Back to Blog Posts
            </Link>
            
            <article>
              <header className="mb-8">
              </header>
              
              <div className="prose prose-lg max-w-none">
                <MDXRemote 
                  source={post.content}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [rehypeHighlight],
                    },
                  }}
                />
              </div>
            </article>
          </div>
        </div>
        
        <footer className="border-t border-gray-200 mt-32 py-16 text-center">
          <p className="text-gray-600 text-3xl">Made with 🖤</p>
        </footer>
      </main>
    </>
  );
}