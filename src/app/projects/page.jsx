import Project from "@/components/project";

export const metadata = {
  title: "Projects — IDEXV",
  description: "IDEXV's projects",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="projects-list">
        <Project
          projectName={
            <a target="_blank" href="https://steamcommunity.com/sharedfiles/filedetails/?id=1966285838">
              zs_lethalsector
            </a>
          }
          projectDates="January 11, 2020"
          description="A small map for the Zombie Survival gamemode in Garry's Mod."
          technologies="Source 1, Hammer"
          roles="N/A"
        />
        <Project
          projectName={
            <a target="_blank" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2197441419">
              [ArcCW] KerkasAdditions
            </a>
          }
          projectDates="August 14, 2020"
          description="A Garry's Mod addon that adds more attachments for the ArcCW weapons base."
          technologies="Source 1, Lua, Git"
          roles="Lead Programmer"
        />
        <Project
          projectName={
            <a target="_blank" href="https://github.com/pythsource/HFactions">HFactions</a>
          }
          projectDates="February 18 — March 17, 2021"
          description="An unfinished Hearts of Iron IV modification set in the World Factions universe."
          technologies="Git, GitHub Issues, GitHub Projects"
          roles="Lead Developer, Project Manager"
        />
        <Project
          projectName={
            <a target="_blank" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2629652079">
              Half-Life Series OST
            </a>
          }
          projectDates="October 16, 2021"
          description="A small addon for Arma 3 that adds soundtracks from the Half-Life series."
          technologies="N/A"
          roles="N/A"
        />
        <Project
          projectName={<a target="_blank" href="https://pythsource.com">PythSource</a>}
          projectDates="February 22, 2024 — present"
          description="I own the domain and maintain all PythSource related web services and projects. I am also responsible for hosting the landing page."
          technologies="Docker, Grafana, SSH, Bash, Cloudflare, Git, GitLab CI/CD, Jira, etc."
          roles="N/A"
        />
        <Project
          projectName={
            <a target="_blank" href="https://steamcommunity.com/sharedfiles/filedetails/?id=3243498995">
              Bound by Fate Campaign
            </a>
          }
          projectDates="May 10, 2024"
          description="A small experimental Arma 3 campaign set in the Data Point universe."
          technologies="SQF"
          roles="N/A"
        />
        <Project
          projectName={
            <a target="_blank" href="https://dpn.pythsource.com/">Daily Pulse News</a>
          }
          projectDates="August 5, 2024 — present"
          description="A website for the fictional Data Point news agency Daily Pulse News. It uses a slightly modified version of Ghost (blogging platform)."
          technologies="Ghost, React, JavaScript, NodeJS, Docker, Jira"
          roles="Frontend Developer, Lead Writer"
        />
        <Project
          projectName={
            <a target="_blank" href="https://dpw.pythsource.com/">Data Point Project Wiki</a>
          }
          projectDates="October 13, 2024 — present"
          description="The official wiki of the Data Point Project. I am responsible for editing the theme and hosting the website."
          technologies="MediaWiki, PHP, Docker, Lua, Git, Jira"
          roles="Frontend Developer, Lead Writer"
        />
        <Project
          projectName={
            <a target="_blank" href="https://git.pythsource.com/IDEXV/idexv-site">
              Personal Website
            </a>
          }
          projectDates="November 4, 2024"
          description="This website."
          technologies="React, NextJS, JavaScript, Docker, Git"
          roles="N/A"
        />
      </div>
    </>
  );
}
