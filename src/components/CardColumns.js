import PropTypes from 'prop-types';

import './CardColumns.scss';

const CardColumns = ({ children }) => {
    return <div className="card-columns">{children}</div>;
};

CardColumns.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CardColumns;

export const CardColumn = ({ children }) => {
    return <div className="card-column">{children}</div>;
};

CardColumn.propTypes = {
    children: PropTypes.node.isRequired,
};
