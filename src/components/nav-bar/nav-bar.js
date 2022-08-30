import NavBarLogo from '../nav-bar-logo/nav-bar-logo';
import NavBarItem from '../nav-bar-item/nav-bar-item'

import './nav-bar.sass';

function NavBar(props) {
    const { navLogo, navItems, color } = props;

    const items = navItems.map((item) => {
        return (
            <NavBarItem
                text={item.title}
                onClick={item.onClick}
                color={color}
                key={item.id} />
        );
    })

    return (
        <div className="nav-bar">
            <NavBarLogo
                text={navLogo.title}
                onClick={navLogo.onClick}
                color={color} />
            {items}
        </div>
    );
}

export default NavBar;