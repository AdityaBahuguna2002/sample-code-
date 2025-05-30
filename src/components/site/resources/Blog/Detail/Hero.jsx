import Image from "next/image";

function Hero({post}) {
  const data = {
    image: "/resources/blog/detail/hero.png",
  };

  return (
    <section className="bg-[#00091A] py-[4vh]">
      <div className="w-[86%] max-w-7xl mx-auto text-white">
<h1 className=" mt-6 mb-8 text-4xl font-medium ">{post.title}</h1>
        <div className="relative w-full h-[339px] rounded-md overflow-hidden">
          <Image
            src={post.featuredImage}
            alt="hero"
            fill
            className=" object-cover "
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
