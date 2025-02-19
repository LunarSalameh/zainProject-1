
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from '../../components/buttons';

export default function HeroSection () {

    const slider = [
        {   title: "Welcome To WooDY", 
            headline: "Best Carpenter & Craftsman Services", 
            description: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.", 
            button: <div className='flex gap-4'>
                <Button text="Read More" padding="py-4 px-12"/>
                <button className='bg-white text-lg py-4 px-12 text-black'>Free Quote</button>
            </div>,
            img: './images/carousel-1.jpg'
        },
        {   title: "Welcome To WooDY", 
            headline: "Best Carpenter & Craftsman Services", 
            description: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.", 
            button: <div className='flex gap-4'>
                 <Button text="Read More" padding="py-4 px-12"/>
                 <button className='bg-white text-lg py-4 px-12 text-black'>Free Quote</button>
            </div>,
            img: './images/carousel-2.jpg'
        },
        {   title: "Welcome To WooDY", 
            headline: "Best Carpenter & Craftsman Services", 
            description: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.", 
            button: <div className='flex gap-4'>
                <Button text="Read More" padding="py-4 px-12"/>
                <button className='bg-white text-lg py-4 px-12 text-black'>Free Quote</button>
            </div>,
            img: './images/carousel-3.jpg'
        }
    ]

    return (
        <div>
            <Carousel showArrows={false} showStatus={false} autoPlay interval={5000} infiniteLoop showThumbs={false} className='relative mx-auto'>
                {slider.map((slide ,index)=>(
                    <div key={index} >
                        <img src={slide.img} alt={slide.title} className=''/>
                        <div className='absolute bg-black/50 z-10 top-0 w-full text-white h-full flex items-center flex-col justify-center gap-6 px-24'>
                            <h2 className='max-md:text-lg text-3xl font-bold '>{slide.title}</h2>
                            <p className='max-md:text-3xl text-6xl mx-8 font-bold w-2/3'>{slide.headline}</p>
                            <p className='max-md:text-md text-lg font-medium w-2/3 mb-2'>{slide.description}</p>
                            <>{slide.button}</>
                            </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
} 