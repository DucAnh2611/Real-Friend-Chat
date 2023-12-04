export const metadata = {
    title: "Group - Friendly Chat"
};

export default function GroupChatLayout({children, modal}) {
    return (
        <section className="h-full grow flex overflow-hidden">
            {modal}
            {children}
        </section>
    )
}