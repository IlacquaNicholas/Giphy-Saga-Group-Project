import SearchItem from '../SearchItem/SearchItem.jsx';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';



function Search(){
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const searchReducer = useSelector(store => store.searchReducer);


    const handleSubmit = ()=>{
        console.log('search is:', search);
        dispatch({
            type: 'GET_SEARCH',
            payload: search
        })
        setSearch('');
    };

    console.log(searchReducer);

    return(
        <div className="searchDiv">
            <input 
            value={search}
            onChange={(event)=> setSearch(event.target.value)}
            /><button onClick={handleSubmit}>Search</button>
            <br />
            
            {searchReducer.map((search, i) => {
                return  <div className="gif" key={i}><SearchItem search={search} /></div>;
            })}
            {/* <img src={searchReducer[0].images.original.url} /> */}
            
            <button>Go to Favorites</button>
        </div>
    );
};

export default Search;