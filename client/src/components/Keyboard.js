import ButtonWithTooltip from "./ButtonWithToolTip";
import { faMicrophone, faPaperPlane, faPaperclip } from "@fortawesome/free-solid-svg-icons";


export default function Keyboard(props) {
    return (
        <div {...props} className="flex w-full h-fit p-1 items-center bg-transparent gap-5">
            <div className={`h-10 w-10 rounded-max overflow-hidden aspect-square box-border border-2`}>
                <img className="h-full w-full object-cover rounded-max overflow-hidden" 
                alt="user image" src={"https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg"} />
            </div>

            <div className={`flex grow items-center box-border p-2 pl-3 pr-3 bg-${props.theme.keyboardBackground} border-2 rounded-xl border-${props.theme.keyboardBorder} gap-2`}>
                <ButtonWithTooltip icon={faPaperclip} />
                <input
                className="p-2 grow outline-0 bg-transparent text-base text-grey-100 placeholder:text-grey-200"
                placeholder="Type something..." type="text"/>
                <ButtonWithTooltip icon={faMicrophone} />
                <span className="h-5 w-fit border-r-2 border-r-grey-400"/>
                <ButtonWithTooltip icon={faPaperPlane} iconColor={props.theme.keyboardBorder} />
            </div>
        </div>
    )
}