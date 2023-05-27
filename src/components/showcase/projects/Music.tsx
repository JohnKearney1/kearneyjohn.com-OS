import React, { useState } from 'react';

// @ts-ignore
import carmine from '../../../assets/audio/carmine_ko.mp3';
// @ts-ignore
import roadrunner from '../../../assets/audio/roadrunner_ko.mp3';
// @ts-ignore
import ph from '../../../assets/audio/ph_ko.mp3';
// @ts-ignore
import psychedelia from '../../../assets/audio/psychedelia_ko.mp3';
// @ts-ignore
import carmineProject from '../../../assets/pictures/projects/audio/carmineProject.png';
// @ts-ignore
import aberdio from '../../../assets/audio/b_aberdio_ko.mp3';
// @ts-ignore
import jan from '../../../assets/audio/b_jan_ko.mp3';
// @ts-ignore
import aus from '../../../assets/audio/b_aus_ko.mp3';
// @ts-ignore
import kale from '../../../assets/audio/b_kale_ko.mp3';

import { MusicPlayer } from '../../general';
import { Link } from 'react-router-dom';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h1>Music Production</h1>
            <h3>Public Catalog</h3>
            <br />
            <div className="text-block">
                <p>
                    Music has been a passion of mine my entire life. 
                    I began classical piano lessons at age 5 and have 
                    been playing ever since. I started experimenting with 
                    my first drum kit when I was 10 and after dropping out
                    of lessons, continued to play both piano and various precussion 
                    thoughout highschool with the jazz band and occasional orchestral ensemble.
                </p>
                <br />
                <p>
                    I began experimenting with FL Studio in the summer of 2012 after a friend showed me the software.
                    Since then I've produced consistently but only began working professionally in 2021.                   
                </p>
                <br />
                <p>
                    Since beginning artist outreach I've produced and contributed to hundreds of songs across a variety of genres.
                    I've been fortunate to collaborate with artists such as PinkPantheress, Riovaz, YG, Millionz, Maasho, and many more.
                </p>
                <br />
                <p>
                    I seldom release my music publicly if not via a label, but I have included a few favorite projects from my catalog below.
                    My informal releases live on my <a href="https://soundcloud.com/kearneyjohn">soundcloud</a>.
                </p>
                <br />
                <img src={carmineProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 1:</b> Project file for the "Carmine" sample.
                    </sub>
                </p>
            </div>
            <h2>Samples</h2>
            <br />
            <p>
                Part of my methodology as a producer is to create samples
                for my own use and to share with others. This makes my sound highly accessible
                and helps inform the sounds of a pleothra of derivative works.
            </p>
            <br />
            <p>
                My samples are only available to my clients (for now), but I have included a few of my favorites below.
            </p>
            <br />

            <MusicPlayer
                src={carmine}
                title="Carmine (Sample)"
                subtitle="kearneyonline - 2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <MusicPlayer
                src={roadrunner}
                title="Roadrunner (Sample)"
                subtitle="kearneyonline & landers - 2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <MusicPlayer
                src={ph}
                title="PH (Sample)"
                subtitle="kearneyonline - 2021"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <MusicPlayer
                src={psychedelia}
                title="Hypnagogia (Sample)"
                subtitle="kearneyonline - 2020"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />

            <br />
            <br />
            <h2>Beats</h2>
            <br />
            <p>
                Alongside my samplemaking I also produce full solo compositions for artists. My sound and drum style varies from project to project,
                but I generally tailor very granular, ambient soundscapes. I've included some of my favorites below.
            </p>
            <br />
            <MusicPlayer
                src={aberdio}
                title="Aberdio"
                subtitle="kearneyonline - 2023"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <MusicPlayer
                src={jan}
                title="Janet"
                subtitle="kearneyonline - 2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <MusicPlayer
                src={aus}
                title="Aus"
                subtitle="kearneyonline - 2021"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <MusicPlayer
                src={kale}
                title="Kale"
                subtitle="kearneyonline - 2019"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <p>
                Want to work? Contact me for a pack {' '}
                    <Link to="/contact">here</Link>!
            </p>
        </div>
    );
};

// const styles: StyleSheetCSS = {};

export default MusicProjects;
