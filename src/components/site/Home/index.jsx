import { getRelatedPostHome } from "@/lib/api/site/relatedData";
import Companies from "./Companies";
import Hero from "./Hero";
import Industries from "./Industries";
import Opportunity from "./Opportunity";
import Results from "./Results";
import Solutions from "./Solutions";
import Testimonial from "./Testimonial";

async function Home() {
  const relatedContent = await getRelatedPostHome();
  console.log(relatedContent)
  return (
    <>
      <Hero/>
      <Solutions/>
      <Industries/>
      <Testimonial/>
      <Companies/>
      <Results data={relatedContent.data}/>
      <Opportunity/>
    </>
  )
}

export default Home;