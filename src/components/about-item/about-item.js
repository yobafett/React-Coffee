import { Fragment } from 'react';
import AboutUs from '../about-us/about-us';

import './about-item.sass';

function AboutItem(props) {
    const { title, country, price, description, img } = props.item;

    const aboutUsText = (
        <Fragment>
            <span><b>Country: </b>{country}</span>
            <span><b>Description: </b>{description}</span>
            <span><b>Price: </b>{price}</span>
        </Fragment>
    )

    return (
        <div className="about-item">
            <div className="wrapper">
                <img className="about-pic" src={img} alt="" />
                <AboutUs aboutUsTitle={title} aboutUsText={aboutUsText} />
            </div>
            <div className="simple-separator"></div>
        </div>
    );
}

export default AboutItem;