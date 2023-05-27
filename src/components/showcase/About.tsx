import React from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Hello!</h1>
            <h3>I'm John Kearney</h3>
            <br />
            <div className="text-block">
                <p>
                I’m a multidisciplinary musician and computer science student at Appalachian State University in North Carolina.
                </p>
                <br />
                <p>
                    My music work revolves largely around production, songwriting and engineering for artists in a variety of genres,
                    spanning bedroom pop, drum and bass and southern trap. My production is influenced by more than a decade of formal
                    training playing classical and jazz piano and percussion.
                </p>
                <br />
                <p>
                My computer science projects span web3, financial analysis, penetration testing, web design and development,
                systems architecture, automated marketing tools, Virtual Studio Technology (VST) applications and more.
                </p>
                <br />
                <p>
                    Thanks for checking out my stuff.
                     {/* Contact me{' '}
                    <Link to="/contact">here</Link>! */}
                </p>
            </div>
            {/* <ResumeDownload /> */}
        </div>
    );
};


export default About;
