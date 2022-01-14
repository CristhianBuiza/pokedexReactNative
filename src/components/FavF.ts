const initialState = { favoritesFile: [] }

function toggleFavorite(state = initialState, action) {
    let nextState
    switch(action.type) {
        case 'TOGGLE_FARORITE':
            const favoritesFileIndex = state.favoritesFile.findIndex(item => item.id === action.value.id)
            if (favoritesFileIndex !== -1) {
                //supp
                nextState = {
                    ...state,
                    favoritesFile: state.favoritesFile.filter( (item, index) => index !== favoritesFileIndex)               
                }
            }
            else {
                //ajout
                nextState = {
                ...state,
                    favoritesFile: [ ...state.favoritesFile, action.value ]
            }
        }
            return nextState || state
        default:
            return state
    }
}

  export default toggleFavorite