import PropTypes from 'prop-types';

import Icon from './Icon';

import './PhotoLinks.scss';

const PhotoLinks = ({ children }) => {
    return <div className="photo-links">{children}</div>;
};

PhotoLinks.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PhotoLinks;

export const PhotoLink = ({ href, imgSrc, title }) => {
    const isExternal = href.startsWith('http');
    const nameID = title.toLowerCase().replaceAll(/[^a-z]/g, '') + '-name';
    let target;
    let rel;
    if (isExternal) {
        target = '_blank';
        rel = 'noopener noreferrer';
    } else {
        target = undefined;
        rel = undefined;
    }
    return (
        <a href={href} target={target} rel={rel}>
            <img src={imgSrc} alt="" aria-labelledby={nameID} width={240} height={240} />
            <div>
                <div id={nameID}>
                    {title}
                    {isExternal && <Icon name="external-link" />}
                </div>
            </div>
        </a>
    );
};

PhotoLink.propTypes = {
    href: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
