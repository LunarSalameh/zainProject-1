import { FaCheck, FaHeadphones } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaCompassDrafting } from "react-icons/fa6";
// import Button from "../../components/buttons";


export default function WhyChooseUs () {


    const icons = [
        {icon: <FaCheck size={42} color="AB7442"/>, heading: "Quality", subHeading: "Services"},
        {icon: <BsFillPersonCheckFill size={42} color= "AB7442"/>, heading: "Creative", subHeading: "Designers"},
        {icon: <FaCompassDrafting size={42} color="AB7442"/>, heading: "Free", subHeading: "Consultation"},
        {icon: <FaHeadphones size={42} color="AB7442"/>, heading: "Customer", subHeading: "Support"},
    ]
    return (
        <div className="w-full flex justify-center max-md:flex-wrap bg-[#F5F5F5]">


            {/* text  (right) */}
            <div className="w-[50%] max-md:w-[80%] flex flex-col items-start justify-center gap-4 mx-8">

                {/* heading */}
                <h1 className="text-5xl text-[#353535] font-bold mt-6">Why Choose Us __</h1>
                <p className="text-[#555555] text-start text-lg">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                
                <div className=" grid grid-cols-2 justify-items-start  w-full gap-4 mt-4 mb-6">
                    
                    {/* icons */}
                    {icons.map((icon, index)=> (
                            <div key={index} className="flex gap-4 items-center justify-center">
                                <div className="bg-white p-3 w-fit">{icon.icon}</div>
                                <div className="flex flex-col text-start gap-2">
                                    <h1 className="text-lg text-[#555555] =">{icon.heading}</h1>
                                    <p className="text-[#353535] text-lg font-bold">{icon.subHeading}</p>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
             </div>

            {/* img */}
            <div className="w-[50%] max-md:w-[90%] mt-6">
                <img src='./images/feature.jpg' alt="Why Choose Us section" />
            </div>  

        </div>
    )
}