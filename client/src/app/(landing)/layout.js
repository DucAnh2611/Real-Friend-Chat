export default async function LandingLayout({children, dashnav, auth}) {
    return (
        <main>
            {dashnav}
            {children}
        </main>
    )
}