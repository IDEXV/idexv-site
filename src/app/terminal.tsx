"use client";

import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

export default function Terminal() {
  const [terminalData, setTerminalData] = useState<
    {
      id: string;
      line: React.ReactNode;
    }[]
  >([]);
  const [input, setInput] = useState<string>("");
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTo(0, terminalRef.current.scrollHeight);
    }
  }, [terminalData]);

  const handleCommand = (cmd: string) => {
    if (cmd.trim().toLowerCase() !== "") {
      setTerminalData((prevState) => [
        ...prevState,
        { id: uuidv4(), line: `> ${cmd}` },
      ]);
    }

    const newLine: { id: string; line: React.ReactNode } = {
      id: uuidv4(),
      line: "",
    };
    switch (cmd.trim().toLowerCase()) {
      case "about":
        newLine.line = <div className="about">
          <Image src="/avatar.png" height={128} width={128} alt="IDEXV's avatar" />
          <div className="aboutText">
            <h1>IDEXV, Maximkerkas123</h1>
            <h2>Formerly known as SladB, Hexer.</h2>
          </div>
        </div>
        break;
      case "contact":
        newLine.line = <div className="contact">
          <p>Discord: Maximkerkas123</p>
          <p>E-mail: <a href="mailto:idexv@pythsource.com">idexv@pythsource.com</a></p>
          <p>Telegram: <a href="https://t.me/IDEXV">@IDEXV</a></p>
          <p>Bluesky: <a href="https://bsky.app/profile/idexv.com">@idexv.com</a></p>
          <p>Twitter/X: <a href="https://x.com/IDEXV8907">@IDEXV8907</a></p>
          <p>GitHub: <a href="https://github.com/IDEXV">IDEXV</a> (mostly inactive)</p>
          <p>GitLab: <a href="https://git.pythsource.com/IDEXV">IDEXV</a> (<a href="https://pythsource.com">PythSource</a>)</p>
        </div>
        break;
      case "projects":
        newLine.line = <div className="projects">
          <p><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1966285838">zs_lethalsector</a> (January 11, 2020)</p>
          <p><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2197441419">[ArcCW] KerkasAdditions</a> (August 14, 2020)</p>
          <p><a href="https://github.com/pythsource/HFactions">HFactions</a> (February 18 — March 17, 2021)</p>
          <p><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2629652079">Half-Life Series OST</a> (October 16, 2021)</p>
          <p><a href="https://git.pythsource.com/IDEXV/idexv-site">Personal Website</a> (November 4, 2024)</p>
        </div>
        break;
      case "help":
        newLine.line = "fuzsh: version, help, about, projects, contact, clear";
        break;
      case "version":
        newLine.line = <div className="version">
          <p>FuzionShell 1.2 (Sundial)</p>
          <p>Build: 2025-09-20 (x86_64-pc-linux-gnu)</p>
        </div>
        break;
      case "clear":
        setTerminalData([]);
        return;
      case "":
        newLine.line = "> \n";
        break;
      default:
        newLine.line = `fuzsh: command not found: ${cmd}`;
    }

    setTerminalData((prevState) => [...prevState, newLine]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <div className="terminal" ref={terminalRef}>
      {terminalData.map((line) => {
        return (
          <div key={line.id} className="terminalLine">
            {line.line}
          </div>
        );
      })}
      <div autoFocus onKeyDown={handleKeyDown} className="terminalLine">
        <span>{">"}</span>{" "}
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
    </div>
  );
}
