import React from 'react';
// @ts-ignore
import passivbot from '../../../assets/pictures/projects/software/passivbot.png';
// @ts-ignore
import TauriGrid from '../../../assets/pictures/projects/software/TauriGrid.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore

// @ts-ignore
import skew from '../../../assets/pictures/projects/software/skew.png';

// @ts-ignore
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                I've been programming as a hobbyist for years and am in school at Appalachian 
                State University studying Computer Science. I've worked on a variety of self 
                directed and collaborative open source projects since 2019. 
                Below are a few of my favorites, but you can also find source code on my <a href="https://github.com/johnkearney1">
                        GitHub
                </a>.
            </p>
            <br />
            {/* <ResumeDownload /> */}
            <br />
            <div className="text-block">
                <h2>kearneyjohn.com</h2>
                <br />
                <p>
                    kearneyjohn.com is my portfolio website, and also the
                    website you are on right now. The website is a blend of 
                    React, TypeScript, and SCSS.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Blender Scene of the 3D website.
                            The scene from Blender was baked and exported in a
                            GLTF format.
                        </sub>
                    </p>
                </div>
                <p>
                    The website structures as two separate parts, the 3D UI site, and the OS site. The
                    3D site uses Three.js to render the scene and places the 2D
                    site inside of the rendered scene using an iframe. The 2D OS site is a
                    simple react site that is hosted{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://os.kearneyjohn.com"
                    >
                        here
                    </a>{' '}
                    and works as a standalone web app. The actual rendering of
                    the 2D site is accomplished using a CSS renderer provided by
                    Three.js that transforms the html of the 2D site with 3D CSS
                    transforms to give the illusion of three dimensionality.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://kearneyjohn.com"
                        >
                            <p>
                                <b>[3D Site]</b> - kearneyjohn.com
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://os.kearneyjohn.com/"
                        >
                            <p>
                                <b>[OS Site]</b> - os.kearneyjohn.com
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/JohnKearney1/kearneyjohn.com-UI"
                        >
                            <p>
                                <b>[GitHub]</b> - 3D Site Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/JohnKearney1/kearneyjohn.com-OS"
                        >
                            <p>
                                <b>[GitHub]</b> - OS Site Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    I'm omitting a lot of details in exchange for brevity,
                    but I have posted the source code on the GitHub repositories
                    below with some additioanl usage and setup instructions for anyone who's interested.
                </p>
            </div>
            <div className="text-block">
                <h2>Passivbot</h2>
                <br />
                <p>
                    Passivbot is an open-source high frequency cryptocurrency trading application 
                    designed for use with offshore derivatives markets. It's coded in python and
                    uses a market making DCA grid strategy loosely based on the principles of 
                    <a href="https://en.wikipedia.org/wiki/Martingale_(probability_theory)"> martingale probability theory</a>.
                </p>
                <br />
                <p>
                    Due to the precision and rapidity of the intended trading strategy we encountered a variety of challenges
                    during development; server to server latency, cross margin balance management, 
                    parallel & asynchronous processing, and more. To address these challenges we developed a custom backtesting script
                    to test the bot's performance on historical data with special accomodations for VPS to market latency and 
                    a custom asynchronous websocket client to communicate with the exchange. As a result, the bot is capable of 
                    self improvement over specific datasets and can be run on any VPS provider globally without diminishing trading preformance.

                </p>
                <br />
                <img src={passivbot} alt="" />
                <p>
                    <sub>
                        <b>Figure 2:</b> Backtest data generated by passivbot of SOL/USDT trades on Binance's futures market during development.
                    </sub>
                </p>
                <br />
                <p>
                    Amongst other things, I was responsible for writing the first set of documentation, implementing Semantic versioning, and setting up contribution guidelines and community servers on Discord and Telegram.
                    The project is still in active development, boasting a community of 2200+ active members on Discord and Telegram, 600+ stars on GitHub, and more than 30 contributors. 
                    I presently maintain the largest public repository of configurations for the trading engine.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.passivbot.com/en/latest/"
                        >
                            <p>
                                <b>[Website]</b> - Passivbot.com
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/enarjord/passivbot"
                        >
                            <p>
                                <b>[GitHub]</b> - Passivbot Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/JohnKearney1/PassivBot-Configurations"
                        >
                            <p>
                                <b>[GitHub]</b> - Passivbot Configurations Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>TauriGrid</h2>
                <br />
                <p>
                TauriGrid is a template for rapidly prototyping components in a desktop environment using Tauri and React.
                It has a pre-built grid layout that allows you to quickly prototype applications
                by rendering multiple flexible components at once to test their responsiveness.
                It also comes with a pre-built Redux store that allows you to defy scopes and manage states
                 across the application with ease.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={TauriGrid} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> TauriGrid in a dev environment, showing the layout switching functionality and resizable windows.
                        </sub>
                    </p>
                </div>
                <p>
                    The template is open source and available on GitHub. 
                    It's a great way to get started learning Tauri, React, component development and other 
                    application best practices using a Typescript syntax.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/JohnKearney1/TauriGrid"
                        >
                            <p>
                                <b>[GitHub]</b> - TauriGrid Repository
                            </p>
                        </a>
                    </li>
                </ul>

                <div className="text-block">
                    <br />
                        <h2>Honorable Mentions</h2>
                        <br />
                        <p>
                            Here's a quick look at some of my other projects that were fun to build, but aren't quite polished.
                        </p>
                        <br />
                        <h3>SlowLoris (Penetration Testing)</h3>
                        <br />
                        <p>
                            A SlowLoris is a denial of service attack that effectively shutters a website by opening new connections 
                            and refusing to close old ones until a website is overloaded. 
                            Most modern websites have protection from this kind of attack,
                            but many smaller cloud based shared hosting services are not designed to hold many simultaneous
                            conenctions for extended periods of time.
                        </p>
                        <br />
                        <p>
                            I wrote a SlowLoris implementation in Python and bundled it with a suite of other penetration testing tools
                            including a network scanner, bruteforce module, network packet de-auther, 
                            and notably an email spoofing module that allows the user to send an email from any address they choose.
                            For use only in a controlled environment, of course.
                        </p>
                        <ul>
                            <li>
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://github.com/JohnKearney1/SlowLoris/"
                                >
                                    <p>
                                        <b>[GitHub]</b> - SlowLoris Suite Repository
                                    </p>
                                </a>
                            </li>
                        </ul>
                        <br />
                        <h3>Skew Compressor (VST Plugin)</h3>
                        <br />
                        <p>
                            Skew is a simple VST plugin that I designed and built in C++. 
                            The plugin is a compressor with two single channel processing convolvers and slapback delays.
                        </p>
                        <br />
                        <p>
                            Skew was my first VST and doesn't quite function as I had intended, but building it was a great learning experience. 
                            The compression is quite sensitive, but the ability to customize your reverb and delay settings independently
                            on the left and right channels of audio has led to some interesting applications in my own work; particularly
                            with granular sound design.
                        </p>
                        <br />
                        <div className="captioned-image">
                            <img src={skew} alt="" />
                            <p style={styles.caption}>
                                <sub>
                                    <b>Figure 4:</b> The plugin interface for Skew.
                                </sub>
                            </p>
                        </div>
                        
                        <br />
                        <p>
                            Because of the unpolished nature of the plugin,
                            and compatibility issues with Mac based operating systems,
                            this is one of the few projects I do not publish a repository for.
                        </p>
                        <br />
                        <h3>MineGPT (Gaming & AI)</h3>
                        <br />
                        <p>
                            MineGPT is a simple chatbot for Minecraft that responds to chat messages 
                            and custom commandsd using the ChatGPT API. It also has some additional basic functions
                            for interacting with the world and other players.
                        </p>
                        <br />
                        <p>
                            MineGPT allows a user to instantate their own account as bot, which allows for LAN or online use.
                        </p>
                        <ul>
                            <li>
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://github.com/JohnKearney1/MineGPT"
                                >
                                    <p>
                                        <b>[GitHub]</b> - MineGPT Repository
                                    </p>
                                </a>
                            </li>
                        </ul>
                        <br />
                        <h3>pITM (Marketing & Automation)</h3>
                        <br />
                        <p>
                            pITM ("Packs In The Mail") is a python email script designed specifically by audio professionals
                            for effective, informal, email marketing in the music industry.
                            This project seeks to be a no-nonsense, lightweight solution for
                            free, open source e-mail marketing with the bells and whistles, but no frills.
                        </p>
                        <br />
                        <p>
                            pITM takes in a list of emails and first names, then composes personalized emails using custom 
                            templates to reach out to every contact individually. Attachments can be uploaded with these emails,
                            enabling the rapid dissemination of samples and beats. Using CC and BCC is easy and fast, but 
                            largely ineffective in the music industry, as a feeling of inexclusivity towards material can be
                            discouraging for producers, artists, and engineers. 
                            i.e: When hundreds of audio professionals all get the same email attachments,
                            they immediately realize they were 1/800 people to recieve the same six loops or beats and don't look at them. This project circumvents that for you.
                        </p>
                        <br />
                        <p>
                            In tests with a small sample size, pITM has been shown to increase email open rates by ~30% and response rates by ~12% over 
                            traditional CC/BCC email campaigns in the production community.
                        </p>
                        <ul>
                            <li>
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://github.com/JohnKearney1/pITM"
                                >
                                    <p>
                                        <b>[GitHub]</b> - pITM Repository
                                    </p>
                                </a>
                            </li>
                        </ul>
                    <br />
                </div>
            </div>
            {/* <ResumeDownload /> */}
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
