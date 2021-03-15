import './search-panel.scss';

const SearchPanel = () => {
    const placeholder = 'Поиск по записям'
    return (
        <input type="text"
               className="form-control search-input"
               placeholder={placeholder}/>

    )
}

export default SearchPanel;