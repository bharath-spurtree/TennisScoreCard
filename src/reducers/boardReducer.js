import actions from "../constants/actions"

const initialState = {
    form: null,
    game: [],
    headerSet: [],
    activeSet: 0,
    winningScore: 99,
    endGame: { status: false },
    result: null
}

export default board = (state = initialState, action) => {
    switch (action.type) {
        case actions.START_GAME: {
            return {
                ...state,
                form: action.payload.form,
                game: action.payload.game,
                headerSet: action.payload.headerSet,
                winningScore: action.payload.winningScore
            }
        }
        case actions.ADD_POINT: {
            return {
                ...state,
                game: action.payload.game,
                activeSet: action.payload.activeSet,
                endGame: action.payload.endGame,
                result: action.payload.result
            }
        }
        default: return state
    }
}