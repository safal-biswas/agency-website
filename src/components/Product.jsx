import React from 'react'
import tesla from '../assets/tesla.png'
import productIcon1 from '../assets/productLogo1.png'
import productIcon2 from '../assets/productLogo2.png'
import productIcon3 from '../assets/productLogo3.png'
import productIcon4 from '../assets/productLogo4.png'
import productIcon5 from '../assets/productLogo5.png'
import productIcon6 from '../assets/productLogo6.png'

export default function Product() {
    return (
        <div>
            <div className='bg-neutralSilver px-4 lg:px-32 py-8 max-w-screen-2xl mx-auto'>
                <div className='w-4/5 flex flex-col items-center mx-auto md:flex-row gap-8 md:gap-12'>
                    <div><img src={tesla} alt="" /></div>
                    <div className='md:w-3/4'>
                        <p className='text-neutralGray text-sm text-justify mb-4'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                        <h3 className='text-xl text-brandPrimary font-semibold'>Tim Smith</h3>
                        <p className='text-neutralGray text-sm mb-4'>British Dragon Boat Racing Association</p>

                        <div className='flex items-center justify-between'>
                            <div className='md:w-1/2 flex flex-wrap items-center justify-between gap-4'>
                                <img src={productIcon1} alt="" />
                                <img src={productIcon2} alt="" />
                                <img src={productIcon3} alt="" />
                                <img src={productIcon4} alt="" />
                                <img src={productIcon5} alt="" />
                                <img src={productIcon6} alt="" />
                            </div>
                            <div className='md:flex items-baseline gap-x-8'>
                                <h3 className='text-xl text-brandPrimary font-semibold'>Meet all customers</h3>
                                <i className="fa-solid fa-arrow-right text-brandPrimary"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
