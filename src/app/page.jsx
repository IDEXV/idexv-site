import Image from "next/image";
import Link from "next/link";

export default function RootPage() {
  return (
    <>
      <div className="flex flex-row gap-3 items-center justify-center">
        <Image
          src="/avatar.png"
          width={128}
          height={128}
          alt="IDEXV's avatar"
        />
        <div className="flex gap-1 flex-col">
          <h1 className="text-xl">IDEXV, Maximkerkas123</h1>
          <h2>Formerly known as SladB, Hexer.</h2>
          <h2>
            <Link href="/projects">Projects</Link> /{" "}
            <Link href="/contact">Contact</Link>
          </h2>
        </div>
      </div>
    </>
  );
}
