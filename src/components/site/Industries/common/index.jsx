import Hero  from "./Hero";
import Stats from "./Stats";
import Services from "./Services";
import CaseStudy from "./CaseStudy";
import Gallery from "./Gallery";
import Opportunity from "../../Home/Opportunity";

function Industries() {
    return (
        <>
            <Hero/>
            <Stats/>
            <Services/>
            <CaseStudy/>
            <Gallery/>
            <Opportunity heading="Want to unravel another success story within your organization? "
             description=" We’re more than developers and consultants—we’re your strategic partners in digital transformation. While you focus on your vision, we power your next breakthrough." 
             cta ="Explore Opportunities!"/>
        </>
    );
}

export default Industries;