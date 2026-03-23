import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { Navigation } from "~/components/Navigation";
import { Hero } from "~/components/Hero";
import { getAllPosts } from "~/lib/posts";
import type { Route } from "./+types/home";

export function meta() {
  return [
    { title: "ThePaulin" },
    { name: "description", content: "Modern fashion for the modern era" },
  ];
}

export function loader() {
  return { posts: getAllPosts().slice(0, 3) };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current;
      if (!hero || window.innerWidth < 768) return;

      const parallaxImg = hero.querySelector("[data-parallax]") as HTMLElement;
      if (parallaxImg) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.5;
        parallaxImg.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section ref={heroRef} className="md:h-[33.33vh] md:max-h-[33.33vh]">
          <Hero />
        </section>

        <section className="bg-primary text-white py-24">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Latest from the Blog</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group"
                >
                  {post.coverImage && (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-80 transition-opacity"
                    />
                  )}
                  <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-dark transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 bg-primary py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500">
          © 2026 ThePaulin. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
