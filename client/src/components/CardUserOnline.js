export default function CardUserOnline({info, ...props}) {
    return (
        <div {...props} className="grow-0 shrink-0 basis-[75px] w-[75px] h-full p-2 overflow-hidden cursor-pointer rounded-xl hover:bg-purple-400 active:scale-95">
            <div
            className="h-auto w-full rounded-max aspect-square box-border p-1 border-[2px] border-purple-500 relative">
                <img className="h-full w-full object-cover rounded-max overflow-hidden" 
                alt="user image" src={info.image} />
                <span className="absolute h-auto w-auto p-[5px] rounded-max border-4 border-grey-500 bg-green-500 bottom-0 right-0"></span>
            </div>
            <p className="w-full h-auto whitespace-nowrap overflow-hidden mt-1 text-sm text-center">{info.name}</p>
        </div>

    )
}