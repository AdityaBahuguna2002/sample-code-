import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

function Results({ data }) {
  return (
    <section className="bg-[#00091A] py-20">
      <div className="relative w-[86%] flex flex-col items-center mx-auto text-white">
        <span className="text-sm rounded-lg bg-white bg-opacity-5 px-3 py-2 text-[#9BCFFF] tracking-wide">
          Real-World Results
        </span>
        <h2 className="text-3xl lg:text-5xl w-full lg:w-[800px] text-center text-white text-opacity-80 my-6">
          Discover How We Deliver Results
        </h2>

        <div className="relative py-11 px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Main featured card */}
            {data?.[0] && (
              <Link href={`/${data[0].PostType.slug}/${data[0].slug}`} className="block">
                <div className="relative rounded-lg overflow-hidden">
                  <div
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(125, 73, 242, 0.24) 0%, rgba(23, 6, 33, 0.4) 100%)",
                    }}
                    className="relative h-[300px] w-full"
                  >
                    <span className="bg-[#00000080] z-10 px-4 py-1 rounded-lg absolute text-white top-5 left-5">
                      {data[0].PostType.name}
                    </span>
                    <Image
                      src={data[0].featuredImage}
                      alt={data[0].title}
                      layout="fill"
                      objectFit="cover"
                      className="opacity-70 rounded-xl"
                    />
                  </div>
                  <div className="py-4">
                    <span className="text-sm capitalize text-[#82C3FF] tracking-wide">
                      {new Date(data[0].createdAt).toLocaleDateString()}
                    </span>
                    <h3 className="text-xl flex justify-between font-semibold text-white text-opacity-65 mt-2">
                      {data[0].title}
                      <MoveUpRight className="text-white" />
                    </h3>
                    <p className="text-[#FFFFFFB2] mt-3">
                      {data[0].description}
                    </p>
                  </div>
                </div>
              </Link>
            )}

            {/* Scrollable list */}
            <div className="relative h-[450px]">
              <div className="overflow-y-auto overflow-x-hidden custom-scrollbar h-full flex flex-col gap-6 pr-2">
                {data?.slice(1).map((item, index) => (
                  <Link
                    key={index}
                    href={`/${item.PostType.slug}/${item.slug}`}
                    className="grid gap-2 md:grid-cols-[40%_60%]"
                  >
                    <div
                      className="relative"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(125, 73, 242, 0.24) 0%, rgba(23, 6, 33, 0.4) 100%)",
                      }}
                    >
                      <span className="bg-[#00000080] z-10 px-4 text-xs py-1 rounded-lg absolute text-white top-2 left-2">
                        {item.PostType.name}
                      </span>
                      <img
                        src={item.featuredImage}
                        alt={item.title}
                        className="opacity-70 h-full w-full object-cover rounded-xl"
                      />
                    </div>
                    <div>
                      <span className="text-sm capitalize text-[#82C3FF] tracking-wide">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                      <h3 className="text-lg flex justify-between font-semibold text-white text-opacity-65 mt-2">
                        <span>{item.title}</span>
                        <MoveUpRight className="text-white" />
                      </h3>
                      <p className="text-[#FFFFFFB2] mt-3">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 9, 26, 0) 0%, rgba(0, 9, 26, 0.8) 60%, #00091A 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
