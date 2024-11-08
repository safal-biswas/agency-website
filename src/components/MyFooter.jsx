import React from 'react'
import logo from '../assets/logo.svg'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function MyFooter() {
    return (
        <div>
            <Footer container className=' bg-gray900 rounded-none'>
                <div className="w-full px-8">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <a href="/" className=' flex items-start gap-4 pt-2'>
                                <img src={logo} alt="" className='w-9' />
                                <h1 className='text-gray-200 text-2xl'>Creativeitem</h1>
                            </a>
                            {/* <Footer.Brand
                                href="/"
                                src={logo}
                                name='Creativeitem'
                            /> */}
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="about" className='text-gray-200' />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">React</Footer.Link>
                                    <Footer.Link href="#">Tailwind CSS</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" className='text-gray-200' />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">Github</Footer.Link>
                                    <Footer.Link href="#">Discord</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" className='text-gray-200' />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                                    <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright href="#" by="Creativeitem™" year={2024} />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon className='text-gray-200' href="#" icon={BsFacebook} />
                            <Footer.Icon className='text-gray-200' href="#" icon={BsInstagram} />
                            <Footer.Icon className='text-gray-200' href="#" icon={BsTwitter} />
                            <Footer.Icon className='text-gray-200' href="#" icon={BsGithub} />
                            <Footer.Icon className='text-gray-200' href="#" icon={BsDribbble} />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    )
}
