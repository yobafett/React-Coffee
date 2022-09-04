
import './search.sass';

function Search(props) {
    const { label, placeholder, onSearchChange } = props;

    return (
        <div className="search" >
            <span>{label}</span>
            <input type="text" onChange={onSearchChange} placeholder={placeholder} />
        </div>
    );
}

export default Search;