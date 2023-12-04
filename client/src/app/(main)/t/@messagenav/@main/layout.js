
export default function MainMessageNavLayout({listuseronline, listgroup}) {
    return (
        <section className="h-ful w-[420px] p-5 box-border bg-grey-500 flex flex-col">
            {listuseronline}
            {listgroup}
        </section>
    )
}