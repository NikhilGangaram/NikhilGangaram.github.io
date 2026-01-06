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
        
        <p className="text-gray-600 text-3xl text-center">Made with 🖤</p>
      </main>
    </>
  );
}