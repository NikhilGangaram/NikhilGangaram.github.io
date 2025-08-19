import Header from '@/components/Header';
import BlogListing from '@/components/BlogListing';
import { getAllPosts } from '@/lib/blog';

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="main-content">
        <div className="container">
          <BlogListing posts={posts} />
        </div>
        
        <footer className="border-t border-gray-200 mt-32 py-16 text-center">
          <p className="text-gray-600 text-3xl">Made with 🖤</p>
        </footer>
      </main>
    </>
  );
}