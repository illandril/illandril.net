import PropTypes from 'prop-types';

import Icon from './Icon.js';
import Page from './Page.js';
import './StoryPage.scss';

const StoryLine = ({ line }) => {
    let className;
    let data;
    if (typeof line === 'string') {
        className = 'line';
        data = line;
    } else {
        className = line.type;
        data = line.data;
    }
    return <div className={className}>{data}</div>;
};

StoryLine.propTypes = {
    line: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

const StoryPage = ({ story }) => {
    return (
        <Page
            title={`${story.title}, by Joe Spandrusyszyn}`}
            subtitle={story.title}
            description={`${story.title}, by Joe Spandrusyszyn}`}
        >
            <a className="back-to-stories" href="/stories">
                <Icon name="arrow-left" /> Back to Stories
            </a>
            <div className="story">
                {story.lines.map((line, i) => (
                    <StoryLine key={i} line={line} />
                ))}
            </div>
        </Page>
    );
};

StoryPage.propTypes = {
    story: PropTypes.object.isRequired,
};

export default StoryPage;
