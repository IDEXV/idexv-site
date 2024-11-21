export default function Project({
  projectName,
  projectDates,
  description,
  technologies,
  roles,
}) {
  return (
    <>
      <div className="project-container">
        <h1 className="project-name">{projectName}</h1>
        <h2 className="project-dates">{projectDates}</h2>
        <article className="project-description">{description}</article>
        <footer className="project-info">
          {roles}
          <br />
          {technologies}
        </footer>
      </div>
    </>
  );
}
