import './nav-bar-item.sass';

function NavBarItem(props) {
    const { text, onClick, id } = props;

    return (
        <div className="nav-bar-item">
            <span className='text'>{text}</span>
        </div>
    );
}

export default NavBarItem;