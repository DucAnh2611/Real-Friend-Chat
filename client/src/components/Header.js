import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full h-fi p-56 pl-[400px] pr-[400px] flex flex-col items-center justify-center">
            <h1 className="w-full text-7xl font-black text-grey-100 text-center">Friendly Chat: Your ChitChat App</h1>
            <p className="w-full text-xl font-medium break-words text-grey-200 text-center mt-20">Connecting Hearts, One Message at a Time: Your Ultimate Companion for Warm and Welcoming Conversations on <br></br>Our Friendly Chat App - Where Every Word Feels Like a Hug!</p>
            <div className="w-fit h-fit mt-20 flex gap-5">
                <Link href={"/login"} 
                className="w-fit h-fit p-3 text-lg rounded-lg bg-white text-grey-400 font-semibold box-border grid place-items-center hover:bg-grey-100">
                    Get Started
                </Link>
                <Link href={"/docs"}
                className="w-fit h-fit p-3 text-lg rounded-lg bg-black text-white font-medium box-border grid place-items-center border border-grey-200 hover:bg-grey-500">
                    Read more
                </Link>
            </div>
        </div>
    )
}