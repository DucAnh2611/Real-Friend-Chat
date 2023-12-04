import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ButtonWithTooltip({icon, tooltip, iconColor = "grey-100", ...props}) {
    return (
        <div 
        className="group/{func} relative w-fit h-fit"
        {...props}>
            <button className={`h-10 w-10 grid place-items-center rounded-max bg-transparent text-lg group-hover/{func}:bg-white group-hover/{func}:bg-opacity-10`} >
                <FontAwesomeIcon className={`duration-0 text-${iconColor}`} icon={icon}/>
            </button>
            {tooltip && <p className="hidden w-fit h-auto p-2 pl-3 pr-3 whitespace-nowrap absolute left-1/2 bg-purple-400 bg-opacity-90 backdrop-blur-sm text-purple-500 rounded-lg -bottom-2 -translate-x-1/2 translate-y-full text-sm group-hover/{func}:block">{tooltip}</p>
            }
        </div>
    )
}