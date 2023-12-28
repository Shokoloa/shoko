import { Helmet } from 'react-helmet';
import { ProjectsList } from "./Projects";
import jsonData from "./projects.json";

export const Projects = () => {
    document.getElementById('canvas').style.display = 'none';

    return (
        <section>
            <Helmet>
                <title>Shoko | Projects</title>
                <meta name="og:site_name" content="Projects" />
            </Helmet>
            <header className="returnhome">
                <a id="returnhome" draggable={false} href="/">
                    <i className="uil uil-estate"></i>
                </a>
            </header>

            <main className="projects">
                <header className="projecttitle">
                    <h1>Projects</h1>
                    <p>Some of the projects are from work and some are on my own time</p>
                </header>
                <div className="separator" style={{ marginBottom: '3vh' }}></div>

                <section className="project-card-container">
                    <h1>Best Projects</h1>
                    <ProjectsList data={jsonData} classement="best" />
                    <div className="separator" style={{ width: '50%' }}></div>

                    <h1>Other Projects</h1>
                    <ProjectsList data={jsonData} classement="other" />
                </section>
            </main>
        </section>
    );
};