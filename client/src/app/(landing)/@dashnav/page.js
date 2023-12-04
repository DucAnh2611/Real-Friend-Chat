"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "./logo.svg";
import { useState } from "react";
import useModal from "@/utils/useModal";
import LoginPage from "@/components/login";
import SignupPage from "@/components/signup";
import Modal from "@/components/Modal";
import FindPage from "@/components/search";

export default function DashNav() {
    
    const [showLogin, toggleLogin] = useModal(); 
    const [showSignup, toggleSignup] = useModal();
    const [showSearch, toggleSearch] = useModal();
    const [tabSelect, SetTabSelect] = useState(0);
    const tab = [
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Docs",
            href: "/docs"
        }
    ];

    return (
        <nav className="h-[70px] w-full pl-[10%] pr-[10%] bg-black border-b border-b-grey-100 flex items-center justify-between box-border pt-[17px] pb-[17px]">
            <Link 
            onClick={() => {SetTabSelect(0)}} 
            href={"/"} 
            className="w-1/6 h-fit flex items-center gap-3">
                <Image src={logo} width={30} height={30}/>
                <p className=" text-xl font-bold tracking-wider text-white">Friendly Chat</p>
            </Link>

            <div className="w-3/6 h-fit flex items-center gap-6 text-[15px] ">
            {tab.map((e, id) => <Link key={e.name}
            className={`${tabSelect === id+1 ? " text-blue-100" : "text-grey-200"} hover:text-white`} 
            href={e.href} onClick={() => SetTabSelect(id+1)}>{e.name}</Link>)}
            </div>

            <div className="w-1/6 h-full box-border ">
                <button onClick={toggleSearch}
                className="text-left w-full h-full rounded-lg bg-grey-400 p-2 pl-3 pr-3 text-sm box-border cursor-pointer hover:bg-grey-200">
                    <p className="text-grey-100">Search someone...</p>
                    <p></p>
                </button>
            </div>

            <div className="w-1/6 h-full flex items-center justify-end gap-3">

                <button onClick={toggleLogin}
                className="w-1/3 h-full text-sm rounded-lg bg-white text-grey-400 font-bold tracking-wider box-border grid place-items-center
                hover:bg-grey-100">
                    Login</button>

                <button onClick={toggleSignup}
                className="w-1/3 h-full text-sm rounded-lg bg-black text-white font-bold tracking-wider box-border grid place-items-center border border-grey-200
                hover:bg-grey-400">
                    Signup</button>
            </div>

            <Modal title={"Login"} isShow={showLogin} hide={toggleLogin}>
                <LoginPage/>
            </Modal>

            <Modal title={"Signup"} isShow={showSignup} hide={toggleSignup}>
                <SignupPage/>
            </Modal>

            <Modal title={"Search"} isShow={showSearch} hide={toggleSearch}>
                <FindPage/>
            </Modal>
        </nav>
    )
}