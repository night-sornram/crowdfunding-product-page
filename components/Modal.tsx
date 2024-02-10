'use client'

import { useState } from "react"
import Image from 'next/image'
import Link from "next/link"
export default function Modal( ){
  const [select,setSelect] = useState(-1)
  const [success,setSuccess] = useState(false)
  const [value,setValue] = useState(0)
  const [value2,setValue2] = useState(0)
    return(
      <div className=" z-50 overflow-y-auto w-full  fixed inset-0  flex justify-center items-center bg-black bg-opacity-30">
        {!success && (
          <div className="pt-[900px] w-full flex justify-center items-center  min-[375px]:pt-[700px] min-[425px]:pt-[500px] min-[520px]:pt-96 pb-20 md:pt-40 ">
            <div className=" mt-40 relative z-50 w-11/12 md:w-4/5 lg:w-3/5 xl:w-1/2 space-y-7 rounded-md flex flex-col p-10 bg-white">
              <Link href={"/"}  className=" absolute top-10 right-10">
                <Image
                src={"/images/icon-close-modal.svg"}
                width={15}
                height={15}
                alt="close"/>
              </Link>
              <div className=" text-xl font-semibold">
                Back this project
              </div>
              <div className=" text-gray-500">
                Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
              </div>
              <div className=" flex flex-col space-y-5">
              <div onClick={()=>setSelect(0)} className={`${select == 0 ? "border-teal-500":" border-gray-300 "} space-y-3 flex flex-col cursor-pointer group/item1 px-7 justify-start items-start md:px-5 py-7 border rounded-md`}>
                <div className=" w-full flex flex-row ">
                  <div className=" w-auto md:w-1/12">
                    <button className=" w-6 h-6 flex justify-center items-center bg-white border group-hover/item1:border-teal-500 border-gray-300 rounded-full">
                      {select == 0 &&(
                        <div className=" w-4 h-4 rounded-full bg-teal-500">
                        </div>
                      )}
                    </button>
                  </div>
                  <div className=" w-auto ml-5 md:ml-0 md:w-11/12 flex  items-center ">
                    <div className=" flex space-y-3 flex-col ">
                      <div className="group-hover/item1:text-teal-500  font-semibold m:text-xs lg:text-base">
                        Pledge with no reward
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full flex justify-end">
                  <div className=" w-12/12 md:w-11/12 text-gray-500">
                    Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email. 
                  </div>
                </div>
              </div>
              <div onClick={()=>setSelect(1)} className={`${select == 1 ? "border-teal-500":" border-gray-300 "} group/item2 flex flex-col cursor-pointer justify-start items-start  pt-7 border rounded-md`}>
                <div className=" flex flex-col px-7 space-y-3 pb-5">
                  <div className=" flex flex-row">
                    <div className=" w-auto md:w-1/12">
                      <button className=" w-6 h-6 flex justify-center items-center bg-white border group-hover/item2:border-teal-500 border-gray-300 rounded-full">
                        {select == 1 &&(
                          <div className=" w-4 h-4 rounded-full bg-teal-500">

                          </div>
                        )}
                      </button>
                    </div>
                    <div className=" w-auto md:w-11/12 ml-5 md:ml-0 flex  items-center  ">
                      <div className=" flex w-full space-y-3 flex-col ">
                        <div className=" flex w-full flex-row justify-between">
                          <div className=" flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5">
                            <div className=" group-hover/item2:text-teal-500 font-semibold m:text-xs lg:text-base">
                              Bamboo Stand 
                            </div>
                            <div className=" text-teal-500 m:text-xs lg:text-base font-semibold">
                              Pledge $25 or more
                            </div>
                          </div>
                          <div className=" hidden md:flex items-center font-bold">
                            101 <span className=" text-gray-500 ml-1 font-normal text-sm">left</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" w-full flex justify-end">
                    <div className=" w-12/12 md:w-11/12 text-gray-500">
                      You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list. 
                    </div>
                  </div>
                  <div className=" md:hidden flex items-center font-bold">
                    101 <span className=" text-gray-500 ml-1 font-normal text-sm">left</span>
                  </div>
                </div>
                {select == 1 && (
                  <div className=" border-t-2 px-7 py-5 w-full flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between items-center">
                    <div className=" text-gray-500">
                      Enter your pledge
                    </div>
                    <div className=" flex flex-row space-x-5">
                      <div className="relative  ">
                        <div className="absolute text-gray-500 inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          $
                        </div>
                        <input onChange={(e)=>{setValue(parseInt(e.currentTarget.value))}} type="number" id="input-group-1" className=" w-20 outline-none font-black border border-teal-500 text-sm rounded-full  ps-7 p-2.5" />
                      </div>
                      <button onClick={()=>value >0 ? setSuccess(true) : setSuccess(false)} className=" bg-teal-500 hover:bg-teal-700 text-white px-5 rounded-full text-xs font-semibold">Continue</button>
                    </div>
                  </div>  
                )}
                
              </div>
              <div onClick={()=>setSelect(2)} className={`${select == 2 ? "border-teal-500":" border-gray-300 "} group/item3 flex flex-col cursor-pointer justify-start items-start  pt-7 border rounded-md`}>
                <div className=" flex flex-col px-7 space-y-3 pb-5">
                  <div className=" flex flex-row">
                    <div className=" w-auto md:w-1/12">
                      <button className=" w-6 h-6 flex justify-center items-center bg-white border group-hover/item2:border-teal-500 border-gray-300 rounded-full">
                        {select == 2 &&(
                          <div className=" w-4 h-4 rounded-full bg-teal-500">

                          </div>
                        )}
                      </button>
                    </div>
                    <div className=" w-auto md:w-11/12 ml-5 md:ml-0 flex  items-center  ">
                      <div className=" flex w-full space-y-3 flex-col ">
                        <div className=" flex w-full flex-row justify-between">
                          <div className=" flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5">
                            <div className=" group-hover/item3:text-teal-500 font-semibold m:text-xs lg:text-base">
                              Black Edition Stand
                            </div>
                            <div className=" text-teal-500 m:text-xs lg:text-base font-semibold">
                              Pledge $75 or more
                            </div>
                          </div>
                          <div className=" hidden md:flex items-center font-bold">
                            64 <span className=" text-gray-500 ml-1 font-normal text-sm">left</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" w-full flex justify-end">
                    <div className=" w-12/12 md:w-11/12 text-gray-500">
                      You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included. 
                    </div>
                  </div>
                  <div className=" md:hidden flex items-center font-bold">
                    64 <span className=" text-gray-500 ml-1 font-normal text-sm">left</span>
                  </div>
                </div>
                {select == 2 && (
                  <div className=" border-t-2 px-7 py-5 w-full flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between items-center">
                    <div className=" text-gray-500">
                      Enter your pledge
                    </div>
                    <div className=" flex flex-row space-x-5">
                      <div className="relative  ">
                        <div className="absolute text-gray-500 inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          $
                        </div>
                        <input onChange={(e)=>{setValue2(parseInt(e.currentTarget.value))}}  type="number" id="input-group-1" className=" w-20 outline-none font-black border border-teal-500 text-sm rounded-full  ps-7 p-2.5" />
                      </div>
                      <button onClick={()=>value2 >0 ? setSuccess(true) : setSuccess(false)}  className=" bg-teal-500 hover:bg-teal-700 text-white px-5 rounded-full text-xs font-semibold">Continue</button>
                    </div>
                  </div>  
                )}
                
              </div>
              <div className=" border-gray-300 select-none  flex flex-col  pt-7 justify-start items-start border rounded-md">
                <div className=" flex flex-col px-7 space-y-3 pb-5">
                  <div className=" flex flex-row">
                    <div className=" w-auto md:w-1/12">
                      <button disabled className=" w-6 h-6 flex justify-center items-center bg-white border border-gray-300 rounded-full">
                        
                      </button>
                    </div>
                    <div className=" w-auto md:w-11/12 ml-5 md:ml-0 flex  items-center  ">
                      <div className=" flex w-full space-y-3 flex-col ">
                        <div className=" flex w-full flex-row justify-between">
                          <div className=" flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5">
                            <div className="text-zinc-500 font-semibold m:text-xs lg:text-base">
                              Mahogany Special Stand
                            </div>
                            <div className=" text-[#90d5cd] m:text-xs lg:text-base font-semibold">
                              Pledge $200 or more
                            </div>
                          </div>
                          <div className="text-zinc-500 hidden md:flex items-center font-bold">
                            0 <span className=" text-gray-500 ml-1 font-normal text-sm">left</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" w-full flex justify-end">
                    <div className=" w-12/12 md:w-11/12 text-gray-500">
                      You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.
                    </div>
                  </div>
                  <div className="text-zinc-500 md:hidden flex items-center font-bold">
                    0 <span className=" text-gray-500 ml-1 font-normal text-sm">left</span>
                  </div>
                </div>
              </div>
            </div>
            </div> 
          </div>
        )}
        {success && (
          <div className="relative z-50 items-center w-11/12 md:w-4/5 lg:w-3/5 xl:w-1/2 space-y-7 rounded-md flex flex-col p-10 bg-white">
            <Image
            src={"/images/icon-check.svg"}
            width={64}
            height={64}
            alt="check"/>
            <div className=" text-center font-semibold text-xl">
              Thanks for your support!
            </div>
            <div className=" text-center text-gray-500">
              Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.
            </div>
            <Link href={"/"} className=" px-7 py-3 rounded-full bg-teal-500 hover:bg-teal-700  text-white font-semibold">
              Got it!
            </Link>
          </div>
          )}

      </div>
    )
}