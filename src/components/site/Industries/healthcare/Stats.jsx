import StatsSection from '@/components/site/common/StatsSection';

function Stats() {
    const stats = [
        { value: "39000+", label: "Person Hours" },
        { value: "74+", label: "Customers/Partners" },
        { value: "97+", label: "Person Hours" },
        { value: "80+", label: "Repeat Business %" },
      ];
  return (
    <section className="bg-[#00091A]">
    <StatsSection stats={stats} />
  </section>
  )
}

export default Stats