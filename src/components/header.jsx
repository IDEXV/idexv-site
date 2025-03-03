import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="header">
        $ <span className="header-name">IDEXV</span> |{" "}
        <Link href="/">Home</Link> | <Link href="/projects">Projects</Link> |{" "}
        <Link href="/contact">Contact</Link>
      </div>
    </>
  );
}
