import Image from "next/image";

export default function CardFeature({image, title, desc}) {
    return (
        <div
        className="w-[33%] box-border border-2 border-grey-400 rounded-xl bg-[black] cursor-pointer hover:bg-grey-500 hover:border-grey-200 overflow-hidden"
        >
            {image.length !== 0 && <img 
            className="h-[250px] w-full object-cover"
            src={image}/>}
            <div className="p-7 box-border">
                <p className=" text-2xl font-bold break-words">{title}</p>
                <p className=" text-l text-grey-100 break-words">{desc}</p>
            </div>
        </div>
    )
}