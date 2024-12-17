export const metadata = {
    title: "Contact — IDEXV",
    description: "IDEXV's contacts"
}

export default function ContactPage() {
    return (
        <>
            <p>You can contact me via:</p>
            <ul>
                <li>Discord: Maximkerkas123</li>
                <li>E-mail: <a href="mailto:idexv@pythsource.com">idexv@pythsource.com</a></li>
                <li>Telegram: <a target="_blank" href="https://t.me/IDEXV">@IDEXV</a></li>
                <li>Bluesky: <a target="_blank" href="https://bsky.app/profile/idexv.com">@idexv.com</a></li>
            </ul>
            <p>My other profiles:</p>
            <ul>
                <li><a target="_blank" href="https://github.com/IDEXV">GitHub</a> (mostly inactive)</li>
                <li><a target="_blank" href="https://git.pythsource.com/IDEXV">GitLab (PythSource)</a></li>
            </ul>
        </>
    )
}