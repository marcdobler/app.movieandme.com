const initialState = { historicFilms: [] }

function manageHistoricFilms(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'TOGGLE_FILMDETAIL':
            const addHistoricFilmsIndex = state.historicFilms.findIndex(item => item.id === action.value.id)
            if (addHistoricFilmsIndex === -1) {
                nextState = {
                    ...state,
                    historicFilms: [...state.historicFilms, action.value]
                }
            }
            return nextState || state
        case 'REMOVE_HISTORIC_FILM':
            const removeHistoricFilmsIndex = state.historicFilms.findIndex(item => item.id === action.value.id)
            if (removeHistoricFilmsIndex !== -1) {
                nextState = {
                    ...state,
                    historicFilms: state.historicFilms.filter((item, index) => index !== removeHistoricFilmsIndex)
                }
            }
            return nextState || state
        case 'RESET_HISTORIC':
            nextState = {
                ...state,
                historicFilms: []
            }
            return nextState || state
        default:
            return state
    }
}

export default manageHistoricFilms