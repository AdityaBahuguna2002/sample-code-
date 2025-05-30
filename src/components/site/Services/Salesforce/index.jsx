import Opportunity from "@/components/site/Home/Opportunity"
import Faq from "@/components/site/common/Faq"
import Brands from "./Brands"
import Hero from "./Hero"
import Salesforce from "./Salesforce"
import Solutions from "./Solutions"
import Transforming from "./Transforming"
import Types from "./Types"
import Gallery from "./Gallery"
import Awards from "./Awards"

function index() {
  const faqs = [
  {
    question: "What is Salesforce Consulting Services?",
    answer: `
      <p>SF consulting services assist in analysing CRM solutions and determining adaptable cloud-based technologies that suit your business. Our Salesforce services can assist you with best practices to serve your customers and genuinely represent your business identity.</p>`
  },
  {
    question: "If I want to customize this component according to my process, can you help?",
    answer: `
      <p>Salesforce is a powerful platform that can be used for more than to simply generate revenues. The strength of Salesforce is not in what it can do but, in the potential, it creates for business change. Our SF professionals have sufficient experience and know-how to comprehend how and where to use this efficient platform in order to bring the best output to your company.</p>`
  },
  {
    question: "Is there any specific industry that Salesforce is the most suitable solution for?",
    answer: `
      <p>If your services or products have people and that to a lot of clients, Salesforce offers valuable utility. Our expertise in Salesforce solutions is widely recognized in boosting customer relationship management within an extensive range of industries. Notably, these industries include Healthcare, Real Estate, E-commerce, Manufacturing, Retail, Utility, etc.</p>`
  },
  {
    question: "What would be the cost of your Salesforce services?",
    answer: `
      <p>The price involved in the Salesforce services varies with the scope and degree of complexity involved in the project. To obtain accurate information, it is recommended to enter into discussion with one of our qualified Salesforce experts at Cynoteck, who can thoroughly analyze your requirements and quote you accordingly. Kindly reach out to us and receive an estimate quote for your specific business needs.</p>`
  }
];
  return (
    <>
   <Hero/>
      <Brands/>
    {/* <Solutions/> */}
    <Types/>
    <Transforming/>
    <Awards/>
   <Salesforce/>
     <Gallery/>
    <Faq faqs={faqs} />
    <Opportunity/> 
    </>
  )
}

export default index