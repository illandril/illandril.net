import PropTypes from 'prop-types';

import './Hero.scss';

const Hero = ({ src, alt, title }) => {
    return (
        <div className="hero">
            <img src={src} alt={alt} width={1288} height={224} />
            <h1>{title}</h1>
        </div>
    );
};

Hero.propTypes = {
    title: PropTypes.node.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Hero;
