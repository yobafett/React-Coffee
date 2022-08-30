import H2 from '../h2/h2';
import Separator from '../separator/separator';

import './about-us.sass';

function AboutUs(props) {
    return (
        <div className="about-us">
            <H2 text={'About us'} color={'#000'} shadow={false} />
            <Separator color={'black'} />
            <p>
                {props.aboutUsText}
            </p>
        </div>
    );
}

export default AboutUs;