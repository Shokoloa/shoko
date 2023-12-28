import React from 'react';

export const ProjectsList = ({ data, classement }) => (
    <div className="project-card_line">
        {data.filter(project => project.class === classement).map((project, index) => {

            return (
                <article className="project-card" key={index} onClick={() => window.open(project.url)}>
                    <span className={project.iconClass}>
                        <img src={project.root} draggable={false} alt="" />
                    </span>
                    <h4>{project.name}</h4>
                    <p className="desc">{project.desc}</p>
                    <p className="date">{project.date}</p>
                    <div className="shine"></div>
                    <div className="background">
                        <div className="tiles">
                            <div className="tile tile-1"></div>
                            <div className="tile tile-2"></div>
                            <div className="tile tile-3"></div>
                            <div className="tile tile-4"></div>
                            <div className="tile tile-5"></div>
                            <div className="tile tile-6"></div>
                            <div className="tile tile-7"></div>
                            <div className="tile tile-8"></div>
                            <div className="tile tile-9"></div>
                            <div className="tile tile-10"></div>
                        </div>
                        <div className="line line-1"></div>
                        <div className="line line-2"></div>
                        <div className="line line-3"></div>
                    </div>
                </article>
            );
        })}
    </div>
);