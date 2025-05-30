const Card1 = ({ icon, title, description }) => {
    return (
      <div className="bg-[#0F172A] p-6 flex flex-col gap-y-2 rounded-2xl shadow-lg border border-gray-700 hover:border-gray-500 transition">
        <span 
        style={{
            background: "linear-gradient(138.6deg, #252D3B 12.77%, #0A1323 116.8%)"

        }}
        className="flex items-center justify-center rounded-full border-[1.5px] border-[#9BCFFF1A] p-4 w-20 h-20 ">
        <img src={icon} alt={title} />
      </span>
        <h3 className="text-white text-opacity-65 text-2xl font-bold ">{title}</h3>
        <p className="text-white text-opacity-55 text-sm font-normal ">{description}</p>
      </div>
    );
  };
  
  export default Card1;
  