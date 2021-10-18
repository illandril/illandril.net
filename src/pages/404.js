import Page from '../components/Page.js';

import './404.scss';

const NotFoundPage = () => {
    return (
        <Page title="Page Not Found" description="Page Not Found">
            <div className="title404">Oops!</div>
            <div className="body404">
                The page you are looking for doesn&apos;t seem to exist!
                <br />
                <a href="/">Try starting from Joe Spandrusyszyn&apos;s portfolio homepage.</a>
            </div>
        </Page>
    );
};

export default NotFoundPage;
