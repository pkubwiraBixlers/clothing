import { Link } from "react-router";
import { Navigation } from "~/components/Navigation";
import { getAllPosts } from "~/lib/posts";
import type { Route } from "./+types/index";

export function meta() {
  return [
    { title: "Blog - ThePaulin" },
    { name: "description", content: "Fashion tips, behind-the-scenes, and more" },
  ];
}

export function loader() {
  return { posts: getAllPosts() };
}

export default function BlogIndex({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-gray-600 mb-12">
            Fashion tips, behind-the-scenes stories, and style inspiration.
          </p>

          <div className="grid gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link to={`/blog/${post.slug}`} className="block">
                  {post.coverImage && (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-64 object-cover rounded-lg mb-4 group-hover:opacity-90 transition-opacity"
                    />
                  )}
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">{post.date}</p>
                    <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600">{post.excerpt}</p>
                    <span className="inline-block text-primary font-medium hover:underline">
                      Read more →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500">
          © 2026 ThePaulin. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
