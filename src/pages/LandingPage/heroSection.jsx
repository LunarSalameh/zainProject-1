
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from '../../components/buttons';

export default function HeroSection () {

    const slider = [
        {   title: "Welcome To WooDY", 
            headline: "Best Carpenter & Craftsman Services", 
            description: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.", 
            button: <div className='flex gap-4 mb-6'>
                <Button text="Read More" padding="py-4 px-12  max-md:text-sm max-md:px-6 max-md:py-2"/>
                <button className='bg-white text-lg py-4 px-12 text-black max-md:text-sm max-md:px-6 max-md:py-2'>Free Quote</button>
            </div>,
            img: './images/carousel-1.jpg'
        },
        {   title: "Welcome To WooDY", 
            headline: "Best Carpenter & Craftsman Services", 
            description: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.", 
            button: <div className='flex  gap-4'>
                 <Button text="Read More" padding="py-4 px-12  max-md:text-sm max-md:px-6 max-md:py-2"/>
                 <button className='bg-white text-lg py-4 px-12 text-black max-md:text-sm max-md:px-6 max-md:py-2'>Free Quote</button>
            </div>,
            img: './images/carousel-2.jpg'
        },
        {   title: "Welcome To WooDY", 
            headline: "Best Carpenter & Craftsman Services", 
            description: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.", 
            button: <div className='flex gap-4'>
                <Button text="Read More" padding="py-4 px-12  max-md:text-sm max-md:px-6 max-md:py-2"/>
                <button className='bg-white text-lg py-4 px-12 text-black max-md:text-sm max-md:px-6 max-md:py-2'>Free Quote</button>
            </div>,
            img: './images/carousel-3.jpg'
        }
    ]

    return (
        <div className=' '>
            <Carousel showArrows={false} showStatus={false} autoPlay interval={5000} infiniteLoop showThumbs={false} className='relative mx-auto'>
                {slider.map((slide ,index)=>(
                    <div key={index}>
                        {/* <div className=''> */}
                            <img src={slide.img} alt={slide.title} className='w-[30rem] h-[30rem]'/>
                            <div className='absolute bg-black/50 z-30 top-0 w-full text-white h-full flex items-center flex-col justify-center gap-6  max-md:gap-3'>
                                <h2 className='max-md:text-base text-3xl font-bold '>{slide.title}</h2>
                                <p className='max-md:text-xl text-6xl mx-8 font-bold'>{slide.headline}</p>
                                <p className='max-md:text-sm text-lg font-medium px-8'>{slide.description}</p>
                                <>{slide.button}</>
                            </div>
                        {/* </div> */}
                    </div>
                ))}
            </Carousel>
        </div>
    )
} 