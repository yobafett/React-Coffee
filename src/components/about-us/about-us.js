import H2 from '../h2/h2';
import Separator from '../separator/separator';

import './about-us.sass';

function AboutUs(props) {
    const { title, content } = props;

    return (
        <div className="about-us">
            <H2 text={title} color={'#000'} shadow={false} />
            <Separator color={'black'} />
            <p>{content}</p>
        </div>
    );
}

export default AboutUs;