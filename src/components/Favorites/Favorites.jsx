import FavoriteItem from '../FavoriteItem/FavoriteItem.jsx';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function Favorites(){
    const dispatch = useDispatch();
    const favoritesReducer = useSelector(store => store.favoritesReducer);

    useEffect(() => {
        getFavorites();
    }, []);

    function getFavorites(){
        dispatch({
            type: 'GET_FAVORITES'
        });
    };


    return(
        <div>
            <ul>
                {favoritesReducer.map((favoriteItem, i) =>{
                    return (<span key={i}> <FavoriteItem favoriteItem={favoriteItem} /></span>);
                })}
            </ul>
        </div>
    );
};

export default Favorites;