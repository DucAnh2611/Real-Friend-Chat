'use client';

import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginPage() {



    return (
        <div className="w-[380px]">
            <div className="flex flex-col gap-2 h-fit w-full">
                <label htmlFor="username" className=" text-sm font-normal text-grey-100">Username</label>
                <input type="text" id="username" max={50} min={1}
                className="h-fit w-full rounded-xl box-border p-4 pt-3 pb-3 text-base border border-grey-400 bg-grey-500 text-white outline-none focus:outline-0 
                focus:border-grey-200"
                />
            </div>
            
            <div className="flex flex-col gap-2 h-fit w-full mt-3">
                <label htmlFor="username" className=" text-sm font-normal text-grey-100">Password</label>
                <input type="password" id="username"
                className="h-fit w-full rounded-xl box-border p-4 pt-3 pb-3 text-base border border-grey-400 bg-grey-500 text-white outline-none focus:outline-none 
                focus:border-grey-200"/>
            </div>

            <button className=" bg-green-400 w-full h-12 mt-6 rounded-lg flex gap-3 items-center justify-center box-border hover:bg-green-950">
                <p className=" text-[15px] font-bold text-green-600">Confirm</p>
            </button>

            <p className="w-full text-center pt-5 pb-5 text-sm text-grey-200">Or</p>

            <button className=" bg-blue-500 w-full h-12 rounded-lg flex gap-3 items-center justify-center box-border text-blue-100 hover:bg-blue-950 ">
                <FontAwesomeIcon icon={faGoogle} />
                <p className=" text-[15px] font-bold">Login with Google</p>
            </button>
            
            <button className=" bg-grey-500 w-full h-12 mt-3 rounded-lg flex gap-3 items-center justify-center box-border text-grey-100 hover:bg-grey-400">
                <FontAwesomeIcon icon={faGithub} />
                <p className=" text-[15px] font-bold">Login with Gitihub</p>
            </button>
        </div>
    )
}