'use client';

import Card from "./Card";

function Listing({ caseStudies }) {
  return (
    <div className="">
      {caseStudies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          {caseStudies.map((caseStudy) => (
            <Card key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      ) : (
        <p className="text-white">No case studies available</p>
      )}
    </div>
  );
}

export default Listing;