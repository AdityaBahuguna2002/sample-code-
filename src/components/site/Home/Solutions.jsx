export default function Solutions() {
  const futureReadySolutions = {
  heading: "Technology That Keeps Up With Your Business",
  description:
    "Integrate powerful technology into your business and streamline your operations, as well as maximize efficiency and time to value for your customers and key stakeholders.",
  solutions: [
    {
      title: "Artificial Intelligence and Data Analytics",
      description:
        "Unlock a high degree of autonomy with AI while leveraging the power of big data to uncover the insights you need to make smarter decisions.",
    },
    {
      title: "Salesforce",
      description:
        "Simplify CRM and change the way you engage with customers. We help you deploy and maximize the capabilities of Salesforce, allowing you to skyrocket your ROI.",
    },
    {
      title: "Microsoft Dynamics 365",
      description:
        "Put everything you need to manage your operations, customer service delivery, and finances in one place. Our solutions simplify data and workflow integration, keeping you efficient.",
    },
    {
      title: "Product Engineering",
      description:
        "Build custom applications, automate your workflows and make big business moves. Our solutions were specially designed to help you work efficiently and capitalize on data.",
    },
  ]
};

  return (
    <section className="relative  flex items-center justify-center  ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute bg-custom-gradient-2 inset-0 w-screen h-[100%]  object-cover  `}
      >
        <source src="/Home/Solutions/bg_solution.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="absolute inset-0 bg-[#00091A] bg-opacity-50"></div> */}

      <div className="relative w-[86%] my-20  max-w-7xl   grid lg:grid-cols-[40%_60%] gap-[40px]  mx-auto text-white ">
        <div className=" lg:w-[76%] gap-[40px]">
          <h2 className=" ms-4  text-secondary-300 font-normal text-2xl mb-4">
            Future-Ready Solutions
          </h2>
          <h1 className="text-4xl  font-normal ">
            {futureReadySolutions.heading}
          </h1>
          <p className=" mt-3">{futureReadySolutions.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 ">
          {futureReadySolutions.solutions.map((solution, index) => (
            <div
              key={index}
              className=" p-9 rounded-xl  bg-custom-gradient-1  transition"
            >
              <h3 className="text-2xl text-opacity-[64%] font-bold">
                {solution.title}
              </h3>
              <p className="text-white font-normal text-opacity-[56%] mt-3">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
