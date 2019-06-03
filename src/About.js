import React from 'react';
import me from './image/me.JPG';

function About() {
    return(
        <div className="about">
            <h3>About me</h3>
            <img src={me} alt="" />
            <p>I'm <strong>Tokunaga</strong>, a Chinese student.<br />Learning Front-End knowleage.</p>
        </div>
    );
};

export default About;