import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

import blogImage1 from '../assets/blogImage1.png'
import blogImage2 from '../assets/blogImage2.png'
import blogImage3 from '../assets/blogImage2.png'

export default function Blog() {

    const blogs = [
        { id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen", image: blogImage1 },
        { id: 1, title: "What are your safeguarding responsibilities and how can you manage them?", image: blogImage2 },
        { id: 1, title: "Revamping the Membership Model with Triathlon Australia", image: blogImage3 },
    ]

    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
            <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}

                className='flex flex-col items-center mx-auto'>
                <h2 className='text-4xl text-neutralDGray font-semibold mb-4 text-center'>Caring is the new marketing</h2>
                <p className='text-sm text-neutralGray w-1/2 text-center mb-16'>Createiveitem blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </motion.div>

            {/* blogs */}
            <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}

                className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between lg:w- lg:mx-auto mb-24'>
                {
                    blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                        <img src={blog.image} alt="" className='transition-all duration-300 hover:scale-110' />
                        <div className='text-center px-2 py-8 bg-white shadow-lg rounded-md md:w-5/6 mx-auto absolute top-28 left-0 right-0'>
                            <h3 className='text-sm text-neutralGray font-semibold text-center mb-6'>{blog.title}</h3>

                            <a href="/">
                                <div className='flex gap-x-4 items-baseline justify-center cursor-pointer'>
                                    <h3 className=' text-brandPrimary font-semibold'>Read More</h3>
                                    <i className="fa-solid fa-arrow-right text-brandPrimary"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    )
                }
            </motion.div>

        </div>
    )
}


// {<div>
//     <img src={blogImage1} alt="" />
//     <div className='flex flex-col justify-center bdr'>
//         <p className='text-xl text-neutralGray font-semibold bdr'></p>
//     </div>
// </div>}