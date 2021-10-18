import Page from '../../components/Page.js';

import './snailspace.scss';

const SnailsPacePage = () => {
    return (
        <Page
            title="Snail's Pace"
            subtitle="Software: Snail's Pace"
            description="Snail's Pace is a 2D game that was developed in part by by Joe Spandrusyszyn for the Winter 2006-2007 2D Graphics Programming course at RIT"
        >
            <div className="image-list">
                <img
                    src="/images/software/snailspace-title.jpg"
                    alt="A screenshot showing the Snail's Pace Title Screen"
                />
                <img
                    src="/images/software/snailspace-1.jpg"
                    alt="A Snail's Pace screenshot showing the protagonist fighting spider enemies"
                />
                <img
                    src="/images/software/snailspace-2.jpg"
                    alt="A Snail's Pace screenshot showing the protagonist fighting wasp enemies"
                />
            </div>
            <div className="details">
                Snail&apos;s Pace is a 2D game that combines elements of the shooter and platformer genres. You play as
                Helix, a snail with a jetpack and a variety of weapons, fighting against a variety of enemies. It was
                developed for the Winter 2006-2007 2D Graphics Programming course at RIT by Joe Spandrusyszyn, Patrick
                Dobson, Josh Gruenberg, John Reese, and Brian Schroth. Note: At the time, Joe was Joe Andrusyszyn as
                opposed to Joe Spandrusyszyn. The <a href="https://github.com/jreese/snailspace">source code</a> is
                available on John Reese&apos;s GitHub.
            </div>
        </Page>
    );
};

export default SnailsPacePage;
