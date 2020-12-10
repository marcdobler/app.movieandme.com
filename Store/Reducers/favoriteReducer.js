const initialState = { favoritesFilm: [] }

function toggleFavorite(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            const favoritesFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
            if (favoritesFilmIndex !== -1) {
                // The film is already in the favorites, we delete it from the list
                nextState = {
                    ...state,
                    favoritesFilm: state.favoritesFilm.filter((item, index) => index !== favoritesFilmIndex)
                }
            } else {
                // The film is not in the favorite films, we add it to the list
                nextState = {
                    ...state,
                    favoritesFilm: [...state.favoritesFilm, action.value]
                }
            }
            return nextState || state
        default:
            return state
    }
}

export default toggleFavorite