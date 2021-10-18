import Page from '../components/Page.js';
import PhotoLinks, { PhotoLink } from '../components/PhotoLinks.js';

const SoftwarePage = () => {
    return (
        <Page
            title="Software developed by Joe Spandrusyszyn"
            subtitle="Software"
            description="Joe Spandrusyszyn has worked on RSA WebCRD, Snail's Pace, Air Sculpture Website, and more"
        >
            <PhotoLinks>
                <PhotoLink
                    href="https://www.rocsoft.com/products/webcrd/"
                    imgSrc="/images/software/webcrd.png"
                    title="RSA WebCRD"
                />
                <PhotoLink href="/software/snailspace" imgSrc="/images/software/snailspace.jpg" title="Snail's Pace" />
                <PhotoLink
                    href="https://www.illandril.net/software/airsculpture.html"
                    imgSrc="/images/software/airsculpture.png"
                    title="Air Sculpture Website"
                />
                <PhotoLink
                    href="https://github.com/illandril"
                    imgSrc="/images/software/github.png"
                    title="Joe's GitHub Profile"
                />
            </PhotoLinks>
        </Page>
    );
};

export default SoftwarePage;
