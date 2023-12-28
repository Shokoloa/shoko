import React from 'react';

export const Skills = ({ data }) => {
    if (!Array.isArray(data)) {
        console.error("Erreur: 'data' n'est pas un tableau.");
        return null;
    }

    return (
        <div className="skills-list">
            {data.map((skill, index) => (
                <article className="skill" key={index}>
                    <img src={`../../src/assets/images/icons/${skill.img}.png`} draggable={false} alt="" />
                    <p>{skill.name}<br /><span>{skill.level}</span></p>
                </article>
            ))}
        </div>
    );
};