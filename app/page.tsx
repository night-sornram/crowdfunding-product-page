'use client'
import Image from "next/image";
import Link from 'next/link'
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import { useState } from "react";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};


export default function Home({ searchParams }: SearchParamProps) {
  const show = searchParams?.show;
  const [bookmark,setBookmark] = useState(false);

  return (
    <div className={ show ? "overflow-y-hidden relative flex  flex-col bg-mobile md:bg-desktop bg-contain bg-top bg-no-repeat w-full h-screen" : " overflow-y-auto relative flex  flex-col bg-mobile md:bg-desktop bg-contain bg-top bg-no-repeat w-full h-screen"}>
      
      {show && (
      <Modal />)}
      <Header/>
      <div className=" relative flex flex-col mt-20 md:mt-28 lg:mt-40 xl:mt-60 items-center space-y-10 pb-40">
        <div className=" w-full absolute top-2 left-0 flex justify-center">
          <Image
          src={"/images/logo-mastercraft.svg"}
          width={56}
          height={56}
          alt="mastercraft"/>
        </div>
        <div className="  w-11/12 md:w-3/4 lg:w-3/5 xl:w-1/2 bg-white rounded-xl shadow space-y-7 pt-16 pb-10 px-5 md:px-10">
          <div className=" text-center font-bold text-3xl ">
            Mastercraft Bamboo Monitor Riser
          </div>
          <div className=" text-gray-500 text-center">
            A beautiful & handcrafted monitor stand to reduce neck and eye strain.
          </div>
          <div className=" w-full flex flex-row space-x-3 min-[410px]:space-x-5 justify-between">
            <Link href="/?show=true"  className=" text-center w-full min-[410px]:text-base text-xs md:w-auto bg-teal-500 hover:bg-teal-700 px-10 py-5 font-medium text-white rounded-full">
              Back This Project
            </Link>
            <button onClick={()=>setBookmark(!bookmark)} className={ !bookmark ?"bg-gray-100 relative w-16 md:w-52 px-8 md:px-10 py-5 font-medium text-end rounded-full" : " bg-teal-50 relative w-16 md:w-52 px-8 md:px-10 py-5 font-medium text-end rounded-full"}>
              <div className=" h-full  absolute top-0 left-0">
                <Image
                src={!bookmark ? "/images/icon-bookmark.svg" : "/images/icon-bookmark2.svg"}
                width={56}
                height={56}
                className=" bg-cover h-full w-16 md:w-full"
                alt="bookmark"/>
              </div>
              <div className={!bookmark ? " hidden md:flex text-neutral-500 absolute top-0 right-0 h-full w-4/5 items-center justify-center " :  "hidden md:flex text-teal-500 absolute top-0 right-0 h-full w-4/5 items-center justify-center "}>
                { !bookmark ? "Bookmark" : "Bookmarked"}
              </div>
            </button>
          </div>
        </div>
        <div className="  w-11/12 md:w-3/4 lg:w-3/5 xl:w-1/2 bg-white  flex flex-col p-10 space-y-10 rounded-xl shadow">
          <div className=" flex flex-col md:flex-row space-y-7 md:space-y-0 justify-around items-center">
            <div className=" flex flex-col space-y-2 md:pr-20 pb-10 md:pb-0 border-b md:border-b-0 border-gray-300 md:border-r text-center md:text-start">
              <div className="  text-3xl font-bold ">
                $89,914
              </div>
              <div className=" text-gray-500">
                of $100,000 backed
              </div>
            </div>
            <div className=" flex flex-col space-y-2 md:pr-20 pb-10 md:pb-0 border-b md:border-b-0 border-gray-300 md:border-r text-center md:text-start">
              <div className=" text-3xl font-bold">
                5,007
              </div>
              <div className=" text-gray-500">
               total backers
              </div>
            </div>
            <div className=" flex flex-col space-y-2 text-center md:text-start">
              <div className=" text-3xl font-bold">
                56
              </div>
              <div className=" text-gray-500">
                days left
              </div>
            </div>
          </div>
          <div className=" w-full h-3 bg-gray-50 rounded-full relative">
            <div className=" absolute top-0 left-0 h-3 w-[89%] bg-teal-500 rounded-full">

            </div>
          </div>
        </div>
        <div className=" w-11/12 md:w-3/4 lg:w-3/5 xl:w-1/2 bg-white  flex flex-col p-8 md:p-10 space-y-10 rounded-xl shadow">
          <div className=" font-semibold text-lg">
            About this project
          </div>
          <div className=" text-gray-500 text-xs min-[425px]:text-base">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand. 
          </div>
          <div className=" text-gray-500 text-xs min-[425px]:text-base">
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand. 
          </div>
          <div className=" flex flex-col space-y-5">
            <div className=" flex flex-col px-7 md:px-10 py-7 space-y-7 border border-gray-300 rounded-md">
              <div className=" flex flex-col md:flex-row justify-between">
                <div className=" font-semibold text-lg">
                  Bamboo Stand
                </div>
                <div className=" text-teal-500 font-semibold">
                  Pledge $25 or more
                </div>
              </div>
              <div className=" text-gray-500 text-xs min-[425px]:text-base">
                You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list. 
              </div>
              <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between">
                <div className="flex flex-row items-center">
                  <div className=" text-3xl font-bold text-black">101</div>
                  <div className=" text-gray-500 ml-2">left</div>
                </div>
                <button className=" w-fit md:w-auto px-5 rounded-full font-medium py-3 bg-teal-500 hover:bg-teal-700 text-white">
                  Select Reward
                </button>
              </div>
            </div>
            <div className=" flex flex-col px-7 md:px-10 py-7 space-y-7 border border-gray-300 rounded-md">
              <div className=" flex flex-col md:flex-row justify-between">
                <div className=" font-semibold text-lg">
                  Black Edition Stand
                </div>
                <div className=" text-teal-500 font-semibold">
                  Pledge $75 or more
                </div>
              </div>
              <div className=" text-gray-500 text-xs min-[425px]:text-base">
                You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included. 
              </div>
              <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between">
                <div className="flex flex-row items-center">
                  <div className=" text-3xl font-bold text-black">64</div>
                  <div className=" text-gray-500 ml-2">left</div>
                </div>
                <button className=" w-fit md:w-auto px-5 rounded-full font-medium py-3 bg-teal-500 hover:bg-teal-700 text-white">
                  Select Reward
                </button>
              </div>
            </div>
            <div className=" flex flex-col px-7 md:px-10 py-7 space-y-7 border border-gray-300 rounded-md">
              <div className=" flex flex-col md:flex-row justify-between">
                <div className=" font-semibold text-lg text-zinc-500">
                  Mahogany Special Stand
                </div>
                <div className=" text-[#90d5cd] font-semibold">
                  Pledge $200 or more
                </div>
              </div>
              <div className=" text-gray-400 text-xs min-[425px]:text-base">
                You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.
              </div>
              <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between">
                <div className="flex flex-row items-center">
                  <div className=" text-3xl font-bold text-zinc-500">0</div>
                  <div className=" text-gray-400 ml-2">left</div>
                </div>
                <button disabled className=" w-fit md:w-auto px-5 rounded-full font-medium py-3 bg-zinc-300 text-white">
                  Out of stock
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
