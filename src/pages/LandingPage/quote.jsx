import { FaUsers, FaCheck } from "react-icons/fa";
import Button from "../../components/buttons";


export default function Quote () {

    return (
        <div className="w-full flex justify-center max-md:flex-wrap bg-[#F5F5F5]">

            {/* img */}
            <div className="w-[50%] max-md:w-[80%] ">
                <img src='./images/quote.jpg' alt="Free Quote section" />
            </div>

            {/* text  (right) */}
            <div className="w-[50%] max-md:w-[80%] flex flex-col items-start justify-center gap-4 mx-8">

                {/* heading */}
                <h1 className="text-5xl text-[#353535] font-bold mt-6">Free Quote __</h1>
                <p className="text-[#555555] text-start text-lg">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                
                <div className="w-full flex gap-12 flex-wrap justify-center  mt-4 mb-6">
                    
                    {/* icons */}
                    
                    <div className="w-full">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3  "
                            />
                            <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3  "
                            />
                            <input
                            type="tel"
                            placeholder="Your Mobile"
                            className="w-full p-3  "
                            />
                            <select className="w-full p-3  ">
                                <option>Select A Service</option>
                                <option>Service 1</option>
                                <option>Service 2</option>
                                <option>Service 3</option>
                            </select>
                            <textarea
                            placeholder="Special Note"
                            className="w-full md:col-span-2 p-3  "
                            ></textarea>
                        </form>
                    </div>

                </div>
                <Button text="Submit" padding="py-4 px-12 w-[100%]"/>

            </div>
        </div>
    )
}