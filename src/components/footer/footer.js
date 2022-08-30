import NavBar from '../nav-bar/nav-bar';
import Separator from '../separator/separator';

import './footer.sass';

function Footer(props) {
    const { navLogo, navItems, color } = props;

    return (
        <div className="footer" >
            <NavBar navLogo={navLogo} navItems={navItems} color={color} />
            <Separator color={color} />
        </div>
    );
}

export default Footer;