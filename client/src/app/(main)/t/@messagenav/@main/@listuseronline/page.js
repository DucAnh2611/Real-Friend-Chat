"use client";

import CardUserOnline from "@/components/CardUserOnline";
import { faAngleLeft, faAngleRight, faMessage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Suspense, useEffect, useState } from "react";
import LoadingUserOnline from "./loading";

const fetchListUserOnline = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return ([
        {
            name: "ducanh",
            image: 'https://media.istockphoto.com/id/1311350206/photo/gamer-room.jpg?s=612x612&w=0&k=20&c=XqBOGmwkP3E_D4yBvqC2yN6-yg6NyidmPRHnqFG0Ncs='
        },
        {
            name: "ducanh",
            image: 'https://media.istockphoto.com/id/1311350206/photo/gamer-room.jpg?s=612x612&w=0&k=20&c=XqBOGmwkP3E_D4yBvqC2yN6-yg6NyidmPRHnqFG0Ncs='
        },
        {
            name: "ducanh",
            image: 'https://media.istockphoto.com/id/1311350206/photo/gamer-room.jpg?s=612x612&w=0&k=20&c=XqBOGmwkP3E_D4yBvqC2yN6-yg6NyidmPRHnqFG0Ncs='
        },
        {
            name: "ducanh",
            image: 'https://media.istockphoto.com/id/1311350206/photo/gamer-room.jpg?s=612x612&w=0&k=20&c=XqBOGmwkP3E_D4yBvqC2yN6-yg6NyidmPRHnqFG0Ncs='
        },
        {
            name: "ducanh",
            image: 'https://media.istockphoto.com/id/1311350206/photo/gamer-room.jpg?s=612x612&w=0&k=20&c=XqBOGmwkP3E_D4yBvqC2yN6-yg6NyidmPRHnqFG0Ncs='
        },
    ]);
}

export default async function ListUserOnlinePage() {

    const listUserOnline = await fetchListUserOnline();

    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - (75 + 8);
    };

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + (75 + 8);
    };

    return (
    <div className="h-fit w-full">
        <Suspense fallback={<LoadingUserOnline/>}>
            {listUserOnline
            ? (<div className="flex items-center justify-between gap-3">
                <button 
                onClick={slideLeft}
                className="basis-10 aspect-square bg-purple-400 rounded-md text-purple-500 hover:bg-purple-950 active:scale-95 active:bg-purple-400">
                    <FontAwesomeIcon icon={faAngleLeft}/>
                </button>

                <div id="slider" className="flex flex-grow box-border h-fit overflow-hidden gap-0 scroll-smooth">
                    {listUserOnline.map((e, id) => (
                        <CardUserOnline 
                        key={id} 
                        info={e}/>
                    ))}                        
                </div>

                <button 
                onClick={slideRight}
                className="basis-10 aspect-square bg-purple-400 rounded-md text-purple-500 hover:bg-purple-950 active:scale-95 active:bg-purple-400">
                    <FontAwesomeIcon icon={faAngleRight}/>
                </button>
            </div>) 
            : (<div className="h-[80px] w-full flex items-center justify-center rounded-xl bg-purple-400 ">
                <p className="text-base text-purple-500">No one is Online</p>
            </div>)}              
        </Suspense>
                
    </div>)
}