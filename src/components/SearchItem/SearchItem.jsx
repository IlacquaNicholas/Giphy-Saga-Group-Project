import {useDispatch} from 'react-redux';
import {useState} from 'react';

function SearchItem({search}){

    const [category, setCategory] = useState('funny');

    const [button, setButton] = useState(false);

    const dispatch = useDispatch();

    function chooseCategory(event)  {
        event.preventDefault();
        setCategory(event.target.value);
    };

    function handleAddToFavorites(event){
        event.preventDefault();
        console.log('in handleAddToFavorites');
        dispatch({
            type: 'ADD_TO_FAVORITES',
            payload: {category: category, url: search.images.original.url}
        });
        setButton(!button);
    };

    return(
        
        <div>
            <img src={search.images.original.url} />
            <br />
                <form onSubmit={handleAddToFavorites}>
                        
                        <select onChange={chooseCategory}>
                            <option value="funny">Funny</option>
                            <option value="cohort">Cohort</option>
                            <option value="cartoon">Cartoon</option>
                            <option value="nsfw">NSFW</option>
                            <option value="meme">Meme</option>
                        </select>
                        <button>{button ? 'Favorite' : 'Added'}</button>
                    </form>
            
        </div>
    );
};

export default SearchItem;