"use client";

import { faBoxArchive, faComment, faGear, faMoon, faSignOutAlt, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function CategoryPage() {
    
    const [selectTab, SetSelectTab] = useState(0);
    const [selectTheme, SetSelectTheme] = useState(0);
    return (
    <section className="h-full w-20 p-3 pt-10 pb-10 border-r border-r-grey-400 flex flex-col justify-between">

        <div className="h-fit w-full">
            <div className="h-auto w-full rounded-max overflow-hidden aspect-square box-border p-1 border-[3px] border-purple-100">
                <img className="h-full w-full object-cover rounded-max overflow-hidden" 
                alt="user image" src={"https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg"} />
            </div>

            <div className="flex flex-col items-center w-full h-fit gap-2 mt-10 pb-5 border-b border-b-grey-400">
                <button 
                onClick={() => SetSelectTab(0)}
                className={`group/{tab} relative w-12 aspect-square grid place-items-center rounded-xl ${ selectTab === 0 ? "bg-blue-500 text-blue-100" : "text-grey-200"} hover:bg-blue-950 active:scale-95 active:bg-blue-950`}>
                    <FontAwesomeIcon icon={faComment} className="w-5" />
                    <p className="hidden w-fit h-auto p-2 pl-3 pr-3 whitespace-nowrap absolute -right-2 bg-purple-400 bg-opacity-90 backdrop-blur-sm text-purple-500 rounded-lg top-1/2 
                    translate-x-full -translate-y-1/2 group-hover/{tab}:block">Your messages</p>
                </button>
                
                <button 
                onClick={() => SetSelectTab(1)}
                className={`group/{tab} relative w-12 aspect-square grid place-items-center rounded-xl ${ selectTab === 1 ? "bg-blue-500 text-blue-100" : "text-grey-200"} hover:bg-blue-950 active:scale-95 active:bg-blue-950`}>
                    <FontAwesomeIcon icon={faBoxArchive} className="w-5" />
                    <p className="hidden w-fit h-auto p-2 pl-3 pr-3 whitespace-nowrap absolute -right-2 bg-purple-400 bg-opacity-90 backdrop-blur-sm text-purple-500 rounded-lg top-1/2 
                    translate-x-full -translate-y-1/2 group-hover/{tab}:block">Waiting messages</p>
                </button>
            </div>

            <div className="flex flex-col items-center w-full h-fit gap-2 mt-5 pb-5 border-b border-b-grey-400">
                <button 
                onClick={() => SetSelectTab(2)}
                className={`group/{tab} relative w-12 aspect-square grid place-items-center rounded-xl ${ selectTab === 2 ? "bg-blue-500 text-blue-100" : "text-grey-200"} hover:bg-blue-950 active:scale-95 active:bg-blue-950`}>
                    <FontAwesomeIcon icon={faGear} className="w-5" />
                    <p className="hidden w-fit h-auto p-2 pl-3 pr-3 whitespace-nowrap absolute -right-2 bg-purple-400 bg-opacity-90 backdrop-blur-sm text-purple-500 rounded-lg top-1/2 
                    translate-x-full -translate-y-1/2 group-hover/{tab}:block">Setting</p>
                </button>

                <button 
                onClick={() => {}}
                className={`group/{tab} relative w-12 aspect-square grid place-items-center rounded-xl text-orange-500 hover:bg-orange-950 active:scale-95 active:bg-orange-950`}>
                    <FontAwesomeIcon icon={faSignOutAlt} className="w-5" />
                    <p className="hidden w-fit h-auto p-2 pl-3 pr-3 whitespace-nowrap absolute -right-2 bg-purple-400 text-purple-500 rounded-lg top-1/2 
                    translate-x-full -translate-y-1/2 group-hover/{tab}:block">Logout</p>
                </button>
            </div>
        </div>

        <div className="flex flex-col items-center w-full h-fit gap-1">
            <button 
            onClick={() => SetSelectTheme(0)}
            className={`group/{tab} relative w-8 aspect-square grid place-items-center rounded-xl ${ selectTheme === 0 ? "bg-blue-500" : ""} bg-opacity-90 backdrop-blur-sm text-blue-100 hover:bg-blue-950 active:scale-95 active:bg-blue-950`}>
                <FontAwesomeIcon icon={faMoon} className="w-3" />
                <p className="hidden w-fit h-auto p-2 pl-3 pr-3 whitespace-nowrap absolute -right-2 bg-purple-400 text-purple-500 rounded-lg top-1/2 
                translate-x-full -translate-y-1/2 group-hover/{tab}:block">Light</p>
            </button>

            <button 
            onClick={() => SetSelectTheme(1)}
            className={`group/{tab} relative w-8 aspect-square grid place-items-center rounded-xl ${ selectTheme === 1 ? "bg-orange-400" : ""} bg-opacity-90 backdrop-blur-sm text-orange-500 hover:bg-orange-950 active:scale-95 active:bg-orange-950`}>
                <FontAwesomeIcon icon={faSun} className="w-3" />
                <p className="hidden w-fit h-auto p-2 pl-3 pr-3 whitespace-nowrap absolute -right-2 bg-purple-400 text-purple-500 rounded-lg top-1/2 
                translate-x-full -translate-y-1/2 group-hover/{tab}:block">Dark</p>
            </button>
        </div>

    </section>
    )
}