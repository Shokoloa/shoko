import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './404.css';
import { SVG } from './SVGAnimation';

export const NotFound = () => {
  let location = useLocation();

  useEffect(() => {
    document.getElementById('canvas').style.display = 'none';
  });

  return (
    <section>
      <Helmet>
        <title>Shoko | 404 Not Found</title>
        <meta name="og:site_name" content="Oh ! It seems that this is page 404, this page is useless for you!"></meta>
      </Helmet>
      <main className="notfound">
        <div className="container">
          <div className="row">
            <div>
              <SVG />
            </div>
            <div>
              <h1>Oops ! You got lost.</h1>
              <p>The page <code>{location.pathname}</code> doesn't exist. How you got here is a mystery.</p>
              <button className="cat-return" onClick={() => window.location.href = '/'}>Return home</button>
              <button onClick={() => window.open('https://discord.gg/zADqwgP8zG')}><i class="fa-brands fa-discord"></i></button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};