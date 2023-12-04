export const metadata = {
    title: "Messages - Friendly Chat"
}

export default function MessageNavLayout({category, main}) {
    return (
    <nav className="relative w-fit h-full bg-black flex">
        {category}
        {main}
    </nav>
    )
}