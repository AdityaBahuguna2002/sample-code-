import Image from "next/image";

function Industries() {
  const data = [
    {
      title: "Healthcare",
      href: "/",
      image: "/Home/Industries/health.png",
      gradient:
        "linear-gradient(36.33deg, rgba(0, 39, 122, 0.8) 36.8%, rgba(0, 71, 223, 0.8) 97.15%)",
    },
    {
      title: "Media & Entertainment",
      href: "/",
      image: "/Home/Industries/Media.png",
      gradient:
        "linear-gradient(216.33deg, rgba(229, 0, 0, 0.8) 1.5%, rgba(126, 0, 0, 0.8) 70.8%)",
    },
    {
      title: "Retail & Ecommerce",
      href: "/",
      image: "/Home/Industries/Retail.png",
      gradient:
        "linear-gradient(216.33deg, rgba(105, 66, 182, 0.8) 1.5%, rgba(55, 34, 96, 0.8) 70.8%)",
    },
    {
      title: "Real Estate",
      href: "/",
      image: "/Home/Industries/Estate.png",
      gradient:
        "linear-gradient(216.33deg, rgba(170, 102, 4, 0.8) 1.5%, rgba(88, 52, 0, 0.8) 70.8%)",
    },
   
  ];

  return (
    <section className="bg-[#00091A]">
      <div className="w-[86%] max-w-7xl mx-auto py-14">
        <h1 className="text-center text-white text-opacity-80 text-4xl">
          Our Solutions Were Made for Every Industry
        </h1>
        <div className="mt-8  grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-2 ">
          {data.map((item, index) => (
            <div
              key={index}
              className=" h-[400px] rounded-md relative overflow-hidden  "
              style={{
                backgroundImage: `${item.gradient}, url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Image
                src={item.image}
                alt={item.title||"industry"}
                layout="fill"
                objectFit="cover"
                className="hidden"
              />
              <h1 className="absolute bottom-10 px-3 text-3xl text-white text-opacity-80">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
