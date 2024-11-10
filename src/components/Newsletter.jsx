import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

export default function Newsletter() {
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl bg-neutralSilver mx-auto py-12'>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}

                className='flex flex-col items-center'>
                <h1 className='text-5xl font-semibold text-neutralDGray text-center w-1/2 leading-snug mb-8'>Pellentesque suscipit fringilla libero eu.</h1>
                <a href="/">
                    <button className='flex gap-x-4 items-baseline justify-center cursor-pointer btn-primary'>
                        <h3 className=' text-white font-semibold'>Get a Demo</h3>
                        <i className="fa-solid fa-arrow-right text-white"></i>
                    </button>
                </a>
            </motion.div>
        </div>
    )
}
