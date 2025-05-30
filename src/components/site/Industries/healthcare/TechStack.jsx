import Image from 'next/image';
import SectionHeader from '@/components/site/common/SectionHeader'

function TechStack({tech}) {

    const techStack = [
        { name: "Azure App Service", icon: "/Industries/Healthcare/TechStack/azure-app-service.png" },
        { name: "OpenAI", icon: "/Industries/Healthcare/TechStack/openai.png" },
        { name: "LangChain", icon: "/Industries/Healthcare/TechStack/langchain.png" },
        { name: "SQL Server", icon: "/Industries/Healthcare/TechStack/sql-server.png" },   
        { name: "Redis", icon: "/Industries/Healthcare/TechStack/redis.png" },
        { name: ".Net", icon: "/Industries/Healthcare/TechStack/dotnet.png" },
        { name: "Swift", icon: "/Industries/Healthcare/TechStack/swift.png" },
        { name: "Cocoa", icon: "/Industries/Healthcare/TechStack/cocoa.png" },
        { name: "HIPPA", icon: "/Industries/Healthcare/TechStack/hippa.png" },
        { name: "Celery", icon: "/Industries/Healthcare/TechStack/celery.png" },
      ];
  return (
    <section className='bg-[#0A1323] '>
        <div className=' w-[86%] max-w-7xl py-10 mx-auto '>
     <SectionHeader title="Our Technology stack" />
        <div className=" flex  justify-center gap-16 flex-wrap mt-10 mb-8 ">
          { tech ?tech.map((tech, index)=>(
            <div key={index} className="flex  items-center gap-4 justify-center ">
              <Image className='rounded-xl' height={50} width={50} src={tech.image} alt={tech.name||"tech"} />
              <span className="text-white font-medium text-xl">{tech.name}</span>
            </div>
          )) :techStack.map((tech, index) => (
            <div key={index} className="flex  items-center gap-4 justify-center ">
              <Image height={38} width={38} src={tech.icon} alt={tech.name||"tech"} />
              <span className="text-white font-medium text-xl">{tech.name}</span>
            </div>
          ))}
        </div>
        </div>
    </section>
  )
}

export default TechStack