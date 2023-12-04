import CardFeature from "./CardFeature"

export default function Feature() {

    let feature = [
        {
            title: "helo",
            image: "",
            desc: "hello",
        },
        {
            title: "helo",
            image: "",
            desc: "hello",
        },
        {
            title: "helo",
            image: "",
            desc: "hello",
        },
        {
            title: "helo",
            image: "",
            desc: "hello",
        }
    ]

    return (
        <div className="w-full h-fi p-20 pl-[400px] pr-[400px] flex flex-col items-center justify-center bg-gradient-to-b from-[black] to-grey-400">
            <div className="w-fit h-fit flex items-end gap-3">
                <p className="text-3xl font-semibold">What's in Friendly Chat?</p>
                <p className="text-xl text-grey-100">All thing you need to have fun with friend.</p>
            </div>
            <div className="h-fit w-full flex justify-between flex-wrap gap-[0.5%] gap-y-2 mt-24">
                {feature.map((e, id) => (
                    <CardFeature key={id} image={e.image} title={e.title} desc={e.desc}/>
                ))}
            </div>
        </div>
    )
}