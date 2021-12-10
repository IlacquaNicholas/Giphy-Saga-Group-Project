import FavoriteItem from '../FavoriteItem/FavoriteItem.jsx';
import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';


function Favorites(){
    const dispatch = useDispatch();
    const favoritesReducer = useSelector(store => store.favoritesReducer);
    const [category, setCategory] = useState('all');
    const history = useHistory();

    useEffect(() => {
        getFavorites();
    }, []);

    function getFavorites(){
        dispatch({
            type: 'GET_FAVORITES'
        });
    };

    function chooseCategory(event)  {
        event.preventDefault();
        setCategory(event.target.value);
    };

    function setFavoriteCategory(event){
        event.preventDefault();
        dispatch({
            type: 'GET_FAVORITES_BY_CATEGORY',
            payload: category
        });
    };

    function goToSearch(){
        history.push('/')
    };

    return(
        <div>
            <button onClick={goToSearch}>Go to Search</button>
            <form onSubmit={setFavoriteCategory}>  
                <select onChange={chooseCategory}>
                    <option value="all">All</option>
                    <option value="funny">Funny</option>
                    <option value="cohort">Cohort</option>
                    <option value="cartoon">Cartoon</option>
                    <option value="nsfw">NSFW</option>
                    <option value="meme">Meme</option>
                </select>
                <button>Filter</button>
            </form>
            <ul>
                {favoritesReducer.map((favoriteItem) =>{
                    return (<span key={favoriteItem.id}> <FavoriteItem favoriteItem={favoriteItem} /></span>);
                })}
            </ul>
        </div>
    );
};

export default Favorites;