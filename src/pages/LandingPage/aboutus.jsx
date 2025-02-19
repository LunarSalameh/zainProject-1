import { FaUsers, FaCheck } from "react-icons/fa";
import Button from "../../components/buttons";


export default function Aboutus () {

    return (
        <div className="w-full flex justify-center max-md:flex-wrap bg-[#F5F5F5]">

            {/* img */}
            <div className="w-[50%] max-md:w-[80%] ">
                <img src='./images/about.jpg' alt="about us section" />
            </div>

            {/* text  (right) */}
            <div className="w-[50%] max-md:w-[80%] flex flex-col items-start justify-center gap-4 mx-8">

                {/* heading */}
                <h1 className="text-5xl text-[#353535] font-bold mt-6">About Us __</h1>
                <p className="text-[#555555] text-start text-lg">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                
                <div className="w-full flex gap-12 flex-wrap justify-start mt-4 mb-6">
                    
                    {/* icons */}
                    
                    <div className="flex gap-4 items-center">
                        <div className="bg-white p-3"><FaUsers size={42} color="AB7442"/></div>
                        <div className="flex flex-col text-start gap-2">
                            <h1 className="text-3xl text-[#AB7442] font-bold">1234</h1>
                            <p className="text-[#353535] text-lg">Happy Clients</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className="bg-white p-3"><FaCheck size={42} color="AB7442"/></div>
                        <div className="flex flex-col text-start gap-2">
                            <h1 className="text-3xl text-[#AB7442] font-bold">1234</h1>
                            <p className="text-[#353535] text-lg">Projects Done</p>
                        </div>
                    </div>

                </div>
                <Button text="Explore More" padding="py-4 px-12"/>

            </div>
        </div>
    )
}