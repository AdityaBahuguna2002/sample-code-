function Hero() {
  const data = {
    image: "/Services/Salesforce/Hero/hero.jpg", 
    heading: "Real Solutions, Proven Success",
    subHeading:
      "We deliver innovation-led and proven solutions to our clients, every time.",
  };

  return (
    <section className="bg-[#00091A] py-[3vh]">
      <div className="w-[86%] max-w-7xl relative py-8 text-white mx-auto">
        <div
          style={{
            backgroundImage: `url(${data.image})`,
          }}
          className="bg-cover bg-center relative bg-no-repeat flex rounded-md justify-center"
        >
          <div
            className="absolute inset-0 rounded-md"
            style={{
              background: "linear-gradient(90deg, #0D0057 10%, rgba(36, 17, 142, 0) 100%)",
            }}
          ></div>

          <div className="relative z-10 grid grid-cols-3 mb-4">
            <div className="p-9 col-span-2">
              <h1
                style={{
                  background: "linear-gradient(90deg, #FFFFFF 60%, rgba(213, 217, 229, 0.67) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="font-light w-[51vw] text-6xl"
              >
                {data.heading}
              </h1>
              <p className="w-[40vw] text-white mb-16 text-opacity-[72%] font-normal text-xl mt-8">
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
