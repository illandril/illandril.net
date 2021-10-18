import ArrowLeft from '@fortawesome/fontawesome-free/svgs/solid/arrow-left.svg';
import ExternalLink from '@fortawesome/fontawesome-free/svgs/solid/external-link-alt.svg';
import PropTypes from 'prop-types';

import './Icon.scss';

const icons = new Map();
icons.set('arrow-left', ArrowLeft);
icons.set('external-link', ExternalLink);

const Icon = ({ name }) => {
    const IconSVG = icons.get(name) || 'del';
    return (
        <i className="icon">
            <IconSVG />
        </i>
    );
};

Icon.propTypes = {
    name: PropTypes.oneOf([...icons.keys()]),
};

export default Icon;
