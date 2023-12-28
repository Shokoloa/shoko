import { Helmet } from 'react-helmet';

export const Home = () => {
  document.getElementById('canvas').style.display = 'flex';

  return (
    <section>
      <Helmet>
        <title>Shoko</title>
        <meta name="og:site_name" content="" />
      </Helmet>
      <main className="index">
        <nav className="customnav">
          <ul>
            <li className="navlink" onClick={() => window.location.href = 'projects'}>Projects</li>
            <li className="navlink" onClick={() => window.location.href = 'about'}>About</li>
          </ul>
        </nav>
        <article className="hero-wrapper">
          <article className="hero">
            <h1 className="animatedtitle">Shokoloa</h1>
            <h1 className="animatedtitle">Shokoloa</h1>

            <div className="container">
              <div className="box">
                <div className="title">
                  <span className="block"></span>
                  <h2>Web Developer</h2>
                </div>
              </div>
            </div>

            <section className="socials">
              <div className="social-link">
                <a onClick={() => window.open('https://github.com/shokoloa')}><i className="uil uil-github-alt"></i></a>
              </div>
              <div className="social-link">
                <a onClick={() => window.open('https://www.instagram.com/shokoloa')}><i className="fa-brands fa-instagram"></i></a>
              </div>
            </section>
          </article>
        </article>
      </main>
    </section>
  );
};
