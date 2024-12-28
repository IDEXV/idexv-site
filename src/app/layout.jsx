import localFont from 'next/font/local'
import '@/styles/root.scss'
import Header from '@/components/header'

const mainFont = localFont({ src: 'CascadiaMono.woff2' })

export const metadata = {
    title: "IDEXV",
    description: "IDEXV's personal website.",
    openGraph: {
        title: "IDEXV",
        description: "IDEXV's personal website.",
        url: "https://idexv.com",
        siteName: "IDEXV",
        images: [
            {
                url: 'https://idexv.com/header.png',
                width: 1270,
                height: 506
            }
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "IDEXV",
        description: "IDEXV's personal website.",
        images: ['https://idexv.com/header.png'],
    },
}

export default function RootLayout({ children }) {
    return (
        <>
            <html lang="en">
                <body className={mainFont.className}>
                    <main>
                        <Header/>
                        {children}
                    </main>
                </body>
            </html>
        </>
    )
}