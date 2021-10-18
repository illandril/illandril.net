import PropTypes from 'prop-types';

import './CardEntry.scss';

const CardEntry = ({ title, children }) => {
    return (
        <div className="card-entry">
            <div className="title">{title}</div>
            <div className="content">{children}</div>
        </div>
    );
};

CardEntry.propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
};

export default CardEntry;
