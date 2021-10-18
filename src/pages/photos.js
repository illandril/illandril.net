import Page from '../components/Page.js';
import PhotoLinks, { PhotoLink } from '../components/PhotoLinks.js';

import './photos.scss';

const PHOTO_EMAIL = 'photos@spandrusyszyn.com';
const PhotosPage = () => {
    return (
        <Page
            title="Photos by Joe Spandrusyszyn's"
            subtitle="Photos"
            description="Links to collections of photos by Joe Spandrusyszyn"
        >
            <PhotoLinks>
                <PhotoLink href="https://500px.com/illandril" imgSrc="/images/photos/500px.jpg" title="500px" />
                <PhotoLink
                    href="https://www.flickr.com/photos/illandril/sets/"
                    imgSrc="/images/photos/flickr.jpg"
                    title="Flickr"
                />
                <PhotoLink
                    href="https://www.jungledragon.com/user/1559/joe_spandrusyszyn.html"
                    imgSrc="/images/photos/jungledragon.jpg"
                    title="JungleDragon"
                />
            </PhotoLinks>
            <div className="licensing">
                <div className="title">Photo Prints and Licensing</div>
                <div className="details">
                    Most of my photos can be purchased as prints (to hang in your house and/or place of business) and
                    can be licensed (for use in a book, website, packaging, etc). For prints, pricing will vary based on
                    photo, print size, and print material (poster, framed, canvas, etc). For licensing, pricing will
                    vary based on photo, usage, and specific license terms. Educational and scientific usages will
                    usually be cheap (potentially free).
                    <br />
                    Send an email to <a href={`mailto:${PHOTO_EMAIL}`}>{PHOTO_EMAIL}</a> if you are interested in
                    purchasing a print or license, and I will get back to you as soon as I can.
                </div>
            </div>
        </Page>
    );
};

export default PhotosPage;
