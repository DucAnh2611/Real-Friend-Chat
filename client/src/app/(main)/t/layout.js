
export default function GroupLayout({children, messagenav, modal}) {
    return (
        <main className="h-[100vh] w-full overflow-hidden flex">
            {messagenav}
            {children}
        </main>
    )
}