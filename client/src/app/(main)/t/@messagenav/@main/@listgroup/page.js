"use client";

import { Suspense, useEffect } from "react";
import LoadingListGroup from "./loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import CardGroup from "@/components/CardGroup";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroups } from "@/lib/redux/slices/groupsSlice/thunk";

export default function ListGroupPage() {
    const list = useSelector(state => state.groups.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGroups());
    }, []);

    return (
        <div className="grow w-full flex flex-col overflow-hidden mt-5">
            <div className="h-fit w-full block">

                <div className="h-fit flex items-center justify-between gap-3">
                    <p className="text-2xl font-bold tracking-wide">Messages</p>
                    <p className="grow h-fit text-left text-green-500 text-base">{list.reduce((acc, curr) => acc + curr.unread ,0)} New</p>
                    <button className="h-10 w-10 grid place-items-center aspect-square rounded-max bg-purple-400 text-purple-500 hover:bg-purple-950">
                        <FontAwesomeIcon icon={faPenToSquare}/>
                    </button>
                </div>

                <div className="h-t w-full mt-5 mb-5 pl-4 pr-4 box-border bg-black rounded-xl flex gap-3 items-center hover:bg-neutral-900">
                    <input
                    className="pt-4 pb-4 grow outline-0 bg-transparent text-base text-grey-100 placeholder:text-grey-200"
                    placeholder="Search..." type="text"/>

                    <button className="w-9 h-9 grid place-items-center rounded-max hover:bg-purple-400 text-grey-100">
                        <FontAwesomeIcon className="h-4" icon={faSearch}/>    
                    </button>
                    
                </div>

            </div>

            <div className="grow overflow-y-auto overflow-x-visible flex items-center justify-center">
                <Suspense fallback={<LoadingListGroup/>}> 
                    {list.length !== 0 
                    ? (<>
                    {list.map(e => (<CardGroup key={e.id} info={e} />))}
                    </>)
                    : (<><p>Find someone to chat</p></>)}
                </Suspense>
            </div>
                        
        </div>
    )
}