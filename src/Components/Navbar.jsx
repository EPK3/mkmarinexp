import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillTwitterSquare, AiFillInstagram, AiFillFacebook, AiFillYoutube } from 'react-icons/ai'
import logo from '../img/logomain.webp'

const Navbar = () => {
  return (
    <div className='flex w-screen bg-white'>
        <div className='flex w-full content-center justify-between m-auto pt-5'>
            <img src={logo} alt='Something went wrong...' className='justify-start mx-8 my-auto w-12 cursor-pointer'/>
            <div className='inline-flex'>
                <AiFillFacebook className='text-3xl text-[#4267B2] my-auto cursor-pointer hover:opacity-80'/>
                <AiFillInstagram className='text-3xl text-[#8a3ab9] my-auto cursor-pointer hover:opacity-80'/>
                <AiFillTwitterSquare className='text-3xl text-[#00acee] my-auto cursor-pointer hover:opacity-80'/>
                <AiFillYoutube className='text-3xl text-[#FF0000] my-auto cursor-pointer hover:opacity-80'/>
                <GiHamburgerMenu className='text-2xl text-blue justify-end my-auto mr-8 ml-10 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar