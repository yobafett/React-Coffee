
import './filter.sass';

function Filter(props) {
    const { label, onFilterChange, filters, currentFilter } = props;

    const filterBtns = filters.map((item) => {
        const activityClass = item.name.toLowerCase() === currentFilter ? 'filter-btn active' : 'filter-btn';

        return (
            <button
                key={item.id}
                className={activityClass}
                onClick={() => { onFilterChange(item.name); }}>
                {item.name}
            </button>
        );
    })

    return (
        <div className="filter" >
            <span>{label}</span>
            <div className="filter-btns">
                {filterBtns}
            </div>
        </div>
    );
}

export default Filter;