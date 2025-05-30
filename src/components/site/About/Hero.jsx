import Image from "next/image"
function Hero() {
  return (
    <>
    <div className=" h-[78vh]  relative"> 
        <img src="/About/HeroAbout.png" alt="hero-image"  className=" h-full object-cover  w-full " />
        <div className=" bg-[#010743] py-6 rounded-xl font-medium  px-10 text-2xl  text-center w-[80%] left-0 right-0 -bottom-5 mx-auto absolute ">
            <p className=" text-white">We believe in the power of technology and provide exceptional experiences. Our right teams can take care of your technological aspects and amplify your business productivity.</p>
        </div>
    </div>
    </>
  )
}

export default Hero