import { portfolioConfig } from "./config";

export default function Works({ bg, col }) {

    function ProjectDivs({ id, name, date, type, link }) {
        return (
            <a href={link}>
                <div
                    className="project-cards"
                    id={`pc${id}`}
                    onMouseEnter={() => ChnageBGFG(id, true)}
                    onMouseLeave={() => ChnageBGFG(id, false)}
                    onTouchStart={() => ChnageBGFG(id, true)}
                    onTouchEnd={() => ChnageBGFG(id, false)}>
                    <h1 id={`project-cards-h2${id}`}>{name} <span>&nbsp; - {date}</span></h1>
                    <div className="type-of-project" id={"types" + id}><span>{type}</span></div>
                </div>
            </a>
        );
    }

    function ChnageBGFG(id, bool) {
        document.querySelector(`#pc${id}`).style.backgroundColor = bool ? col : "transparent";
        document.querySelector(`#pc${id}`).style.color = bool ? bg : col;
    }

    return (
        <div className="projects" id="pro" style={{ backgroundColor: bg, color: col }}>
            <section>
                <h1>Selected Projects &nbsp; </h1>
                <h1>Selected Projects &nbsp; </h1>
                <h1>Selected Projects &nbsp; </h1>
            </section>

            <div className="project_container">
                {
                    portfolioConfig.projects.map((element, id) => {
                        return (
                            <ProjectDivs
                                key={id}
                                id={id}
                                date={element[0]}
                                name={element[1]}
                                type={element[2]}
                                link={element[3]}
                            />
                        );
                    })}
            </div>
        </div>
    )
}