import AboutUs from '../about-us/about-us';

import './about-pic.sass';

function AboutPic(props) {
    const { aboutUsText, aboutImg } = props;

    return (
        <div className="about-pic">
            <div className="wrapper">
                <img className="about-pic" src={aboutImg} alt="" />
                <AboutUs aboutUsText={aboutUsText} />
            </div>
            <div className="simple-separator"></div>
        </div>
    );
}

export default AboutPic;