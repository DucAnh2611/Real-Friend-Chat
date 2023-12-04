"use client";

import ButtonWithTooltip from "@/components/ButtonWithToolTip";
import GroupMessage from "@/components/GroupMessage";
import Keyboard from "@/components/Keyboard";
import { faEllipsisH, faPhoneAlt, faSearch, faVideoCamera} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { demoData, listName, theme } from "./demoData";
import GroupSetting from "@/components/GroupSetting";
import useModal from "@/utils/useModal";
import Modal from "@/components/Modal";

export default function GroupMessagePage({params}) {

    const [showSearch, toggleSearch] = useModal();
    const [openSetting, SetOpenSetting] = useState(false);

    const handleOpenSetting = () => {SetOpenSetting(prev => !prev)};

    return (
        <div className=" h-full w-full overflow-y-auto overflow-x-hidden flex relative">
            <div className="h-full grow block relative">

                <div className="h-fit box-border p-7 pt-5 pb-5 w-full absolute top-0 left-0 bg-grey-500 bg-opacity-40 backdrop-blur-[10px] flex gap-3 items-center justify-between z-[1]">
                    <div className={`w-12 h-12 rounded-max overflow-hidden box-border p-1 border-2 border-${theme.primaryColor}`}>
                        <img className={`w-full h-full rounded-max overflow-hidden object-cover bg-${theme.primaryColor}`} alt="group img" src={""} />
                    </div>
                    <div className="grow block">
                        <p className="w-full text-white font-medium text-lg tracking-wide">Group name</p>
                        <p className={`w-full text-${theme.primaryColor} italic font-medium text-xs tracking-wide mt-1`} >22 Member  1 Online</p>
                    </div>

                    <div className="w-fit flex items-center h-fit gap-2 text-xl text-grey-200">
                        <ButtonWithTooltip icon={faSearch} tooltip={"Search"} onClick={toggleSearch}/>
                        <ButtonWithTooltip icon={faPhoneAlt} tooltip={"Voice Call"}/>
                        <ButtonWithTooltip icon={faVideoCamera} tooltip={"Video Call"}/>
                        <span className="h-5 w-2 border-r-2 border-r-grey-400"></span>
                        <ButtonWithTooltip icon={faEllipsisH} tooltip={"Setting"} onClick={handleOpenSetting} 
                        iconColor={theme.primaryColor}/>
                    </div>
                </div>

                <div className={"h-full box-border p-4 flex flex-col gap-2" + ` ${theme.background}`}>
                    <div className="grow overflow-y-auto overflow-x-hidden box-border pr-4">
                        <GroupMessage list={demoData} member={listName} theme={theme}/>
                    </div>
                    <Keyboard theme={theme}/>
                </div> 

            </div>

            <GroupSetting open={openSetting} handleOpenSetting={handleOpenSetting}/>

            <Modal title={"Find Message"} isShow={showSearch} hide={toggleSearch}>
                <div className="w-[450px]">
                    this is message find
                </div>                
            </Modal>

            

        </div>
    )
}