'use client';

import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SignupPage() {

    return (
    <div className="w-[380px]">
        <button className=" bg-blue-500 w-full h-12 rounded-lg flex gap-3 items-center justify-center box-border text-blue-100 hover:bg-blue-950 ">
            <FontAwesomeIcon icon={faGoogle} />
            <p className=" text-[15px] font-bold">Signup with Google</p>
        </button>
        
        <button className=" bg-grey-500 w-full h-12 mt-3 rounded-lg flex gap-3 items-center justify-center box-border text-grey-100 hover:bg-grey-400">
            <FontAwesomeIcon icon={faGithub} />
            <p className=" text-[15px] font-bold">Signup with Gitihub</p>
        </button>
    </div>
    )
}