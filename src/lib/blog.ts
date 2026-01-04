import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  readingTime: string;
  thumbnail?: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      const readingTimeResult = readingTime(matterResult.content);

      return {
        slug,
        title: matterResult.data.title || 'Untitled',
        date: matterResult.data.date || 'No date',
        content: matterResult.content,
        readingTime: readingTimeResult.text,
        thumbnail: matterResult.data.thumbnail || '',
      };
    });

  return allPostsData.sort((a, b) => {
    // Sort by featured first, then alphabetically by title
    return a.title.localeCompare(b.title);
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      const mdxPath = path.join(postsDirectory, `${realSlug}.mdx`);
      if (!fs.existsSync(mdxPath)) {
        return null;
      }
      const fileContents = fs.readFileSync(mdxPath, 'utf8');
      const matterResult = matter(fileContents);
      const readingTimeResult = readingTime(matterResult.content);

      return {
        slug: realSlug,
        title: matterResult.data.title || 'Untitled',
        date: matterResult.data.date || 'No date',
        content: matterResult.content,
        readingTime: readingTimeResult.text,
        thumbnail: matterResult.data.thumbnail || '',
      };
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const readingTimeResult = readingTime(matterResult.content);

    return {
      slug: realSlug,
      title: matterResult.data.title || 'Untitled',
      date: matterResult.data.date || 'No date',
      content: matterResult.content,
      readingTime: readingTimeResult.text,
      thumbnail: matterResult.data.thumbnail || '',
    };
  } catch (error) {
    console.error('Error reading post:', error);
    return null;
  }
}
