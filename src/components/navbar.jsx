 

import React,{useState} from "react";

import { FaLocationDot, FaRegClock, FaPhone } from "react-icons/fa6";
import { FaFacebookF, FaTwitter , FaLinkedinIn , FaInstagram  } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Button from "./buttons";


export default function Navbar () {

    const [openSubList, setOpenSubList] = useState(false);
    const [index, setIndex] = useState(-1)

    const socials= [
        { src: <FaFacebookF color="AB7442" size={16}/>, path: '/'},
        { src: <FaTwitter color="AB7442" size={16}/>, path: '/'},
        { src: <FaLinkedinIn color="AB7442" size={16}/>, path: '/'},
        { src: <FaInstagram color="AB7442" size={16}/>, path: '/'},
    ]

    const navbarList = [
        {title: "HONE", src: '/'},
        {title: "ABOUT", src: '/'},
        {title: "SERVICE", src: '/'},
        {title: "PROJECT", src: '/'},
        {title: "PAGES", 
            subList: 
            [ 
                {title: "Feature", src: '/' },
                {title: "Free Quote", src: '/' },
                {title: "Our Team ", src: '/' },
                {title: "Testimonial", src: '/' },
                {title: "404 Page", src: '/' },

            ], 
            src: '/'},
        {title: "CONTACT", src: '/'},
    ]

    function handleSubList (index) {

        setIndex(index);
        setOpenSubList(!openSubList);

    }
    return (
        <div className="flex flex-col">
            {/* top bar  */}
            <div className="flex justify-between bg-[#f5f5f5] px-12 py-2 text-[#555555] text-sm">

                {/* street, date, time */}
                <div className="flex gap-5">
                    <div className="flex items-center gap-2">
                        <FaLocationDot color="AB7442" size={16}/> 
                        <h2>123 Street, New York, USA</h2>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaRegClock color="AB7442" size={16}/> 
                        <h2>Mon - Fri : 09.00 AM - 09.00 PM</h2>
                    </div>
                </div>

                {/* socials */}
                <div className="flex">
                    
                    <div className="flex items-center gap-2">
                        <FaPhone color="AB7442" size={16}/> 
                        <h2 className="pr-6">+012 345 6789</h2>
                    </div>

                    <div className="flex items-center gap-2">

                        {socials.map((social,index) => (
                            <div key={index} className="bg-white p-2">
                                <a  href={social.path}>
                                    {social.src}
                                </a>
                            </div>
                        ))}

                    </div>

                </div>

            </div>
            
            {/* second bar  */}
            <div className="flex justify-between items-center ">
                {/* logo */}
                <div>
                    <h1 className="text-[#AB7442] px-12 py-3 text-4xl font-sans font-bold">WooDY</h1>
                </div>

                {/* list */}
                <div className="flex items-center gap-8 text-base">
                    {navbarList.map((item, index) =>(
                        <div key={index} className="flex gap-2 items-center relative">
                            <a href={item.src}>{item.title}</a>
                            <div>
                                {item.subList ? 
                                <IoIosArrowDown className = " cursor-pointer" size={14} onClick={()=>handleSubList(index)}/>: ""}
                            </div>

                            {index === index && openSubList && item.subList && (
                                <div className="absolute left-0 top-full mt-2  bg-white border">
                                    {item.subList.map((subItem, subIndex) => (
                                        <div key={subIndex} className="flex flex-col py-2 px-6 hover:bg-gray-200 active:text-white active:bg-[#AB7442]">
                                            <a href={subItem.src}>{subItem.title}</a>
                                        </div>
                                    ))}
                                </div>
                            )}
                            
                        </div>
                        
                    ))}
                    <Button text="Get A Quote  ➜" padding='py-6 px-12'/>
                </div>

                
            </div>
        </div>
    )
}