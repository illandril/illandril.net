import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import './Page.scss';

const Page = ({ children, title, subtitle, description }) => {
    return (
        <>
            <Helmet
                title={title}
                htmlAttributes={{
                    lang: 'en',
                }}
            >
                <meta name="description" content={description} />
            </Helmet>
            <header>
                <nav>
                    <a href="/">Joe Spandrusyszyn</a>
                    {subtitle && <div>{subtitle}</div>}
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
};

Page.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.node,
    description: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Page;
