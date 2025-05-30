"use client";

function Hero() {
  const data = {
    image: "/resources/blog/blog-post.png",
    heading: "Insights That Drive Innovation",
    subHeading:
      "Explore expert articles, industry trends, and tech updates to help your business stay ahead in a digital world.",
  };

  return (
    <section className="bg-[#00091A] py-[3vh]">
      <div className="w-[86%] max-w-7xl mx-auto relative py-8 text-white">
        <div
          className="relative flex items-center px-12 py-12 gap-2 w-full h-[344px] rounded-[16px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(90deg, #0D0057 0%, rgba(36, 17, 142, 0) 51.67%), url(${data.image})`,
          }}
        >
          <div className="flex flex-col items-start gap-[80px] w-[669px] h-[248px]">
            <div className="flex flex-col items-start gap-6 w-[669px] h-[248px]">
              <h1
                className="text-[60px] leading-[70px] font-light w-[669px]"
                style={{
                  background: "linear-gradient(90deg, #FFFFFF 45.6%, rgba(213, 217, 229, 0.67) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                {data.heading}
              </h1>

              <p className="text-[20px] leading-[28px] font-normal w-[497px] text-white text-opacity-70">
                {data.subHeading}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
