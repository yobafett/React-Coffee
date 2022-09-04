import { Fragment } from 'react';
import AboutUs from '../about-us/about-us';
import AboutPic from '../about-pic/about-pic';

import './about-item.sass';

function AboutItem(props) {
    const { title, country, price, description, img } = props.item;

    const content = (
        <Fragment>
            <span><b>Country: </b>{country}</span>
            <span><b>Description: </b>{description}</span>
            <span>
                <b>Price: </b>
                <span className='price'>{price}$</span>
            </span>
        </Fragment>
    )

    return (
        <div className="item">
            <AboutPic title={title} content={content} img={img} />
        </div>
    );
}

export default AboutItem;