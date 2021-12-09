

function SearchItem({search}){
    return(
        <div>
            <img src={search.images.original.url} />
        </div>
    );
};

export default SearchItem;