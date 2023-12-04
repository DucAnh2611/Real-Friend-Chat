"use client";

import { faBell, faFile, faLink, faPalette, faPen, faRightFromBracket, faShapes, faSign, faSignature, faThumbTack, faUsers, faVideo } from "@fortawesome/free-solid-svg-icons";
import SectionSetting from "./SectionSetting";
import IconLabelInput from "./IconLabel";
import { useState } from "react";
import { faImage, faImages } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useModal from "@/utils/useModal";

export default function GroupSetting({open, handleOpenSetting, ...props}) {

    const [check, SetCheck] = useState(true);
    const [messagePinned, toggleMessagePinned] = useModal();
    const [groupName, toggleGroupName] = useModal();
      
    const handleOnChangeNotification = () => {
        SetCheck(prev => !prev);
    }

    return (
        <div {...props}    
        className={`${ open ? 
            "flex" : 
            "hidden"} h-full shrink-0 basis-[450px] w-[450px] overflow-hidden flex-col right-0 top-0 bg-grey-500 box-border items-center`}>

            <div className="h-fit p-7 pl-5 pr-5 box-border w-[90%] flex items-center justify-between border-b-2 border-b-grey-400">
                <p className="text-lg font-medium">Group info</p>
            </div>

            <div className="grow w-full flex flex-col p-7 overflow-y-auto">
                <div className={`w-full h-fit shrink-0 pt-10 pb-10 rounded-max overflow-hidden box-border p-1 flex flex-col items-center justify-center gap-3`}>
                    <img className={`w-32 h-32 rounded-max overflow-hidden object-cover bg-blue-300`} alt="group img" src={""} />
                    <p className="w-fit max-w-[60%] break-words whitespace-nowrap text-lg font-medium">Group name</p>
                </div>

                <SectionSetting title={"Group Infomation"}>
                    <IconLabelInput icon={faBell} label={"Notification"} toggle={true} check={check} onCheck={handleOnChangeNotification}/>
                    <IconLabelInput icon={faThumbTack} label={"Pinned messages"}/>
                </SectionSetting>

                <SectionSetting title={"Customize Group"} icon={faPen}>
                    <IconLabelInput icon={faSign} label={"Group name"}/>
                    <IconLabelInput icon={faImage} label={"Group image"}/>
                    <IconLabelInput icon={faPalette} label={"Theme"}/>
                    <IconLabelInput icon={faSignature} label={"Edit nickname"}/>
                </SectionSetting>

                <SectionSetting title={"Shared Media"} icon={faShapes} extraClass="border-b">
                    <IconLabelInput icon={faImages} label={"Photos"}/>
                    <IconLabelInput icon={faVideo} label={"Videos"}/>
                    <IconLabelInput icon={faFile} label={"Files"}/>
                    <IconLabelInput icon={faLink} label={"Links"}/>
                </SectionSetting>    
                
                <IconLabelInput icon={faUsers} label={"Members"} extraClass="mt-2 mb-2"/>
            </div>

            <div className="h-fit p-2 pl-5 pr-5 box-border w-full border-t-2 border-grey-400">
                <div className="flex items-center justify-center gap-3 h-fit w-full box-border p-3 rounded-xl text-orange-600 cursor-pointer hover:bg-grey-400">
                
                    <FontAwesomeIcon className={`h-4`} icon={faRightFromBracket}/>
                    <p className="w-fit h-fit overflow-ellipsis whitespace-nowrap text-base tracking-wide font-medium capitalize">Leave and delete</p>
                </div>
            </div>

        </div>
    )
}