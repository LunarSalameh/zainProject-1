 

import React,{useState} from "react";
import { BsList } from "react-icons/bs";
import { FaLocationDot, FaRegClock, FaPhone } from "react-icons/fa6";
import { FaFacebookF, FaTwitter , FaLinkedinIn , FaInstagram  } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Button from "./buttons";


export default function Navbar () {

    const [openSubList, setOpenSubList] = useState(false);
    const [menu, setMenu] = useState(false);

    const [index, setIndex] = useState(-1)

    const socials= [
        { src: <FaFacebookF color="AB7442" size={16}/>, path: '/'},
        { src: <FaTwitter color="AB7442" size={16}/>, path: '/'},
        { src: <FaLinkedinIn color="AB7442" size={16}/>, path: '/'},
        { src: <FaInstagram color="AB7442" size={16}/>, path: '/'},
    ]

    const navbarList = [
        {title: "HOME", src: '/'},
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
        <div className="flex flex-col flex-wrap">
            {/* top bar  */}
            <div className="flex flex-wrap justify-between bg-[#f5f5f5] px-12 py-2 text-[#555555] text-sm max-md:hidden">

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
            <div className="flex justify-between items-center p-2 border-t border-[#AB7442]/20">
                {/* logo */}
                <div>
                    <h1 className="text-[#AB7442] px-12 py-3 text-4xl font-sans font-bold">WooDY</h1>
                </div>

                {/* list */}
                <div className="flex items-center gap-8 text-base ">
                    {navbarList.map((item, index) =>(
                        <div key={index} className="flex gap-2 items-center relative max-md:hidden">
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

                    <div className="hidden max-md:flex max-md:flex-col">
                        <div onClick={()=>setMenu(!menu)} className="flex items-center border px-3 py-1">
                            <BsList size={28} className="text-black/50"/>
                        </div>
                    </div>

                    <Button text="Get A Quote  ➜" padding='py-6 px-12'/>
                </div>
               
                
            </div> 
            
            {menu && (
                <div className="flex flex-col gap-4 px-14 border-t py-6">
                    {navbarList.map((item, index) =>(
                        <div key={index} className="flex flex-col gap-2 items-start ">
                            <div className="flex items-center gap-2 hover:text-[#AB7442]">
                                <a href={item.src} >{item.title}</a>
                                <div >
                                    {item.subList ? 
                                    <IoIosArrowDown className="cursor-pointer" size={14} onClick={()=>handleSubList(index)}/>: ""}
                                </div>
                            </div>
                            {index === index && openSubList && item.subList && (
                                <div className="flex flex-col py-2 border w-full gap-2 ">
                                    {item.subList.map((subItem, subIndex) => (
                                        <div key={subIndex} className="flex flex-col px-4 active:text-white active:bg-[#AB7442]">
                                            <a href={subItem.src}>{subItem.title}</a>
                                        </div>
                                    ))}
                                </div>
                            )}                          
                        </div>                        
                        
                    ))}
                </div>
            )}

        </div>
    )
}