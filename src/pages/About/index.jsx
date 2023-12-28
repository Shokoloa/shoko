import { Helmet } from 'react-helmet';
import { Skills } from "./Skills";
import jsonData from './skills.json';

export const About = () => {
    document.getElementById('canvas').style.display = 'none';

    return (
        <section>
            <Helmet>
                <title>Shoko | About Me</title>
                <meta name="og:site_name" content="About Me" />
            </Helmet>
            <header className="returnhome">
                <a id="returnhome" draggable={false} href="/">
                    <i className="uil uil-estate"></i>
                </a>
            </header>

            <main className="about">
                <section className="skills">
                    <h1>Skills</h1>
                    <Skills data={jsonData} />
                    <div className="separator" style={{ width: '50%', marginLeft: '25%' }}></div>
                    <section className="skills-lang">
                        <article className="skill">
                            <img src={'../../src/assets/images/icons/flag_fr.png'} draggable={false} alt="" />
                            <p>French<br /><span>Native</span></p>
                        </article>
                        <article className="skill">
                            <img src={'../../src/assets/images/icons/flag_br.png'} draggable={false} alt="" />
                            <p>English<br /><span>Level B2</span></p>
                        </article>
                        <article className="skill">
                            <img src={'../../src/assets/images/icons/flag_sp.png'} draggable={false} alt="" />
                            <p>Spanish<br /><span>Beginner</span></p>
                        </article>
                    </section>
                </section>
                <section className="contact">
                    <button onClick={() => window.location.href = 'contact'}>Contact me</button>
                </section>
            </main>
        </section>
    );
};