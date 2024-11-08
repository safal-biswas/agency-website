import React from 'react'

export default function Newsletter() {
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl bg-neutralSilver mx-auto py-12'>
            <div className='flex flex-col items-center'>
                <h1 className='text-5xl font-semibold text-neutralDGray text-center w-1/2 leading-snug mb-8'>Pellentesque suscipit fringilla libero eu.</h1>
                <a href="/">
                    <button className='flex gap-x-4 items-baseline justify-center cursor-pointer btn-primary'>
                        <h3 className=' text-white font-semibold'>Get a Demo</h3>
                        <i className="fa-solid fa-arrow-right text-white"></i>
                    </button>
                </a>
            </div>
        </div>
    )
}
