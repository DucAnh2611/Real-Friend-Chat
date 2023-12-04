import { faBellSlash, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function CardGroup({info, ...props}) {

    let list = info.seen.length > 2 ? info.seen.slice(0, 2) : info.seen;

    return (
        <Link href={`/t/${info.id}`} 
        className={`w-full h-fit box-border p-3 rounded-xl flex items-center ${props.isSelect ? "bg-blue-400" : "bg-transparent"} hover:bg-green-400 bg-transparent cursor-pointer gap-2 group/gr`}
        {...props}>
            <div className="w-14 h-14 rounded-max overflow-hidden box-border p-1 border-2 border-green-500">
                <img className="w-full h-full rounded-max overflow-hidden object-cover" alt="group img" src={info.avatar} />
            </div>
            <div className="grow block">

                <div className="w-full flex items-center h-5 gap-1">
                    <p className="grow overflow-ellipsis text-white text-base font-medium">{info.name}</p>

                    { info.notify !== 0 && 
                    <FontAwesomeIcon 
                    className="w-4 flex justify-center items-center text-green-500 aspect-square rounded-max" icon={faBellSlash} />}
                    { info.unread !== 0 && 
                    <p className="h-6 w-6 flex justify-center items-center text-[11px] bg-orange-400 text-orange-500 aspect-square rounded-max">{info.unread}</p>
                    }
                </div>

                <div className="w-full flex items-center h-5 gap-2 mt-2">
                    <p className="grow overflow-ellipsis text-grey-200 text-sm font-medium">{info.state}</p>
                    {list.length !== 0 ? (
                        <div className="w-fit flex justify-end h-fit bg-transparent relative gap-[1px]">
                        {list.map(e => (
                            <div className={`group/{user} flex shrink basis-5 w-5 aspect-square rounded-max relative`}>
                                <img alt="user seen" src={e.avatar} className="w-full h-full overflow-hidden rounded-max object-cover"/>
                                <p className="hidden text-sm w-fit h-auto p-2 pl-3 pr-3 whitespace-nowrap absolute -left-1 bg-purple-400 bg-opacity-80 backdrop-blur-sm text-purple-500 rounded-lg top-1/2 -translate-x-full -translate-y-1/2 group-hover/{user}:block z-10">{e.nickname} {new Date(e.seen_at).toLocaleString()}</p>
                            </div>
                        ))}
                        {info.seen.length > 2 && (
                            <div className="shrink basis-5 w-5 aspect-square bg-blue-950 bg-opacity-90 backdrop-blur-sm rounded-max grid place-items-center">
                                <p className="text-[9px]">{`+${info.seen.length - 2 }`}</p>
                            </div>
                        )}
                        </div>                        
                    ) 
                    : (<div className={`group/{user} flex shrink basis-3 w-3 aspect-square rounded-max relative`}>
                        <FontAwesomeIcon icon={faCircleCheck} className="w-full h-full overflow-hidden rounded-max text-green-500" />
                    </div>)}

                </div>

            </div>

        </Link>
    )
}