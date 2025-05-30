const StatsSection = ({ stats }) => {
  return (
    <div className="w-[86%] max-w-7xl mx-auto text-white bg-transparent  py-8">
      <div className="max-w-5xl mx-auto flex justify-between items-center text-center">
        {stats?.map((stat, index) => (
          <div key={index} className="flex gap-y-2 flex-col">
            <span className="text-5xl  font-normal">{stat.value}</span>
            <span className="text-xl text-white  text-opacity-80 ">{stat.label}</span> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
