import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function SectionSetting({children, title, extraClass = "", icon = faInfoCircle, ...props}) {

    const [open, SetOpen] = useState(false);

    return (
        <section 
        className={`w-full h-fit pt-2 pb-2 border-t border-grey-400 ${extraClass}`}
        {...props}>
            <div
            className="flex items-center justify-between gap-3 h-fit w-full box-border p-3 rounded-xl cursor-pointer hover:bg-grey-400"
            onClick={(e) => SetOpen(prev => !prev)}>
                
                <FontAwesomeIcon className={`h-4`} icon={icon}/>
                <p className="grow overflow-ellipsis whitespace-nowrap text-base tracking-wide font-medium capitalize">{title}</p>
                <FontAwesomeIcon className={`h-4 ${open ? "rotate-90" : "rotate-0"}`} icon={faAngleRight}/>
            </div>
            {open && <div className="flex flex-col gap-1 box-border p-2">
                {children}
            </div>}
        </section>
    )
}