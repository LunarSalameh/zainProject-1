import { FaCheck, FaHeadphones } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaCompassDrafting } from "react-icons/fa6";


export default function Banner () {

    const banner = [
        {title: "Creative Designers", icon: <BsFillPersonCheckFill size={38} color="AB7442"/>},
        {title: "Quality Products", icon: <FaCheck size={38} color="AB7442"/>},
        {title: "Free Consultation", icon: <FaCompassDrafting size={38} color="AB7442"/>},
        {title: "Customer Support", icon: <FaHeadphones size={38} color="AB7442"/>}
    ]

    return (
        <div className="w-full flex max-md:flex-wrap  justify-evenly gap-10 px-14 py-4 my-12">

           {
                banner.map((item, index) => (
                <div className="flex flex-col w-3/4 gap-3 " >

                    {/* top */}
                    <div className="flex justify-between gap-6">
                        <div className="bg-[#F5F5F5] p-4 flex items-center">
                            {item.icon}
                        </div>
                        <h1 className="text-[#f5f5f5] text-7xl font-bold items-center flex">0{index + 1}</h1>
                    </div>

                    {/* text */}
                    <p className="text-start font-bold text-lg">
                        {item.title}
                    </p>  
                </div>  
                ))
           } 
           
        </div>
    )
}