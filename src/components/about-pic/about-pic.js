import AboutUs from '../about-us/about-us';

import './about-pic.sass';

function AboutPic(props) {
    const aboutUsText = `
    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

    Afraid at highly months do things on at. Situation recommend objection do intention
    so questions. 
    As greatly removed calling pleased improve an. Last ask him cold feel
    met spot shy want. Children me laughing we prospect answered followed. At it went
    is song that held help face.`;
    const img = require(`../../assets/img/girl-865304_1920.jpg`);

    return (
        <div className="about-pic">
            <div className="wrapper">
                <img className="about-pic" src={img} alt="" />
                <AboutUs aboutUsText={aboutUsText} />
            </div>
            <div className="simple-separator"></div>
        </div>
    );
}

export default AboutPic;