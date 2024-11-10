import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

import illustration2 from '../assets/Illustration2.png'
import statIcon1 from '../assets/statIcon1.png'
import statIcon2 from '../assets/statIcon2.png'
import statIcon3 from '../assets/statIcon3.png'
import statIcon4 from '../assets/statIcon4.png'
import illustration3 from '../assets/Illustration3.png'


export default function About() {
    return (
        <div>
            {/* about text */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-12'>
                    <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.7 }}>
                        <img src={illustration2} alt="" />
                    </motion.div>

                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.7 }}

                        className='w-3/5 mx-auto'>
                        <h1 className='title-primary mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h1>
                        <p className='md:w-3/4 text-sm text-neutralDGray mb-8 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        <button className='btn-primary'>Learn More</button>
                    </motion.div>
                </div>
            </div>

            {/* company stats */}
            <div className='bg-neutralSilver px-4 lg:px-14 py-16 max-w-screen-2xl mx-auto'>
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.7 }}

                    className='px-4 sm:px-14  md:flex  flex-row items-center justify-center'>
                    <div className='md:w-1/2'>
                        <h1 className='title-primary mb-2 md:w-2/3'>Helping a local <span className='text-brandPrimary'>business reinvent itself</span></h1>
                        <p className='md:w-3/4 text-sm text-neutralDGray mb-8'>We reached here with our hard work and dedication</p>
                    </div>

                    {/* stats */}
                    <div className='flex items-center justify-between gap-x-12'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src={statIcon1} alt="" />
                                <div>
                                    <h4 className='text-3xl text-neutralDGray font-semibold'>2,245,341</h4>
                                    <p className='text-sm text-neutralDGray'>Members</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-4'>
                                <img src={statIcon3} alt="" />
                                <div>
                                    <h4 className='text-3xl text-neutralDGray font-semibold'>828,867</h4>
                                    <p className='text-sm text-neutralDGray'>Event Bookings</p>
                                </div>
                            </div>
                        </div>


                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src={statIcon2} alt="" />
                                <div>
                                    <h4 className='text-3xl text-neutralDGray font-semibold'>46,328</h4>
                                    <p className='text-sm text-neutralDGray'>Clubs</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-4'>
                                <img src={statIcon4} alt="" />
                                <div>
                                    <h4 className='text-3xl text-neutralDGray font-semibold'>1,926,436</h4>
                                    <p className='text-sm text-neutralDGray'>Payments</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>

            {/* about text */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-12'>
                    <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.7 }}>
                        <img src={illustration3} alt="" />
                    </motion.div>

                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.7 }}
                        className='w-3/5 mx-auto'>
                        <h1 className='title-primary mb-4 md:w-4/5'>How to design your site footer like we did</h1>
                        <p className='md:w-3/4 text-sm text-neutralDGray mb-8  text-justify'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        <button className='btn-primary'>Learn More</button>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}
