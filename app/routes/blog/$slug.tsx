import { Link } from "react-router";
import { Navigation } from "~/components/Navigation";
import { getPostBySlug } from "~/lib/posts";
import type { Route } from "./+types/$slug";

export function meta({ params }: Route.MetaArgs) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return [{ title: "Post Not Found" }];
  }
  return [
    { title: `${post.title} - ThePaulin` },
    { name: "description", content: post.excerpt },
  ];
}

export function loader({ params }: Route.ComponentProps) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }
  return { post };
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <article className="max-w-3xl mx-auto px-4 py-12">
          <Link
            to="/blog"
            className="inline-block mb-8 text-gray-600 hover:text-primary transition-colors"
          >
            ← Back to Blog
          </Link>

          <header className="mb-8">
            <p className="text-gray-500 mb-2">{post.date}</p>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          </header>

          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />
          )}

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>

      <footer className="border-t py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500">
          © 2026 ThePaulin. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
