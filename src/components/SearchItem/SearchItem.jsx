import {useDispatch} from 'react-redux';

function SearchItem({search}){
    const dispatch = useDispatch();

    function handleAddToFavorites(){
        console.log('in handleAddToFavorites');
        dispatch({
            type: 'ADD_TO_FAVORITES',
            payload: search.images.original.url
        });
    };

    return(
        <div>
            <img src={search.images.original.url} />
            <button onClick={handleAddToFavorites}>Add to Favorites!</button>
        </div>
    );
};

export default SearchItem;