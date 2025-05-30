import StatsSection from '@/components/site/common/StatsSection';

function Impact() {
  const stats = [
    { value: "500+", label: "Successful Projects" },
    { value: "15+", label: "Countries served" },
    { value: "100+", label: "Skilled professionals" },
    { value: "90%", label: "Client Retention Rate" },
  ];

  return (
    <section className="bg-[#0C2E91]">
      <div className="w-[86%] py-20 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10 items-center">
          <div className="space-y-6">
            <p className="text-white font-medium text-4xl">
              Technology. Insight. Impact.
            </p>
            <p className="w-[90%] text-white font-medium leading-7 text-sm">
              Cynoteck is a global IT consulting and development company helping businesses grow through smart digital solutions. From CRM and mobile apps to AI, cloud, and data analytics — we transform ideas into scalable, future-ready solutions. Our client-centric approach, innovation mindset, and deep tech expertise set us apart.
            </p>
          </div>
          <div>
            <img
              src="/About/Impact.png"
              alt="Illustration showing Cynoteck's impact"
              className="w-full h-auto"
            />
          </div>
        </div>

        <section className=" mt-16">
          <StatsSection stats={stats} />
        </section>
      </div>
    </section>
  );
}

export default Impact;
