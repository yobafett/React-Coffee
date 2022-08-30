import './nav-bar-item.sass';

function NavBarItem(props) {
    const { text, color, onClick, id } = props;

    return (
        <div className="nav-bar-item">
            <span className={`text-${color}`}>{text}</span>
        </div>
    );
}

export default NavBarItem;