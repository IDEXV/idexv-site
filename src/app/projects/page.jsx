import Project from "@/components/project";

export const metadata = {
  title: "Projects — IDEXV",
  description: "A list of projects I've contributed to.",
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
          technologies="N/A"
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
          technologies="Lua"
          roles="Lead Developer"
        />
        <Project
          projectName={
            <span className="proj-scrapped"><a target="_blank" href="https://github.com/pythsource/HFactions">HFactions</a></span>
          }
          projectDates="February 18 — March 17, 2021"
          description="An unfinished Hearts of Iron IV modification set in the World Factions universe."
          technologies="N/A"
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
          projectName={
            <span className="proj-unpublished">DPP Development Wiki</span>
          }
          projectDates="October 13, 2024 — present"
          description="An internal Data Point Project wiki for development purposes."
          technologies="MediaWiki, PHP, Lua (Scribunto)"
          roles="Lead Developer"
        />
        <Project
          projectName={
            <a target="_blank" href="https://git.pythsource.com/IDEXV/idexv-site">
              Personal Website
            </a>
          }
          projectDates="November 4, 2024"
          description="This website."
          technologies="React, NextJS, JavaScript"
          roles="N/A"
        />
      </div>
    </>
  );
}
