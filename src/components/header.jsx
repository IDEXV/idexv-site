import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="header">
        $ <span className="text-blue-500">IDEXV</span> |{" "}
        <Link href="/">Home</Link> | <Link href="/projects">Projects</Link> |{" "}
        <Link href="/contact">Contact</Link> | <Link href="/cv">CV</Link>
      </div>
    </>
  );
}
