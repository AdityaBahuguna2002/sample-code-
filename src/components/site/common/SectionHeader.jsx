const SectionHeader = ({ title, subtitle,classes }) => {
  return (
    <div className="text-center ">
      {title &&<h2 className="text-4.5xl font-normal text-white text-opaciy-80 ">{title}</h2>}
      {subtitle&&<p className={`text-white ${classes} mx-auto text-opacity-70 text-sm mt-2`}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
