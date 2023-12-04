import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function IconLabelInput({icon, label, toggle = false, check = true, onCheck, extraClass = "", ...props}) {

    return (
        <div {...props}
        className={`h-fit w-full box-border p-4 items-center cursor-pointer flex gap-4 hover:bg-grey-400 rounded-lg ${extraClass}`}>

            <FontAwesomeIcon className=" text-cyan-500 h-5 w-5 text-sm" icon={icon}/>

            <p className="grow overflow-hidde font-normal text-sm tracking-wide capitalize">{label}</p>

            {toggle && <div 
            onClick={onCheck}
            className={`h-6 w-12 ${check ? "bg-cyan-500" : "bg-grey-100"} rounded-2xl relative`}>
                <input type="checkbox" className=" invisible w-full h-full z-10 absolute top-0 left-0" value={check}/>
                <span className={`h-4 w-4 ${check ? "left-7" : "left-1"} rounded-max bg-white absolute top-1/2 -translate-y-1/2`}/>
            </div>}

        </div>
    )
}