import React from 'react';

const removeFavorite = () => {
    dispatch({

    });
};

function FavoriteItem({favoriteItem}){
    return(
        <div>
            <img src={favoriteItem.url} />
            <button onClick={removeFavorite}>Delete from Favorites</button>
        </div>
    );
};

export default FavoriteItem;