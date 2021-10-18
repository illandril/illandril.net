import PropTypes from 'prop-types';

import Page from '../components/Page.js';
import shortStories from '../data/stories/shortStories';
import uoStories from '../data/stories/uo';
import wipStories from '../data/stories/wip';

import './stories.scss';

const StoryReference = ({ story }) => {
    return (
        <li>
            <a href={`/stories/${story.key}`}>
                <div className="title">{story.title}</div>
                <div className="details">{story.details}</div>
            </a>
        </li>
    );
};

StoryReference.propTypes = {
    story: PropTypes.object.isRequired,
};

const StoriesPage = () => {
    return (
        <Page
            title="Stories written by Joe Spandrusyszyn"
            subtitle="Software"
            description="Joe Spandrusyszyn has worked on RSA WebCRD, Snail's Pace, Air Sculpture Website, and more"
        >
            <div className="story-groups">
                <div className="story-group">
                    <div className="header">
                        <h1>Work in Progress</h1>
                        <div>Stories that I&apos;ve started, but have yet to finish</div>
                    </div>
                    <ul className="stories">
                        {wipStories.map((story) => (
                            <StoryReference key={story.key} story={story} />
                        ))}
                    </ul>
                </div>
                <div className="story-group">
                    <div className="header">
                        <h1>Short Stories</h1>
                        <div>Original short stories, written entirely by me</div>
                    </div>
                    <ul className="stories">
                        {shortStories.map((story) => (
                            <StoryReference key={story.key} story={story} />
                        ))}
                    </ul>
                </div>
                <div className="story-group">
                    <div className="header">
                        <h1>Ultima Online Related Short Stories</h1>
                        <div>
                            Stories about some of the characters I played in Ultima Online (Yan&apos;Chi, Arthur
                            Illandril, Zah&apos;Qim, and Gildar). Since these stories revolve around an MMORPG, they
                            often include details from the game, as well as characters from other players, so I cannot
                            take full credit for everything in these stories. I have tried to include notices for all
                            parts where other people deserve credit for character, location, and other details (but I
                            may have missed some, as these were written when I was much younger and I do not remember
                            all the details, nor did I keep detailed notes about my writing process as a child).
                        </div>
                    </div>
                    <ul className="stories">
                        {uoStories.map((story) => (
                            <StoryReference key={story.key} story={story} />
                        ))}
                    </ul>
                </div>
            </div>
        </Page>
    );
};

export default StoriesPage;
