import React from 'react';
import {useDispatch} from 'react-redux';

function FavoriteItem({favoriteItem}){
    const dispatch = useDispatch();

    const removeFavorite = () => {
        dispatch({
            type: 'DELETE_FAVORITE',
            payload: favoriteItem.id
        });
    };


    return(
        <div>
            <img src={favoriteItem.url} />
            <button onClick={removeFavorite}>Unfavorite</button>
        </div>
    );
};

export default FavoriteItem;