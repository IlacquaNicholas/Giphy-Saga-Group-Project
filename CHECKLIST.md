[]Setup
    [x]Make sure everyone has their database setup.
    [x]npm install all the things.
    [x]Setup components
        [x]Favorites
        [x]FavoriteItem
        [x]Search
        [x]SearchItem
    [x]Basic CSS

[]App Component
    []Wrap Search and Favorite components in their own routes.
    []Import Search Component
    []Import Favorite Component

[x]Search component
    [x]Tie route to Favorite component on a button.
    [x]Input field for search
    [x]setState for search string value
    [x]addSearch function to make a 'POST' dispatch call to be intercepted by a saga <--->
    [x]reduxStore variable for the gifs to be displayed
    [x]Map through gif store. Append 1 SearchItem per map

[]SearchItem component
    []Tie favorite button to unique item.
    []Favorite button tied to 'POST' dispatch to be intercepted by a saga <--->
        []Research prefilled input fields
        []FORCE user to select one of the favorite fields


[]Favorite component
    []Tie route to Favorite component on a button.
    []useEffect
        []Function that dispatches to be intercepted by a saga <----> SELECT *?
    []reduxStore variable for the favorited gifs to be displayed
    []Map through the gif favorites store. Append 1 FavoriteItem per map.
    []Create buttons for each "favorite category"
        []Use string literal to change `GET /api/${category}` route tied to each button.

[]FavoriteItem component
    []Render item.