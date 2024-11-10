import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

import logo2 from '../assets/Logo2.png'
import logo3 from '../assets/Logo3.png'
import logo4 from '../assets/Logo4.png'
import logo5 from '../assets/Logo5.png'
import logo6 from '../assets/Logo6.png'
import logo7 from '../assets/Logo7.png'

import serviceLogo1 from '../assets/Service-Icon1.png'
import serviceLogo2 from '../assets/Service-Icon2.png'
import serviceLogo3 from '../assets/Service-Icon3.png'
import { MdDescription } from 'react-icons/md'

export default function Services() {

    const services = [
        { id: 1, title: "Membership Organizations", dDescription: "Our membership management software provides full automation of membership renewals and payments", image: serviceLogo1 },
        { id: 2, title: "National Associations", dDescription: "Our membership management software provides full automation of membership renewals and payments", image: serviceLogo2 },
        { id: 3, title: "Clubs And Groups", dDescription: "Our membership management software provides full automation of membership renewals and payments", image: serviceLogo3 }
    ]

    return (
        <>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='text-center my-8'>
                <h2 className='text-4xl text-neutralDGray font-semibold mb-2'>Our Clients</h2>
                <p className='text-neutralDGray mb-2'>We have been working with some Fortune 500+ clients</p>

                {/* company logos */}
                <div className='my-12 flex flex-wrap items-center justify-between gap-8 px-40'>
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                    <img src={logo6} alt="" />
                    <img src={logo7} alt="" />
                </div>
            </motion.div>

            {/* services cards */}
            <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='mt-20 md:w-3/4 sm:w-1/2 mx-auto text-center'>
                <h2 className='text-4xl text-neutralDGray font-semibold'>Manage your entire community</h2>
                <h2 className='text-4xl text-neutralDGray font-semibold mb-3'>in a single system</h2>
                <p className='text-neutralDGray mb-2'>Who is Creativeitem suitable for?</p>
            </motion.div>

            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='mt-20 md:w-3/4 sm:w-1/2 mx-auto text-center'>
                {/* cards */}
                <div className='flex items-center flex-wrap sm:gap-y-5'>
                    {
                        services.map(service =>
                            <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                                <div>
                                    <div className='bg-[#E8F5E9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl md-4'><img src={service.image} alt="" className='-ml-5' /></div>
                                    <h4 className='text-2xl font-bold text-neutralDGray mb-2 px-2'>{service.title}</h4>
                                    <p className='text-sm text-neutralGray'>{service.dDescription}</p>
                                </div>

                            </div>
                        )
                    }
                </div>
            </motion.div>
        </>
    )
}
