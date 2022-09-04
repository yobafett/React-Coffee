import AboutUs from '../about-us/about-us';

import './about-pic.sass';

function AboutPic(props) {
    const { title, content, img } = props;

    return (
        <div className="about-pic">
            <div className="wrapper">
                <img className="about-pic" src={img} alt="" />
                <AboutUs aboutUsTitle={title} aboutUsText={content} />
            </div>
            <div className="simple-separator"></div>
        </div>
    );
}

export default AboutPic;