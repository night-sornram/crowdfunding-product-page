"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header(){
    const [menu,setMenu] = useState(false)
    return(
    <div className=" relative py-10 px-5 md:px-10 lg:px-20 xl:px-44 w-full flex flex-row justify-between" >
        <div>
            <Image
            src={"/images/logo.svg"}
            width={128}
            height={20}
            alt="logo"/>
        </div>
        <div className=" hidden md:flex flex-row space-x-7">
            <Link  href={"/"} className=" font-semibold text-white">
                About
            </Link>
            <Link href={"/"} className=" font-semibold text-white">
                Discover
            </Link>
            <Link href={"/"} className=" font-semibold text-white">
                Get Start 
            </Link>
        </div>
        <button onClick={()=>setMenu(!menu)} className=" z-50 flex md:hidden">
            <Image
            src= { !menu ? "/images/icon-hamburger.svg" : "/images/icon-close-menu.svg"}
            width={16}
            height={15}
            alt="menu"/>
        </button>
        { menu && (
            <div className=" flex md:hidden fixed top-0 inset-0 overflow-y-hidden pt-20 z-20 h-screen bg-opacity-30 bg-black justify-center  w-full ">
                <div className=" w-10/12 flex flex-col space-y-5 bg-white p-7 h-fit rounded-md">
                    <Link  onClick={()=>setMenu(false)}  href={"/"} className=" font-medium">
                        About
                    </Link>
                    <Link  onClick={()=>setMenu(false)}  href={"/"} className=" font-medium">
                        Discover
                    </Link>
                    <Link  onClick={()=>setMenu(false)}  href={"/"} className=" font-medium">
                        Get Started
                    </Link>
                </div>
            </div>
            )
        }
            
    </div>
    )
}