import { faCircle, faMessage } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GroupDefaultPage() {
	return (
    <div className="grow flex flex-col items-center justify-center gap-24 bg-gradient-to-b from-black to-purple-400">
        <div className="h-[100px] w-fit relative scale-150">
            <FontAwesomeIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[150px] text-purple-950" icon={faCircle} />
            <FontAwesomeIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50px] text-purple-500" icon={faPaperPlane}/>
        </div>
        <p className=" text-3xl font-semibold text-white">Start chatting with your friend!</p>
    </div>
	)
}