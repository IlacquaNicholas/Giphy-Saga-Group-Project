import SearchItem from '../SearchItem/SearchItem.jsx';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';



function Search(){
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const searchReducer = useSelector(store => store.searchReducer);
    const history = useHistory();


    const handleSubmit = ()=>{
        console.log('search is:', search);
        dispatch({
            type: 'GET_SEARCH',
            payload: search
        })
        setSearch('');
    };

    const switchToFavorite = ()=>{
        history.push('/favorites')
    }

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
            
            <button onClick={switchToFavorite}>Go to Favorites</button>
        </div>
    );
};

export default Search;