import StatsSection from '@/components/site/common/StatsSection';

function Stats() {
   const stats = [
      { value: "12+", label: "Years in Different Industry" },
      { value: "85+", label: "Projects Completed" },
      { value: "95+", label: "Global Customers & Partners" },
      { value: "76%", label: "Client Retention Rate" }
  ];

  return (
    <section className="bg-[#00091A]">
    <StatsSection stats={stats} />
  </section>
  )
}

export default Stats