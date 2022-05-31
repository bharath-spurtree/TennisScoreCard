import actions from "../constants/actions"
import { calcCurrentSet, calcIncrementSet } from "../utils/board"

export const startGameAction = (form) => (dispatch) => {
    let setArray = []
    let set = []
    for (let i = 0; i < form.set; i++) {
        setArray.push(0)
        set.push(i + 1)
    }
    let game = form.players.map((player) => {
        return { player, sets: setArray, currentSet: 0 }
    })
    let score = ((parseInt(form.set) + 1) / 2) * 6
    dispatch({
        type: actions.START_GAME,
        payload: { form, game, headerSet: set, winningScore: score }
    })
}

export const addPointAction = (index) => (dispatch, getState) => {
    const state = getState()
    const board = state.board
    let scoredPlayerIndex = index
    const otherPlayerIndex = scoredPlayerIndex === 0 ? 1 : 0
    const scoredPlayer = board.game[scoredPlayerIndex]
    const otherPlayer = board.game[otherPlayerIndex]

    const { scoredPlayerCurrSet, otherPlayerCurrSet, incrementSet } = calcCurrentSet(scoredPlayer.currentSet, otherPlayer.currentSet)
    const { scoredPlayerSet, finishGame, setActive } = incrementSet && calcIncrementSet(scoredPlayer.sets, board.form, board.activeSet, board.winningScore)

    scoredPlayer.currentSet = scoredPlayerCurrSet
    scoredPlayer.sets = incrementSet ? scoredPlayerSet : scoredPlayer.sets
    otherPlayer.currentSet = otherPlayerCurrSet

    const game = scoredPlayerIndex == 0 ? [scoredPlayer, otherPlayer] : [otherPlayer, scoredPlayer]

    let res = null
    if (finishGame) {
        const runnerIndex = scoredPlayerIndex === 0 ? 1 : 0
        const winner = game[scoredPlayerIndex]
        const runner = game[runnerIndex]
        const sets = board.form.set
        const score = winner && winner.sets.reduce((final, set, idx) => final = final + `${set}-${runner.sets[idx]}${idx !== sets - 1 ? ', ' : ''}`, '')
        res = winner && winner.player + ` Wins  ( ${score} ) `
    }

    dispatch({
        type: actions.ADD_POINT,
        payload: {
            activeSet: setActive ? board.activeSet + 1 : board.activeSet,
            game: game,
            endGame: finishGame ? { status: true, winner: scoredPlayerIndex } : { status: false },
            result: res && res
        }
    })
}