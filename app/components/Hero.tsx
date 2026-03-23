import { Link } from "react-router";
import { heroProduct } from "~/data/heroProduct";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden h-[90vh] md:h-[33.33vh] md:max-h-[33.33vh]">
      <div
        className="absolute inset-0 w-full md:h-[150%] md:top-0"
        style={{
          backgroundImage: `url(${heroProduct.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
        }}
        data-parallax
      />

      <div className="absolute inset-0 bg-primary/70" />

      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="p-6">
          <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wider">
            THEPAULIN
          </h1>
        </div>

        <div className="p-6 flex items-end gap-6">
          <div className="hidden md:block w-32 h-40 overflow-hidden rounded-lg shadow-lg flex-shrink-0">
            <img
              src={heroProduct.image}
              alt={heroProduct.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-white">
            <p className="text-lg font-semibold mb-1">{heroProduct.name}</p>
            <p className="text-xl font-bold">{heroProduct.price}</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[10%] left-0 right-0 flex justify-center">
        <Link
          to="/blog"
          className="bg-secondary text-white px-8 py-3 font-medium hover:bg-secondary-dark transition-colors"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
