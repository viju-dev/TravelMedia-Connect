import {FiSearch}  from "react-icons/fi";
const SearchBar = (props) => {
    return (
        <div className="searchContainer">
           <div className="searchIconBox">
                <FiSearch/>
           </div>
            <input className="searchBar" placeholder="Search here..."/>
        </div>
    )
}

export default SearchBar;