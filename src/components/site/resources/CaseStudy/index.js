import Opportunity from "../../Home/Opportunity";
import Gallery from "../../Industries/healthcare/Gallery";
import Awards from "../../Services/Salesforce/Awards";
import CaseStudySection from "./CaseStudySection"
import Hero from "./Hero"
import { caseStudyData } from './data/caseStudies';


function index() {
  return (
    <>
    <Hero/>
    <CaseStudySection staticData={caseStudyData} />
    <Awards/>
    <Gallery/>
    <Opportunity/>
    </>
  )
}

export default index