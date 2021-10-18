import Page from '../components/Page.js';
import PhotoLinks, { PhotoLink } from '../components/PhotoLinks.js';

const IndexPage = () => {
    return (
        <Page
            title="Joe Spandrusyszyn's Portfolio"
            description="A collection of some of the many things that make Joe Spandrusyszyn who he is."
        >
            <PhotoLinks>
                <PhotoLink href="/photos" imgSrc="/images/home/photos.jpg" title="Photos" />
                <PhotoLink href="/stories" imgSrc="/images/home/stories.png" title="Stories" />
                <PhotoLink href="/software" imgSrc="/images/home/software.png" title="Software" />
            </PhotoLinks>
        </Page>
    );
};

export default IndexPage;
