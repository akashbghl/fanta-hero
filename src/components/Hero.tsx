import  { useState } from 'react'
import fanta1 from '../assets/fanta1.png'
import fanta2 from '../assets/fanta2.png'
import fanta3 from '../assets/fanta3.png'
import Navbar from './Navbar'
import { motion, AnimatePresence, easeInOut } from 'motion/react'
import { FaWhatsapp } from 'react-icons/fa'
import { UpdateFollower } from 'react-mouse-follower'

const Hero = () => {
    const slideRight = (delay: number) => {
        return {
            hidden: {
                opacity: 0,
                x: 100,
            },
            show: {
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.5,
                    delay: delay,
                    ease: easeInOut,
                }
            },
            exit: {
                opacity: 0,
                x: -50,
                transition: {
                    duration: 0.2,
                    ease: easeInOut,
                }
            }
        }
    }
    const heroData = [
        {
            id: 1,
            img: fanta1,
            title: 'Orange Fanta',
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptates accusamus voluptatibus velit numquam necessitatibus aspernatur',
            price: '$60',
            discountPrice: '$100',
            modal: 'Orange',
            bgColor: '#cf4f00',
        },
        {
            id: 2,
            img: fanta2,
            title: 'Cola Zero',
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptates accusamus voluptatibus velit numquam necessitatibus aspernatur',
            price: '$60',
            discountPrice: '$100',
            modal: 'Zero',
            bgColor: '#727272',
        },
        {
            id: 3,
            img: fanta3,
            title: 'Coca Cola',
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptates accusamus voluptatibus velit numquam necessitatibus aspernatur',
            price: '$100',
            discountPrice: '$100',
            modal: 'Cola',
            bgColor: '#ac1a00',
        },
    ]

    const [activeData, setActiveData] = useState(heroData[0]);
    const handleActiveData = (data: any) => {
        setActiveData(data);
    }
    return (
        <>
            <motion.div
                initial={{ backgroundColor: activeData.bgColor }}
                animate={{ backgroundColor: activeData.bgColor }}
                transition={{ duration: 0.8 }}
                className='px-10 md:px-28 overflow-hidden'
            >
                <Navbar />
                <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
                    {/* data info */}
                    <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1 text-white relative z-40'>
                        <div className='space-y-5 text-center md:text-left'>
                            <AnimatePresence mode='wait'>
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: 'white',
                                        zIndex: 10,
                                        followSpeed: 0.5,
                                        scale: 10,
                                        mixBlendMode: 'difference'
                                    }}
                                >
                                    <motion.h1
                                        key={activeData.id}
                                        variants={slideRight(0.2)}
                                        initial='hidden'
                                        animate='show'
                                        exit='exit'
                                        className='text-3xl lg:text-6xl xl:text-7xl font-bold font-display text-shadow'>{activeData.title}</motion.h1>
                                </UpdateFollower>
                            </AnimatePresence>
                            <AnimatePresence mode='wait'>
                                <motion.p
                                    key={activeData.id}
                                    variants={slideRight(0.4)}
                                    initial='hidden'
                                    animate='show'
                                    exit='exit'
                                    className='text-sm leading-loose text-white/80'>{activeData.subtitle}</motion.p>
                            </AnimatePresence>
                            <AnimatePresence mode='wait'>
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: activeData.bgColor,
                                        zIndex: 99999,
                                        followSpeed: 0.5,
                                        scale: 6,
                                        rotate: 720,
                                        backgroundElement: (
                                            <div>
                                                <img src={activeData.img} alt="" />
                                            </div>
                                        )
                                    }}
                                >
                                    <motion.button
                                        key={activeData.id}
                                        variants={slideRight(0.6)}
                                        initial='hidden'
                                        animate='show'
                                        exit='exit'
                                        style={{ color: activeData.bgColor }}
                                        className='px-2 py-2 bg-white inline-block font-normal rounded-sm'>Order Now</motion.button>
                                </UpdateFollower>
                            </AnimatePresence>
                        </div>
                        {/* list separator line  */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
                            className='flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10 mt-2'>
                            <div className='w-28 bg-white h-[1px]'></div>
                            <p className='text-lg text-nowrap '>TOP RECOMMENDATIONS</p>
                            <div className='w-28 bg-white h-[1px]'></div>
                        </motion.div>
                        {/* image switcher */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}

                            className='grid grid-cols-3 gap-10'>
                            {heroData.map((data) => {
                                return (
                                    <div
                                        onClick={() => { handleActiveData(data) }}
                                        className='cursor-pointer space-y-3 hover:scale-105 transition-all duration-200'>
                                        <div className='flex justify-center'>
                                            <img src={data.img} alt="fanta" className={`w-[80px] img-shadow ${activeData.img === data.img ? 'opacity-100 scale-110' : 'opacity-50'}`} />
                                        </div>
                                        <div className='text-center !mt-6 space-y-1'>
                                            <p className='text-base line-through opacity-50'>{data.discountPrice}</p>
                                            <p className='text-xl font-bold'>{data.price}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </motion.div>
                    </div>
                    {/* hero-image  */}
                    <div className='flex flex-col justify-end items-center relative order-1 md:order-2'>
                        <AnimatePresence mode='wait'>
                            <motion.img
                                key={activeData.id}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0, ease: 'easeInOut' }}
                                exit={{ opacity: 0, x: -100, transition: { duration: 0.4 } }}
                                whileHover={{
                                    rotate:-10,
                                    scale:1.05,
                                    marginBottom:40,
                                    transition:{duration:0.3 , ease: 'easeInOut'}
                                }}
                                src={activeData.img} alt={activeData.title} className='w-[150px] md:w-[200px] xl:w-[300px] img-shadow relative z-10' />
                        </AnimatePresence>
                        <AnimatePresence>
                            <motion.div
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration:0.4, delay:0 ,ease:'easeInOut'}}
                            exit={{opacity:0 , transition:{duration:0.4,}}}
                            className='text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                {activeData.modal}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    {/* whatsapp icon  */}
                    <div className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference'>
                        <a href='#'>
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Hero
