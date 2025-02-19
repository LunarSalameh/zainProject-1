
import Aboutus from "./aboutus"
import Banner from "./banner"
import HeroSection from "./heroSection"
import WhyChooseUs from "./whyChooseUs"
// import OurServices from "./ourServices"
// import OurProjects from "./ourProjects"
import Quote from "./quote"
// import Testimonial from "./testimonial"


 export default function LandingPage () {

    return (
        <div className="flex flex-col">

           <HeroSection />
           <Banner />
           <Aboutus />

            {/* <OurServices /> */}
           <WhyChooseUs />
            {/* <OurProjects /> */}
            <Quote />

            {/* <Testimonial /> */}
        </div>
    )
}